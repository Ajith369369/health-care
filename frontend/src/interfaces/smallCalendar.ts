export interface SmallCalendarProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  setSelectedStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setSelectedEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}
