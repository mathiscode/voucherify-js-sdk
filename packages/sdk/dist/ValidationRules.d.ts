import * as T from './types/ValidationRules';
import type { RequestController } from './RequestController';
export declare class ValidationRules {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/create-validation-rules
     */
    create(validationRule: T.ValidationRulesCreate): Promise<T.ValidationRulesCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-validation-rules
     */
    get(validationRuleId: string): Promise<T.ValidationRulesGetResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-validation-rules
     */
    update(validationRule: T.ValidationRulesUpdate): Promise<T.ValidationRulesCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-validation-rules
     */
    delete(validationRuleId: string): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/create-validation-rules-assignment
     */
    createAssignment(validationRuleId: string, assignment: T.ValidationRulesCreateAssignment): Promise<T.ValidationRulesCreateAssignmentResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-validation-rules-assignment
     */
    deleteAssignment(validationRuleId: string, assignmentId: string): Promise<unknown>;
    validate(validationRuleId: string, params?: any): Promise<T.ValidationRulesValidateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-validation-rules
     */
    list(params?: T.ValidationRulesListParams): Promise<T.ValidationRulesListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-validation-rules-assignments
     */
    listRulesAssignments(params?: T.ValidationRulesListRulesAssignmentsRequestQuery): Promise<T.ValidationRulesListRulesAssignmentsResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/list-validation-rule-assignments
     */
    listAssignments(validationRuleId: string, params?: T.ValidationRulesListAssignmentsParams): Promise<T.ValidationRulesListAssignmentsResponse>;
}
