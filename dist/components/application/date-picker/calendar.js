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
import { Fragment, useState } from "react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import { Calendar as AriaCalendar, CalendarContext as AriaCalendarContext, CalendarGrid as AriaCalendarGrid, CalendarGridBody as AriaCalendarGridBody, CalendarGridHeader as AriaCalendarGridHeader, CalendarHeaderCell as AriaCalendarHeaderCell, Heading as AriaHeading, useSlottedContext, } from "react-aria-components";
import { Button } from "../../../components/base/buttons/button";
import { InputDateBase } from "../../../components/base/input/input-date";
import { cx } from "../../../utils/cx";
import { CalendarCell } from "./cell";
export const CalendarContextProvider = ({ children }) => {
    const [value, onChange] = useState(null);
    const [focusedValue, onFocusChange] = useState();
    // @ts-ignore - AriaCalendarContext type mismatch
    return _jsx(AriaCalendarContext.Provider, { value: { value, onChange, focusedValue, onFocusChange }, children: children });
};
export const Calendar = (_a) => {
    var { highlightedDates, className, children } = _a, props = __rest(_a, ["highlightedDates", "className", "children"]);
    const context = useSlottedContext(AriaCalendarContext);
    const ContextWrapper = context ? Fragment : CalendarContextProvider;
    return (_jsx(ContextWrapper, { children: _jsx(AriaCalendar, Object.assign({}, props, { className: (state) => cx("flex flex-col gap-3", typeof className === "function" ? className(state) : className), children: ({ state }) => (_jsxs(_Fragment, { children: [_jsxs("header", { className: "flex items-center justify-between", children: [_jsx(Button, { slot: "previous", iconLeading: ChevronLeft, size: "sm", color: "tertiary", className: "size-8" }), _jsx(AriaHeading, { className: "text-sm font-semibold text-fg-secondary" }), _jsx(Button, { slot: "next", iconLeading: ChevronRight, size: "sm", color: "tertiary", className: "size-8" })] }), children || (_jsxs("div", { className: "flex gap-3", children: [_jsx(InputDateBase, { "aria-label": "Date", size: "sm", className: "flex-1" }), _jsx(Button, { slot: null, size: "sm", color: "secondary", onClick: () => {
                                    state.setValue(today(getLocalTimeZone()));
                                    state.setFocusedDate(today(getLocalTimeZone()));
                                }, children: "Today" })] })), _jsxs(AriaCalendarGrid, { weekdayStyle: "short", className: "w-max", children: [_jsx(AriaCalendarGridHeader, { className: "border-b-4 border-transparent", children: (day) => (_jsx(AriaCalendarHeaderCell, { className: "p-0", children: _jsx("div", { className: "flex size-10 items-center justify-center text-sm font-medium text-secondary", children: day.slice(0, 2) }) })) }), _jsx(AriaCalendarGridBody, { className: "[&_td]:p-0 [&_tr]:border-b-4 [&_tr]:border-transparent [&_tr:last-of-type]:border-none", children: (date) => (_jsx(CalendarCell, { date: date, isHighlighted: highlightedDates === null || highlightedDates === void 0 ? void 0 : highlightedDates.some((highlightedDate) => date.compare(highlightedDate) === 0) })) })] })] })) })) }));
};
