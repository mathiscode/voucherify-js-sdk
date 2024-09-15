export interface ListCategories {
    object: 'list';
    data_ref: 'data';
    data: CategoryObject[];
    total: number;
    has_more: boolean;
}
export declare type CategoryObject = ResponseCreateCategory & {
    updated_at?: string;
};
export interface CreateCategory {
    name: string;
    hierarchy: number;
}
export interface ResponseCreateCategory {
    id: string;
    name: string;
    hierarchy: number;
    created_at: string;
    object: 'category';
}
export declare type ResponseUpdateCategory = ResponseCreateCategory & {
    updated_at: string;
};
export declare type UpdateCategoryRequest = CreateCategory;
export declare type Category = {
    id: string;
    name: string;
    hierarchy: number;
    created_at: string;
    updated_at?: string;
    object: 'category';
    stacking_rules_type?: 'JOINT' | 'EXCLUSIVE';
};
export declare type CategoriesListRequestQuery = {
    limit?: number;
    starting_after_id?: number;
};
