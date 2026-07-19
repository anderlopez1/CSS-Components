import { type FC, type RefAttributes } from "react";
import type { ButtonProps as AriaButtonProps, MenuItemProps as AriaMenuItemProps, MenuProps as AriaMenuProps, PopoverProps as AriaPopoverProps, SeparatorProps as AriaSeparatorProps } from "react-aria-components";
import { MenuTrigger as AriaMenuTrigger } from "react-aria-components";
interface DropdownItemProps extends AriaMenuItemProps {
    /** The label of the item to be displayed. */
    label?: string;
    /** An addon to be displayed on the right side of the item. */
    addon?: string;
    /** If true, the item will not have any styles. */
    unstyled?: boolean;
    /** An icon to be displayed on the left side of the item. */
    icon?: FC<{
        className?: string;
    }>;
    /** Avatar URL to be displayed on the left side of the item. */
    avatarUrl?: string;
    /** The selection indicator to be displayed on the item. */
    selectionIndicator?: "checkmark" | "checkbox" | "radio" | "toggle" | "none";
}
interface DropdownMenuProps<T extends object> extends AriaMenuProps<T> {
}
interface DropdownPopoverProps extends AriaPopoverProps {
}
export declare const Dropdown: {
    Root: typeof AriaMenuTrigger;
    Popover: (props: DropdownPopoverProps) => import("react").JSX.Element;
    Menu: <T extends object>(props: DropdownMenuProps<T>) => import("react").JSX.Element;
    Section: <T>(props: import("react-aria-components").MenuSectionProps<T> & React.RefAttributes<HTMLElement>) => import("react").ReactElement<unknown, string | React.JSXElementConstructor<any>> | null;
    SectionHeader: (props: import("react-aria-components").HeaderProps & React.RefAttributes<HTMLElement>) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null;
    Item: ({ label, children, addon, icon: Icon, avatarUrl, unstyled, selectionIndicator, ...props }: DropdownItemProps) => import("react").JSX.Element;
    Separator: (props: AriaSeparatorProps) => import("react").JSX.Element;
    DotsButton: (props: AriaButtonProps & RefAttributes<HTMLButtonElement>) => import("react").JSX.Element;
};
export {};
//# sourceMappingURL=dropdown.d.ts.map