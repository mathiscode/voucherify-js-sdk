/// <reference types="react" />
import { ClientSidePublishResponse, VoucherifyClientSideOptions } from '@voucherify/sdk';
interface VoucherifyPublishOptions extends VoucherifyClientSideOptions {
    /**
     * CSS class applied to the input when entered code is invalid
     */
    classInvalid?: string;
    /**
     * CSS class describing animation of the input field when entered code is invalid
     */
    classInvalidAnimation?: string;
    /**
     * CSS class applied to the input when entered code is valid
     */
    classValid?: string;
    /**
     * CSS class describing animation of the input field when entered code is valid
     */
    classValidAnimation?: string;
    /**
     * source of the image appearing in the circle at the top
     */
    logoSrc?: string;
    /**
     * alt message of the image appearing in the circle at the top
     */
    logoAlt?: string;
    /**
     * a callback function invoked when the entered code is valid, it takes the validation response as a parameter
     */
    onPublished?: (response: ClientSidePublishResponse) => void;
    /**
     * a callback function invoked when there is an error
     */
    onError?: (error: any) => void;
    /**
     * name of the campaign to which voucher will be published
     */
    campaignName: string;
    /**
     * list of fields to be displayed on the widget
     */
    customerFields?: {
        name: 'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'city' | 'postal_code' | 'state' | 'country';
        required: boolean;
    }[];
    /**
     * a placeholder text to displayed on 'name' field from customerFields
     */
    customerNamePlaceholder?: string;
    /**
     * a placeholder text to displayed on 'email' field from customerFields
     */
    customerEmailPlaceholder?: string;
    /**
     * a placeholder text to displayed on 'phone' field from customerFields
     */
    customerPhonePlaceholder?: string;
    /**
     * a placeholder text to displayed on 'line_1' field from customerFields
     */
    customerLine1Placeholder?: string;
    /**
     * a placeholder text to displayed on 'line_2' field from customerFields
     */
    customerLine2Placeholder?: string;
    /**
     * a placeholder text to displayed on 'postal_code' field from customerFields
     */
    customerPostalCodePlaceholder?: string;
    /**
     * a placeholder text to displayed on 'city' field from customerFields
     */
    customerCityPlaceholder?: string;
    /**
     * a placeholder text to displayed on 'state' field from customerFields
     */
    customerStatePlaceholder?: string;
    /**
     * a placeholder text to displayed on 'country' field from customerFields
     */
    customerCountryPlaceholder?: string;
    /**
     * a text displayed on the button (default: "Get Voucher")
     */
    textPublish?: string;
}
export declare function VoucherifyPublish({ apiUrl, clientApplicationId, clientSecretKey, trackingId, origin, classInvalid, classInvalidAnimation, classValid, classValidAnimation, logoSrc, logoAlt, onPublished, onError, campaignName, customerFields, customerNamePlaceholder, customerEmailPlaceholder, customerPhonePlaceholder, customerLine1Placeholder, customerLine2Placeholder, customerPostalCodePlaceholder, customerCityPlaceholder, customerStatePlaceholder, customerCountryPlaceholder, textPublish, }: VoucherifyPublishOptions): JSX.Element;
export {};
