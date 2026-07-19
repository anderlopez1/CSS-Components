import type { SVGProps } from "react";
declare const patterns: {
    circle: (props: Omit<SVGProps<SVGSVGElement>, "size"> & {
        size?: "sm" | "md" | "lg";
    }) => import("react").JSX.Element;
    square: (props: Omit<SVGProps<SVGSVGElement>, "size"> & {
        size?: "sm" | "md" | "lg";
    }) => import("react").JSX.Element;
    grid: (props: Omit<SVGProps<SVGSVGElement>, "size"> & {
        size?: "sm" | "md" | "lg";
    }) => import("react").JSX.Element;
    "grid-check": (props: Omit<SVGProps<SVGSVGElement>, "size"> & {
        size?: "sm" | "md";
    }) => import("react").JSX.Element;
};
export interface BackgroundPatternProps extends Omit<SVGProps<SVGSVGElement>, "size"> {
    size?: "sm" | "md" | "lg";
    pattern: keyof typeof patterns;
}
export declare const BackgroundPattern: (props: BackgroundPatternProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map