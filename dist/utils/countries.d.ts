import type { SelectItemType } from "../components/base/select/select";
/**
 * List of countries with their respective country code, flag, phone code, and phone mask.
 */
export declare const countries: ({
    name: string;
    code: string;
    flag: string;
    phoneCode: string;
    phoneMask: string;
} | {
    name: string;
    code: string;
    flag: string;
    phoneCode: string;
    phoneMask?: undefined;
})[];
/**
 * Phone code options for the select component.
 */
export declare const phoneCodeOptions: SelectItemType[];
/**
 * Country options for the select component.
 */
export declare const countriesOptions: SelectItemType[];
export default countries;
//# sourceMappingURL=countries.d.ts.map