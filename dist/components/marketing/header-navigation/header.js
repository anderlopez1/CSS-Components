"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { ChevronDown } from "@untitledui/icons";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { Button } from "../../../components/base/buttons/button";
import { UntitledLogo } from "../../../components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "../../../components/foundations/logo/untitledui-logo-minimal";
import { DropdownMenuSimple } from "../../../components/marketing/header-navigation/dropdown-header-navigation";
import { cx } from "../../../utils/cx";
const headerNavItems = [
    { label: "Products", href: "/products", menu: _jsx(DropdownMenuSimple, {}) },
    { label: "Services", href: "/Services", menu: _jsx(DropdownMenuSimple, {}) },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources", menu: _jsx(DropdownMenuSimple, {}) },
    { label: "About", href: "/about" },
];
const footerNavItems = [
    { label: "About us", href: "/" },
    { label: "Press", href: "/products" },
    { label: "Careers", href: "/resources" },
    { label: "Legal", href: "/pricing" },
    { label: "Support", href: "/pricing" },
    { label: "Contact", href: "/pricing" },
    { label: "Sitemap", href: "/pricing" },
    { label: "Cookie settings", href: "/pricing" },
];
const MobileNavItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    if (props.href) {
        return (_jsx("li", { children: _jsx("a", { href: props.href, className: "flex items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover", children: props.label }) }));
    }
    return (_jsxs("li", { className: "flex flex-col gap-0.5", children: [_jsxs("button", { "aria-expanded": isOpen, onClick: () => setIsOpen(!isOpen), className: "flex w-full items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover", children: [props.label, " ", _jsx(ChevronDown, { className: cx("size-4 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear", isOpen ? "-rotate-180" : "rotate-0") })] }), isOpen && _jsx("div", { children: props.children })] }));
};
const MobileFooter = () => {
    return (_jsxs("div", { className: "flex flex-col gap-8 border-t border-secondary px-4 py-6", children: [_jsx("div", { children: _jsx("ul", { className: "grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-6 gap-y-3", children: footerNavItems.map((navItem) => (_jsx("li", { children: _jsx(Button, { color: "link-gray", size: "lg", href: navItem.href, children: navItem.label }) }, navItem.label))) }) }), _jsxs("div", { className: "flex flex-col gap-3", children: [_jsx(Button, { size: "lg", children: "Sign up" }), _jsx(Button, { color: "secondary", size: "lg", children: "Log in" })] })] }));
};
export const Header = ({ items = headerNavItems, isFullWidth, isFloating, className }) => {
    const headerRef = useRef(null);
    return (_jsx("header", { ref: headerRef, className: cx("relative flex h-18 w-full items-center justify-center md:h-20", isFloating && "h-16 md:h-19 md:pt-3", isFullWidth && !isFloating ? "has-aria-expanded:bg-primary" : "max-md:has-aria-expanded:bg-primary", className), children: _jsx("div", { className: "flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8", children: _jsxs("div", { className: cx("flex w-full justify-between gap-4", isFloating && "ring-secondary_alt md:rounded-2xl md:bg-primary md:py-3 md:pr-3 md:pl-4 md:shadow-xs md:ring-1"), children: [_jsxs("div", { className: "flex flex-1 items-center gap-5", children: [_jsx(UntitledLogo, { className: "h-8 md:max-lg:hidden" }), _jsx(UntitledLogoMinimal, { className: "hidden h-8 md:inline-block lg:hidden" }), _jsx("nav", { className: "max-md:hidden", children: _jsx("ul", { className: "flex items-center gap-0.5", children: items.map((navItem) => (_jsx("li", { children: navItem.menu ? (_jsxs(AriaDialogTrigger, { children: [_jsxs(AriaButton, { className: "flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-md font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-secondary_hover focus-visible:outline-2 focus-visible:outline-offset-2", children: [_jsx("span", { className: "px-0.5", children: navItem.label }), _jsx(ChevronDown, { className: "size-4 rotate-0 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear in-aria-expanded:-rotate-180" })] }), _jsx(AriaPopover, { className: ({ isEntering, isExiting }) => cx("hidden origin-top will-change-transform md:block", isFullWidth && "w-full", isEntering && "duration-200 ease-out animate-in fade-in slide-in-from-top-1", isExiting && "duration-150 ease-in animate-out fade-out slide-out-to-top-1"), offset: isFloating || isFullWidth ? 0 : 8, containerPadding: 0, triggerRef: (isFloating && isFullWidth) || isFullWidth ? headerRef : undefined, children: ({ isEntering, isExiting }) => (_jsx(AriaDialog, { className: cx("mx-auto origin-top outline-hidden", isFloating && "max-w-7xl px-8 pt-3", 
                                                        // Have to use the scale animation inside the popover to avoid
                                                        // miscalculating the popover's position when opening.
                                                        isEntering && !isFullWidth && "duration-200 ease-out animate-in zoom-in-95", isExiting && !isFullWidth && "duration-150 ease-in animate-out zoom-out-95"), children: navItem.menu })) })] })) : (_jsx("a", { href: navItem.href, className: "flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-md font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-secondary_hover focus:outline-offset-2 focus-visible:outline-2", children: _jsx("span", { className: "px-0.5", children: navItem.label }) })) }, navItem.label))) }) })] }), _jsxs("div", { className: "hidden items-center gap-3 md:flex", children: [_jsx(Button, { color: "secondary", size: isFloating ? "md" : "lg", children: "Log in" }), _jsx(Button, { color: "primary", size: isFloating ? "md" : "lg", children: "Sign up" })] }), _jsxs(AriaDialogTrigger, { children: [_jsx(AriaButton, { "aria-label": "Toggle navigation menu", className: ({ isFocusVisible, isHovered }) => cx("group ml-auto cursor-pointer rounded-lg p-2 md:hidden", isHovered && "bg-primary_hover", isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring"), children: _jsxs("svg", { "aria-hidden": "true", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [_jsx("path", { className: "hidden text-secondary group-aria-expanded:block", d: "M18 6L6 18M6 6L18 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { className: "text-secondary group-aria-expanded:hidden", d: "M3 12H21M3 6H21M3 18H21", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }), _jsx(AriaPopover, { triggerRef: headerRef, className: "h-calc(100%-72px) scrollbar-hide w-full overflow-y-auto shadow-lg md:hidden", offset: 0, crossOffset: 20, containerPadding: 0, placement: "bottom left", children: _jsx(AriaDialog, { className: "outline-hidden", children: _jsxs("nav", { className: "w-full bg-primary shadow-lg", children: [_jsx("ul", { className: "flex flex-col gap-0.5 py-5", children: items.map((navItem) => navItem.menu ? (_jsx(MobileNavItem, { label: navItem.label, children: navItem.menu }, navItem.label)) : (_jsx(MobileNavItem, { label: navItem.label, href: navItem.href }, navItem.label))) }), _jsx(MobileFooter, {})] }) }) })] })] }) }) }));
};
