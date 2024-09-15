import * as T from './types/Rewards';
import type { RequestController } from './RequestController';
export declare class Rewards {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/list-rewards
     */
    list(params?: T.RewardsListParams): Promise<T.RewardsListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/create-reward
     */
    create(reward: T.RewardsCreate): Promise<T.RewardsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-reward
     */
    get(rewardId: string): Promise<T.RewardsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-reward
     */
    update(reward: T.RewardsUpdate): Promise<T.RewardsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-reward
     */
    delete(rewardId: string): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/get-reward-assignment
     */
    getAssignment(rewardId: string, assignmentId: string): Promise<T.RewardAssignment>;
    /**
     * @see https://docs.voucherify.io/reference/list-reward-assignments
     */
    listAssignments(rewardId: string, params?: T.RewardsListAssignmentsRequestQuery): Promise<T.RewardsListAssignmentsResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/create-reward-assignment
     */
    createAssignment(rewardId: string, assignment: T.RewardsCreateAssignmentRequestBody): Promise<T.RewardAssignment>;
    /**
     * @see https://docs.voucherify.io/reference/update-reward-assignment
     */
    updateAssignment(rewardId: string, assignment: T.RewardsUpdateAssignmentRequestBody): Promise<T.RewardAssignment>;
    deleteAssignment(rewardId: string, assignmentId: string): Promise<unknown>;
}
