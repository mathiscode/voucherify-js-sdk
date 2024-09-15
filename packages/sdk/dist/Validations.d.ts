import * as T from './types/Validations';
import type { RequestController } from './RequestController';
import type { Promotions } from './Promotions';
export declare class Validations {
    private client;
    private promotions;
    constructor(client: RequestController, promotions: Promotions);
    /**
     * @see https://docs.voucherify.io/reference/validate-voucher
     */
    validateVoucher(code: string, params?: T.ValidationsValidateVoucherParams): Promise<T.ValidationsValidateVoucherResponse>;
    validate(code: string | T.ValidationsValidateCode, context?: T.ValidationsValidateContext): Promise<T.ValidationsValidateVoucherResponse> | Promise<import("./types").PromotionsValidateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/validate-stacked-discounts-1
     */
    validateStackable(params: T.ValidationsValidateStackableParams): Promise<T.ValidationValidateStackableResponse>;
}
