"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { cx } from "../../../../utils/cx";
import { NavItemBase } from "./nav-item";
export const NavList = ({ activeUrl, items, className }) => {
    const [open, setOpen] = useState(false);
    const activeItem = items.find((item) => { var _a; return item.href === activeUrl || ((_a = item.items) === null || _a === void 0 ? void 0 : _a.some((subItem) => subItem.href === activeUrl)); });
    const [currentItem, setCurrentItem] = useState(activeItem);
    return (_jsx("ul", { className: cx("flex flex-col px-4 pt-5", className), children: items.map((item, index) => {
            var _a;
            if (item.divider) {
                return (_jsx("li", { className: "w-full px-0.5 py-2", children: _jsx("hr", { className: "h-px w-full border-none bg-border-secondary" }) }, index));
            }
            if ((_a = item.items) === null || _a === void 0 ? void 0 : _a.length) {
                return (_jsxs("details", { open: (activeItem === null || activeItem === void 0 ? void 0 : activeItem.href) === item.href, className: "appearance-none py-0.25", onToggle: (e) => {
                        setOpen(e.currentTarget.open);
                        setCurrentItem(item);
                    }, children: [_jsx(NavItemBase, { href: item.href, badge: item.badge, icon: item.icon, type: "collapsible", children: item.label }), _jsx("dd", { children: _jsx("ul", { className: "pb-1", children: item.items.map((childItem) => (_jsx("li", { className: "py-0.25", children: _jsx(NavItemBase, { href: childItem.href, badge: childItem.badge, type: "collapsible-child", current: activeUrl === childItem.href, children: childItem.label }) }, childItem.label))) }) })] }, item.label));
            }
            return (_jsx("li", { className: "py-px", children: _jsx(NavItemBase, { type: "link", badge: item.badge, icon: item.icon, href: item.href, current: (currentItem === null || currentItem === void 0 ? void 0 : currentItem.href) === item.href, open: open && (currentItem === null || currentItem === void 0 ? void 0 : currentItem.href) === item.href, children: item.label }) }, item.label));
        }) }));
};
