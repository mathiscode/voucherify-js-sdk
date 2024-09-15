import * as T from './types/PromotionsStacks';
import type { RequestController } from './RequestController';
export declare class PromotionsStacks {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
     */
    listInCampaign(campaignId: string): Promise<T.PromotionsStacksListInCampaignResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
     */
    createInCampaign(campaignId: string, body: T.PromotionsStacksCreateInCampaignRequestBody): Promise<T.PromotionsStacksCreateInCampaignResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/delete-promotion-stack
     */
    delete(campaignId: string, stackId: string): Promise<{}>;
    /**
     * @see https://docs.voucherify.io/reference/get-promotion-stack
     */
    get(campaignId: string, stackId: string): Promise<T.PromotionStack>;
    /**
     * @see https://docs.voucherify.io/reference/update-promotion-stack
     */
    update(campaignId: string, stackId: string, body: T.PromotionsStacksUpdateRequestBody): Promise<T.PromotionsStacksUpdateResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
     */
    list(params?: T.PromotionsStacksListRequestQuery): Promise<T.PromotionsStacksListResponseBody>;
}
