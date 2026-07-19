import { type ReactNode, type Ref } from "react";
import { type DateFieldProps as AriaDateFieldProps, type NumberFieldProps as AriaNumberFieldProps, type DateValue } from "react-aria-components";
export interface InputNumberBaseProps extends AriaNumberFieldProps {
    /**
     * Input size.
     * @default "sm"
     */
    size?: "sm" | "md" | "lg";
    /** Placeholder text. */
    placeholder?: string;
    /** Class name for the input. */
    inputClassName?: string;
    /** Class name for the input wrapper. */
    wrapperClassName?: string;
    ref?: Ref<HTMLInputElement>;
    groupRef?: Ref<HTMLDivElement>;
    /** Orientation of buttons. */
    orientation?: "horizontal" | "vertical";
}
export declare const InputNumberBase: ({ ref, groupRef, size, isInvalid, isDisabled, placeholder, wrapperClassName, inputClassName, orientation, isRequired: _isRequired, ...inputProps }: Omit<InputNumberBaseProps, "label" | "hint">) => import("react").JSX.Element;
interface InputProps extends InputNumberBaseProps, Pick<AriaDateFieldProps<DateValue>, "granularity"> {
    /** Label text for the input */
    label?: string;
    /** Helper text displayed below the input */
    hint?: ReactNode;
    hideRequiredIndicator?: boolean;
}
export declare const InputNumber: ({ size, placeholder, label, hint, hideRequiredIndicator, className, ref, groupRef, inputClassName, wrapperClassName, orientation, ...props }: InputProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=input-number.d.ts.map