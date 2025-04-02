export interface DoctorInterface {
  id: any;
  _id: string;
  doctorName: string;
  email: string;
  phone: string;
  department: string;
  description?: string;
  profileImage?: string;
  licenseCertificate?: string;
  education?: string;
  role: string;
  isVerified?: boolean;
  isApproved?: boolean;
  isBlocked?: boolean;
  certificateImage?: string;
}

export interface TimeSlot {
  start: Date;
  end: Date;
}

export interface FooterProps {
  style: string;
}
