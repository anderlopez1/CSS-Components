import type { CSSProperties, ComponentPropsWithRef, HTMLAttributes, ReactNode, Ref } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    /** The options for the Embla carousel. */
    opts?: CarouselOptions;
    /** The plugins for the Embla carousel. */
    plugins?: CarouselPlugin;
    /** The orientation of the carousel. */
    orientation?: "horizontal" | "vertical";
    /** The function to set the API for the carousel. */
    setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = CarouselProps & {
    /** The ref of the carousel. */
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    /** The API of the carousel. */
    api: ReturnType<typeof useEmblaCarousel>[1];
    /** The function to scroll the carousel to the previous slide. */
    scrollPrev: () => void;
    /** The function to scroll the carousel to the next slide. */
    scrollNext: () => void;
    /** Whether the carousel can scroll to the previous slide. */
    canScrollPrev: boolean;
    /** Whether the carousel can scroll to the next slide. */
    canScrollNext: boolean;
    /** The index of the selected slide. */
    selectedIndex: number;
    /** The scroll snaps of the carousel. */
    scrollSnaps: number[];
};
export declare const CarouselContext: import("react").Context<CarouselContextProps | null>;
export declare const useCarousel: () => CarouselContextProps;
interface CarouselContentProps extends ComponentPropsWithRef<"div"> {
    /** The class name of the content. */
    className?: string;
    /** Whether to hide the overflow. */
    overflowHidden?: boolean;
}
interface TriggerRenderProps {
    isDisabled: boolean;
    onClick: () => void;
}
interface TriggerProps {
    /** The ref of the trigger. */
    ref?: Ref<HTMLButtonElement>;
    /** If true, the child element will be cloned and passed down the prop of the trigger. */
    asChild?: boolean;
    /** The direction of the trigger. */
    direction: "prev" | "next";
    /** The children of the trigger. Can be a render prop or a valid element. */
    children: ReactNode | ((props: TriggerRenderProps) => ReactNode);
    /** The style of the trigger. */
    style?: CSSProperties;
    /** The class name of the trigger. */
    className?: string | ((args: {
        isDisabled: boolean;
    }) => string);
}
interface CarouselIndicatorRenderProps {
    isSelected: boolean;
    onClick: () => void;
}
interface CarouselIndicatorProps {
    /** The index of the indicator. */
    index: number;
    /** If true, the child element will be cloned and passed down the prop of the indicator. */
    asChild?: boolean;
    /** If true, the indicator will be selected. */
    isSelected?: boolean;
    /** The children of the indicator. Can be a render prop or a valid element. */
    children?: ReactNode | ((props: CarouselIndicatorRenderProps) => ReactNode);
    /** The style of the indicator. */
    style?: CSSProperties;
    /** The class name of the indicator. */
    className?: string | ((args: {
        isSelected: boolean;
    }) => string);
}
interface CarouselIndicatorGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    children: ReactNode | ((props: {
        index: number;
    }) => ReactNode);
    className?: string;
}
export declare const Carousel: {
    Root: ({ orientation, opts, setApi, plugins, className, children, ...props }: ComponentPropsWithRef<"div"> & CarouselProps) => import("react").JSX.Element;
    Content: ({ className, overflowHidden, ...props }: CarouselContentProps) => import("react").JSX.Element;
    Item: ({ className, ...props }: ComponentPropsWithRef<"div">) => import("react").JSX.Element;
    PrevTrigger: (props: Omit<TriggerProps, "direction">) => import("react").JSX.Element;
    NextTrigger: (props: Omit<TriggerProps, "direction">) => import("react").JSX.Element;
    IndicatorGroup: ({ children, ...props }: CarouselIndicatorGroupProps) => import("react").JSX.Element;
    Indicator: ({ index, isSelected, children, asChild, className, style }: CarouselIndicatorProps) => import("react").JSX.Element;
};
export {};
//# sourceMappingURL=carousel-base.d.ts.map