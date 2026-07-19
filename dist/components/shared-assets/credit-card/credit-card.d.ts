declare const _NORMAL_TYPES: readonly ["transparent", "transparent-gradient", "brand-dark", "brand-light", "gray-dark", "gray-light"];
declare const STRIP_TYPES: readonly ["transparent-strip", "gray-strip", "gradient-strip", "salmon-strip"];
declare const VERTICAL_STRIP_TYPES: readonly ["gray-strip-vertical", "gradient-strip-vertical", "salmon-strip-vertical"];
type CreditCardType = (typeof _NORMAL_TYPES)[number] | (typeof STRIP_TYPES)[number] | (typeof VERTICAL_STRIP_TYPES)[number];
interface CreditCardProps {
    company?: string;
    cardNumber?: string;
    cardHolder?: string;
    cardExpiration?: string;
    type?: CreditCardType;
    className?: string;
    width?: number;
}
export declare const CreditCard: ({ company, cardNumber, cardHolder, cardExpiration, type, className, width, }: CreditCardProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=credit-card.d.ts.map