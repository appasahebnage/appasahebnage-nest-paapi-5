export const Region = {
  "us-east-1": "us-east-1",
  "us-west-2": "us-west-2",
  "eu-west-1": "eu-west-1",
};

export type Region = (typeof Region)[keyof typeof Region];

export const CountryCode = {
  AU: "AU",
  BE: "BE",
  BR: "BR",
  CA: "CA",
  EG: "EG",
  FR: "FR",
  DE: "DE",
  IN: "IN",
  IT: "IT",
  JP: "JP",
  MX: "MX",
  NL: "NL",
  PL: "PL",
  SG: "SG",
  SA: "SA",
  ES: "ES",
  SE: "SE",
  TR: "TR",
  AE: "AE",
  GB: "GB",
  US: "US",
};

export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode];

export type HostAndRegion = {
  [key in CountryCode]: {
    country: string;
    region: Region;
    host: string;
    marketplace: string;
  };
};

export const HostAndRegion: HostAndRegion = {
  AU: {
    country: "Australia",
    region: "us-west-2",
    host: "webservices.amazon.com.au",
    marketplace: "www.amazon.com.au",
  },
  BE: {
    country: "Belgium",
    region: "eu-west-1",
    host: "webservices.amazon.com.be",
    marketplace: "www.amazon.be",
  },
  BR: {
    country: "Brazil",
    region: "us-east-1",
    host: "webservices.amazon.com.br",
    marketplace: "www.amazon.com.br",
  },
  CA: {
    country: "Canada",
    region: "us-east-1",
    host: "webservices.amazon.ca",
    marketplace: "www.amazon.ca",
  },
  EG: {
    country: "Egypt",
    region: "eu-west-1",
    host: "webservices.amazon.eg",
    marketplace: "www.amazon.eg",
  },
  FR: {
    country: "France",
    region: "eu-west-1",
    host: "webservices.amazon.fr",
    marketplace: "www.amazon.fr",
  },
  DE: {
    country: "Germany",
    region: "eu-west-1",
    host: "webservices.amazon.de",
    marketplace: "www.amazon.de",
  },
  IN: {
    country: "India",
    region: "eu-west-1",
    host: "webservices.amazon.in",
    marketplace: "www.amazon.in",
  },
  IT: {
    country: "Italy",
    region: "eu-west-1",
    host: "webservices.amazon.it",
    marketplace: "www.amazon.it",
  },
  JP: {
    country: "Japan",
    region: "us-west-2",
    host: "webservices.amazon.co.jp",
    marketplace: "www.amazon.co.jp",
  },
  MX: {
    country: "Mexico",
    region: "us-east-1",
    host: "webservices.amazon.com.mx",
    marketplace: "www.amazon.com.mx",
  },
  NL: {
    country: "Netherlands",
    region: "eu-west-1",
    host: "webservices.amazon.nl",
    marketplace: "www.amazon.nl",
  },
  PL: {
    country: "Poland",
    region: "eu-west-1",
    host: "webservices.amazon.pl",
    marketplace: "www.amazon.pl",
  },
  SG: {
    country: "Singapore",
    region: "us-west-2",
    host: "webservices.amazon.sg",
    marketplace: "www.amazon.sg",
  },
  SA: {
    country: "Saudi Arabia",
    region: "eu-west-1",
    host: "webservices.amazon.sa",
    marketplace: "www.amazon.sa",
  },
  ES: {
    country: "Spain",
    region: "eu-west-1",
    host: "webservices.amazon.es",
    marketplace: "www.amazon.es",
  },
  SE: {
    country: "Sweden",
    region: "eu-west-1",
    host: "webservices.amazon.se",
    marketplace: "www.amazon.se",
  },
  TR: {
    country: "Turkey",
    region: "eu-west-1",
    host: "webservices.amazon.com.tr",
    marketplace: "www.amazon.com.tr",
  },
  AE: {
    country: "United Arab Emirates",
    region: "eu-west-1",
    host: "webservices.amazon.ae",
    marketplace: "www.amazon.ae",
  },
  GB: {
    country: "United Kingdom",
    region: "eu-west-1",
    host: "webservices.amazon.co.uk",
    marketplace: "www.amazon.co.uk",
  },
  US: {
    country: "United States",
    region: "us-east-1",
    host: "webservices.amazon.com",
    marketplace: "www.amazon.com",
  },
};
