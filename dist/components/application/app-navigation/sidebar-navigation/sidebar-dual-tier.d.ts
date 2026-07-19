import type { ReactNode } from "react";
import { type NavAccountType } from "../base-components/nav-account-card";
import type { NavItemType } from "../config";
interface SidebarNavigationDualTierProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** Feature card to display. */
    featureCard?: ReactNode;
    /** List of items to display. */
    items: NavItemType[];
    /** List of footer items to display. */
    footerItems?: NavItemType[];
    /** Whether to hide the right side border. */
    hideBorder?: boolean;
    /** The selected account ID of the nav account card. */
    selectedAccountId?: string;
    /** The items of the nav account card. */
    accountItems?: NavAccountType[];
}
export declare const SidebarNavigationDualTier: ({ activeUrl, hideBorder, items, footerItems, featureCard, selectedAccountId, accountItems, }: SidebarNavigationDualTierProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=sidebar-dual-tier.d.ts.map