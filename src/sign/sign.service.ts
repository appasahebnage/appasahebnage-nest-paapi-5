import { AxiosHeaders, Method } from "axios";
import crypto from "crypto-js";

import { Injectable } from "@nestjs/common";

import { Region } from "./types";

@Injectable()
export class SignService {
  public sign({
    accessKey,
    secretKey,
    headers,
    method,
    path,
    payload,
    region,
    service = "ProductAdvertisingAPI",
    timestamp,
  }: {
    accessKey: string;
    secretKey: string;
    headers: AxiosHeaders;
    method: Method;
    path: string;
    payload: object;
    region: Region;
    service?: string;
    timestamp: number;
  }): string {
    const authorizationHeader = this.createAuthorizationHeader(
      accessKey,
      secretKey,
      headers,
      method,
      path,
      payload,
      region,
      service,
      timestamp
    );

    return authorizationHeader;
  }

  private createAuthorizationHeader(
    accessKey: string,
    secretKey: string,
    headers: AxiosHeaders,
    method: Method,
    path: string,
    payload: unknown,
    region: string,
    service: string,
    timestamp: number
  ): string {
    // Step 1: Create Signed Headers
    const signedHeaders = this.createSignedHeaders(headers);

    // Step 2: Create Canonical Request
    const canonicalRequest = this.createCanonicalRequest(
      method,
      path,
      {},
      headers,
      payload
    );

    // Step 3: Create String To Sign
    const stringToSign = this.createStringToSign(
      timestamp,
      region,
      service,
      canonicalRequest
    );

    // Step 4: Create Signature Headers
    const signature = this.createSignature(
      secretKey,
      timestamp,
      region,
      service,
      stringToSign
    );

    // Step 5: Create Authorization Header
    const authorizationHeader = this.createAuthorizationHeaders(
      timestamp,
      accessKey,
      region,
      service,
      signedHeaders,
      signature
    );

    return authorizationHeader;
  }

  private createAuthorizationHeaders(
    timestamp: number,
    accessKey: string,
    region: string,
    service: string,
    signedHeaders: string,
    signature: string
  ): string {
    return (
      "AWS4-HMAC-SHA256" +
      " " +
      "Credential=" +
      accessKey +
      "/" +
      this.createCredentialScope(timestamp, region, service) +
      ", " +
      "SignedHeaders=" +
      signedHeaders +
      ", " +
      "Signature=" +
      signature
    );
  }

  private createCanonicalRequest(
    method: string,
    pathname: string,
    query: Record<string, string>,
    headers: AxiosHeaders,
    payload: unknown
  ): string {
    const payloadJson = JSON.stringify(payload);
    return [
      method.toUpperCase(),
      pathname,
      this.createCanonicalQueryString(query),
      this.createCanonicalHeaders(headers),
      this.createSignedHeaders(headers),
      this.hexEncodedHash(payloadJson || ""),
    ].join("\n");
  }

  private createCanonicalQueryString(params: Record<string, string>): string {
    return Object.keys(params)
      .sort()
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");
  }

  private createCanonicalHeaders(headers: AxiosHeaders): string {
    return Object.keys(headers)
      .sort()
      .map(
        (name) =>
          `${name.toLowerCase().trim()}:${headers[name].toString().trim()}\n`
      )
      .join("");
  }

  private createSignedHeaders(headers: AxiosHeaders): string {
    return Object.keys(headers)
      .sort()
      .map((name) => name.toLowerCase().trim())
      .join(";");
  }

  private createCredentialScope(
    time: number,
    region: string,
    service: string
  ): string {
    return [this.toDate(time), region, service, "aws4_request"].join("/");
  }

  private createStringToSign(
    time: number,
    region: string,
    service: string,
    request: string
  ): string {
    return [
      "AWS4-HMAC-SHA256",
      this.toTime(time),
      this.createCredentialScope(time, region, service),
      this.hexEncodedHash(request),
    ].join("\n");
  }

  private createSignature(
    secret: string,
    time: number,
    region: string,
    service: string,
    stringToSign: string
  ): string {
    const dateKey = this.hmac(
      `AWS4${secret}` as unknown as crypto.lib.WordArray,
      this.toDate(time)
    );
    const regionKey = this.hmac(dateKey, region);
    const serviceKey = this.hmac(regionKey, service);
    const signingKey = this.hmac(serviceKey, "aws4_request");
    return this.hmac(signingKey, stringToSign).toString();
  }

  public toAmzDate(time: number): string {
    // eslint-disable-next-line no-useless-escape
    return new Date(time).toISOString().replace(/[:\-]|\.\d{3}/g, "");
  }

  private toTime(time: number): string {
    // eslint-disable-next-line no-useless-escape
    return new Date(time).toISOString().replace(/[:\-]|\.\d{3}/g, "");
  }

  private toDate(time: number): string {
    return this.toTime(time).substring(0, 8);
  }

  private hmac(key: crypto.lib.WordArray, data: string) {
    return crypto.HmacSHA256(data, key);
  }

  private hexEncodedHash(data: string): string {
    return crypto.SHA256(data).toString(crypto.enc.Hex);
  }
}
