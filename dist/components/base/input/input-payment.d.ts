import type { InputProps } from "../../../components/base/input/input";
/**
 * Format the card number in groups of 4 digits (i.e. 1234 5678 9012 3456).
 */
export declare const formatCardNumber: (number: string) => string;
interface PaymentInputProps extends InputProps {
}
export declare const PaymentInput: {
    ({ onChange, value, defaultValue, maxLength, size, placeholder, label, hint, shortcut, hideRequiredIndicator, className, ref, groupRef, tooltip, iconClassName, inputClassName, wrapperClassName, tooltipClassName, type, ...props }: PaymentInputProps): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=input-payment.d.ts.map