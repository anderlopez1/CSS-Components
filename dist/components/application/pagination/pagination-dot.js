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
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { cx } from "../../../utils/cx";
import { Pagination } from "./pagination-base";
export const PaginationDot = (_a) => {
    var { framed, className, size = "md", isBrand } = _a, props = __rest(_a, ["framed", "className", "size", "isBrand"]);
    const sizes = {
        md: {
            root: cx("gap-3", framed && "p-2"),
            button: "h-2 w-2 after:-inset-x-1.5 after:-inset-y-2",
        },
        lg: {
            root: cx("gap-4", framed && "p-3"),
            button: "h-2.5 w-2.5 after:-inset-x-2 after:-inset-y-3",
        },
    };
    return (_jsx(Pagination.Root, Object.assign({}, props, { className: cx("flex h-max w-max", sizes[size].root, framed && "rounded-full bg-alpha-white/90 backdrop-blur", className), children: _jsx(Pagination.Context, { children: ({ pages }) => pages.map((page, index) => page.type === "page" ? (_createElement(Pagination.Item, Object.assign({}, page, { asChild: true, key: index, className: cx("relative cursor-pointer rounded-full bg-quaternary outline-focus-ring after:absolute focus-visible:outline-2 focus-visible:outline-offset-2", sizes[size].button, page.isCurrent && "bg-fg-brand-primary_alt", isBrand && "bg-fg-brand-secondary", isBrand && page.isCurrent && "bg-fg-white") }))) : (_createElement(Pagination.Ellipsis, Object.assign({}, page, { key: index })))) }) })));
};
