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
import { isValidElement } from "react";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import { Tooltip } from "../../../components/base/tooltip/tooltip";
import { cx } from "../../../utils/cx";
import { isReactComponent } from "../../../utils/is-react-component";
export const styles = {
    secondary: "bg-primary text-fg-quaternary shadow-xs-skeuomorphic ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-fg-quaternary_hover disabled:shadow-xs",
    tertiary: "text-fg-quaternary hover:bg-primary_hover hover:text-fg-quaternary_hover",
};
export const ButtonUtility = (_a) => {
    var { tooltip, className, isDisabled, icon: Icon, size = "sm", color = "secondary", tooltipPlacement = "top" } = _a, otherProps = __rest(_a, ["tooltip", "className", "isDisabled", "icon", "size", "color", "tooltipPlacement"]);
    const href = "href" in otherProps ? otherProps.href : undefined;
    const Component = href ? AriaLink : AriaButton;
    let props = {};
    if (href) {
        props = Object.assign(Object.assign(Object.assign({}, otherProps), { href: isDisabled ? undefined : href }), (isDisabled ? { "data-rac": true, "data-disabled": true } : {}));
    }
    else {
        props = Object.assign(Object.assign({}, otherProps), { type: otherProps.type || "button", isDisabled });
    }
    const content = (_jsxs(Component, Object.assign({ "aria-label": tooltip }, props, { className: cx("group relative inline-flex h-max cursor-pointer items-center justify-center rounded-md p-1.5 outline-focus-ring transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50", styles[color], 
        // Icon styles
        "*:data-icon:pointer-events-none *:data-icon:shrink-0 *:data-icon:text-current *:data-icon:transition-inherit-all", size === "xs" ? "*:data-icon:size-4" : "*:data-icon:size-5", className), children: [isReactComponent(Icon) && _jsx(Icon, { "data-icon": true }), isValidElement(Icon) && Icon] })));
    if (tooltip) {
        return (_jsx(Tooltip, { title: tooltip, placement: tooltipPlacement, isDisabled: isDisabled, offset: size === "xs" ? 4 : 6, children: content }));
    }
    return content;
};
