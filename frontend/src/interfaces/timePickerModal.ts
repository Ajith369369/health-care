import { TimeSlot } from "./doctor";

export interface TimePickerModalProps {
  onTimeSelect: (selectedSlots: TimeSlot[]) => void;
}
