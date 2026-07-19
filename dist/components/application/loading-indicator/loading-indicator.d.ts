interface LoadingIndicatorProps {
    /**
     * The visual style of the loading indicator.
     * @default 'line-simple'
     */
    type?: "line-simple" | "line-spinner" | "dot-circle";
    /**
     * The size of the loading indicator.
     * @default 'sm'
     */
    size?: "sm" | "md" | "lg" | "xl";
    /**
     * Optional text label displayed below the indicator.
     */
    label?: string;
}
export declare const LoadingIndicator: ({ type, size, label }: LoadingIndicatorProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=loading-indicator.d.ts.map