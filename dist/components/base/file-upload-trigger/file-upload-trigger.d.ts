import type { ReactNode } from "react";
import React from "react";
interface FileTriggerProps {
    /**
     * Specifies what mime type of files are allowed.
     */
    acceptedFileTypes?: Array<string>;
    /**
     * Whether multiple files can be selected.
     */
    allowsMultiple?: boolean;
    /**
     * Specifies the use of a media capture mechanism to capture the media on the spot.
     */
    defaultCamera?: "user" | "environment";
    /**
     * Handler when a user selects a file.
     */
    onSelect?: (files: FileList | null) => void;
    /**
     * The children of the component.
     */
    children: ReactNode;
    /**
     * Enables the selection of directories instead of individual files.
     */
    acceptDirectory?: boolean;
}
/**
 * A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.
 */
export declare const FileTrigger: (props: FileTriggerProps) => React.JSX.Element;
export {};
//# sourceMappingURL=file-upload-trigger.d.ts.map