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
import { createContext, useContext, useState } from "react";
import { Eye, EyeOff, HelpCircle, InfoCircle } from "@untitledui/icons";
import { Button as AriaButton, Group as AriaGroup, Input as AriaInput, TextField as AriaTextField } from "react-aria-components";
import { HintText } from "../../../components/base/input/hint-text";
import { Label } from "../../../components/base/input/label";
import { Tooltip, TooltipTrigger } from "../../../components/base/tooltip/tooltip";
import { cx, sortCx } from "../../../utils/cx";
export const InputBase = (_a) => {
    var { ref, tooltip, shortcut, groupRef, size = "md", isInvalid, isDisabled, isRequired, icon: Icon, placeholder, wrapperClassName, tooltipClassName, inputClassName, iconClassName, type = "text" } = _a, inputProps = __rest(_a, ["ref", "tooltip", "shortcut", "groupRef", "size", "isInvalid", "isDisabled", "isRequired", "icon", "placeholder", "wrapperClassName", "tooltipClassName", "inputClassName", "iconClassName", "type"]);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // Check if the input has a leading icon or tooltip
    const hasTrailingIcon = tooltip || isInvalid;
    const hasLeadingIcon = Icon;
    // If the input is inside a `TextFieldContext`, use its context to simplify applying styles
    const context = useContext(TextFieldContext);
    const inputSize = (context === null || context === void 0 ? void 0 : context.size) || size;
    const sizes = sortCx({
        sm: {
            root: cx("px-3 py-2 text-sm", hasLeadingIcon && "pl-9", hasTrailingIcon && "pr-9"),
            iconLeading: "left-3 size-4 stroke-[2.25px]",
            iconTrailing: "right-3",
            shortcut: "pr-1.5",
        },
        md: {
            root: cx("px-3 py-2 text-md", hasLeadingIcon && "pl-10", hasTrailingIcon && "pr-9"),
            iconLeading: "left-3 size-5",
            iconTrailing: "right-3",
            shortcut: "pr-2",
        },
        lg: {
            root: cx("px-3.5 py-2.5 text-md", hasLeadingIcon && "pl-10.5", hasTrailingIcon && "pr-9.5"),
            iconLeading: "left-3.5 size-5",
            iconTrailing: "right-3.5",
            shortcut: "pr-2.5",
        },
    });
    return (_jsxs(AriaGroup, { isDisabled, isInvalid, ref: groupRef, className: ({ isFocusWithin, isDisabled, isInvalid }) => cx("group/input relative flex w-full flex-row place-content-center place-items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary transition-shadow duration-100 ease-linear ring-inset", isFocusWithin && !isDisabled && "ring-2 ring-brand", 
        // Disabled state styles
        isDisabled && "cursor-not-allowed opacity-50", "group-disabled:cursor-not-allowed group-disabled:opacity-50", 
        // Invalid state styles
        isInvalid && "ring-error_subtle", "group-invalid:ring-error_subtle", 
        // Invalid state with focus-within styles
        isInvalid && isFocusWithin && "ring-2 ring-error", isFocusWithin && "group-invalid:ring-2 group-invalid:ring-error", context === null || context === void 0 ? void 0 : context.wrapperClassName, wrapperClassName), children: [Icon && (_jsx(Icon, { className: cx("pointer-events-none absolute text-fg-quaternary", sizes[inputSize].iconLeading, context === null || context === void 0 ? void 0 : context.iconClassName, iconClassName) })), _jsx(AriaInput, Object.assign({}, inputProps, { ref: ref, required: isRequired, type: type === "password" && isPasswordVisible ? "text" : type, placeholder: placeholder, className: cx("m-0 w-full bg-transparent text-primary ring-0 outline-hidden placeholder:text-placeholder autofill:rounded-lg autofill:text-primary disabled:cursor-not-allowed", sizes[inputSize].root, context === null || context === void 0 ? void 0 : context.inputClassName, inputClassName) })), tooltip && type !== "password" && (_jsx(Tooltip, { title: tooltip, placement: "top", children: _jsx(TooltipTrigger, { className: cx("absolute cursor-pointer text-fg-quaternary transition duration-100 ease-linear group-invalid/input:hidden hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover", sizes[inputSize].iconTrailing, context === null || context === void 0 ? void 0 : context.tooltipClassName, tooltipClassName), children: _jsx(HelpCircle, { className: "size-4 stroke-[2.25px]" }) }) })), type !== "password" && (_jsx(InfoCircle, { className: cx("pointer-events-none absolute hidden size-4 stroke-[2.25px] text-fg-error-secondary group-invalid/input:block", sizes[inputSize].iconTrailing, context === null || context === void 0 ? void 0 : context.tooltipClassName, tooltipClassName) })), type === "password" && (_jsx(AriaButton, { "aria-label": "Toggle password visibility", onClick: () => setIsPasswordVisible(!isPasswordVisible), className: cx("absolute flex cursor-pointer items-center justify-center text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover focus:outline-hidden", sizes[inputSize].iconTrailing), children: isPasswordVisible ? _jsx(EyeOff, { className: "size-4 stroke-[2.25px]" }) : _jsx(Eye, { className: "size-4 stroke-[2.25px]" }) })), shortcut && (_jsx("div", { className: cx("pointer-events-none absolute inset-y-0.5 right-0.5 z-10 hidden items-center rounded-r-[inherit] bg-linear-to-r from-transparent to-bg-primary to-40% pl-8 md:flex", sizes[inputSize].shortcut), children: _jsx("span", { "aria-hidden": "true", className: "pointer-events-none rounded px-1 py-px text-xs font-medium text-quaternary ring-1 ring-secondary select-none ring-inset", children: typeof shortcut === "string" ? shortcut : "⌘K" }) }))] }));
};
InputBase.displayName = "InputBase";
const TextFieldContext = createContext({});
export const TextField = (_a) => {
    var { className, size = "md", inputClassName, wrapperClassName, iconClassName, tooltipClassName } = _a, props = __rest(_a, ["className", "size", "inputClassName", "wrapperClassName", "iconClassName", "tooltipClassName"]);
    return (_jsx(TextFieldContext.Provider, { value: { inputClassName, wrapperClassName, iconClassName, tooltipClassName, size }, children: _jsx(AriaTextField, Object.assign({}, props, { "data-input-wrapper": true, "data-input-size": size, className: (state) => cx("group flex h-max w-full flex-col items-start justify-start gap-1.5", typeof className === "function" ? className(state) : className) })) }));
};
TextField.displayName = "TextField";
export const Input = (_a) => {
    var { size = "md", placeholder, icon: Icon, label, hint, shortcut, hideRequiredIndicator, className, ref, groupRef, tooltip, iconClassName, inputClassName, wrapperClassName, tooltipClassName, type = "text" } = _a, props = __rest(_a, ["size", "placeholder", "icon", "label", "hint", "shortcut", "hideRequiredIndicator", "className", "ref", "groupRef", "tooltip", "iconClassName", "inputClassName", "wrapperClassName", "tooltipClassName", "type"]);
    return (_jsx(TextField, Object.assign({ "aria-label": !label ? placeholder : undefined }, props, { size: size, className: className, children: ({ isRequired, isInvalid }) => (_jsxs(_Fragment, { children: [label && (_jsx(Label, { isRequired: hideRequiredIndicator ? !hideRequiredIndicator : isRequired, isInvalid: isInvalid, children: label })), _jsx(InputBase, { ref,
                    groupRef,
                    size,
                    placeholder,
                    icon: Icon,
                    shortcut,
                    iconClassName,
                    inputClassName,
                    wrapperClassName,
                    tooltipClassName,
                    tooltip,
                    type }), hint && _jsx(HintText, { isInvalid: isInvalid, children: hint })] })) })));
};
Input.displayName = "Input";
