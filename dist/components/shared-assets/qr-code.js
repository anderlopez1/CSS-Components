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
import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { cx } from "../../utils/cx";
const QRCodeFrameHandle = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({}, props, { className: cx("size-3 rounded-tl border-t-2 border-l-2 border-brand_alt", className) })));
};
export const GradientScan = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({}, props, { className: cx("absolute bottom-0 h-1/2 w-full border-t border-brand bg-brand-solid/10", className), style: Object.assign({ maskImage: "radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)", WebkitMaskImage: "radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)" }, props.style) })));
};
const styles = {
    md: { root: "p-2", qr: { width: 96, height: 96 } },
    lg: { root: "p-3", qr: { width: 128, height: 128 } },
};
export const QRCode = ({ size = "md", value, options, className }) => {
    const ref = useRef(null);
    const [qrCode, setQrCode] = useState(null);
    useEffect(() => {
        if (!ref.current)
            return;
        const qrCode = new QRCodeStyling(Object.assign({ width: styles[size].qr.width, height: styles[size].qr.height, data: value, type: "svg" }, options));
        setQrCode(qrCode);
        qrCode.append(ref.current);
    }, [options, size, value]);
    useEffect(() => {
        if (!qrCode)
            return;
        qrCode.update(options);
    }, [qrCode, value, options]);
    return (_jsxs("div", { className: cx("relative flex items-center justify-center", styles[size].root, className), children: [_jsx("div", { ref: ref }), _jsx(QRCodeFrameHandle, { className: "absolute top-0 left-0" }), _jsx(QRCodeFrameHandle, { className: "absolute top-0 right-0 rotate-90" }), _jsx(QRCodeFrameHandle, { className: "absolute right-0 bottom-0 rotate-180" }), _jsx(QRCodeFrameHandle, { className: "absolute bottom-0 left-0 -rotate-90" })] }));
};
