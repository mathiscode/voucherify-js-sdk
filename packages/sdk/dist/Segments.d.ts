import * as T from './types/Segments';
import type { RequestController } from './RequestController';
export declare class Segments {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/create-segment
     */
    create(segment: T.SegmentsCreate): Promise<T.SegmentsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-segment
     */
    get(segmentId: string): Promise<T.SegmentsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-segment
     */
    delete(segmentId: string): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/list-segments
     */
    list(customerId: string): Promise<T.SegmentsListResponse>;
}
