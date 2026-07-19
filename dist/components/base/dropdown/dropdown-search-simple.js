"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown, SearchLg } from "@untitledui/icons";
import { Autocomplete, SearchField, useFilter } from "react-aria-components";
import { Button } from "../../../components/base/buttons/button";
import { Dropdown } from "../../../components/base/dropdown/dropdown";
import { InputBase } from "../input/input";
export const DropdownSearchSimple = () => {
    const [selectedUsers, setSelectedUsers] = useState(new Set(["olivia", "phoenix"]));
    let { contains } = useFilter({ sensitivity: "base" });
    return (_jsxs(Dropdown.Root, { children: [_jsx(Button, { size: "sm", className: "group", color: "secondary", iconTrailing: (props) => _jsx(ChevronDown, Object.assign({ "data-icon": "trailing" }, props, { className: "size-4! stroke-[2.25px]!" })), children: "Manage access" }), _jsx(Dropdown.Popover, { className: "w-60", children: _jsxs(Autocomplete, { filter: contains, children: [_jsx(SearchField, { className: "flex gap-3 border-b border-secondary p-3", children: _jsx(InputBase, { size: "md", placeholder: "Search", icon: SearchLg }) }), _jsxs(Dropdown.Menu, { selectionMode: "multiple", selectedKeys: selectedUsers, onSelectionChange: setSelectedUsers, children: [_jsx(Dropdown.Item, { id: "olivia", textValue: "Olivia Rhye", selectionIndicator: "checkbox", children: "Olivia Rhye" }), _jsx(Dropdown.Item, { id: "phoenix", textValue: "Phoenix Baker", selectionIndicator: "checkbox", children: "Phoenix Baker" }), _jsx(Dropdown.Item, { id: "lana", textValue: "Lana Steiner", selectionIndicator: "checkbox", children: "Lana Steiner" }), _jsx(Dropdown.Item, { id: "demi", textValue: "Demi Wilkinson", selectionIndicator: "checkbox", children: "Demi Wilkinson" }), _jsx(Dropdown.Item, { id: "candice", textValue: "Candice Wu", selectionIndicator: "checkbox", children: "Candice Wu" }), _jsx(Dropdown.Item, { id: "natali", textValue: "Natali Craig", selectionIndicator: "checkbox", children: "Natali Craig" }), _jsx(Dropdown.Item, { id: "drew", textValue: "Drew Cano", selectionIndicator: "checkbox", children: "Drew Cano" }), _jsx(Dropdown.Item, { id: "orlando", textValue: "Orlando Diggs", selectionIndicator: "checkbox", children: "Orlando Diggs" }), _jsx(Dropdown.Item, { id: "andi", textValue: "Andi Lane", selectionIndicator: "checkbox", children: "Andi Lane" })] })] }) })] }));
};
