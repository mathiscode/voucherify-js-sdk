import * as T from './types/Loyalties';
import type { RequestController } from './RequestController';
export declare class Loyalties {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/list-loyalty-programs
     */
    list(params?: T.LoyaltiesListParams): Promise<T.LoyaltiesListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/create-loyalty-program
     */
    create(campaign: T.LoyaltiesCreateCampaign): Promise<T.LoyaltiesCreateCampaignResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-loyalty-program
     */
    get(campaignId: string): Promise<T.LoyaltiesCreateCampaignResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-loyalty-program
     */
    update(campaign: T.LoyaltiesUpdateCampaign): Promise<T.LoyaltiesCreateCampaignResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-loyalty-program
     */
    delete(campaignId: string, params?: T.LoyaltiesDeleteCampaignParams): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/list-reward-assignments-1
     */
    listRewardAssignments(campaignId: string, params?: T.LoyaltiesListRewardAssignmentsParams): Promise<T.LoyaltiesListRewardAssignmentsResponse>;
    /**
     * @see https://docs.voucherify.io/reference/create-reward-assignment-1
     */
    createRewardAssignments(campaignId: string, assignment: T.LoyaltiesCreateRewardAssignments[]): Promise<T.LoyaltiesCreateRewardAssignmentResponse[]>;
    /**
     * @see https://docs.voucherify.io/reference/update-reward-assignment-1
     */
    updateRewardAssignment(campaignId: string, assignment: T.LoyaltiesUpdateRewardAssignment): Promise<T.LoyaltiesCreateRewardAssignmentResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-reward-assignment-1
     */
    deleteRewardAssignment(campaignId: string, assignmentId: string): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/get-reward-assignment-2
     */
    getRewardAssignment(campaignId: string, assignmentId: string): Promise<import("./types").RewardAssignment>;
    /**
     * @see https://docs.voucherify.io/reference/list-earning-rules
     */
    listEarningRules(campaignId: string, params?: T.LoyaltiesListEarningRulesParams): Promise<T.LoyaltiesListEarningRulesResponse>;
    /**
     * @see https://docs.voucherify.io/reference/create-earning-rule
     */
    createEarningRule(campaignId: string, earningRules: T.LoyaltiesCreateEarningRule[]): Promise<T.LoyaltiesEarningRulesResponse[]>;
    /**
     * @see https://docs.voucherify.io/reference/update-earning-rule
     */
    updateEarningRule(campaignId: string, earningRule: T.LoyaltiesUpdateEarningRule): Promise<T.LoyaltiesEarningRulesResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-earning-rule
     */
    deleteEarningRule(campaignId: string, earningRuleId: string): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/get-earning-rule
     */
    getEarningRule(campaignId: string, earningRuleId: string): Promise<T.EarningRule>;
    /**
     * @see https://docs.voucherify.io/reference/enable-earning-rule
     */
    enableEarningRule(campaignId: string, earningRuleId: string): Promise<T.LoyaltiesEnableEarningRulesResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/disable-earning-rule
     */
    disableEarningRule(campaignId: string, earningRuleId: string): Promise<T.LoyaltiesDisableEarningRulesResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/list-members
     */
    listMembers(campaignId: string, params?: T.LoyaltiesListMembersParams): Promise<T.LoyaltiesListMembersResponse>;
    /**
     * @see https://docs.voucherify.io/reference/create-member
     */
    createMember(campaignId: string, member: T.LoyaltiesCreateMember): Promise<T.LoyaltiesVoucherResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-member
     * @see https://docs.voucherify.io/reference/get-member-1
     */
    getMember(campaignId: string | null, memberId: string): Promise<T.LoyaltiesVoucherResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-member-activities
     * @see https://docs.voucherify.io/reference/get-member-activities-1
     */
    getMemberActivities(campaignId: string | null, memberId: string): Promise<T.LoyaltiesGetMemberActivitiesResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-member-rewards
     */
    listMemberRewards(memberId: string, params?: T.LoyaltiesListMemberRewardsRequestQuery): Promise<T.LoyaltiesListMemberRewardsResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance
     * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance-1
     */
    addOrRemoveCardBalance(memberId: string, balance: T.LoyaltiesAddOrRemoveCardBalanceRequestBody, campaignId?: string): Promise<T.LoyaltiesAddOrRemoveCardBalanceResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance-1
     */
    addPoints(campaignId: string, memberId: string, balance: T.LoyaltiesAddPoints): Promise<T.LoyaltiesAddPointsResponse>;
    /**
     * @see https://docs.voucherify.io/reference/transfer-points
     */
    transferPoints(campaignId: string, memberId: string, loyaltiesTransferPoints: T.LoyaltiesTransferPointsRequestBody): Promise<T.LoyaltiesTransferPointsResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/get-points-expiration
     */
    getPointsExpiration(campaignId: string, memberId: string, params?: T.LoyaltiesGetPointsExpirationRequestQuery): Promise<T.LoyaltiesGetPointsExpirationResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/redeem-loyalty-card
     */
    redeemReward(campaignId: string, memberId: string, params: T.LoyaltiesRedeemRewardParams): Promise<T.LoyaltiesRedeemRewardResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-loyalty-tier-rewards
     */
    listLoyaltyTierRewards(campaignId: string, tierId: string): Promise<T.LoyaltiesListLoyaltyTierRewardsResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/list-loyalty-card-transactions
     * @see https://docs.voucherify.io/reference/list-loyalty-card-transactions-1
     */
    listCardTransactions(memberId: string, campaignId: string | null, params?: T.LoyaltiesListCardTransactionsRequestQuery): Promise<T.LoyaltiesListCardTransactionsResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/export-loyalty-card-transactions
     * @see https://docs.voucherify.io/reference/export-loyalty-card-transactions-1
     */
    exportCardTransactions(memberId: string, campaignId: string | null, params?: T.LoyaltiesExportCardTransactionsRequestBody): Promise<import("./types").VouchersExportTransactionsResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/get-reward-details
     */
    getRewardDetails(campaignId: string, assignmentId: string): Promise<import("./types").Reward>;
    /**
     * @see https://docs.voucherify.io/reference/list-loyalty-tiers
     */
    listTiers(campaignId: string, params?: T.LoyaltiesListTiersRequestQuery): Promise<T.LoyaltiesListTiersResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/get-loyalty-tier
     */
    getTier(campaignId: string, tierId: string): Promise<T.LoyaltyTier>;
    /**
     * @see https://docs.voucherify.io/reference/create-loyalty-tiers
     */
    createTiers(campaignId: string, tiers: T.LoyaltiesCreateTiersRequestBody): Promise<T.LoyaltiesCreateTiersResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/list-loyalty-tier-earning-rules
     */
    listLoyaltyTierEarningRules(campaignId: string, tierId: string, params?: T.LoyaltiesListLoyaltyTierEarningRulesRequestQuery): Promise<T.LoyaltiesListLoyaltyTierEarningRulesResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/get-member-loyalty-tier
     */
    listMemberLoyaltyTiers(memberId: string): Promise<T.LoyaltiesListMemberLoyaltyTiersResponseBody>;
}
