import * as T from './types/Redemptions';
import type { RequestController } from './RequestController';
export declare class Redemptions {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/redeem-voucher
     */
    redeem(code: string, body?: T.RedemptionsRedeemBody): Promise<T.RedemptionsRedeemResponse>;
    /**
     * @see https://docs.voucherify.io/reference/redeem-stacked-discounts
     */
    redeemStackable(params: T.RedemptionsRedeemStackableParams): Promise<T.RedemptionsRedeemStackableResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-redemption
     */
    get(redemptionId: string): Promise<T.Redemption>;
    /**
     * @see https://docs.voucherify.io/reference/list-redemptions
     */
    list(params?: T.RedemptionsListParams): Promise<T.RedemptionsListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/vouchers-redemptions
     */
    getForVoucher(code: string): Promise<T.RedemptionsGetForVoucherResponse>;
    /**
     * @see https://docs.voucherify.io/reference/rollback-redemption
     */
    rollback(redemptionId: string, params?: T.RedemptionsRollbackParams): Promise<T.RedemptionsRollbackResponse>;
    /**
     * @see https://docs.voucherify.io/reference/rollback-stackable-redemptions
     * Types of params and queryParams WILL be changed in future - please do not depend on it!
     */
    rollbackStackable(parentRedemptionId: string, params?: any, queryParams?: any): Promise<T.RedemptionsRollbackStackableResponse>;
}
