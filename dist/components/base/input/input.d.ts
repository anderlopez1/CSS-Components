import { type ComponentType, type HTMLAttributes, type ReactNode, type Ref } from "react";
import type { InputProps as AriaInputProps, TextFieldProps as AriaTextFieldProps } from "react-aria-components";
export interface InputBaseProps extends Omit<AriaInputProps, "size"> {
    /** Tooltip message on hover. */
    tooltip?: string;
    /** Whether the input is invalid. */
    isInvalid?: boolean;
    /** Whether the input is disabled. */
    isDisabled?: boolean;
    /** Whether the input is required. */
    isRequired?: boolean;
    /**
     * Input size.
     * @default "sm"
     */
    size?: "sm" | "md" | "lg";
    /** Placeholder text. */
    placeholder?: string;
    /** Class name for the icon. */
    iconClassName?: string;
    /** Class name for the input. */
    inputClassName?: string;
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
}
export declare const InputBase: {
    ({ ref, tooltip, shortcut, groupRef, size, isInvalid, isDisabled, isRequired, icon: Icon, placeholder, wrapperClassName, tooltipClassName, inputClassName, iconClassName, type, ...inputProps }: InputBaseProps): import("react").JSX.Element;
    displayName: string;
};
interface TextFieldContextProps extends Partial<Pick<InputBaseProps, "size" | "wrapperClassName" | "inputClassName" | "iconClassName" | "tooltipClassName">> {
}
export interface TextFieldProps extends AriaTextFieldProps, TextFieldContextProps {
}
export declare const TextField: {
    ({ className, size, inputClassName, wrapperClassName, iconClassName, tooltipClassName, ...props }: TextFieldProps): import("react").JSX.Element;
    displayName: string;
};
export interface InputProps extends AriaTextFieldProps, Pick<InputBaseProps, "ref" | "placeholder" | "icon" | "shortcut" | "tooltip" | "groupRef" | "size" | "wrapperClassName" | "inputClassName" | "iconClassName" | "tooltipClassName"> {
    /** Label text for the input */
    label?: string;
    /** Helper text displayed below the input */
    hint?: ReactNode;
    /** Whether to hide required indicator from label */
    hideRequiredIndicator?: boolean;
}
export declare const Input: {
    ({ size, placeholder, icon: Icon, label, hint, shortcut, hideRequiredIndicator, className, ref, groupRef, tooltip, iconClassName, inputClassName, wrapperClassName, tooltipClassName, type, ...props }: InputProps): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=input.d.ts.map