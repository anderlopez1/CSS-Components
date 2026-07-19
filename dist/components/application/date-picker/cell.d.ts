import type { CalendarCellProps as AriaCalendarCellProps } from "react-aria-components";
interface CalendarCellProps extends AriaCalendarCellProps {
    /** Whether the calendar is a range calendar. */
    isRangeCalendar?: boolean;
    /** Whether the cell is highlighted. */
    isHighlighted?: boolean;
    /** Whether to show out of range dates. */
    showOutOfRangeDates?: boolean;
}
export declare const CalendarCell: ({ date, isHighlighted, showOutOfRangeDates, ...props }: CalendarCellProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=cell.d.ts.map