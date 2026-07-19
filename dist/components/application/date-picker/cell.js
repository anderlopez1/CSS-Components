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
import { getDayOfWeek, getLocalTimeZone, isToday } from "@internationalized/date";
import { CalendarCell as AriaCalendarCell, RangeCalendarContext, useLocale, useSlottedContext } from "react-aria-components";
import { cx } from "../../../utils/cx";
export const CalendarCell = (_a) => {
    var _b, _c;
    var { date, isHighlighted, showOutOfRangeDates = false } = _a, props = __rest(_a, ["date", "isHighlighted", "showOutOfRangeDates"]);
    const { locale } = useLocale();
    const dayOfWeek = getDayOfWeek(date, locale);
    const rangeCalendarContext = useSlottedContext(RangeCalendarContext);
    const isRangeCalendar = !!rangeCalendarContext;
    const start = (_b = rangeCalendarContext === null || rangeCalendarContext === void 0 ? void 0 : rangeCalendarContext.value) === null || _b === void 0 ? void 0 : _b.start;
    const end = (_c = rangeCalendarContext === null || rangeCalendarContext === void 0 ? void 0 : rangeCalendarContext.value) === null || _c === void 0 ? void 0 : _c.end;
    const isAfterStart = start ? date.compare(start) > 0 : true;
    const isBeforeEnd = end ? date.compare(end) < 0 : true;
    const isAfterOrOnStart = start && date.compare(start) >= 0;
    const isBeforeOrOnEnd = end && date.compare(end) <= 0;
    const isInRange = isAfterOrOnStart && isBeforeOrOnEnd;
    const lastDayOfMonth = new Date(date.year, date.month, 0).getDate();
    const isLastDayOfMonth = date.day === lastDayOfMonth;
    const isFirstDayOfMonth = date.day === 1;
    const isTodayDate = isToday(date, getLocalTimeZone());
    return (_jsx(AriaCalendarCell, Object.assign({}, props, { date: date, className: ({ isDisabled, isFocusVisible, isSelectionStart, isSelectionEnd, isSelected, isOutsideMonth }) => {
            const isRoundedLeft = isSelectionStart || dayOfWeek === 0;
            const isRoundedRight = isSelectionEnd || dayOfWeek === 6;
            return cx("relative size-10 focus:outline-hidden", isRoundedLeft && "rounded-l-full", isRoundedRight && "rounded-r-full", isInRange && isDisabled && "bg-active", isSelected && isRangeCalendar && "bg-active", isDisabled ? "pointer-events-none" : "cursor-pointer", isFocusVisible ? "z-10" : "z-0", isOutsideMonth && "opacity-50", isRangeCalendar && isOutsideMonth && !showOutOfRangeDates && "hidden", 
            // Show gradient on last day of month if it's within the selected range.
            isLastDayOfMonth &&
                isSelected &&
                isBeforeEnd &&
                isRangeCalendar &&
                "after:absolute after:inset-0 after:translate-x-full after:bg-gradient-to-l after:from-transparent after:to-bg-active in-[[role=gridcell]:last-child]:after:hidden", 
            // Show gradient on first day of month if it's within the selected range.
            isFirstDayOfMonth &&
                isSelected &&
                isAfterStart &&
                isRangeCalendar &&
                "after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:to-bg-active in-[[role=gridcell]:first-child]:after:hidden");
        }, children: ({ isDisabled, isFocusVisible, isSelectionStart, isSelectionEnd, isSelected, formattedDate }) => {
            const markedAsSelected = isSelectionStart || isSelectionEnd || (isSelected && !isDisabled && !isRangeCalendar);
            return (_jsxs("div", { className: cx("relative flex size-full items-center justify-center rounded-full text-sm text-secondary hover:text-secondary_hover", 
                // Disabled state.
                isDisabled && "text-secondary/50", 
                // Focus ring, visible while the cell has keyboard focus.
                isFocusVisible ? "outline-2 outline-offset-2 outline-focus-ring" : "", 
                // Hover state for cells in the middle of the range.
                isSelected && !isDisabled && isRangeCalendar ? "font-medium" : "", markedAsSelected && "bg-brand-solid font-medium text-white hover:bg-brand-solid_hover hover:text-white", 
                // Hover state for non-selected cells.
                !isSelected && !isDisabled ? "hover:bg-primary_hover hover:font-medium!" : "", !isSelected && isTodayDate ? "bg-active font-medium hover:bg-secondary_hover" : ""), children: [formattedDate, (isHighlighted || isTodayDate) && (_jsx("div", { className: cx("absolute bottom-1 left-1/2 size-1.25 -translate-x-1/2 rounded-full", markedAsSelected ? "bg-fg-white" : "bg-fg-brand-primary", isDisabled && "opacity-50") }))] }));
        } })));
};
