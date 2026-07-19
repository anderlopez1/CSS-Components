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
import { Button as AriaButton, OverlayArrow as AriaOverlayArrow, Tooltip as AriaTooltip, TooltipTrigger as AriaTooltipTrigger } from "react-aria-components";
import { cx } from "../../../utils/cx";
export const Tooltip = (_a) => {
    var { title, description, children, arrow = false, delay = 300, closeDelay = 0, trigger, isDisabled, isOpen, defaultOpen, offset = 6, crossOffset, placement = "top", onOpenChange } = _a, tooltipProps = __rest(_a, ["title", "description", "children", "arrow", "delay", "closeDelay", "trigger", "isDisabled", "isOpen", "defaultOpen", "offset", "crossOffset", "placement", "onOpenChange"]);
    const isTopOrBottomLeft = ["top left", "top end", "bottom left", "bottom end"].includes(placement);
    const isTopOrBottomRight = ["top right", "top start", "bottom right", "bottom start"].includes(placement);
    // Set negative cross offset for left and right placement to visually balance the tooltip.
    const calculatedCrossOffset = isTopOrBottomLeft ? -12 : isTopOrBottomRight ? 12 : 0;
    return (_jsxs(AriaTooltipTrigger, { trigger, delay, closeDelay, isDisabled, isOpen, defaultOpen, onOpenChange, children: [children, _jsx(AriaTooltip, Object.assign({}, tooltipProps, { offset: offset, placement: placement, crossOffset: crossOffset !== null && crossOffset !== void 0 ? crossOffset : calculatedCrossOffset, className: ({ isEntering, isExiting }) => cx(isEntering && "ease-out animate-in", isExiting && "ease-in animate-out"), children: ({ isEntering, isExiting }) => (_jsxs("div", { className: cx("z-50 flex max-w-xs origin-(--trigger-anchor-point) flex-col items-start gap-1 rounded-lg bg-primary-solid px-3 shadow-lg will-change-transform", description ? "py-3" : "py-2", isEntering &&
                        "ease-out animate-in fade-in zoom-in-95 in-placement-left:slide-in-from-right-0.5 in-placement-right:slide-in-from-left-0.5 in-placement-top:slide-in-from-bottom-0.5 in-placement-bottom:slide-in-from-top-0.5", isExiting &&
                        "ease-in animate-out fade-out zoom-out-95 in-placement-left:slide-out-to-right-0.5 in-placement-right:slide-out-to-left-0.5 in-placement-top:slide-out-to-bottom-0.5 in-placement-bottom:slide-out-to-top-0.5"), children: [_jsx("span", { className: "text-xs font-semibold text-white", children: title }), description && _jsx("span", { className: "text-xs font-medium text-tooltip-supporting-text", children: description }), arrow && (_jsx(AriaOverlayArrow, { children: _jsx("svg", { viewBox: "0 0 100 100", className: "size-2.5 fill-bg-primary-solid in-placement-left:-rotate-90 in-placement-right:rotate-90 in-placement-top:rotate-0 in-placement-bottom:rotate-180", children: _jsx("path", { d: "M0,0 L35.858,35.858 Q50,50 64.142,35.858 L100,0 Z" }) }) }))] })) }))] }));
};
export const TooltipTrigger = (_a) => {
    var { children, className } = _a, buttonProps = __rest(_a, ["children", "className"]);
    return (_jsx(AriaButton, Object.assign({}, buttonProps, { className: (values) => cx("h-max w-max outline-hidden", typeof className === "function" ? className(values) : className), children: children })));
};
