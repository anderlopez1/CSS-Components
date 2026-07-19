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
import { useMemo, useState } from "react";
import { endOfMonth, endOfWeek, getLocalTimeZone, startOfMonth, startOfWeek, today } from "@internationalized/date";
import { useControlledState } from "@react-stately/utils";
import { Calendar as CalendarIcon } from "@untitledui/icons";
import { useDateFormatter } from "react-aria";
import { DateRangePicker as AriaDateRangePicker, Dialog as AriaDialog, Group as AriaGroup, Popover as AriaPopover, useLocale } from "react-aria-components";
import { Button } from "../../../components/base/buttons/button";
import { InputDateBase } from "../../../components/base/input/input-date";
import { cx } from "../../../utils/cx";
import { RangeCalendar, RangePresetButton } from "./range-calendar";
const now = today(getLocalTimeZone());
const highlightedDates = [today(getLocalTimeZone())];
export const DateRangePicker = (_a) => {
    var { value: valueProp, defaultValue, onChange, onApply, onCancel, size = "sm" } = _a, props = __rest(_a, ["value", "defaultValue", "onChange", "onApply", "onCancel", "size"]);
    const { locale } = useLocale();
    const formatter = useDateFormatter({
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    const [value, setValue] = useControlledState(valueProp, defaultValue || null, onChange);
    const [focusedValue, setFocusedValue] = useState(null);
    const formattedStartDate = (value === null || value === void 0 ? void 0 : value.start) ? formatter.format(value.start.toDate(getLocalTimeZone())) : "Select date";
    const formattedEndDate = (value === null || value === void 0 ? void 0 : value.end) ? formatter.format(value.end.toDate(getLocalTimeZone())) : "Select date";
    const presets = useMemo(() => ({
        today: { label: "Today", value: { start: now, end: now } },
        yesterday: { label: "Yesterday", value: { start: now.subtract({ days: 1 }), end: now.subtract({ days: 1 }) } },
        thisWeek: { label: "This week", value: { start: startOfWeek(now, locale), end: endOfWeek(now, locale) } },
        lastWeek: {
            label: "Last week",
            value: {
                start: startOfWeek(now, locale).subtract({ weeks: 1 }),
                end: endOfWeek(now, locale).subtract({ weeks: 1 }),
            },
        },
        thisMonth: { label: "This month", value: { start: startOfMonth(now), end: endOfMonth(now) } },
        lastMonth: {
            label: "Last month",
            value: {
                start: startOfMonth(now).subtract({ months: 1 }),
                end: endOfMonth(now).subtract({ months: 1 }),
            },
        },
        thisYear: { label: "This year", value: { start: startOfMonth(now.set({ month: 1 })), end: endOfMonth(now.set({ month: 12 })) } },
        lastYear: {
            label: "Last year",
            value: {
                start: startOfMonth(now.set({ month: 1 }).subtract({ years: 1 })),
                end: endOfMonth(now.set({ month: 12 }).subtract({ years: 1 })),
            },
        },
        allTime: {
            label: "All time",
            value: {
                start: now.set({ year: 2000, month: 1, day: 1 }),
                end: now,
            },
        },
    }), [locale]);
    return (_jsxs(AriaDateRangePicker, Object.assign({ "aria-label": "Date range picker", shouldCloseOnSelect: false }, props, { value: value, onChange: setValue, children: [_jsx(AriaGroup, { children: _jsx(Button, { size: size, color: "secondary", iconLeading: CalendarIcon, children: !value ? _jsx("span", { className: "text-placeholder", children: "Select dates" }) : `${formattedStartDate} – ${formattedEndDate}` }) }), _jsx(AriaPopover, { placement: "bottom right", offset: 8, className: ({ isEntering, isExiting }) => cx("origin-(--trigger-anchor-point) will-change-transform", isEntering &&
                    "duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5", isExiting &&
                    "duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5"), children: _jsx(AriaDialog, { "aria-label": "Date range picker", className: "flex rounded-2xl bg-primary shadow-xl ring ring-secondary_alt focus:outline-hidden", children: ({ close }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "hidden w-38 flex-col gap-0.5 border-r border-solid border-secondary p-3 lg:flex", children: Object.values(presets).map((preset) => (_jsx(RangePresetButton, { value: preset.value, onClick: () => {
                                        setValue(preset.value);
                                        setFocusedValue(preset.value.start);
                                    }, children: preset.label }, preset.label))) }), _jsxs("div", { className: "flex flex-col", children: [_jsx(RangeCalendar, { focusedValue: focusedValue, onFocusChange: setFocusedValue, highlightedDates: highlightedDates, presets: {
                                            lastWeek: presets.lastWeek,
                                            lastMonth: presets.lastMonth,
                                            lastYear: presets.lastYear,
                                        } }), _jsxs("div", { className: "flex justify-between gap-3 border-t border-secondary p-4", children: [_jsxs("div", { className: "hidden items-center gap-2 md:flex", children: [_jsx(InputDateBase, { slot: "start", size: "sm" }), _jsx("div", { className: "text-md text-quaternary", children: "\u2013" }), _jsx(InputDateBase, { slot: "end", size: "sm" })] }), _jsxs("div", { className: "grid w-full grid-cols-2 gap-3 md:flex md:w-auto", children: [_jsx(Button, { size: "sm", color: "secondary", onClick: () => {
                                                            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                                                            close();
                                                        }, children: "Cancel" }), _jsx(Button, { size: "sm", color: "primary", onClick: () => {
                                                            onApply === null || onApply === void 0 ? void 0 : onApply();
                                                            close();
                                                        }, children: "Apply" })] })] })] })] })) }) })] })));
};
