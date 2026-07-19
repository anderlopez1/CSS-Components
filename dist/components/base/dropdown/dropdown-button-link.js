"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown, Trash01 } from "@untitledui/icons";
import { Button as AriaButton } from "react-aria-components";
import { Dropdown } from "../../../components/base/dropdown/dropdown";
import { cx } from "../../../utils/cx";
const permissions = [
    { id: "owner", label: "Owner" },
    { id: "can-edit", label: "Can edit" },
    { id: "can-view", label: "Can view" },
];
export const DropdownButtonLink = () => {
    var _a;
    const [selectedPermission, setSelectedPermission] = useState(permissions[1].id);
    return (_jsxs(Dropdown.Root, { children: [_jsxs(AriaButton, { className: ({ isPressed, isFocusVisible }) => cx("flex cursor-pointer items-center gap-1 rounded text-sm font-semibold text-tertiary outline-0 outline-offset-2 outline-focus-ring", (isPressed || isFocusVisible) && "outline-2"), children: [(_a = permissions.find((permission) => permission.id === selectedPermission.toString())) === null || _a === void 0 ? void 0 : _a.label, _jsx(ChevronDown, { className: "size-3 shrink-0 stroke-3 text-fg-quaternary" })] }), _jsx(Dropdown.Popover, { className: "w-40", children: _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Section, { selectionMode: "single", selectedKeys: [selectedPermission], onSelectionChange: (keys) => setSelectedPermission(typeof keys === "string" ? keys : keys.keys().toArray()[0]), children: permissions.map((permission) => (_jsx(Dropdown.Item, { id: permission.id, children: permission.label }, permission.id))) }), _jsx(Dropdown.Separator, {}), _jsx(Dropdown.Section, { children: _jsx(Dropdown.Item, { icon: Trash01, children: "Delete" }) })] }) })] }));
};
