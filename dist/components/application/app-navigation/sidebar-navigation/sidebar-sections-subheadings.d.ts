import type { NavItemType } from "../config";
interface SidebarNavigationSectionsSubheadingsProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: Array<{
        label: string;
        items: NavItemType[];
    }>;
}
export declare const SidebarNavigationSectionsSubheadings: ({ activeUrl, items }: SidebarNavigationSectionsSubheadingsProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=sidebar-sections-subheadings.d.ts.map