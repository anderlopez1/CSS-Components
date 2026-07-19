import type { ReactNode, RefAttributes } from "react";
import type { Selection } from "react-aria-components";
import { SelectItem } from "./select-item";
import { type CommonProps, type SelectItemType } from "./select-shared";
interface MultiSelectFooterProps {
    /**
     * The size of the footer buttons.
     * @default "sm"
     */
    size?: "sm" | "md" | "lg";
    /** Handler that is called when the reset button is clicked. */
    onReset?: () => void;
    /** Handler that is called when the select all button is clicked. */
    onSelectAll?: () => void;
    /** Additional class name. */
    className?: string;
}
declare const MultiSelectFooter: ({ size, onReset, onSelectAll, className }: MultiSelectFooterProps) => import("react").JSX.Element;
interface MultiSelectEmptyStateProps {
    /**
     * The title to display.
     * @default "No results found"
     */
    title?: string;
    /**
     * The description to display.
     * @default "Please try a different search term."
     */
    description?: string;
    /** Handler that is called when the clear search button is clicked. */
    onClearSearch?: () => void;
    /** Additional class name. */
    className?: string;
}
declare const MultiSelectEmptyState: ({ title, description, onClearSearch, className, }: MultiSelectEmptyStateProps) => import("react").JSX.Element;
interface MultiSelectProps extends RefAttributes<HTMLDivElement>, CommonProps {
    /** The items to display in the listbox. */
    items?: SelectItemType[];
    /** The children to render for each item. */
    children: ReactNode | ((item: SelectItemType) => ReactNode);
    /** The currently selected keys (controlled). */
    selectedKeys?: Selection;
    /** The initial selected keys (uncontrolled). */
    defaultSelectedKeys?: Selection;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (keys: Selection) => void;
    /** Whether the select is disabled. */
    isDisabled?: boolean;
    /** Whether the select is required. */
    isRequired?: boolean;
    /** Whether the select is in an invalid state. */
    isInvalid?: boolean;
    /** Additional class name for the popover. */
    popoverClassName?: string;
    /** Additional class name for the root element. */
    className?: string;
    /** Handler that is called when the reset button is clicked. */
    onReset?: () => void;
    /** Handler that is called when the select all button is clicked. */
    onSelectAll?: () => void;
    /**
     * Whether to show the footer with reset and select all buttons.
     * @default true
     */
    showFooter?: boolean;
    /**
     * Whether to show the search input in the popover.
     * @default true
     */
    showSearch?: boolean;
    /** The title to display when no items match the search. */
    emptyStateTitle?: string;
    /** The description to display when no items match the search. */
    emptyStateDescription?: string;
    /** Custom formatter for the selected count text in the trigger. */
    selectedCountFormatter?: (count: number) => ReactNode;
    /** Supporting text displayed next to the selected count in the trigger. */
    supportingText?: ReactNode;
}
declare const MultiSelectRoot: ({ items, children, size, selectedKeys, defaultSelectedKeys, onSelectionChange, isDisabled, isRequired, isInvalid, placeholder, label, hint, tooltip, hideRequiredIndicator, popoverClassName, className, onReset, onSelectAll, showFooter, showSearch, emptyStateTitle, emptyStateDescription, selectedCountFormatter, supportingText, }: MultiSelectProps) => import("react").JSX.Element;
declare const MultiSelect: typeof MultiSelectRoot & {
    Item: typeof SelectItem;
    Footer: typeof MultiSelectFooter;
    EmptyState: typeof MultiSelectEmptyState;
};
export { MultiSelect };
//# sourceMappingURL=multi-select.d.ts.map