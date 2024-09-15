import * as T from './types/Campaigns';
import * as AAT from './types/AsyncActions';
import type { RequestController } from './RequestController';
declare class CampaignsQualifications {
    private client;
    constructor(client: RequestController);
    examine(body?: T.CampaignsQualificationsBody, params?: T.CampaignsQualificationsParams): Promise<T.CampaignsQualificationsResponse>;
}
export declare class Campaigns {
    private client;
    qualifications: CampaignsQualifications;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/create-campaign
     */
    create(campaign: T.CampaignsCreateCampaign): Promise<T.CampaignResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-campaign
     */
    update(nameOrId: string, campaign: T.CampaignsUpdateCampaign): Promise<T.CampaignResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-campaign
     */
    get(name: string): Promise<T.CampaignResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-campaign
     */
    delete(name: string, params?: T.CampaignsDeleteParams): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/add-voucher-to-campaign
     */
    addVoucher(name: string, body?: T.CampaignsAddVoucherBody, params?: T.CampaignsAddVoucherParams): Promise<{} | Pick<import("./types").VouchersResponse, "object" | "created_at" | "active" | "type" | "category" | "start_date" | "expiration_date" | "metadata" | "redemption" | "additional_info" | "code" | "discount" | "campaign" | "gift" | "publish" | "assets">>;
    /**
     * @see https://docs.voucherify.io/reference/add-voucher-with-certain-code-to-campaign
     */
    addCertainVoucher(name: string, code: string, body?: T.CampaignsAddCertainVoucherParams): Promise<Pick<import("./types").VouchersResponse, "object" | "created_at" | "active" | "type" | "category" | "start_date" | "expiration_date" | "metadata" | "redemption" | "additional_info" | "code" | "discount" | "campaign" | "gift" | "publish" | "assets">>;
    /**
     * @see https://docs.voucherify.io/reference/import-vouchers
     */
    importVouchers(campaignName: string, vouchers: T.CampaignsImportVouchers[]): Promise<T.CampaignsVouchersImportResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-campaigns
     */
    list(params?: T.CampaignsListParams): Promise<T.CampaignsListResponse>;
    /**
     * @see https://api.voucherify.io/v1/campaigns/{campaignId}/importCSV
     */
    importVouchersCSV(campaignId: string, filePath: string): Promise<AAT.AsyncActionCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/enable-campaign
     */
    enable(campaignId: string): Promise<{}>;
    /**
     * @see https://docs.voucherify.io/reference/disable-campaign
     */
    disable(campaignId: string): Promise<{}>;
}
export {};
