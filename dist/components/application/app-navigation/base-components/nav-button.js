"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pressable } from "react-aria-components";
import { Tooltip } from "../../../../components/base/tooltip/tooltip";
import { cx } from "../../../../utils/cx";
export const NavButton = ({ current, label, href, icon: Icon, className, tooltipPlacement = "right", onClick, children }) => {
    const iconOnly = !children;
    return (_jsx(Tooltip, { isDisabled: !label, title: label, placement: tooltipPlacement, children: _jsx(Pressable, { children: _jsxs("a", { href: href, "aria-label": label, onClick: onClick, className: cx("group/item relative flex w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-primary outline-focus-ring transition duration-100 ease-linear select-none hover:bg-primary_hover focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2", current && "bg-secondary hover:bg-secondary_hover", iconOnly ? "size-9" : "px-2 py-1.5", className), children: [Icon && (_jsx(Icon, { "aria-hidden": "true", className: cx("size-5 shrink-0 text-fg-quaternary transition-inherit-all group-hover/item:text-fg-quaternary_hover", current && "text-fg-quaternary_hover") })), children && (_jsx("span", { className: cx("px-0.5 text-sm font-semibold transition duration-100 ease-linear group-hover/item:text-secondary_hover", current && "text-secondary_hover"), children: children }))] }) }) }));
};
