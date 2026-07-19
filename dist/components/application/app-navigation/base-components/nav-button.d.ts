import type { FC, MouseEventHandler, ReactNode } from "react";
interface NavButtonProps {
    /** Whether the collapsible nav item is open. */
    open?: boolean;
    /** URL to navigate to when the button is clicked. */
    href?: string;
    /** Label text for the button. */
    label?: string;
    /** Icon component to display. */
    icon?: FC<{
        className?: string;
    }>;
    /** Whether the button is currently active. */
    current?: boolean;
    /** Handler for click events. */
    onClick?: MouseEventHandler;
    /** Additional CSS classes to apply to the button. */
    className?: string;
    /** Placement of the tooltip. */
    tooltipPlacement?: "top" | "right" | "bottom" | "left";
    /** Content to display. */
    children?: ReactNode;
}
export declare const NavButton: ({ current, label, href, icon: Icon, className, tooltipPlacement, onClick, children }: NavButtonProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=nav-button.d.ts.map