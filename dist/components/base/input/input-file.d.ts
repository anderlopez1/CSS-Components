import type { ReactNode } from "react";
interface InputFileProps {
    /**
     * The size of the input.
     * @default "sm"
     */
    size?: "sm" | "md" | "lg";
    /** Label text for the input. */
    label?: string;
    /** Helper text displayed below the input. */
    hint?: ReactNode;
    /** Placeholder text displayed when no file is selected. */
    placeholder?: string;
    /** Whether the input is disabled. */
    isDisabled?: boolean;
    /** Whether the input is invalid. */
    isInvalid?: boolean;
    /** Whether the input is required. */
    isRequired?: boolean;
    /** Whether to hide the required indicator from the label. */
    hideRequiredIndicator?: boolean;
    /** Specifies what mime type of files are allowed. */
    acceptedFileTypes?: string[];
    /** Whether multiple files can be selected. */
    allowsMultiple?: boolean;
    /** Whether the file is currently uploading. */
    isLoading?: boolean;
    /** Handler when a user selects files. */
    onChange?: (files: FileList | null) => void;
    /** The class name for the root element. */
    className?: string;
    /**
     * The text of the upload button.
     * @default "Upload"
     */
    buttonText?: string;
}
export declare const InputFile: {
    ({ size, label, hint, placeholder, isDisabled, isInvalid, isRequired, hideRequiredIndicator, isLoading, acceptedFileTypes, allowsMultiple, onChange, className, buttonText, }: InputFileProps): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=input-file.d.ts.map