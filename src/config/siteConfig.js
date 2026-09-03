/**
 * White-label content for the FIND Real Estate experience.
 * Edit titles, copy, prices, navigation, and listings here —
 * components read from this file and should not contain hardcoded strings.
 */
export const siteConfig = {
  locale: {
    lang: "fa",
    dir: "rtl",
  },

  brand: {
    name: "FIND",
    legalName: "FIND Real Estate",
    tagline: "Find What Moves You",
  },

  metadata: {
    title: "FIND Real Estate | Purchase, Rent or Sell Commercial and Residential Real Estate",
    description:
      "Expert agents. Real guidance. A clear path to find what’s next. Purchase, rent, or sell commercial and residential real estate with FIND.",
  },

  contact: {
    officeLabel: "Head Office",
    addressLine1: "5 West 37th Street, 12th Floor,",
    addressLine2: "New York, NY 10018",
    emailLabel: "Email Us",
    email: "hello@findrealestate.com",
    phoneLabel: "Call Us",
    phone: "+1 212 994 9965",
    phoneHref: "tel:+12129949965",
    emailHref: "mailto:hello@findrealestate.com",
  },

  navigation: [
    { label: "Search", href: "/#properties" },
    { label: "Agents", href: "/#agents" },
    { label: "Join", href: "/#join" },
    {
      label: "Paperwork",
      href: "/#services",
      children: [
        { label: "Mortgage Services", href: "/#support" },
        { label: "Property Management", href: "/#support" },
        { label: "Development", href: "/#support" },
      ],
    },
    {
      label: "Resources",
      href: "/#journal",
      children: [
        { label: "Blog", href: "/#journal" },
        { label: "Press", href: "/#journal" },
      ],
    },
    { label: "About", href: "/#why" },
  ],

  header: {
    signInLabel: "Sign In",
    signInHref: "/#contact",
  },

  hero: {
    heading: "Find What Moves You",
    lead: "Expert agents. Real guidance.",
    leadEmphasis: "A clear path to find what’s next.",
    ctaLabel: "Find Properties",
    ctaHref: "/#properties",
    images: {
      sky: "/images/hero/sky.jpg",
      house: "/images/hero/house.png",
      cloud: "/images/hero/cloud.png",
      smoke: "/images/hero/smoke.png",
    },
  },

  why: {
    id: "why",
    heading: "Why FIND",
    body: "Your life’s changing. Don’t just find a place — find what’s next.",
    bodyEmphasis:
      "We help you move forward with clarity, confidence, and the right agent by your side.",
    videoSrc: "/videos/why-us.mp4",
  },

  identity: {
    heading: "This isn’t just",
    headingEmphasis: "about real estate.",
    body: "It’s about identity. Progress. Getting unstuck. You’re not just looking for a place.",
    bodyEmphasis: "You’re looking for alignment. That’s what we help you find.",
    chevrons: [
      "/images/arrows/chevron-1.jpg",
      "/images/arrows/chevron-2.jpg",
      "/images/arrows/chevron-3.jpg",
      "/images/arrows/chevron-4.jpg",
    ],
  },

  process: {
    heading: "Real Estate,",
    headingEmphasis: "Rewired.",
    ctaLabel: "Start Your Search",
    ctaHref: "/#properties",
    stepsLabel: "Steps:",
    steps: [
      {
        title: "Talk to a Real Human.",
        text: "We match you with an expert who actually listens.",
      },
      {
        title: "Get Clarity.",
        text: "We define what you really need, not just what’s available.",
      },
      {
        title: "Move Forward.",
        text: "We find what fits — and make it happen.",
      },
    ],
  },

  agents: {
    id: "join",
    label: "For Agents",
    heading: "Don’t Rent Your Career.",
    headingEmphasis: "Own It.",
    body: "At FIND, our agents don’t just work for the brand—they own a part of it.",
    bodyEmphasis:
      "We give top performers real equity, so they’re invested in more than just your transaction—they're invested in your outcome. Agents are certified, supported, and equipped to deliver five-star service—because their success is tied to yours. You’re not just here to close deals — you’re building a career, a life, a legacy. We help agents find the company that gives them the support, tools, and leadership to thrive.",
    ctaLabel: "Join The Movement",
    ctaHref: "/#contact",
    portraitSmall: "/images/agents/portrait-small.jpg",
    portraitLarge: "/images/agents/portrait-large.jpg",
  },

  testimonials: {
    heading: "Don’t Take",
    headingEmphasis: "Our Word for It.",
    previewImage: "/images/agents/testimonial-preview.jpg",
    items: [
      {
        quote:
          "Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He's a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!",
        author: "Bernadette Hogan",
      },
      {
        quote:
          "Shirin was truly a blessing to work with. She helped us find our perfect condo in a great area. She was patient and very understanding. I would recommend working with her if you are in need of someone who will go out of their way to make sure you find the home of your dreams. She is honest and has a pure heart.",
        author: "Tyleen",
      },
      {
        quote:
          "Working with Mathew was an absolute pleasure, and I highly recommend him to any serious homebuyer—especially first-time buyers like myself who may feel overwhelmed by the process. From the start, Mathew’s problem-solving skills stood out. Thank you, Mathew, for making this happen—we are truly happy in our new home!",
        author: "Johanna Nieto",
      },
      {
        quote:
          "Shirin was an invaluable resource, consultant, and general guide through the home-buying process from the initial search to closing. She immediately understood what we were looking for in a home and helped tailor our search in the right direction. Shirin was quickly responsive and proactive in pushing the agenda forward through all stages with a steady, reassuring hand.",
        author: "mattmpowers",
      },
      {
        quote:
          "After 12 years in NYC, I have had my best broker experience by far with Fay Blau. Fay helped me find a beautiful apartment on the Upper West Side that fit my needs like a glove. As an Upper West Side local, she knows the neighborhood like the back of her hand. She was an excellent communicator throughout the entire process.",
        author: "Giavridis Theodore",
      },
    ],
  },

  features: {
    id: "services",
    caption: "Services",
    heading: "How FIND",
    headingEmphasis: "Can Help You",
    brief:
      "Our certified agents guide you through every stage of real estate",
    briefEmphasis: "with expert knowledge and reliable support.",
    ctaLabel: "Get Started with FIND",
    ctaHref: "/#contact",
    items: [
      {
        id: "buy",
        title: "Buy",
        description:
          "Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We’ve done this over 10,000 times, and we know what wins.",
        image: "/images/services/buy.jpg",
        href: "/#properties",
      },
      {
        id: "sell",
        title: "Sell",
        description:
          "Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs.",
        image: "/images/services/sell.jpg",
        href: "/#contact",
      },
      {
        id: "rent",
        title: "Rent",
        description:
          "Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of NYC experience, we unlock the best deals you won’t find online.",
        image: "/images/services/rent.jpg",
        href: "/#properties",
      },
    ],
  },

  support: {
    id: "support",
    heading: "Support",
    headingMiddle: "Beyond",
    headingBuy: "Buying",
    headingAnd: "and Selling",
    body: "The real estate market never stands still — and neither do we.",
    bodyEmphasis:
      "Our experts offer continued support beyond the sale, helping you maximize your investment.",
    ctaLabel: "Discover Our Services",
    ctaHref: "/#services",
    items: [
      {
        title: "Mortgage Services",
        text: "Helping you secure your dream home with flexible mortgage options.",
        image: "/images/services/mortgage.jpg",
        ctaLabel: "Learn More",
        href: "/#contact",
      },
      {
        title: "Property Management",
        text: "Let us handle the details so you can enjoy the rewards.",
        image: "/images/services/property-management.jpg",
        ctaLabel: "Learn More",
        href: "/#contact",
      },
      {
        title: "Construction and Real Estate Development",
        text: "Guiding you through the intricacies of building and developing properties with expert insight and support.",
        image: "/images/services/development.jpg",
        ctaLabel: "Learn More",
        href: "/#contact",
      },
    ],
  },

  properties: {
    id: "properties",
    caption: "Listings",
    heading: "Featured",
    headingEmphasis: "Residences",
    body: "Photography-led homes selected for light, neighborhood, and the way you actually want to live.",
    viewAllLabel: "View All Properties",
    viewAllHref: "/search",
    bedsLabel: "Beds",
    bathsLabel: "Baths",
    areaLabel: "sqft",
    items: [
      {
        id: "listing-01",
        title: "One57, 157 West 57th Street",
        neighborhood: "Midtown West",
        address: "157 West 57th Street, New York, NY",
        price: "$18,500,000",
        beds: 4,
        baths: 4.5,
        area: "4,210",
        type: "Condo",
        status: "For Sale",
        image: "/images/properties/listing-01.jpg",
        href: "/search",
        featured: true,
      },
      {
        id: "listing-02",
        title: "432 Park Avenue",
        neighborhood: "Midtown East",
        address: "432 Park Avenue, New York, NY",
        price: "$24,750,000",
        beds: 5,
        baths: 5.5,
        area: "5,080",
        type: "Condo",
        status: "For Sale",
        image: "/images/properties/listing-02.jpg",
        href: "/search",
        featured: true,
      },
      {
        id: "listing-03",
        title: "15 Central Park West",
        neighborhood: "Upper West Side",
        address: "15 Central Park West, New York, NY",
        price: "$32,000,000",
        beds: 4,
        baths: 5,
        area: "4,640",
        type: "Condo",
        status: "For Sale",
        image: "/images/properties/listing-03.jpg",
        href: "/search",
        featured: true,
      },
      {
        id: "listing-04",
        title: "220 Central Park South",
        neighborhood: "Central Park South",
        address: "220 Central Park South, New York, NY",
        price: "$41,250,000",
        beds: 5,
        baths: 6,
        area: "6,120",
        type: "Condo",
        status: "For Sale",
        image: "/images/properties/listing-04.jpg",
        href: "/search",
        featured: true,
      },
      {
        id: "listing-05",
        title: "The Greenwich Lane",
        neighborhood: "West Village",
        address: "140 West 12th Street, New York, NY",
        price: "$9,850,000",
        beds: 3,
        baths: 3.5,
        area: "2,940",
        type: "Condo",
        status: "For Sale",
        image: "/images/properties/listing-05.jpg",
        href: "/search",
        featured: true,
      },
      {
        id: "listing-06",
        title: "70 Vestry Street",
        neighborhood: "Tribeca",
        address: "70 Vestry Street, New York, NY",
        price: "$14,200,000",
        beds: 4,
        baths: 4,
        area: "3,780",
        type: "Condo",
        status: "For Sale",
        image: "/images/properties/listing-06.jpg",
        href: "/search",
        featured: true,
      },
      {
        id: "listing-07",
        title: "200 East 59th Street",
        neighborhood: "Sutton Place",
        address: "200 East 59th Street, New York, NY",
        price: "$6,450,000",
        beds: 3,
        baths: 3,
        area: "2,180",
        type: "Condo",
        status: "For Sale",
        image: "/images/properties/listing-07.jpg",
        href: "/search",
        featured: false,
      },
      {
        id: "listing-08",
        title: "111 Murray Street",
        neighborhood: "Tribeca",
        address: "111 Murray Street, New York, NY",
        price: "$11,900,000",
        beds: 4,
        baths: 4.5,
        area: "3,410",
        type: "Condo",
        status: "For Sale",
        image: "/images/properties/listing-08.jpg",
        href: "/search",
        featured: false,
      },
      {
        id: "listing-09",
        title: "The Woolworth Tower Residences",
        neighborhood: "Financial District",
        address: "2 Park Place, New York, NY",
        price: "$8,750,000",
        beds: 3,
        baths: 3.5,
        area: "2,760",
        type: "Condo",
        status: "For Sale",
        image: "/images/properties/listing-09.jpg",
        href: "/search",
        featured: false,
      },
    ],
  },

  journal: {
    id: "journal",
    heading: "Blog",
    headingAmp: "&",
    headingResources: "Resources",
    body: "See how we’ve helped clients achieve their real estate dreams, one successful move at a time.",
    ctaLabel: "Visit Our Blog",
    ctaHref: "/#journal",
    readMoreLabel: "Read More",
    posts: [
      {
        date: "2026-09-02",
        title:
          "FIND Real Estate Featured in Redfin: What It Really Costs to Live in Harry Styles’ Neighborhood",
        excerpt:
          "A look at the housing prices, everyday expenses, and lifestyle costs in Harry Styles’ neighborhood.",
        image: "/images/blog/harry-styles-neighborhood.png",
        href: "/#journal",
      },
      {
        date: "2026-04-13",
        title: "Q1 2026 NYC Market Report",
        excerpt:
          "Q1 2026 saw strong rental demand, active sales, and shifting pricing across NYC. Here’s what it means heading into the spring market.",
        image: "/images/blog/nyc-market-report.png",
        href: "/#journal",
      },
      {
        date: "2026-04-01",
        title: "Philly Real Estate: A Winter Chill or a Spring Opportunity?",
        excerpt:
          "Record-low listings and steady price growth define a unique February for the Philadelphia Metro.",
        image: "/images/blog/philly-market.png",
        href: "/#journal",
      },
    ],
  },

  cta: {
    id: "contact",
    heading: "Find You.",
    headingEmphasis: "We’ll Help You Get There.",
    ctaLabel: "Let’s Get Started",
    ctaHref: "/#contact",
    background: "/images/hero/cta-skyline.jpg",
  },

  footer: {
    newsletterTitle: "Subscribe to our Newsletter!",
    newsletterPlaceholder: "Email address",
    newsletterSubmit: "Subscribe",
    nav: [
      { label: "Search", href: "/#properties" },
      { label: "Agents", href: "/#agents" },
      { label: "Join", href: "/#join" },
      { label: "About Us", href: "/#why" },
      { label: "Agent Portal", href: "/#join" },
    ],
    social: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Youtube", href: "https://youtube.com" },
      { label: "Linkedin", href: "https://linkedin.com" },
    ],
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Fair Housing Notice", href: "#" },
      { label: "Reasonable Accommodation Notice", href: "#" },
      { label: "Operating Procedure", href: "#" },
      { label: "Press", href: "/#journal" },
    ],
    vouchers: [
      "Housing Choice Vouchers Welcome",
      "Se Aceptan Vales de Elección de Vivienda",
    ],
    copyrightPrefix: "Copyright ©",
    copyrightYear: "2026",
  },

  searchPage: {
    heading: "Search Properties",
    subheading: "Filter by neighborhood, price, and the way you want to live.",
    filtersLabel: "Filters",
    neighborhoodsLabel: "Neighborhoods",
    forSaleLabel: "For Sale",
    priceLabel: "Price",
    bedsBathsLabel: "Beds & Baths",
    resultsSuffix: "Results",
    sortLabel: "Sort:",
    sortNewest: "Newest",
  },

  forms: {
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Enter your phone",
    messageLabel: "Message",
    messagePlaceholder: "Write your message",
    sendLabel: "Send",
  },
};

export default siteConfig;
