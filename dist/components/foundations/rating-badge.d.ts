import { type HTMLAttributes } from "react";
export declare const Wreath: (props: HTMLAttributes<HTMLOrSVGElement>) => import("react").JSX.Element;
interface RatingBadgeProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    rating?: number;
    theme?: "light" | "dark";
}
export declare const RatingBadge: ({ title, subtitle, rating, theme, className, ...props }: RatingBadgeProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=rating-badge.d.ts.map