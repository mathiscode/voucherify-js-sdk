/// <reference types="react" />
import { ClientSideValidateResponse, VoucherifyClientSideOptions } from '@voucherify/sdk';
interface VoucherifyValidateOptions extends VoucherifyClientSideOptions {
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
    onValidated?: (response: ClientSideValidateResponse) => void;
    /**
     * a callback function invoked when there is an error
     */
    onError?: (error: any) => void;
    /**
     * flag enables the amount input field
     */
    amount?: boolean;
    /**
     * text displayed as a placeholder in the code input field
     */
    textPlaceholder?: string;
    /**
     * text displayed as a placeholder in the amount input field (`amount: true` is required)
     */
    amountPlaceholder?: string;
    /**
     * a text displayed on the button (default: "Validate")
     */
    textValidate?: string;
}
export declare function VoucherifyValidate({ apiUrl, clientApplicationId, clientSecretKey, trackingId, origin, classInvalid, classInvalidAnimation, classValid, classValidAnimation, logoSrc, logoAlt, onValidated, onError, amount, textPlaceholder, amountPlaceholder, textValidate, }: VoucherifyValidateOptions): JSX.Element;
export {};
