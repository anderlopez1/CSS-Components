"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from "next-themes";
export function Theme({ children }) {
    return (_jsx(ThemeProvider, { attribute: "class", value: { light: "light-mode", dark: "dark-mode" }, enableSystem: true, children: children }));
}
