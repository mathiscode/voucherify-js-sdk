(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('qs'), require('form-data')) :
	typeof define === 'function' && define.amd ? define(['exports', 'axios', 'qs', 'form-data'], factory) :
	(global = global || self, factory(global.VoucherifySDK = {}, global.axios, global.Qs, global.FormData));
}(this, (function (exports, axios, Qs, FormData) { 'use strict';

	axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;
	Qs = Qs && Object.prototype.hasOwnProperty.call(Qs, 'default') ? Qs['default'] : Qs;
	FormData = FormData && Object.prototype.hasOwnProperty.call(FormData, 'default') ? FormData['default'] : FormData;

	(function (DiscountVouchersTypesEnum) {
	  DiscountVouchersTypesEnum["AMOUNT"] = "AMOUNT";
	  DiscountVouchersTypesEnum["PERCENT"] = "PERCENT";
	  DiscountVouchersTypesEnum["UNIT"] = "UNIT";
	  DiscountVouchersTypesEnum["FIXED"] = "FIXED";
	})(exports.DiscountVouchersTypesEnum || (exports.DiscountVouchersTypesEnum = {}));

	/**
	 * @internal
	 */
	class VoucherifyError extends Error {
	  constructor(statusCode, body, axiosError) {
	    var _body, _body2;

	    body = (_body = body) != null ? _body : {};
	    const message = ((_body2 = body) == null ? void 0 : _body2.message) || generateMessage(body, statusCode);
	    super(message);
	    this.code = void 0;
	    this.key = void 0;
	    this.details = void 0;
	    this.request_id = void 0;
	    this.resource_id = void 0;
	    this.resource_type = void 0;
	    this.related_object_ids = void 0;
	    this.related_object_type = void 0;
	    this.related_object_total = void 0;
	    this.error = void 0;
	    this.cause = void 0;
	    this.code = body.code;
	    this.key = body.key;
	    this.details = body.details;
	    this.request_id = body.request_id;
	    this.resource_id = body.resource_id;
	    this.resource_type = body.resource_type;
	    this.related_object_ids = body.related_object_ids;
	    this.related_object_type = body.related_object_type;
	    this.related_object_total = body.related_object_total;
	    this.error = body.error;
	    this.cause = axiosError;
	  }

	}

	function generateMessage(body, statusCode) {
	  body = typeof body === 'string' ? body : JSON.stringify(body, null, 2);
	  return `Unexpected status code: ${statusCode} - Details: ${body}`;
	}

	/**
	 * @internal
	 */

	class RequestController {
	  constructor({
	    basePath,
	    baseURL,
	    headers,
	    exposeErrorCause,
	    timeoutMs
	  }) {
	    this.baseURL = void 0;
	    this.basePath = void 0;
	    this.headers = void 0;
	    this.request = void 0;
	    this.lastResponseHeaders = void 0;
	    this.isLastResponseHeadersSet = void 0;
	    this.exposeErrorCause = void 0;
	    this.timeoutMs = void 0;
	    this.basePath = basePath;
	    this.baseURL = baseURL;
	    this.headers = headers;
	    this.exposeErrorCause = exposeErrorCause;
	    this.lastResponseHeaders = {};
	    this.isLastResponseHeadersSet = false;
	    this.timeoutMs = timeoutMs;
	    this.request = axios.create({
	      baseURL: `${this.baseURL}/${this.basePath}/`,
	      headers: this.headers,
	      responseType: 'json'
	    });
	    this.request.interceptors.response.use(void 0, error => {
	      var _error$response;

	      /**
	       * Handle any HTTP response error (status code outside of 2xx) as a VoucherifyError
	       */
	      if (error != null && (_error$response = error.response) != null && _error$response.status) {
	        return Promise.reject(new VoucherifyError(error.response.status, error.response.data, this.exposeErrorCause === true ? error : undefined));
	      }

	      return Promise.reject(error);
	    });
	  }

	  isLastReponseHeadersSet() {
	    return this.isLastResponseHeadersSet;
	  }

	  getLastResponseHeaders() {
	    return this.lastResponseHeaders;
	  }

	  setLastResponseHeaders(headers) {
	    const result = {};

	    for (const key in headers) {
	      result[key] = String(headers[key]);
	    }

	    this.lastResponseHeaders = result;
	    this.isLastResponseHeadersSet = true;
	  }

	  setBaseUrl(baseURL) {
	    this.baseURL = baseURL;
	    this.request.defaults.baseURL = `${baseURL}/${this.basePath}/`;
	  }

	  async get(path, params) {
	    const response = await this.request.get(path, {
	      params,
	      paramsSerializer: function (params) {
	        return Qs.stringify(params);
	      },
	      timeout: this.timeoutMs
	    });
	    this.setLastResponseHeaders(response.headers);
	    return response.data;
	  }

	  async post(path, body, params, headers) {
	    const response = await this.request.post(path, body, {
	      params,
	      paramsSerializer: function (params) {
	        return Qs.stringify(params);
	      },
	      headers,
	      timeout: this.timeoutMs
	    });
	    this.setLastResponseHeaders(response.headers);
	    return response.data;
	  }

	  async put(path, body, params) {
	    const response = await this.request.put(path, body, {
	      params,
	      timeout: this.timeoutMs
	    });
	    this.setLastResponseHeaders(response.headers);
	    return response.data;
	  }

	  async delete(path, params) {
	    const response = await this.request.delete(path, {
	      params,
	      timeout: this.timeoutMs
	    });
	    this.setLastResponseHeaders(response.headers);
	    return response.data;
	  }

	}

	function encode(value = '') {
	  return encodeURIComponent(value);
	}
	function isString(value) {
	  return typeof value === 'string';
	}
	function isOptionalString(value) {
	  return value == null || isString(value);
	}
	function isObject(value) {
	  return typeof value === 'object' && !Array.isArray(value) && value !== null;
	}
	function isOptionalObject(value) {
	  return value == null || isObject(value);
	}
	function environment() {
	  if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
	    return 'Browser'; // eslint-disable-next-line no-restricted-globals
	  } else if (typeof self === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope') {
	    return 'WebWorker';
	  } else if (typeof process !== 'undefined' && process.versions != null && process.versions.node != null) {
	    return `Node.js-${process.version}`;
	  } else if (typeof window !== 'undefined' && window.name === 'nodejs' || navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom')) {
	    return 'JsDom';
	  }

	  return 'Unknown';
	}
	function assert(condition, message) {
	  if (condition) return;
	  throw new Error(message);
	}
	/**
	 * Return an object containing all properties of `obj` excluding the ones in `keys` array
	 * e.g:
	 * ```javascript
	 * omit({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd']) // output: { a: 1, c: 3 }
	 * ```
	 */

	function omit(obj, keys) {
	  return Object.fromEntries(Object.entries(obj).filter(([propertyKey]) => {
	    return !keys.includes(propertyKey);
	  }));
	}

	class AsyncActions {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-async-actions-1
	   */


	  get(asyncActionId) {
	    return this.client.get(`/async-actions/${encode(asyncActionId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-async-actions
	   */


	  list(params) {
	    return this.client.get('/async-actions', params);
	  }

	}

	class CampaignsQualifications {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }

	  examine(body = {}, params) {
	    return this.client.post('/campaigns/qualification', body, params);
	  }

	}

	class Campaigns {
	  constructor(client) {
	    this.client = void 0;
	    this.qualifications = void 0;
	    this.client = client;
	    this.qualifications = new CampaignsQualifications(this.client);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-campaign
	   */


	  create(campaign) {
	    return this.client.post('/campaigns', campaign);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-campaign
	   */


	  update(nameOrId, campaign) {
	    return this.client.put(`/campaigns/${encode(nameOrId)}`, campaign);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-campaign
	   */


	  get(name) {
	    return this.client.get(`/campaigns/${encode(name)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-campaign
	   */


	  delete(name, params = {}) {
	    return this.client.delete(`/campaigns/${encode(name)}`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/add-voucher-to-campaign
	   */


	  addVoucher(name, body = {}, params = {}) {
	    return this.client.post(`/campaigns/${encode(name)}/vouchers`, body, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/add-voucher-with-certain-code-to-campaign
	   */


	  addCertainVoucher(name, code, body = {}) {
	    return this.client.post(`/campaigns/${encode(name)}/vouchers/${encode(code)}`, body);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/import-vouchers
	   */


	  importVouchers(campaignName, vouchers) {
	    return this.client.post(`/campaigns/${encode(campaignName)}/import`, vouchers);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-campaigns
	   */


	  list(params = {}) {
	    return this.client.get('/campaigns', params);
	  }
	  /**
	   * @see https://api.voucherify.io/v1/campaigns/{campaignId}/importCSV
	   */


	  async importVouchersCSV(campaignId, filePath) {
	    assert(environment().startsWith('Node'), `Method "client.campaigns.importVouchersCSV(campaignId, filePath)" is only for Node environment`);
	    const fs = (await import('fs')).default;
	    const fileStream = fs.createReadStream(filePath);
	    const form = new FormData();
	    form.append('file', fileStream);
	    const headers = {
	      'Content-Type': 'multipart/form-data'
	    };
	    return this.client.post(`/campaigns/${campaignId}/importCSV`, form, undefined, headers);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/enable-campaign
	   */


	  enable(campaignId) {
	    return this.client.post(`/campaigns/${encode(campaignId)}/enable`, {});
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/disable-campaign
	   */


	  disable(campaignId) {
	    return this.client.post(`/campaigns/${encode(campaignId)}/disable`, {});
	  }

	}

	class DistributionsPublications {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-publications
	   */


	  list(params = {}) {
	    return this.client.get('/publications', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-publication
	   */


	  create(params) {
	    return this.client.post('/publications', params);
	  }

	}

	class Distributions {
	  constructor(client, exports) {
	    this.client = void 0;
	    this.exports = void 0;
	    this.publications = void 0;
	    this.client = client;
	    this.exports = exports;
	    this.publications = new DistributionsPublications(this.client);
	  }

	}

	class Exports {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-export
	   */


	  create(exportResource) {
	    return this.client.post('/exports', exportResource);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-exports
	   */


	  list(query = {}) {
	    return this.client.get('/exports', query);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-export
	   */


	  get(exportResourceId) {
	    return this.client.get(`/exports/${encode(exportResourceId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-export
	   */


	  delete(exportResourceId) {
	    return this.client.delete(`/exports/${encode(exportResourceId)}`);
	  }

	}

	class Events {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/track-custom-event-client-side
	   */


	  create(eventName, params) {
	    params = { ...params,
	      event: eventName
	    };
	    return this.client.post('/events', params);
	  }

	}

	class Balance {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * Add Gift Voucher Balance
	   * This method gives a possibility to add balance to an existing gift voucher.
	   * @see https://docs.voucherify.io/reference/add-gift-voucher-balance
	   */


	  create(code, params) {
	    return this.client.post(`/vouchers/${encode(code)}/balance`, params);
	  }

	}

	class VouchersQualification {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * The method can be used for sending a request to display all vouchers qualified to the given customer and context (e.g., order, loyalty reward). A checking logic won't run among coupons from bulk unique codes campaigns. For campaigns with multiple unique codes, you should run a dedicated function for searching for qualified campaigns.
	   * As a sample use case, you can imagine a requirement of displaying below cart the coupons eligible to a customer. The customer can take and apply the proposed voucher.
	   *
	   * @see https://docs.voucherify.io/reference/push-qualification-request
	   */


	  examine(body, params = {}) {
	    return this.client.post('/vouchers/qualification', body, params);
	  }

	}

	class Vouchers {
	  constructor(client, balance) {
	    this.client = void 0;
	    this.balance = void 0;
	    this.qualifications = void 0;
	    this.client = client;
	    this.balance = balance;
	    this.qualifications = new VouchersQualification(this.client);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-voucher
	   */


	  create(voucher) {
	    return this.client.post(`/vouchers/${encode(voucher.code)}`, voucher);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/vouchers-get
	   */


	  get(code) {
	    return this.client.get(`/vouchers/${encode(code)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-voucher
	   */


	  update(voucher) {
	    return this.client.put(`/vouchers/${encode(voucher.code)}`, voucher);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-voucher
	   */


	  delete(code, params = {}) {
	    return this.client.delete(`/vouchers/${encode(code)}`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-vouchers
	   */


	  list(params = {}) {
	    return this.client.get('/vouchers', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/enable-voucher
	   */


	  enable(code) {
	    return this.client.post(`/vouchers/${encode(code)}/enable`, {});
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/disable-voucher
	   */


	  disable(code) {
	    return this.client.post(`/vouchers/${encode(code)}/disable`, {});
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/import-vouchers-1
	   */


	  import(vouchers) {
	    return this.client.post('/vouchers/import', vouchers);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/aaupdate-vouchers-metadata-in-bulk
	   */


	  bulkUpdateMetadata(params) {
	    return this.client.post('/vouchers/metadata/async', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/aa-update-vouchers-in-bulk
	   */


	  bulkUpdate(vouchers) {
	    return this.client.post('/vouchers/bulk/async', vouchers);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/release-validation-session
	   */


	  releaseValidationSession(code, sessionKey) {
	    return this.client.delete(`/vouchers/${encode(code)}/sessions/${encode(sessionKey)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/import-vouchers-using-csv
	   */


	  async importCSV(filePath) {
	    assert(environment().startsWith('Node'), `Method "client.vouchers.importCSV(filePath)" is only for Node environment`);
	    const fs = (await import('fs')).default;
	    const fileStream = fs.createReadStream(filePath);
	    const form = new FormData();
	    form.append('file', fileStream);
	    const headers = {
	      'Content-Type': 'multipart/form-data'
	    };
	    return this.client.post('/vouchers/importCSV', form, undefined, headers);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-voucher-transactions
	   */


	  listTransactions(code, params) {
	    return this.client.get(`/vouchers/${encode(code)}/transactions`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/export-voucher-transactions
	   */


	  exportTransactions(code, body) {
	    return this.client.post(`/vouchers/${encode(code)}/transactions/export`, body);
	  }

	}

	class Validations {
	  constructor(client, promotions) {
	    this.client = void 0;
	    this.promotions = void 0;
	    this.client = client;
	    this.promotions = promotions;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/validate-voucher
	   */


	  validateVoucher(code, params = {}) {
	    return this.client.post(`/vouchers/${encode(code)}/validate`, params);
	  }

	  validate(code, context = {}) {
	    if (isObject(code)) {
	      return this.promotions.validate(code);
	    }

	    return this.validateVoucher(code, context);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/validate-stacked-discounts-1
	   */


	  validateStackable(params) {
	    return this.client.post(`/validations`, params);
	  }

	}

	class Redemptions {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/redeem-voucher
	   */


	  redeem(code, body = {}) {
	    return this.client.post(`/vouchers/${encode(code)}/redemption`, body);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/redeem-stacked-discounts
	   */


	  redeemStackable(params) {
	    return this.client.post(`/redemptions`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-redemption
	   */


	  get(redemptionId) {
	    return this.client.get(`/redemptions/${encode(redemptionId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-redemptions
	   */


	  list(params = {}) {
	    return this.client.get('/redemptions', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/vouchers-redemptions
	   */


	  getForVoucher(code) {
	    return this.client.get(`/vouchers/${encode(code)}/redemption`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/rollback-redemption
	   */


	  rollback(redemptionId, params) {
	    let queryParams = {};
	    let payload = {};

	    if (isString(params)) {
	      queryParams.reason = params;
	    } else if (isObject(params)) {
	      const {
	        reason,
	        tracking_id: trackingId,
	        customer
	      } = params;
	      queryParams = {
	        reason: reason ? reason : undefined,
	        tracking_id: trackingId ? trackingId : undefined
	      };
	      payload = {
	        customer
	      };
	    }

	    return this.client.post(`/redemptions/${encode(redemptionId)}/rollback`, payload, queryParams);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/rollback-stackable-redemptions
	   * Types of params and queryParams WILL be changed in future - please do not depend on it!
	   */


	  rollbackStackable(parentRedemptionId, params, queryParams) {
	    return this.client.post(`/redemptions/${encode(parentRedemptionId)}/rollbacks`, params, queryParams);
	  }

	}

	class PromotionTiers {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-promotion-tiers
	   */


	  listAll(params = {}) {
	    return this.client.get('/promotions/tiers', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-promotions
	   */


	  list(promotionId) {
	    return this.client.get(`/promotions/${encode(promotionId)}/tiers`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-promotion-tier
	   */


	  get(tierId) {
	    return this.client.get(`/promotions/tiers/${encode(tierId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/add-promotion-tier-to-campaign
	   */


	  create(promotionId, params) {
	    return this.client.post(`/promotions/${encode(promotionId)}/tiers`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/redeem-promotion
	   */


	  redeem(promotionsTierId, params) {
	    return this.client.post(`/promotions/tiers/${encode(promotionsTierId)}/redemption`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-promotion
	   */


	  update(params) {
	    return this.client.put(`/promotions/tiers/${encode(params.id)}`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-promotion
	   */


	  delete(promotionsTierId) {
	    return this.client.delete(`/promotions/tiers/${encode(promotionsTierId)}`);
	  }

	}

	class Promotions {
	  constructor(client, tiers, stack) {
	    this.client = void 0;
	    this.tiers = void 0;
	    this.stack = void 0;
	    this.client = client;
	    this.tiers = tiers;
	    this.stack = stack;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-promotion-campaign
	   */


	  create(promotionCampaign) {
	    return this.client.post('/campaigns', promotionCampaign);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/validate-promotions-1
	   */


	  validate(body, params) {
	    return this.client.post('/promotions/validation', body, params);
	  }

	}

	class Customers {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-customer
	   */


	  create(customer) {
	    return this.client.post('/customers', customer);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/read-customer
	   */


	  get(customerId) {
	    return this.client.get(`/customers/${encode(customerId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-customers
	   */


	  list(params) {
	    return this.client.get('/customers', params);
	  }
	  /**
	   * Standard list customers API has limitation of available pages to be shown equal to 100. To cover cases when you would like to fetch more, you must use scroll capabilities.
	   *
	   * ```javascript
	   * async function () {
	   *		for await (const customer of voucherify.customers.scroll(params)) {
	   *			console.log('Customer', customer)
	   *		}
	   * }
	   * ```
	   */


	  async *scroll(params) {
	    var _params$starting_afte;

	    let startingAfter = (_params$starting_afte = params.starting_after) != null ? _params$starting_afte : params.order === 'created_at' ? '1970-01-01T00:00:00Z' : '2200-01-01T00:00:00Z';
	    let response = await this.client.get('/customers', Object.assign({}, params, {
	      starting_after: startingAfter
	    }));

	    while (true) {
	      if (response.customers.length === 0) break;

	      for (const customer of response.customers) {
	        if (params.order === 'created_at') {
	          startingAfter = startingAfter > customer.created_at ? startingAfter : customer.created_at;
	        } else {
	          startingAfter = startingAfter < customer.created_at ? startingAfter : customer.created_at;
	        }

	        yield customer;
	      }

	      if (!response.has_more) break;
	      response = await this.client.get('/customers', Object.assign({}, params, {
	        starting_after: startingAfter
	      }));
	    }
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-customer
	   */


	  update(customer) {
	    const id = 'id' in customer ? customer.id : customer.source_id;
	    const customerWithoutId = omit(customer, ['id']);
	    return this.client.put(`/customers/${encode(id)}`, customerWithoutId);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-customers-in-bulk
	   */


	  updateInBulk(customers) {
	    return this.client.post(`/customers/bulk/async`, customers);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-customers-metadata-in-bulk
	   */


	  updateMetadataInBulk(sourceIdsAndMetadata) {
	    return this.client.post(`/customers/metadata/async`, sourceIdsAndMetadata);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-customer
	   */


	  delete(customerId) {
	    return this.client.delete(`/customers/${encode(customerId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-customer-permanently
	   */


	  deletePermanently(customerId) {
	    return this.client.post(`/customers/${encode(customerId)}/permanent-deletion`, {});
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-customers-consents
	   */


	  updateConsents(idOrSourceId, consents) {
	    return this.client.put(`/customers/${encode(idOrSourceId)}/consents`, consents);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-customer-activities
	   */


	  listActivities(customerId, params) {
	    return this.client.get(`/customers/${encode(customerId)}/activities`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/import-customers-using-csv
	   */


	  async importCSV(filePath) {
	    assert(environment().startsWith('Node'), `Method "client.customers.importCSV(filePath)" is only for Node environment`);
	    const fs = (await import('fs')).default;
	    const fileStream = fs.createReadStream(filePath);
	    const form = new FormData();
	    form.append('file', fileStream);
	    const headers = {
	      'Content-Type': 'multipart/form-data'
	    };
	    return this.client.post(`/customers/importCSV`, form, undefined, headers);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-customer-redeemables
	   */


	  listRedeemables(id, params) {
	    return this.client.get(`/customers/${encode(id)}/redeemables`, params);
	  }

	}

	class Consents {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-consents
	   */


	  list() {
	    return this.client.get('/consents');
	  }

	}

	class Orders {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-order
	   */


	  create(order) {
	    return this.client.post('/orders', order);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-order
	   */


	  get(orderId) {
	    return this.client.get(`/orders/${encode(orderId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-order
	   */


	  update(order) {
	    return this.client.put(`/orders/${encode(order.id || order.source_id)}`, omit(order, ['id']));
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-orders
	   */


	  list(params = {}) {
	    return this.client.get('/orders', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/import-orders
	   */


	  import(orders) {
	    return this.client.post('/orders/import', orders);
	  }

	}

	class Products {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-product
	   */


	  create(product) {
	    return this.client.post('/products', product);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-product
	   */


	  get(productId) {
	    return this.client.get(`/products/${encode(productId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-product
	   */


	  update(product) {
	    return this.client.put(`/products/${encode(product.id || product.source_id)}`, omit(product, ['id']));
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/async-update-products-metadata-in-bulk
	   */


	  bulkUpdateMetadata(products) {
	    return this.client.post('/products/metadata/async', products);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/post-products-in-bulk
	   */


	  bulkUpdate(products) {
	    return this.client.post('/products/bulk/async', products);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-product
	   */


	  delete(productId, params) {
	    return this.client.delete(`/products/${encode(productId)}`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-products
	   */


	  list(params) {
	    return this.client.get('/products', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-sku
	   */


	  createSku(productId, sku) {
	    return this.client.post(`/products/${encode(productId)}/skus`, sku);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-sku-v20210726
	   */


	  getSku(skuId) {
	    return this.client.get(`/skus/${encode(skuId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-sku
	   */


	  updateSku(productId, sku) {
	    return this.client.put(`/products/${encode(productId)}/skus/${encode(sku.id || sku.source_id)}`, omit(sku, ['id']));
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-sku
	   */


	  deleteSku(productId, skuId, params) {
	    return this.client.delete(`/products/${encode(productId)}/skus/${encode(skuId)}`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-skus
	   */


	  listSkus(productId) {
	    return this.client.get(`/products/${encode(productId)}/skus`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/import-skus-using-csv
	   */


	  async importSkusCSV(filePath) {
	    assert(environment().startsWith('Node'), `Method "client.products.importSkusCSV(filePath)" is only for Node environment`);
	    const fs = (await import('fs')).default;
	    const fileStream = fs.createReadStream(filePath);
	    const form = new FormData();
	    form.append('file', fileStream);
	    const headers = {
	      'Content-Type': 'multipart/form-data'
	    };
	    return this.client.post(`/skus/importCSV`, form, undefined, headers);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/import-products-using-csv
	   */


	  async importCSV(filePath) {
	    assert(environment().startsWith('Node'), `Method "client.products.importCSV(filePath)" is only for Node environment`);
	    const fs = (await import('fs')).default;
	    const fileStream = fs.createReadStream(filePath);
	    const form = new FormData();
	    form.append('file', fileStream);
	    const headers = {
	      'Content-Type': 'multipart/form-data'
	    };
	    return this.client.post(`/products/importCSV`, form, undefined, headers);
	  }

	}

	class Rewards {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-rewards
	   */


	  list(params = {}) {
	    return this.client.get('/rewards', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-reward
	   */


	  create(reward) {
	    return this.client.post('/rewards', reward);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-reward
	   */


	  get(rewardId) {
	    return this.client.get(`/rewards/${encode(rewardId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-reward
	   */


	  update(reward) {
	    return this.client.put(`/rewards/${encode(reward.id)}`, omit(reward, ['id']));
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-reward
	   */


	  delete(rewardId) {
	    return this.client.delete(`/rewards/${encode(rewardId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-reward-assignment
	   */


	  getAssignment(rewardId, assignmentId) {
	    return this.client.get(`/rewards/${encode(rewardId)}/assignments/${encode(assignmentId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-reward-assignments
	   */


	  listAssignments(rewardId, params = {}) {
	    return this.client.get(`/rewards/${encode(rewardId)}/assignments`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-reward-assignment
	   */


	  createAssignment(rewardId, assignment) {
	    return this.client.post(`/rewards/${encode(rewardId)}/assignments`, assignment);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-reward-assignment
	   */


	  updateAssignment(rewardId, assignment) {
	    return this.client.put(`/rewards/${encode(rewardId)}/assignments/${encode(assignment.id)}`, omit(assignment, ['id']));
	  }

	  deleteAssignment(rewardId, assignmentId) {
	    return this.client.delete(`/rewards/${encode(rewardId)}/assignments/${encode(assignmentId)}`);
	  }

	}

	class Loyalties {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-loyalty-programs
	   */


	  list(params = {}) {
	    return this.client.get('/loyalties', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-loyalty-program
	   */


	  create(campaign) {
	    return this.client.post('/loyalties', campaign);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-loyalty-program
	   */


	  get(campaignId) {
	    return this.client.get(`/loyalties/${encode(campaignId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-loyalty-program
	   */


	  update(campaign) {
	    return this.client.put(`/loyalties/${encode(campaign.id)}`, omit(campaign, ['id']));
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-loyalty-program
	   */


	  delete(campaignId, params) {
	    return this.client.delete(`/loyalties/${encode(campaignId)}`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-reward-assignments-1
	   */


	  listRewardAssignments(campaignId, params = {}) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/rewards`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-reward-assignment-1
	   */


	  createRewardAssignments(campaignId, assignment) {
	    return this.client.post(`/loyalties/${encode(campaignId)}/rewards`, assignment);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-reward-assignment-1
	   */


	  updateRewardAssignment(campaignId, assignment) {
	    return this.client.put(`/loyalties/${encode(campaignId)}/rewards/${assignment.id}`, omit(assignment, ['id']));
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-reward-assignment-1
	   */


	  deleteRewardAssignment(campaignId, assignmentId) {
	    return this.client.delete(`/loyalties/${encode(campaignId)}/rewards/${assignmentId}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-reward-assignment-2
	   */


	  getRewardAssignment(campaignId, assignmentId) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/rewards/${encode(assignmentId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-earning-rules
	   */


	  listEarningRules(campaignId, params = {}) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/earning-rules`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-earning-rule
	   */


	  createEarningRule(campaignId, earningRules) {
	    return this.client.post(`/loyalties/${encode(campaignId)}/earning-rules`, earningRules);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-earning-rule
	   */


	  updateEarningRule(campaignId, earningRule) {
	    return this.client.put(`/loyalties/${encode(campaignId)}/earning-rules/${earningRule.id}`, omit(earningRule, ['id']));
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-earning-rule
	   */


	  deleteEarningRule(campaignId, earningRuleId) {
	    return this.client.delete(`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-earning-rule
	   */


	  getEarningRule(campaignId, earningRuleId) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/earning-rules/${encode(earningRuleId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/enable-earning-rule
	   */


	  enableEarningRule(campaignId, earningRuleId) {
	    return this.client.post(`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}/enable`, {});
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/disable-earning-rule
	   */


	  disableEarningRule(campaignId, earningRuleId) {
	    return this.client.post(`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}/disable`, {});
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-members
	   */


	  listMembers(campaignId, params) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/members`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-member
	   */


	  createMember(campaignId, member) {
	    return this.client.post(`/loyalties/${encode(campaignId)}/members`, member);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-member
	   * @see https://docs.voucherify.io/reference/get-member-1
	   */


	  getMember(campaignId, memberId) {
	    return this.client.get(campaignId ? `/loyalties/${encode(campaignId)}/members/${memberId}` : `/loyalties/members/${memberId}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-member-activities
	   * @see https://docs.voucherify.io/reference/get-member-activities-1
	   */


	  getMemberActivities(campaignId, memberId) {
	    return this.client.get(campaignId ? `/loyalties/${encode(campaignId)}/members/${memberId}/activities` : `/loyalties/members/${memberId}/activities`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-member-rewards
	   */


	  listMemberRewards(memberId, params) {
	    return this.client.get(`/loyalties/members/${encode(memberId)}/rewards`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance
	   * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance-1
	   */


	  addOrRemoveCardBalance(memberId, balance, campaignId) {
	    return this.client.post(campaignId ? `/loyalties/${encode(campaignId)}/members/${memberId}/balance` : `/loyalties/members/${memberId}/balance`, balance);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance-1
	   */


	  addPoints(campaignId, memberId, balance) {
	    return this.client.post(`/loyalties/${encode(campaignId)}/members/${memberId}/balance`, balance);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/transfer-points
	   */


	  transferPoints(campaignId, memberId, loyaltiesTransferPoints) {
	    return this.client.post(`/loyalties/${encode(campaignId)}/members/${encode(memberId)}/transfers`, loyaltiesTransferPoints);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-points-expiration
	   */


	  getPointsExpiration(campaignId, memberId, params) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/members/${memberId}/points-expiration`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/redeem-loyalty-card
	   */


	  redeemReward(campaignId, memberId, params) {
	    return this.client.post(`/loyalties/${encode(campaignId)}/members/${encode(memberId)}/redemption`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-loyalty-tier-rewards
	   */


	  listLoyaltyTierRewards(campaignId, tierId) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/tiers/${encode(tierId)}/rewards`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-loyalty-card-transactions
	   * @see https://docs.voucherify.io/reference/list-loyalty-card-transactions-1
	   */


	  listCardTransactions(memberId, campaignId, params) {
	    return this.client.get(campaignId ? `/loyalties/${encode(campaignId)}/members/${encode(memberId)}/transactions` : `/loyalties/members/${encode(memberId)}/transactions`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/export-loyalty-card-transactions
	   * @see https://docs.voucherify.io/reference/export-loyalty-card-transactions-1
	   */


	  exportCardTransactions(memberId, campaignId, params = {}) {
	    return this.client.post(campaignId ? `/loyalties/${encode(campaignId)}/members/${encode(memberId)}/transactions/export` : `/loyalties/members/${encode(memberId)}/transactions/export`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-reward-details
	   */


	  getRewardDetails(campaignId, assignmentId) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/reward-assignments/${encode(assignmentId)}/reward`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-loyalty-tiers
	   */


	  listTiers(campaignId, params) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/tiers`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-loyalty-tier
	   */


	  getTier(campaignId, tierId) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/tiers/${encode(tierId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-loyalty-tiers
	   */


	  createTiers(campaignId, tiers) {
	    return this.client.post(`/loyalties/${encode(campaignId)}/tiers`, tiers);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-loyalty-tier-earning-rules
	   */


	  listLoyaltyTierEarningRules(campaignId, tierId, params) {
	    return this.client.get(`/loyalties/${encode(campaignId)}/tiers/${encode(tierId)}/earning-rules`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-member-loyalty-tier
	   */


	  listMemberLoyaltyTiers(memberId) {
	    return this.client.get(`/loyalties/members/${encode(memberId)}/tiers`);
	  }

	}

	class ValidationRules {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-validation-rules
	   */


	  create(validationRule) {
	    return this.client.post('/validation-rules', validationRule);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-validation-rules
	   */


	  get(validationRuleId) {
	    return this.client.get(`/validation-rules/${encode(validationRuleId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-validation-rules
	   */


	  update(validationRule) {
	    return this.client.put(`/validation-rules/${encode(validationRule.id)}`, omit(validationRule, ['id']));
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-validation-rules
	   */


	  delete(validationRuleId) {
	    return this.client.delete(`/validation-rules/${encode(validationRuleId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-validation-rules-assignment
	   */


	  createAssignment(validationRuleId, assignment) {
	    return this.client.post(`/validation-rules/${encode(validationRuleId)}/assignments`, assignment);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-validation-rules-assignment
	   */


	  deleteAssignment(validationRuleId, assignmentId) {
	    return this.client.delete(`/validation-rules/${encode(validationRuleId)}/assignments/${encode(assignmentId)}`);
	  }

	  validate(validationRuleId, params = {}) {
	    return this.client.post(`/validation-rules/${encode(validationRuleId)}/validation`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-validation-rules
	   */


	  list(params = {}) {
	    return this.client.get('/validation-rules', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-validation-rules-assignments
	   */


	  listRulesAssignments(params = {}) {
	    return this.client.get(`/validation-rules-assignments`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-validation-rule-assignments
	   */


	  listAssignments(validationRuleId, params = {}) {
	    return this.client.get(`/validation-rules/${encode(validationRuleId)}/assignments`, params);
	  }

	}

	class Segments {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-segment
	   */


	  create(segment) {
	    return this.client.post('/segments', segment);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-segment
	   */


	  get(segmentId) {
	    return this.client.get(`/segments/${encode(segmentId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-segment
	   */


	  delete(segmentId) {
	    return this.client.delete(`/segments/${encode(segmentId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-segments
	   */


	  list(customerId) {
	    return this.client.get(`/customers/${encode(customerId)}/segments`);
	  }

	}

	class ApiLimitsHandler {
	  constructor(requestController) {
	    this.requestController = void 0;
	    this.requestController = requestController;
	  }

	  getLastResponseHeadersFromController() {
	    return this.requestController.getLastResponseHeaders();
	  }

	  areLimitsAvailable() {
	    return this.requestController.isLastReponseHeadersSet();
	  }

	  getRateLimit() {
	    var _this$getLastResponse;

	    const rateLimit = (_this$getLastResponse = this.getLastResponseHeadersFromController()['x-rate-limit-limit']) != null ? _this$getLastResponse : 0;
	    return parseInt(rateLimit, 10);
	  }

	  getRateLimitRemaining() {
	    var _this$getLastResponse2;

	    const rateLimitRemaining = (_this$getLastResponse2 = this.getLastResponseHeadersFromController()['x-rate-limit-remaining']) != null ? _this$getLastResponse2 : 0;
	    return parseInt(rateLimitRemaining, 10);
	  }

	  getRetryAfter() {
	    var _this$getLastResponse3;

	    const retryAfter = (_this$getLastResponse3 = this.getLastResponseHeadersFromController()['retry-after']) != null ? _this$getLastResponse3 : 0;
	    return parseInt(retryAfter, 10);
	  }

	}

	class MetadataSchemas {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-metadata-schemas
	   */


	  list() {
	    return this.client.get('/metadata-schemas');
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-metadata-schema
	   */


	  get(schemaName) {
	    return this.client.get(`/metadata-schemas/${encode(schemaName)}`);
	  }

	}

	class Categories {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-categories
	   */


	  list(params = {}) {
	    return this.client.get('/categories', params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-category
	   */


	  create(createCategory) {
	    return this.client.post('/categories', createCategory);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-category
	   */


	  get(categoryId) {
	    return this.client.get(`/categories/${encode(categoryId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-category
	   */


	  delete(categoryId) {
	    return this.client.delete(`/categories/${encode(categoryId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-category
	   */


	  update(categoryId, updateCategory) {
	    return this.client.put(`/categories/${encode(categoryId)}`, updateCategory);
	  }

	}

	class PromotionsStacks {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	   */


	  listInCampaign(campaignId) {
	    return this.client.get(`/promotions/${campaignId}/stacks`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	   */


	  createInCampaign(campaignId, body) {
	    return this.client.post(`/promotions/${campaignId}/stacks`, body);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-promotion-stack
	   */


	  delete(campaignId, stackId) {
	    return this.client.delete(`/promotions/${campaignId}/stacks/${stackId}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-promotion-stack
	   */


	  get(campaignId, stackId) {
	    return this.client.get(`/promotions/${campaignId}/stacks/${stackId}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-promotion-stack
	   */


	  update(campaignId, stackId, body) {
	    return this.client.put(`/promotions/${campaignId}/stacks/${stackId}`, body);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	   */


	  list(params) {
	    return this.client.get(`/promotions/stacks`, params);
	  }

	}

	class ProductCollections {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-product-collection
	   */


	  create(productCollection) {
	    return this.client.post(`/product-collections`, productCollection);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-product-collections
	   */


	  list(params) {
	    return this.client.get(`/product-collections`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/delete-product-collection
	   */


	  delete(productCollectionId) {
	    return this.client.delete(`/product-collections/${encode(productCollectionId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-product-collection
	   */


	  get(productCollectionId) {
	    return this.client.get(`/product-collections/${encode(productCollectionId)}`);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-products-in-collection
	   */


	  listProducts(productCollectionId, params) {
	    return this.client.get(`/product-collections/${encode(productCollectionId)}/products`, params);
	  }

	}

	class Qualifications {
	  constructor(client) {
	    this.client = void 0;
	    this.client = client;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/check-eligibility
	   */


	  checkEligibility(body) {
	    return this.client.post('/qualifications', body);
	  }

	}

	//  apiLimitsHandler: ApiLimitsHandler
	// 	campaigns: Campaigns
	// 	consents: Consents
	// 	customers: Customers
	// 	distributions: Distributions
	// 	events: Events
	// 	loyalties: Loyalties
	//  metadataSchemas: MetadataSchemas
	// 	orders: Orders
	// 	products: Products
	// 	promotions: Promotions
	// 	redemptions: Redemptions
	// 	rewards: Rewards
	// 	segments: Segments
	// 	validationRules: ValidationRules
	// 	validations: Validations
	// 	vouchers: Vouchers
	// }

	function VoucherifyServerSide(options) {
	  var _options$apiUrl, _options$exposeErrorC, _options$timeoutMs;

	  assert(isObject(options), 'VoucherifyServerSide: the "options" argument must be an object');
	  assert(isString(options.applicationId), 'VoucherifyServerSide: "options.applicationId" is required');
	  assert(isString(options.secretKey), 'VoucherifyServerSide: "options.secretKey" is required');
	  assert(isOptionalString(options.apiVersion), 'VoucherifyServerSide: expected "options.apiVersion" to be a string');
	  assert(isOptionalString(options.channel), 'VoucherifyServerSide: expected "options.channel" to be a string');
	  let headers = {
	    'X-App-Id': options.applicationId,
	    'X-App-Token': options.secretKey,
	    'X-Voucherify-Channel': options.channel || `${environment()}-SDK-v${"2.7.4"}`,
	    'Content-Type': 'application/json'
	  };

	  if (options.apiVersion) {
	    headers['X-Voucherify-API-Version'] = options.apiVersion;
	  }

	  if (isObject(options.customHeaders)) {
	    headers = Object.assign({}, headers, options.customHeaders);
	  }
	  /**
	   * The option `dangerouslySetSecretKeyInBrowser` is explicitly long and not suggested in the thrown error because
	   * we don't want the user to enable this option without going through the documentation and understanding the risks
	   * of exposing a their secretKey
	   */


	  if (!environment().startsWith('Node')) {
	    assert(options.dangerouslySetSecretKeyInBrowser === true, `VoucherifyServerSide: you're exposing your secretKey to a ${environment().toLowerCase()} environment. This is generally considered a bad practice. Did you mean to use 'VoucherifyClientSide'?`);
	  }

	  const client = new RequestController({
	    basePath: 'v1',
	    baseURL: (_options$apiUrl = options.apiUrl) != null ? _options$apiUrl : 'https://api.voucherify.io',
	    headers,
	    exposeErrorCause: (_options$exposeErrorC = options.exposeErrorCause) != null ? _options$exposeErrorC : false,
	    timeoutMs: (_options$timeoutMs = options.timeoutMs) != null ? _options$timeoutMs : 0
	  });
	  const asyncActions = new AsyncActions(client);
	  const balance = new Balance(client);
	  const vouchers = new Vouchers(client, balance);
	  const campaigns = new Campaigns(client);
	  const categories = new Categories(client);
	  const exportsNamespace = new Exports(client);
	  const events = new Events(client);
	  const distributions = new Distributions(client, exportsNamespace);
	  const promotionTiers = new PromotionTiers(client);
	  const promotionStack = new PromotionsStacks(client);
	  const promotions = new Promotions(client, promotionTiers, promotionStack);
	  const validations = new Validations(client, promotions);
	  const redemptions = new Redemptions(client);
	  const qualifications = new Qualifications(client);
	  const customers = new Customers(client);
	  const consents = new Consents(client);
	  const orders = new Orders(client);
	  const products = new Products(client);
	  const productCollections = new ProductCollections(client);
	  const rewards = new Rewards(client);
	  const loyalties = new Loyalties(client);
	  const segments = new Segments(client);
	  const validationRules = new ValidationRules(client);
	  const apiLimitsHandler = new ApiLimitsHandler(client);
	  const metadataSchemas = new MetadataSchemas(client);
	  return {
	    vouchers,
	    campaigns,
	    categories,
	    distributions,
	    validations,
	    redemptions,
	    promotions,
	    customers,
	    consents,
	    orders,
	    products,
	    productCollections,
	    qualifications,
	    rewards,
	    loyalties,
	    segments,
	    validationRules,
	    events,
	    asyncActions,
	    apiLimitsHandler,
	    metadataSchemas
	  };
	}

	class ClientSide {
	  constructor(client, trackingId) {
	    this.client = void 0;
	    this.trackingId = void 0;
	    this.client = client;
	    this.trackingId = trackingId;
	  }

	  setIdentity(identity) {
	    this.trackingId = identity;
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/vouchers-validate
	   */


	  validate(params) {
	    var _query$customer, _query$customer2;

	    assert(isObject(params) || isString(params), 'client.validate: expected "params" argument to be an object or a string');
	    const query = {};

	    if (isString(params)) {
	      query.code = params;
	    } else {
	      query.code = params.code;
	      query.item = params.items;
	      query.amount = params.amount;
	      query.metadata = params.metadata;
	      query.order = {
	        metadata: params.orderMetadata
	      };
	      query.customer = params.customer;
	      query.tracking_id = params.tracking_id || this.trackingId;
	      query.session_type = params.session_type;
	      query.session_key = params.session_key;
	      query.session_ttl = params.session_ttl;
	      query.session_ttl_unit = params.session_ttl_unit;
	    }

	    if (!!query.code) {
	      query.code = query.code.replace(/[\r\n\t\f\v]/g, '').trim();
	    }

	    assert(isOptionalObject(query == null ? void 0 : query.customer), 'client.validate: expected "params.customer" to be an object');
	    assert(isOptionalString(query == null ? void 0 : (_query$customer = query.customer) == null ? void 0 : _query$customer.source_id), 'client.validate: expected "params.customer.source_id" to be a string'); // prettier-ignore

	    assert(isOptionalObject(query == null ? void 0 : (_query$customer2 = query.customer) == null ? void 0 : _query$customer2.metadata), 'client.validate: expected "params.customer.metadata" to be an object'); // prettier-ignore

	    const path = query.code ? '/validate' : '/promotions/validation';
	    return this.client.get(path, query);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/redeem-voucher-client-side
	   */


	  redeem(code, payload = {}) {
	    var _payload$customer, _payload$customer$sou;

	    assert(isString(code), 'client.redeem - please provide a valid Voucher code');
	    code = code.replace(/[\r\n\t\f\v]/g, '').trim();
	    payload.customer = (_payload$customer = payload.customer) != null ? _payload$customer : {};
	    payload.customer.source_id = (_payload$customer$sou = payload.customer.source_id) != null ? _payload$customer$sou : this.trackingId;
	    return this.client.post('/redeem', payload, {
	      code
	    });
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-publication
	   */


	  publish(campaign, payload = {}, queryParams = {}) {
	    var _payload$customer2, _payload$customer$sou2, _payload$customer3, _payload$channel, _preparedPayload$cust;

	    assert(isObject(payload), 'client.publish - expected payload to be an object');
	    const preparedPayload = {};
	    preparedPayload.customer = (_payload$customer2 = payload.customer) != null ? _payload$customer2 : {};
	    preparedPayload.customer.source_id = (_payload$customer$sou2 = (_payload$customer3 = payload.customer) == null ? void 0 : _payload$customer3.source_id) != null ? _payload$customer$sou2 : this.trackingId;
	    preparedPayload.channel = (_payload$channel = payload.channel) != null ? _payload$channel : 'Voucherify.js'; // @todo - removed hard-coded channel

	    assert(isString((_preparedPayload$cust = preparedPayload.customer) == null ? void 0 : _preparedPayload$cust.source_id), 'client.publish - expected payload to contain customer source id or to have tracking id set up by Voucherify client');
	    queryParams.campaign = campaign.replace(/[\r\n\t\f\v]/g, '').trim();
	    return this.client.post('/publish', preparedPayload, queryParams);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/track-custom-event-client-side
	   */


	  track(event_name, customer, metadata, referral, loyalty) {
	    var _customer$source_id, _payload$customer4;

	    assert(isString(event_name), 'client.track - expected event name to be an string');
	    assert(isObject(customer), 'client.track - expected customer to be an object');
	    const payload = {
	      event: event_name,
	      metadata: metadata != null ? metadata : {},
	      customer: customer,
	      referral: referral != null ? referral : undefined,
	      loyalty: loyalty != null ? loyalty : undefined
	    };
	    payload.customer.source_id = (_customer$source_id = customer.source_id) != null ? _customer$source_id : this.trackingId;
	    assert(isString((_payload$customer4 = payload.customer) == null ? void 0 : _payload$customer4.source_id), 'client.track - expected payload to contain customer source id or to have tracking id set up by Voucherify client');
	    return this.client.post('/events', payload);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/list-vouchers
	   */


	  listVouchers(params = {}) {
	    const query = {};
	    query.campaign = params.campaign;
	    query.category = params.category;
	    query.page = params.page;
	    query.limit = params.limit;
	    query.customer = params.customer;
	    query.created_at = params.created_at;
	    query.updated_at = params.updated_at;
	    return this.client.get('/vouchers', query);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/create-customer
	   */


	  createCustomer(customer, enableDoubleOptIn) {
	    return this.client.post('/customers', customer, {}, enableDoubleOptIn ? {
	      'X-Voucherify-Double-Opt-In': true
	    } : {});
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/get-consent-client-side
	   */


	  listConsents() {
	    return this.client.get('/consents');
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/update-customers-consents-client
	   */


	  updateConsents(idOrSourceId, consents) {
	    return this.client.put(`/customers/${encode(idOrSourceId)}/consents`, consents);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/validate-stackable-discounts-client-side
	   */


	  validateStackable(params) {
	    return this.client.post(`/validations`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/redeem-stackable-discounts-client-side
	   */


	  redeemStackable(params) {
	    return this.client.post(`/redemptions`, params);
	  }
	  /**
	   * @see https://docs.voucherify.io/reference/check-eligibility
	   */


	  qualifications(body) {
	    return this.client.post('/qualifications', body);
	  }

	}

	function VoucherifyClientSide(options) {
	  var _options$apiUrl, _options$exposeErrorC, _options$timeoutMs;

	  assert(isObject(options), 'VoucherifyCustomer: expected "options" argument to be an object');
	  assert(isString(options.clientApplicationId), 'VoucherifyCustomer: "options.clientApplicationId" is required');
	  assert(isString(options.clientSecretKey), 'VoucherifyCustomer: "options.clientSecretKey" is required');
	  assert(isOptionalString(options.apiUrl), 'VoucherifyCustomer: expected "options.baseUrl" to be a string');
	  assert(isOptionalString(options.trackingId), 'VoucherifyCustomer: expected "options.trackingId" to be a string');
	  let headers = {
	    'X-Client-Application-Id': options.clientApplicationId,
	    'X-Client-Token': options.clientSecretKey,
	    'X-Voucherify-Channel': `${environment()}-ClientSide-SDK-v${"2.7.4"}`
	  };

	  if (environment().startsWith('Node')) {
	    assert(isString(options.origin), 'VoucherifyCustomer: "options.origin" is required in Node.js');
	    headers['origin'] = options.origin;
	  }

	  if (isObject(options.customHeaders)) {
	    headers = Object.assign({}, headers, options.customHeaders);
	  }

	  const client = new RequestController({
	    basePath: 'client/v1',
	    baseURL: (_options$apiUrl = options.apiUrl) != null ? _options$apiUrl : 'https://api.voucherify.io',
	    headers,
	    exposeErrorCause: (_options$exposeErrorC = options.exposeErrorCause) != null ? _options$exposeErrorC : false,
	    timeoutMs: (_options$timeoutMs = options.timeoutMs) != null ? _options$timeoutMs : 0
	  });
	  return new ClientSide(client, options.trackingId);
	}

	exports.VoucherifyClientSide = VoucherifyClientSide;
	exports.VoucherifyServerSide = VoucherifyServerSide;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=voucherifysdk.umd.development.js.map
