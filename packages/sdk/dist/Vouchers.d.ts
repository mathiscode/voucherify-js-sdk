import * as T from './types/Vouchers';
import * as AAT from './types/AsyncActions';
import type { RequestController } from './RequestController';
import type { Balance } from './Balance';
declare class VouchersQualification {
    private client;
    constructor(client: RequestController);
    /**
     * The method can be used for sending a request to display all vouchers qualified to the given customer and context (e.g., order, loyalty reward). A checking logic won't run among coupons from bulk unique codes campaigns. For campaigns with multiple unique codes, you should run a dedicated function for searching for qualified campaigns.
     * As a sample use case, you can imagine a requirement of displaying below cart the coupons eligible to a customer. The customer can take and apply the proposed voucher.
     *
     * @see https://docs.voucherify.io/reference/push-qualification-request
     */
    examine(body: T.VouchersQualificationExamineBody, params?: T.VouchersQualificationExamineParams): Promise<T.VouchersQualificationExamineResponse>;
}
export declare class Vouchers {
    private client;
    balance: Balance;
    qualifications: VouchersQualification;
    constructor(client: RequestController, balance: Balance);
    /**
     * @see https://docs.voucherify.io/reference/create-voucher
     */
    create(voucher: T.VouchersCreate): Promise<Pick<T.VouchersResponse, "object" | "type" | "discount" | "gift" | "category" | "additional_info" | "start_date" | "expiration_date" | "metadata" | "id" | "code" | "campaign" | "loyalty_card" | "validity_timeframe" | "validity_day_of_week" | "publish" | "redemption" | "active" | "assets" | "is_referral_code" | "referrer_id" | "holder_id" | "updated_at" | "created_at">>;
    /**
     * @see https://docs.voucherify.io/reference/vouchers-get
     */
    get(code: string): Promise<T.VouchersResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-voucher
     */
    update(voucher: T.VouchersUpdate): Promise<T.VouchersResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-voucher
     */
    delete(code: string, params?: T.VouchersDeleteParams): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/list-vouchers
     */
    list(params?: T.VouchersListParams): Promise<T.VouchersListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/enable-voucher
     */
    enable(code: string): Promise<T.VouchersResponse>;
    /**
     * @see https://docs.voucherify.io/reference/disable-voucher
     */
    disable(code: string): Promise<T.VouchersResponse>;
    /**
     * @see https://docs.voucherify.io/reference/import-vouchers-1
     */
    import(vouchers: T.VouchersImport[]): Promise<T.VouchersImportResponse>;
    /**
     * @see https://docs.voucherify.io/reference/aaupdate-vouchers-metadata-in-bulk
     */
    bulkUpdateMetadata(params: T.VouchersBulkUpdateMetadata): Promise<T.VouchersBulkUpdateMetadataResponse>;
    /**
     * @see https://docs.voucherify.io/reference/aa-update-vouchers-in-bulk
     */
    bulkUpdate(vouchers: T.VouchersBulkUpdate): Promise<T.VouchersBulkUpdateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/release-validation-session
     */
    releaseValidationSession(code: string, sessionKey: string): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/import-vouchers-using-csv
     */
    importCSV(filePath: string): Promise<AAT.AsyncActionCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-voucher-transactions
     */
    listTransactions(code: string, params?: T.VouchersListTransactionsRequestQuery): Promise<T.VouchersListTransactionsResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/export-voucher-transactions
     */
    exportTransactions(code: string, body: T.VouchersExportTransactionsRequestBody): Promise<T.VouchersExportTransactionsResponseBody>;
}
export {};
