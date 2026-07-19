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
import { Checkbox as AriaCheckbox } from "react-aria-components";
import { cx } from "../../../utils/cx";
export const CheckboxBase = ({ className, isSelected, isDisabled, isIndeterminate, size = "sm", isFocusVisible = false }) => {
    return (_jsxs("div", { className: cx("relative flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded bg-primary ring-1 ring-primary ring-inset", size === "md" && "size-5 rounded-md", (isSelected || isIndeterminate) && "bg-brand-solid ring-brand-solid", isDisabled && "cursor-not-allowed opacity-50", isDisabled && !(isSelected || isIndeterminate) && "bg-tertiary", isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring", className), children: [_jsx("svg", { "aria-hidden": "true", viewBox: "0 0 14 14", fill: "none", className: cx("pointer-events-none absolute h-3 w-2.5 text-fg-white opacity-0 transition-inherit-all", size === "md" && "size-3.5", isIndeterminate && "opacity-100"), children: _jsx("path", { d: "M2.91675 7H11.0834", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }), _jsx("svg", { "aria-hidden": "true", viewBox: "0 0 14 14", fill: "none", className: cx("pointer-events-none absolute size-3 text-fg-white opacity-0 transition-inherit-all", size === "md" && "size-3.5", isSelected && !isIndeterminate && "opacity-100"), children: _jsx("path", { d: "M11.6666 3.5L5.24992 9.91667L2.33325 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })] }));
};
CheckboxBase.displayName = "CheckboxBase";
export const Checkbox = (_a) => {
    var { label, hint, size = "sm", className } = _a, ariaCheckboxProps = __rest(_a, ["label", "hint", "size", "className"]);
    const sizes = {
        sm: {
            root: "gap-2",
            textWrapper: "",
            label: "text-sm font-medium",
            hint: "text-sm",
        },
        md: {
            root: "gap-3",
            textWrapper: "gap-0.5",
            label: "text-md font-medium",
            hint: "text-md",
        },
    };
    return (_jsx(AriaCheckbox, Object.assign({}, ariaCheckboxProps, { className: (state) => cx("flex items-start", state.isDisabled && "cursor-not-allowed", sizes[size].root, typeof className === "function" ? className(state) : className), children: ({ isSelected, isIndeterminate, isDisabled, isFocusVisible }) => (_jsxs(_Fragment, { children: [_jsx(CheckboxBase, { size: size, isSelected: isSelected, isIndeterminate: isIndeterminate, isDisabled: isDisabled, isFocusVisible: isFocusVisible, className: label || hint ? "mt-0.5" : "" }), (label || hint) && (_jsxs("div", { className: cx("inline-flex flex-col", sizes[size].textWrapper), children: [label && _jsx("p", { className: cx("text-secondary select-none", sizes[size].label), children: label }), hint && (_jsx("span", { className: cx("text-tertiary", sizes[size].hint), onClick: (event) => event.stopPropagation(), children: hint }))] }))] })) })));
};
Checkbox.displayName = "Checkbox";
