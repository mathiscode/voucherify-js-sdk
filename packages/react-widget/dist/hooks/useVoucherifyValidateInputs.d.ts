/// <reference types="react" />
import { VoucherifyValidateInputs, VoucherifyValidateInputsState } from '../types/VoucherifyValidate';
export declare function useVoucherifyValidateInputs(): {
    input: VoucherifyValidateInputs;
    inputState: VoucherifyValidateInputsState;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    resetInputs: () => void;
    setInput: import("react").Dispatch<import("react").SetStateAction<VoucherifyValidateInputs>>;
    setInputState: import("react").Dispatch<import("react").SetStateAction<VoucherifyValidateInputsState>>;
};
