import { WithRequiredProperty } from './UtilityTypes';
export interface ProductIdentity {
    id?: string;
    object?: 'product';
}
export interface SkuIdentity {
    id?: string;
    product_id?: string;
    object?: 'sku';
}
export interface ProductBase {
    name?: string | null;
    price?: number | null;
    attributes?: string[];
    metadata?: Record<string, unknown>;
}
export interface SkuBase {
    sku?: string | null;
    price?: number | null;
    attributes?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
    product?: Required<ProductIdentity> & Required<ProductBase> & {
        source_id: string | null;
        object: 'product';
    };
    image_url?: string | null;
}
export interface ProductSaved {
    created_at?: string;
    updated_at?: string | null;
    image_url?: string | null;
    object?: 'product';
}
export interface SkuSaved {
    created_at?: string;
    updated_at?: string | null;
    image_url?: string | null;
    object?: 'sku';
}
export declare type ProductOrSkuIdentity = Required<SkuIdentity> | Required<ProductIdentity>;
export interface ProductCollectionIdentity {
    id?: string;
}
export interface ProductCollectionSaved {
    created_at?: string;
    object?: 'products_collection';
}
export declare type ProductCollectionBase = StaticProductCollectionBase | DynamicProductCollectionBase;
export interface StaticProductCollectionBase {
    name?: string;
    type?: 'STATIC';
    products?: ProductOrSkuIdentity[];
}
export interface DynamicProductCollectionBase {
    name?: string;
    type?: 'AUTO_UPDATE';
    filter?: Filter;
}
export declare type ProductCollection = ProductCollectionBase & ProductCollectionIdentity & ProductCollectionSaved;
export declare type Filter = {
    junction: Junction;
} & Partial<Record<AllowedFiltersKeys, {
    conditions: Partial<Record<FiltersCondition, unknown>>;
}>>;
export declare type Junction = 'and' | 'AND' | 'or' | 'OR';
export declare type AllowedFiltersKeys = 'id' | 'name' | 'attributes' | 'source_id' | 'price' | 'image_url' | 'product_id' | 'skus' | 'created_at' | 'updated_at' | 'object' | `metadata.${string}`;
export declare type FiltersCondition = '$in' | '$not_in' | '$is' | '$is_days_ago' | '$is_days_in_future' | '$is_not' | '$has_value' | '$is_unknown' | '$contains' | '$not_contain' | '$starts_with' | '$ends_with' | '$more_than' | '$less_than' | '$more_than_ago' | '$less_than_ago' | '$more_than_future' | '$less_than_future' | '$more_than_equal' | '$less_than_equal' | '$after' | '$before' | '$count' | '$count_less' | '$count_more';
export declare type ProductCollectionsCreateRequestBody = WithRequiredProperty<StaticProductCollectionBase, 'name' | 'type'> | Required<DynamicProductCollectionBase>;
export declare type ProductCollectionsCreateResponseBody = Required<ProductCollectionBase> & Required<ProductCollectionIdentity> & Required<ProductCollectionSaved>;
export interface ProductCollectionsListRequestQuery {
    limit?: number;
    page?: number;
    order?: 'created_at' | '-created_at';
}
export interface ProductCollectionsListResponseBody {
    object: 'list';
    data_ref: 'data';
    data: Required<ProductCollection>[];
    total: number;
}
export declare type ProductCollectionsGetResponseBody = Required<ProductCollection>;
export interface ProductCollectionsListProductsRequestQuery {
    limit?: number;
    page?: number;
}
export interface ProductCollectionsListProductsResponseBody {
    object: 'list';
    data_ref: 'data';
    data: ((Required<SkuIdentity> & Required<SkuSaved> & Required<SkuBase> & {
        source_id: string | null;
    }) | (Required<ProductIdentity> & Required<ProductSaved> & Required<ProductBase> & {
        source_id: string | null;
    }))[];
    total: number;
}
