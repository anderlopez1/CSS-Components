import { type ReactNode } from "react";
import { type AvatarProps } from "./avatar";
interface AvatarLabelGroupProps extends AvatarProps {
    size: "sm" | "md" | "lg";
    rounded?: boolean;
    title: string | ReactNode;
    subtitle: string | ReactNode;
    avatarClassName?: string;
}
export declare const AvatarLabelGroup: ({ title, subtitle, className, rounded, avatarClassName, ...props }: AvatarLabelGroupProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=avatar-label-group.d.ts.map