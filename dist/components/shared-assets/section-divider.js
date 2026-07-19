"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "../../utils/cx";
export const SectionDivider = (props) => {
    return (_jsx("div", Object.assign({}, props, { className: cx("mx-auto max-w-container px-4 md:px-8", props.className), children: _jsx("hr", { className: "h-px w-full border-none bg-border-secondary" }) })));
};
