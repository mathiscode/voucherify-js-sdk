import * as T from './types/Consents';
import type { RequestController } from './RequestController';
export declare class Consents {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/get-consents
     */
    list(): Promise<T.ConsentsListResponse>;
}
