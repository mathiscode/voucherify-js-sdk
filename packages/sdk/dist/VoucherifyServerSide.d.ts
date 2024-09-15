import { AsyncActions } from './AsyncActions';
import { Campaigns } from './Campaigns';
import { Distributions } from './Distributions';
import { Events } from './Events';
import { Vouchers } from './Vouchers';
import { Validations } from './Validations';
import { Redemptions } from './Redemptions';
import { Promotions } from './Promotions';
import { Customers } from './Customers';
import { Consents } from './Consents';
import { Orders } from './Orders';
import { Products } from './Products';
import { Rewards } from './Rewards';
import { Loyalties } from './Loyalties';
import { ValidationRules } from './ValidationRules';
import { Segments } from './Segments';
import { ApiLimitsHandler } from './ApiLimitsHandler';
import { MetadataSchemas } from './MetadataSchemas';
import { Categories } from './Categories';
import { ProductCollections } from './ProductCollections';
import { Qualifications } from './Qualifications';
export interface VoucherifyServerSideOptions {
    /**
     * Optionally, you can add `apiUrl` to the client options if you want to use Voucherify running in a specific region.
     *
     * ```javascript
     * const voucherify = VoucherifyServerSide({
     *		applicationId: 'YOUR-APPLICATION-ID',
     *		secretKey: 'YOUR-SECRET-KEY',
     *		apiUrl: 'https://<region>.api.voucherify.io'
     * })
     * ```
     */
    apiUrl?: string;
    /**
     * [Log-in](https://app.voucherify.io/#/login) to Voucherify web interface and obtain your `Application Keys` from [Configuration](https://app.voucherify.io/#/app/core/projects/current/general):
     *
     * ```javascript
     * const voucherify = VoucherifyServerSide({
     *		applicationId: 'YOUR-APPLICATION-ID',
     *		secretKey: 'YOUR-SECRET-KEY'
     * })
     * ```
     */
    applicationId: string;
    /**
     * [Log-in](https://app.voucherify.io/#/login) to Voucherify web interface and obtain your `Application Keys` from [Configuration](https://app.voucherify.io/#/app/core/projects/current/general):
     *
     * ```javascript
     * const voucherify = VoucherifyServerSide({
     *		applicationId: 'YOUR-APPLICATION-ID',
     *		secretKey: 'YOUR-SECRET-KEY'
     * })
     * ```
     */
    secretKey: string;
    /**
     * Optionally, you can add `apiVersion` to the client options if you want to use a [specific API version](https://docs.voucherify.io/docs/api-version-upgrades).
     *
     * ```javascript
     * const voucherify = VoucherifyServerSide({
     *		applicationId: 'YOUR-APPLICATION-ID',
     *		secretKey: 'YOUR-SECRET-KEY',
     *		apiVersion: 'v2017-04-20'
     * })
     * ```
     */
    apiVersion?: string;
    channel?: string;
    /**
     * Set this option to disable displaying the warning about exposing your `secretKey` if you're using VoucherifyServerSide in a browser environment.
     * By setting this option to `true`, you acknowledge that you understand the risks of exposing your `secretKey` to a browser environment.
     *
     * ```javascript
     * const voucherify = VoucherifyServerSide({
     *		applicationId: 'YOUR-APPLICATION-ID',
     *		secretKey: 'YOUR-SECRET-KEY',
     *		dangerouslySetSecretKeyInBrowser: true
     * })
     * ```
     */
    dangerouslySetSecretKeyInBrowser?: boolean;
    /**
     * You can pass additional headers to requests made by the API Client.
     * It can prove to be useful when debugging various scenarios.
     * ```javascript
     * const voucherify = VoucherifyServerSide({
     *		applicationId: 'YOUR-APPLICATION-ID',
     *		secretKey: 'YOUR-SECRET-KEY',
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
export declare function VoucherifyServerSide(options: VoucherifyServerSideOptions): {
    vouchers: Vouchers;
    campaigns: Campaigns;
    categories: Categories;
    distributions: Distributions;
    validations: Validations;
    redemptions: Redemptions;
    promotions: Promotions;
    customers: Customers;
    consents: Consents;
    orders: Orders;
    products: Products;
    productCollections: ProductCollections;
    qualifications: Qualifications;
    rewards: Rewards;
    loyalties: Loyalties;
    segments: Segments;
    validationRules: ValidationRules;
    events: Events;
    asyncActions: AsyncActions;
    apiLimitsHandler: ApiLimitsHandler;
    metadataSchemas: MetadataSchemas;
};
