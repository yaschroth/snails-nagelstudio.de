// S NAILS Nagelstudio Freiburg Configuration

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "S NAILS",
    tagline: "NAGELSTUDIO FREIBURG IM BREISGAU",
    motto: "Nägel, Wimpern & Augenbrauen",
    description: "Ihr professionelles Nagelstudio in Freiburg. Wir bieten erstklassige Nagelpflege, Nageldesign, Wimpernverlängerung und Augenbrauenbehandlungen.",
    foundingYear: 2018,
    yearsExperience: 7,
    yearsInCenter: 7,
    satisfiedClients: "500+",
    productBrands: ["Premium Gel", "Shellac"],
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "+49 761 123 4567",
    phoneLink: "tel:+497611234567",
    email: "info@snails-freiburg.de",
    whatsapp: "+49 761 123 4567",
    whatsappLink: "https://wa.me/497611234567",
    address: {
      street: "Musterstraße 1",
      city: "Freiburg im Breisgau",
      district: "Innenstadt",
      zip: "79098",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.5!2d7.8494!3d47.9959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911b5c5b5b5b5b%3A0x0!2sFreiburg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Nagelstudio+Freiburg",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/nagelstudiofreiburg_snails",
    facebook: "",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Fr 09:00-18:00",
    saturday: "Sa 09:00-14:00",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung",
    display: "Mo-Sa nach Vereinbarung",
  },

  // ============================================
  // BOOKING
  // ============================================
  booking: {
    url: "https://www.instagram.com/nagelstudiofreiburg_snails",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 5.0,
    count: "100+",
    googleReviewLink: "https://www.google.com/search?q=s+nails+freiburg+bewertungen",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Das S NAILS Team",
    fullName: "S NAILS Team",
    image: "/beauty/maniküre 3.png",
    bio: [
      "Willkommen bei S NAILS! Wir sind Ihr Spezialist für professionelle Nagelpflege und Nageldesign in Freiburg im Breisgau.",
      "Ob Gelnägel, Shellac, Maniküre oder Pediküre: Bei uns bekommen Sie perfekt gepflegte Nägel mit kreativen Designs nach Ihren Wünschen.",
      "Zusätzlich bieten wir Wimpernverlängerung und Augenbrauenbehandlungen an. Vereinbaren Sie noch heute Ihren Termin!",
    ],
    certifications: [
      { label: "Zertifizierte Nageldesigner", icon: "award" },
      { label: "Premium Produkte", icon: "star" },
      { label: "Höchste Hygiene", icon: "shield" },
      { label: "500+ zufriedene Kunden", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Kundin",
      rating: 5,
      text: "Die besten Gelnägel in Freiburg! Perfekte Form und das Design hält ewig. Sehr professionell und freundlich.",
      service: "Gelnägel",
      date: "Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "Endlich ein Nagelstudio, das auch bei schwierigen Nägeln perfekte Ergebnisse liefert. Komme immer wieder gerne!",
      service: "Nagelmodellage",
      date: "Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "Tolle Maniküre und wunderschönes Nageldesign. Die Beratung war super und das Ergebnis noch besser!",
      service: "Maniküre",
      date: "Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "Professionelle Wimpernverlängerung zu fairen Preisen. Sieht total natürlich aus und hält sehr gut.",
      service: "Wimpernverlängerung",
      date: "Bewertung",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Gelnägel",
      description: "Perfekte Gelnägel mit langanhaltender Haltbarkeit. Neumodellage und Auffüllung in allen Farben und Designs.",
      price: "ab 45€",
      image: "/beauty/maniküre 3.png",
      benefits: ["Langanhaltend", "Kreativ"],
    },
    {
      title: "Shellac / Gel Polish",
      description: "Brillante Farben mit Hochglanz-Finish. Hält bis zu 3 Wochen ohne Absplittern.",
      price: "ab 35€",
      image: "/beauty/maniküre neu.png",
      benefits: ["Hochglanz", "Schonend"],
    },
    {
      title: "Maniküre",
      description: "Klassische und Spa-Maniküre für gepflegte Hände. Mit Peeling, Massage und Lackierung.",
      price: "ab 25€",
      image: "/beauty/color.png",
      benefits: ["Pflegend", "Entspannend"],
    },
    {
      title: "Pediküre",
      description: "Professionelle Fußpflege mit Hornhautentfernung, Nagelpflege und optionaler Lackierung.",
      price: "ab 35€",
      image: "/beauty/pedicure.webp",
      benefits: ["Gründlich", "Gepflegt"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Traumhaft volle Wimpern für einen verführerischen Blick. Klassisch, 2D oder Volume Lashes.",
      price: "ab 89€",
      image: "/beauty/wimpern.png",
      benefits: ["Natürlich", "Voluminös"],
    },
    {
      title: "Augenbrauen",
      description: "Perfekt geformte Augenbrauen. Zupfen, Färben, Waxing und Brow Lifting.",
      price: "ab 15€",
      image: "/beauty/eyebrow-after.png",
      benefits: ["Präzise", "Formgebend"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Gelnägel",
      items: [
        { name: "Neumodellage Gel", price: "55€" },
        { name: "Neumodellage mit Design", price: "65€" },
        { name: "Auffüllung Gel", price: "45€" },
        { name: "Auffüllung mit Design", price: "55€" },
        { name: "Gel entfernen", price: "15€" },
        { name: "Reparatur pro Nagel", price: "5€" },
      ],
    },
    {
      category: "Maniküre",
      items: [
        { name: "Klassische Maniküre", price: "25€" },
        { name: "Spa Maniküre", price: "35€" },
        { name: "Shellac Maniküre", price: "40€" },
        { name: "Maniküre mit Gellack", price: "45€" },
        { name: "French Maniküre", price: "50€" },
        { name: "Nagellack wechseln", price: "15€" },
      ],
    },
    {
      category: "Pediküre",
      items: [
        { name: "Klassische Pediküre", price: "35€" },
        { name: "Wellness Pediküre", price: "45€" },
        { name: "Pediküre mit Shellac", price: "50€" },
        { name: "Pediküre mit Gellack", price: "55€" },
        { name: "Fußnägel lackieren", price: "20€" },
      ],
    },
    {
      category: "Nageldesign",
      items: [
        { name: "French Design", price: "+10€" },
        { name: "Glitzer / Folien", price: "+8€" },
        { name: "Steinchen pro Stück", price: "+2€" },
        { name: "Nail Art pro Nagel", price: "+5€" },
        { name: "Fullcover Design", price: "+15€" },
      ],
    },
    {
      category: "Wimpern",
      items: [
        { name: "Klassische Wimpern", price: "89€" },
        { name: "2D Volume Wimpern", price: "109€" },
        { name: "3D Volume Wimpern", price: "129€" },
        { name: "Wimpern Auffüllung", price: "55€" },
        { name: "Lash Lifting", price: "49€" },
        { name: "Wimpern entfernen", price: "20€" },
      ],
    },
    {
      category: "Augenbrauen",
      items: [
        { name: "Augenbrauen zupfen", price: "15€" },
        { name: "Augenbrauen waxen", price: "12€" },
        { name: "Augenbrauen färben", price: "12€" },
        { name: "Zupfen & Färben", price: "22€" },
        { name: "Brow Lifting", price: "45€" },
        { name: "Brow Lifting inkl. Färben", price: "55€" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/maniküre 3.png",
    heroAlt: "S NAILS Nagelstudio Freiburg",
    hygiene: "/beauty/maniküre neu.png",
    gallery: [
      { url: "/beauty/maniküre 3.png", category: "Gelnägel" },
      { url: "/beauty/maniküre neu.png", category: "Nageldesign" },
      { url: "/beauty/color.png", category: "Maniküre" },
      { url: "/beauty/pedicure.webp", category: "Pediküre" },
      { url: "/beauty/wimpern.png", category: "Wimpern" },
      { url: "/beauty/eyebrow-after.png", category: "Augenbrauen" },
    ],
  },

  // ============================================
  // COLORS (Theme) Rose Pink / Blush
  // ============================================
  colors: {
    primary: "#E8A0B5",
    primaryRgb: "232, 160, 181",
    dark: "#1A1A1A",
    light: "#FDF8FA",
    lightAlt: "#F9F0F3",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Qualität & Hygiene",
    description: "Bei S NAILS arbeiten wir mit höchsten Hygienestandards und ausschließlich Premium-Produkten für perfekte Ergebnisse.",
    features: [
      {
        icon: "shield",
        title: "Sterilisierte Werkzeuge",
        description: "Alle Instrumente werden nach jeder Behandlung desinfiziert und sterilisiert.",
      },
      {
        icon: "star",
        title: "Premium Produkte",
        description: "Wir verwenden nur hochwertige Gele und Lacke von renommierten Marken.",
      },
      {
        icon: "award",
        title: "Zertifizierte Nageldesigner",
        description: "Unser Team ist professionell ausgebildet und regelmäßig geschult.",
      },
      {
        icon: "check",
        title: "Individuelle Beratung",
        description: "Wir nehmen uns Zeit für Ihre Wünsche und beraten Sie persönlich.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "/logo.png",
    alt: "S NAILS Nagelstudio Logo",
  },
};

export type Config = typeof config;
