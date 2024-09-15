import * as T from './types/Categories';
import type { RequestController } from './RequestController';
export declare class Categories {
    private client;
    constructor(client: RequestController);
    /**
     * @see https://docs.voucherify.io/reference/list-categories
     */
    list(params?: T.CategoriesListRequestQuery): Promise<T.ListCategories>;
    /**
     * @see https://docs.voucherify.io/reference/create-category
     */
    create(createCategory: T.CreateCategory): Promise<T.ResponseCreateCategory>;
    /**
     * @see https://docs.voucherify.io/reference/get-category
     */
    get(categoryId: string): Promise<T.CategoryObject>;
    /**
     * @see https://docs.voucherify.io/reference/delete-category
     */
    delete(categoryId: string): Promise<{}>;
    /**
     * @see https://docs.voucherify.io/reference/update-category
     */
    update(categoryId: string, updateCategory: T.UpdateCategoryRequest): Promise<T.ResponseUpdateCategory>;
}
