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
import { ChevronDown, ChevronUp, Minus, Plus } from "@untitledui/icons";
import { Button as AriaButton, Group as AriaGroup, Input as AriaInput, NumberField as AriaNumberField, } from "react-aria-components";
import { cx } from "../../../utils/cx";
import { Button } from "../buttons/button";
import { HintText } from "./hint-text";
import { Label } from "./label";
const NumberFieldContext = createContext({});
const styles = {
    sm: "px-3 py-2 text-sm",
    md: "px-3 py-2 text-md",
    lg: "px-3.5 py-2.5 text-md",
};
export const InputNumberBase = (_a) => {
    var { ref, groupRef, size = "md", isInvalid, isDisabled, placeholder, wrapperClassName, inputClassName, orientation = "vertical", 
    // Omit this prop to avoid invalid HTML attribute warning
    isRequired: _isRequired } = _a, inputProps = __rest(_a, ["ref", "groupRef", "size", "isInvalid", "isDisabled", "placeholder", "wrapperClassName", "inputClassName", "orientation", "isRequired"]);
    // If the input is inside a `TextFieldContext`, use its context to simplify applying styles
    const context = useContext(NumberFieldContext);
    const inputSize = (context === null || context === void 0 ? void 0 : context.size) || size;
    return (_jsxs(AriaGroup, { isDisabled, isInvalid, ref: groupRef, className: ({ isFocusWithin, isDisabled, isInvalid }) => cx("relative flex w-full flex-row items-stretch rounded-lg bg-primary shadow-xs outline-1 -outline-offset-1 outline-primary transition-all duration-100 ease-linear", isFocusWithin && !isDisabled && "outline-2 -outline-offset-2 outline-brand", 
        // Disabled state styles
        isDisabled && "cursor-not-allowed opacity-50 in-data-input-wrapper:opacity-100", "group-disabled:cursor-not-allowed group-disabled:opacity-50 in-data-input-wrapper:group-disabled:opacity-100", 
        // Invalid state styles
        isInvalid && "outline-error_subtle", "group-invalid:outline-error_subtle", 
        // Invalid state with focus-within styles
        isInvalid && isFocusWithin && "outline-2 -outline-offset-2 outline-error", isFocusWithin && "group-invalid:outline-2 group-invalid:-outline-offset-2 group-invalid:outline-error", context === null || context === void 0 ? void 0 : context.wrapperClassName, wrapperClassName), children: [orientation === "horizontal" && (_jsx(Button, { size: size, iconLeading: Minus, slot: "decrement", color: "tertiary", className: "static h-full rounded-r-none" })), _jsx(AriaInput, Object.assign({}, inputProps, { ref: ref, placeholder: placeholder, className: cx("m-0 w-full bg-transparent text-primary ring-0 outline-hidden placeholder:text-placeholder autofill:rounded-lg autofill:text-primary disabled:cursor-not-allowed", styles[inputSize], context === null || context === void 0 ? void 0 : context.inputClassName, inputClassName) })), orientation === "horizontal" && (_jsx(Button, { size: size, iconLeading: Plus, slot: "increment", color: "tertiary", className: "static h-full rounded-l-none" })), orientation === "vertical" && (_jsxs("div", { className: cx("flex w-7 shrink-0 flex-col border-l border-primary", size === "lg" && "w-7.5"), children: [_jsx(AriaButton, { slot: "increment", className: "flex flex-1 cursor-pointer items-center justify-center text-fg-quaternary outline-brand transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover disabled:cursor-not-allowed disabled:opacity-50", children: _jsx(ChevronUp, { className: cx("size-3 stroke-3", size === "lg" && "size-3.5 stroke-[2.57px]") }) }), _jsx(AriaButton, { slot: "decrement", className: "flex flex-1 cursor-pointer items-center justify-center border-t border-primary text-fg-quaternary outline-brand transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover disabled:cursor-not-allowed disabled:opacity-50", children: _jsx(ChevronDown, { className: cx("size-3 stroke-3", size === "lg" && "size-3.5 stroke-[2.57px]") }) })] }))] }));
};
export const InputNumber = (_a) => {
    var { size = "md", placeholder, label, hint, hideRequiredIndicator, className, ref, groupRef, inputClassName, wrapperClassName, orientation = "vertical" } = _a, props = __rest(_a, ["size", "placeholder", "label", "hint", "hideRequiredIndicator", "className", "ref", "groupRef", "inputClassName", "wrapperClassName", "orientation"]);
    return (_jsx(AriaNumberField, Object.assign({}, props, { className: (state) => cx("group flex h-max w-full flex-col items-start justify-start gap-1.5", typeof className === "function" ? className(state) : className), children: ({ isInvalid, isRequired }) => (_jsxs(_Fragment, { children: [label && (_jsx(Label, { isRequired: hideRequiredIndicator ? !hideRequiredIndicator : isRequired, isInvalid: isInvalid, children: label })), _jsx(InputNumberBase, { ref,
                    groupRef,
                    size,
                    placeholder,
                    inputClassName,
                    wrapperClassName,
                    orientation }), hint && (_jsx(HintText, { isInvalid: isInvalid, className: cx(size === "sm" && "text-xs"), children: hint }))] })) })));
};
