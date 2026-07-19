"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { User01 } from "@untitledui/icons";
import { cx } from "../../../utils/cx";
import { AvatarOnlineIndicator, VerifiedTick } from "./base-components";
const styles = {
    sm: {
        root: "size-18 p-0.75",
        rootWithPlaceholder: "p-1",
        content: "outline-[0.5px] -outline-offset-[0.5px] before:border",
        icon: "size-9",
        initials: "text-display-sm font-semibold",
        badge: "bottom-0.5 right-0.5",
    },
    md: {
        root: "size-24 p-1",
        rootWithPlaceholder: "p-1.25",
        content: "shadow-xl outline-[0.75px] -outline-offset-[0.75px] before:border-[1.5px]",
        icon: "size-12",
        initials: "text-display-md font-semibold",
        badge: "bottom-1 right-1",
    },
    lg: {
        root: "size-40 p-1.5",
        rootWithPlaceholder: "p-1.75",
        content: "shadow-2xl outline-[0.75px] -outline-offset-[0.75px] before:border-[1.5px]",
        icon: "size-20",
        initials: "text-display-xl font-semibold",
        badge: "bottom-2 right-2",
    },
};
const tickSizeMap = {
    sm: "2xl",
    md: "3xl",
    lg: "4xl",
};
export const AvatarProfilePhoto = ({ size = "md", src, alt, initials, placeholder, placeholderIcon: PlaceholderIcon, verified, badge, status, className, }) => {
    const [isFailed, setIsFailed] = useState(false);
    const renderMainContent = () => {
        if (src && !isFailed) {
            return (_jsx("div", { className: cx("relative size-full overflow-hidden rounded-full outline-black/16 before:absolute before:inset-0 before:rounded-full before:border-white/32 before:mask-[linear-gradient(to_bottom,black_0%,transparent_25%,transparent_75%,black_100%)]", styles[size].content), children: _jsx("img", { src: src, alt: alt, onError: () => setIsFailed(true), className: "size-full object-cover" }) }));
        }
        if (initials) {
            return (_jsx("div", { className: cx("flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt outline-transparent before:hidden", styles[size].content), children: _jsx("span", { className: cx("text-quaternary", styles[size].initials), children: initials }) }));
        }
        if (PlaceholderIcon) {
            return (_jsx("div", { className: cx("flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt outline-transparent before:hidden", styles[size].content), children: _jsx(PlaceholderIcon, { className: cx("text-fg-quaternary", styles[size].icon) }) }));
        }
        return (_jsx("div", { className: cx("flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt outline-transparent before:hidden", styles[size].content), children: placeholder || _jsx(User01, { className: cx("text-fg-quaternary", styles[size].icon) }) }));
    };
    const renderBadgeContent = () => {
        if (status) {
            return _jsx(AvatarOnlineIndicator, { status: status, size: tickSizeMap[size], className: styles[size].badge });
        }
        if (verified) {
            return _jsx(VerifiedTick, { size: tickSizeMap[size], className: cx("absolute", styles[size].badge) });
        }
        return badge;
    };
    return (_jsxs("div", { className: cx("relative flex shrink-0 items-center justify-center rounded-full bg-primary ring-1 ring-secondary_alt", styles[size].root, (!src || isFailed) && styles[size].rootWithPlaceholder, className), children: [renderMainContent(), renderBadgeContent()] }));
};
