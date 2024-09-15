import * as T from './types/Events';
import type { RequestController } from './RequestController';
export declare class Events {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/track-custom-event-client-side
     */
    create(eventName: string, params: T.EventsParams): Promise<T.EventsResponse>;
}
