interface Personal {
  name: string;
  role: string;
  nationality: string;
  languages: readonly string[];
  experience: string;
  education: string;
}

interface Address {
  street: string;
  postalCode: string;
  city: string;
  country: string;
  remote: boolean;
}

interface Business {
  coc: string;
  tax: string;
  type: string;
}

interface Social {
  github: string;
  linkedin: string;
  email: string;
}

interface BusinessInfo {
  personal: Personal;
  address: Address;
  business: Business;
  social: Social;
}

export const businessInfo: BusinessInfo = {
  personal: {
    name: "Ural Karaca",
    role: "Senior Frontend Developer",
    nationality: "Turkish",
    languages: ["English", "French"] as const,
    experience: "9+ years of experience in web development",
    education: "Bachelor's in Computer Engineering",
  },
  address: {
    street: "Krekelplantsoen 1",
    postalCode: "1016 EJ",
    city: "Amsterdam",
    country: "Netherlands",
    remote: true,
  },
  business: {
    coc: "96064498",
    tax: "NL005186218B26",
    type: "Freelance / Contract",
  },
  social: {
    github: "https://github.com/uralkaraca",
    linkedin: "https://linkedin.com/in/ural-karaca",
    email: "ur.karaca@gmail.com",
  },
} as const;
