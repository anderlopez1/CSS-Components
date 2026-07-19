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
import { getLocalTimeZone, today } from "@internationalized/date";
import { useControlledState } from "@react-stately/utils";
import { Calendar as CalendarIcon } from "@untitledui/icons";
import { useDateFormatter } from "react-aria";
import { DatePicker as AriaDatePicker, Dialog as AriaDialog, Group as AriaGroup, Popover as AriaPopover } from "react-aria-components";
import { Button } from "../../../components/base/buttons/button";
import { cx } from "../../../utils/cx";
import { Calendar } from "./calendar";
const highlightedDates = [today(getLocalTimeZone())];
export const DatePicker = (_a) => {
    var { value: valueProp, defaultValue, onChange, onApply, onCancel, size = "sm" } = _a, props = __rest(_a, ["value", "defaultValue", "onChange", "onApply", "onCancel", "size"]);
    const formatter = useDateFormatter({
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    const [value, setValue] = useControlledState(valueProp, defaultValue || null, onChange);
    const formattedDate = value ? formatter.format(value.toDate(getLocalTimeZone())) : "Select date";
    return (_jsxs(AriaDatePicker, Object.assign({ "aria-label": "Date picker", shouldCloseOnSelect: false }, props, { value: value, onChange: setValue, children: [_jsx(AriaGroup, { children: _jsx(Button, { size: size, color: "secondary", iconLeading: CalendarIcon, children: formattedDate }) }), _jsx(AriaPopover, { offset: 8, placement: "bottom right", className: ({ isEntering, isExiting }) => cx("origin-(--trigger-anchor-point) will-change-transform", isEntering &&
                    "duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5", isExiting &&
                    "duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5"), children: _jsx(AriaDialog, { "aria-label": "Date picker", className: "rounded-2xl bg-primary shadow-xl ring ring-secondary_alt", children: ({ close }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex px-6 py-5", children: _jsx(Calendar, { highlightedDates: highlightedDates }) }), _jsxs("div", { className: "grid grid-cols-2 gap-3 border-t border-secondary p-4", children: [_jsx(Button, { size: "md", color: "secondary", onClick: () => {
                                            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                                            close();
                                        }, children: "Cancel" }), _jsx(Button, { size: "md", color: "primary", onClick: () => {
                                            onApply === null || onApply === void 0 ? void 0 : onApply();
                                            close();
                                        }, children: "Apply" })] })] })) }) })] })));
};
