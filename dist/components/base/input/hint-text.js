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
import { jsx as _jsx } from "react/jsx-runtime";
import { Text as AriaText } from "react-aria-components";
import { cx } from "../../../utils/cx";
export const HintText = (_a) => {
    var { isInvalid, className, size = "md" } = _a, props = __rest(_a, ["isInvalid", "className", "size"]);
    return (_jsx(AriaText, Object.assign({}, props, { slot: isInvalid ? "errorMessage" : "description", className: cx("text-sm text-tertiary", 
        // Size
        size === "sm" && "text-xs", "in-data-[input-size=sm]:text-xs", 
        // Invalid state
        isInvalid && "text-error-primary", "group-invalid:text-error-primary", className) })));
};
HintText.displayName = "HintText";
