import Stripe from "stripe";
import { configKeys, STRIPE_SECRET_KEY } from "../../../../config";
import bookingEntity from "../../../../entities/bookingEntity";
import { BookingDbRepositoryInterface } from "../../../interfaces/bookingDbRepository";
import { doctorDbInterface } from "../../../interfaces/doctorDBRepository";

export const appointmentBooking = async (
  data: any,
  userId: string,
  bookingDbRepository: ReturnType<BookingDbRepositoryInterface>,
  doctorDbRepository: ReturnType<doctorDbInterface>
) => {
  const {
    doctorId,
    patientDetails: { patientName, patientAge, patientNumber, patientGender },
    consultationType,
    fee,
    paymentStatus,
    appointmentStatus,
    appointmentCancelReason,
    date,
    timeSlot,
  } = data;
  const doctorDetails = await doctorDbRepository.getDoctorById(doctorId);
  const appointment = bookingEntity(
    userId,
    doctorId,
    patientName,
    patientAge,
    patientNumber,
    patientGender,
    consultationType,
    fee,
    paymentStatus,
    appointmentStatus,
    appointmentCancelReason,
    date,
    timeSlot
  );

  const booking = await bookingDbRepository.createBooking(appointment);

  return booking;
};

export const checkIsBooked = async (
  data: any,
  userId: any,
  bookingDbRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  const {
    doctorId,
    patientDetails: { patientName, patientAge, patientNumber, patientGender },
    consultationType,
    fee,
    paymentStatus,
    appointmentStatus,
    appointmentCancelReason,
    date,
    timeSlot,
  } = data;
  const appointment = bookingEntity(
    userId,
    doctorId,
    patientName,
    patientAge,
    patientNumber,
    patientGender,
    consultationType,
    fee,
    paymentStatus,
    appointmentStatus,
    appointmentCancelReason,
    date,
    timeSlot
  );

  const isBooked = await bookingDbRepository.deleteSlot(
    doctorId,
    date,
    timeSlot
  );

  return isBooked;
};

export const createPayment = async (
  userName: string,
  email: string,
  bookingId: string,
  totalAmount: number
) => {
  const stripe = new Stripe(STRIPE_SECRET_KEY);

  const customer = await stripe.customers.create({
    name: userName,
    email: email,
    address: {
      line1: "Los Angeles, LA",
      country: "US",
    },
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer: customer.id,
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: { name: "Guests", description: "Table booking" },
          unit_amount: Math.round(totalAmount * 100),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${configKeys.CLIENT_PORT}/payment_status/${bookingId}?success=true`,
    cancel_url: `${configKeys.CLIENT_PORT}/payment_status/${bookingId}?success=false`,
  });
  return session.id;
};

export const updateBookingStatus = async (
  id: string,
  paymentStatus: "Paid" | "Failed",
  bookingRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  const bookingStatus = paymentStatus === "Paid" ? "Confirmed" : "Pending";
  const updationData: Record<string, any> = {
    paymentStatus,
    bookingStatus,
  };

  const bookingData = await bookingRepository.updateBookingDetails(
    id,
    updationData
  );

  return bookingData;
};

export const getBookingByBookingId = async (
  bookingID: string,
  bookingRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  const bookingDetails = await bookingRepository.getBookingById(bookingID);
  return { bookingDetails };
};

export const getBookingByUserId = async (
  userId: string,
  bookingRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  const bookingDetails = await bookingRepository.getAllBookingByUserId(userId);
  return { bookingDetails };
};

export const changeAppointmentstaus = async (
  appointmentStatus: string,
  cancelReason: string,
  id: any,
  bookingRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  const changeStatus = await bookingRepository.changeBookingstatus(
    appointmentStatus,
    cancelReason,
    id
  );

  const booking = await bookingRepository.getBookingById(id);

  //@ts-ignore
  const fee: any = booking?.fee;
  //@ts-ignore
  const UserId = booking?.userId;

  //@ts-ignore
  const changeWalletAmount = await bookingRepository.changeWallet(fee, UserId);

  const walletTransaction = await bookingRepository.creditAmount(fee, UserId);

  return { changeStatus, changeWalletAmount };
};

export const getWalletBalance = async (
  userId: any,
  bookingRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  const balance = await bookingRepository.getBalanceAmount(userId);
  return balance;
};

export const walletDebit = async (
  userId: any,
  Amount: any,
  bookingRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  const debit = await bookingRepository.debitAmount(userId, Amount);
};

export const changeWallet = async (
  bookingId: string,
  fees: any,
  bookingRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  // Retrieve the booking entity by its ID
  const booking = await bookingRepository.getBookingById(bookingId);

  //@ts-ignore
  const UserId = booking?.userId;

  const changeupdated = await bookingRepository.changeTheWalletAmount(
    fees,
    UserId
  );
};

/**doctor use cases */

export const getBookingByDoctorId = async (
  doctorId: string,
  bookingRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  const bookingDetails = await bookingRepository.getAllBookingByDoctorId(
    doctorId
  );
  return { bookingDetails };
};

export const updateBookingStatusPayment = async (
  id: string,
  bookingRepository: ReturnType<BookingDbRepositoryInterface>
) => {
  const status = await bookingRepository.changeBookingstatusPayment(id);
  return status;
};
