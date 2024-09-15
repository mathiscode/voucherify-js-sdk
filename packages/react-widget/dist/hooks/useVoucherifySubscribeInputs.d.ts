/// <reference types="react" />
import { VoucherifySubscribeInputs, VoucherifySubscribeInputsState } from '../types/VoucherifySubscribe';
export declare function useVoucherifySubscribeInputs(): {
    input: VoucherifySubscribeInputs;
    inputStates: VoucherifySubscribeInputsState;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    resetInputs: () => void;
    setInput: import("react").Dispatch<import("react").SetStateAction<VoucherifySubscribeInputs>>;
    setInputState: import("react").Dispatch<import("react").SetStateAction<VoucherifySubscribeInputsState>>;
};
