import type { HTMLAttributes } from "react";
interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
    svgClassName?: string;
    childrenClassName?: string;
}
export declare const CloudIllustration: ({ size, ...otherProps }: IllustrationProps) => import("react").JSX.Element;
export declare const sm: ({ className, svgClassName, childrenClassName, children, ...otherProps }: Omit<IllustrationProps, "size">) => import("react").JSX.Element;
export declare const md: ({ className, svgClassName, childrenClassName, children, ...otherProps }: Omit<IllustrationProps, "size">) => import("react").JSX.Element;
export declare const lg: ({ className, svgClassName, childrenClassName, children, ...otherProps }: Omit<IllustrationProps, "size">) => import("react").JSX.Element;
export {};
//# sourceMappingURL=cloud.d.ts.map