/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing SearchOptions.
 */
export interface SearchOptions {
  /**
   * @member {string} [searchKeyword]
   */
  searchKeyword?: string;
  /**
   * @member {ModelFilterType} [modelFilterType] Possible values include:
   * 'interface', 'capabilityModel'
   */
  modelFilterType?: ModelFilterType;
  /**
   * @member {string} [continuationToken]
   */
  continuationToken?: string;
  /**
   * @member {number} [pageSize]
   */
  pageSize?: number;
}

/**
 * @interface
 * An interface representing ModelInformation.
 */
export interface ModelInformation {
  /**
   * @member {string} [comment]
   */
  comment?: string;
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {string} [displayName]
   */
  displayName?: string;
  /**
   * @member {string} [urnId]
   */
  urnId?: string;
  /**
   * @member {string} [modelName]
   */
  modelName?: string;
  /**
   * @member {number} [version]
   */
  version?: number;
  /**
   * @member {Type} [type] Possible values include: 'interface',
   * 'capabilityModel'
   */
  type?: Type;
  /**
   * @member {string} [etag]
   */
  etag?: string;
  /**
   * @member {string} [publisherId]
   */
  publisherId?: string;
  /**
   * @member {string} [publisherName]
   */
  publisherName?: string;
  /**
   * @member {Date} [createdOn]
   */
  createdOn?: Date;
  /**
   * @member {Date} [updatedOn]
   */
  updatedOn?: Date;
}

/**
 * @interface
 * An interface representing SearchResponse.
 */
export interface SearchResponse {
  /**
   * @member {string} [continuationToken]
   */
  continuationToken?: string;
  /**
   * @member {ModelInformation[]} [results]
   */
  results?: ModelInformation[];
}

/**
 * @interface
 * An interface representing DigitalTwinRepositoryServiceOptions.
 * @extends ServiceClientOptions
 */
export interface DigitalTwinRepositoryServiceOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing DigitalTwinRepositoryServiceGetModelOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DigitalTwinRepositoryServiceGetModelOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [repositoryId] Private repository id. To access global
   * repository, caller should not specify this value.
   */
  repositoryId?: string;
  /**
   * @member {string} [xMsClientRequestId] Optional. Provides a
   * client-generated opaque value that is recorded in the logs. Using this
   * header is highly recommended for correlating client-side activities with
   * requests received by the server.
   */
  xMsClientRequestId?: string;
  /**
   * @member {boolean} [expand] Indicates whether to expand the capability
   * model's interface definitions inline or not. This query parameter ONLY
   * applies to Capability model. Default value: false .
   */
  expand?: boolean;
}

/**
 * @interface
 * An interface representing DigitalTwinRepositoryServiceCreateOrUpdateModelOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DigitalTwinRepositoryServiceCreateOrUpdateModelOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [repositoryId] Private repository id. To access global
   * repository, caller should not specify this value.
   */
  repositoryId?: string;
  /**
   * @member {string} [xMsClientRequestId] Optional. Provides a
   * client-generated opaque value that is recorded in the logs. Using this
   * header is highly recommended for correlating client-side activities with
   * requests received by the server.
   */
  xMsClientRequestId?: string;
  /**
   * @member {string} [ifMatch] Used to make operation conditional for
   * optimistic concurrency. That is, the document is updated only if the
   * specified etag matches the current version in the database. The value
   * should be set to the etag value of the resource.
   */
  ifMatch?: string;
}

/**
 * @interface
 * An interface representing DigitalTwinRepositoryServiceDeleteModelOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DigitalTwinRepositoryServiceDeleteModelOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [xMsClientRequestId] Optional. Provides a
   * client-generated opaque value that is recorded in the logs. Using this
   * header is highly recommended for correlating client-side activities with
   * requests received by the server.
   */
  xMsClientRequestId?: string;
}

/**
 * @interface
 * An interface representing DigitalTwinRepositoryServiceSearchModelOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DigitalTwinRepositoryServiceSearchModelOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [repositoryId] Private repository id. To access global
   * repository, caller should not specify this value.
   */
  repositoryId?: string;
  /**
   * @member {string} [xMsClientRequestId] Optional. Provides a
   * client-generated opaque value that is recorded in the logs. Using this
   * header is highly recommended for correlating client-side activities with
   * requests received by the server..
   */
  xMsClientRequestId?: string;
}

/**
 * @interface
 * An interface representing GetModelHeaders.
 * Defines headers for GetModel operation.
 *
 */
export interface GetModelHeaders {
  /**
   * @member {string} [xMsRequestId] This header is generated by server and
   * uniquely identifies the request that was made and can be used for
   * troubleshooting the request.
   */
  xMsRequestId: string;
  /**
   * @member {string} [eTag] Etag of the model definition.
   */
  eTag: string;
  /**
   * @member {string} [xMsModelId] Id of the model returned.
   */
  xMsModelId: string;
  /**
   * @member {string} [xMsModelPublisherId] Publisher's AAD tenant Id of the
   * model returned.
   */
  xMsModelPublisherId: string;
  /**
   * @member {string} [xMsModelPublisherName] Publisher's AAD tenant name of
   * the model returned.
   */
  xMsModelPublisherName: string;
  /**
   * @member {Date} [xMsModelCreatedon] ISO8601 timestamp of the creation time
   * of the model returned.
   */
  xMsModelCreatedon: Date;
  /**
   * @member {Date} [xMsModelLastupdated] ISO8601 timestamp of the last update
   * time of the model returned.
   */
  xMsModelLastupdated: Date;
}

/**
 * @interface
 * An interface representing CreateOrUpdateModelHeaders.
 * Defines headers for CreateOrUpdateModel operation.
 *
 */
export interface CreateOrUpdateModelHeaders {
  /**
   * @member {string} [xMsRequestId] This header is generated by server and
   * uniquely identifies the request that was made and can be used for
   * troubleshooting the request.
   */
  xMsRequestId: string;
  /**
   * @member {string} [eTag] Etag of the model definition.
   */
  eTag: string;
}

/**
 * @interface
 * An interface representing DeleteModelHeaders.
 * Defines headers for DeleteModel operation.
 *
 */
export interface DeleteModelHeaders {
  /**
   * @member {string} [xMsRequestId] This header is generated by server and
   * uniquely identifies the request that was made and can be used for
   * troubleshooting the request.
   */
  xMsRequestId: string;
}

/**
 * @interface
 * An interface representing SearchModelHeaders.
 * Defines headers for SearchModel operation.
 *
 */
export interface SearchModelHeaders {
  /**
   * @member {string} [xMsRequestId] This header is generated by server and
   * uniquely identifies the request that was made and can be used for
   * troubleshooting the request.
   */
  xMsRequestId: string;
}

/**
 * Defines values for ModelFilterType.
 * Possible values include: 'interface', 'capabilityModel'
 * @readonly
 * @enum {string}
 */
export type ModelFilterType = 'interface' | 'capabilityModel';

/**
 * Defines values for Type.
 * Possible values include: 'interface', 'capabilityModel'
 * @readonly
 * @enum {string}
 */
export type Type = 'interface' | 'capabilityModel';

/**
 * Contains response data for the getModel operation.
 */
export type GetModelResponse = GetModelHeaders & {
  /**
   * The parsed response body.
   */
  body: any;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: GetModelHeaders;
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the createOrUpdateModel operation.
 */
export type CreateOrUpdateModelResponse = CreateOrUpdateModelHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: CreateOrUpdateModelHeaders;
    };
};

/**
 * Contains response data for the deleteModel operation.
 */
export type DeleteModelResponse = DeleteModelHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: DeleteModelHeaders;
    };
};

/**
 * Contains response data for the searchModel operation.
 */
export type SearchModelResponse = SearchResponse & SearchModelHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: SearchModelHeaders;
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SearchResponse;
    };
};
