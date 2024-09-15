import { ClientSide } from './ClientSide';
export type { ClientSide };
export interface VoucherifyClientSideOptions {
    /**
     * Optionally, you can add `apiUrl` to the client options if you want to use Voucherify running in a specific region.
     *
     * ```javascript
     * const client = VoucherifyClientSide({
     *		clientApplicationId: 'YOUR-CLIENT-APPLICATION-ID',
     *		clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
     *		apiUrl: 'https://<region>.api.voucherify.io'
     * })
     * ```
     */
    apiUrl?: string;
    /**
     * [Log-in](https://app.voucherify.io/#/login) to Voucherify web interface and obtain your `Client-side Keys` from [Configuration](https://app.voucherify.io/#/app/core/projects/current/general):
     *
     * ```javascript
     * const client = VoucherifyClientSide({
     *		clientApplicationId: 'YOUR-CLIENT-APPLICATION-ID',
     *		clientSecretKey: 'YOUR-CLIENT-SECRET-KEY'
     * })
     * ```
     */
    clientApplicationId: string;
    /**
     * [Log-in](https://app.voucherify.io/#/login) to Voucherify web interface and obtain your `Client-side Keys` from [Configuration](https://app.voucherify.io/#/app/core/projects/current/general):
     *
     * ```javascript
     * const client = VoucherifyClientSide({
     *		clientApplicationId: 'YOUR-CLIENT-APPLICATION-ID',
     *		clientSecretKey: 'YOUR-CLIENT-SECRET-KEY'
     * })
     * ```
     */
    clientSecretKey: string;
    /**
     * Set customer identity when using React Widget. In other situations, use `setIdentity` method:
     *
     * ```javascript
     * client.setIdentity('gustav@purpleson.com')
     * ```
     */
    trackingId?: string;
    /**
     * **(Required in Node.js)** Set the origin from where the requests are made.
     *
     * ```javascript
     * const client = VoucherifyClientSide({
     *		clientApplicationId: 'YOUR-CLIENT-APPLICATION-ID',
     *		clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
     *		origin: 'your-domain.com'
     * })
     * ```
     *
     * @note in the browser, this option will be ignored. The `origin` header is a [forbidden header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name) and it'll be automatically set by the browser for every request.
     */
    origin?: string;
    /**
     * You can pass additional headers to requests made by the API Client.
     * It can prove to be useful when debugging various scenarios.
     * ```javascript
     * const voucherify = VoucherifyServerSide({
     *		clientApplicationId: 'YOUR-CLIENT-APPLICATION-ID',
     *		clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
     *		customHeaders: {
     *			"DEBUG-HEADER": "my_value",
     *			"TEST-HEADER": "another_value"
     *		}
     * })
     * ```
     */
    customHeaders?: Record<string, string>;
    /**
     * If you wish to include original Axios error in VoucherifyError instance set this to true
     * It can prove to be useful when debugging various scenarios.
     * The original Axios error will be included in cause property of VoucherifyError
     */
    exposeErrorCause?: boolean;
    /**
     * Optionally, you can set timeout in miliseconds. After this time request will be aborted. By default Voucherify's API has timeout value of 3 minutes.
     */
    timeoutMs?: number;
}
export declare function VoucherifyClientSide(options: VoucherifyClientSideOptions): ClientSide;
