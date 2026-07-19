import { type SelectHTMLAttributes } from "react";
interface NativeSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label?: string;
    hint?: string;
    selectClassName?: string;
    size?: "sm" | "md" | "lg";
    options: {
        label: string;
        value: string;
        disabled?: boolean;
    }[];
}
export declare const NativeSelect: ({ label, hint, options, className, selectClassName, size, ...props }: NativeSelectProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=select-native.d.ts.map