import type { ComponentPropsWithRef } from "react";
import { OTPInput } from "input-otp";
import { HintText } from "../../../components/base/input/hint-text";
import { Label as LabelBase } from "../../../components/base/input/label";
type PinInputSize = "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg";
type PinInputContextType = {
    size: PinInputSize;
    disabled: boolean;
    id: string;
    invalid: boolean;
};
export declare const usePinInputContext: () => PinInputContextType;
interface RootProps extends ComponentPropsWithRef<"div"> {
    size?: PinInputSize;
    disabled?: boolean;
    invalid?: boolean;
}
declare const Root: {
    ({ className, size, disabled, invalid, ...props }: RootProps): import("react").JSX.Element;
    displayName: string;
};
type GroupProps = ComponentPropsWithRef<typeof OTPInput> & {
    width?: number;
    inputClassName?: string;
};
declare const Group: {
    ({ inputClassName, containerClassName, width, maxLength, ...props }: GroupProps): import("react").JSX.Element;
    displayName: string;
};
declare const Slot: {
    ({ index, className, ...props }: ComponentPropsWithRef<"div"> & {
        index: number;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const Separator: {
    (props: ComponentPropsWithRef<"div">): import("react").JSX.Element;
    displayName: string;
};
declare const Label: {
    (props: ComponentPropsWithRef<typeof LabelBase>): import("react").JSX.Element;
    displayName: string;
};
declare const Description: {
    (props: ComponentPropsWithRef<typeof HintText>): import("react").JSX.Element;
    displayName: string;
};
declare const PinInput: typeof Root & {
    Slot: typeof Slot;
    Label: typeof Label;
    Group: typeof Group;
    Separator: typeof Separator;
    Description: typeof Description;
};
export { PinInput };
//# sourceMappingURL=pin-input.d.ts.map