# nest-paapi-5
A NestJS module for Amazon's Product Advertising API 5.0 (PAAPI5)

## Description
This package provides a simple way to integrate Amazon's Product Advertising API 5.0 with your NestJS application. It includes a service and module that handles authentication, request signing, and API interactions with Amazon's Product Advertising platform.

## Installation

```bash
npm install nest-paapi-5
# or
yarn add nest-paapi-5
```

## Prerequisites
Before using this package, you'll need:
- Amazon Associate Account
- Access Key ID and Secret Access Key from Amazon Product Advertising API
- Partner Tag (Associate Tag)

## Usage

### Module Import
Import the `PaAPI5Module` into your NestJS application:

```typescript
import { Module } from '@nestjs/common';
import { PaAPI5Module } from 'nest-paapi-5';

@Module({
  imports: [
    PaAPI5Module.forRoot({
      accessKey: 'YOUR_ACCESS_KEY',
      secretKey: 'YOUR_SECRET_KEY',
      countryCode: 'US', // Optional, defaults to 'US'
    }),
  ],
})
export class AppModule {}
```

### Using the Service
Inject and use the `PaAPI5Service` in your controllers or services:

```typescript
import { Injectable } from '@nestjs/common';
import { PaAPI5Service } from 'nest-paapi-5';

@Injectable()
export class ProductService {
  constructor(private readonly paapi5Service: PaAPI5Service) {}

  async searchProducts(keyword: string) {
    const params = {
      PartnerType: PartnerType.Associates,
      PartnerTag: '<TAG>',
      Keywords: 'Harry Potter',
      SearchIndex: 'Books',
      ItemCount: 2,
      Resources: [
        SearchItemsResource.ImagesPrimaryLarge,
        SearchItemsResource.ItemInfoTitle,
        SearchItemsResource.OffersListingsPrice,
      ],
    };
    };

    return await this.paapi5Service.searchItems(params);
  }

  async getProductDetails(asin: string) {
    const params = {
      PartnerType: PartnerType.Associates,
      PartnerTag: '<TAG>',
      ItemIds: ['059035342X', 'B00X4WHP5E', 'B00ZV9RDKK'],
      Condition: Condition.New,
      Resources: [
        GetItemsResource.ImagesPrimaryLarge,
        GetItemsResource.ItemInfoTitle,
        GetItemsResource.OffersListingsPrice,
      ],
    };

    return await this.paapi5Service.getItems(params);
  }
}
```

## Available Methods

The `PaAPI5Service` provides the following methods:

- `searchItems(params)`: Search for items using keywords
- `getItems(params)`: Get detailed information about specific items using ASINs
- `getBrowseNodes(params)`: Get information about browse nodes
- `getVariations(params)`: Get variation information for an ASIN

## Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| accessKey | string | Yes | Your Amazon Product Advertising API Access Key |
| secretKey | string | Yes | Your Amazon Product Advertising API Secret Key |
| countryCode | string | No | Region code (default: 'US') |

## Supported Countries

- US (United States)
- CA (Canada)
- FR (France)
- DE (Germany)
- IN (India)
- IT (Italy)
- JP (Japan)
- ES (Spain)
- UK (United Kingdom)
- BR (Brazil)
- MX (Mexico)
- AU (Australia)
- AE (United Arab Emirates)
- SG (Singapore)


## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
MIT

## Support
For issues and feature requests, please use the GitHub issues page.

## Acknowledgments
This package is built on top of Amazon's Product Advertising API 5.0 and is not officially associated with Amazon.