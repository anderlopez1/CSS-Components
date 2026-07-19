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
import { useId } from "react";
import { cx } from "../../utils/cx";
export const getStarProgress = (starPosition, rating, maxRating = 5) => {
    // Ensure rating is between 0 and 5
    const clampedRating = Math.min(Math.max(rating, 0), maxRating);
    const diff = clampedRating - starPosition;
    if (diff >= 1)
        return 100;
    if (diff <= 0)
        return 0;
    return Math.round(diff * 100);
};
export const StarIcon = (_a) => {
    var { progress = 100 } = _a, props = __rest(_a, ["progress"]);
    const id = useId();
    return (_jsxs("svg", Object.assign({ width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" }, props, { className: cx("size-5 text-yellow-400", props.className), children: [_jsx("path", { d: "M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z", className: "fill-bg-tertiary" }), _jsx("g", { clipPath: `url(#clip-${id})`, children: _jsx("path", { d: "M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z", fill: "currentColor" }) }), _jsx("defs", { children: _jsx("clipPath", { id: `clip-${id}`, children: _jsx("rect", { width: `${progress}%`, height: "20", fill: "white" }) }) })] })));
};
export const RatingStars = (_a) => {
    var { rating = 5, stars = 5, starClassName } = _a, props = __rest(_a, ["rating", "stars", "starClassName"]);
    return (_jsx("div", Object.assign({}, props, { className: cx("flex", props.className), children: Array.from({ length: stars }).map((_, index) => (_jsx(StarIcon, { progress: getStarProgress(index, rating, stars), className: starClassName }, index))) })));
};
