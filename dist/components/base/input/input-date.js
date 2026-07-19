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
import { HelpCircle, InfoCircle } from "@untitledui/icons";
import { DateField as AriaDateField, DateInput as AriaDateInput, DateSegment as AriaDateSegment, Group as AriaGroup, } from "react-aria-components";
import { cx, sortCx } from "../../../utils/cx";
import { Tooltip, TooltipTrigger } from "../tooltip/tooltip";
import { HintText } from "./hint-text";
import { Label } from "./label";
const DateFieldContext = createContext({});
export const InputDateBase = (_a) => {
    var { tooltip, shortcut, groupRef, size = "md", isInvalid, isDisabled, icon: Icon, wrapperClassName, tooltipClassName, iconClassName } = _a, inputProps = __rest(_a, ["tooltip", "shortcut", "groupRef", "size", "isInvalid", "isDisabled", "icon", "wrapperClassName", "tooltipClassName", "iconClassName"]);
    // Check if the input has a leading icon or tooltip
    const hasTrailingIcon = tooltip || isInvalid;
    const hasLeadingIcon = Icon;
    // If the input is inside a `TextFieldContext`, use its context to simplify applying styles
    const context = useContext(DateFieldContext);
    const inputSize = (context === null || context === void 0 ? void 0 : context.size) || size;
    const sizes = sortCx({
        sm: {
            root: cx("px-3 py-2 text-sm", hasTrailingIcon && "pr-9", hasLeadingIcon && "pl-8.5"),
            iconLeading: "left-3 size-4 stroke-[2.25px]",
            iconTrailing: "right-3",
            shortcut: "pr-2.5",
        },
        md: {
            root: cx("px-3 py-2 text-md", hasTrailingIcon && "pr-9", hasLeadingIcon && "pl-10"),
            iconLeading: "left-3 size-5",
            iconTrailing: "right-3",
            shortcut: "pr-2.5",
        },
        lg: {
            root: cx("px-3.5 py-2.5 text-md", hasTrailingIcon && "pr-9.5", hasLeadingIcon && "pl-10.5"),
            iconLeading: "left-3.5 size-5",
            iconTrailing: "right-3.5",
            shortcut: "pr-3",
        },
    });
    return (_jsxs(AriaGroup, { isDisabled, isInvalid, ref: groupRef, className: ({ isFocusWithin, isDisabled, isInvalid }) => cx("group/input relative flex w-full flex-row place-content-center place-items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary transition-shadow duration-100 ease-linear ring-inset", isFocusWithin && !isDisabled && "ring-2 ring-brand", 
        // Disabled state styles
        isDisabled && "cursor-not-allowed opacity-50 in-data-input-wrapper:opacity-100", "group-disabled:cursor-not-allowed group-disabled:opacity-50 in-data-input-wrapper:group-disabled:opacity-100", 
        // Invalid state styles
        isInvalid && "ring-error_subtle", "group-invalid:ring-error_subtle", 
        // Invalid state with focus-within styles
        isInvalid && isFocusWithin && "ring-2 ring-error", isFocusWithin && "group-invalid:ring-2 group-invalid:ring-error", context === null || context === void 0 ? void 0 : context.wrapperClassName, wrapperClassName), children: [Icon && (_jsx(Icon, { className: cx("pointer-events-none absolute text-fg-quaternary", sizes[inputSize].iconLeading, context === null || context === void 0 ? void 0 : context.iconClassName, iconClassName) })), _jsx(AriaDateInput, Object.assign({}, inputProps, { className: cx("flex w-full", sizes[size].root, typeof inputProps.className === "string" && inputProps.className), children: (segment) => (_jsx(AriaDateSegment, { segment: segment, className: cx("rounded px-0.5 text-primary tabular-nums caret-transparent focus:bg-brand-solid focus:font-medium focus:text-white focus:outline-hidden", 
                    // The placeholder segment.
                    segment.isPlaceholder && "text-placeholder uppercase", 
                    // The separator "/" segment.
                    segment.type === "literal" && "text-fg-quaternary") })) })), tooltip && (_jsx(Tooltip, { title: tooltip, placement: "top", children: _jsx(TooltipTrigger, { className: cx("absolute cursor-pointer text-fg-quaternary transition duration-200 group-invalid/input:hidden hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover", sizes[inputSize].iconTrailing, context === null || context === void 0 ? void 0 : context.tooltipClassName, tooltipClassName), children: _jsx(HelpCircle, { className: "size-4 stroke-[2.25px]" }) }) })), _jsx(InfoCircle, { className: cx("pointer-events-none absolute hidden size-4 stroke-[2.25px] text-fg-error-secondary group-invalid/input:block", sizes[inputSize].iconTrailing, context === null || context === void 0 ? void 0 : context.tooltipClassName, tooltipClassName) }), shortcut && (_jsx("div", { className: cx("pointer-events-none absolute inset-y-0.5 right-0.5 z-10 flex items-center rounded-r-[inherit] bg-linear-to-r from-transparent to-bg-primary to-40% pl-8", sizes[inputSize].shortcut), children: _jsx("span", { "aria-hidden": "true", className: "pointer-events-none rounded px-1 py-px text-xs font-medium text-quaternary ring-1 ring-secondary select-none ring-inset", children: typeof shortcut === "string" ? shortcut : "⌘K" }) }))] }));
};
export const InputDate = (_a) => {
    var { size = "md", placeholder, icon: Icon, label, hint, shortcut, hideRequiredIndicator, className, ref, groupRef, tooltip, iconClassName, inputClassName, wrapperClassName, tooltipClassName } = _a, props = __rest(_a, ["size", "placeholder", "icon", "label", "hint", "shortcut", "hideRequiredIndicator", "className", "ref", "groupRef", "tooltip", "iconClassName", "inputClassName", "wrapperClassName", "tooltipClassName"]);
    return (_jsx(AriaDateField, Object.assign({}, props, { className: (state) => cx("group flex h-max w-full flex-col items-start justify-start gap-1.5", typeof className === "function" ? className(state) : className), children: ({ isInvalid, state }) => (_jsxs(_Fragment, { children: [label && (_jsx(Label, { isRequired: hideRequiredIndicator ? !hideRequiredIndicator : state.isRequired, isInvalid: isInvalid, children: label })), _jsx(InputDateBase, { className: inputClassName, ref,
                    groupRef,
                    size,
                    placeholder,
                    icon: Icon,
                    shortcut,
                    iconClassName,
                    wrapperClassName,
                    tooltipClassName,
                    tooltip }), hint && (_jsx(HintText, { isInvalid: isInvalid, className: cx(size === "sm" && "text-xs"), children: hint }))] })) })));
};
