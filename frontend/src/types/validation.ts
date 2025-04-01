export type SignupValidation = Partial<{
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

export interface SignupValues {
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
