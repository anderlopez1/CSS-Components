"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isValidElement } from "react";
import { cx } from "../../../../utils/cx";
import { isReactComponent } from "../../../../utils/is-react-component";
export const NavMenuItemLink = ({ href, icon: Icon, iconClassName, title, badge, subtitle, className, actionsContent }) => (_jsxs("a", { href: href, className: cx("inline-flex w-full gap-3 px-4 py-3 outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover focus-visible:outline-2 sm:max-w-80 sm:p-3 md:rounded-lg", className), children: [isValidElement(Icon) && Icon, isReactComponent(Icon) && _jsx(Icon, { className: cx("mt-0.5 size-4 shrink-0 stroke-[2.3px] text-fg-brand-primary", iconClassName) }), _jsxs("div", { className: "flex flex-col gap-3", children: [_jsxs("div", { className: "flex flex-col gap-0.5", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-md font-semibold text-primary", children: title }), badge] }), subtitle && _jsx("span", { className: "line-clamp-2 text-sm text-tertiary", children: subtitle })] }), actionsContent] })] }));
