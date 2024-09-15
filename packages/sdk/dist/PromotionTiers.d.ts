import * as T from './types/PromotionTiers';
import type { RequestController } from './RequestController';
export declare class PromotionTiers {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/list-promotion-tiers
     */
    listAll(params?: T.PromotionTiersListAllParams): Promise<T.PromotionTiersListAllResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-promotions
     */
    list(promotionId: string): Promise<T.PromotionTiersListAllResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-promotion-tier
     */
    get(tierId: string): Promise<T.PromotionTier>;
    /**
     * @see https://docs.voucherify.io/reference/add-promotion-tier-to-campaign
     */
    create(promotionId: string, params: T.PromotionTiersCreateParams): Promise<T.PromotionTier>;
    /**
     * @see https://docs.voucherify.io/reference/redeem-promotion
     */
    redeem(promotionsTierId: string, params: T.PromotionTiersRedeemParams): Promise<T.PromotionTiersRedeemResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-promotion
     */
    update(params: T.PromotionTiersUpdateParams): Promise<T.PromotionTier>;
    /**
     * @see https://docs.voucherify.io/reference/delete-promotion
     */
    delete(promotionsTierId: string): Promise<unknown>;
}
