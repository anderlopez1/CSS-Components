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
import { useCallback, useEffect, useRef } from "react";
import { BookOpen01, ChevronSelectorVertical, LogOut01, Plus, Settings01, User01 } from "@untitledui/icons";
import { useFocusManager } from "react-aria";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { AvatarLabelGroup } from "../../../../components/base/avatar/avatar-label-group";
import { Button } from "../../../../components/base/buttons/button";
import { RadioButtonBase } from "../../../../components/base/radio-buttons/radio-buttons";
import { useBreakpoint } from "../../../../hooks/use-breakpoint";
import { cx } from "../../../../utils/cx";
const placeholderAccounts = [
    {
        id: "caitlyn",
        name: "Caitlyn King",
        email: "caitlyn@untitledui.com",
        avatar: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        status: "online",
    },
    {
        id: "sienna",
        name: "Sienna Hewitt",
        email: "sienna@untitledui.com",
        avatar: "https://www.untitledui.com/images/avatars/transparent/sienna-hewitt?bg=%23E0E0E0",
        status: "online",
    },
];
export const NavAccountMenu = (_a) => {
    var { className, selectedAccountId = "olivia" } = _a, dialogProps = __rest(_a, ["className", "selectedAccountId"]);
    const focusManager = useFocusManager();
    const dialogRef = useRef(null);
    const onKeyDown = useCallback((e) => {
        switch (e.key) {
            case "ArrowDown":
                focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusNext({ tabbable: true, wrap: true });
                break;
            case "ArrowUp":
                focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusPrevious({ tabbable: true, wrap: true });
                break;
        }
    }, [focusManager]);
    useEffect(() => {
        const element = dialogRef.current;
        if (element) {
            element.addEventListener("keydown", onKeyDown);
        }
        return () => {
            if (element) {
                element.removeEventListener("keydown", onKeyDown);
            }
        };
    }, [onKeyDown]);
    return (_jsxs(AriaDialog, Object.assign({}, dialogProps, { ref: dialogRef, className: cx("w-66 rounded-xl bg-secondary_alt shadow-lg ring ring-secondary_alt outline-hidden", className), children: [_jsxs("div", { className: "rounded-xl bg-primary ring-1 ring-secondary", children: [_jsxs("div", { className: "flex flex-col gap-0.5 py-1.5", children: [_jsx(NavAccountCardMenuItem, { label: "View profile", icon: User01, shortcut: "\u2318K->P" }), _jsx(NavAccountCardMenuItem, { label: "Account settings", icon: Settings01, shortcut: "\u2318S" }), _jsx(NavAccountCardMenuItem, { label: "Documentation", icon: BookOpen01 })] }), _jsxs("div", { className: "flex flex-col gap-0.5 border-t border-secondary py-1.5", children: [_jsx("div", { className: "px-3 pt-1.5 pb-1 text-xs font-semibold text-tertiary", children: "Switch account" }), _jsx("div", { className: "flex flex-col gap-0.5 px-1.5", children: placeholderAccounts.map((account) => (_jsxs("button", { className: cx("relative w-full cursor-pointer rounded-md px-2 py-1.5 text-left outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2", account.id === selectedAccountId && "bg-primary_hover"), children: [_jsx(AvatarLabelGroup, { status: "online", size: "md", src: account.avatar, title: account.name, subtitle: account.email }), _jsx(RadioButtonBase, { isSelected: account.id === selectedAccountId, className: "absolute top-2 right-2" })] }, account.id))) })] }), _jsx("div", { className: "flex flex-col gap-2 px-2 pt-0.5 pb-2", children: _jsx(Button, { iconLeading: Plus, color: "secondary", size: "sm", children: "Add account" }) })] }), _jsx("div", { className: "pt-1 pb-1.5", children: _jsx(NavAccountCardMenuItem, { label: "Sign out", icon: LogOut01, shortcut: "\u2325\u21E7Q" }) })] })));
};
const NavAccountCardMenuItem = (_a) => {
    var { icon: Icon, label, shortcut } = _a, buttonProps = __rest(_a, ["icon", "label", "shortcut"]);
    return (_jsx("button", Object.assign({}, buttonProps, { className: cx("group/item w-full cursor-pointer px-1.5 focus:outline-hidden", buttonProps.className), children: _jsxs("div", { className: cx("flex w-full items-center justify-between gap-3 rounded-md p-2 group-hover/item:bg-primary_hover", 
            // Focus styles.
            "outline-focus-ring group-focus-visible/item:outline-2 group-focus-visible/item:outline-offset-2"), children: [_jsxs("div", { className: "flex gap-2 text-sm font-semibold text-secondary group-hover/item:text-secondary_hover", children: [Icon && _jsx(Icon, { className: "size-5 text-fg-quaternary group-hover/item:text-fg-quaternary_hover" }), " ", label] }), shortcut && (_jsx("kbd", { className: "flex rounded px-1 py-px font-body text-xs font-medium text-tertiary ring-1 ring-secondary ring-inset", children: shortcut }))] }) })));
};
export const NavAccountCard = ({ popoverPlacement, selectedAccountId = "caitlyn", items = placeholderAccounts, avatarRounded, }) => {
    const triggerRef = useRef(null);
    const isDesktop = useBreakpoint("lg");
    const selectedAccount = items.find((account) => account.id === selectedAccountId);
    if (!selectedAccount) {
        console.warn(`Account with ID ${selectedAccountId} not found in <NavAccountCard />`);
        return null;
    }
    return (_jsxs("div", { ref: triggerRef, className: "relative flex items-center gap-3 rounded-xl p-3 ring-1 ring-secondary ring-inset", children: [_jsx(AvatarLabelGroup, { size: "md", src: selectedAccount.avatar, title: selectedAccount.name, subtitle: selectedAccount.email, status: selectedAccount.status, rounded: avatarRounded }), _jsxs(AriaDialogTrigger, { children: [_jsx(AriaButton, { className: "absolute top-2 right-2 flex cursor-pointer items-center justify-center rounded-md p-1.5 text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2 pressed:bg-primary_hover pressed:text-fg-quaternary_hover", children: _jsx(ChevronSelectorVertical, { className: "size-4 shrink-0 stroke-[2.25px]" }) }), _jsx(AriaPopover, { placement: popoverPlacement !== null && popoverPlacement !== void 0 ? popoverPlacement : (isDesktop ? "right bottom" : "top right"), triggerRef: triggerRef, offset: 8, className: ({ isEntering, isExiting }) => cx("origin-(--trigger-anchor-point) will-change-transform", isEntering &&
                            "duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5", isExiting &&
                            "duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5"), children: _jsx(NavAccountMenu, { selectedAccountId: selectedAccountId, accounts: items }) })] })] }));
};
