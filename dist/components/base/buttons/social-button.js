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
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import { cx, sortCx } from "../../../utils/cx";
import { AppleLogo, DribbleLogo, FacebookLogo, FigmaLogo, FigmaLogoOutlined, GoogleLogo, TwitterLogo } from "./social-logos";
export const styles = sortCx({
    common: {
        root: "group disabled:stroke-fg-disabled disabled:text-fg-disabled disabled:*:text-fg-disabled relative inline-flex h-max cursor-pointer items-center justify-center font-semibold whitespace-nowrap outline-focus-ring transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed",
        icon: "pointer-events-none shrink-0 transition-inherit-all",
    },
    sizes: {
        md: {
            root: "gap-2 rounded-lg px-3.5 py-2.5 text-sm before:rounded-[7px] data-icon-only:p-3",
            icon: "size-4",
        },
        lg: {
            root: "gap-2.5 rounded-lg px-4 py-2.5 text-md before:rounded-[7px] data-icon-only:p-3",
            icon: "size-5",
        },
    },
    colors: {
        gray: {
            root: "bg-primary text-secondary shadow-xs-skeuomorphic ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover",
            icon: "text-fg-quaternary group-hover:text-fg-quaternary_hover",
        },
        black: {
            root: "bg-black text-white shadow-xs-skeuomorphic ring-1 ring-transparent ring-inset before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0%",
            icon: "",
        },
        facebook: {
            root: "bg-[#1877F2] text-white shadow-xs-skeuomorphic ring-1 ring-transparent ring-inset before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0% hover:bg-[#0C63D4]",
            icon: "",
        },
        dribble: {
            root: "bg-[#EA4C89] text-white shadow-xs-skeuomorphic ring-1 ring-transparent ring-inset before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0% hover:bg-[#E62872]",
            icon: "",
        },
    },
});
export const SocialButton = (_a) => {
    var { size = "lg", theme = "brand", social, className, children, disabled } = _a, otherProps = __rest(_a, ["size", "theme", "social", "className", "children", "disabled"]);
    const href = "href" in otherProps ? otherProps.href : undefined;
    const Component = href ? AriaLink : AriaButton;
    const isIconOnly = !children;
    const socialToColor = {
        google: "gray",
        facebook: "facebook",
        apple: "black",
        twitter: "black",
        figma: "black",
        dribble: "dribble",
    };
    const colorStyles = theme === "brand" ? styles.colors[socialToColor[social]] : styles.colors.gray;
    const logos = {
        google: GoogleLogo,
        facebook: FacebookLogo,
        apple: AppleLogo,
        twitter: TwitterLogo,
        figma: theme === "gray" ? FigmaLogoOutlined : FigmaLogo,
        dribble: DribbleLogo,
    };
    const Logo = logos[social];
    let props = {};
    if (href) {
        props = Object.assign(Object.assign(Object.assign({}, otherProps), { href: disabled ? undefined : href }), (disabled ? { "data-rac": true, "data-disabled": true } : {}));
    }
    else {
        props = Object.assign(Object.assign({}, otherProps), { type: otherProps.type || "button", isDisabled: disabled });
    }
    return (_jsxs(Component, Object.assign({ isDisabled: disabled }, props, { "data-icon-only": isIconOnly ? true : undefined, className: cx(styles.common.root, styles.sizes[size].root, colorStyles.root, className), children: [_jsx(Logo, { className: cx(styles.common.icon, styles.sizes[size].icon, theme === "gray"
                    ? colorStyles.icon
                    : theme === "brand" && (social === "facebook" || social === "apple" || social === "twitter")
                        ? "text-white"
                        : theme === "color" && (social === "apple" || social === "twitter")
                            ? "text-alpha-black"
                            : ""), colorful: (theme === "brand" && (social === "google" || social === "figma")) ||
                    (theme === "color" && (social === "google" || social === "facebook" || social === "figma" || social === "dribble")) ||
                    undefined }), children] })));
};
