import * as T from './types/Exports';
import type { RequestController } from './RequestController';
export declare class Exports {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/create-export
     */
    create(exportResource: T.ExportResource): Promise<T.ExportsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-exports
     */
    list(query?: T.ExportsListRequestQuery): Promise<T.ExportsListResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/get-export
     */
    get(exportResourceId: string): Promise<T.ExportsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-export
     */
    delete(exportResourceId: string): Promise<unknown>;
}
