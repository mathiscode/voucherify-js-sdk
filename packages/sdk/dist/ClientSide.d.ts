import * as T from './types/ClientSide';
import * as TQ from './types/Qualifications';
import type { RequestController } from './RequestController';
export declare class ClientSide {
    private client;
    private trackingId?;
    constructor(client: RequestController, trackingId?: string | undefined);
    setIdentity(identity?: string): void;
    /**
     * @see https://docs.voucherify.io/reference/vouchers-validate
     */
    validate(params: T.ClientSideValidateParams | string): Promise<T.ClientSideValidateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/redeem-voucher-client-side
     */
    redeem(code: string, payload?: T.ClientSideRedeemPayload): Promise<T.ClientSideRedeemResponse>;
    /**
     * @see https://docs.voucherify.io/reference/create-publication
     */
    publish(campaign: string, payload?: T.ClientSidePublishPayload, queryParams?: T.ClientSidePublishQueryParams): Promise<T.ClientSidePublishResponse>;
    /**
     * @see https://docs.voucherify.io/reference/track-custom-event-client-side
     */
    track(event_name: string, customer: T.ClientSideTrackCustomer, metadata?: Record<string, any>, referral?: T.ClientSideTrackReferral, loyalty?: T.ClientSideTrackLoyalty): Promise<T.ClientSideTrackResponse>;
    /**
     * @see https://docs.voucherify.io/reference/list-vouchers
     */
    listVouchers(params?: T.ClientSideListVouchersParams): Promise<T.ClientSideListVouchersResponse>;
    /**
     * @see https://docs.voucherify.io/reference/create-customer
     */
    createCustomer(customer: T.ClientSideCustomersCreateParams, enableDoubleOptIn?: boolean): Promise<import("./types").CustomersCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-consent-client-side
     */
    listConsents(): Promise<import("./types").ConsentsListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-customers-consents-client
     */
    updateConsents(idOrSourceId: string, consents: T.ClientSideCustomersUpdateConsentsBody): Promise<undefined>;
    /**
     * @see https://docs.voucherify.io/reference/validate-stackable-discounts-client-side
     */
    validateStackable(params: T.ClientSideValidationsValidateStackableParams): Promise<import("./types").ValidationValidateStackableResponse>;
    /**
     * @see https://docs.voucherify.io/reference/redeem-stackable-discounts-client-side
     */
    redeemStackable(params: T.ClientSideRedemptionsRedeemStackableParams): Promise<import("./types").RedemptionsRedeemStackableResponse>;
    /**
     * @see https://docs.voucherify.io/reference/check-eligibility
     */
    qualifications(body: TQ.QualificationsCheckEligibilityRequestBody): Promise<TQ.QualificationsCheckEligibilityResponseBody>;
}
