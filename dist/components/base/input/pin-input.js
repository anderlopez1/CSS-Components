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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useId } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { HintText } from "../../../components/base/input/hint-text";
import { Label as LabelBase } from "../../../components/base/input/label";
import { cx } from "../../../utils/cx";
const PinInputContext = createContext({
    size: "sm",
    id: "",
    disabled: false,
    invalid: false,
});
export const usePinInputContext = () => {
    const context = useContext(PinInputContext);
    if (!context) {
        throw new Error("The 'usePinInputContext' hook must be used within a '<PinInput />'");
    }
    return context;
};
const Root = (_a) => {
    var { className, size = "md", disabled = false, invalid = false } = _a, props = __rest(_a, ["className", "size", "disabled", "invalid"]);
    const id = useId();
    return (_jsx(PinInputContext.Provider, { value: { size, disabled, id, invalid }, children: _jsx("div", Object.assign({ role: "group", className: cx("flex h-max flex-col gap-1.5", className) }, props)) }));
};
Root.displayName = "Root";
const styles = {
    xxxs: { group: "gap-1.5 h-9", slot: "size-9 px-3 py-2 text-sm rounded-lg font-medium text-placeholder/50", caret: "text-sm font-medium" },
    xxs: { group: "gap-2 h-10", slot: "size-10 px-3 py-2 text-md rounded-lg font-medium text-placeholder/50", caret: "text-md font-medium" },
    xs: { group: "gap-2 h-11", slot: "size-11 px-3.5 py-2.5 text-md rounded-lg font-medium text-placeholder/50", caret: "text-md font-medium" },
    sm: { group: "gap-2 h-16.5", slot: "size-16 px-2 py-0.5 text-display-lg font-medium", caret: "text-display-lg font-medium" },
    md: { group: "gap-3 h-20.5", slot: "size-20 px-2 py-2.5 text-display-lg font-medium", caret: "text-display-lg font-medium" },
    lg: { group: "gap-3 h-24.5", slot: "size-24 px-2 py-3 text-display-xl font-medium", caret: "text-display-xl font-medium" },
};
const Group = (_a) => {
    var { inputClassName, containerClassName, width, maxLength = 4 } = _a, props = __rest(_a, ["inputClassName", "containerClassName", "width", "maxLength"]);
    const { id, size, disabled } = usePinInputContext();
    return (_jsx(OTPInput, Object.assign({}, props, { size: width, maxLength: maxLength, disabled: disabled, id: "pin-input-" + id, "aria-label": "Enter your pin", "aria-labelledby": "pin-input-label-" + id, "aria-describedby": "pin-input-description-" + id, containerClassName: cx("flex flex-row", styles[size].group, containerClassName), className: cx("disabled:cursor-not-allowed", inputClassName) })));
};
Group.displayName = "Group";
const Slot = (_a) => {
    var { index, className } = _a, props = __rest(_a, ["index", "className"]);
    const { size, disabled, invalid } = usePinInputContext();
    const { slots, isFocused } = useContext(OTPInputContext);
    const slot = slots[index];
    return (_jsx("div", Object.assign({}, props, { "aria-invalid": invalid, "aria-label": "Enter digit " + (index + 1) + " of " + slots.length, className: cx("relative flex items-center justify-center rounded-xl bg-primary text-center text-placeholder/40 shadow-xs ring-1 ring-primary transition-[box-shadow,background-color] duration-100 ease-linear ring-inset", styles[size].slot, isFocused && (slot === null || slot === void 0 ? void 0 : slot.isActive) && "ring-2 ring-brand outline-2 outline-offset-2 outline-brand", (slot === null || slot === void 0 ? void 0 : slot.char) && "text-brand-tertiary_alt ring-2 ring-brand", disabled && "opacity-50", invalid && "text-error-primary ring-error_subtle", className), children: (slot === null || slot === void 0 ? void 0 : slot.char) ? slot.char : (slot === null || slot === void 0 ? void 0 : slot.hasFakeCaret) ? _jsx(FakeCaret, { size: size }) : 0 })));
};
Slot.displayName = "Slot";
const FakeCaret = ({ size = "md" }) => {
    return _jsx("div", { className: cx("pointer-events-none h-[1em] w-0.5 animate-caret-blink bg-fg-brand-primary", styles[size].caret) });
};
const Separator = (props) => {
    return (_jsx("div", Object.assign({ role: "separator" }, props, { className: cx("text-center text-display-xl font-medium text-utility-neutral-300", props.className), children: "-" })));
};
Separator.displayName = "Separator";
const Label = (props) => {
    const { id } = usePinInputContext();
    return _jsx(LabelBase, Object.assign({}, props, { htmlFor: "pin-input-" + id, id: "pin-input-label-" + id }));
};
Label.displayName = "Label";
const Description = (props) => {
    const { id, size } = usePinInputContext();
    return _jsx(HintText, Object.assign({}, props, { id: "pin-input-description-" + id, role: "description", className: cx(size === "xxxs" && "text-xs") }));
};
Description.displayName = "Description";
const PinInput = Root;
PinInput.Slot = Slot;
PinInput.Label = Label;
PinInput.Group = Group;
PinInput.Separator = Separator;
PinInput.Description = Description;
export { PinInput };
