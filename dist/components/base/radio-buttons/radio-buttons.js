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
import { createContext, useContext } from "react";
import { Radio as AriaRadio, RadioGroup as AriaRadioGroup, } from "react-aria-components";
import { cx } from "../../../utils/cx";
const RadioGroupContext = createContext(null);
export const RadioButtonBase = ({ className, isFocusVisible, isSelected, isDisabled, size = "sm" }) => {
    return (_jsx("div", { className: cx("flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full bg-primary ring-1 ring-primary ring-inset", size === "md" && "size-5", isSelected && "bg-brand-solid ring-brand-solid", isDisabled && "cursor-not-allowed opacity-50", isDisabled && !isSelected && "bg-tertiary", isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring", className), children: _jsx("div", { className: cx("size-1.5 rounded-full bg-fg-white opacity-0 transition-inherit-all", size === "md" && "size-2", isSelected && "opacity-100") }) }));
};
RadioButtonBase.displayName = "RadioButtonBase";
export const RadioButton = (_a) => {
    var _b;
    var { label, hint, className, size = "sm" } = _a, ariaRadioProps = __rest(_a, ["label", "hint", "className", "size"]);
    const context = useContext(RadioGroupContext);
    size = (_b = context === null || context === void 0 ? void 0 : context.size) !== null && _b !== void 0 ? _b : size;
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
    return (_jsx(AriaRadio, Object.assign({}, ariaRadioProps, { className: (state) => cx("flex items-start", state.isDisabled && "cursor-not-allowed", sizes[size].root, typeof className === "function" ? className(state) : className), children: ({ isSelected, isDisabled, isFocusVisible }) => (_jsxs(_Fragment, { children: [_jsx(RadioButtonBase, { size: size, isSelected: isSelected, isDisabled: isDisabled, isFocusVisible: isFocusVisible, className: label || hint ? "mt-0.5" : "" }), (label || hint) && (_jsxs("div", { className: cx("inline-flex flex-col", sizes[size].textWrapper), children: [label && _jsx("p", { className: cx("text-secondary select-none", sizes[size].label), children: label }), hint && (_jsx("span", { className: cx("text-tertiary", sizes[size].hint), onClick: (event) => event.stopPropagation(), children: hint }))] }))] })) })));
};
RadioButton.displayName = "RadioButton";
export const RadioGroup = (_a) => {
    var { children, className, size = "sm" } = _a, props = __rest(_a, ["children", "className", "size"]);
    return (_jsx(RadioGroupContext.Provider, { value: { size }, children: _jsx(AriaRadioGroup, Object.assign({}, props, { className: cx("flex flex-col gap-4", className), children: children })) }));
};
