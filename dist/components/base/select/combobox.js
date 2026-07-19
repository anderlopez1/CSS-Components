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
import { isValidElement, useCallback, useContext, useRef, useState } from "react";
import { SearchLg } from "@untitledui/icons";
import { ComboBox as AriaComboBox, Group as AriaGroup, Input as AriaInput, ListBox as AriaListBox, ComboBoxStateContext } from "react-aria-components";
import { HintText } from "../../../components/base/input/hint-text";
import { Label } from "../../../components/base/input/label";
import { Popover } from "../../../components/base/select/popover";
import { SelectContext, sizes } from "../../../components/base/select/select-shared";
import { useResizeObserver } from "../../../hooks/use-resize-observer";
import { cx } from "../../../utils/cx";
import { isReactComponent } from "../../../utils/is-react-component";
const ComboBoxValue = (_a) => {
    var _b, _c;
    var { size, shortcut, placeholder, shortcutClassName, icon: IconProp } = _a, otherProps = __rest(_a, ["size", "shortcut", "placeholder", "shortcutClassName", "icon"]);
    const state = useContext(ComboBoxStateContext);
    const value = ((_b = state === null || state === void 0 ? void 0 : state.selectedItem) === null || _b === void 0 ? void 0 : _b.value) || null;
    const inputValue = (state === null || state === void 0 ? void 0 : state.inputValue) || null;
    const first = ((_c = inputValue === null || inputValue === void 0 ? void 0 : inputValue.split(value === null || value === void 0 ? void 0 : value.supportingText)) === null || _c === void 0 ? void 0 : _c[0]) || "";
    const last = inputValue === null || inputValue === void 0 ? void 0 : inputValue.split(first)[1];
    return (_jsxs(AriaGroup, Object.assign({}, otherProps, { className: ({ isFocusWithin, isDisabled }) => cx("relative flex w-full items-center gap-2 rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition-shadow duration-100 ease-linear ring-inset", isDisabled && "cursor-not-allowed opacity-50", isFocusWithin && "ring-2 ring-brand", 
        // Icon styles
        "*:data-icon:shrink-0 *:data-icon:text-fg-quaternary", sizes[size].root), children: [isReactComponent(IconProp) ? (_jsx(IconProp, { "data-icon": true, className: "pointer-events-none", "aria-hidden": "true" })) : isValidElement(IconProp) ? (IconProp) : (_jsx(SearchLg, { "data-icon": true, className: "pointer-events-none", "aria-hidden": "true" })), _jsxs("div", { className: "relative flex w-full items-center", children: [inputValue && (_jsxs("span", { className: cx("absolute top-1/2 z-0 inline-flex w-full -translate-y-1/2 truncate", sizes[size].textContainer), "aria-hidden": "true", children: [_jsx("p", { className: cx("font-medium text-primary", sizes[size].text), children: first }), last && _jsx("p", { className: cx("-ml-0.75 text-tertiary", sizes[size].text), children: last })] })), _jsx(AriaInput, { placeholder: placeholder, className: cx("z-10 w-full appearance-none bg-transparent text-transparent caret-alpha-black/90 placeholder:text-placeholder focus:outline-hidden disabled:cursor-not-allowed", sizes[size].text) })] }), shortcut && (_jsx("div", { className: cx("absolute inset-y-0.5 right-0.5 z-10 hidden items-center rounded-r-[inherit] bg-linear-to-r from-transparent to-bg-primary to-40% pl-8 md:flex", sizes[size].shortcut, shortcutClassName), children: _jsx("span", { className: "pointer-events-none rounded px-1 py-px text-xs font-medium text-quaternary ring-1 ring-secondary select-none ring-inset", "aria-hidden": "true", children: "\u2318K" }) }))] })));
};
export const ComboBox = (_a) => {
    var { placeholder = "Search", shortcut = true, size = "md", children, items, shortcutClassName, icon, hideRequiredIndicator } = _a, otherProps = __rest(_a, ["placeholder", "shortcut", "size", "children", "items", "shortcutClassName", "icon", "hideRequiredIndicator"]);
    const placeholderRef = useRef(null);
    const [popoverWidth, setPopoverWidth] = useState("");
    // Resize observer for popover width
    const onResize = useCallback(() => {
        var _a;
        if (!placeholderRef.current)
            return;
        const divRect = (_a = placeholderRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        setPopoverWidth(divRect.width + "px");
    }, [placeholderRef, setPopoverWidth]);
    useResizeObserver({
        ref: placeholderRef,
        box: "border-box",
        onResize,
    });
    return (_jsx(SelectContext.Provider, { value: { size }, children: _jsx(AriaComboBox, Object.assign({ menuTrigger: "focus" }, otherProps, { children: (state) => (_jsxs("div", { className: "flex flex-col gap-1.5", children: [otherProps.label && (_jsx(Label, { isRequired: hideRequiredIndicator ? false : state.isRequired, tooltip: otherProps.tooltip, children: otherProps.label })), _jsx(ComboBoxValue, { ref: placeholderRef, placeholder: placeholder, shortcut: shortcut, shortcutClassName: shortcutClassName, icon: icon, size: size, 
                        // This is a workaround to correctly calculating the trigger width
                        // while using ResizeObserver wasn't 100% reliable.
                        onFocus: onResize, onPointerEnter: onResize }), _jsx(Popover, { size: size, triggerRef: placeholderRef, style: { width: popoverWidth }, className: otherProps.popoverClassName, children: _jsx(AriaListBox, { items: items, className: "size-full outline-hidden", children: children }) }), otherProps.hint && (_jsx(HintText, { isInvalid: state.isInvalid, className: cx(size === "sm" && "text-xs"), children: otherProps.hint }))] })) })) }));
};
