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
import { createContext, isValidElement, useContext } from "react";
import { ToggleButton as AriaToggleButton, ToggleButtonGroup as AriaToggleButtonGroup, } from "react-aria-components";
import { cx, sortCx } from "../../../utils/cx";
import { isReactComponent } from "../../../utils/is-react-component";
export const styles = sortCx({
    common: {
        root: [
            "group/button-group inline-flex h-max cursor-pointer items-center bg-primary font-semibold whitespace-nowrap text-secondary shadow-skeuomorphic ring-1 ring-primary outline-brand transition duration-100 ease-linear ring-inset",
            // Hover and focus styles
            "hover:bg-primary_hover hover:text-secondary_hover focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
            // Disabled styles
            "disabled:cursor-not-allowed disabled:text-secondary/50 disabled:*:opacity-50",
            // Selected styles
            "selected:bg-primary_hover selected:text-secondary_hover",
        ].join(" "),
        icon: "pointer-events-none text-fg-quaternary transition-[inherit] group-hover/button-group:text-fg-quaternary_hover group-selected/button-group:text-fg-quaternary_hover",
    },
    sizes: {
        sm: {
            root: "gap-1.5 px-3.5 py-2 text-sm not-last:pr-[calc(calc(var(--spacing)*3.5)+1px)] first:rounded-l-lg last:rounded-r-lg data-icon-leading:pl-3 data-icon-only:px-2.5",
            icon: "size-5",
        },
        md: {
            root: "gap-1.5 px-4 py-2.5 text-sm not-last:pr-[calc(calc(var(--spacing)*4)+1px)] first:rounded-l-lg last:rounded-r-lg data-icon-leading:pl-3.5 data-icon-only:px-3",
            icon: "size-5",
        },
        lg: {
            root: "gap-2 px-4.5 py-2.5 text-md not-last:pr-[calc(calc(var(--spacing)*4.5)+1px)] first:rounded-l-lg last:rounded-r-lg data-icon-leading:pl-4 data-icon-only:px-3.5",
            icon: "size-5",
        },
    },
});
const ButtonGroupContext = createContext({ size: "md" });
export const ButtonGroupItem = (_a) => {
    var { iconLeading: IconLeading, iconTrailing: IconTrailing, children, className } = _a, otherProps = __rest(_a, ["iconLeading", "iconTrailing", "children", "className"]);
    const context = useContext(ButtonGroupContext);
    if (!context) {
        throw new Error("ButtonGroupItem must be used within a ButtonGroup component");
    }
    const { size } = context;
    const isIcon = (IconLeading || IconTrailing) && !children;
    return (_jsxs(AriaToggleButton, Object.assign({}, otherProps, { "data-icon-only": isIcon ? true : undefined, "data-icon-leading": IconLeading ? true : undefined, className: cx(styles.common.root, styles.sizes[size].root, className), children: [isReactComponent(IconLeading) && _jsx(IconLeading, { className: cx(styles.common.icon, styles.sizes[size].icon) }), isValidElement(IconLeading) && IconLeading, children, isReactComponent(IconTrailing) && _jsx(IconTrailing, { className: cx(styles.common.icon, styles.sizes[size].icon) }), isValidElement(IconTrailing) && IconTrailing] })));
};
export const ButtonGroup = (_a) => {
    var { children, size = "md", className } = _a, otherProps = __rest(_a, ["children", "size", "className"]);
    return (_jsx(ButtonGroupContext.Provider, { value: { size }, children: _jsx(AriaToggleButtonGroup, Object.assign({ selectionMode: "single", className: cx("relative z-0 inline-flex w-max -space-x-px rounded-lg shadow-xs", className) }, otherProps, { children: children })) }));
};
