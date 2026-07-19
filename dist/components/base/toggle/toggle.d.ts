import type { ReactNode } from "react";
import type { SwitchProps as AriaSwitchProps } from "react-aria-components";
interface ToggleBaseProps {
    size?: "sm" | "md";
    slim?: boolean;
    className?: string;
    isHovered?: boolean;
    isFocusVisible?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
}
export declare const ToggleBase: ({ className, isHovered, isDisabled, isFocusVisible, isSelected, slim, size }: ToggleBaseProps) => import("react").JSX.Element;
interface ToggleProps extends AriaSwitchProps {
    size?: "sm" | "md";
    label?: string;
    hint?: ReactNode;
    slim?: boolean;
}
export declare const Toggle: ({ label, hint, className, size, slim, ...ariaSwitchProps }: ToggleProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=toggle.d.ts.map