"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { SearchLg } from "@untitledui/icons";
import { AnimatePresence, motion } from "motion/react";
import { Input } from "../../../../components/base/input/input";
import { UntitledLogo } from "../../../../components/foundations/logo/untitledui-logo";
import { cx } from "../../../../utils/cx";
import { MobileNavigationHeader } from "../base-components/mobile-header";
import { NavAccountCard } from "../base-components/nav-account-card";
import { NavItemBase } from "../base-components/nav-item";
import { NavList } from "../base-components/nav-list";
export const SidebarNavigationDualTier = ({ activeUrl, hideBorder, items, footerItems = [], featureCard, selectedAccountId, accountItems, }) => {
    var _a, _b;
    const activeItem = [...items, ...footerItems].find((item) => { var _a; return item.href === activeUrl || ((_a = item.items) === null || _a === void 0 ? void 0 : _a.some((subItem) => subItem.href === activeUrl)); });
    const [currentItem, setCurrentItem] = useState(activeItem || items[1]);
    const [isHovering, setIsHovering] = useState(false);
    const isSecondarySidebarVisible = isHovering && Boolean((_a = currentItem.items) === null || _a === void 0 ? void 0 : _a.length);
    const MAIN_SIDEBAR_WIDTH = 280;
    const SECONDARY_SIDEBAR_WIDTH = 256;
    const mainSidebar = (_jsx("aside", { className: "group flex h-full max-h-full max-w-full overflow-y-auto bg-primary", children: _jsxs("div", { style: {
                "--width": `${MAIN_SIDEBAR_WIDTH}px`,
            }, className: cx("relative flex w-full flex-col border-r border-secondary pt-4 transition duration-300 lg:w-(--width) lg:pt-5", hideBorder && !isSecondarySidebarVisible && "border-transparent"), children: [_jsxs("div", { className: "flex flex-col gap-5 px-4 lg:px-5", children: [_jsx(UntitledLogo, { className: "h-6" }), _jsx(Input, { size: "md", "aria-label": "Search", placeholder: "Search", icon: SearchLg, className: "md:hidden" }), _jsx(Input, { shortcut: true, size: "sm", "aria-label": "Search", placeholder: "Search", icon: SearchLg, className: "max-md:hidden" })] }), _jsx(NavList, { activeUrl: activeUrl, items: items, className: "lg:hidden" }), _jsx("ul", { className: "mt-5 hidden flex-col px-4 lg:flex", children: items.map((item) => (_jsx("li", { className: "py-px", children: _jsx(NavItemBase, { current: currentItem.href === item.href, href: item.href, badge: item.badge, icon: item.icon, type: "link", onClick: () => setCurrentItem(item), children: item.label }) }, item.label + item.href))) }), _jsxs("div", { className: "mt-auto flex flex-col gap-3 px-2 py-4 lg:px-4 lg:py-6", children: [footerItems.length > 0 && (_jsx("ul", { className: "flex flex-col", children: footerItems.map((item) => (_jsx("li", { className: "py-px", children: _jsx(NavItemBase, { current: currentItem.href === item.href, href: item.href, badge: item.badge, icon: item.icon, type: "link", onClick: () => setCurrentItem(item), children: item.label }) }, item.label + item.href))) })), featureCard, _jsx(NavAccountCard, { selectedAccountId: selectedAccountId, items: accountItems })] })] }) }));
    const secondarySidebar = (_jsx(AnimatePresence, { initial: false, children: isSecondarySidebarVisible && (_jsx(motion.div, { initial: { width: 0, borderColor: "var(--color-border-secondary)" }, animate: { width: SECONDARY_SIDEBAR_WIDTH, borderColor: "var(--color-border-secondary)" }, exit: { width: 0, borderColor: "rgba(0,0,0,0)", transition: { borderColor: { type: "tween", delay: 0.05 } } }, transition: { type: "spring", damping: 26, stiffness: 220, bounce: 0 }, className: cx("relative h-full overflow-x-hidden overflow-y-auto bg-primary", !hideBorder && "box-content border-r-[1.5px]"), children: _jsx("ul", { style: { width: SECONDARY_SIDEBAR_WIDTH }, className: "flex h-full flex-col p-4 pt-5", children: (_b = currentItem.items) === null || _b === void 0 ? void 0 : _b.map((item) => (_jsx("li", { className: "py-px", children: _jsx(NavItemBase, { current: activeUrl === item.href, href: item.href, icon: item.icon, badge: item.badge, type: "link", children: item.label }) }, item.label + item.href))) }) })) }));
    return (_jsxs(_Fragment, { children: [_jsx(MobileNavigationHeader, { children: mainSidebar }), _jsxs("div", { className: "z-50 hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex", onPointerEnter: () => setIsHovering(true), onPointerLeave: () => setIsHovering(false), children: [mainSidebar, secondarySidebar] }), _jsx("div", { style: {
                    paddingLeft: MAIN_SIDEBAR_WIDTH,
                }, className: "invisible hidden lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:block" })] }));
};
