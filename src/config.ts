// S NAILS Nagelstudio Freiburg Configuration

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "S NAILS",
    tagline: "NAGELSTUDIO FREIBURG IM BREISGAU",
    motto: "Nägel, Wimpern & Augenbrauen",
    description: "S NAILS & BEAUTY ist ein exklusives Schönheitssalon in Freiburg. Wir bieten Nagelmodellage, Wimpernverlängerungen von 1D bis 6D, Microblading und Permanent Make-up.",
    foundingYear: 2015,
    yearsExperience: 10,
    yearsInCenter: 10,
    satisfiedClients: "500+",
    productBrands: ["Premium Gel", "Acryl", "Shellac"],
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "+49 1520 5209696",
    phoneLink: "tel:+4915205209696",
    email: "trendnails_americanstyle@yahoo.de",
    whatsapp: "+49 1520 5209696",
    whatsappLink: "https://wa.me/4915205209696",
    address: {
      street: "Brunnenstraße 6",
      city: "Freiburg im Breisgau",
      district: "Innenstadt",
      zip: "79098",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.5!2d7.8476764!3d47.9958743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911b5c5b5b5b5b%3A0x0!2sBrunnenstra%C3%9Fe%206%2C%2079098%20Freiburg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Brunnenstraße+6,+79098+Freiburg+im+Breisgau",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/nagelstudiofreiburg_snails",
    facebook: "https://www.facebook.com/SNails79098",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Fr 09:30-19:30",
    saturday: "Sa 09:30-19:30",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung",
    display: "Mo-Sa 09:30-19:30",
  },

  // ============================================
  // BOOKING
  // ============================================
  booking: {
    url: "https://wa.me/4915205209696",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 4.8,
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
      "Willkommen bei S NAILS & BEAUTY! Wir sind Ihr exklusives Schönheitssalon in Freiburg im Breisgau.",
      "Unser Angebot umfasst professionelle Nagelmodellage, Wimpernverlängerungen von 1D bis 6D, Microblading und Permanent Make-up. Wir arbeiten mit hochwertigen Produkten direkt aus den USA.",
      "Bei uns stehen Qualität, Sauberkeit und Hygiene an erster Stelle. Vereinbaren Sie noch heute Ihren Termin!",
    ],
    certifications: [
      { label: "Zertifizierte Nageldesigner", icon: "award" },
      { label: "PMU Experten", icon: "star" },
      { label: "Höchste Hygiene", icon: "shield" },
      { label: "4.8 Sterne Bewertung", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS (Real reviews from ThreeBestRated)
  // ============================================
  testimonials: [
    {
      name: "Kundin",
      rating: 5,
      text: "Es ist immer ein Vergnügen, in den S Nails Salon zu gehen. Sarah und das Team haben immer einen guten Job gemacht. Ich bin immer zufrieden mit ihrer Arbeit.",
      service: "Nagelmodellage",
      date: "Google Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "War heute zum ersten Mal hier. Sehr nettes und freundliches Personal. Die Nägel sind toll geworden! Vielen Dank, ich werde gerne wiederkommen.",
      service: "Gelnägel",
      date: "Google Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "Ich kam spontan für eine Pediküre hierher. Ich wurde freundlich begrüßt. Die Arbeit wurde sauber ausgeführt. Ich habe mich wohl gefühlt.",
      service: "Pediküre",
      date: "Google Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "Sehr professionelles Studio! Die Wimpernverlängerung sieht fantastisch aus. Höchste Hygienestandards.",
      service: "Wimpernverlängerung",
      date: "Google Bewertung",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Nagelmodellage",
      description: "Professionelle Nagelmodellage mit Gel oder Acryl. Neuanlage und Auffüllung in allen Farben und Designs.",
      price: "ab 40€",
      image: "/beauty/maniküre 3.png",
      benefits: ["Langanhaltend", "Kreativ"],
    },
    {
      title: "Russische Maniküre",
      description: "Perfekte Nagelpflege mit der beliebten russischen Technik für makellose Ergebnisse.",
      price: "ab 35€",
      image: "/beauty/maniküre neu.png",
      benefits: ["Präzise", "Professionell"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Traumhaft volle Wimpern von 1D bis 6D Volume. Natürlich bis glamourös nach Ihren Wünschen.",
      price: "ab 89€",
      image: "/beauty/wimpern.png",
      benefits: ["1D-6D Volume", "Langanhaltend"],
    },
    {
      title: "Microblading",
      description: "Perfekt definierte Augenbrauen mit natürlicher Härchenzeichnung. Langanhaltende Ergebnisse.",
      price: "ab 250€",
      image: "/beauty/eyebrow-after.png",
      benefits: ["Natürlich", "Langanhaltend"],
    },
    {
      title: "Permanent Make-up",
      description: "Professionelles Permanent Make-up für Augenbrauen, Lidstrich und Lippen.",
      price: "ab 200€",
      image: "/beauty/face.jpg",
      benefits: ["Dauerhaft", "Professionell"],
    },
    {
      title: "Pediküre",
      description: "Professionelle Fußpflege mit Nagelpflege, Hornhautentfernung und optionaler Lackierung.",
      price: "ab 35€",
      image: "/beauty/pedicure.webp",
      benefits: ["Gründlich", "Gepflegt"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Nagelmodellage",
      items: [
        { name: "Neumodellage Gel/Acryl Natur", price: "40€" },
        { name: "Neumodellage mit Farbe/French", price: "45€" },
        { name: "Auffüllung Natur", price: "35€" },
        { name: "Auffüllung mit Farbe/French", price: "40€" },
        { name: "Nagelreparatur pro Nagel", price: "5€" },
        { name: "Gel/Acryl entfernen", price: "15€" },
      ],
    },
    {
      category: "Maniküre",
      items: [
        { name: "Klassische Maniküre", price: "25€" },
        { name: "Russische Maniküre", price: "35€" },
        { name: "Maniküre mit Shellac", price: "40€" },
        { name: "Französische Maniküre", price: "45€" },
        { name: "Nagellack wechseln", price: "15€" },
      ],
    },
    {
      category: "Pediküre",
      items: [
        { name: "Klassische Pediküre", price: "35€" },
        { name: "Wellness Pediküre", price: "45€" },
        { name: "Pediküre mit Shellac", price: "50€" },
        { name: "Fußnägel lackieren", price: "20€" },
      ],
    },
    {
      category: "Wimpernverlängerung",
      items: [
        { name: "Klassische Wimpern 1D", price: "89€" },
        { name: "Volume Wimpern 2D-3D", price: "109€" },
        { name: "Volume Wimpern 4D-6D", price: "129€" },
        { name: "Wimpern Auffüllung", price: "55€" },
        { name: "Wimpern entfernen", price: "20€" },
      ],
    },
    {
      category: "Permanent Make-up",
      items: [
        { name: "Microblading Augenbrauen", price: "250€" },
        { name: "Powder Brows", price: "280€" },
        { name: "Lidstrich oben", price: "200€" },
        { name: "Lippen Kontur", price: "250€" },
        { name: "Lippen Vollschattierung", price: "350€" },
        { name: "Auffrischung", price: "ab 100€" },
      ],
    },
    {
      category: "Augenbrauen",
      items: [
        { name: "Augenbrauen zupfen", price: "12€" },
        { name: "Augenbrauen waxen", price: "10€" },
        { name: "Augenbrauen färben", price: "12€" },
        { name: "Zupfen & Färben", price: "20€" },
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
      { url: "/beauty/maniküre 3.png", category: "Nagelmodellage" },
      { url: "/beauty/maniküre neu.png", category: "Nageldesign" },
      { url: "/beauty/color.png", category: "Maniküre" },
      { url: "/beauty/pedicure.webp", category: "Pediküre" },
      { url: "/beauty/wimpern.png", category: "Wimpern" },
      { url: "/beauty/eyebrow-after.png", category: "Microblading" },
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
    description: "Bei S NAILS arbeiten wir mit höchsten Hygienestandards. Wir verwenden hochwertige Produkte direkt aus den USA für perfekte Ergebnisse.",
    features: [
      {
        icon: "shield",
        title: "Sterilisierte Werkzeuge",
        description: "Alle Instrumente werden nach jeder Behandlung desinfiziert und sterilisiert.",
      },
      {
        icon: "star",
        title: "US Premium Produkte",
        description: "Wir arbeiten mit hochwertigen Produkten direkt aus den USA.",
      },
      {
        icon: "award",
        title: "Zertifiziertes Team",
        description: "Unser Team ist professionell ausgebildet und regelmäßig geschult.",
      },
      {
        icon: "check",
        title: "4.8 Sterne Bewertung",
        description: "Über 100 zufriedene Kundinnen bewerten uns mit 4.8 Sternen.",
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
