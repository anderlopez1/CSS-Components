import type { ReactNode, Ref } from "react";
import type { TextProps as AriaTextProps } from "react-aria-components";
interface HintTextProps extends AriaTextProps {
    /** Indicates that the hint text is an error message. */
    isInvalid?: boolean;
    ref?: Ref<HTMLElement>;
    size?: "sm" | "md";
    children: ReactNode;
}
export declare const HintText: {
    ({ isInvalid, className, size, ...props }: HintTextProps): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=hint-text.d.ts.map