"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { Button } from "../../../components/base/buttons/button";
import { InputBase } from "../../../components/base/input/input";
import { InputGroup } from "../../../components/base/input/input-group";
import { cx } from "../../../utils/cx";
export const InputFile = ({ size = "sm", label, hint, placeholder = "Choose a file", isDisabled, isInvalid, isRequired, hideRequiredIndicator, isLoading, acceptedFileTypes, allowsMultiple, onChange, className, buttonText = "Upload", }) => {
    const inputRef = useRef(null);
    const [fileNames, setFileNames] = useState("");
    const handleClick = () => {
        var _a, _b;
        if ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value) {
            inputRef.current.value = "";
        }
        (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.click();
    };
    const handleChange = () => {
        var _a, _b;
        const files = (_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0 ? _b : null;
        if (files && files.length > 0) {
            setFileNames(Array.from(files)
                .map((f) => f.name)
                .join(", "));
        }
        else {
            setFileNames("");
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(files);
    };
    return (_jsxs(_Fragment, { children: [_jsx(InputGroup, { size: size, label: label, hint: hint, isDisabled: isDisabled, isInvalid: isInvalid, isRequired: isRequired, hideRequiredIndicator: hideRequiredIndicator, className: className, trailingAddon: _jsx(Button, { size: size, color: "secondary", onClick: handleClick, isDisabled: isDisabled, children: buttonText }), children: _jsxs("div", { className: "relative flex min-w-0 flex-1", children: [_jsx(InputBase, { placeholder: placeholder, value: fileNames, readOnly: true, inputClassName: cx("cursor-pointer", isLoading && "pr-9"), wrapperClassName: "cursor-pointer", onClick: handleClick }), isLoading && (_jsxs("svg", { fill: "none", viewBox: "0 0 16 16", className: "pointer-events-none absolute top-1/2 right-3 z-20 size-4 -translate-y-1/2 text-fg-quaternary", children: [_jsx("circle", { className: "stroke-current opacity-30", cx: "8", cy: "8", r: "6.5", strokeWidth: "1.5" }), _jsx("circle", { className: "origin-center animate-spin stroke-current", cx: "8", cy: "8", r: "6.5", strokeWidth: "1.5", strokeDasharray: "10 40", strokeLinecap: "round" })] }))] }) }), _jsx("input", { ref: inputRef, type: "file", className: "hidden", disabled: isDisabled, accept: acceptedFileTypes === null || acceptedFileTypes === void 0 ? void 0 : acceptedFileTypes.toString(), multiple: allowsMultiple, onChange: handleChange })] }));
};
InputFile.displayName = "InputFile";
