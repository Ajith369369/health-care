export interface TimeSlot {
  start: string;
  end: string;
}

export interface SelectedTimeSlots {
  [key: number]: TimeSlot[];
}

export interface ScheduledSlot {
  _id: string;
  startDate: string;
  endDate: string;
  slots: DaySlot[];
}

export interface DaySlot {
  _id: string;
  day: number;
  times: TimeSlot[];
}
