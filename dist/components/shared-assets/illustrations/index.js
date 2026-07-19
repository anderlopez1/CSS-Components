"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { BoxIllustration } from "./box";
import { CloudIllustration } from "./cloud";
import { CreditCardIllustration } from "./credit-card";
import { DocumentsIllustration } from "./documents";
const types = {
    box: BoxIllustration,
    cloud: CloudIllustration,
    documents: DocumentsIllustration,
    "credit-card": CreditCardIllustration,
};
export const Illustration = (props) => {
    const { type } = props;
    const Component = types[type];
    return _jsx(Component, Object.assign({}, props));
};
