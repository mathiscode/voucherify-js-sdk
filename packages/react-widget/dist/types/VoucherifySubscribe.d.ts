import { VoucherifyWidgetCustomer, VoucherifyWidgetCustomerState } from './VoucherifyPublish';
import { Consent } from '@voucherify/sdk';
export declare type VoucherifySubscribeLoadedConsents = Consent[];
export declare type VoucherifySubscribeInputs = {
    voucherifySubscribeStatus: string;
    voucherifySubscribe: string;
} & VoucherifyWidgetCustomer & Record<any, any>;
export declare type VoucherifySubscribeInputsState = {
    voucherifySubscribeStatus: boolean;
    voucherifySubscribe: boolean;
} & VoucherifyWidgetCustomerState & Record<string, boolean>;
export declare type NotDefinedPlaceholder = Pick<VoucherifySubscribeInputs, 'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'postal_code' | 'city' | 'state' | 'country'> & {
    [index: string]: string;
};
