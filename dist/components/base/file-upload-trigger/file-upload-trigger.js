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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { cloneElement, useRef } from "react";
import { filterDOMProps } from "@react-aria/utils";
/**
 * A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.
 */
export const FileTrigger = (props) => {
    const { children, onSelect, acceptedFileTypes, allowsMultiple, defaultCamera, acceptDirectory } = props, rest = __rest(props, ["children", "onSelect", "acceptedFileTypes", "allowsMultiple", "defaultCamera", "acceptDirectory"]);
    const inputRef = useRef(null);
    const domProps = filterDOMProps(rest);
    // Make sure that only one child is passed to the component.
    const clonableElement = React.Children.only(children);
    // Clone the child element and add an `onClick` handler to open the file dialog.
    const mainElement = cloneElement(clonableElement, {
        onClick: () => {
            var _a, _b;
            if ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value) {
                inputRef.current.value = "";
            }
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.click();
        },
    });
    return (_jsxs(_Fragment, { children: [mainElement, _jsx("input", Object.assign({}, domProps, { type: "file", ref: inputRef, style: { display: "none" }, accept: acceptedFileTypes === null || acceptedFileTypes === void 0 ? void 0 : acceptedFileTypes.toString(), onChange: (e) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(e.target.files), capture: defaultCamera, multiple: allowsMultiple, 
                // @ts-expect-error
                webkitdirectory: acceptDirectory ? "" : undefined }))] }));
};
