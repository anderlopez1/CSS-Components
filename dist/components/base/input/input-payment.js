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
import { useControlledState } from "@react-stately/utils";
import { HintText } from "../../../components/base/input/hint-text";
import { InputBase, TextField } from "../../../components/base/input/input";
import { Label } from "../../../components/base/input/label";
import { AmexIcon, DiscoverIcon, MastercardIcon, UnionPayIcon, VisaIcon } from "../../../components/foundations/payment-icons";
import { cx } from "../../../utils/cx";
const cardTypes = [
    {
        name: "Visa",
        pattern: /^4[0-9]{3,}$/, // Visa card numbers start with 4 and are 13 or 16 digits long
        card: "visa",
        icon: VisaIcon,
    },
    {
        name: "MasterCard",
        pattern: /^5[1-5][0-9]{2,}$/, // MasterCard numbers start with 51-55 and are 16 digits long
        card: "mastercard",
        icon: MastercardIcon,
    },
    {
        name: "American Express",
        pattern: /^3[47][0-9]{2,}$/, // American Express numbers start with 34 or 37 and are 15 digits long
        card: "amex",
        icon: AmexIcon,
    },
    {
        name: "Discover",
        pattern: /^6(?:011|5[0-9]{2}|4[4-9][0-9])[0-9]{12}$/, // Discover card numbers start with 6011 or 65 and are 16 digits long
        card: "discover",
        icon: DiscoverIcon,
    },
    {
        name: "UnionPay",
        pattern: /^(62|88)[0-9]{14,17}$/, // UnionPay card numbers start with 62 or 88 and are between 15-19 digits long
        card: "unionpay",
        icon: UnionPayIcon,
    },
    {
        name: "Unknown",
        pattern: /.*/, // Fallback pattern for unknown cards
        card: "unknown",
        icon: MastercardIcon,
    },
];
/**
 * Detect the card type based on the card number.
 * @param number The card number to detect the type for.
 * @returns The matching card type object.
 */
const detectCardType = (number) => {
    // Remove all spaces
    const sanitizedNumber = number.replace(/\D/g, "");
    // Find the matching card type
    const card = cardTypes.find((cardType) => cardType.pattern.test(sanitizedNumber));
    return card || cardTypes[cardTypes.length - 1];
};
/**
 * Format the card number in groups of 4 digits (i.e. 1234 5678 9012 3456).
 */
export const formatCardNumber = (number) => {
    // Remove non-numeric characters
    const cleaned = number.replace(/\D/g, "");
    // Format the card number in groups of 4 digits
    const match = cleaned.match(/\d{1,4}/g);
    if (match) {
        return match.join(" ");
    }
    return cleaned;
};
export const PaymentInput = (_a) => {
    var { onChange, value, defaultValue, maxLength = 19, size = "md", placeholder, label, hint, shortcut, hideRequiredIndicator, className, ref, groupRef, tooltip, iconClassName, inputClassName, wrapperClassName, tooltipClassName, type = "text" } = _a, props = __rest(_a, ["onChange", "value", "defaultValue", "maxLength", "size", "placeholder", "label", "hint", "shortcut", "hideRequiredIndicator", "className", "ref", "groupRef", "tooltip", "iconClassName", "inputClassName", "wrapperClassName", "tooltipClassName", "type"]);
    const [cardNumber, setCardNumber] = useControlledState(value, defaultValue || "", (value) => {
        // Remove all non-numeric characters
        value = value.replace(/\D/g, "");
        onChange === null || onChange === void 0 ? void 0 : onChange(value || "");
    });
    const card = detectCardType(cardNumber);
    return (_jsx(TextField, Object.assign({ "aria-label": !label ? placeholder : undefined }, props, { size: size, className: className, inputMode: "numeric", maxLength: maxLength, value: formatCardNumber(cardNumber), onChange: setCardNumber, children: ({ isInvalid, isRequired }) => (_jsxs(_Fragment, { children: [label && (_jsx(Label, { isRequired: hideRequiredIndicator ? !hideRequiredIndicator : isRequired, isInvalid: isInvalid, children: label })), _jsx(InputBase, { ref,
                    groupRef,
                    size,
                    placeholder,
                    shortcut,
                    wrapperClassName,
                    tooltipClassName,
                    tooltip,
                    type, icon: card.icon, inputClassName: cx(size === "sm" && "pl-12", size === "md" && "pl-12.5", size === "lg" && "pl-13", inputClassName), iconClassName: cx("h-6 w-8.5", size === "sm" && "left-1.5", size === "md" && "left-2", size === "lg" && "left-2.5", iconClassName) }), hint && (_jsx(HintText, { isInvalid: isInvalid, className: cx(size === "sm" && "text-xs"), children: hint }))] })) })));
};
PaymentInput.displayName = "PaymentInput";
