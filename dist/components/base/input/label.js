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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HelpCircle } from "@untitledui/icons";
import { Label as AriaLabel } from "react-aria-components";
import { Tooltip, TooltipTrigger } from "../../../components/base/tooltip/tooltip";
import { cx } from "../../../utils/cx";
export const Label = (_a) => {
    var { isInvalid, isRequired, tooltip, tooltipDescription, className } = _a, props = __rest(_a, ["isInvalid", "isRequired", "tooltip", "tooltipDescription", "className"]);
    return (_jsxs(AriaLabel
    // Used for conditionally hiding/showing the label element via CSS:
    // <Input label="Visible only on mobile" className="lg:**:data-label:hidden" />
    // or
    // <Input label="Visible only on mobile" className="lg:label:hidden" />
    , Object.assign({ "data-label": "true" }, props, { className: cx("flex cursor-default items-center gap-0.5 text-sm font-medium text-secondary", className), children: [props.children, _jsx("span", { className: cx("hidden text-brand-tertiary", isRequired && "block", typeof isRequired === "undefined" && "group-required:block", isInvalid && "text-error-primary", typeof isInvalid === "undefined" && "group-invalid:text-error-primary"), children: "*" }), tooltip && (_jsx(Tooltip, { title: tooltip, description: tooltipDescription, placement: "top", children: _jsx(TooltipTrigger
                // `TooltipTrigger` inherits the disabled state from the parent form field
                // but we don't that. We want the tooltip be enabled even if the parent
                // field is disabled.
                , { 
                    // `TooltipTrigger` inherits the disabled state from the parent form field
                    // but we don't that. We want the tooltip be enabled even if the parent
                    // field is disabled.
                    isDisabled: false, className: "cursor-pointer text-fg-quaternary transition duration-200 hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover", children: _jsx(HelpCircle, { className: "size-4" }) }) }))] })));
};
Label.displayName = "Label";
