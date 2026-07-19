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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TextArea as AriaTextArea, TextField as AriaTextField } from "react-aria-components";
import { HintText } from "../../../components/base/input/hint-text";
import { Label } from "../../../components/base/input/label";
import { cx } from "../../../utils/cx";
// Creates a data URL for an SVG resize handle with a given color.
const getResizeHandleBg = (color) => {
    return `url(data:image/svg+xml;base64,${btoa(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L2 10" stroke="${color}" stroke-linecap="round"/><path d="M11 7L7 11" stroke="${color}" stroke-linecap="round"/></svg>`)})`;
};
export const TextAreaBase = (_a) => {
    var { className, size = "md" } = _a, props = __rest(_a, ["className", "size"]);
    return (_jsx(AriaTextArea, Object.assign({}, props, { style: {
            "--resize-handle-bg": getResizeHandleBg("#D5D7DA"),
            "--resize-handle-bg-dark": getResizeHandleBg("#373A41"),
        }, className: (state) => cx("w-full scroll-py-3 rounded-lg bg-primary text-primary shadow-xs ring-1 ring-primary transition duration-100 ease-linear ring-inset placeholder:text-placeholder autofill:rounded-lg autofill:text-primary focus:outline-hidden", size === "sm" && "p-3 text-sm", size === "md" && "px-3.5 py-3 text-md", 
        // Resize handle
        "[&::-webkit-resizer]:bg-(image:--resize-handle-bg) [&::-webkit-resizer]:bg-contain dark:[&::-webkit-resizer]:bg-(image:--resize-handle-bg-dark)", state.isFocused && !state.isDisabled && "ring-2 ring-brand", state.isDisabled && "cursor-not-allowed opacity-50", state.isInvalid && "ring-error_subtle", state.isInvalid && state.isFocused && "ring-2 ring-error", typeof className === "function" ? className(state) : className) })));
};
TextAreaBase.displayName = "TextAreaBase";
export const TextArea = (_a) => {
    var { label, hint, tooltip, textAreaRef, hideRequiredIndicator, textAreaClassName, placeholder, className, rows, cols, size = "md" } = _a, props = __rest(_a, ["label", "hint", "tooltip", "textAreaRef", "hideRequiredIndicator", "textAreaClassName", "placeholder", "className", "rows", "cols", "size"]);
    return (_jsx(AriaTextField, Object.assign({}, props, { className: (state) => cx("group flex h-max w-full flex-col items-start justify-start gap-1.5", typeof className === "function" ? className(state) : className), children: ({ isInvalid, isRequired }) => (_jsxs(_Fragment, { children: [label && (_jsx(Label, { isRequired: hideRequiredIndicator ? !hideRequiredIndicator : isRequired, tooltip: tooltip, children: label })), _jsx(TextAreaBase, { placeholder: placeholder, className: textAreaClassName, ref: textAreaRef, rows: rows, cols: cols, size: size }), hint && (_jsx(HintText, { isInvalid: isInvalid, size: size, children: hint }))] })) })));
};
TextArea.displayName = "TextArea";
