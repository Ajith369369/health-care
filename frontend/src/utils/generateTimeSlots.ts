import { TimeSlot } from "../interfaces/doctorCalendar";

export const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let i = 9; i <= 17; i++) {
    const startHour = i > 12 ? i - 12 : i;
    const endHour = i + 1 > 12 ? i - 11 : i + 1;
    const period = i >= 12 ? "PM" : "AM";
    const nextPeriod = i + 1 >= 12 ? "PM" : "AM";
    slots.push({
      start: `${startHour}:00 ${period}`,
      end: `${endHour}:00 ${nextPeriod}`,
    });
  }
  return slots;
};