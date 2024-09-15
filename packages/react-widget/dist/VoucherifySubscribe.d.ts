/// <reference types="react" />
import { VoucherifyClientSideOptions } from '@voucherify/sdk';
interface WidgetFields {
    name?: 'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'city' | 'postal_code' | 'state' | 'country';
    required: boolean;
    placeholder?: string;
    id?: string;
}
interface Consents {
    id: string;
    required: boolean;
}
interface VoucherifySubscribeOptions extends VoucherifyClientSideOptions {
    /**
     * CSS class applied to the input when data is invalid
     */
    classInvalid?: string;
    /**
     * CSS class describing animation of the input field when data is invalid
     */
    classInvalidAnimation?: string;
    /**
     * CSS class applied to the input when data is valid
     */
    classValid?: string;
    /**
     * CSS class describing animation of the input field when data is valid
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
     * a callback function invoked when the data is valid, it takes the updateConsents response as a parameter
     */
    onSubscribed?: (response: any) => void;
    /**
     * a callback function invoked when there is an error
     */
    onError?: (error: any) => void;
    /**
     * require customer to confirm subscription by email
     */
    enableDoubleOptIn?: boolean;
    /**
     * list of fields to be displayed on the widget
     */
    customerFields?: WidgetFields[];
    /**
     * a placeholder text to displayed on required 'email' field
     */
    emailPlaceholder: string;
    /**
     * list of consent objects to be displayed on the widget
     */
    consents: Consents[];
    /**
     * a text displayed on the button (default: "Subscribe")
     */
    textSubscribe?: string;
    /**
     * a text displayed after successful subscription (default: "Thank you for subscribing")
     */
    textSubscribeSuccess?: string;
}
export declare function VoucherifySubscribe({ apiUrl, clientApplicationId, clientSecretKey, trackingId, origin, classInvalid, classInvalidAnimation, classValid, classValidAnimation, logoSrc, logoAlt, consents, onSubscribed, onError, emailPlaceholder, customerFields, enableDoubleOptIn, textSubscribe, textSubscribeSuccess, }: VoucherifySubscribeOptions): JSX.Element;
export {};
