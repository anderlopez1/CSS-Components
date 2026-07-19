import type { SVGProps } from "react";
interface IPhoneMockupProps extends SVGProps<SVGSVGElement> {
    /**
     * The image to display on the phone.
     */
    image: string;
    /**
     * The dark mode image to display in dark mode.
     * If not provided, the light mode image will be used in dark mode.
     */
    imageDark?: string;
    /**
     * The theme of the phone.
     * @default "light"
     */
    theme?: "light" | "dark";
}
export declare const IPhoneMockup: ({ image, imageDark, theme, className, ...svgProps }: IPhoneMockupProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=iphone-mockup.d.ts.map