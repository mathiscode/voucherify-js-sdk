export interface RequestControllerOptions {
    baseURL: string;
    basePath: string;
    headers: Record<string, any>;
    exposeErrorCause: boolean;
    timeoutMs: number;
}
/**
 * @internal
 */
export declare class RequestController {
    private baseURL;
    private basePath;
    private headers;
    private request;
    private lastResponseHeaders;
    private isLastResponseHeadersSet;
    private exposeErrorCause;
    private timeoutMs;
    constructor({ basePath, baseURL, headers, exposeErrorCause, timeoutMs }: RequestControllerOptions);
    isLastReponseHeadersSet(): boolean;
    getLastResponseHeaders(): Record<string, string>;
    private setLastResponseHeaders;
    setBaseUrl(baseURL: string): void;
    get<T>(path: string, params?: Record<string, any>): Promise<T>;
    post<T>(path: string, body: Record<string, any>, params?: Record<string, any>, headers?: Record<string, any>): Promise<T>;
    put<T>(path: string, body: Record<string, any>, params?: Record<string, any>): Promise<T>;
    delete<T>(path: string, params?: Record<string, any>): Promise<T>;
}
