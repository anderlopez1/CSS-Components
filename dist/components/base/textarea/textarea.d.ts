import type { ReactNode, Ref } from "react";
import React from "react";
import type { TextAreaProps as AriaTextAreaProps, TextFieldProps as AriaTextFieldProps } from "react-aria-components";
interface TextAreaBaseProps extends AriaTextAreaProps {
    ref?: Ref<HTMLTextAreaElement>;
    size?: "sm" | "md";
}
export declare const TextAreaBase: {
    ({ className, size, ...props }: TextAreaBaseProps): React.JSX.Element;
    displayName: string;
};
interface TextFieldProps extends AriaTextFieldProps {
    /** Label text for the textarea */
    label?: string;
    /** Helper text displayed below the textarea */
    hint?: ReactNode;
    /** Tooltip message displayed after the label. */
    tooltip?: string;
    /** Textarea size. */
    size?: TextAreaBaseProps["size"];
    /** Class name for the textarea wrapper */
    textAreaClassName?: TextAreaBaseProps["className"];
    /** Ref for the textarea wrapper */
    ref?: Ref<HTMLDivElement>;
    /** Ref for the textarea */
    textAreaRef?: TextAreaBaseProps["ref"];
    /** Whether to hide required indicator from label. */
    hideRequiredIndicator?: boolean;
    /** Placeholder text. */
    placeholder?: string;
    /** Visible height of textarea in rows . */
    rows?: number;
    /** Visible width of textarea in columns. */
    cols?: number;
}
export declare const TextArea: {
    ({ label, hint, tooltip, textAreaRef, hideRequiredIndicator, textAreaClassName, placeholder, className, rows, cols, size, ...props }: TextFieldProps): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=textarea.d.ts.map