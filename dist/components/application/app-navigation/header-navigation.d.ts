import { type FC, type ReactNode } from "react";
type NavItem = {
    /** Label text for the nav item. */
    label: string;
    /** URL to navigate to when the nav item is clicked. */
    href: string;
    /** Override the auto-detected active state. When omitted, derived from `activeUrl`. */
    current?: boolean;
    /** Icon component to display. */
    icon?: FC<{
        className?: string;
    }>;
    /** Badge to display. */
    badge?: ReactNode;
    /** List of sub-items to display. */
    items?: NavItem[];
};
interface HeaderNavigationBaseProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: NavItem[];
    /** List of sub-items to display. */
    subItems?: NavItem[];
    /** Whether to hide the bottom border. */
    hideBorder?: boolean;
    /**
     * Replaces the entire right-side actions (icon buttons + account dropdown).
     * When provided, the default actions are ignored.
     */
    actions?: ReactNode;
    /**
     * Centers the primary nav items between the logo and actions.
     * @default false
     */
    centered?: boolean;
    /**
     * Controls how the secondary header renders sub-items.
     * - "buttons" — NavButton pills (default)
     * - "tabs" — Underline tabs
     * @default "buttons"
     */
    secondaryType?: "buttons" | "tabs";
}
export declare const HeaderNavigationBase: ({ activeUrl, items, subItems, hideBorder, actions, centered, secondaryType, }: HeaderNavigationBaseProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=header-navigation.d.ts.map