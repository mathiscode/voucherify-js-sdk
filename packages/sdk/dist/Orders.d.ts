import * as T from './types/Orders';
import * as AAT from './types/AsyncActions';
import type { RequestController } from './RequestController';
export declare class Orders {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/create-order
     */
    create(order: T.OrdersCreate): Promise<T.OrdersCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-order
     */
    get(orderId: string): Promise<T.OrdersCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-order
     */
    update(order: T.OrdersUpdate): Promise<T.OrdersCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-orders
     */
    list(params?: T.OrdersListParams): Promise<T.OrdersListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/import-orders
     */
    import(orders: T.OrdersCreate[]): Promise<AAT.AsyncActionCreateResponse>;
}
