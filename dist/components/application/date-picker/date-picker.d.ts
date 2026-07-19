import type { DatePickerProps as AriaDatePickerProps, DateValue } from "react-aria-components";
import { type ButtonProps } from "../../../components/base/buttons/button";
interface DatePickerProps extends AriaDatePickerProps<DateValue> {
    /** The function to call when the apply button is clicked. */
    onApply?: () => void;
    /** The function to call when the cancel button is clicked. */
    onCancel?: () => void;
    size?: ButtonProps["size"];
}
export declare const DatePicker: ({ value: valueProp, defaultValue, onChange, onApply, onCancel, size, ...props }: DatePickerProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=date-picker.d.ts.map