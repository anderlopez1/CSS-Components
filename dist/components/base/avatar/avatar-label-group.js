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
import { cx } from "../../../utils/cx";
import { Avatar } from "./avatar";
const styles = {
    sm: { title: "text-sm ", subtitle: "text-xs" },
    md: { title: "text-sm ", subtitle: "text-sm" },
    lg: { title: "text-md ", subtitle: "text-md" },
};
export const AvatarLabelGroup = (_a) => {
    var { title, subtitle, className, rounded, avatarClassName } = _a, props = __rest(_a, ["title", "subtitle", "className", "rounded", "avatarClassName"]);
    return (_jsxs("figure", { className: cx("group flex min-w-0 flex-1 items-center gap-2", className), children: [_jsx(Avatar, Object.assign({ border: true, rounded: rounded, className: avatarClassName }, props)), _jsxs("figcaption", { className: "min-w-0 flex-1", children: [_jsx("p", { className: cx("font-semibold text-primary", styles[props.size].title), children: title }), _jsx("p", { className: cx("truncate text-tertiary", styles[props.size].subtitle), children: subtitle })] })] }));
};
