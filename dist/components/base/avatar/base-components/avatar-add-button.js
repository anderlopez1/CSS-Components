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
import { Plus } from "@untitledui/icons";
import { Tooltip as AriaTooltip, TooltipTrigger as AriaTooltipTrigger } from "../../../../components/base/tooltip/tooltip";
import { cx } from "../../../../utils/cx";
const sizes = {
    xs: { root: "size-6", icon: "size-4" },
    sm: { root: "size-8", icon: "size-4" },
    md: { root: "size-10", icon: "size-5" },
};
export const AvatarAddButton = (_a) => {
    var { size, className, title = "Add user" } = _a, props = __rest(_a, ["size", "className", "title"]);
    return (_jsx(AriaTooltip, { title: title, children: _jsx(AriaTooltipTrigger, Object.assign({}, props, { "aria-label": title, className: cx("flex cursor-pointer items-center justify-center rounded-full border border-dashed border-primary bg-primary text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50", sizes[size].root, className), children: _jsx(Plus, { className: cx("text-current transition-inherit-all", sizes[size].icon) }) })) }));
};
