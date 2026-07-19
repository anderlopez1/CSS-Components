"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SearchLg } from "@untitledui/icons";
import { ButtonUtility } from "../../../../components/base/buttons/button-utility";
import { UntitledLogo } from "../../../../components/foundations/logo/untitledui-logo";
import { MobileNavigationHeader } from "../base-components/mobile-header";
import { NavAccountCard } from "../base-components/nav-account-card";
import { NavItemBase } from "../base-components/nav-item";
export const SidebarNavigationSectionsSubheadings = ({ activeUrl = "/", items }) => {
    const MAIN_SIDEBAR_WIDTH = 276;
    const content = (_jsxs("aside", { style: {
            "--width": `${MAIN_SIDEBAR_WIDTH}px`,
        }, className: "flex h-full w-full max-w-full flex-col justify-between overflow-auto bg-primary pt-4 shadow-xs ring-secondary ring-inset lg:w-(--width) lg:rounded-xl lg:ring-1", children: [_jsxs("div", { className: "flex items-center justify-between gap-5 px-4 lg:pl-5", children: [_jsx(UntitledLogo, { className: "h-6" }), _jsx(ButtonUtility, { size: "xs", color: "tertiary", tooltip: "Search", icon: SearchLg })] }), _jsx("ul", { className: "mt-6 md:mt-5", children: items.map((group) => (_jsxs("li", { children: [_jsx("div", { className: "px-5 pb-1", children: _jsx("p", { className: "text-xs font-bold text-quaternary uppercase", children: group.label }) }), _jsx("ul", { className: "px-4 pb-5", children: group.items.map((item) => (_jsx("li", { className: "py-0.25", children: _jsx(NavItemBase, { icon: item.icon, href: item.href, badge: item.badge, type: "link", current: item.href === activeUrl, children: item.label }) }, item.label))) })] }, group.label))) }), _jsx("div", { className: "mt-auto flex flex-col gap-5 px-2 py-4 lg:gap-6 lg:px-4 lg:py-4", children: _jsx(NavAccountCard, {}) })] }));
    return (_jsxs(_Fragment, { children: [_jsx(MobileNavigationHeader, { children: content }), _jsx("div", { className: "hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:py-1 lg:pl-1", children: content }), _jsx("div", { style: {
                    paddingLeft: MAIN_SIDEBAR_WIDTH + 4,
                }, className: "invisible hidden lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:block" })] }));
};
