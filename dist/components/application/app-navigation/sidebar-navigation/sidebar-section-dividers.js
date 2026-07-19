"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SearchLg } from "@untitledui/icons";
import { Input } from "../../../../components/base/input/input";
import { UntitledLogo } from "../../../../components/foundations/logo/untitledui-logo";
import { MobileNavigationHeader } from "../base-components/mobile-header";
import { NavAccountCard } from "../base-components/nav-account-card";
import { NavList } from "../base-components/nav-list";
export const SidebarNavigationSectionDividers = ({ activeUrl, items }) => {
    const MAIN_SIDEBAR_WIDTH = 276;
    const content = (_jsxs("aside", { style: {
            "--width": `${MAIN_SIDEBAR_WIDTH}px`,
        }, className: "flex h-full w-full max-w-full flex-col justify-between overflow-auto bg-primary pt-4 shadow-xs ring-secondary ring-inset lg:w-(--width) lg:rounded-xl lg:pt-5 lg:ring-1", children: [_jsxs("div", { className: "flex flex-col gap-5 px-4 lg:px-5", children: [_jsx(UntitledLogo, { className: "h-6" }), _jsx(Input, { size: "md", "aria-label": "Search", placeholder: "Search", icon: SearchLg, className: "md:hidden" }), _jsx(Input, { shortcut: true, size: "sm", "aria-label": "Search", placeholder: "Search", icon: SearchLg, className: "max-md:hidden" })] }), _jsx(NavList, { activeUrl: activeUrl, items: items }), _jsx("div", { className: "mt-auto flex flex-col gap-5 px-2 py-4 lg:gap-6 lg:px-4 lg:py-4", children: _jsx(NavAccountCard, {}) })] }));
    return (_jsxs(_Fragment, { children: [_jsx(MobileNavigationHeader, { children: content }), _jsx("div", { className: "hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:py-1 lg:pl-1", children: content }), _jsx("div", { style: {
                    paddingLeft: MAIN_SIDEBAR_WIDTH + 4, // Add 4px to account for the padding in the sidebar wrapper
                }, className: "invisible hidden lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:block" })] }));
};
