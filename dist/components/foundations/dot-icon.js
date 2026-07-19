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
const sizes = {
    sm: {
        wh: 8,
        c: 4,
        r: 2.5,
    },
    md: {
        wh: 10,
        c: 5,
        r: 4,
    },
};
export const Dot = (_a) => {
    var { size = "md" } = _a, props = __rest(_a, ["size"]);
    return (_jsx("svg", Object.assign({ width: sizes[size].wh, height: sizes[size].wh, viewBox: `0 0 ${sizes[size].wh} ${sizes[size].wh}`, fill: "none" }, props, { children: _jsx("circle", { cx: sizes[size].c, cy: sizes[size].c, r: sizes[size].r, fill: "currentColor", stroke: "currentColor" }) })));
};
