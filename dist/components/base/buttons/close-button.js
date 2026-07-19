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
import { X as CloseIcon } from "@untitledui/icons";
import { Button as AriaButton } from "react-aria-components";
import { cx } from "../../../utils/cx";
const sizes = {
    xs: { root: "size-7", icon: "size-4" },
    sm: { root: "size-9", icon: "size-5" },
    md: { root: "size-10", icon: "size-5" },
    lg: { root: "size-11", icon: "size-6" },
};
const themes = {
    light: "text-fg-quaternary hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2 outline-focus-ring",
    dark: "text-fg-white/70 hover:text-fg-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 outline-focus-ring",
};
export const CloseButton = (_a) => {
    var { label, className, size = "sm", theme = "light" } = _a, otherProps = __rest(_a, ["label", "className", "size", "theme"]);
    return (_jsx(AriaButton, Object.assign({}, otherProps, { "aria-label": label || "Close", className: (state) => cx("flex cursor-pointer items-center justify-center rounded-lg p-2 transition duration-100 ease-linear focus:outline-hidden", sizes[size].root, themes[theme], typeof className === "function" ? className(state) : className), children: _jsx(CloseIcon, { "aria-hidden": "true", className: cx("shrink-0 transition-inherit-all", sizes[size].icon) }) })));
};
