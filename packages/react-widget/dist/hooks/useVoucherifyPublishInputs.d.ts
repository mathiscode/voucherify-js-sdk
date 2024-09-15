/// <reference types="react" />
import { VoucherifyPublishInputs, VoucherifyPublishInputsState } from '../types/VoucherifyPublish';
export declare function useVoucherifyPublishInputs(): {
    input: VoucherifyPublishInputs;
    inputStates: VoucherifyPublishInputsState;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    resetInputs: () => void;
    setInput: import("react").Dispatch<import("react").SetStateAction<VoucherifyPublishInputs>>;
    setInputState: import("react").Dispatch<import("react").SetStateAction<VoucherifyPublishInputsState>>;
};
