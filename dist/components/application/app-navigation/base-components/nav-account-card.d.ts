import type { Placement } from "@react-types/overlays";
import type { DialogProps as AriaDialogProps } from "react-aria-components";
export type NavAccountType = {
    /** Unique identifier for the nav item. */
    id: string;
    /** Name of the account holder. */
    name: string;
    /** Email address of the account holder. */
    email: string;
    /** Avatar image URL. */
    avatar: string;
    /** Online status of the account holder. This is used to display the online status indicator. */
    status: "online" | "offline";
};
export declare const NavAccountMenu: ({ className, selectedAccountId, ...dialogProps }: AriaDialogProps & {
    className?: string;
    accounts?: NavAccountType[];
    selectedAccountId?: string;
}) => import("react").JSX.Element;
export declare const NavAccountCard: ({ popoverPlacement, selectedAccountId, items, avatarRounded, }: {
    popoverPlacement?: Placement;
    selectedAccountId?: string;
    items?: NavAccountType[];
    avatarRounded?: boolean;
}) => import("react").JSX.Element | null;
//# sourceMappingURL=nav-account-card.d.ts.map