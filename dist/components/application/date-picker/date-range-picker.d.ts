import type { DateRangePickerProps as AriaDateRangePickerProps, DateValue } from "react-aria-components";
import { type ButtonProps } from "../../../components/base/buttons/button";
interface DateRangePickerProps extends AriaDateRangePickerProps<DateValue> {
    size?: ButtonProps["size"];
    /** The function to call when the apply button is clicked. */
    onApply?: () => void;
    /** The function to call when the cancel button is clicked. */
    onCancel?: () => void;
}
export declare const DateRangePicker: ({ value: valueProp, defaultValue, onChange, onApply, onCancel, size, ...props }: DateRangePickerProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=date-range-picker.d.ts.map