"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from "react";
import { ChevronDown, SearchLg } from "@untitledui/icons";
import { useFilter } from "react-aria";
import { Autocomplete as AriaAutocomplete, Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Input as AriaInput, ListBox as AriaListBox, Popover as AriaPopover, SearchField as AriaSearchField, } from "react-aria-components";
import { Button } from "../../../components/base/buttons/button";
import { HintText } from "../../../components/base/input/hint-text";
import { Label } from "../../../components/base/input/label";
import { FeaturedIcon } from "../../../components/foundations/featured-icon/featured-icon";
import { cx } from "../../../utils/cx";
import { SelectItem } from "./select-item";
import { SelectContext, sizes } from "./select-shared";
const searchSizes = {
    sm: { wrapper: "py-1", root: "px-3 py-2 gap-2 *:data-icon:size-4 *:data-icon:stroke-[2.25px]", text: "text-sm" },
    md: { wrapper: "py-0.5", root: "px-3 py-2 gap-2 *:data-icon:size-5", text: "text-md" },
    lg: { wrapper: "py-0.5", root: "px-3.5 py-2.5 gap-2 *:data-icon:size-5", text: "text-md" },
};
const footerButtonSize = {
    sm: "xs",
    md: "sm",
    lg: "sm",
};
const popoverMaxHeights = {
    sm: "max-h-68",
    md: "max-h-76",
    lg: "max-h-92",
};
const MultiSelectFooter = ({ size = "sm", onReset, onSelectAll, className }) => {
    const btnSize = footerButtonSize[size];
    return (_jsxs("div", { className: cx("flex items-center justify-between border-t border-secondary p-3", className), children: [_jsx(Button, { size: btnSize, color: "secondary", onClick: onReset, children: "Reset" }), _jsx(Button, { size: btnSize, color: "secondary", onClick: onSelectAll, children: "Select all" })] }));
};
const MultiSelectEmptyState = ({ title = "No results found", description = "Please try a different search term.", onClearSearch, className, }) => (_jsxs("div", { className: cx("flex flex-col items-center gap-3 px-4 py-4", className), children: [_jsxs("div", { className: "flex flex-col items-center gap-3", children: [_jsx(FeaturedIcon, { icon: SearchLg, size: "sm", color: "gray", theme: "modern" }), _jsxs("div", { className: "flex flex-col items-center gap-0.5 text-center text-sm", children: [_jsx("p", { className: "font-semibold text-primary", children: title }), _jsx("p", { className: "text-tertiary", children: description })] })] }), onClearSearch && (_jsx(Button, { size: "sm", color: "link-color", onClick: onClearSearch, children: "Clear search" }))] }));
const MultiSelectRoot = ({ items, children, size = "md", selectedKeys, defaultSelectedKeys, onSelectionChange, isDisabled, isRequired, isInvalid, placeholder = "Select", label, hint, tooltip, hideRequiredIndicator, popoverClassName, className, onReset, onSelectAll, showFooter = true, showSearch = true, emptyStateTitle, emptyStateDescription, selectedCountFormatter, supportingText, }) => {
    var _a;
    const { contains } = useFilter({ sensitivity: "base" });
    const [searchValue, setSearchValue] = useState("");
    const triggerRef = useRef(null);
    const [popoverWidth, setPopoverWidth] = useState("");
    const onResize = useCallback(() => {
        if (!triggerRef.current)
            return;
        const rect = triggerRef.current.getBoundingClientRect();
        setPopoverWidth(rect.width + "px");
    }, []);
    const selectedCount = selectedKeys instanceof Set ? selectedKeys.size : selectedKeys === "all" ? ((_a = items === null || items === void 0 ? void 0 : items.length) !== null && _a !== void 0 ? _a : 0) : 0;
    const hasSelection = selectedCount > 0;
    const handleClearSearch = useCallback(() => {
        setSearchValue("");
    }, []);
    return (_jsx(SelectContext.Provider, { value: { size }, children: _jsxs("div", { className: cx("flex flex-col gap-1.5", className), children: [label && (_jsx(Label, { isRequired: hideRequiredIndicator ? false : isRequired, isInvalid: isInvalid, tooltip: tooltip, children: label })), _jsxs(AriaDialogTrigger, { children: [_jsx(AriaButton, { ref: triggerRef, isDisabled: isDisabled, onClick: onResize, className: (state) => cx("relative flex w-full cursor-pointer items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset", (state.isFocusVisible || state.isPressed) && "ring-2 ring-brand", state.isDisabled && "cursor-not-allowed opacity-50"), children: _jsxs("span", { className: cx("flex w-full items-center truncate text-left", sizes[size].root, "*:data-icon:shrink-0 *:data-icon:text-fg-quaternary"), children: [hasSelection ? (_jsxs("span", { className: cx("flex items-center", sizes[size].textContainer), children: [_jsx("span", { className: cx("font-medium text-primary", sizes[size].text), children: selectedCountFormatter ? selectedCountFormatter(selectedCount) : `${selectedCount} selected` }), supportingText && _jsx("span", { className: cx("text-tertiary", sizes[size].text), children: supportingText })] })) : (_jsx("span", { className: cx("text-placeholder", sizes[size].text), children: placeholder })), _jsx(ChevronDown, { "aria-hidden": "true", className: cx("ml-auto shrink-0 text-fg-quaternary", size === "lg" ? "size-5" : "size-4 stroke-[2.25px]") })] }) }), _jsx(AriaPopover, { placement: "bottom", offset: 4, containerPadding: 0, style: { width: popoverWidth || undefined }, className: (state) => cx("w-(--trigger-width) origin-(--trigger-anchor-point) overflow-hidden rounded-lg bg-primary shadow-lg ring-1 ring-secondary_alt outline-hidden will-change-transform", state.isEntering &&
                                "duration-150 ease-out animate-in fade-in placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5", state.isExiting &&
                                "duration-100 ease-in animate-out fade-out placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5", popoverClassName), children: _jsxs(AriaDialog, { className: "outline-hidden", children: [_jsxs(AriaAutocomplete, { filter: contains, inputValue: searchValue, onInputChange: setSearchValue, children: [showSearch && (_jsx("div", { className: cx("border-b border-secondary", searchSizes[size].wrapper), children: _jsx(AriaSearchField, { "aria-label": "Search", value: searchValue, onChange: setSearchValue, autoFocus: true, children: _jsxs("div", { className: cx("flex items-center", searchSizes[size].root), children: [_jsx(SearchLg, { "data-icon": true, "aria-hidden": "true", className: "shrink-0 text-fg-quaternary" }), _jsx(AriaInput, { placeholder: "Search", className: cx("w-full appearance-none bg-transparent text-primary caret-alpha-black/90 outline-hidden placeholder:text-placeholder", searchSizes[size].text) })] }) }) })), _jsx(AriaListBox, { "aria-label": label || "Options", items: items, selectionMode: "multiple", selectedKeys: selectedKeys, defaultSelectedKeys: defaultSelectedKeys, onSelectionChange: onSelectionChange, renderEmptyState: () => (_jsx(MultiSelectEmptyState, { title: emptyStateTitle, description: emptyStateDescription, onClearSearch: searchValue ? handleClearSearch : undefined })), className: cx("overflow-y-auto py-1 outline-hidden", popoverMaxHeights[size]), children: children })] }), showFooter && _jsx(MultiSelectFooter, { size: size, onReset: onReset, onSelectAll: onSelectAll })] }) })] }), hint && (_jsx(HintText, { isInvalid: isInvalid, className: cx(size === "sm" && "text-xs"), children: hint }))] }) }));
};
const MultiSelect = MultiSelectRoot;
MultiSelect.Item = SelectItem;
MultiSelect.Footer = MultiSelectFooter;
MultiSelect.EmptyState = MultiSelectEmptyState;
export { MultiSelect };
