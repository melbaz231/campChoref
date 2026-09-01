export type PaymentMethod = 'cash' | 'check' | 'quickpay' | 'zelle';

/** Shape of the form as the user fills it in. */
export interface EnrollmentFormValues {
  camperFirstName: string;
  camperLastName: string;
  enteringGrade: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  weeks: string[];
  emergencyContactName: string;
  emergencyContactPhone: string;
  medicalNotes: string;
  paymentMethod: PaymentMethod | '';
  notes: string;
}

/** Row shape written to the Supabase `enrollments` table (snake_case). */
export interface EnrollmentRow {
  camper_first_name: string;
  camper_last_name: string;
  entering_grade: string;
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  weeks: string[];
  emergency_contact_name: string;
  emergency_contact_phone: string;
  medical_notes: string | null;
  payment_method: PaymentMethod;
  notes: string | null;
  season: number;
}

export type FormErrors = Partial<Record<keyof EnrollmentFormValues, string>>;
