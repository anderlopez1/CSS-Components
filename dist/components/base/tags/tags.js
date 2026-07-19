"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
import { User01 } from "@untitledui/icons";
import { Tag as AriaTag, TagGroup as AriaTagGroup, TagList as AriaTagList, } from "react-aria-components";
import { Dot } from "../../../components/foundations/dot-icon";
import { cx } from "../../../utils/cx";
import { TagCheckbox } from "./base-components/tag-checkbox";
import { TagCloseX } from "./base-components/tag-close-x";
export const TagAvatar = ({ src, alt, contrastBorder = true, className }) => {
    const [isFailed, setIsFailed] = useState(false);
    return (_jsx("div", { className: cx("relative inline-flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-full bg-tertiary", contrastBorder && "outline-[0.5px] -outline-offset-[0.5px] outline-black/16", className), children: src && !isFailed ? (_jsx("img", { "data-avatar-img": true, className: "size-full object-cover", src: src, alt: alt, onError: () => setIsFailed(true) })) : (_jsx(User01, { className: "size-3 stroke-[2.25px] text-fg-quaternary" })) }));
};
const TagGroupContext = createContext({
    selectionMode: "none",
    size: "sm",
});
export const TagGroup = (_a) => {
    var { label, selectionMode = "none", size = "sm", children } = _a, otherProps = __rest(_a, ["label", "selectionMode", "size", "children"]);
    return (_jsx(TagGroupContext.Provider, { value: { selectionMode, size }, children: _jsx(AriaTagGroup, Object.assign({ "aria-label": label, selectionMode: selectionMode, disallowEmptySelection: selectionMode === "single" }, otherProps, { children: children })) }));
};
export const TagList = AriaTagList;
const styles = {
    sm: {
        root: {
            base: "px-2 py-0.75 text-xs font-medium",
            withCheckbox: "pl-1.25",
            withAvatar: "pl-1",
            withDot: "pl-1.5",
            withCount: "pr-1",
            withClose: "pr-1",
        },
        content: "gap-1",
        count: "px-1 text-xs font-medium",
    },
    md: {
        root: {
            base: "px-2.25 py-0.5 text-sm font-medium",
            withCheckbox: "pl-1",
            withAvatar: "pl-1.25",
            withDot: "pl-1.75",
            withCount: "pr-0.75",
            withClose: "pr-1",
        },
        content: "gap-1.25",
        count: "px-1.25 text-xs font-medium",
    },
    lg: {
        root: {
            base: "px-2.5 py-1 text-sm font-medium",
            withCheckbox: "pl-1.25",
            withAvatar: "pl-1.75",
            withDot: "pl-2.25",
            withCount: "pr-1",
            withClose: "pr-1",
        },
        content: "gap-1.5",
        count: "px-1.5 text-sm font-medium",
    },
};
export const Tag = ({ id, avatarSrc, avatarContrastBorder = true, dot, dotClassName, isDisabled, count, className, children, onClose, }) => {
    const context = useContext(TagGroupContext);
    const leadingContent = avatarSrc ? (_jsx(TagAvatar, { src: avatarSrc, alt: "Avatar", contrastBorder: avatarContrastBorder })) : dot ? (_jsx(Dot, { className: cx("text-fg-success-secondary", dotClassName), size: "sm" })) : null;
    return (_jsx(AriaTag, { id: id, isDisabled: isDisabled, textValue: typeof children === "string" ? children : undefined, className: (state) => cx("flex cursor-default items-center gap-0.75 rounded-md bg-primary text-secondary ring-1 ring-primary outline-focus-ring transition duration-50 ease-linear ring-inset focus-visible:outline-2 focus-visible:outline-offset-2", styles[context.size].root.base, 
        // With avatar
        avatarSrc && styles[context.size].root.withAvatar, 
        // With X button
        (onClose || state.allowsRemoving) && styles[context.size].root.withClose, 
        // With dot
        dot && styles[context.size].root.withDot, 
        // With count
        typeof count === "number" && styles[context.size].root.withCount, 
        // With checkbox
        context.selectionMode !== "none" && styles[context.size].root.withCheckbox, 
        // Disabled
        isDisabled && "cursor-not-allowed", typeof className === "function" ? className(state) : className), children: ({ isSelected, isDisabled, allowsRemoving }) => (_jsxs(_Fragment, { children: [_jsxs("div", { className: cx("flex items-center gap-1", styles[context.size].content), children: [context.selectionMode !== "none" && _jsx(TagCheckbox, { size: context.size, isSelected: isSelected, isDisabled: isDisabled }), leadingContent, children, typeof count === "number" && (_jsx("span", { className: cx("flex items-center justify-center rounded-[3px] bg-tertiary text-center", styles[context.size].count), children: count }))] }), (onClose || allowsRemoving) && (_jsx(TagCloseX, { size: context.size, excludeFromTabOrder: allowsRemoving, onPress: () => id && (onClose === null || onClose === void 0 ? void 0 : onClose(id.toString())) }))] })) }));
};
