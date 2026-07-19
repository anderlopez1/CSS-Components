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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createContext, isValidElement, useContext } from "react";
import { Tab as AriaTab, TabList as AriaTabList, TabPanel as AriaTabPanel, Tabs as AriaTabs, TabsContext, useSlottedContext } from "react-aria-components";
import { Badge } from "../../../components/base/badges/badges";
import { cx } from "../../../utils/cx";
import { isReactComponent } from "../../../utils/is-react-component";
// Styles for different types of tab
const getTabStyles = ({ isFocusVisible, isSelected, isHovered }) => ({
    "button-brand": cx("outline-focus-ring *:data-icon:text-fg-quaternary", isFocusVisible && "outline-2 -outline-offset-2", (isSelected || isHovered) && "bg-brand-primary_alt text-brand-secondary *:data-icon:text-fg-brand-secondary_hover"),
    "button-gray": cx("outline-focus-ring *:data-icon:text-fg-quaternary", isHovered && "bg-primary_hover text-secondary *:data-icon:text-fg-secondary_hover", isFocusVisible && "outline-2 -outline-offset-2", isSelected && "bg-primary_hover text-secondary *:data-icon:text-fg-secondary_hover"),
    "button-border": cx("outline-focus-ring *:data-icon:text-fg-quaternary", isFocusVisible && "outline-2 -outline-offset-2", (isSelected || isHovered) && "bg-primary_alt text-secondary shadow-sm *:data-icon:text-fg-secondary_hover"),
    "button-minimal": cx("rounded-lg outline-focus-ring *:data-icon:text-fg-quaternary", isFocusVisible && "outline-2 -outline-offset-2", (isSelected || isHovered) && "bg-primary_alt text-secondary shadow-xs ring-1 ring-primary ring-inset *:data-icon:text-fg-secondary_hover"),
    underline: cx("rounded-none border-b-2 border-transparent outline-focus-ring *:data-icon:text-fg-quaternary", isFocusVisible && "outline-2 -outline-offset-2", (isSelected || isHovered) && "border-fg-brand-primary_alt text-brand-secondary *:data-icon:text-fg-brand-secondary_hover"),
    line: cx("rounded-none border-l-2 border-transparent outline-focus-ring *:data-icon:text-fg-quaternary", isFocusVisible && "outline-2 -outline-offset-2", (isSelected || isHovered) && "border-fg-brand-primary_alt text-brand-secondary *:data-icon:text-fg-brand-secondary_hover"),
});
const sizes = {
    sm: {
        base: "text-sm font-semibold gap-1 *:data-icon:size-4",
        "button-brand": "py-2 px-2.5",
        "button-gray": "py-2 px-2.5",
        "button-border": "py-2 px-2.5",
        "button-minimal": "py-2 px-2.5",
        underline: "px-0.5 pb-2.5 pt-0",
        line: "pl-2.5 pr-3 py-0.5",
    },
    md: {
        base: "text-md font-semibold gap-1.5 *:data-icon:size-5",
        "button-brand": "py-2.5 px-2.5",
        "button-gray": "py-2.5 px-2.5",
        "button-border": "py-2.5 px-2.5",
        "button-minimal": "py-2.5 px-2.5",
        underline: "px-0.5 pb-2.5 pt-0",
        line: "pr-3.5 pl-3 py-1",
    },
};
// Styles for different types of horizontal tabs
const getHorizontalStyles = ({ size, fullWidth }) => ({
    "button-brand": "gap-1",
    "button-gray": "gap-1",
    "button-border": cx("gap-1 rounded-[10px] bg-secondary_alt p-1 ring-1 ring-secondary ring-inset", size === "md" && "rounded-xl p-1.5"),
    "button-minimal": "gap-0.5 rounded-lg bg-secondary_alt ring-1 ring-inset ring-secondary",
    underline: cx("gap-3", fullWidth && "w-full gap-4"),
    line: "gap-2",
});
const TabListContext = createContext({
    size: "sm",
    type: "button-brand",
});
export const TabList = (_a) => {
    var _b;
    var { size = "sm", type = "button-brand", orientation: orientationProp, fullWidth, className, children } = _a, otherProps = __rest(_a, ["size", "type", "orientation", "fullWidth", "className", "children"]);
    const context = useSlottedContext(TabsContext);
    const orientation = (_b = orientationProp !== null && orientationProp !== void 0 ? orientationProp : context === null || context === void 0 ? void 0 : context.orientation) !== null && _b !== void 0 ? _b : "horizontal";
    return (_jsx(TabListContext.Provider, { value: { size, type, orientation, fullWidth }, children: _jsx(AriaTabList, Object.assign({}, otherProps, { className: (state) => cx("group flex", getHorizontalStyles({
                size,
                fullWidth,
            })[type], orientation === "vertical" && "w-max flex-col", 
            // Only horizontal tabs with underline type have bottom border
            orientation === "horizontal" &&
                type === "underline" &&
                "relative before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border-secondary", typeof className === "function" ? className(state) : className), children: children !== null && children !== void 0 ? children : (otherProps.items ? (item) => _jsx(Tab, Object.assign({}, item, { children: item.children })) : undefined) })) }));
};
export const TabPanel = (props) => {
    return (_jsx(AriaTabPanel, Object.assign({}, props, { className: (state) => cx("outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2", typeof props.className === "function" ? props.className(state) : props.className) })));
};
export const Tab = (_a) => {
    var { label, children, badge, icon: Icon, className } = _a, otherProps = __rest(_a, ["label", "children", "badge", "icon", "className"]);
    const { size = "sm", type = "button-brand", fullWidth } = useContext(TabListContext);
    const showPillColorBadge = type === "underline" || type === "line" || type === "button-brand";
    return (_jsx(AriaTab, Object.assign({}, otherProps, { className: (prop) => cx("z-10 flex h-max cursor-pointer items-center justify-center gap-2 rounded-md whitespace-nowrap text-quaternary transition duration-100 ease-linear", "group-orientation-vertical:justify-start", fullWidth && "w-full flex-1", sizes[size].base, sizes[size][type], getTabStyles(prop)[type], typeof className === "function" ? className(prop) : className), children: (state) => (_jsxs(_Fragment, { children: [isValidElement(Icon) && Icon, isReactComponent(Icon) && _jsx(Icon, { "data-icon": true, className: "transition-inherit-all" }), _jsxs("span", { className: cx("flex items-center gap-1.5", type !== "line" && "px-0.5"), children: [typeof children === "function" ? children(state) : children || label, badge && (_jsx(Badge, { size: "sm", type: showPillColorBadge ? "pill-color" : "modern", color: showPillColorBadge && (state.isHovered || state.isSelected) ? "brand" : "gray", className: cx("hidden transition-inherit-all md:flex", size === "sm" && "-my-px"), children: badge }))] })] })) })));
};
export const Tabs = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AriaTabs, Object.assign({ keyboardActivation: "manual" }, props, { className: (state) => cx("flex w-full flex-col", typeof className === "function" ? className(state) : className) })));
};
Tabs.Panel = TabPanel;
Tabs.List = TabList;
Tabs.Item = Tab;
