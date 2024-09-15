import { Category } from './Categories';
export interface PromotionsStacksListInCampaignResponseBody {
    object: 'list';
    data_ref: 'data';
    data: PromotionStack[];
    total: number;
}
export interface PromotionsStacksListResponseBody {
    object: 'list';
    data_ref: 'data';
    data: PromotionStack[];
    total: number;
}
export interface PromotionsStacksListRequestQuery {
    limit?: number;
    page?: number;
    order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'name' | '-name';
    created_at?: {
        before?: string;
        after?: string;
    };
    updated_at?: {
        before?: string;
        after?: string;
    };
}
export declare type PromotionsStacksGetResponseBody = PromotionStack;
export declare type PromotionsStacksUpdateRequestBody = {
    name: string;
    tiers?: {
        ids?: string[];
        hierarchy_mode?: 'MANUAL';
    };
    category_id?: string;
};
export declare type PromotionsStacksUpdateResponseBody = PromotionStackBase & {
    id: string;
    created_at: string;
    updated_at: string;
    campaign_id: string;
    object: 'promotion_stack';
    category_id: string | null;
    categories: Category[];
};
export declare type PromotionsStacksCreateInCampaignRequestBody = PromotionStackBase & {
    category_id?: string;
};
export declare type PromotionsStacksCreateInCampaignResponseBody = PromotionStackBase & {
    id: string;
    created_at: string;
    campaign_id: string;
    object: 'promotion_stack';
    category_id: string | null;
    categories: Category[];
};
export interface PromotionStackBase {
    name: string;
    tiers: {
        ids: string[];
        hierarchy_mode?: 'MANUAL';
    };
}
export declare type PromotionStack = PromotionStackBase & {
    id: string;
    created_at: string;
    updated_at?: string;
    campaign_id: string;
    object: 'promotion_stack';
    category_id: string | null;
    categories: Category[];
};
