import { type ButtonProps as AriaButtonProps } from "react-aria-components";
interface CloseButtonProps extends AriaButtonProps {
    theme?: "light" | "dark";
    size?: "xs" | "sm" | "md" | "lg";
    label?: string;
}
export declare const CloseButton: ({ label, className, size, theme, ...otherProps }: CloseButtonProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=close-button.d.ts.map