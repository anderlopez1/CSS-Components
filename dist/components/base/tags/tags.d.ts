import { type ImgHTMLAttributes, type PropsWithChildren, type RefAttributes } from "react";
import { type TagGroupProps as AriaTagGroupProps, type TagProps as AriaTagProps } from "react-aria-components";
export declare const TagAvatar: ({ src, alt, contrastBorder, className }: ImgHTMLAttributes<HTMLImageElement> & {
    contrastBorder?: boolean;
}) => import("react").JSX.Element;
export interface TagItem {
    id: string;
    label: string;
    count?: number;
    avatarSrc?: string;
    avatarContrastBorder?: boolean;
    dot?: boolean;
    dotClassName?: string;
    isDisabled?: boolean;
    onClose?: (id: string) => void;
}
interface TagGroupProps extends AriaTagGroupProps, RefAttributes<HTMLDivElement> {
    label: string;
    size?: "sm" | "md" | "lg";
}
export declare const TagGroup: ({ label, selectionMode, size, children, ...otherProps }: TagGroupProps) => import("react").JSX.Element;
export declare const TagList: <T>(props: import("react-aria-components").TagListProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null;
interface TagProps extends AriaTagProps, RefAttributes<object>, Omit<TagItem, "label" | "id"> {
}
export declare const Tag: ({ id, avatarSrc, avatarContrastBorder, dot, dotClassName, isDisabled, count, className, children, onClose, }: PropsWithChildren<TagProps>) => import("react").JSX.Element;
export {};
//# sourceMappingURL=tags.d.ts.map