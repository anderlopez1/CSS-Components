import type { PropsWithChildren, ReactNode } from "react";
import type { CalendarProps as AriaCalendarProps, DateValue } from "react-aria-components";
export declare const CalendarContextProvider: ({ children }: PropsWithChildren) => import("react").JSX.Element;
interface CalendarProps extends AriaCalendarProps<DateValue> {
    /** The dates to highlight. */
    highlightedDates?: DateValue[];
    /**
     * The content to render between the header and the calendar grid.
     * If not provided, a default layout will be rendered with a date input and a today button.
     */
    children?: ReactNode;
}
export declare const Calendar: ({ highlightedDates, className, children, ...props }: CalendarProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=calendar.d.ts.map