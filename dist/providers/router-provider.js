"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";
export const RouteProvider = ({ children }) => {
    const router = useRouter();
    return _jsx(RouterProvider, { navigate: router.push, children: children });
};
