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
  instagram: string;
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
    postalCode: "1338 KT",
    city: "Almere",
    country: "Netherlands",
    remote: true,
  },
  business: {
    coc: "96064498",
    tax: "NL005186218B26",
    type: "Freelance / Contract",
  },
  social: {
    github: "https://github.com/UralKrc",
    linkedin: "https://linkedin.com/in/ural-karaca",
    email: "mailto:ur.karaca@gmail.com?subject=Work Inquiry&body=Hi Ural,",
    instagram: "https://www.instagram.com/uralkaraca/",
  },
} as const;
