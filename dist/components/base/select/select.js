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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { isValidElement } from "react";
import { ChevronDown } from "@untitledui/icons";
import { Button as AriaButton, ListBox as AriaListBox, Select as AriaSelect, SelectValue as AriaSelectValue } from "react-aria-components";
import { Avatar } from "../../../components/base/avatar/avatar";
import { HintText } from "../../../components/base/input/hint-text";
import { Label } from "../../../components/base/input/label";
import { cx } from "../../../utils/cx";
import { isReactComponent } from "../../../utils/is-react-component";
import { ComboBox } from "./combobox";
import { Popover } from "./popover";
import { SelectItem } from "./select-item";
import { SelectContext, sizes } from "./select-shared";
export { SelectContext, sizes } from "./select-shared";
const SelectValue = ({ isOpen, isFocused, isDisabled, size, placeholder, icon, ref }) => {
    return (_jsx(AriaButton, { ref: ref, className: cx("relative flex w-full cursor-pointer items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset", (isFocused || isOpen) && "ring-2 ring-brand", isDisabled && "cursor-not-allowed opacity-50"), children: _jsx(AriaSelectValue, { className: (state) => {
                var _a;
                return cx("flex h-max w-full items-center justify-start truncate text-left align-middle", sizes[size].root, 
                // With icon
                (((_a = state.selectedItems[0]) === null || _a === void 0 ? void 0 : _a.icon) || icon) && sizes[size].withIcon, 
                // Icon styles
                "*:data-icon:shrink-0 *:data-icon:text-fg-quaternary");
            }, children: (state) => {
                const selectedItem = state.selectedItems[0];
                const Icon = (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.icon) || icon;
                return (_jsxs(_Fragment, { children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.avatarUrl) ? (_jsx(Avatar, { size: "xs", src: selectedItem.avatarUrl, alt: selectedItem.label, className: cx(size === "sm" && "size-5") })) : isReactComponent(Icon) ? (_jsx(Icon, { "data-icon": true, "aria-hidden": "true" })) : isValidElement(Icon) ? (Icon) : null, selectedItem ? (_jsxs("section", { className: cx("flex w-full truncate", sizes[size].textContainer), children: [_jsx("p", { className: cx("truncate font-medium text-primary", sizes[size].text), children: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label }), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.supportingText) && _jsx("p", { className: cx("text-tertiary", sizes[size].text), children: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.supportingText })] })) : (_jsx("p", { className: cx("text-placeholder", sizes[size].text), children: placeholder })), _jsx(ChevronDown, { "aria-hidden": "true", className: cx("ml-auto shrink-0 text-fg-quaternary", size === "lg" ? "size-5" : "size-4 stroke-[2.25px]") })] }));
            } }) }));
};
const Select = (_a) => {
    var { placeholder = "Select", icon, size = "md", children, items, label, hint, tooltip, hideRequiredIndicator, className } = _a, rest = __rest(_a, ["placeholder", "icon", "size", "children", "items", "label", "hint", "tooltip", "hideRequiredIndicator", "className"]);
    return (_jsx(SelectContext.Provider, { value: { size }, children: _jsx(AriaSelect, Object.assign({}, rest, { className: (state) => cx("flex flex-col gap-1.5", typeof className === "function" ? className(state) : className), children: (state) => (_jsxs(_Fragment, { children: [label && (_jsx(Label, { isRequired: hideRequiredIndicator ? false : state.isRequired, tooltip: tooltip, children: label })), _jsx(SelectValue, Object.assign({}, state, { size, placeholder, icon: icon })), _jsx(Popover, { size: size, className: rest.popoverClassName, children: _jsx(AriaListBox, { items: items, className: "size-full outline-hidden", children: children }) }), hint && (_jsx(HintText, { isInvalid: state.isInvalid, className: cx(size === "sm" && "text-xs"), children: hint }))] })) })) }));
};
const _Select = Select;
_Select.ComboBox = ComboBox;
_Select.Item = SelectItem;
export { _Select as Select };
