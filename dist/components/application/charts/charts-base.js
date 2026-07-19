"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from "../../../utils/cx";
/**
 * Selects evenly spaced items from an array. Used for rendering
 * certain number of x-axis labels.
 * @param dataArray - The array of items to select from.
 * @param count - The number of items to select.
 * @returns The selected items.
 */
export const selectEvenlySpacedItems = (dataArray, count) => {
    if (!dataArray || dataArray.length === 0) {
        return [];
    }
    const selectedItems = [];
    if (dataArray.length === 1) {
        for (let i = 0; i < count; i++) {
            selectedItems.push(dataArray[0]);
        }
        return selectedItems;
    }
    for (let i = 0; i < count; i++) {
        const targetIndex = Math.round((i * (dataArray.length - 1)) / (count - 1));
        const boundedIndex = Math.max(0, Math.min(targetIndex, dataArray.length - 1));
        selectedItems.push(dataArray[boundedIndex]);
    }
    return selectedItems;
};
/**
 * Renders the legend content for a chart.
 * @param reversed - Whether to reverse the payload.
 * @param payload - The payload of the legend.
 * @param align - The alignment of the legend.
 * @param layout - The layout of the legend.
 * @param className - The class name of the legend.
 * @returns The legend content.
 */
export const ChartLegendContent = ({ reversed, payload, align, layout, className }) => {
    payload = reversed ? payload === null || payload === void 0 ? void 0 : payload.toReversed() : payload;
    return (_jsx("ul", { className: cx("flex", layout === "vertical"
            ? `flex-col gap-1 pl-4 ${align === "center" ? "items-center" : align === "right" ? "items-start" : "items-start"}`
            : `flex-row gap-3 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`, className), children: payload === null || payload === void 0 ? void 0 : payload.map((entry, index) => {
            var _a;
            return (_jsxs("li", { className: "flex items-center gap-2 text-sm text-tertiary", children: [_jsx("span", { className: cx("block size-2 rounded-full bg-current ring-[0.5px] ring-black/10 ring-inset", (_a = entry.payload) === null || _a === void 0 ? void 0 : _a.className) }), entry.value] }, index));
        }) }));
};
export const ChartTooltipContent = ({ active, payload, label, isRadialChart, isPieChart, formatter, labelFormatter }) => {
    const canRender = active && payload && payload.length;
    if (!canRender) {
        return null;
    }
    const isSingleDataPoint = payload.length === 1;
    // If it's a single data point, we use the value as the title and
    // the name as the secondary title.
    let title = isSingleDataPoint ? (isRadialChart ? payload[0].value : isPieChart ? payload[0].value : payload[0].value) : label;
    let secondaryTitle = isSingleDataPoint ? (isRadialChart ? payload[0].payload.name : isPieChart ? payload[0].name : label) : payload;
    title =
        isSingleDataPoint && formatter
            ? formatter(title, (payload === null || payload === void 0 ? void 0 : payload[0].name) || label, payload[0], 0, payload)
            : labelFormatter
                ? labelFormatter(title, payload)
                : title;
    secondaryTitle = isSingleDataPoint && labelFormatter ? labelFormatter(secondaryTitle, payload) : secondaryTitle;
    return (_jsxs("div", { className: "flex flex-col gap-0.5 rounded-lg bg-primary-solid px-3 py-2 shadow-lg", children: [_jsx("p", { className: "text-xs font-semibold text-white", children: title }), !secondaryTitle ? null : Array.isArray(secondaryTitle) ? (_jsx("div", { children: secondaryTitle.map((entry, index) => (_jsx("p", { className: cx("text-xs text-tooltip-supporting-text"), children: `${entry.name}: ${formatter ? formatter(entry.value, entry.name, entry, index, entry.payload) : entry.value}` }, index))) })) : (_jsx("p", { className: "text-xs text-tooltip-supporting-text", children: secondaryTitle }))] }));
};
export const ChartActiveDot = ({ cx = 0, cy = 0 }) => {
    const size = 12;
    return (_jsx("svg", { x: cx - size / 2, y: cy - size / 2, width: size, height: size, viewBox: "0 0 12 12", fill: "none", children: _jsx("rect", { x: "2", y: "2", width: "8", height: "8", rx: "6", className: "fill-bg-primary stroke-utility-brand-600", strokeWidth: "2" }) }));
};
