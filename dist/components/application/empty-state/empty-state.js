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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, createContext, isValidElement, useContext } from "react";
import { FileIcon } from "@untitledui/file-icons";
import { SearchLg } from "@untitledui/icons";
import { FeaturedIcon as FeaturedIconbase } from "../../../components/foundations/featured-icon/featured-icon";
import { BackgroundPattern } from "../../../components/shared-assets/background-patterns";
import { Illustration as Illustrations } from "../../../components/shared-assets/illustrations";
import { cx } from "../../../utils/cx";
const RootContext = createContext({ size: "lg" });
const Root = (_a) => {
    var { size = "lg" } = _a, props = __rest(_a, ["size"]);
    return (_jsx(RootContext.Provider, { value: { size }, children: _jsx("div", Object.assign({}, props, { className: cx("mx-auto flex w-full max-w-lg flex-col items-center justify-center", props.className) })) }));
};
const FeaturedIcon = (_a) => {
    var { color = "gray", theme = "modern", icon = SearchLg, size } = _a, props = __rest(_a, ["color", "theme", "icon", "size"]);
    const { size: rootSize } = useContext(RootContext);
    return _jsx(FeaturedIconbase, Object.assign({}, props, { color, theme, icon, size: !size && rootSize === "lg" ? "xl" : size || "lg" }));
};
const Illustration = (_a) => {
    var { type = "cloud", color = "gray", size = "lg" } = _a, props = __rest(_a, ["type", "color", "size"]);
    const { size: rootSize } = useContext(RootContext);
    return (_jsx(Illustrations, Object.assign({ role: "img" }, props, { type, color, size: rootSize === "sm" ? "sm" : rootSize === "md" ? "md" : size, className: cx("z-10", props.className) })));
};
const FileTypeIcon = (_a) => {
    var { type = "folder", theme = "solid" } = _a, props = __rest(_a, ["type", "theme"]);
    return (_jsx("div", Object.assign({}, props, { className: cx("relative z-10 flex rounded-full bg-linear-to-b from-neutral-50 to-neutral-200 p-8", props.className), children: _jsx(FileIcon, { type: type, variant: theme, className: "size-10 drop-shadow-sm" }) })));
};
const Header = (_a) => {
    var { pattern = "circle", patternSize = "md" } = _a, props = __rest(_a, ["pattern", "patternSize"]);
    const { size } = useContext(RootContext);
    // Whether we are passing `Illustration` component as children.
    const hasIllustration = Children.toArray(props.children).some((headerChild) => isValidElement(headerChild) && headerChild.type === Illustration);
    return (_jsxs("header", Object.assign({}, props, { className: cx("relative mb-4", (size === "md" || size === "lg") && "mb-5", hasIllustration && size === "lg" && "mb-6!", props.className), children: [pattern !== "none" && (_jsx(BackgroundPattern, { size: patternSize, pattern: pattern, className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" })), props.children] })));
};
const Content = (props) => {
    const { size } = useContext(RootContext);
    return (_jsx("main", Object.assign({}, props, { className: cx("z-10 mb-6 flex w-full max-w-88 flex-col items-center justify-center gap-1", (size === "md" || size === "lg") && "mb-8 gap-2", props.className) })));
};
const Footer = (props) => {
    return _jsx("footer", Object.assign({}, props, { className: cx("z-10 flex gap-3", props.className) }));
};
const Title = (props) => {
    const { size } = useContext(RootContext);
    return (_jsx("h1", Object.assign({}, props, { className: cx("text-md font-semibold text-primary", size === "md" && "text-lg font-semibold", size === "lg" && "text-xl font-semibold", props.className) })));
};
const Description = (props) => {
    const { size } = useContext(RootContext);
    return _jsx("p", Object.assign({}, props, { className: cx("text-center text-sm text-tertiary", size === "lg" && "text-md", props.className) }));
};
/**
 * Predefined avatar slots positioned on concentric circle rings.
 * Each slot defines: ring radius, CSS angle (0°=top, clockwise), and avatar size class.
 */
const avatarSlots = [
    { ring: 80, angle: 330, size: "size-8" },
    { ring: 80, angle: 56, size: "size-8" },
    { ring: 144, angle: 82, size: "size-7" },
    { ring: 144, angle: 299, size: "size-7" },
    { ring: 144, angle: 241, size: "size-7" },
    { ring: 176, angle: 64, size: "size-6" },
    { ring: 176, angle: 270, size: "size-6" },
    { ring: 144, angle: 112, size: "size-7" },
    { ring: 80, angle: 249, size: "size-8" },
];
const RING_RADII = [48, 80, 112, 144, 176];
const AvatarRadius = (_a) => {
    var { avatars = [] } = _a, props = __rest(_a, ["avatars"]);
    return (_jsxs("div", Object.assign({ "aria-hidden": "true" }, props, { className: cx("pointer-events-none absolute top-1/2 left-1/2 size-120 -translate-x-1/2 -translate-y-1/2", props.className), style: Object.assign({ maskImage: "radial-gradient(circle, black 10%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 70%)" }, props.style), children: [RING_RADII.map((radius) => (_jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary", style: { width: radius * 2, height: radius * 2 } }, radius))), avatars.slice(0, avatarSlots.length).map((avatar, i) => {
                const slot = avatarSlots[i];
                const rad = (slot.angle * Math.PI) / 180;
                const x = Math.sin(rad) * slot.ring;
                const y = -Math.cos(rad) * slot.ring;
                return (_jsx("div", { className: cx("absolute top-1/2 left-1/2 rounded-full bg-primary p-px shadow-xs ring-[0.5px] ring-black/10", slot.size), style: { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }, children: _jsx("img", { src: avatar.src, alt: "", className: "size-full rounded-full object-cover outline-[0.5px] -outline-offset-[0.5px] outline-black/16" }) }, i));
            })] })));
};
/** Avatar sizes per root size — ordered smallest to largest (left edge → center). */
const rowStyles = {
    sm: ["size-8 rounded-md", "size-9 rounded-[7px]", "size-10 rounded-lg", "size-11 rounded-[9px]"],
    md: ["size-10 rounded-lg", "size-11 rounded-[9px]", "size-12 rounded-[10px]"],
    lg: ["size-10 rounded-lg", "size-11 rounded-[9px]", "size-12 rounded-[10px]"],
};
const AvatarRow = (_a) => {
    var { avatars = [], children } = _a, props = __rest(_a, ["avatars", "children"]);
    const { size: rootSize } = useContext(RootContext);
    const sizeKey = rootSize || "md";
    const sizes = rowStyles[sizeKey];
    const count = sizes.length;
    const leftAvatars = avatars.slice(0, count);
    const rightAvatars = avatars.slice(count, count * 2);
    const renderAvatar = (avatar, sizeClass, key) => (_jsx("div", { className: cx("relative shrink-0 overflow-hidden outline-[0.5px] -outline-offset-[0.5px] outline-black/16 before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/32 before:mask-[linear-gradient(to_bottom,black_0%,transparent_25%,transparent_75%,black_100%)]", sizeClass), children: _jsx("img", { src: avatar.src, alt: avatar.alt || "", className: "size-full object-cover" }) }, key));
    return (_jsxs("div", Object.assign({ "aria-hidden": "true" }, props, { className: cx("-m-1 flex items-center justify-center p-1", sizeKey === "sm" ? "gap-4" : sizeKey === "md" ? "gap-5" : "gap-6", props.className), style: Object.assign({ maskImage: "radial-gradient(circle, black 5%, transparent 105%)", WebkitMaskImage: "radial-gradient(circle, black 5%, transparent 105%)" }, props.style), children: [_jsx("div", { className: cx("flex items-center", sizeKey === "sm" ? "gap-3" : "gap-4"), children: leftAvatars.map((avatar, i) => renderAvatar(avatar, sizes[i], i)) }), children, _jsx("div", { className: cx("flex items-center", sizeKey === "sm" ? "gap-3" : "gap-4"), children: rightAvatars.map((avatar, i) => renderAvatar(avatar, sizes[count - 1 - i], i + count)) })] })));
};
const gridStyles = {
    sm: { avatar: "size-8 rounded-md", inner: "rounded-[5px]", gap: "gap-2 pl-2", rowGap: "gap-2" },
    md: { avatar: "size-10 rounded-lg", inner: "rounded-[7px]", gap: "gap-3 pl-3", rowGap: "gap-3" },
    lg: { avatar: "size-12 rounded-[10px]", inner: "rounded-[9px]", gap: "gap-3 pl-3", rowGap: "gap-3" },
};
const AvatarGrid = (_a) => {
    var { avatars = [] } = _a, props = __rest(_a, ["avatars"]);
    const { size: rootSize } = useContext(RootContext);
    const sizeKey = rootSize || "md";
    const config = gridStyles[sizeKey];
    const mid = Math.ceil(avatars.length / 2);
    const row1Base = avatars.slice(0, mid);
    const row2Base = avatars.slice(mid);
    const row1 = [...row1Base, ...row1Base, ...row1Base];
    const row2 = [...row2Base, ...row2Base, ...row2Base];
    const renderGridAvatar = (avatar, key) => (_jsx("div", { className: cx("shrink-0 bg-primary p-px shadow-xs ring-[0.75px] ring-black/10", config.avatar), children: _jsx("div", { className: cx("relative size-full overflow-hidden outline-[0.5px] -outline-offset-[0.5px] outline-black/16 before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/32 before:mask-[linear-gradient(to_bottom,black_0%,transparent_25%,transparent_75%,black_100%)]", config.inner), children: _jsx("img", { src: avatar.src, alt: avatar.alt || "", className: "size-full object-cover" }) }) }, key));
    return (_jsxs("div", Object.assign({ "aria-hidden": "true" }, props, { className: cx("-m-1 flex max-w-lg flex-col items-center overflow-x-clip p-1", config.rowGap, props.className), style: Object.assign({ maskImage: "radial-gradient(circle, black 10%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 100%)" }, props.style), children: [_jsxs("div", { className: "flex", children: [_jsx("div", { className: cx("flex w-auto max-w-none shrink-0 animate-marquee [animation-duration:240s] motion-reduce:animate-none", config.gap), children: row1.map((avatar, i) => renderGridAvatar(avatar, i)) }), _jsx("div", { className: cx("flex w-auto max-w-none shrink-0 animate-marquee [animation-duration:240s] motion-reduce:animate-none", config.gap), children: row1.map((avatar, i) => renderGridAvatar(avatar, i)) })] }), _jsxs("div", { className: "flex", children: [_jsx("div", { className: cx("flex w-auto max-w-none shrink-0 animate-marquee [animation-delay:-120s] [animation-duration:240s] direction-reverse motion-reduce:-translate-x-1/2 motion-reduce:animate-none", config.gap), children: row2.map((avatar, i) => renderGridAvatar(avatar, i + mid)) }), _jsx("div", { className: cx("flex w-auto max-w-none shrink-0 animate-marquee [animation-delay:-120s] [animation-duration:240s] direction-reverse motion-reduce:-translate-x-1/2 motion-reduce:animate-none", config.gap), children: row2.map((avatar, i) => renderGridAvatar(avatar, i + mid)) })] })] })));
};
const EmptyState = Root;
EmptyState.Title = Title;
EmptyState.Header = Header;
EmptyState.Footer = Footer;
EmptyState.Content = Content;
EmptyState.Description = Description;
EmptyState.Illustration = Illustration;
EmptyState.FeaturedIcon = FeaturedIcon;
EmptyState.FileTypeIcon = FileTypeIcon;
EmptyState.AvatarRadius = AvatarRadius;
EmptyState.AvatarRow = AvatarRow;
EmptyState.AvatarGrid = AvatarGrid;
export { EmptyState };
