import type { FocusEventHandler, PointerEventHandler, RefAttributes, RefObject } from "react";
import React from "react";
import type { ComboBoxProps as AriaComboBoxProps, GroupProps as AriaGroupProps, ListBoxProps as AriaListBoxProps, Key } from "react-aria-components";
import type { ListData } from "react-stately";
import type { IconComponentType } from "../../../components/base/badges/badge-types";
import { type SelectItemType } from "../../../components/base/select/select-shared";
import { SelectItem } from "./select-item";
interface TagSelectValueProps extends AriaGroupProps {
    size: "sm" | "md" | "lg";
    shortcut?: boolean;
    isDisabled?: boolean;
    placeholder?: string;
    shortcutClassName?: string;
    icon?: IconComponentType | null;
    ref?: RefObject<HTMLDivElement | null>;
    onFocus?: FocusEventHandler;
    onPointerEnter?: PointerEventHandler;
}
interface TagSelectProps extends Omit<AriaComboBoxProps<SelectItemType>, "children" | "items">, RefAttributes<HTMLDivElement> {
    hint?: string;
    label?: string;
    tooltip?: string;
    size?: "sm" | "md" | "lg";
    placeholder?: string;
    shortcut?: boolean;
    items?: SelectItemType[];
    popoverClassName?: string;
    shortcutClassName?: string;
    selectedItems: ListData<SelectItemType>;
    icon?: IconComponentType | null;
    children: AriaListBoxProps<SelectItemType>["children"];
    onItemCleared?: (key: Key) => void;
    onItemInserted?: (key: Key) => void;
    valueFormatter?: (item: SelectItemType) => string;
}
export declare const TagSelectBase: ({ items, children, size, selectedItems, onItemCleared, onItemInserted, valueFormatter, shortcut, placeholder, icon, name: _name, className, ...props }: TagSelectProps) => React.JSX.Element;
export declare const TagSelectTagsValue: ({ size, shortcut, placeholder, shortcutClassName, icon: Icon, isDisabled: _isDisabled, ...otherProps }: TagSelectValueProps) => React.JSX.Element;
declare const TagSelect: typeof TagSelectBase & {
    Item: typeof SelectItem;
};
export { TagSelect };
//# sourceMappingURL=tag-select.d.ts.map