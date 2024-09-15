import { AxiosError } from 'axios';
/**
 * @internal
 */
export declare class VoucherifyError extends Error {
    code: number;
    key: string;
    details?: string;
    request_id?: string;
    resource_id?: string;
    resource_type?: string;
    related_object_ids?: string[];
    related_object_type?: string;
    related_object_total?: number;
    error?: {
        message: string;
    };
    cause?: AxiosError;
    constructor(statusCode: number, body?: unknown, axiosError?: AxiosError);
}
