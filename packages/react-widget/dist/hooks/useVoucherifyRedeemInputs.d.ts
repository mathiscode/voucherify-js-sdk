/// <reference types="react" />
import { VoucherifyRedeemInputs, VoucherifyRedeemInputsState } from '../types/VoucherifyRedeem';
export declare function useVoucherifyRedeemInputs(): {
    input: VoucherifyRedeemInputs;
    inputStates: VoucherifyRedeemInputsState;
    inputValidStates: VoucherifyRedeemInputsState;
    setValidInputState: import("react").Dispatch<import("react").SetStateAction<VoucherifyRedeemInputsState>>;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    resetInputs: () => void;
    setInput: import("react").Dispatch<import("react").SetStateAction<VoucherifyRedeemInputs>>;
    setInputState: import("react").Dispatch<import("react").SetStateAction<VoucherifyRedeemInputsState>>;
};
