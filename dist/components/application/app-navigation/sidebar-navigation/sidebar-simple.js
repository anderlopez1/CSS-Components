"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SearchLg } from "@untitledui/icons";
import { Input } from "../../../../components/base/input/input";
import { UntitledLogo } from "../../../../components/foundations/logo/untitledui-logo";
import { cx } from "../../../../utils/cx";
import { MobileNavigationHeader } from "../base-components/mobile-header";
import { NavAccountCard } from "../base-components/nav-account-card";
import { NavItemBase } from "../base-components/nav-item";
import { NavList } from "../base-components/nav-list";
export const SidebarNavigationSimple = ({ activeUrl, items, footerItems = [], featureCard, showAccountCard = true, hideBorder = false, className, }) => {
    const MAIN_SIDEBAR_WIDTH = 280;
    const content = (_jsxs("aside", { style: {
            "--width": `${MAIN_SIDEBAR_WIDTH}px`,
        }, className: cx("flex h-full w-full max-w-full flex-col justify-between overflow-auto bg-primary pt-4 lg:w-(--width) lg:pt-5", !hideBorder && "border-secondary md:border-r", className), children: [_jsxs("div", { className: "flex flex-col gap-5 px-4 lg:px-5", children: [_jsx(UntitledLogo, { className: "h-6" }), _jsx(Input, { size: "md", "aria-label": "Search", placeholder: "Search", icon: SearchLg, className: "md:hidden" }), _jsx(Input, { shortcut: true, size: "sm", "aria-label": "Search", placeholder: "Search", icon: SearchLg, className: "max-md:hidden" })] }), _jsx(NavList, { activeUrl: activeUrl, items: items }), _jsxs("div", { className: "mt-auto flex flex-col gap-3 px-4 py-4 lg:py-5", children: [footerItems.length > 0 && (_jsx("ul", { className: "flex flex-col", children: footerItems.map((item) => (_jsx("li", { className: "py-px", children: _jsx(NavItemBase, { badge: item.badge, icon: item.icon, href: item.href, type: "link", current: item.href === activeUrl, children: item.label }) }, item.label))) })), featureCard, showAccountCard && _jsx(NavAccountCard, {})] })] }));
    return (_jsxs(_Fragment, { children: [_jsx(MobileNavigationHeader, { children: content }), _jsx("div", { className: "hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex", children: content }), _jsx("div", { style: {
                    paddingLeft: MAIN_SIDEBAR_WIDTH,
                }, className: "invisible hidden lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:block" })] }));
};
