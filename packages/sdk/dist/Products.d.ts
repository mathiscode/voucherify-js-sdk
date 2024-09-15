import * as T from './types/Products';
import * as AAT from './types/AsyncActions';
import type { RequestController } from './RequestController';
export declare class Products {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/create-product
     */
    create(product: T.ProductsCreate): Promise<T.ProductsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-product
     */
    get(productId: string): Promise<T.ProductsGetResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-product
     */
    update(product: T.ProductsUpdate): Promise<T.ProductsCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/async-update-products-metadata-in-bulk
     */
    bulkUpdateMetadata(products: T.ProductsBulkUpdateMetadata): Promise<T.ProductsBulkUpdateMetadataResponse>;
    /**
     * @see https://docs.voucherify.io/reference/post-products-in-bulk
     */
    bulkUpdate(products: T.ProductsBulkUpdate): Promise<T.ProductsBulkUpdateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-product
     */
    delete(productId: string, params?: T.ProductsDeleteParams): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/list-products
     */
    list(params?: T.ProductsListParams): Promise<T.ProductsListResponse>;
    /**
     * @see https://docs.voucherify.io/reference/create-sku
     */
    createSku(productId: string, sku: T.ProductsCreateSku): Promise<T.ProductsCreateSkuResponse>;
    /**
     * @see https://docs.voucherify.io/reference/get-sku-v20210726
     */
    getSku(skuId: string): Promise<T.ProductsCreateSkuResponse>;
    /**
     * @see https://docs.voucherify.io/reference/update-sku
     */
    updateSku(productId: string, sku: T.ProductsUpdateSku): Promise<T.ProductsCreateSkuResponse>;
    /**
     * @see https://docs.voucherify.io/reference/delete-sku
     */
    deleteSku(productId: string, skuId: string, params?: T.ProductsDeleteSkuParams): Promise<unknown>;
    /**
     * @see https://docs.voucherify.io/reference/list-skus
     */
    listSkus(productId: string): Promise<T.ProductsListSkus>;
    /**
     * @see https://docs.voucherify.io/reference/import-skus-using-csv
     */
    importSkusCSV(filePath: string): Promise<AAT.AsyncActionCreateResponse>;
    /**
     * @see https://docs.voucherify.io/reference/import-products-using-csv
     */
    importCSV(filePath: string): Promise<AAT.AsyncActionCreateResponse>;
}
