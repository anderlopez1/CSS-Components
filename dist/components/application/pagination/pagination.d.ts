import type { PaginationRootProps } from "./pagination-base";
interface PaginationProps extends Partial<Omit<PaginationRootProps, "children">> {
    /** Whether the pagination buttons are rounded. */
    rounded?: boolean;
}
export declare const PaginationPageDefault: ({ rounded, page, total, className, ...props }: PaginationProps) => import("react").JSX.Element;
export declare const PaginationPageMinimalCenter: ({ rounded, page, total, className, ...props }: PaginationProps) => import("react").JSX.Element;
export declare const PaginationCardDefault: ({ rounded, page, total, ...props }: PaginationProps) => import("react").JSX.Element;
interface PaginationCardMinimalProps {
    /** The current page. */
    page?: number;
    /** The total number of pages. */
    total?: number;
    /** The number of items per page. */
    pageSize?: number;
    /** The alignment of the pagination. */
    align?: "left" | "center" | "right";
    /** The class name of the pagination component. */
    className?: string;
    /** The function to call when the page changes. */
    onPageChange?: (page: number) => void;
    /** The function to call when the page size changes. */
    onPageSizeChange?: (pageSize: number) => void;
}
export declare const PaginationCardMinimal: ({ page, total, pageSize, align, onPageChange, className, onPageSizeChange, }: PaginationCardMinimalProps) => import("react").JSX.Element;
interface PaginationButtonGroupProps extends Partial<Omit<PaginationRootProps, "children">> {
    /** The alignment of the pagination. */
    align?: "left" | "center" | "right";
}
export declare const PaginationButtonGroup: ({ align, page, total, ...props }: PaginationButtonGroupProps) => import("react").JSX.Element;
interface PaginationCardAdvancedProps {
    /** The current page. */
    page?: number;
    /** The total number of pages. */
    total?: number;
    /** The number of items per page. */
    pageSize?: number;
    /** The alignment of the pagination. */
    align?: "space-between" | "center";
    /** The class name of the pagination component. */
    className?: string;
    /** The function to call when the page changes. */
    onPageChange?: (page: number) => void;
    /** The function to call when the page size changes. */
    onPageSizeChange?: (pageSize: number) => void;
}
export declare const PaginationCardAdvanced: ({ page, total, pageSize, align, onPageChange, className, onPageSizeChange, }: PaginationCardAdvancedProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=pagination.d.ts.map