import type { ReactNode } from "react";
export interface InputTagsProps {
    /** Label text displayed above the input. */
    label?: string;
    /** Helper text displayed below the input. */
    hint?: ReactNode;
    /** Tooltip message displayed via a help icon inside the input. */
    tooltip?: string;
    /**
     * Input size variant.
     * @default "sm"
     */
    size?: "sm" | "md" | "lg";
    /** Placeholder text for the input field. */
    placeholder?: string;
    /** Whether the field is required. */
    isRequired?: boolean;
    /** Whether the field is disabled. */
    isDisabled?: boolean;
    /** Whether the field is in an invalid/error state. */
    isInvalid?: boolean;
    /**
     * Whether to allow duplicate tag values.
     * @default false
     */
    allowDuplicates?: boolean;
    /** Maximum number of tags allowed. */
    maxTags?: number;
    /** Controlled value: array of tag strings. */
    value?: string[];
    /** Default tags for uncontrolled mode. */
    defaultValue?: string[];
    /** Called when the tags array changes. */
    onChange?: (tags: string[]) => void;
    /** Called when a tag is added. */
    onTagAdded?: (tag: string) => void;
    /** Called when a tag is removed. */
    onTagRemoved?: (tag: string) => void;
    /**
     * Validation function for new tags.
     * Return `true` to accept, `false` to reject.
     */
    validate?: (value: string) => boolean;
    /** Optional className for the outer container. */
    className?: string;
    /** Whether to hide the required indicator from the label. */
    hideRequiredIndicator?: boolean;
}
export declare const InputTags: ({ size, label, hint, tooltip, placeholder, isRequired, isDisabled, isInvalid, allowDuplicates, maxTags, value, defaultValue, onChange, onTagAdded, onTagRemoved, validate, className, hideRequiredIndicator, }: InputTagsProps) => import("react").JSX.Element;
//# sourceMappingURL=input-tags.d.ts.map