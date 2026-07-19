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
import { Fragment, useContext, useState } from "react";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import { useDateFormatter } from "react-aria";
import { CalendarGrid as AriaCalendarGrid, CalendarGridBody as AriaCalendarGridBody, CalendarGridHeader as AriaCalendarGridHeader, CalendarHeaderCell as AriaCalendarHeaderCell, RangeCalendar as AriaRangeCalendar, RangeCalendarContext, RangeCalendarStateContext, useSlottedContext, } from "react-aria-components";
import { Button } from "../../../components/base/buttons/button";
import { InputDateBase } from "../../../components/base/input/input-date";
import { useBreakpoint } from "../../../hooks/use-breakpoint";
import { cx } from "../../../utils/cx";
import { CalendarCell } from "./cell";
export const RangeCalendarContextProvider = ({ children }) => {
    const [value, onChange] = useState(null);
    const [focusedValue, onFocusChange] = useState();
    return _jsx(RangeCalendarContext.Provider, { value: { value, onChange, focusedValue, onFocusChange }, children: children });
};
const RangeCalendarTitle = ({ part }) => {
    const context = useContext(RangeCalendarStateContext);
    if (!context) {
        throw new Error("<RangeCalendarTitle /> must be used within a <RangeCalendar /> component.");
    }
    const formatter = useDateFormatter({
        month: "long",
        year: "numeric",
        calendar: context.visibleRange.start.calendar.identifier,
        timeZone: context.timeZone,
    });
    return part === "start"
        ? formatter.format(context.visibleRange.start.toDate(context.timeZone))
        : formatter.format(context.visibleRange.end.toDate(context.timeZone));
};
export const RangePresetButton = (_a) => {
    var _b, _c, _d, _e;
    var { value, className, children } = _a, props = __rest(_a, ["value", "className", "children"]);
    const context = useSlottedContext(RangeCalendarContext);
    const isSelected = ((_c = (_b = context === null || context === void 0 ? void 0 : context.value) === null || _b === void 0 ? void 0 : _b.start) === null || _c === void 0 ? void 0 : _c.compare(value.start)) === 0 && ((_e = (_d = context === null || context === void 0 ? void 0 : context.value) === null || _d === void 0 ? void 0 : _d.end) === null || _e === void 0 ? void 0 : _e.compare(value.end)) === 0;
    return (_jsx("button", Object.assign({}, props, { className: cx("cursor-pointer rounded-md px-3 py-2 text-left text-sm font-medium outline-focus-ring transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2", isSelected ? "bg-active text-secondary_hover hover:bg-secondary_hover" : "text-secondary hover:bg-primary_hover hover:text-secondary_hover", className), children: children })));
};
const MobilePresetButton = (_a) => {
    var { value, children } = _a, props = __rest(_a, ["value", "children"]);
    const context = useContext(RangeCalendarStateContext);
    return (_jsx(Button, Object.assign({}, props, { slot: null, size: "sm", color: "link-color", onClick: () => {
            context === null || context === void 0 ? void 0 : context.setValue(value);
            context === null || context === void 0 ? void 0 : context.setFocusedDate(value.start);
        }, children: children })));
};
export const RangeCalendar = (_a) => {
    var { presets, visibleDuration, showOutOfRangeDates = false, showPresetsOnDesktop = false } = _a, props = __rest(_a, ["presets", "visibleDuration", "showOutOfRangeDates", "showPresetsOnDesktop"]);
    const isDesktop = useBreakpoint("md");
    const context = useSlottedContext(RangeCalendarContext);
    const ContextWrapper = context ? Fragment : RangeCalendarContextProvider;
    const visibleDurationMonths = (visibleDuration === null || visibleDuration === void 0 ? void 0 : visibleDuration.months) || (isDesktop ? 2 : 1);
    return (_jsx(ContextWrapper, { children: _jsxs(AriaRangeCalendar, Object.assign({}, props, { className: (state) => cx("flex items-start", typeof props.className === "function" ? props.className(state) : props.className), visibleDuration: {
                months: visibleDurationMonths,
            }, children: [_jsxs("div", { className: "flex flex-col gap-3 px-6 py-5 md:gap-2", children: [_jsxs("header", { className: cx("relative flex items-center", visibleDurationMonths > 1 ? "justify-start" : "justify-between"), children: [_jsx(Button, { slot: "previous", iconLeading: ChevronLeft, size: "sm", color: "tertiary", className: "size-8" }), _jsx("h2", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-fg-secondary", children: _jsx(RangeCalendarTitle, { part: "start" }) }), visibleDurationMonths === 1 && _jsx(Button, { slot: "next", iconLeading: ChevronRight, size: "sm", color: "tertiary", className: "size-8" })] }), !isDesktop && (_jsxs("div", { className: "flex items-center gap-2 md:hidden", children: [_jsx(InputDateBase, { slot: "start", size: "sm", className: "flex-1" }), _jsx("div", { className: "text-md text-quaternary", children: "\u2013" }), _jsx(InputDateBase, { slot: "end", size: "sm", className: "flex-1" })] })), (showPresetsOnDesktop || !isDesktop) && presets && (_jsx("div", { className: "mt-1 flex justify-between gap-3 px-2", children: Object.values(presets).map((preset) => (_jsx(MobilePresetButton, { value: preset.value, children: preset.label }, preset.label))) })), _jsxs(AriaCalendarGrid, { weekdayStyle: "short", className: "w-max", children: [_jsx(AriaCalendarGridHeader, { children: (day) => (_jsx(AriaCalendarHeaderCell, { className: "border-b-4 border-transparent p-0", children: _jsx("div", { className: "flex size-10 items-center justify-center text-sm font-medium text-secondary", children: day.slice(0, 2) }) })) }), _jsx(AriaCalendarGridBody, { className: "[&_td]:p-0 [&_tr]:border-b-4 [&_tr]:border-transparent [&_tr:last-of-type]:border-none", children: (date) => _jsx(CalendarCell, { date: date, showOutOfRangeDates: showOutOfRangeDates }) })] })] }), visibleDurationMonths > 1 && (_jsxs("div", { className: "flex flex-col gap-3 border-l border-secondary px-6 py-5", children: [_jsxs("header", { className: "relative flex items-center justify-end", children: [_jsx("h2", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-fg-secondary", children: _jsx(RangeCalendarTitle, { part: "end" }) }), _jsx(Button, { slot: "next", iconLeading: ChevronRight, size: "sm", color: "tertiary", className: "size-8" })] }), _jsxs(AriaCalendarGrid, { weekdayStyle: "short", offset: { months: 1 }, className: "w-max", children: [_jsx(AriaCalendarGridHeader, { children: (day) => (_jsx(AriaCalendarHeaderCell, { className: "border-b-4 border-transparent p-0", children: _jsx("div", { className: "flex size-10 items-center justify-center text-sm font-medium text-secondary", children: day.slice(0, 2) }) })) }), _jsx(AriaCalendarGridBody, { className: "[&_td]:p-0 [&_tr]:border-b-4 [&_tr]:border-transparent [&_tr:last-of-type]:border-none", children: (date) => _jsx(CalendarCell, { date: date }) })] })] }))] })) }));
};
