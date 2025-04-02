import { TimeSlot } from './doctorInterface';

export interface TimePickerModalProps {
  onTimeSelect: (selectedSlots: TimeSlot[]) => void;
}
