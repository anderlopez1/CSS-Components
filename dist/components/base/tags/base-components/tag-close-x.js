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
import { XClose } from "@untitledui/icons";
import { Button as AriaButton } from "react-aria-components";
import { cx } from "../../../../utils/cx";
const styles = {
    sm: { root: "p-0.5", icon: "size-2.5 stroke-[3.6px]" },
    md: { root: "p-0.5", icon: "size-3 stroke-[2.86px]" },
    lg: { root: "p-0.75", icon: "size-3.5 stroke-3" },
};
export const TagCloseX = (_a) => {
    var { size = "md", className } = _a, otherProps = __rest(_a, ["size", "className"]);
    return (_jsx(AriaButton, Object.assign({ slot: "remove", "aria-label": "Remove this tag", className: cx("flex cursor-pointer rounded-[3px] text-fg-quaternary outline-transparent transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring disabled:cursor-not-allowed", styles[size].root, className) }, otherProps, { children: _jsx(XClose, { className: cx("transition-inherit-all", styles[size].icon) }) })));
};
