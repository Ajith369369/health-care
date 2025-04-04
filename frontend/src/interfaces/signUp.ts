export interface DoctorSignupFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  department: string;
  consultationType: string;
  education: string;
  description: string;
  experience: string;
  password: string;
  confirmPassword: string;
  licenseCertificate: File | null;
}

export interface Department {
  _id: string;
  departmentName: string;
  isListed: boolean;
  createdAt: string;
  updatedAt: string;
}
