export type DoctorStatusParams {
  doctorId?: string;
}

export interface DoctorStatusFormData {
  doctorName: string;
  department: string;
  profileImage: string;
  status: string;
  rejectedReason: string;
  email: string;
  phoneNumber: string;
  description: string;
  education: string;
  experience: string;
  age: string;
  licenseCertificate: string;
}

export interface DoctorStatusModal {
  isModalOpen: boolean;
}