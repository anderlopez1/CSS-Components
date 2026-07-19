import { type ComponentType, type HTMLAttributes, type ReactNode, type Ref } from "react";
import type { DateInputProps as AriaDateInputProps } from "react-aria-components";
import { type DateFieldProps as AriaDateFieldProps, type DateValue } from "react-aria-components";
export interface InputDateBaseProps extends Omit<AriaDateInputProps, "children"> {
    /** Tooltip message on hover. */
    tooltip?: string;
    /**
     * Input size.
     * @default "sm"
     */
    size?: "sm" | "md" | "lg";
    /** Placeholder text. */
    placeholder?: string;
    /** Class name for the icon. */
    iconClassName?: string;
    /** Class name for the input wrapper. */
    wrapperClassName?: string;
    /** Class name for the tooltip. */
    tooltipClassName?: string;
    /** Keyboard shortcut to display. */
    shortcut?: string | boolean;
    ref?: Ref<HTMLInputElement>;
    groupRef?: Ref<HTMLDivElement>;
    /** Icon component to display on the left side of the input. */
    icon?: ComponentType<HTMLAttributes<HTMLOrSVGElement>>;
    isInvalid?: boolean;
    isDisabled?: boolean;
}
export declare const InputDateBase: ({ tooltip, shortcut, groupRef, size, isInvalid, isDisabled, icon: Icon, wrapperClassName, tooltipClassName, iconClassName, ...inputProps }: Omit<InputDateBaseProps, "label" | "hint">) => import("react").JSX.Element;
interface InputProps extends AriaDateFieldProps<DateValue>, Pick<InputDateBaseProps, "ref" | "size" | "placeholder" | "icon" | "shortcut" | "tooltip" | "groupRef" | "iconClassName" | "wrapperClassName" | "tooltipClassName"> {
    /** Label text for the input */
    label?: string;
    /** Helper text displayed below the input */
    hint?: ReactNode;
    /** Whether to hide required indicator from label */
    hideRequiredIndicator?: boolean;
    /** Class name for the input. */
    inputClassName?: string;
}
export declare const InputDate: ({ size, placeholder, icon: Icon, label, hint, shortcut, hideRequiredIndicator, className, ref, groupRef, tooltip, iconClassName, inputClassName, wrapperClassName, tooltipClassName, ...props }: InputProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=input-date.d.ts.map