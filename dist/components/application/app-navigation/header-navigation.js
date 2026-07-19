"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Bell01, LifeBuoy01, SearchLg, Settings01 } from "@untitledui/icons";
import { TabList, Tabs } from "../../../components/application/tabs/tabs";
import { BadgeWithDot } from "../../../components/base/badges/badges";
import { DropdownAccountButton } from "../../../components/base/dropdown/dropdown-account-button";
import { Input } from "../../../components/base/input/input";
import { UntitledLogo } from "../../../components/foundations/logo/untitledui-logo";
import { cx } from "../../../utils/cx";
import { MobileNavigationHeader } from "./base-components/mobile-header";
import { NavAccountCard } from "./base-components/nav-account-card";
import { NavButton } from "./base-components/nav-button";
import { NavItemBase } from "./base-components/nav-item";
import { NavList } from "./base-components/nav-list";
/** Returns true if `href` matches `activeUrl` (exact or prefix for nested routes). */
const isItemActive = (href, activeUrl) => {
    if (!activeUrl || !href)
        return false;
    if (href === activeUrl)
        return true;
    if (href !== "/" && activeUrl.startsWith(href + "/"))
        return true;
    return false;
};
const DefaultActions = ({ activeUrl }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex gap-0.5", children: [_jsx(NavButton, { current: activeUrl === "/search", icon: SearchLg, label: "Search", href: "/search", tooltipPlacement: "bottom" }), _jsx(NavButton, { current: activeUrl === "/settings-01", icon: Settings01, label: "Settings", href: "/settings-01", tooltipPlacement: "bottom" }), _jsxs("div", { className: "relative", children: [_jsx(NavButton, { current: activeUrl === "/notifications-01", icon: Bell01, label: "Notifications", href: "/notifications-01", tooltipPlacement: "bottom" }), _jsx("div", { className: "absolute -top-0.25 -right-0.25 flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-[10px] font-bold text-white", children: "2" })] })] }), _jsx(DropdownAccountButton, {})] }));
};
export const HeaderNavigationBase = ({ activeUrl, items, subItems, hideBorder = false, actions, centered = false, secondaryType = "buttons", }) => {
    var _a;
    const isActive = (item) => { var _a; return (_a = item.current) !== null && _a !== void 0 ? _a : isItemActive(item.href, activeUrl); };
    const activeParent = items.find((item) => { var _a; return isActive(item) || ((_a = item.items) === null || _a === void 0 ? void 0 : _a.some((sub) => isItemActive(sub.href, activeUrl))); });
    const activeSubNavItems = subItems || (activeParent === null || activeParent === void 0 ? void 0 : activeParent.items);
    const showSecondaryNav = activeSubNavItems && activeSubNavItems.length > 0;
    const hasCustomActions = actions !== undefined;
    const tabItems = showSecondaryNav
        ? activeSubNavItems.map((item) => ({
            id: item.label,
            children: item.label,
        }))
        : [];
    const activeTabKey = (_a = activeSubNavItems === null || activeSubNavItems === void 0 ? void 0 : activeSubNavItems.find((item) => isActive(item))) === null || _a === void 0 ? void 0 : _a.label;
    return (_jsxs(_Fragment, { children: [_jsx(MobileNavigationHeader, { children: _jsxs("aside", { className: "flex h-full max-w-full flex-col justify-between overflow-auto bg-primary pt-4", children: [_jsxs("div", { className: "flex flex-col gap-5 px-4", children: [_jsx(UntitledLogo, { className: "h-6" }), _jsx(Input, { size: "md", "aria-label": "Search", placeholder: "Search", icon: SearchLg })] }), _jsx(NavList, { items: items }), _jsxs("div", { className: "mt-auto flex flex-col gap-3 p-4", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx(NavItemBase, { type: "link", href: "#", icon: LifeBuoy01, children: "Support" }), _jsx(NavItemBase, { type: "link", href: "#", icon: Settings01, badge: _jsx(BadgeWithDot, { color: "success", type: "modern", size: "sm", children: "Online" }), children: "Settings" }), _jsx(NavItemBase, { type: "link", href: "https://www.untitledui.com/", icon: Settings01, children: "Open in browser" })] }), _jsx(NavAccountCard, {})] })] }) }), _jsxs("header", { className: "max-lg:hidden", children: [_jsx("section", { className: cx("flex h-16 w-full items-center justify-center bg-primary", (!hideBorder || showSecondaryNav) && "border-b border-secondary"), children: _jsxs("div", { className: cx("flex w-full max-w-container items-center pr-3 pl-4 md:px-8", centered && "gap-8"), children: [_jsx("div", { className: cx("flex items-center", centered ? "flex-1" : "mr-4"), children: _jsx("a", { "aria-label": "Go to homepage", href: "/", className: "rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2", children: _jsx(UntitledLogo, { className: "h-6" }) }) }), _jsx("nav", { children: _jsx("ul", { className: "flex items-center gap-0.5", children: items.map((item) => (_jsx("li", { children: _jsx(NavButton, { current: isActive(item), href: item.href, children: item.label }) }, item.label))) }) }), _jsx("div", { className: cx("flex items-center gap-3", centered ? "flex-1 justify-end" : "ml-auto"), children: hasCustomActions ? actions : _jsx(DefaultActions, { activeUrl: activeUrl }) })] }) }), showSecondaryNav && (_jsx("section", { className: cx("flex w-full items-center justify-center bg-primary", !hideBorder && "border-b border-secondary"), children: secondaryType === "tabs" ? (_jsx("div", { className: "w-full max-w-container px-8 pt-3", children: _jsx(Tabs, { selectedKey: activeTabKey, children: _jsx(TabList, { size: "sm", type: "underline", items: tabItems, className: "-mb-px before:hidden" }) }) })) : (_jsxs("div", { className: cx("flex h-16 w-full max-w-container items-center gap-8 px-8", centered ? "justify-center" : "justify-between"), children: [_jsx("nav", { children: _jsx("ul", { className: cx("flex items-center gap-0.5", centered && "justify-center"), children: activeSubNavItems.map((item) => (_jsx("li", { children: _jsx(NavButton, { href: item.href, current: isActive(item), children: item.label }) }, item.label))) }) }), !centered && _jsx(Input, { shortcut: true, "aria-label": "Search", placeholder: "Search", icon: SearchLg, size: "sm", className: "max-w-70" })] })) }))] })] }));
};
