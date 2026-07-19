import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { FileIcon } from "@untitledui/file-icons";
import { FeaturedIcon as FeaturedIconbase } from "../../../components/foundations/featured-icon/featured-icon";
import type { BackgroundPatternProps } from "../../../components/shared-assets/background-patterns";
import { Illustration as Illustrations } from "../../../components/shared-assets/illustrations";
interface RootContextProps {
    size?: "sm" | "md" | "lg";
}
interface RootProps extends ComponentPropsWithRef<"div">, RootContextProps {
}
declare const Root: ({ size, ...props }: RootProps) => import("react").JSX.Element;
declare const FeaturedIcon: ({ color, theme, icon, size, ...props }: ComponentPropsWithRef<typeof FeaturedIconbase>) => import("react").JSX.Element;
declare const Illustration: ({ type, color, size, ...props }: ComponentPropsWithRef<typeof Illustrations>) => import("react").JSX.Element;
interface FileTypeIconProps extends ComponentPropsWithRef<"div"> {
    type?: ComponentProps<typeof FileIcon>["type"];
    theme?: ComponentProps<typeof FileIcon>["variant"];
}
declare const FileTypeIcon: ({ type, theme, ...props }: FileTypeIconProps) => import("react").JSX.Element;
interface HeaderProps extends ComponentPropsWithRef<"div"> {
    pattern?: "none" | BackgroundPatternProps["pattern"];
    patternSize?: "sm" | "md" | "lg";
}
declare const Header: ({ pattern, patternSize, ...props }: HeaderProps) => import("react").JSX.Element;
declare const Content: (props: ComponentPropsWithRef<"div">) => import("react").JSX.Element;
declare const Footer: (props: ComponentPropsWithRef<"div">) => import("react").JSX.Element;
declare const Title: (props: ComponentPropsWithRef<"h1">) => import("react").JSX.Element;
declare const Description: (props: ComponentPropsWithRef<"p">) => import("react").JSX.Element;
interface AvatarRadiusProps extends ComponentPropsWithRef<"div"> {
    avatars?: Array<{
        src: string;
        alt?: string;
    }>;
}
declare const AvatarRadius: ({ avatars, ...props }: AvatarRadiusProps) => import("react").JSX.Element;
interface AvatarRowProps extends ComponentPropsWithRef<"div"> {
    avatars?: Array<{
        src: string;
        alt?: string;
    }>;
    children?: ReactNode;
}
declare const AvatarRow: ({ avatars, children, ...props }: AvatarRowProps) => import("react").JSX.Element;
interface AvatarGridProps extends ComponentPropsWithRef<"div"> {
    avatars?: Array<{
        src: string;
        alt?: string;
    }>;
}
declare const AvatarGrid: ({ avatars, ...props }: AvatarGridProps) => import("react").JSX.Element;
declare const EmptyState: typeof Root & {
    Title: typeof Title;
    Header: typeof Header;
    Footer: typeof Footer;
    Content: typeof Content;
    Description: typeof Description;
    Illustration: typeof Illustration;
    FeaturedIcon: typeof FeaturedIcon;
    FileTypeIcon: typeof FileTypeIcon;
    AvatarRadius: typeof AvatarRadius;
    AvatarRow: typeof AvatarRow;
    AvatarGrid: typeof AvatarGrid;
};
export { EmptyState };
//# sourceMappingURL=empty-state.d.ts.map