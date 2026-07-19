import type { NavItemDividerType, NavItemType } from "../config";
interface SidebarNavigationSectionDividersProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: (NavItemType | NavItemDividerType)[];
}
export declare const SidebarNavigationSectionDividers: ({ activeUrl, items }: SidebarNavigationSectionDividersProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=sidebar-section-dividers.d.ts.map