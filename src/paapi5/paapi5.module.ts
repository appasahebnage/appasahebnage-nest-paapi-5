import { Module } from "@nestjs/common";
import { PaAPI5Service } from "./paapi5.service";
import { CountryCode } from "../sign/types";

@Module({
  providers: [PaAPI5Service],
  exports: [PaAPI5Service],
})
export class PaAPI5Module {
  static forRoot({
    accessKey,
    secretKey,
    countryCode = CountryCode.US,
  }: {
    accessKey: string;
    secretKey: string;
    countryCode?: CountryCode;
  }) {
    return {
      module: PaAPI5Module,
      providers: [
        {
          provide: PaAPI5Service,
          useValue: new PaAPI5Service({
            accessKey,
            secretKey,
            countryCode,
          }),
        },
      ],
      exports: [PaAPI5Service],
      global: true,
    };
  }
}
