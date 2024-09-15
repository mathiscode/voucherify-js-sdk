import * as T from './types/Distributions';
import type { Exports } from './Exports';
import type { RequestController } from './RequestController';
declare class DistributionsPublications {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/list-publications
     */
    list(params?: T.DistributionsPublicationsListParams): Promise<T.DistributionsPublicationsListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/create-publication
     */
    create(params: T.DistributionsPublicationsCreateParams): Promise<T.DistributionsPublicationsCreateResponse>;
}
export declare class Distributions {
    private client;
    exports: Exports;
    publications: DistributionsPublications;
    constructor(client: RequestController, exports: Exports);
}
export {};
