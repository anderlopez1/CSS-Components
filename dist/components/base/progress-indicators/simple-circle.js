"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export const CircleProgressBar = (props) => {
    const { value, min = 0, max = 100 } = props;
    const percentage = ((value - min) * 100) / (max - min);
    return (_jsxs("div", { role: "progressbar", "aria-valuenow": value, "aria-valuemin": min, "aria-valuemax": max, className: "relative flex w-max items-center justify-center", children: [_jsxs("span", { className: "absolute text-sm font-medium text-primary", children: [percentage, "%"] }), _jsxs("svg", { className: "size-16 -rotate-90", viewBox: "0 0 60 60", children: [_jsx("circle", { className: "stroke-bg-quaternary", cx: "30", cy: "30", r: "26", fill: "none", strokeWidth: "6" }), _jsx("circle", { className: "stroke-fg-brand-primary", style: {
                            strokeDashoffset: `calc(100 - ${percentage})`,
                        }, cx: "30", cy: "30", r: "26", fill: "none", strokeWidth: "6", strokeDasharray: "100", pathLength: "100", strokeLinecap: "round" })] })] }));
};
