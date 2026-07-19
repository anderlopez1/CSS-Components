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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Label as AriaLabel, Slider as AriaSlider, SliderOutput as AriaSliderOutput, SliderThumb as AriaSliderThumb, SliderTrack as AriaSliderTrack, } from "react-aria-components";
import { cx, sortCx } from "../../../utils/cx";
const styles = sortCx({
    default: "hidden",
    bottom: "absolute top-2 left-1/2 -translate-x-1/2 translate-y-full text-md font-medium text-primary",
    "top-floating": "absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-lg bg-primary px-2 py-1.5 text-xs font-semibold text-secondary shadow-lg ring-1 ring-secondary_alt",
});
export const Slider = (_a) => {
    var { labelPosition = "default", minValue = 0, maxValue = 100, labelFormatter, formatOptions } = _a, rest = __rest(_a, ["labelPosition", "minValue", "maxValue", "labelFormatter", "formatOptions"]);
    // Format thumb value as percentage by default.
    const defaultFormatOptions = {
        style: "percent",
        maximumFractionDigits: 0,
    };
    return (_jsxs(AriaSlider, Object.assign({}, rest, { minValue, maxValue, formatOptions: formatOptions !== null && formatOptions !== void 0 ? formatOptions : defaultFormatOptions, children: [_jsx(AriaLabel, {}), _jsx(AriaSliderTrack, { className: "relative h-6 w-full", children: ({ state: { values, getThumbValue, getThumbPercent, getFormattedValue } }) => {
                    const left = values.length === 1 ? 0 : getThumbPercent(0);
                    const width = values.length === 1 ? getThumbPercent(0) : getThumbPercent(1) - left;
                    return (_jsxs(_Fragment, { children: [_jsx("span", { className: "absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-quaternary" }), _jsx("span", { className: "absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-brand-solid", style: {
                                    left: `${left * 100}%`,
                                    width: `${width * 100}%`,
                                } }), values.map((_, index) => {
                                return (_jsx(AriaSliderThumb, { index: index, className: ({ isFocusVisible, isDragging }) => cx("top-1/2 box-border size-6 cursor-grab rounded-full bg-slider-handle-bg shadow-md ring-2 ring-slider-handle-border ring-inset", isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring", isDragging && "cursor-grabbing"), children: _jsx(AriaSliderOutput, { className: cx("whitespace-nowrap", styles[labelPosition]), children: labelFormatter ? labelFormatter(getThumbValue(index)) : getFormattedValue(getThumbValue(index) / 100) }) }, index));
                            })] }));
                } })] })));
};
