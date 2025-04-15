import { doctorVerificationRejectedEmailPage } from "../../../utils/doctorVerificationRejectionEmail";
import sentMail from "../../../utils/sendMail";
import { doctorDbInterface } from "../../interfaces/doctorDBRepository";
import { userDbInterface } from "../../interfaces/userDbRepository";

export const getUsers = async (userDbRepository: ReturnType<userDbInterface>) =>
  await userDbRepository.getAllUsers();

export const getAllDoctors = async (
  doctorDbRepository: ReturnType<doctorDbInterface>
) => await doctorDbRepository.getAllDoctors();

export const getAllTheAppointments = async (
  doctorDbRepository: ReturnType<doctorDbInterface>
) => await doctorDbRepository.getAllAppointments();

export const getDoctors = async (
  {
    searchQuery,
    department,
    selectedDate,
    selectedTimeSlot,
    page,
    limit,
  }: {
    searchQuery?: string;
    department?: string;
    selectedDate?: string;
    selectedTimeSlot?: string;
    page: number;
    limit: number;
  },
  doctorDbRepository: ReturnType<doctorDbInterface>
) => {
  return await doctorDbRepository.getFilteredDoctors({
    searchQuery,
    department,
    selectedDate,
    selectedTimeSlot,
    page,
    limit,
  });
};

export const getSingleDoctor = async (
  id: string,
  doctorDbRepository: ReturnType<doctorDbInterface>
) => await doctorDbRepository.getDoctorById(id);

export const getSingleUser = async (
  id: string,
  userDbRepository: ReturnType<userDbInterface>
) => await userDbRepository.getUserbyId(id);

export const getDoctor = async (
  id: string,
  status: string,
  doctorDbRepository: ReturnType<doctorDbInterface>
) => await doctorDbRepository.getDoctorByIdUpdate(id, status);

export const getDoctorRejected = async (
  id: string,
  status: string,
  reason: string,
  doctorDbRepository: ReturnType<doctorDbInterface>
) => {
  await doctorDbRepository.getDoctorByIdUpdateRejected(id, status, reason);
  const doctor = await doctorDbRepository.getDoctorById(id);
  if (doctor) {
    const doctorName = doctor.doctorName;
    const email = doctor.email;
    const emailSubject = "Verification Rejected";
    sentMail(
      email,
      emailSubject,
      doctorVerificationRejectedEmailPage(doctorName, reason)
    );
  } else {
    console.error("Doctor not found");
  }
};
