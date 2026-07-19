import type { FC } from "react";
import type { NavItemType } from "../config";
interface SidebarNavigationSlimProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: (NavItemType & {
        icon: FC<{
            className?: string;
        }>;
    })[];
    /** List of footer items to display. */
    footerItems?: (NavItemType & {
        icon: FC<{
            className?: string;
        }>;
    })[];
    /** Whether to hide the border. */
    hideBorder?: boolean;
    /** Whether to hide the right side border. */
    hideRightBorder?: boolean;
}
export declare const SidebarNavigationSlim: ({ activeUrl, items, footerItems, hideBorder, hideRightBorder }: SidebarNavigationSlimProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=sidebar-slim.d.ts.map