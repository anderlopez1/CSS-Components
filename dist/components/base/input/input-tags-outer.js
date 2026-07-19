"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from "react";
import { HintText } from "../../../components/base/input/hint-text";
import { InputBase } from "../../../components/base/input/input";
import { Label } from "../../../components/base/input/label";
import { Tag, TagGroup, TagList } from "../../../components/base/tags/tags";
import { cx } from "../../../utils/cx";
export const InputTagsOuter = ({ size = "md", label, hint, tooltip, placeholder, isRequired, isDisabled, isInvalid, allowDuplicates = false, maxTags, value, defaultValue, onChange, onTagAdded, onTagRemoved, validate, className, hideRequiredIndicator, }) => {
    const isControlled = value !== undefined;
    const idCounter = useRef(0);
    const nextId = () => `tag-${idCounter.current++}`;
    const [inputValue, setInputValue] = useState("");
    const [internalEntries, setInternalEntries] = useState(() => (defaultValue !== null && defaultValue !== void 0 ? defaultValue : []).map((label) => ({ id: nextId(), label })));
    const prevControlledValue = useRef([]);
    const controlledEntries = useRef([]);
    const entries = (() => {
        if (!isControlled)
            return internalEntries;
        const prev = prevControlledValue.current;
        if (prev === value)
            return controlledEntries.current;
        const oldEntries = controlledEntries.current;
        const newEntries = [];
        const usedOldIndices = new Set();
        for (const label of value) {
            const oldIndex = oldEntries.findIndex((e, i) => e.label === label && !usedOldIndices.has(i));
            if (oldIndex !== -1) {
                usedOldIndices.add(oldIndex);
                newEntries.push(oldEntries[oldIndex]);
            }
            else {
                newEntries.push({ id: nextId(), label });
            }
        }
        prevControlledValue.current = value;
        controlledEntries.current = newEntries;
        return newEntries;
    })();
    const tags = entries.map((e) => e.label);
    const addTag = useCallback((text) => {
        const trimmed = text.trim();
        if (!trimmed)
            return false;
        if (!allowDuplicates && tags.includes(trimmed))
            return false;
        if (maxTags && tags.length >= maxTags)
            return false;
        if (validate && !validate(trimmed))
            return false;
        const newEntry = { id: nextId(), label: trimmed };
        const newEntries = [...entries, newEntry];
        if (!isControlled) {
            setInternalEntries(newEntries);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newEntries.map((e) => e.label));
        onTagAdded === null || onTagAdded === void 0 ? void 0 : onTagAdded(trimmed);
        return true;
    }, [tags, entries, isControlled, allowDuplicates, maxTags, validate, onChange, onTagAdded]);
    const removeTag = useCallback((id) => {
        const entry = entries.find((e) => e.id === id);
        if (!entry)
            return;
        const newEntries = entries.filter((e) => e.id !== id);
        if (!isControlled) {
            setInternalEntries(newEntries);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newEntries.map((e) => e.label));
        onTagRemoved === null || onTagRemoved === void 0 ? void 0 : onTagRemoved(entry.label);
    }, [entries, isControlled, onChange, onTagRemoved]);
    const handleRemove = useCallback((keys) => {
        for (const key of keys) {
            removeTag(key.toString());
        }
    }, [removeTag]);
    const handleInputKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (addTag(inputValue)) {
                setInputValue("");
            }
        }
    };
    return (_jsxs("div", { className: cx("flex flex-col", size === "sm" ? "gap-1.5" : "gap-2", className), children: [_jsxs("div", { className: "flex flex-col gap-1.5", children: [label && _jsx(Label, { isRequired: hideRequiredIndicator ? false : isRequired, children: label }), _jsx(InputBase, { size: size, tooltip: tooltip, placeholder: placeholder, isInvalid: isInvalid, isDisabled: isDisabled, value: inputValue, onChange: (e) => setInputValue(e.currentTarget.value), onKeyDown: handleInputKeyDown })] }), entries.length > 0 && (_jsx(TagGroup, { label: label || "Tags", size: size === "lg" ? "md" : size, onRemove: handleRemove, children: _jsx(TagList, { className: "flex flex-wrap gap-1.5 focus:outline-hidden", items: entries, children: (item) => (_jsx(Tag, { id: item.id, isDisabled: isDisabled, children: item.label })) }) })), hint && tags.length === 0 && (_jsx(HintText, { isInvalid: isInvalid, className: cx(size === "sm" && "text-xs"), children: hint }))] }));
};
