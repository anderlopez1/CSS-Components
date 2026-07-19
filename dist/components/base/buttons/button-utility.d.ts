import type { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import type { Placement } from "react-aria";
import type { ButtonProps as AriaButtonProps, LinkProps as AriaLinkProps } from "react-aria-components";
export declare const styles: {
    secondary: string;
    tertiary: string;
};
/**
 * Common props shared between button and anchor variants
 */
export interface CommonProps {
    /** Disables the button and shows a disabled state */
    isDisabled?: boolean;
    /** The size variant of the button */
    size?: "xs" | "sm";
    /** The color variant of the button */
    color?: "secondary" | "tertiary";
    /** The icon to display in the button */
    icon?: FC<{
        className?: string;
    }> | ReactNode;
    /** The tooltip to display when hovering over the button */
    tooltip?: string;
    /** The placement of the tooltip */
    tooltipPlacement?: Placement;
}
/**
 * Props for the button variant (non-link)
 */
export interface ButtonProps extends CommonProps, DetailedHTMLProps<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "slot">, HTMLButtonElement> {
    /** Slot name for react-aria component */
    slot?: AriaButtonProps["slot"];
}
/**
 * Props for the link variant (anchor tag)
 */
interface LinkProps extends CommonProps, DetailedHTMLProps<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">, HTMLAnchorElement> {
    /** Options for the configured client side router. */
    routerOptions?: AriaLinkProps["routerOptions"];
}
/** Union type of button and link props */
export type Props = ButtonProps | LinkProps;
export declare const ButtonUtility: ({ tooltip, className, isDisabled, icon: Icon, size, color, tooltipPlacement, ...otherProps }: Props) => import("react").JSX.Element;
export {};
//# sourceMappingURL=button-utility.d.ts.map