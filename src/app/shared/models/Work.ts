export interface Work {
  office?: string;
  position?: string;
  from?: string;
  to?: string;
  state?: string;
  countryCode?: string;
  description?: Array<string>;
  technologies?: Array<Tech>;
}

interface Tech {
  name?: string;
  link?: string;
}
