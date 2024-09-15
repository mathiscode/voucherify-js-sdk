import * as T from './types/Customers';
import * as AAT from './types/AsyncActions';
import type { RequestController } from './RequestController';
declare class Customers {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/create-customer
     */
    create(customer: T.CustomersCreateBody): Promise<T.CustomersCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/read-customer
     */
    get(customerId: string): Promise<T.CustomersCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-customers
     */
    list(params: T.CustomersListParams): Promise<T.CustomersCommonListResponse>;
    /**
     * Standard list customers API has limitation of available pages to be shown equal to 100. To cover cases when you would like to fetch more, you must use scroll capabilities.
     *
     * ```javascript
     * async function () {
     *		for await (const customer of voucherify.customers.scroll(params)) {
     *			console.log('Customer', customer)
     *		}
     * }
     * ```
     */
    scroll(params: T.CustomersScrollParams): AsyncGenerator<T.CustomersScrollYield, void, T.CustomersScrollYield>;
    /**
     * @see https://docs.voucherify.io/reference/update-customer
     */
    update(customer: T.CustomersUpdateParams): Promise<T.CustomersCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-customers-in-bulk
     */
    updateInBulk(customers: T.CustomersUpdateInBulkRequestBody): Promise<AAT.AsyncActionCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-customers-metadata-in-bulk
     */
    updateMetadataInBulk(sourceIdsAndMetadata: T.CustomersUpdateMetadataInBulkRequestBody): Promise<AAT.AsyncActionCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-customer
     */
    delete(customerId: string): Promise<undefined>;
    /**
     * @see https://docs.voucherify.io/reference/delete-customer-permanently
     */
    deletePermanently(customerId: string): Promise<T.CustomersDeletePermanentlyResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/update-customers-consents
     */
    updateConsents(idOrSourceId: string, consents: T.CustomersUpdateConsentsBody): Promise<undefined>;
    /**
     * @see https://docs.voucherify.io/reference/get-customer-activities
     */
    listActivities(customerId: string, params?: T.CustomerActivitiesListQueryParams): Promise<T.CustomerActivitiesListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/import-customers-using-csv
     */
    importCSV(filePath: string): Promise<AAT.AsyncActionCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-customer-redeemables
     */
    listRedeemables(id: string, params?: T.CustomerRedeemablesListQueryParams): Promise<T.CustomerRedeemablesListResponse>;
}
export { Customers };
