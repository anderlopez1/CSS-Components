"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { Check, ChevronRight, DotsVertical } from "@untitledui/icons";
import { Button as AriaButton, Header as AriaHeader, Menu as AriaMenu, MenuItem as AriaMenuItem, MenuSection as AriaMenuSection, MenuTrigger as AriaMenuTrigger, Popover as AriaPopover, Separator as AriaSeparator, } from "react-aria-components";
import { cx } from "../../../utils/cx";
import { Avatar } from "../avatar/avatar";
import { CheckboxBase } from "../checkbox/checkbox";
import { RadioButtonBase } from "../radio-buttons/radio-buttons";
import { ToggleBase } from "../toggle/toggle";
const DropdownItem = (_a) => {
    var { label, children, addon, icon: Icon, avatarUrl, unstyled, selectionIndicator = "checkmark" } = _a, props = __rest(_a, ["label", "children", "addon", "icon", "avatarUrl", "unstyled", "selectionIndicator"]);
    const SelectionIndicator = useCallback((state) => {
        if (selectionIndicator === "checkmark") {
            return (_jsx(Check, { "aria-hidden": "true", className: cx("size-4 shrink-0 stroke-[2.25px] text-fg-brand-primary", !state.isSelected && "invisible", state.className) }));
        }
        if (selectionIndicator === "checkbox") {
            return (_jsx(CheckboxBase, { isSelected: state.isSelected && !state.hasSubmenu, isIndeterminate: state.isSelected && state.hasSubmenu, size: "sm", className: cx("shrink-0", state.className) }));
        }
        if (selectionIndicator === "radio") {
            return _jsx(RadioButtonBase, { isSelected: state.isSelected, className: cx("shrink-0", state.className) });
        }
        if (selectionIndicator === "toggle") {
            return _jsx(ToggleBase, { slim: true, size: "sm", isSelected: state.isSelected, className: cx("shrink-0", state.className) });
        }
        return null;
    }, [selectionIndicator]);
    if (unstyled) {
        return _jsx(AriaMenuItem, Object.assign({ id: label, textValue: label }, props));
    }
    return (_jsx(AriaMenuItem, Object.assign({}, props, { className: (state) => cx("group block cursor-pointer px-1.5 py-px outline-hidden", state.isDisabled && "cursor-not-allowed opacity-50", typeof props.className === "function" ? props.className(state) : props.className), children: (state) => (_jsxs("div", { className: cx("relative flex items-center rounded-md px-2.5 py-2 outline-focus-ring transition duration-100 ease-linear", !state.isDisabled && "group-hover:bg-primary_hover", state.isFocused && "bg-primary_hover", state.isFocusVisible && "outline-2 -outline-offset-2", state.hasSubmenu && "pr-1.5"), children: [state.selectionMode !== "none" && !avatarUrl && !Icon && _jsx(SelectionIndicator, Object.assign({}, state, { className: "mr-2" })), avatarUrl && (_jsx("div", { className: "mr-2 flex size-4 items-center justify-center", children: _jsx(Avatar, { "aria-hidden": "true", size: "xs", src: avatarUrl, alt: label, className: "size-5" }) })), Icon && _jsx(Icon, { "aria-hidden": "true", className: "mr-2 size-4 shrink-0 stroke-[2.25px] text-fg-quaternary" }), _jsx("span", { className: cx("grow truncate text-sm font-semibold text-secondary", state.isFocused && "text-secondary_hover"), children: label || (typeof children === "function" ? children(state) : children) }), addon && _jsx("span", { className: "ml-1 shrink-0 pr-1 text-xs font-medium text-quaternary", children: addon }), state.selectionMode !== "none" && (avatarUrl || Icon) && _jsx(SelectionIndicator, Object.assign({}, state, { className: "ml-1" })), state.hasSubmenu && _jsx(ChevronRight, { "aria-hidden": "true", className: "ml-auto size-4 shrink-0 stroke-[2.25px] text-fg-quaternary" })] })) })));
};
const DropdownMenu = (props) => {
    return (_jsx(AriaMenu, Object.assign({}, props, { className: (state) => cx("h-min overflow-y-auto py-1 outline-hidden select-none", typeof props.className === "function" ? props.className(state) : props.className) })));
};
const DropdownPopover = (props) => {
    return (_jsx(AriaPopover, Object.assign({ placement: "bottom right" }, props, { className: (state) => cx("w-62 origin-(--trigger-anchor-point) overflow-auto rounded-lg bg-primary shadow-lg ring-1 ring-secondary_alt will-change-transform", state.isEntering &&
            "duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5", state.isExiting &&
            "duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5", typeof props.className === "function" ? props.className(state) : props.className), children: props.children })));
};
const DropdownSeparator = (props) => {
    return _jsx(AriaSeparator, Object.assign({}, props, { className: cx("my-1 h-px w-full bg-border-secondary", props.className) }));
};
const DropdownDotsButton = (props) => {
    return (_jsx(AriaButton, Object.assign({}, props, { "aria-label": "Open menu", className: (state) => cx("cursor-pointer rounded-md text-fg-quaternary outline-focus-ring transition duration-100 ease-linear", (state.isPressed || state.isHovered) && "text-fg-quaternary_hover", (state.isPressed || state.isFocusVisible) && "outline-2 outline-offset-2", typeof props.className === "function" ? props.className(state) : props.className), children: _jsx(DotsVertical, { className: "size-5 transition-inherit-all" }) })));
};
export const Dropdown = {
    Root: AriaMenuTrigger,
    Popover: DropdownPopover,
    Menu: DropdownMenu,
    Section: AriaMenuSection,
    SectionHeader: AriaHeader,
    Item: DropdownItem,
    Separator: DropdownSeparator,
    DotsButton: DropdownDotsButton,
};
