import * as T from './types/MetadataSchemas';
import type { RequestController } from './RequestController';
export declare class MetadataSchemas {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/list-metadata-schemas
     */
    list(): Promise<T.MetadataSchemasListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-metadata-schema
     */
    get(schemaName: string): Promise<T.MetadataSchema>;
}
