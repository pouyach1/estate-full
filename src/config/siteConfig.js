import { photos } from "./photos";

/**
 * White-label content for the marketing site.
 * Edit titles, copy, prices, navigation, and listings here —
 * components read from this file and should not contain hardcoded strings.
 *
 * Switch `locale.lang` to "fa" and `locale.dir` to "rtl" to run the same
 * layout in Persian (Vazirmatn is already wired in layout.jsx).
 */
export const siteConfig = {
  locale: {
    lang: "en",
    dir: "ltr",
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
    { label: "Search", href: "/search" },
    { label: "Agents", href: "/agents" },
    { label: "Join", href: "/join" },
    {
      label: "Paperwork",
      href: "/services",
      children: [
        { label: "Mortgage Services", href: "/services#mortgage" },
        { label: "Property Management", href: "/services#management" },
        { label: "Development", href: "/services#development" },
      ],
    },
    {
      label: "Resources",
      href: "/blog",
      children: [
        { label: "Blog", href: "/blog" },
        { label: "Press", href: "/blog" },
      ],
    },
    { label: "About", href: "/about" },
  ],

  header: {
    signInLabel: "Sign In",
    signInHref: "/contact",
  },

  hero: {
    heading: "Find What Moves You",
    lead: "Expert agents. Real guidance.",
    leadEmphasis: "A clear path to find what’s next.",
    ctaLabel: "Find Properties",
    ctaHref: "/search",
    images: {
      sky: photos.sky,
      house: photos.house,
      cloud: photos.cloud,
      smoke: photos.fog,
    },
  },

  why: {
    id: "why",
    heading: "Why FIND",
    body: "Your life’s changing. Don’t just find a place — find what’s next.",
    bodyEmphasis:
      "We help you move forward with clarity, confidence, and the right agent by your side.",
    image: photos.why,
    videoSrc: "",
  },

  identity: {
    heading: "This isn’t just",
    headingEmphasis: "about real estate.",
    body: "It’s about identity. Progress. Getting unstuck. You’re not just looking for a place.",
    bodyEmphasis: "You’re looking for alignment. That’s what we help you find.",
    chevrons: [photos.chevron1, photos.chevron2, photos.chevron3, photos.chevron4],
  },

  process: {
    heading: "Real Estate,",
    headingEmphasis: "Rewired.",
    ctaLabel: "Start Your Search",
    ctaHref: "/search",
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
    ctaHref: "/join",
    portraitSmall: photos.agentSmall,
    portraitLarge: photos.agentLarge,
    directoryHeading: "Meet the team",
    directoryEmphasis: "that actually listens.",
    directoryBody:
      "Certified, neighborhood-fluent agents who stay with you from the first conversation through closing.",
    people: [
      {
        id: "michael",
        name: "Michael Chen",
        title: "Senior Broker",
        neighborhood: "Midtown & Hudson Yards",
        email: "michael@findrealestate.com",
        phone: "+1 212 994 9901",
        image: photos.portrait1,
        bio: "Michael is a workaholic in the best way — available morning, noon, and night, and relentless about neighborhood fit, price, and light.",
      },
      {
        id: "shirin",
        name: "Shirin Rahimi",
        title: "Associate Broker",
        neighborhood: "Downtown & Brooklyn",
        email: "shirin@findrealestate.com",
        phone: "+1 212 994 9902",
        image: photos.portrait2,
        bio: "Shirin is patient, precise, and unusually honest. She tailors the search to how you actually live — not a generic filter set.",
      },
      {
        id: "mathew",
        name: "Mathew Cole",
        title: "Buyer Specialist",
        neighborhood: "First-time buyers, citywide",
        email: "mathew@findrealestate.com",
        phone: "+1 212 994 9903",
        image: photos.portrait3,
        bio: "Mathew is the problem-solver first-time buyers want in the room. He translates a messy market into a clear next step.",
      },
      {
        id: "fay",
        name: "Fay Blau",
        title: "Upper West Side Lead",
        neighborhood: "Upper West Side",
        email: "fay@findrealestate.com",
        phone: "+1 212 994 9904",
        image: photos.portrait4,
        bio: "An Upper West Side local who knows the blocks like the back of her hand — and communicates like a partner, not a pitch.",
      },
    ],
  },

  testimonials: {
    heading: "Don’t Take",
    headingEmphasis: "Our Word for It.",
    previewImage: photos.testimonial,
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
    ctaHref: "/contact",
    items: [
      {
        id: "buy",
        title: "Buy",
        description:
          "Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We’ve done this over 10,000 times, and we know what wins.",
        image: photos.buy,
        href: "/search",
      },
      {
        id: "sell",
        title: "Sell",
        description:
          "Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs.",
        image: photos.sell,
        href: "/contact",
      },
      {
        id: "rent",
        title: "Rent",
        description:
          "Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of NYC experience, we unlock the best deals you won’t find online.",
        image: photos.rent,
        href: "/search",
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
    ctaHref: "/services",
    items: [
      {
        id: "mortgage",
        title: "Mortgage Services",
        text: "Helping you secure your dream home with flexible mortgage options.",
        image: photos.mortgage,
        ctaLabel: "Learn More",
        href: "/contact",
      },
      {
        id: "management",
        title: "Property Management",
        text: "Let us handle the details so you can enjoy the rewards.",
        image: photos.management,
        ctaLabel: "Learn More",
        href: "/contact",
      },
      {
        id: "development",
        title: "Construction and Real Estate Development",
        text: "Guiding you through the intricacies of building and developing properties with expert insight and support.",
        image: photos.development,
        ctaLabel: "Learn More",
        href: "/contact",
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
    inquireLabel: "Request a tour",
    similarLabel: "Similar residences",
    items: [
      {
        id: "listing-01",
        title: "One57, 157 West 57th Street",
        neighborhood: "Midtown West",
        address: "157 West 57th Street, New York, NY",
        price: "$18,500,000",
        priceValue: 18500000,
        beds: 4,
        baths: 4.5,
        area: "4,210",
        type: "Condo",
        status: "For Sale",
        year: 2014,
        agentId: "michael",
        image: photos.listing01,
        gallery: [photos.listing01, photos.listing01b, photos.listing01c],
        href: "/properties/listing-01",
        featured: true,
        description:
          "A high-floor One57 residence with Central Park on axis, a chef’s kitchen, and a primary suite that lives like a hotel penthouse. Light is the amenity here — morning east, sunset west.",
        amenities: ["Doorman", "Private terrace", "Wine cellar", "Fitness"],
      },
      {
        id: "listing-02",
        title: "432 Park Avenue",
        neighborhood: "Midtown East",
        address: "432 Park Avenue, New York, NY",
        price: "$24,750,000",
        priceValue: 24750000,
        beds: 5,
        baths: 5.5,
        area: "5,080",
        type: "Condo",
        status: "For Sale",
        year: 2015,
        agentId: "shirin",
        image: photos.listing02,
        gallery: [photos.listing02, photos.listing01b, photos.listing04],
        href: "/properties/listing-02",
        featured: true,
        description:
          "A full-floor 432 Park home with 12.5-foot ceilings and a living room that feels like a gallery. Quiet, exacting, and built for someone who already knows what they want.",
        amenities: ["Full-floor", "Concierge", "Pool", "Private elevator"],
      },
      {
        id: "listing-03",
        title: "15 Central Park West",
        neighborhood: "Upper West Side",
        address: "15 Central Park West, New York, NY",
        price: "$32,000,000",
        priceValue: 32000000,
        beds: 4,
        baths: 5,
        area: "4,640",
        type: "Condo",
        status: "For Sale",
        year: 2008,
        agentId: "fay",
        image: photos.listing03,
        gallery: [photos.listing03, photos.listing05, photos.listing01c],
        href: "/properties/listing-03",
        featured: true,
        description:
          "Pre-war manners, modern systems. A 15 CPW classic with park frontage, a library, and the kind of staff that makes a building feel like a private club.",
        amenities: ["Park views", "Library", "Staff room", "Wine storage"],
      },
      {
        id: "listing-04",
        title: "220 Central Park South",
        neighborhood: "Central Park South",
        address: "220 Central Park South, New York, NY",
        price: "$41,250,000",
        priceValue: 41250000,
        beds: 5,
        baths: 6,
        area: "6,120",
        type: "Condo",
        status: "For Sale",
        year: 2019,
        agentId: "michael",
        image: photos.listing04,
        gallery: [photos.listing04, photos.listing02, photos.listing08],
        href: "/properties/listing-04",
        featured: true,
        description:
          "A 220 CPS trophy with a limestone presence and interiors that don’t try too hard. The park is the artwork. Everything else is restraint.",
        amenities: ["Limestone facade", "Park terrace", "Spa", "Private dining"],
      },
      {
        id: "listing-05",
        title: "The Greenwich Lane",
        neighborhood: "West Village",
        address: "140 West 12th Street, New York, NY",
        price: "$9,850,000",
        priceValue: 9850000,
        beds: 3,
        baths: 3.5,
        area: "2,940",
        type: "Condo",
        status: "For Sale",
        year: 2017,
        agentId: "shirin",
        image: photos.listing05,
        gallery: [photos.listing05, photos.listing07, photos.listing01b],
        href: "/properties/listing-05",
        featured: true,
        description:
          "West Village scale with condominium ease. Garden light, a proper kitchen, and a layout that works for a couple who actually cooks.",
        amenities: ["Garden", "Fireplace", "Bike storage", "Fitness"],
      },
      {
        id: "listing-06",
        title: "70 Vestry Street",
        neighborhood: "Tribeca",
        address: "70 Vestry Street, New York, NY",
        price: "$14,200,000",
        priceValue: 14200000,
        beds: 4,
        baths: 4,
        area: "3,780",
        type: "Condo",
        status: "For Sale",
        year: 2018,
        agentId: "mathew",
        image: photos.listing06,
        gallery: [photos.listing06, photos.listing08, photos.listing03],
        href: "/properties/listing-06",
        featured: true,
        description:
          "A river-facing Tribeca loft-condo: wide rooms, serious storage, and a kitchen that can host. Quiet at night. Alive by day.",
        amenities: ["River views", "Chef’s kitchen", "Storage", "Doorman"],
      },
      {
        id: "listing-07",
        title: "200 East 59th Street",
        neighborhood: "Sutton Place",
        address: "200 East 59th Street, New York, NY",
        price: "$6,450,000",
        priceValue: 6450000,
        beds: 3,
        baths: 3,
        area: "2,180",
        type: "Condo",
        status: "For Sale",
        year: 2016,
        agentId: "mathew",
        image: photos.listing07,
        gallery: [photos.listing07, photos.listing05, photos.listing09],
        href: "/properties/listing-07",
        featured: false,
        description:
          "Sutton Place convenience without the stuffiness. A bright three-bed with a real dining room and a layout that still works for a family.",
        amenities: ["Dining room", "Washer/dryer", "Concierge", "Roof deck"],
      },
      {
        id: "listing-08",
        title: "111 Murray Street",
        neighborhood: "Tribeca",
        address: "111 Murray Street, New York, NY",
        price: "$11,900,000",
        priceValue: 11900000,
        beds: 4,
        baths: 4.5,
        area: "3,410",
        type: "Condo",
        status: "For Sale",
        year: 2018,
        agentId: "shirin",
        image: photos.listing08,
        gallery: [photos.listing08, photos.listing06, photos.listing02],
        href: "/properties/listing-08",
        featured: false,
        description:
          "Glass, height, and a Tribeca address. Four bedrooms that live larger than the floor plan suggests, with harbor light all afternoon.",
        amenities: ["Harbor views", "Pool", "Playroom", "Parking"],
      },
      {
        id: "listing-09",
        title: "The Woolworth Tower Residences",
        neighborhood: "Financial District",
        address: "2 Park Place, New York, NY",
        price: "$8,750,000",
        priceValue: 8750000,
        beds: 3,
        baths: 3.5,
        area: "2,760",
        type: "Condo",
        status: "For Sale",
        year: 2019,
        agentId: "fay",
        image: photos.listing09,
        gallery: [photos.listing09, photos.listing01, photos.listing07],
        href: "/properties/listing-09",
        featured: false,
        description:
          "A historic tower, a modern residence. Gothic bones, quiet interiors, and a Financial District location that is suddenly very livable.",
        amenities: ["Historic tower", "High ceilings", "Fitness", "Storage"],
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
    ctaHref: "/blog",
    readMoreLabel: "Read More",
    posts: [
      {
        slug: "harry-styles-neighborhood",
        date: "2026-09-02",
        title:
          "FIND Real Estate Featured in Redfin: What It Really Costs to Live in Harry Styles’ Neighborhood",
        excerpt:
          "A look at the housing prices, everyday expenses, and lifestyle costs in Harry Styles’ neighborhood.",
        image: photos.blog1,
        href: "/blog/harry-styles-neighborhood",
        paragraphs: [
          "Neighborhoods become famous for a reason — and then the prices follow. We pulled listing history, rent comps, and everyday costs to show what it actually takes to live on those blocks, not just visit them.",
          "The takeaway is not that the neighborhood is out of reach. It is that “vibe” is a real search filter: walkability, light, and a park within ten minutes change what people will pay. That is how we rank homes for clients who describe a feeling before they describe a floor plan.",
        ],
      },
      {
        slug: "q1-2026-nyc-market-report",
        date: "2026-04-13",
        title: "Q1 2026 NYC Market Report",
        excerpt:
          "Q1 2026 saw strong rental demand, active sales, and shifting pricing across NYC. Here’s what it means heading into the spring market.",
        image: photos.blog2,
        href: "/blog/q1-2026-nyc-market-report",
        paragraphs: [
          "Inventory stayed tight. Serious buyers who were underwritten early still closed. The spring market will reward people who already know their neighborhood — and punish people who are still browsing every borough.",
          "If you are selling, staging and pricing are not optional this cycle. If you are buying, we want you talking to a human before you fall in love with a listing photo.",
        ],
      },
      {
        slug: "philly-winter-chill",
        date: "2026-04-01",
        title: "Philly Real Estate: A Winter Chill or a Spring Opportunity?",
        excerpt:
          "Record-low listings and steady price growth define a unique February for the Philadelphia Metro.",
        image: photos.blog3,
        href: "/blog/philly-winter-chill",
        paragraphs: [
          "Philadelphia’s winter was quiet on the surface and competitive underneath. Low listing counts kept prices firm even when showing traffic slowed.",
          "Spring is the window — not because the market is easy, but because the people who waited are all arriving at once. We would rather you be early and precise.",
        ],
      },
    ],
  },

  cta: {
    id: "contact",
    heading: "Find You.",
    headingEmphasis: "We’ll Help You Get There.",
    ctaLabel: "Let’s Get Started",
    ctaHref: "/contact",
    background: photos.skyline,
  },

  aboutPage: {
    heading: "Real estate,",
    headingEmphasis: "rewired.",
    body: "FIND was built on the belief that real estate should be empowering for everyone involved. We combine modern tools, a client-centered approach, and an agent-owned model.",
    stats: [
      { value: "10,000+", label: "Transactions guided" },
      { value: "1,000+", label: "Agents supported" },
      { value: "NYC", label: "And growing" },
    ],
  },

  joinPage: {
    heading: "Don’t rent",
    headingEmphasis: "your career.",
    body: "Top performers get real equity, certification, and leadership — so you are building a life, not just closing a pipeline.",
    ctaLabel: "Apply to join",
  },

  contactPage: {
    heading: "Talk to a",
    headingEmphasis: "real human.",
    body: "Tell us what you are looking for. We will match you with an agent who actually listens — then we will get specific.",
    successTitle: "We received your note.",
    successBody: "An agent will follow up shortly. If it is urgent, call the office.",
  },

  footer: {
    newsletterTitle: "Subscribe to our Newsletter!",
    newsletterPlaceholder: "Email address",
    newsletterSubmit: "Subscribe",
    nav: [
      { label: "Search", href: "/search" },
      { label: "Agents", href: "/agents" },
      { label: "Join", href: "/join" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    social: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Youtube", href: "https://youtube.com" },
      { label: "Linkedin", href: "https://linkedin.com" },
    ],
    legal: [
      { label: "Terms", href: "/about" },
      { label: "Privacy policy", href: "/about" },
      { label: "Fair Housing Notice", href: "/about" },
      { label: "Reasonable Accommodation Notice", href: "/about" },
      { label: "Operating Procedure", href: "/about" },
      { label: "Press", href: "/blog" },
    ],
    vouchers: [
      "Housing Choice Vouchers Welcome",
      "Se Aceptan Vales de Elección de Vivienda",
    ],
    copyrightPrefix: "Copyright ©",
    copyrightYear: "2026",
  },

  searchPage: {
    heading: "Search",
    headingEmphasis: "Properties",
    subheading: "Filter by neighborhood, price, and the way you want to live.",
    filtersLabel: "Filters",
    neighborhoodsLabel: "Neighborhoods",
    allNeighborhoodsLabel: "All",
    statusLabel: "Status",
    forSaleLabel: "For Sale",
    forRentLabel: "For Rent",
    priceLabel: "Price",
    anyPriceLabel: "Any price",
    bedsBathsLabel: "Beds",
    anyBedsLabel: "Any",
    resultsSuffix: "Results",
    sortLabel: "Sort:",
    sortNewest: "Newest",
    sortPriceAsc: "Price ↑",
    sortPriceDesc: "Price ↓",
    emptyLabel: "No homes match these filters. Clear a filter and try again.",
    clearLabel: "Clear filters",
    priceRanges: [
      { label: "Any price", min: 0, max: Infinity },
      { label: "Under $10M", min: 0, max: 10000000 },
      { label: "$10M – $20M", min: 10000000, max: 20000000 },
      { label: "$20M+", min: 20000000, max: Infinity },
    ],
  },

  forms: {
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Enter your phone",
    messageLabel: "Message",
    messagePlaceholder: "What are you looking for?",
    sendLabel: "Send",
    sendingLabel: "Sending…",
  },
};

export default siteConfig;
