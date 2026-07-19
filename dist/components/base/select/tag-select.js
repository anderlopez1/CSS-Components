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
import { createContext, useCallback, useContext, useRef, useState } from "react";
import { SearchLg } from "@untitledui/icons";
import { FocusScope, useFilter, useFocusManager } from "react-aria";
import { ComboBox as AriaComboBox, Group as AriaGroup, Input as AriaInput, ListBox as AriaListBox, ComboBoxStateContext } from "react-aria-components";
import { useListData } from "react-stately";
import { Avatar } from "../../../components/base/avatar/avatar";
import { HintText } from "../../../components/base/input/hint-text";
import { Label } from "../../../components/base/input/label";
import { Popover } from "../../../components/base/select/popover";
import { sizes } from "../../../components/base/select/select-shared";
import { TagCloseX } from "../../../components/base/tags/base-components/tag-close-x";
import { useResizeObserver } from "../../../hooks/use-resize-observer";
import { cx } from "../../../utils/cx";
import { SelectItem } from "./select-item";
const TagSelectContext = createContext({
    size: "sm",
    selectedKeys: [],
    selectedItems: {},
    onRemove: () => { },
    onInputChange: () => { },
});
export const TagSelectBase = (_a) => {
    var { items, children, size = "sm", selectedItems, onItemCleared, onItemInserted, valueFormatter, shortcut, placeholder = "Search", icon, 
    // Omit name to avoid conflicts with the `Select` component
    name: _name, className } = _a, props = __rest(_a, ["items", "children", "size", "selectedItems", "onItemCleared", "onItemInserted", "valueFormatter", "shortcut", "placeholder", "icon", "name", "className"]);
    const { contains } = useFilter({ sensitivity: "base" });
    const selectedKeys = selectedItems.items.map((item) => item.id);
    const filter = useCallback((item, filterText) => {
        return !selectedKeys.includes(item.id) && contains(item.label || item.supportingText || "", filterText);
    }, [contains, selectedKeys]);
    const accessibleList = useListData({
        initialItems: items,
        filter,
    });
    const onRemove = useCallback((keys) => {
        const key = keys.values().next().value;
        if (!key)
            return;
        selectedItems.remove(key);
        onItemCleared === null || onItemCleared === void 0 ? void 0 : onItemCleared(key);
    }, [selectedItems, onItemCleared]);
    const onSelectionChange = (id) => {
        if (!id) {
            return;
        }
        const item = accessibleList.getItem(id);
        if (!item) {
            return;
        }
        if (!selectedKeys.includes(id)) {
            selectedItems.append(item);
            onItemInserted === null || onItemInserted === void 0 ? void 0 : onItemInserted(id);
        }
        accessibleList.setFilterText("");
    };
    const onInputChange = (value) => {
        accessibleList.setFilterText(value);
    };
    const placeholderRef = useRef(null);
    const [popoverWidth, setPopoverWidth] = useState("");
    // Resize observer for popover width
    const onResize = useCallback(() => {
        var _a;
        if (!placeholderRef.current)
            return;
        let divRect = (_a = placeholderRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        setPopoverWidth(divRect.width + "px");
    }, [placeholderRef, setPopoverWidth]);
    useResizeObserver({
        ref: placeholderRef,
        onResize: onResize,
        box: "border-box",
    });
    return (_jsx(TagSelectContext.Provider, { value: {
            size,
            selectedKeys,
            selectedItems,
            onInputChange,
            onRemove,
            valueFormatter,
        }, children: _jsx(AriaComboBox, Object.assign({ allowsEmptyCollection: true, menuTrigger: "focus", items: accessibleList.items, onInputChange: onInputChange, inputValue: accessibleList.filterText, 
            // This keeps the combobox popover open and the input value unchanged when an item is selected.
            value: null, onChange: onSelectionChange, className: (state) => cx("flex flex-col gap-1.5", typeof className === "function" ? className(state) : className) }, props, { children: (state) => (_jsxs(_Fragment, { children: [props.label && (_jsx(Label, { isRequired: state.isRequired, tooltip: props.tooltip, children: props.label })), _jsx(TagSelectTagsValue, { size: size, shortcut: shortcut, ref: placeholderRef, placeholder: placeholder, icon: icon, 
                        // This is a workaround to correctly calculating the trigger width
                        // while using ResizeObserver wasn't 100% reliable.
                        onFocus: onResize, onPointerEnter: onResize }), _jsx(Popover, { size: size, triggerRef: placeholderRef, style: { width: popoverWidth }, className: props === null || props === void 0 ? void 0 : props.popoverClassName, children: _jsx(AriaListBox, { selectionMode: "multiple", className: "size-full outline-hidden", children: children }) }), props.hint && (_jsx(HintText, { isInvalid: state.isInvalid, className: cx(size === "sm" && "text-xs"), children: props.hint }))] })) })) }));
};
const InnerTagSelect = ({ isDisabled, shortcut, shortcutClassName, placeholder, size = "sm" }) => {
    var _a, _b, _c, _d;
    const focusManager = useFocusManager();
    const tagSelectContext = useContext(TagSelectContext);
    const comboBoxStateContext = useContext(ComboBoxStateContext);
    const handleInputKeyDown = (event) => {
        const isCaretAtStart = event.currentTarget.selectionStart === 0 && event.currentTarget.selectionEnd === 0;
        if (!isCaretAtStart && event.currentTarget.value !== "") {
            return;
        }
        switch (event.key) {
            case "Backspace":
            case "ArrowLeft":
                focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusPrevious({ wrap: false, tabbable: false });
                break;
            case "ArrowRight":
                focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusNext({ wrap: false, tabbable: false });
                break;
        }
    };
    // Ensure dropdown opens on click even if input is already focused
    const handleInputMouseDown = (_event) => {
        if (comboBoxStateContext && !comboBoxStateContext.isOpen) {
            comboBoxStateContext.open();
        }
    };
    const handleTagKeyDown = (event, value) => {
        var _a, _b, _c;
        // Do nothing when tab is clicked to move focus from the tag to the input element.
        if (event.key === "Tab") {
            return;
        }
        event.preventDefault();
        const isFirstTag = ((_c = (_b = (_a = tagSelectContext === null || tagSelectContext === void 0 ? void 0 : tagSelectContext.selectedItems) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.id) === value;
        switch (event.key) {
            case " ":
            case "Enter":
            case "Backspace":
                if (isFirstTag) {
                    focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusNext({ wrap: false, tabbable: false });
                }
                else {
                    focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusPrevious({ wrap: false, tabbable: false });
                }
                tagSelectContext.onRemove(new Set([value]));
                break;
            case "ArrowLeft":
                focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusPrevious({ wrap: false, tabbable: false });
                break;
            case "ArrowRight":
                focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusNext({ wrap: false, tabbable: false });
                break;
            case "Escape":
                comboBoxStateContext === null || comboBoxStateContext === void 0 ? void 0 : comboBoxStateContext.close();
                break;
        }
    };
    const isSelectionEmpty = ((_b = (_a = tagSelectContext === null || tagSelectContext === void 0 ? void 0 : tagSelectContext.selectedItems) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) === 0;
    return (_jsxs("div", { className: "relative flex w-full min-w-0 flex-1 flex-row flex-wrap items-center justify-start gap-1.5", children: [!isSelectionEmpty &&
                ((_d = (_c = tagSelectContext === null || tagSelectContext === void 0 ? void 0 : tagSelectContext.selectedItems) === null || _c === void 0 ? void 0 : _c.items) === null || _d === void 0 ? void 0 : _d.map((value) => (_jsxs("span", { className: cx("flex min-w-0 items-center rounded-md bg-primary ring-1 ring-primary ring-inset", size === "sm" ? "px-1 py-0.75" : "py-0.5 pr-1 pl-1.25"), children: [_jsx(Avatar, { size: "xs", alt: value === null || value === void 0 ? void 0 : value.label, src: value === null || value === void 0 ? void 0 : value.avatarUrl, className: "size-4" }), _jsx("p", { className: cx("truncate font-medium whitespace-nowrap text-secondary select-none", size === "sm" ? "ml-1 text-xs" : "ml-1.25 text-sm"), children: tagSelectContext.valueFormatter ? tagSelectContext.valueFormatter(value) : value === null || value === void 0 ? void 0 : value.label }), _jsx(TagCloseX, { size: size === "sm" ? "sm" : "md", isDisabled: isDisabled, className: "ml-0.75", 
                            // For workaround, onKeyDown is added to the button
                            onKeyDown: (event) => handleTagKeyDown(event, value.id), onPress: () => tagSelectContext.onRemove(new Set([value.id])) })] }, value.id)))), _jsxs("div", { className: cx("relative flex min-w-12 flex-1 flex-row items-center", !isSelectionEmpty && "ml-0.5", shortcut && "min-w-[30%]"), children: [_jsx(AriaInput, { placeholder: placeholder, onKeyDown: handleInputKeyDown, onMouseDown: handleInputMouseDown, className: cx("w-full flex-[1_0_0] appearance-none bg-transparent text-ellipsis text-primary caret-alpha-black/90 outline-hidden placeholder:text-placeholder focus:outline-hidden disabled:cursor-not-allowed", sizes[size].text) }), shortcut && (_jsx("div", { "aria-hidden": "true", className: cx("absolute inset-y-0.5 right-0.5 z-10 hidden items-center rounded-r-[inherit] bg-linear-to-r from-transparent to-bg-primary to-40% pl-8 md:flex", shortcutClassName, sizes[size].shortcut), children: _jsx("span", { className: cx("pointer-events-none rounded px-1 py-px text-xs font-medium text-quaternary ring-1 ring-secondary select-none ring-inset", isDisabled && "bg-transparent"), children: "\u2318K" }) }))] })] }));
};
export const TagSelectTagsValue = (_a) => {
    var { size = "sm", shortcut, placeholder, shortcutClassName, icon: Icon = SearchLg, 
    // Omit this prop to avoid invalid HTML attribute warning
    isDisabled: _isDisabled } = _a, otherProps = __rest(_a, ["size", "shortcut", "placeholder", "shortcutClassName", "icon", "isDisabled"]);
    const tagSelectContext = useContext(TagSelectContext);
    const selectedItemsCount = tagSelectContext.selectedKeys.length;
    return (_jsx(AriaGroup, Object.assign({}, otherProps, { className: ({ isFocusWithin, isDisabled }) => cx("relative flex w-full items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset", isDisabled && "cursor-not-allowed opacity-50", isFocusWithin && "ring-2 ring-brand", 
        // Icon styles
        "*:data-icon:shrink-0 *:data-icon:text-fg-quaternary", sizes[size].root, 
        // Overwrite vertical padding for small size when there are selected items
        // to prevent height jump because the tags are taller than the input text.
        size === "sm" && selectedItemsCount > 0 && "py-1.5"), children: ({ isDisabled }) => (_jsxs(_Fragment, { children: [Icon && _jsx(Icon, { "data-icon": true, className: "pointer-events-none" }), _jsx(FocusScope, { contain: false, autoFocus: false, restoreFocus: false, children: _jsx(InnerTagSelect, { isDisabled: isDisabled, size: size, shortcut: shortcut, shortcutClassName: shortcutClassName, placeholder: placeholder }) })] })) })));
};
const TagSelect = TagSelectBase;
TagSelect.Item = SelectItem;
export { TagSelect };
