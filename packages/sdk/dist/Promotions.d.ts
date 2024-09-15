import * as T from './types/Promotions';
import type { RequestController } from './RequestController';
import type { PromotionTiers } from './PromotionTiers';
import { PromotionsStacks } from './PromotionsStacks';
export declare class Promotions {
    private client;
    tiers: PromotionTiers;
    stack: PromotionsStacks;
    constructor(client: RequestController, tiers: PromotionTiers, stack: PromotionsStacks);
    /**
     * @see https://docs.voucherify.io/reference/create-promotion-campaign
     */
    create(promotionCampaign: T.PromotionsCreate): Promise<T.PromotionsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/validate-promotions-1
     */
    validate(body: T.PromotionsValidateParams, params?: T.PromotionsValidateQueryParams): Promise<T.PromotionsValidateResponse>;
}
