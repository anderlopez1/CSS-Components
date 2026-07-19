import type { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import type { ButtonProps as AriaButtonProps, LinkProps as AriaLinkProps } from "react-aria-components";
export declare const styles: {
    common: {
        root: string;
        icon: string;
    };
    sizes: {
        md: {
            root: string;
            icon: string;
        };
        lg: {
            root: string;
            icon: string;
        };
    };
    colors: {
        gray: {
            root: string;
            icon: string;
        };
        black: {
            root: string;
            icon: string;
        };
        facebook: {
            root: string;
            icon: string;
        };
        dribble: {
            root: string;
            icon: string;
        };
    };
};
interface CommonProps {
    social: "google" | "facebook" | "apple" | "twitter" | "figma" | "dribble";
    disabled?: boolean;
    theme?: "brand" | "color" | "gray";
    size?: keyof typeof styles.sizes;
}
interface ButtonProps extends CommonProps, DetailedHTMLProps<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "slot">, HTMLButtonElement> {
    slot?: AriaButtonProps["slot"];
}
interface LinkProps extends CommonProps, DetailedHTMLProps<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">, HTMLAnchorElement> {
    /** Options for the configured client side router. */
    routerOptions?: AriaLinkProps["routerOptions"];
}
export type SocialButtonProps = ButtonProps | LinkProps;
export declare const SocialButton: ({ size, theme, social, className, children, disabled, ...otherProps }: SocialButtonProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=social-button.d.ts.map