"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDown, Share04 } from "@untitledui/icons";
import { Link as AriaLink } from "react-aria-components";
import { Badge } from "../../../../components/base/badges/badges";
import { cx, sortCx } from "../../../../utils/cx";
const styles = sortCx({
    root: "group relative flex max-h-9 w-full cursor-pointer items-center rounded-md bg-primary outline-focus-ring transition duration-100 ease-linear select-none hover:bg-primary_hover focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
    rootSelected: "bg-secondary hover:bg-secondary_hover",
});
export const NavItemBase = ({ current, type, badge, href, icon: Icon, children, truncate = true, onClick }) => {
    const iconElement = Icon && (_jsx(Icon, { "aria-hidden": "true", className: cx("mr-2 size-5 shrink-0 text-fg-quaternary transition-inherit-all group-hover/item:text-fg-quaternary_hover", current && "text-fg-quaternary_hover") }));
    const badgeElement = badge && (typeof badge === "string" || typeof badge === "number") ? (_jsx(Badge, { className: "ml-3", color: "gray", type: "pill-color", size: "sm", children: badge })) : (badge);
    const labelElement = (_jsx("span", { className: cx("flex-1 text-sm font-semibold text-secondary transition-inherit-all group-hover/item:text-secondary_hover", truncate && "truncate", current && "text-secondary_hover"), children: children }));
    const isExternal = href && href.startsWith("http");
    const externalIcon = isExternal && _jsx(Share04, { className: "size-4 stroke-[2.5px] text-fg-quaternary" });
    if (type === "collapsible") {
        return (_jsxs("summary", { className: cx("p-2", styles.root, current && styles.rootSelected), onClick: onClick, children: [iconElement, labelElement, badgeElement, _jsx(ChevronDown, { "aria-hidden": "true", className: "ml-3 size-4 shrink-0 stroke-[2.5px] text-fg-quaternary in-open:-scale-y-100" })] }));
    }
    if (type === "collapsible-child") {
        return (_jsxs(AriaLink, { href: href, target: isExternal ? "_blank" : "_self", rel: "noopener noreferrer", className: cx("py-2 pr-3 pl-10", styles.root, current && styles.rootSelected), onClick: onClick, "aria-current": current ? "page" : undefined, children: [labelElement, externalIcon, badgeElement] }));
    }
    return (_jsxs(AriaLink, { href: href, target: isExternal ? "_blank" : "_self", rel: "noopener noreferrer", className: cx("group/item p-2", styles.root, current && styles.rootSelected), onClick: onClick, "aria-current": current ? "page" : undefined, children: [iconElement, labelElement, externalIcon, badgeElement] }));
};
