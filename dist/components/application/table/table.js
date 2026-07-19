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
import { createContext, isValidElement, useContext } from "react";
import { ArrowDown, ChevronSelectorVertical, Copy01, Edit01, HelpCircle, Trash01 } from "@untitledui/icons";
import { Cell as AriaCell, Collection as AriaCollection, Column as AriaColumn, Group as AriaGroup, Row as AriaRow, Table as AriaTable, TableBody as AriaTableBody, TableHeader as AriaTableHeader, useTableOptions, } from "react-aria-components";
import { Badge } from "../../../components/base/badges/badges";
import { Checkbox } from "../../../components/base/checkbox/checkbox";
import { Dropdown } from "../../../components/base/dropdown/dropdown";
import { Tooltip, TooltipTrigger } from "../../../components/base/tooltip/tooltip";
import { cx } from "../../../utils/cx";
export const TableRowActionsDropdown = () => (_jsxs(Dropdown.Root, { children: [_jsx(Dropdown.DotsButton, {}), _jsx(Dropdown.Popover, { className: "w-min", children: _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { icon: Edit01, children: _jsx("span", { className: "pr-4", children: "Edit" }) }), _jsx(Dropdown.Item, { icon: Copy01, children: _jsx("span", { className: "pr-4", children: "Copy link" }) }), _jsx(Dropdown.Item, { icon: Trash01, children: _jsx("span", { className: "pr-4", children: "Delete" }) })] }) })] }));
const TableContext = createContext({ size: "md" });
const TableCardRoot = (_a) => {
    var { children, className, size = "md" } = _a, props = __rest(_a, ["children", "className", "size"]);
    return (_jsx(TableContext.Provider, { value: { size }, children: _jsx("div", Object.assign({}, props, { className: cx("overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary", className), children: children })) }));
};
const TableCardHeader = ({ title, badge, description, contentTrailing, className }) => {
    const { size } = useContext(TableContext);
    return (_jsxs("div", { className: cx("relative flex flex-col items-start gap-4 border-b border-secondary bg-primary px-4 md:flex-row", size === "sm" ? "py-4 md:px-5" : "py-5 md:px-6", className), children: [_jsxs("div", { className: "flex flex-1 flex-col gap-0.5", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("h2", { className: "text-md font-semibold text-primary", children: title }), badge ? (isValidElement(badge) ? (badge) : (_jsx(Badge, { color: "gray", size: "sm", type: "modern", children: badge }))) : null] }), description && _jsx("p", { className: "text-sm text-tertiary", children: description })] }), contentTrailing] }));
};
const TableRoot = (_a) => {
    var _b;
    var { className, size = "md" } = _a, props = __rest(_a, ["className", "size"]);
    const context = useContext(TableContext);
    return (_jsx(TableContext.Provider, { value: { size: (_b = context === null || context === void 0 ? void 0 : context.size) !== null && _b !== void 0 ? _b : size }, children: _jsx("div", { className: "overflow-x-auto", children: _jsx(AriaTable, Object.assign({ className: (state) => cx("w-full overflow-x-hidden", typeof className === "function" ? className(state) : className) }, props)) }) }));
};
TableRoot.displayName = "Table";
const TableHeader = (_a) => {
    var { columns, children, bordered = true, className, size: sizeProp } = _a, props = __rest(_a, ["columns", "children", "bordered", "className", "size"]);
    const context = useContext(TableContext);
    const { selectionBehavior, selectionMode } = useTableOptions();
    const size = sizeProp !== null && sizeProp !== void 0 ? sizeProp : context.size;
    return (_jsxs(AriaTableHeader, Object.assign({}, props, { className: (state) => cx("relative bg-secondary", size === "sm" ? "h-9" : "h-11", 
        // Row border—using an "after" pseudo-element to avoid the border taking up space.
        bordered &&
            "[&>tr>th]:after:pointer-events-none [&>tr>th]:after:absolute [&>tr>th]:after:inset-x-0 [&>tr>th]:after:bottom-0 [&>tr>th]:after:h-px [&>tr>th]:after:bg-border-secondary [&>tr>th]:focus-visible:after:bg-transparent", typeof className === "function" ? className(state) : className), children: [selectionBehavior === "toggle" && (_jsx(AriaColumn, { className: cx("relative py-2 pr-0 pl-4", size === "sm" ? "w-9 md:pl-5" : "w-11 md:pl-6"), children: selectionMode === "multiple" && (_jsx("div", { className: "flex items-start", children: _jsx(Checkbox, { slot: "selection", size: "md" }) })) })), _jsx(AriaCollection, { items: columns, children: children })] })));
};
TableHeader.displayName = "TableHeader";
const TableHead = (_a) => {
    var { className, tooltip, label, children } = _a, props = __rest(_a, ["className", "tooltip", "label", "children"]);
    const { selectionBehavior } = useTableOptions();
    return (_jsx(AriaColumn, Object.assign({}, props, { className: (state) => cx("relative p-0 px-6 py-2 outline-hidden focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-bg-primary focus-visible:ring-inset", selectionBehavior === "toggle" && "nth-2:pl-3", state.allowsSorting && "cursor-pointer", typeof className === "function" ? className(state) : className), children: (state) => (_jsxs(AriaGroup, { className: "flex items-center gap-1", children: [_jsxs("div", { className: "flex items-center gap-1", children: [label && _jsx("span", { className: "text-xs font-semibold whitespace-nowrap text-quaternary", children: label }), typeof children === "function" ? children(state) : children] }), tooltip && (_jsx(Tooltip, { title: tooltip, placement: "top", children: _jsx(TooltipTrigger, { className: "cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover", children: _jsx(HelpCircle, { className: "size-4" }) }) })), state.allowsSorting &&
                    (state.sortDirection ? (_jsx(ArrowDown, { className: cx("size-3 stroke-[3px] text-fg-quaternary", state.sortDirection === "ascending" && "rotate-180") })) : (_jsx(ChevronSelectorVertical, { size: 12, strokeWidth: 3, className: "text-fg-quaternary" })))] })) })));
};
TableHead.displayName = "TableHead";
const TableRow = (_a) => {
    var { columns, children, className, highlightSelectedRow = true, size: sizeProp } = _a, props = __rest(_a, ["columns", "children", "className", "highlightSelectedRow", "size"]);
    const context = useContext(TableContext);
    const { selectionBehavior } = useTableOptions();
    const size = sizeProp !== null && sizeProp !== void 0 ? sizeProp : context.size;
    return (_jsxs(AriaRow, Object.assign({}, props, { className: (state) => cx("relative outline-focus-ring transition-colors after:pointer-events-none hover:bg-secondary focus-visible:outline-2 focus-visible:-outline-offset-2", size === "sm" ? "h-14" : "h-18", highlightSelectedRow && "selected:bg-secondary", 
        // Row border—using an "after" pseudo-element to avoid the border taking up space.
        "[&>td]:after:absolute [&>td]:after:inset-x-0 [&>td]:after:bottom-0 [&>td]:after:h-px [&>td]:after:w-full [&>td]:after:bg-border-secondary last:[&>td]:after:hidden [&>td]:focus-visible:after:opacity-0 focus-visible:[&>td]:after:opacity-0", typeof className === "function" ? className(state) : className), children: [selectionBehavior === "toggle" && (_jsx(AriaCell, { className: cx("relative py-2 pr-0 pl-4", size === "sm" ? "md:pl-5" : "md:pl-6"), children: _jsx("div", { className: "flex items-end", children: _jsx(Checkbox, { slot: "selection", size: "md" }) }) })), _jsx(AriaCollection, { items: columns, children: children })] })));
};
TableRow.displayName = "TableRow";
const TableCell = (_a) => {
    var { className, children, size: sizeProp } = _a, props = __rest(_a, ["className", "children", "size"]);
    const context = useContext(TableContext);
    const { selectionBehavior } = useTableOptions();
    const size = sizeProp !== null && sizeProp !== void 0 ? sizeProp : context.size;
    return (_jsx(AriaCell, Object.assign({}, props, { className: (state) => cx("relative text-sm text-tertiary outline-focus-ring focus-visible:z-1 focus-visible:outline-2 focus-visible:-outline-offset-2", size === "sm" && "px-5 py-3", size === "md" && "px-6 py-4", selectionBehavior === "toggle" && "nth-2:pl-3", typeof className === "function" ? className(state) : className), children: children })));
};
TableCell.displayName = "TableCell";
const TableCard = {
    Root: TableCardRoot,
    Header: TableCardHeader,
};
const Table = TableRoot;
Table.Body = AriaTableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Row = TableRow;
export { Table, TableCard };
