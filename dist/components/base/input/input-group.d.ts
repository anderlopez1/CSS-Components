import { type HTMLAttributes, type ReactNode } from "react";
import type { TextFieldProps } from "../../../components/base/input/input";
interface InputPrefixProps extends HTMLAttributes<HTMLDivElement> {
    /** The position of the prefix. */
    position?: "leading" | "trailing";
    /** Indicates that the prefix is disabled. */
    isDisabled?: boolean;
}
export declare const InputPrefix: ({ children, ...props }: InputPrefixProps) => import("react").JSX.Element;
interface InputGroupProps extends TextFieldProps {
    /** A prefix text that is displayed in the same box as the input.*/
    prefix?: string;
    /** A leading addon that is displayed with visual separation from the input. */
    leadingAddon?: ReactNode;
    /** A trailing addon that is displayed with visual separation from the input. */
    trailingAddon?: ReactNode;
    /** The class name to apply to the input group. */
    className?: string;
    /** The children of the input group (i.e `<InputBase />`) */
    children: ReactNode;
    /** Label text for the input */
    label?: string;
    /** Helper text displayed below the input */
    hint?: ReactNode;
    /** Whether to hide the required indicator from the label. */
    hideRequiredIndicator?: boolean;
}
export declare const InputGroup: {
    ({ size, prefix, leadingAddon, trailingAddon, label, hint, hideRequiredIndicator, children, ...props }: InputGroupProps): import("react").JSX.Element;
    Prefix: ({ children, ...props }: InputPrefixProps) => import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=input-group.d.ts.map