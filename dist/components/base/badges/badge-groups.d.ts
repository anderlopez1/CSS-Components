import type { FC, ReactNode } from "react";
type Size = "md" | "lg";
type Color = "brand" | "warning" | "error" | "gray" | "success";
type Theme = "light" | "modern";
type Align = "leading" | "trailing";
interface BadgeGroupProps {
    children?: string | ReactNode;
    addonText: string;
    size?: Size;
    color: Color;
    theme?: Theme;
    /**
     * Alignment of the badge addon element.
     */
    align?: Align;
    iconTrailing?: FC<{
        className?: string;
    }> | ReactNode;
    className?: string;
}
export declare const BadgeGroup: ({ children, addonText, size, color, theme, align, className, iconTrailing: IconTrailing, }: BadgeGroupProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=badge-groups.d.ts.map