"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "../../../../utils/cx";
export const AvatarCount = ({ count, className }) => (_jsx("div", { className: cx("absolute right-0 bottom-0 p-px", className), children: _jsx("div", { className: "flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-center text-[10px] leading-[13px] font-bold text-white", children: count }) }));
