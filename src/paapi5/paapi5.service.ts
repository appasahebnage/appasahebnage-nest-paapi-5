import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  Method,
  RawAxiosRequestHeaders,
  ResponseType,
} from "axios";

import { Injectable } from "@nestjs/common";

import { SignService } from "../sign/sign.service";
import { CountryCode, HostAndRegion } from "../sign/types";
import {
  GetBrowseNodesRequest,
  GetBrowseNodesResponse,
  GetItemsRequest,
  GetItemsResponse,
  GetVariationsRequest,
  GetVariationsResponse,
  SearchItemsRequest,
  SearchItemsResponse,
} from "./types";
import { ApiTarget } from "./types/api-targets";

@Injectable()
export class PaAPI5Service extends SignService {
  private readonly accessKey: string;
  private readonly secretKey: string;
  private readonly countryCode: string;

  constructor({
    accessKey,
    secretKey,
    countryCode,
  }: {
    accessKey: string;
    secretKey: string;
    countryCode: CountryCode;
  }) {
    super();
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.countryCode = countryCode;
  }

  public async searchItems(
    payload: SearchItemsRequest
  ): Promise<SearchItemsResponse> {
    return await this.call<SearchItemsResponse>({
      method: "POST",
      resource: "/paapi5/searchitems",
      payload,
      target: ApiTarget.searchItems,
    });
  }

  public async getItems(payload: GetItemsRequest): Promise<GetItemsResponse> {
    return await this.call<GetItemsResponse>({
      method: "POST",
      resource: "/paapi5/getitems",
      payload,
      target: ApiTarget.getItems,
    });
  }

  public async getBrowseNodes(
    payload: GetBrowseNodesRequest
  ): Promise<GetBrowseNodesResponse> {
    return await this.call<GetBrowseNodesResponse>({
      method: "POST",
      resource: "/paapi5/getbrowsenodes",
      payload,
      target: ApiTarget.getBrowseNodes,
    });
  }

  public async getVariations(
    payload: GetVariationsRequest
  ): Promise<GetVariationsResponse> {
    return await this.call<GetVariationsResponse>({
      method: "POST",
      resource: "/paapi5/getvariations",
      payload,
      target: ApiTarget.getVariations,
    });
  }

  private async call<T>({
    method,
    resource,
    headers,
    payload,
    responseType,
    target,
  }: {
    method: Method;
    resource: string;
    payload?: object;
    headers?: RawAxiosRequestHeaders;
    responseType?: ResponseType;
    target: ApiTarget;
  }): Promise<T> {
    const { host, region } = HostAndRegion[this.countryCode];
    try {
      const baseURL = `https://${host}`.replace(/\/+$/, "");
      const timestamp = Date.now();

      const axiosRequestConfig: AxiosRequestConfig = {
        baseURL: baseURL,
        method,
        url: resource,
        headers: {
          "Content-Encoding": "amz-1.0",
          host,
          "x-amz-date": this.toAmzDate(timestamp),
          "x-amz-target": target,
          "Content-Type": "application/json; charset=UTF-8",
        },
      };

      if (headers) {
        axiosRequestConfig.headers = {
          ...headers,
          ...axiosRequestConfig.headers,
        };
      }

      if (payload && (method === "PUT" || method === "POST")) {
        axiosRequestConfig.data = payload;
      }

      if (responseType) {
        axiosRequestConfig.responseType = responseType;
      }

      const authorization = this.sign({
        accessKey: this.accessKey,
        secretKey: this.secretKey,
        headers: axiosRequestConfig.headers as AxiosHeaders,
        method,
        payload,
        path: resource,
        timestamp,
        region,
      });

      axiosRequestConfig.headers = {
        ...axiosRequestConfig.headers,
        "User-Agent": "product-advertising-api-5/0.0.1",
        Authorization: authorization,
      };

      return (await axios(axiosRequestConfig)).data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
