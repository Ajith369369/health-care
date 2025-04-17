export type UserSignupValidation = Partial<{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}>;

export type DoctorSignupValidation = Partial<{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  department: string;
  education: string;
  description: string;
  experience: string;
  licenseCertificate: string;
}>;

export interface UserSignupValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface DoctorSignupValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  department: string;
  education: string;
  description: string;
  experience: string;
  licenseCertificate: File | null;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface ResetPasswordValues {
  password: string;
  confirmPassword: string;
}
