import { RequestController } from './RequestController';
export declare class ApiLimitsHandler {
    private readonly requestController;
    constructor(requestController: RequestController);
    private getLastResponseHeadersFromController;
    areLimitsAvailable(): boolean;
    getRateLimit(): number;
    getRateLimitRemaining(): number;
    getRetryAfter(): number;
}
