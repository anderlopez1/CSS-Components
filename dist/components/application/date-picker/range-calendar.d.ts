import type { HTMLAttributes, PropsWithChildren } from "react";
import type { RangeCalendarProps as AriaRangeCalendarProps, DateValue } from "react-aria-components";
export declare const RangeCalendarContextProvider: ({ children }: PropsWithChildren) => import("react").JSX.Element;
interface RangePresetButtonProps extends HTMLAttributes<HTMLButtonElement> {
    value: {
        start: DateValue;
        end: DateValue;
    };
}
export declare const RangePresetButton: ({ value, className, children, ...props }: RangePresetButtonProps) => import("react").JSX.Element;
interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
    /** The dates to highlight. */
    highlightedDates?: DateValue[];
    /** The date presets to display. */
    presets?: Record<string, {
        label: string;
        value: {
            start: DateValue;
            end: DateValue;
        };
    }>;
    /** Whether to show out of range dates. */
    showOutOfRangeDates?: boolean;
    /** Whether to show presets on desktop. */
    showPresetsOnDesktop?: boolean;
}
export declare const RangeCalendar: ({ presets, visibleDuration, showOutOfRangeDates, showPresetsOnDesktop, ...props }: RangeCalendarProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=range-calendar.d.ts.map