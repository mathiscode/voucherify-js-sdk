import * as T from './types/Balance';
import type { RequestController } from './RequestController';
export declare class Balance {
    private client;
    constructor(client: RequestController);
    /**
     * Add Gift Voucher Balance
     * This method gives a possibility to add balance to an existing gift voucher.
     * @see https://docs.voucherify.io/reference/add-gift-voucher-balance
     */
    create(code: string, params: T.BalanceCreateParams): Promise<T.BalanceCreateResponse>;
}
