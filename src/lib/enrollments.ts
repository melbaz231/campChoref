import { supabase } from './supabase';
import { camp } from '../data/camp';
import type { EnrollmentFormValues, EnrollmentRow, PaymentMethod } from '../types';

function toRow(values: EnrollmentFormValues): EnrollmentRow {
  return {
    camper_first_name: values.camperFirstName.trim(),
    camper_last_name: values.camperLastName.trim(),
    entering_grade: values.enteringGrade,
    parent_name: values.parentName.trim(),
    parent_email: values.parentEmail.trim().toLowerCase(),
    parent_phone: values.parentPhone.trim(),
    weeks: values.weeks,
    emergency_contact_name: values.emergencyContactName.trim(),
    emergency_contact_phone: values.emergencyContactPhone.trim(),
    medical_notes: values.medicalNotes.trim() || null,
    payment_method: values.paymentMethod as PaymentMethod,
    notes: values.notes.trim() || null,
    season: camp.season,
  };
}

export async function submitEnrollment(values: EnrollmentFormValues): Promise<void> {
  if (!supabase) {
    throw new Error(
      `Online registration is not available right now. Please call ${camp.phone} or email ${camp.email} to enroll.`,
    );
  }

  const { error } = await supabase.from('enrollments').insert(toRow(values));

  if (error) {
    throw new Error(
      `We could not save your registration (${error.message}). Please try again, or contact ${camp.email}.`,
    );
  }
}
