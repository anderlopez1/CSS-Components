import type { ComponentProps, ComponentPropsWithRef } from "react";
import type { FileIcon } from "@untitledui/file-icons";
import { FileIcon as FileTypeIcon } from "@untitledui/file-icons";
/**
 * Returns a human-readable file size.
 * @param bytes - The size of the file in bytes.
 * @returns A string representing the file size in a human-readable format.
 */
export declare const getReadableFileSize: (bytes: number) => string;
interface FileUploadDropZoneProps {
    /** The class name of the drop zone. */
    className?: string;
    /**
     * A hint text explaining what files can be dropped.
     */
    hint?: string;
    /**
     * Disables dropping or uploading files.
     */
    isDisabled?: boolean;
    /**
     * Specifies the types of files that the server accepts.
     * Examples: "image/*", ".pdf,image/*", "image/*,video/mpeg,application/pdf"
     */
    accept?: string;
    /**
     * Allows multiple file uploads.
     */
    allowsMultiple?: boolean;
    /**
     * Maximum file size in bytes.
     */
    maxSize?: number;
    /**
     * Callback function that is called with the list of dropped files
     * when files are dropped on the drop zone.
     */
    onDropFiles?: (files: FileList) => void;
    /**
     * Callback function that is called with the list of unaccepted files
     * when files are dropped on the drop zone.
     */
    onDropUnacceptedFiles?: (files: FileList) => void;
    /**
     * Callback function that is called with the list of files that exceed
     * the size limit when files are dropped on the drop zone.
     */
    onSizeLimitExceed?: (files: FileList) => void;
}
export declare const FileUploadDropZone: ({ className, hint, isDisabled, accept, allowsMultiple, maxSize, onDropFiles, onDropUnacceptedFiles, onSizeLimitExceed, }: FileUploadDropZoneProps) => import("react").JSX.Element;
export interface FileListItemProps {
    /** The name of the file. */
    name: string;
    /** The size of the file. */
    size: number;
    /** The upload progress of the file. */
    progress: number;
    /** Whether the file failed to upload. */
    failed?: boolean;
    /** The type of the file. */
    type?: ComponentProps<typeof FileIcon>["type"];
    /** The class name of the file list item. */
    className?: string;
    /** The variant of the file icon. */
    fileIconVariant?: ComponentProps<typeof FileTypeIcon>["variant"];
    /** The function to call when the file is deleted. */
    onDelete?: () => void;
    /** The function to call when the file upload is retried. */
    onRetry?: () => void;
}
export declare const FileListItemProgressBar: ({ name, size, progress, failed, type, fileIconVariant, onDelete, onRetry, className }: FileListItemProps) => import("react").JSX.Element;
export declare const FileListItemProgressFill: ({ name, size, progress, failed, type, fileIconVariant, onDelete, onRetry, className }: FileListItemProps) => import("react").JSX.Element;
export declare const FileUpload: {
    Root: (props: ComponentPropsWithRef<"div">) => import("react").JSX.Element;
    List: (props: ComponentPropsWithRef<"ul">) => import("react").JSX.Element;
    DropZone: ({ className, hint, isDisabled, accept, allowsMultiple, maxSize, onDropFiles, onDropUnacceptedFiles, onSizeLimitExceed, }: FileUploadDropZoneProps) => import("react").JSX.Element;
    ListItemProgressBar: ({ name, size, progress, failed, type, fileIconVariant, onDelete, onRetry, className }: FileListItemProps) => import("react").JSX.Element;
    ListItemProgressFill: ({ name, size, progress, failed, type, fileIconVariant, onDelete, onRetry, className }: FileListItemProps) => import("react").JSX.Element;
};
export {};
//# sourceMappingURL=file-upload-base.d.ts.map