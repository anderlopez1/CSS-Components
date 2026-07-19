import type { ReactNode } from "react";
import type { NavItemType } from "../config";
interface SidebarNavigationProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: NavItemType[];
    /** List of footer items to display. */
    footerItems?: NavItemType[];
    /** Feature card to display. */
    featureCard?: ReactNode;
    /** Whether to show the account card. */
    showAccountCard?: boolean;
    /** Whether to hide the right side border. */
    hideBorder?: boolean;
    /** Additional CSS classes to apply to the sidebar. */
    className?: string;
    /** Whether to round the account card avatar. */
    avatarRounded?: boolean;
}
export declare const SidebarNavigationSimple: ({ activeUrl, items, footerItems, featureCard, showAccountCard, hideBorder, className, }: SidebarNavigationProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=sidebar-simple.d.ts.map