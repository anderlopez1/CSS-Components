"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "../../../utils/cx";
import { Circle } from "./circle";
import { Grid } from "./grid";
import { GridCheck } from "./grid-check";
import { Square } from "./square";
const patterns = {
    circle: Circle,
    square: Square,
    grid: Grid,
    "grid-check": GridCheck,
};
export const BackgroundPattern = (props) => {
    const { pattern } = props;
    const Pattern = patterns[pattern];
    return _jsx(Pattern, Object.assign({}, props, { size: props.size, className: cx("pointer-events-none", props.className) }));
};
