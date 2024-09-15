import * as T from './types/ProductCollections';
import type { RequestController } from './RequestController';
export declare class ProductCollections {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/create-product-collection
     */
    create(productCollection: T.ProductCollectionsCreateRequestBody): Promise<T.ProductCollectionsCreateResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/list-product-collections
     */
    list(params?: T.ProductCollectionsListRequestQuery): Promise<T.ProductCollectionsListResponseBody>;
    /**
     * @see https://docs.voucherify.io/reference/delete-product-collection
     */
    delete(productCollectionId: string): Promise<{}>;
    /**
     * @see https://docs.voucherify.io/reference/get-product-collection
     */
    get(productCollectionId: string): Promise<Required<T.StaticProductCollectionBase & T.ProductCollectionIdentity & T.ProductCollectionSaved> | Required<T.DynamicProductCollectionBase & T.ProductCollectionIdentity & T.ProductCollectionSaved>>;
    /**
     * @see https://docs.voucherify.io/reference/list-products-in-collection
     */
    listProducts(productCollectionId: string, params?: T.ProductCollectionsListProductsRequestQuery): Promise<T.ProductCollectionsListProductsResponseBody>;
}
