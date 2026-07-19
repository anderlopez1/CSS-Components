"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useId, useRef, useState } from "react";
import { FileIcon as FileTypeIcon } from "@untitledui/file-icons";
import { CheckCircle, Trash01, UploadCloud02, XCircle } from "@untitledui/icons";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "../../../components/base/buttons/button";
import { ButtonUtility } from "../../../components/base/buttons/button-utility";
import { ProgressBar } from "../../../components/base/progress-indicators/progress-indicators";
import { FeaturedIcon } from "../../../components/foundations/featured-icon/featured-icon";
import { cx } from "../../../utils/cx";
/**
 * Returns a human-readable file size.
 * @param bytes - The size of the file in bytes.
 * @returns A string representing the file size in a human-readable format.
 */
export const getReadableFileSize = (bytes) => {
    if (bytes === 0)
        return "0 KB";
    const suffixes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.floor(bytes / Math.pow(1024, i)) + " " + suffixes[i];
};
export const FileUploadDropZone = ({ className, hint, isDisabled, accept, allowsMultiple = true, maxSize, onDropFiles, onDropUnacceptedFiles, onSizeLimitExceed, }) => {
    const id = useId();
    const inputRef = useRef(null);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const isFileTypeAccepted = (file) => {
        if (!accept)
            return true;
        // Split the accept string into individual types
        const acceptedTypes = accept.split(",").map((type) => type.trim());
        return acceptedTypes.some((acceptedType) => {
            var _a;
            // Handle file extensions (e.g., .pdf, .doc)
            if (acceptedType.startsWith(".")) {
                const extension = `.${(_a = file.name.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`;
                return extension === acceptedType.toLowerCase();
            }
            // Handle wildcards (e.g., image/*)
            if (acceptedType.endsWith("/*")) {
                const typePrefix = acceptedType.split("/")[0];
                return file.type.startsWith(`${typePrefix}/`);
            }
            // Handle exact MIME types (e.g., application/pdf)
            return file.type === acceptedType;
        });
    };
    const handleDragIn = (event) => {
        if (isDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        setIsDraggingOver(true);
    };
    const handleDragOut = (event) => {
        if (isDisabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        setIsDraggingOver(false);
    };
    const processFiles = (files) => {
        // Reset the invalid state when processing files.
        setIsInvalid(false);
        const acceptedFiles = [];
        const unacceptedFiles = [];
        const oversizedFiles = [];
        // If multiple files are not allowed, only process the first file
        const filesToProcess = allowsMultiple ? files : files.slice(0, 1);
        filesToProcess.forEach((file) => {
            // Check file size first
            if (maxSize && file.size > maxSize) {
                oversizedFiles.push(file);
                return;
            }
            // Then check file type
            if (isFileTypeAccepted(file)) {
                acceptedFiles.push(file);
            }
            else {
                unacceptedFiles.push(file);
            }
        });
        // Handle oversized files
        if (oversizedFiles.length > 0 && typeof onSizeLimitExceed === "function") {
            const dataTransfer = new DataTransfer();
            oversizedFiles.forEach((file) => dataTransfer.items.add(file));
            setIsInvalid(true);
            onSizeLimitExceed(dataTransfer.files);
        }
        // Handle accepted files
        if (acceptedFiles.length > 0 && typeof onDropFiles === "function") {
            const dataTransfer = new DataTransfer();
            acceptedFiles.forEach((file) => dataTransfer.items.add(file));
            onDropFiles(dataTransfer.files);
        }
        // Handle unaccepted files
        if (unacceptedFiles.length > 0 && typeof onDropUnacceptedFiles === "function") {
            const unacceptedDataTransfer = new DataTransfer();
            unacceptedFiles.forEach((file) => unacceptedDataTransfer.items.add(file));
            setIsInvalid(true);
            onDropUnacceptedFiles(unacceptedDataTransfer.files);
        }
        // Clear the input value to ensure the same file can be selected again
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };
    const handleDrop = (event) => {
        if (isDisabled)
            return;
        handleDragOut(event);
        processFiles(Array.from(event.dataTransfer.files));
    };
    const handleInputFileChange = (event) => {
        processFiles(Array.from(event.target.files || []));
    };
    return (_jsxs("div", { "data-dropzone": true, onDragOver: handleDragIn, onDragEnter: handleDragIn, onDragLeave: handleDragOut, onDragEnd: handleDragOut, onDrop: handleDrop, className: cx("relative flex flex-col items-center gap-3 rounded-xl bg-primary px-6 py-4 text-tertiary ring-1 ring-secondary transition duration-100 ease-linear ring-inset", isDraggingOver && "ring-2 ring-brand", isDisabled && "cursor-not-allowed bg-secondary", className), children: [_jsx(FeaturedIcon, { icon: UploadCloud02, color: "gray", theme: "modern", size: "md", className: cx(isDisabled && "opacity-50") }), _jsxs("div", { className: "flex flex-col gap-1 text-center", children: [_jsxs("div", { className: "flex justify-center gap-1 text-center", children: [_jsx("input", { ref: inputRef, id: id, type: "file", className: "peer sr-only", disabled: isDisabled, accept: accept, multiple: allowsMultiple, onChange: handleInputFileChange }), _jsx("label", { htmlFor: id, className: "flex cursor-pointer", children: _jsxs(Button, { color: "link-color", size: "md", isDisabled: isDisabled, onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, children: ["Click to upload ", _jsx("span", { className: "md:hidden", children: "and attach files" })] }) }), _jsx("span", { className: "text-sm max-md:hidden", children: "or drag and drop" })] }), _jsx("p", { className: cx("text-xs transition duration-100 ease-linear", isInvalid && "text-error-primary"), children: hint || "SVG, PNG, JPG or GIF (max. 800x400px)" })] })] }));
};
export const FileListItemProgressBar = ({ name, size, progress, failed, type, fileIconVariant, onDelete, onRetry, className }) => {
    const isComplete = progress === 100;
    return (_jsxs(motion.li, { layout: "position", className: cx("relative flex gap-3 rounded-xl bg-primary p-4 ring-1 ring-secondary transition-shadow duration-100 ease-linear ring-inset", failed && "ring-2 ring-error", className), children: [_jsx(FileTypeIcon, { className: "size-10 shrink-0 dark:hidden", type: type !== null && type !== void 0 ? type : "empty", theme: "light", variant: fileIconVariant !== null && fileIconVariant !== void 0 ? fileIconVariant : "default" }), _jsx(FileTypeIcon, { className: "size-10 shrink-0 not-dark:hidden", type: type !== null && type !== void 0 ? type : "empty", theme: "dark", variant: fileIconVariant !== null && fileIconVariant !== void 0 ? fileIconVariant : "default" }), _jsxs("div", { className: "flex min-w-0 flex-1 flex-col items-start", children: [_jsxs("div", { className: "flex w-full max-w-full min-w-0 flex-1", children: [_jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("p", { className: "truncate text-sm font-medium text-secondary", children: name }), _jsxs("div", { className: "mt-0.5 flex items-center gap-2", children: [_jsx("p", { className: "truncate text-sm whitespace-nowrap text-tertiary", children: getReadableFileSize(size) }), _jsx("hr", { className: "h-3 w-px rounded-t-full rounded-b-full border-none bg-border-primary" }), _jsxs("div", { className: "flex items-center gap-1", children: [isComplete && _jsx(CheckCircle, { className: "size-4 stroke-[2.5px] text-fg-success-primary" }), isComplete && _jsx("p", { className: "text-sm font-medium text-success-primary", children: "Complete" }), !isComplete && !failed && _jsx(UploadCloud02, { className: "size-4 stroke-[2.5px] text-fg-quaternary" }), !isComplete && !failed && _jsx("p", { className: "text-sm font-medium text-quaternary", children: "Uploading..." }), failed && _jsx(XCircle, { className: "size-4 text-fg-error-primary" }), failed && _jsx("p", { className: "text-sm font-medium text-error-primary", children: "Failed" })] })] })] }), _jsx(ButtonUtility, { color: "tertiary", tooltip: "Delete", icon: Trash01, size: "xs", className: "-mt-2 -mr-2 self-start", onClick: onDelete })] }), !failed && (_jsx("div", { className: "mt-1 w-full", children: _jsx(ProgressBar, { labelPosition: "right", max: 100, min: 0, value: progress }) })), failed && (_jsx(Button, { color: "link-destructive", size: "sm", onClick: onRetry, className: "mt-1.5", children: "Try again" }))] })] }));
};
export const FileListItemProgressFill = ({ name, size, progress, failed, type, fileIconVariant, onDelete, onRetry, className }) => {
    const isComplete = progress === 100;
    return (_jsxs(motion.li, { layout: "position", className: cx("relative flex gap-3 overflow-hidden rounded-xl bg-primary p-4", className), children: [_jsx("div", { style: { transform: `translateX(-${100 - progress}%)` }, className: cx("absolute inset-0 size-full bg-secondary transition duration-75 ease-linear", isComplete && "opacity-0"), role: "progressbar", "aria-valuenow": progress, "aria-valuemin": 0, "aria-valuemax": 100 }), _jsx("div", { className: cx("absolute inset-0 size-full rounded-[inherit] ring-1 ring-secondary transition duration-100 ease-linear ring-inset", failed && "ring-2 ring-error") }), _jsx(FileTypeIcon, { className: "relative size-10 shrink-0 dark:hidden", type: type !== null && type !== void 0 ? type : "empty", theme: "light", variant: fileIconVariant !== null && fileIconVariant !== void 0 ? fileIconVariant : "solid" }), _jsx(FileTypeIcon, { className: "relative size-10 shrink-0 not-dark:hidden", type: type !== null && type !== void 0 ? type : "empty", theme: "dark", variant: fileIconVariant !== null && fileIconVariant !== void 0 ? fileIconVariant : "solid" }), _jsxs("div", { className: "relative flex min-w-0 flex-1", children: [_jsxs("div", { className: "relative flex min-w-0 flex-1 flex-col items-start", children: [_jsxs("div", { className: "w-full min-w-0 flex-1", children: [_jsx("p", { className: "truncate text-sm font-medium text-secondary", children: name }), _jsxs("div", { className: "mt-0.5 flex items-center gap-2", children: [_jsx("p", { className: "text-sm text-tertiary", children: failed ? "Upload failed, please try again" : getReadableFileSize(size) }), !failed && (_jsxs(_Fragment, { children: [_jsx("hr", { className: "h-3 w-px rounded-t-full rounded-b-full border-none bg-border-primary" }), _jsxs("div", { className: "flex items-center gap-1", children: [isComplete && _jsx(CheckCircle, { className: "size-4 stroke-[2.5px] text-fg-success-primary" }), !isComplete && _jsx(UploadCloud02, { className: "size-4 stroke-[2.5px] text-fg-quaternary" }), _jsxs("p", { className: "text-sm text-tertiary", children: [progress, "%"] })] })] }))] })] }), failed && (_jsx(Button, { color: "link-destructive", size: "sm", onClick: onRetry, className: "mt-1.5", children: "Try again" }))] }), _jsx(ButtonUtility, { color: "tertiary", tooltip: "Delete", icon: Trash01, size: "xs", className: "-mt-2 -mr-2 self-start", onClick: onDelete })] })] }));
};
const FileUploadRoot = (props) => (_jsx("div", Object.assign({}, props, { className: cx("flex flex-col gap-4", props.className), children: props.children })));
const FileUploadList = (props) => (_jsx("ul", Object.assign({}, props, { className: cx("flex flex-col gap-3", props.className), children: _jsx(AnimatePresence, { initial: false, children: props.children }) })));
export const FileUpload = {
    Root: FileUploadRoot,
    List: FileUploadList,
    DropZone: FileUploadDropZone,
    ListItemProgressBar: FileListItemProgressBar,
    ListItemProgressFill: FileListItemProgressFill,
};
