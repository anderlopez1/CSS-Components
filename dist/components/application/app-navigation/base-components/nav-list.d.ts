import type { NavItemDividerType, NavItemType } from "../config";
interface NavListProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** Additional CSS classes to apply to the list. */
    className?: string;
    /** List of items to display. */
    items: (NavItemType | NavItemDividerType)[];
}
export declare const NavList: ({ activeUrl, items, className }: NavListProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=nav-list.d.ts.map