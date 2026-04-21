/**
 * LUMA Template Configuration
 * Centralize all branding, content, and metadata here to make it easy to customize.
 */

export const siteConfig = {
  name: "LUMA",
  company: "LUMA Estates",
  tagline: "Where Luxury Finds Its Address",
  description: "A premium real estate landing page template for ultra-luxury developments and high-end estates.",
  url: "https://luma-template.vercel.app",
  
  // Design Tokens (Sync these with globals.css if needed)
  theme: {
    primary: "#000000",
    secondary: "#f5f5f5",
    accent: "#1c1c1c",
  },

  // Navigation Links
  nav: [
    { title: "Home", href: "#hero" },
    { title: "Gallery", href: "#gallery" },
    { title: "Neighbourhood", href: "#neighbourhood" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    title: "A Residence",
    titleItalic: "Beyond Ordinary",
    subtitle: "EST. 2026 • CALIFORNIA COAST",
    cta: "Schedule a Virtual Tour",
    secondaryCta: "Explore Gallery",
  },

  // Social Connections
  links: {
    instagram: "https://instagram.com/lumaestates",
    twitter: "https://twitter.com/lumaestates",
    linkedin: "https://linkedin.com/company/lumaestates",
  },

  // Contact / Lead Capture
  contact: {
    title: "Join the Exclusive Inner Circle",
    description: "Submit your details for a private invitation to our upcoming seasonal viewing event.",
    emailPlaceholder: "Your Professional Email",
    buttonText: "Request Access",
  },

  // Gallery Items
  gallery: [
    {
      title: "Master Suite",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjWHUCKKoZqknRUEcBWKWzz8Qh3E2icBTaa1IwZgtiJz5MSualKXTSXJVyU0q22s5MlbCIbnR1M4hnhbrx0gQRAq8HrT3y5BWVry32LcPKf_DzdvpG0vBB18qE81iGlCVaDZO0E899MmExaaGhcJoiFBhgcHPRpPO953ZEfOQELHqwJ8jfwtinj-Vphqf7rqMYDVDA7fkFDSmn9BFVboL0tCfHscCV07CQ7loL_lPEnou2-AoV3JHGkVOzJzLUF2KQ-urDfzUyRhQL",
    },
    {
      title: "Gourmet Kitchen",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE_kJiCI_jU5G5OmrTKqSb95SfAarNQwlrqPFd596TEzli4sxH3sqbvfOb6-dOnTPf0XKcsije19tGm9jxkm8__UxY1pwyPlzswVlpkjw99BNbBKzJdbcGE8QEsfzhb0FuFb4724jcjNS6iuDIXUpS5yBFGzjKycc8BRk7wSik8ZDxTcTIehrmmRIHZElMylA-wR33f0gaTrydYdTLEU_PnupA0dXQROKmu-FJ1LKsSkr9HquyXr_hu9KMd1P0ThF17oCsj1a1GPcZ",
    },
    {
      title: "Living Space",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn5Mcow2VEaoeOAHq_fbKbJ60pyq76sbovvGe4W7THrzkDe6g-x7C1Pc_WQUAo9tM2QMAzRiD8PtfIYPp3tv6GafJztV7t1NU-D7rG3VuMubdUMO6FVQQO9AeZLMsD-cKIAxHbaVQsiael6211-NYK7_PH5F5V9qPQJ__8Ff9C45fQgxlwo1FM24uNMLaWexurA2v6hqMSbShBHgvlv7Ddfm0QdX8Qngf1usJJf8hILouz5h09re3Th2ikngfPz6O05PB8c-_ZMzJm",
    },
    {
      title: "Luxury Bath",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFFntWxRbKZ60Hqw4I85jNCyH9TWP3KTgw87ft2wSNrve6evh5n7apixTKcSiHUom3wmSRqsD54aodrTnRrUXukfDiCT0q7j4Bir33Z_H4NLRbRHRjmTG2DlBo8WoG5jG639NnPFRgU4HgbQRLqB7kT5I3_tI6c2ymHQfDcpau1jIA55vjgINraetQz6bE2O718K3aJWmEte6Q6CKJF1bkRD62-L4yaZwz3CuGeBgMqzSEwXoJBzYXTJ64Sa20rXdugekaBoZdzZW7",
    },
    {
      title: "Home Theater",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWixuDw1DS-u7cjQcxyThDNniMj_gp-n4jhe0g59BHLbPNm3UzYMvhWEQJJfBGAqtNjVW24xe4DI2WnF6g8rO-zCQCMaj9-QAirsx-VdpkUXpp6_zCrhjP9-B_W0YvP8ONjKa1n9l8wgk0GVMfD8j6N8pASSG58ya_iMgCvnHJR48anuwPTU-fWkck0hsG6F0mzuPMZCH13lUf_vN-Pn1ANn_cGOcafUqodShuMqFPZqBNFoln1RQlRzq3PyvtDWP0d4iw23gCiTKt",
    },
    {
      title: "Terrace View",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRPwrn3IoXzCxduMahnri-h_NgEmjQk1prmxwuOeUA3B1WCQMNFmYw71lPxpr2REfso_VlYqNeOEGmRE5dPtCcSHz3-La5_36zWiKt_adj1pny_r-0GP2sbOfKsH_J1jM7XPMPAUsgRB-SRej32KlMZAirj7Wa7lpqN2IoZSEnDEJf-qdEshhRieWVtMm7VnAdJ9lXFUGyjHxxVCj8BE_4INbCCmu2Lvh905nhavqXJgReMxRQ_DVOefcL15nWMmoksZVAa6twAYbT",
    },
    {
      title: "Exterior Dusk",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2276&auto=format&fit=crop",
    },
    {
      title: "Dining Hall",
      url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop",
    },
  ]
};

export type SiteConfig = typeof siteConfig;
