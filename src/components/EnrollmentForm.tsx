import { useId, useState, type FormEvent } from 'react';
import { camp, gradeOptions, paymentOptions, weekOptions } from '../data/camp';
import { submitEnrollment } from '../lib/enrollments';
import { isSupabaseConfigured } from '../lib/supabase';
import type { EnrollmentFormValues, FormErrors, PaymentMethod } from '../types';

const emptyForm: EnrollmentFormValues = {
  camperFirstName: '',
  camperLastName: '',
  enteringGrade: '',
  parentName: '',
  parentEmail: '',
  parentPhone: '',
  weeks: [],
  emergencyContactName: '',
  emergencyContactPhone: '',
  medicalNotes: '',
  paymentMethod: '',
  notes: '',
};

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const DIGITS_ONLY = /\D/g;

function validate(values: EnrollmentFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.camperFirstName.trim()) errors.camperFirstName = "Enter the camper's first name.";
  if (!values.camperLastName.trim()) errors.camperLastName = "Enter the camper's last name.";
  if (!values.enteringGrade) errors.enteringGrade = 'Select the grade he is entering.';
  if (!values.parentName.trim()) errors.parentName = "Enter a parent or guardian's name.";

  if (!values.parentEmail.trim()) {
    errors.parentEmail = 'Enter an email address.';
  } else if (!EMAIL_PATTERN.test(values.parentEmail.trim())) {
    errors.parentEmail = 'Enter a valid email address.';
  }

  if (values.parentPhone.replace(DIGITS_ONLY, '').length < 10) {
    errors.parentPhone = 'Enter a 10-digit phone number.';
  }

  if (values.weeks.length === 0) errors.weeks = 'Choose at least one week.';

  if (!values.emergencyContactName.trim()) {
    errors.emergencyContactName = 'Enter an emergency contact name.';
  }

  if (values.emergencyContactPhone.replace(DIGITS_ONLY, '').length < 10) {
    errors.emergencyContactPhone = 'Enter a 10-digit emergency phone number.';
  }

  if (!values.paymentMethod) errors.paymentMethod = 'Choose how you plan to pay.';

  return errors;
}

const fieldClass =
  'w-full rounded-xl border border-steel-300 bg-white px-4 py-3 text-steel-900 placeholder:text-steel-400 transition focus:border-steel-600 focus:outline-none';
const labelClass = 'mb-1.5 block text-sm font-semibold text-steel-800';
const errorClass = 'mt-1.5 text-sm font-medium text-red-600';

export default function EnrollmentForm() {
  const formId = useId();
  const [values, setValues] = useState<EnrollmentFormValues>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update<K extends keyof EnrollmentFormValues>(key: K, value: EnrollmentFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!(key in current)) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function toggleWeek(weekId: string) {
    update(
      'weeks',
      values.weeks.includes(weekId)
        ? values.weeks.filter((id) => id !== weekId)
        : [...values.weeks, weekId],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      await submitEnrollment(values);
      setValues(emptyForm);
      setStatus('success');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong.');
      setStatus('idle');
    }
  }

  if (status === 'success') {
    return (
      <section id="register" className="scroll-mt-20 bg-white py-20">
        <div className="mx-auto max-w-2xl px-5">
          <div className="rounded-3xl border-2 border-sun-500 bg-sun-100 p-10 text-center">
            <span aria-hidden="true" className="text-5xl">
              🎉
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-steel-900">You&apos;re registered!</h2>
            <p className="mt-3 text-steel-700">
              We received the registration and {camp.director} will follow up with location and
              payment details before camp starts.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-8 rounded-full bg-steel-600 px-7 py-3 font-semibold text-white transition hover:bg-steel-700"
            >
              Register another camper
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-grape-500">
            Hurry — space is limited
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-steel-900 sm:text-5xl">
            Register for camp
          </h2>
          <p className="mt-4 text-lg text-steel-700">
            Tuition is {camp.costLabel}, due at the start of each week.
          </p>
        </div>

        {!isSupabaseConfigured && (
          <p className="mt-8 rounded-2xl border border-sand-500 bg-sand-100 p-4 text-sm text-sand-600">
            Online registration is not connected yet. Call or text {camp.director} at {camp.phone} to
            sign up.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 grid gap-6 rounded-3xl border border-steel-200 bg-steel-50 p-6 shadow-sm sm:grid-cols-2 sm:p-8"
        >
          <div>
            <label className={labelClass} htmlFor={`${formId}-camperFirstName`}>
              Camper first name
            </label>
            <input
              id={`${formId}-camperFirstName`}
              className={fieldClass}
              value={values.camperFirstName}
              onChange={(e) => update('camperFirstName', e.target.value)}
              autoComplete="off"
              aria-invalid={Boolean(errors.camperFirstName)}
            />
            {errors.camperFirstName && <p className={errorClass}>{errors.camperFirstName}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor={`${formId}-camperLastName`}>
              Camper last name
            </label>
            <input
              id={`${formId}-camperLastName`}
              className={fieldClass}
              value={values.camperLastName}
              onChange={(e) => update('camperLastName', e.target.value)}
              autoComplete="off"
              aria-invalid={Boolean(errors.camperLastName)}
            />
            {errors.camperLastName && <p className={errorClass}>{errors.camperLastName}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor={`${formId}-enteringGrade`}>
              Grade entering
            </label>
            <select
              id={`${formId}-enteringGrade`}
              className={fieldClass}
              value={values.enteringGrade}
              onChange={(e) => update('enteringGrade', e.target.value)}
              aria-invalid={Boolean(errors.enteringGrade)}
            >
              <option value="">Select a grade</option>
              {gradeOptions.map((grade) => (
                <option key={grade} value={grade}>
                  {grade} grade
                </option>
              ))}
            </select>
            {errors.enteringGrade && <p className={errorClass}>{errors.enteringGrade}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor={`${formId}-parentName`}>
              Parent / guardian name
            </label>
            <input
              id={`${formId}-parentName`}
              className={fieldClass}
              value={values.parentName}
              onChange={(e) => update('parentName', e.target.value)}
              autoComplete="name"
              aria-invalid={Boolean(errors.parentName)}
            />
            {errors.parentName && <p className={errorClass}>{errors.parentName}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor={`${formId}-parentEmail`}>
              Email
            </label>
            <input
              id={`${formId}-parentEmail`}
              type="email"
              className={fieldClass}
              value={values.parentEmail}
              onChange={(e) => update('parentEmail', e.target.value)}
              autoComplete="email"
              aria-invalid={Boolean(errors.parentEmail)}
            />
            {errors.parentEmail && <p className={errorClass}>{errors.parentEmail}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor={`${formId}-parentPhone`}>
              Phone
            </label>
            <input
              id={`${formId}-parentPhone`}
              type="tel"
              className={fieldClass}
              value={values.parentPhone}
              onChange={(e) => update('parentPhone', e.target.value)}
              autoComplete="tel"
              placeholder="216-555-0123"
              aria-invalid={Boolean(errors.parentPhone)}
            />
            {errors.parentPhone && <p className={errorClass}>{errors.parentPhone}</p>}
          </div>

          <fieldset className="sm:col-span-2">
            <legend className={labelClass}>Weeks attending</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {weekOptions.map((week) => {
                const checked = values.weeks.includes(week.id);
                return (
                  <label
                    key={week.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition ${
                      checked
                        ? 'border-steel-600 bg-white'
                        : 'border-steel-200 bg-white hover:border-steel-400'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-steel-600"
                      checked={checked}
                      onChange={() => toggleWeek(week.id)}
                    />
                    <span className="text-sm text-steel-900">{week.label}</span>
                  </label>
                );
              })}
            </div>
            {errors.weeks && <p className={errorClass}>{errors.weeks}</p>}
          </fieldset>

          <div>
            <label className={labelClass} htmlFor={`${formId}-emergencyContactName`}>
              Emergency contact name
            </label>
            <input
              id={`${formId}-emergencyContactName`}
              className={fieldClass}
              value={values.emergencyContactName}
              onChange={(e) => update('emergencyContactName', e.target.value)}
              aria-invalid={Boolean(errors.emergencyContactName)}
            />
            {errors.emergencyContactName && (
              <p className={errorClass}>{errors.emergencyContactName}</p>
            )}
          </div>

          <div>
            <label className={labelClass} htmlFor={`${formId}-emergencyContactPhone`}>
              Emergency contact phone
            </label>
            <input
              id={`${formId}-emergencyContactPhone`}
              type="tel"
              className={fieldClass}
              value={values.emergencyContactPhone}
              onChange={(e) => update('emergencyContactPhone', e.target.value)}
              aria-invalid={Boolean(errors.emergencyContactPhone)}
            />
            {errors.emergencyContactPhone && (
              <p className={errorClass}>{errors.emergencyContactPhone}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor={`${formId}-medicalNotes`}>
              Allergies or medical notes{' '}
              <span className="font-normal text-steel-500">(optional)</span>
            </label>
            <textarea
              id={`${formId}-medicalNotes`}
              rows={3}
              className={fieldClass}
              value={values.medicalNotes}
              onChange={(e) => update('medicalNotes', e.target.value)}
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor={`${formId}-paymentMethod`}>
              Payment method
            </label>
            <select
              id={`${formId}-paymentMethod`}
              className={fieldClass}
              value={values.paymentMethod}
              onChange={(e) => update('paymentMethod', e.target.value as PaymentMethod)}
              aria-invalid={Boolean(errors.paymentMethod)}
            >
              <option value="">Select a payment method</option>
              {paymentOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.paymentMethod && <p className={errorClass}>{errors.paymentMethod}</p>}
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor={`${formId}-notes`}>
              Anything else we should know?{' '}
              <span className="font-normal text-steel-500">(optional)</span>
            </label>
            <textarea
              id={`${formId}-notes`}
              rows={3}
              className={fieldClass}
              value={values.notes}
              onChange={(e) => update('notes', e.target.value)}
            />
          </div>

          {submitError && (
            <p
              role="alert"
              className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-700 sm:col-span-2"
            >
              {submitError}
            </p>
          )}

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-full bg-steel-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-steel-900/20 transition hover:bg-steel-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitting' ? 'Submitting…' : 'Submit registration'}
            </button>
            <p className="mt-3 text-center text-xs text-steel-500">
              Your information is stored securely and only used to run camp.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
