import { CustomerRequest, CustomersCreateBody, CustomersCreateResponse, CustomersUpdateConsentsBody } from './Customers';
import { VouchersListParams, VouchersResponse } from './Vouchers';
import { DiscountAmount, DiscountPercent, DiscountUnit, DiscountFixed } from './DiscountVoucher';
import { OrdersCreateResponse, OrdersItem } from './Orders';
import { ConsentsListResponse } from './Consents';
import { DistributionsPublicationsCreateResponse } from './Distributions';
import { SimplePromotionTier } from './PromotionTiers';
import { ValidationSessionReleaseParams } from './ValidateSession';
import { ApplicableToResultList } from './ApplicableTo';
import { ValidationsValidateStackableParams, ValidationValidateStackableResponse } from './Validations';
import { RedemptionsRedeemStackableParams, RedemptionsRedeemStackableResponse } from './Redemptions';
declare type ClientSideItem = Pick<OrdersItem, 'source_id' | 'sku_id' | 'product_id' | 'sku' | 'quantity' | 'related_object' | 'amount'>;
export declare type ClientSideCustomersUpdateConsentsBody = CustomersUpdateConsentsBody;
export declare type ClientSideCustomersCreateParams = CustomersCreateBody;
export declare type ClientSideCustomersCreateResponse = CustomersCreateResponse;
export interface ClientSideValidateParams {
    code?: string;
    tracking_id?: string;
    amount?: number;
    items?: ClientSideItem[];
    orderMetadata?: Record<string, any>;
    customer?: Pick<CustomerRequest, 'source_id' | 'metadata'>;
    reward?: {
        id: string;
    };
    metadata?: Record<string, any>;
    session_type?: 'LOCK';
    session_key?: string;
    session_ttl?: number;
    session_ttl_unit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS';
}
export declare type ClientSideListVouchersParams = VouchersListParams;
export declare type ClientSideVoucherListing = Pick<VouchersResponse, 'active' | 'code' | 'metadata' | 'assets' | 'object' | 'expiration_date' | 'start_date' | 'created_at'>;
export interface ClientSideListVouchersResponse {
    object: 'list';
    total: number;
    data_ref: 'vouchers';
    vouchers: ClientSideVoucherListing[];
}
export interface ClientSideValidateResponse {
    code?: string;
    valid: boolean;
    discount?: DiscountUnit | DiscountAmount | DiscountPercent | DiscountFixed;
    applicable_to?: ApplicableToResultList;
    order?: {
        amount: number;
        discount_amount: number;
        total_discount_amount: number;
        total_amount: number;
        items?: ClientSideItem[];
    };
    tracking_id?: string;
    campaign_id?: string;
    loyalty?: {
        points_cost: number;
    };
    gift?: {
        amount: number;
        balance: number;
    };
    promotions?: SimplePromotionTier[];
}
export interface ClientSideRedeemPayload {
    tracking_id?: string;
    customer?: CustomerRequest;
    order?: ClientSideRedeemOrder;
    metadata?: Record<string, any>;
    reward?: {
        id: string;
    };
    session?: ValidationSessionReleaseParams;
}
export interface ClientSideRedeemResponse {
    id: string;
    object: 'redemption';
    date?: string;
    customer_id?: string;
    tracking_id?: string;
    order?: OrdersCreateResponse;
    metadata?: Record<string, any>;
    result: 'SUCCESS' | 'FAILURE';
    voucher?: VouchersResponse;
}
export interface ClientSidePublishPayload {
    source_id?: string;
    channel?: 'Voucherify.js' | string;
    customer?: CustomerRequest;
    voucher?: string;
    metadata?: Record<string, any>;
}
export declare type ClientSidePublishPreparedPayload = ClientSidePublishPayload;
export interface ClientSidePublishQueryParams {
    join_once?: boolean;
    campaign?: string;
}
export interface ClientSidePublishCampaign {
    name: string;
    count?: number;
}
export declare type ClientSidePublishResponse = DistributionsPublicationsCreateResponse & {
    vouchers_id?: string[];
};
export interface ClientSideTrackLoyalty {
    code?: string;
}
export interface ClientSideTrackReferral {
    code?: string;
}
export interface ClientSideTrackPayload {
    event: string;
    metadata?: Record<string, any>;
    customer: CustomerRequest;
    loyalty?: ClientSideTrackLoyalty;
    referral?: ClientSideTrackReferral;
}
export interface ClientSideTrackResponse {
    object: 'event';
    type: string;
}
export declare type ClientSideRedeemOrder = Partial<Pick<OrdersCreateResponse, 'id' | 'source_id' | 'metadata' | 'amount'>> & {
    items?: ClientSideItem[];
};
export interface ClientSideRedeemWidgetPayload {
    order?: {
        amount?: number;
    };
}
export declare type ClientSideTrackCustomer = CustomerRequest;
export declare type ClientSideConsentsListResponse = ConsentsListResponse;
export declare type ClientSideValidationsValidateStackableParams = ValidationsValidateStackableParams;
export declare type ClientSideValidationValidateStackableResponse = ValidationValidateStackableResponse;
export declare type ClientSideRedemptionsRedeemStackableParams = RedemptionsRedeemStackableParams;
export declare type ClientSideRedemptionsRedeemStackableResponse = RedemptionsRedeemStackableResponse;
export {};
