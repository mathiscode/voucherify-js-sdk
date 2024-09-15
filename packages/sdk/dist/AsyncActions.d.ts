import * as T from './types/AsyncActions';
import type { RequestController } from './RequestController';
declare class AsyncActions {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/get-async-actions-1
     */
    get(asyncActionId: string): Promise<T.AsyncActionsResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-async-actions
     */
    list(params: T.AsyncActionsListParams): Promise<T.AsyncActionsListResponse>;
}
export { AsyncActions };
