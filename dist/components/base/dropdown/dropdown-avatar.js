"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Container, HelpCircle, LayersTwo01, LogOut01, Moon01, Settings01, User01 } from "@untitledui/icons";
import { Button as AriaButton, SubmenuTrigger } from "react-aria-components";
import { Avatar } from "../../../components/base/avatar/avatar";
import { Button } from "../../../components/base/buttons/button";
import { Dropdown } from "../../../components/base/dropdown/dropdown";
import { cx } from "../../../utils/cx";
import { AvatarLabelGroup } from "../avatar/avatar-label-group";
export const DropdownAvatar = () => {
    const [selectedTheme, setSelectedTheme] = useState(new Set(["light-mode"]));
    return (_jsxs(Dropdown.Root, { children: [_jsx(AriaButton, { className: ({ isPressed, isFocusVisible }) => cx("group relative inline-flex cursor-pointer rounded-full outline-offset-2 outline-focus-ring", (isPressed || isFocusVisible) && "outline-2"), children: _jsx(Avatar, { alt: "Olivia Rhye", src: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80", size: "sm" }) }), _jsxs(Dropdown.Popover, { className: "w-60", children: [_jsx("div", { className: "flex gap-3 border-b border-secondary p-3", children: _jsx(AvatarLabelGroup, { size: "md", src: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80", status: "online", title: "Olivia Rhye", subtitle: "olivia@untitledui.com" }) }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { icon: User01, addon: "\u2318K->P", children: "View profile" }), _jsx(Dropdown.Item, { icon: Settings01, addon: "\u2318S", children: "Settings" }), _jsx(Dropdown.Section, { selectionMode: "single", selectedKeys: selectedTheme, onSelectionChange: setSelectedTheme, children: _jsx(Dropdown.Item, { id: "dark-mode", icon: Moon01, selectionIndicator: "toggle", children: "Dark mode" }) }), _jsx(Dropdown.Separator, {}), _jsx(Dropdown.Item, { icon: LayersTwo01, addon: "\u2318S", children: "Changelog" }), _jsxs(SubmenuTrigger, { children: [_jsx(Dropdown.Item, { icon: HelpCircle, children: "Support" }), _jsx(Dropdown.Popover, { placement: "right top", offset: -6, children: _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { children: "Help center" }), _jsx(Dropdown.Item, { children: "Contact support" }), _jsx(Dropdown.Item, { children: "Send feedback" })] }) })] }), _jsx(Dropdown.Item, { icon: Container, children: "API" })] }), _jsx("div", { className: "flex flex-col gap-3 border-t border-secondary p-3", children: _jsx(Button, { size: "xs", color: "secondary", iconLeading: LogOut01, className: "text-center", children: "Sign out" }) })] })] }));
};
