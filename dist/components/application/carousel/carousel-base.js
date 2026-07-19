"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { cloneElement, createContext, isValidElement, useCallback, useContext, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cx } from "../../../utils/cx";
export const CarouselContext = createContext(null);
export const useCarousel = () => {
    const context = useContext(CarouselContext);
    if (!context) {
        throw new Error("The `useCarousel` hook must be used within a <Carousel />");
    }
    return context;
};
const CarouselRoot = (_a) => {
    var { orientation = "horizontal", opts, setApi, plugins, className, children } = _a, props = __rest(_a, ["orientation", "opts", "setApi", "plugins", "className", "children"]);
    const [carouselRef, api] = useEmblaCarousel(Object.assign(Object.assign({}, opts), { axis: orientation === "horizontal" ? "x" : "y" }), plugins);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const onInit = useCallback((api) => {
        if (!api)
            return;
        setScrollSnaps(api.scrollSnapList());
    }, []);
    const onSelect = useCallback((api) => {
        if (!api)
            return;
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
        setSelectedIndex(api.selectedScrollSnap());
    }, []);
    const scrollPrev = useCallback(() => {
        api === null || api === void 0 ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = useCallback(() => {
        api === null || api === void 0 ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = useCallback((event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollPrev();
        }
        else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollNext();
        }
    }, [scrollPrev, scrollNext]);
    useEffect(() => {
        if (!api || !setApi)
            return;
        setApi(api);
    }, [api, setApi]);
    useEffect(() => {
        if (!api)
            return;
        onInit(api);
        onSelect(api);
        api.on("reInit", onInit);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return () => {
            api === null || api === void 0 ? void 0 : api.off("select", onSelect);
        };
    }, [api, onInit, onSelect]);
    return (_jsx(CarouselContext.Provider, { value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || ((opts === null || opts === void 0 ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext,
            selectedIndex,
            scrollSnaps,
        }, children: _jsx("div", Object.assign({ onKeyDownCapture: handleKeyDown, className: cx("relative", className), role: "region", "aria-roledescription": "carousel" }, props, { children: children })) }));
};
const CarouselContent = (_a) => {
    var { className, overflowHidden = true } = _a, props = __rest(_a, ["className", "overflowHidden"]);
    const { carouselRef, orientation } = useCarousel();
    return (_jsx("div", { ref: carouselRef, className: cx("h-full w-full", overflowHidden && "overflow-hidden"), children: _jsx("div", Object.assign({ className: cx("flex max-h-full", orientation === "horizontal" ? "" : "flex-col", className) }, props)) }));
};
const CarouselItem = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return _jsx("div", Object.assign({ role: "group", "aria-roledescription": "slide", className: cx("min-w-0 shrink-0 grow-0 basis-full", className) }, props));
};
const Trigger = (_a) => {
    var { className, children, asChild, direction, style } = _a, props = __rest(_a, ["className", "children", "asChild", "direction", "style"]);
    const { scrollPrev, canScrollNext, scrollNext, canScrollPrev } = useCarousel();
    const isDisabled = direction === "prev" ? !canScrollPrev : !canScrollNext;
    const handleClick = () => {
        if (isDisabled)
            return;
        direction === "prev" ? scrollPrev() : scrollNext();
    };
    const computedClassName = typeof className === "function" ? className({ isDisabled }) : className;
    const defaultAriaLabel = direction === "prev" ? "Previous slide" : "Next slide";
    // If the children is a render prop, we need to pass the necessary props to the render prop.
    if (typeof children === "function") {
        return _jsx(_Fragment, { children: children({ isDisabled, onClick: handleClick }) });
    }
    // If the children is a valid element, we need to clone it and pass the necessary props to the cloned element.
    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            onClick: handleClick,
            disabled: isDisabled,
            "aria-label": defaultAriaLabel,
            style: Object.assign(Object.assign({}, children.props.style), style),
            className: [computedClassName, children.props.className].filter(Boolean).join(" ") || undefined,
        });
    }
    return (_jsx("button", Object.assign({ "aria-label": defaultAriaLabel, disabled: isDisabled, className: computedClassName, onClick: handleClick }, props, { children: children })));
};
const CarouselPrevTrigger = (props) => _jsx(Trigger, Object.assign({}, props, { direction: "prev" }));
const CarouselNextTrigger = (props) => _jsx(Trigger, Object.assign({}, props, { direction: "next" }));
const CarouselIndicator = ({ index, isSelected = false, children, asChild, className, style }) => {
    const { api, selectedIndex } = useCarousel();
    isSelected = isSelected || selectedIndex === index;
    const handleClick = () => {
        api === null || api === void 0 ? void 0 : api.scrollTo(index);
    };
    const computedClassName = typeof className === "function" ? className({ isSelected }) : className;
    const defaultAriaLabel = "Go to slide" + (index + 1);
    // If the children is a render prop, we need to pass the necessary props to the render prop.
    if (typeof children === "function") {
        return _jsx(_Fragment, { children: children({ isSelected, onClick: handleClick }) });
    }
    // If the children is a valid element, we need to clone it and pass the necessary props to the cloned element.
    if (asChild && isValidElement(children)) {
        return cloneElement(children, {
            onClick: handleClick,
            "aria-label": defaultAriaLabel,
            "aria-current": isSelected ? "true" : undefined,
            style: Object.assign(Object.assign({}, children.props.style), style),
            className: [computedClassName, children.props.className].filter(Boolean).join(" ") || undefined,
        });
    }
    return (_jsx("button", { "aria-label": defaultAriaLabel, "aria-current": isSelected ? "true" : undefined, className: computedClassName, onClick: handleClick, children: children }));
};
const CarouselIndicatorGroup = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { scrollSnaps } = useCarousel();
    // If the children is a render prop, we need to pass the index to the render prop.
    if (typeof children === "function") {
        return _jsx("nav", Object.assign({}, props, { children: scrollSnaps.map((index) => children({ index })) }));
    }
    return _jsx("nav", Object.assign({}, props, { children: children }));
};
export const Carousel = {
    Root: CarouselRoot,
    Content: CarouselContent,
    Item: CarouselItem,
    PrevTrigger: CarouselPrevTrigger,
    NextTrigger: CarouselNextTrigger,
    IndicatorGroup: CarouselIndicatorGroup,
    Indicator: CarouselIndicator,
};
