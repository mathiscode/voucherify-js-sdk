import * as T from './types/Qualifications';
import type { RequestController } from './RequestController';
export declare class Qualifications {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/check-eligibility
     */
    checkEligibility(body: T.QualificationsCheckEligibilityRequestBody): Promise<T.QualificationsCheckEligibilityResponseBody>;
}
