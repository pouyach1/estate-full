import { photos } from "./photos";

/**
 * White-label content for the marketing site.
 * Edit titles, copy, prices, navigation, and listings here —
 * components read from this file and should not contain hardcoded strings.
 *
 * Locale drives document lang/dir and body font (Vazirmatn for fa/rtl).
 */
export const siteConfig = {
  locale: {
    lang: "fa",
    dir: "rtl",
  },

  brand: {
    name: "FIND",
    legalName: "FIND Real Estate",
    tagline: "آنچه شما را به جلو می‌برد",
  },

  metadata: {
    title: "FIND Real Estate | خرید، اجاره و فروش املاک مسکونی و تجاری",
    description:
      "مشاوران حرفه‌ای، راهنمایی واقعی و مسیری شفاف برای قدم بعدی. خرید، اجاره یا فروش املاک مسکونی و تجاری با FIND.",
  },

  contact: {
    officeLabel: "دفتر مرکزی",
    addressLine1: "5 West 37th Street, 12th Floor,",
    addressLine2: "New York, NY 10018",
    emailLabel: "ایمیل",
    email: "hello@findrealestate.com",
    phoneLabel: "تماس",
    phone: "+1 212 994 9965",
    phoneHref: "tel:+12129949965",
    emailHref: "mailto:hello@findrealestate.com",
  },

  navigation: [
    { label: "جستجو", href: "/search" },
    { label: "مشاوران", href: "/agents" },
    { label: "همکاری", href: "/join" },
    {
      label: "خدمات",
      href: "/services",
      children: [
        { label: "خدمات وام مسکن", href: "/services#mortgage" },
        { label: "مدیریت ملک", href: "/services#management" },
        { label: "توسعه املاک", href: "/services#development" },
      ],
    },
    {
      label: "منابع",
      href: "/blog",
      children: [
        { label: "بلاگ", href: "/blog" },
        { label: "رسانه", href: "/blog" },
      ],
    },
    { label: "درباره ما", href: "/about" },
  ],

  header: {
    signInLabel: "ورود",
    signInHref: "/contact",
    navAriaLabel: "منوی اصلی",
    menuAriaLabel: "منو",
  },

  hero: {
    heading: "آنچه شما را به جلو می‌برد",
    lead: "مشاوران حرفه‌ای. راهنمایی واقعی.",
    leadEmphasis: "مسیری شفاف برای پیدا کردن قدم بعدی.",
    ctaLabel: "مشاهده املاک",
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
    heading: "چرا FIND",
    body: "زندگی‌تان در حال تغییر است. فقط یک مکان پیدا نکنید — قدم بعدی را پیدا کنید.",
    bodyEmphasis:
      "ما کمک می‌کنیم با وضوح، اطمینان و مشاور درست، جلو بروید.",
    image: photos.why,
    videoSrc: "/videos/why-us.mp4",
  },

  identity: {
    heading: "این فقط درباره",
    headingEmphasis: "املاک نیست.",
    body: "درباره هویت است. پیشرفت. خارج شدن از بن‌بست. شما فقط دنبال یک مکان نیستید.",
    bodyEmphasis: "دنبال هم‌راستایی هستید. همین چیزی است که کمکتان می‌کنیم پیدا کنید.",
    chevrons: [photos.chevron1, photos.chevron2, photos.chevron3, photos.chevron4],
  },

  process: {
    heading: "املاک،",
    headingEmphasis: "بازتعریف‌شده.",
    ctaLabel: "شروع جستجو",
    ctaHref: "/search",
    stepsLabel: "مراحل:",
    steps: [
      {
        title: "با یک انسان واقعی حرف بزنید.",
        text: "شما را به مشاوری وصل می‌کنیم که واقعاً گوش می‌دهد.",
      },
      {
        title: "شفافیت بگیرید.",
        text: "تعریف می‌کنیم چه چیزی واقعاً نیاز دارید، نه فقط چه چیزی موجود است.",
      },
      {
        title: "جلو بروید.",
        text: "آنچه مناسب است را پیدا می‌کنیم — و انجامش می‌دهیم.",
      },
    ],
  },

  agents: {
    id: "join",
    label: "برای مشاوران",
    heading: "حرفه‌تان را اجاره نکنید.",
    headingEmphasis: "مالکش شوید.",
    body: "در FIND مشاوران فقط برای برند کار نمی‌کنند — بخشی از آن را مالک‌اند.",
    bodyEmphasis:
      "به عملکردهای برتر سهام واقعی می‌دهیم تا فراتر از معامله شما، در نتیجه کارتان سرمایه‌گذاری کنند. مشاوران آموزش‌دیده، پشتیبانی‌شده و مجهز به ارائه خدمات پنج‌ستاره‌اند — چون موفقیتشان به موفقیت شما گره خورده است. اینجا فقط برای بستن معامله نیستید؛ در حال ساختن مسیر شغلی، زندگی و میراث هستید.",
    ctaLabel: "به جمع ما بپیوندید",
    ctaHref: "/join",
    portraitSmall: photos.agentSmall,
    portraitLarge: photos.agentLarge,
    directoryHeading: "با تیمی آشنا شوید",
    directoryEmphasis: "که واقعاً گوش می‌دهد.",
    directoryBody:
      "مشاوران تأییدشده و مسلط به محله که از اولین گفتگو تا تحویل کلید کنارتان می‌مانند.",
    people: [
      {
        id: "michael",
        name: "Michael Chen",
        title: "کارگزار ارشد",
        neighborhood: "Midtown & Hudson Yards",
        email: "michael@findrealestate.com",
        phone: "+1 212 994 9901",
        image: photos.portrait1,
        bio: "مایکل با انرژی بالا کار می‌کند — صبح، ظهر و شب در دسترس است و درباره تناسب محله، قیمت و نور بی‌وقفه دقیق است.",
      },
      {
        id: "shirin",
        name: "Shirin Rahimi",
        title: "کارگزار همکار",
        neighborhood: "Downtown & Brooklyn",
        email: "shirin@findrealestate.com",
        phone: "+1 212 994 9902",
        image: photos.portrait2,
        bio: "شیرین صبور، دقیق و صادق است. جستجو را با سبک زندگی واقعی شما هماهنگ می‌کند — نه با یک فیلتر عمومی.",
      },
      {
        id: "mathew",
        name: "Mathew Cole",
        title: "متخصص خریداران",
        neighborhood: "خریداران تازه‌کار، سراسر شهر",
        email: "mathew@findrealestate.com",
        phone: "+1 212 994 9903",
        image: photos.portrait3,
        bio: "متیو همان حل‌کننده‌ای است که خریداران تازه‌کار می‌خواهند کنارشان باشد. بازار پیچیده را به یک قدم بعدی شفاف تبدیل می‌کند.",
      },
      {
        id: "fay",
        name: "Fay Blau",
        title: "راهبر Upper West Side",
        neighborhood: "Upper West Side",
        email: "fay@findrealestate.com",
        phone: "+1 212 994 9904",
        image: photos.portrait4,
        bio: "ساکن Upper West Side که محله را مثل کف دست می‌شناسد — و مثل شریک حرف می‌زند، نه مثل فروشنده.",
      },
    ],
  },

  testimonials: {
    heading: "فقط به حرف ما",
    headingEmphasis: "اتکا نکنید.",
    previewImage: photos.testimonial,
    items: [
      {
        quote:
          "مایکل مشاور فوق‌العاده‌ای بود. سخت‌کوش، متعهد به پیدا کردن محله، بودجه و خانه مناسب. همیشه در دسترس بود. خستگی‌ناپذیر و حرفه‌ای. صددرصد پیشنهادش می‌کنم.",
        author: "Bernadette Hogan",
      },
      {
        quote:
          "کار با شیرین واقعاً نعمت بود. کمک کرد آپارتمان ایده‌آلمان را در منطقه‌ای عالی پیدا کنیم. صبور و فهمیده بود. اگر کسی می‌خواهید که فراتر از وظیفه تلاش کند، شیرین همان فرد است.",
        author: "Tyleen",
      },
      {
        quote:
          "کار با متیو لذت‌بخش بود و به هر خریدار جدی — به‌ویژه خریداران تازه‌کار — پیشنهادش می‌کنم. از همان ابتدا مهارت حل مسئله‌اش برجسته بود. ممنون متیو؛ واقعاً در خانه جدیدمان خوشحالیم.",
        author: "Johanna Nieto",
      },
      {
        quote:
          "شیرین از جستجوی اولیه تا تسویه، راهنما و مشاور قابل‌اتکایی بود. سریع فهمید دنبال چه هستیم و مسیر را درست تنظیم کرد. پاسخگو، پیش‌دست و با دستی آرام کار را جلو برد.",
        author: "mattmpowers",
      },
      {
        quote:
          "بعد از ۱۲ سال زندگی در نیویورک، بهترین تجربه همکاری با کارگزار را با فی بلاو داشتم. آپارتمانی زیبا در Upper West Side پیدا کرد که دقیقاً به نیازم می‌خورد. ارتباطش در تمام مسیر عالی بود.",
        author: "Giavridis Theodore",
      },
    ],
  },

  features: {
    id: "services",
    caption: "خدمات",
    heading: "FIND چطور",
    headingEmphasis: "کمکتان می‌کند",
    brief: "مشاوران تأییدشده ما در هر مرحله از مسیر املاک",
    briefEmphasis: "با دانش تخصصی و پشتیبانی قابل‌اتکا همراهتان هستند.",
    ctaLabel: "شروع با FIND",
    ctaHref: "/contact",
    items: [
      {
        id: "buy",
        title: "خرید",
        description:
          "هوشمندانه‌تر بخرید؛ با مشاورانی که به تیم وام، حقوقی و کارشناسی متصل‌اند تا بهترین معامله را سریع ببندید. بیش از ۱۰٬۰۰۰ بار این مسیر را طی کرده‌ایم.",
        image: photos.buy,
        href: "/search",
      },
      {
        id: "sell",
        title: "فروش",
        description:
          "سریع و با قیمت درست بفروشید. لیستینگ شما استیجینگ حرفه‌ای، قیمت‌گذاری استراتژیک، بازدیدهای منظم و مشاورانی دارد که تا امضای خریدار مناسب متوقف نمی‌شوند.",
        image: photos.sell,
        href: "/contact",
      },
      {
        id: "rent",
        title: "اجاره",
        description:
          "به اجاره‌های پنهان قبل از انتشار عمومی دسترسی پیدا کنید؛ با مشاورانی که مالکان شهر را می‌شناسند. با تجربه عمیق NYC، بهترین فرصت‌ها را باز می‌کنیم.",
        image: photos.rent,
        href: "/search",
      },
    ],
  },

  support: {
    id: "support",
    heading: "پشتیبانی",
    headingMiddle: "فراتر از",
    headingBuy: "خرید",
    headingAnd: "و فروش",
    body: "بازار املاک هیچ‌وقت ثابت نمی‌ماند — ما هم نه.",
    bodyEmphasis:
      "کارشناسان ما بعد از معامله هم همراهتان می‌مانند تا از سرمایه‌تان بهتر بهره ببرید.",
    ctaLabel: "مشاهده خدمات",
    ctaHref: "/services",
    items: [
      {
        id: "mortgage",
        title: "خدمات وام مسکن",
        text: "کمک می‌کنیم با گزینه‌های منعطف وام، خانه ایده‌آل‌تان را تأمین مالی کنید.",
        image: photos.mortgage,
        ctaLabel: "بیشتر بدانید",
        href: "/contact",
      },
      {
        id: "management",
        title: "مدیریت ملک",
        text: "جزئیات را به ما بسپارید تا از نتیجه لذت ببرید.",
        image: photos.management,
        ctaLabel: "بیشتر بدانید",
        href: "/contact",
      },
      {
        id: "development",
        title: "ساخت‌وساز و توسعه املاک",
        text: "در پیچیدگی‌های ساخت و توسعه ملک، با نگاه تخصصی کنارتان هستیم.",
        image: photos.development,
        ctaLabel: "بیشتر بدانید",
        href: "/contact",
      },
    ],
  },

  properties: {
    id: "properties",
    caption: "آگهی‌ها",
    heading: "اقامتگاه‌های",
    headingEmphasis: "منتخب",
    body: "خانه‌هایی با محوریت عکاسی؛ انتخاب‌شده برای نور، محله و سبکی که واقعاً می‌خواهید زندگی کنید.",
    viewAllLabel: "مشاهده همه املاک",
    viewAllHref: "/search",
    bedsLabel: "خواب",
    bathsLabel: "حمام",
    areaLabel: "فوت‌مربع",
    inquireLabel: "درخواست بازدید",
    similarLabel: "اقامتگاه‌های مشابه",
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
        type: "آپارتمان",
        status: "فروشی",
        year: 2014,
        agentId: "michael",
        image: photos.listing01,
        gallery: [photos.listing01, photos.listing01b, photos.listing01c],
        href: "/properties/listing-01",
        featured: true,
        description:
          "واحدی در طبقات بالای One57 با دید مستقیم به سنترال‌پارک، آشپزخانه حرفه‌ای و سوئیت اصلی در سطح یک پنت‌هاوس هتل. اینجا نور خودش یک امکانات است — صبح از شرق، غروب از غرب.",
        amenities: ["دربان", "تراس خصوصی", "انبار شراب", "باشگاه ورزشی"],
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
        type: "آپارتمان",
        status: "فروشی",
        year: 2015,
        agentId: "shirin",
        image: photos.listing02,
        gallery: [photos.listing02, photos.listing01b, photos.listing04],
        href: "/properties/listing-02",
        featured: true,
        description:
          "واحد فول‌فلور در ۴۳۲ پارک با سقف ۱۲٫۵ فوتی و نشیمنی شبیه گالری. آرام، دقیق و ساخته برای کسی که از قبل می‌داند چه می‌خواهد.",
        amenities: ["طبقه کامل", "کنسیرژ", "استخر", "آسانسور خصوصی"],
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
        type: "آپارتمان",
        status: "فروشی",
        year: 2008,
        agentId: "fay",
        image: photos.listing03,
        gallery: [photos.listing03, photos.listing05, photos.listing01c],
        href: "/properties/listing-03",
        featured: true,
        description:
          "ادب پیش از جنگ، سیستم‌های مدرن. کلاسیک ۱۵ CPW با جبهه پارک، کتابخانه و خدماتی که ساختمان را شبیه باشگاه خصوصی می‌کند.",
        amenities: ["دید پارک", "کتابخانه", "اتاق خدمتکار", "انبار شراب"],
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
        type: "آپارتمان",
        status: "فروشی",
        year: 2019,
        agentId: "michael",
        image: photos.listing04,
        gallery: [photos.listing04, photos.listing02, photos.listing08],
        href: "/properties/listing-04",
        featured: true,
        description:
          "واحد تروفه در ۲۲۰ CPS با حضور سنگ آهک و داخلی که زیاده‌روی نمی‌کند. پارک همان اثر هنری است؛ بقیه، خویشتن‌داری.",
        amenities: ["نمای سنگ آهک", "تراس پارک", "اسپا", "اتاق پذیرایی خصوصی"],
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
        type: "آپارتمان",
        status: "فروشی",
        year: 2017,
        agentId: "shirin",
        image: photos.listing05,
        gallery: [photos.listing05, photos.listing07, photos.listing01b],
        href: "/properties/listing-05",
        featured: true,
        description:
          "مقیاس West Village با راحتی کاندو. نور باغ، آشپزخانه واقعی و پلان مناسب زوجی که واقعاً آشپزی می‌کند.",
        amenities: ["باغ", "شومینه", "انبار دوچرخه", "باشگاه ورزشی"],
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
        type: "آپارتمان",
        status: "فروشی",
        year: 2018,
        agentId: "mathew",
        image: photos.listing06,
        gallery: [photos.listing06, photos.listing08, photos.listing03],
        href: "/properties/listing-06",
        featured: true,
        description:
          "لوفت‌کاندوی رودخانه‌ای در Tribeca: اتاق‌های عریض، فضای انبار جدی و آشپزخانه‌ای برای میزبانی. شب آرام، روز زنده.",
        amenities: ["دید رودخانه", "آشپزخانه حرفه‌ای", "انبار", "دربان"],
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
        type: "آپارتمان",
        status: "فروشی",
        year: 2016,
        agentId: "mathew",
        image: photos.listing07,
        gallery: [photos.listing07, photos.listing05, photos.listing09],
        href: "/properties/listing-07",
        featured: false,
        description:
          "راحتی Sutton Place بدون خشکی رسمی. سه‌خوابه روشن با اتاق غذاخوری واقعی و پلانی که هنوز برای خانواده کار می‌کند.",
        amenities: ["اتاق غذاخوری", "لباسشویی", "کنسیرژ", "روف‌دک"],
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
        type: "آپارتمان",
        status: "فروشی",
        year: 2018,
        agentId: "shirin",
        image: photos.listing08,
        gallery: [photos.listing08, photos.listing06, photos.listing02],
        href: "/properties/listing-08",
        featured: false,
        description:
          "شیشه، ارتفاع و آدرس Tribeca. چهار خواب که بزرگ‌تر از پلان به نظر می‌رسد، با نور بندر در بعدازظهر.",
        amenities: ["دید بندر", "استخر", "اتاق بازی", "پارکینگ"],
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
        type: "آپارتمان",
        status: "فروشی",
        year: 2019,
        agentId: "fay",
        image: photos.listing09,
        gallery: [photos.listing09, photos.listing01, photos.listing07],
        href: "/properties/listing-09",
        featured: false,
        description:
          "برجی تاریخی، اقامتگاهی مدرن. اسکلت گوتیک، داخلی آرام و موقعیتی در Financial District که ناگهان بسیار قابل‌زندگی شده است.",
        amenities: ["برج تاریخی", "سقف بلند", "باشگاه ورزشی", "انبار"],
      },
    ],
  },

  journal: {
    id: "journal",
    heading: "بلاگ",
    headingAmp: "و",
    headingResources: "منابع",
    body: "ببینید چطور به مشتریان کمک کرده‌ایم رویایشان در املاک را، قدم‌به‌قدم، محقق کنند.",
    ctaLabel: "مشاهده بلاگ",
    ctaHref: "/blog",
    readMoreLabel: "ادامه مطلب",
    posts: [
      {
        slug: "harry-styles-neighborhood",
        date: "۲۰۲۶-۰۹-۰۲",
        title:
          "بازتاب FIND در Redfin: هزینه واقعی زندگی در محله هری استایلز",
        excerpt:
          "نگاهی به قیمت مسکن، هزینه‌های روزمره و سبک زندگی در محله‌ای که هری استایلز در آن زندگی می‌کند.",
        image: photos.blog1,
        href: "/blog/harry-styles-neighborhood",
        paragraphs: [
          "محله‌ها دلیلی برای معروف شدن دارند — و بعد قیمت‌ها دنبالشان می‌آیند. تاریخچه آگهی‌ها، اجاره‌های مقایسه‌ای و هزینه‌های روزمره را کنار هم گذاشتیم تا نشان دهیم زندگی در آن بلوک‌ها واقعاً چه می‌طلبد؛ نه فقط بازدید از آن‌ها.",
          "نکته این نیست که محله دست‌نیافتنی است. نکته این است که «حس فضا» یک فیلتر واقعی جستجوست: پیاده‌مداری، نور و پارک در فاصله ده دقیقه، چیزی است که مردم بابت آن پول می‌پردازند.",
        ],
      },
      {
        slug: "q1-2026-nyc-market-report",
        date: "۲۰۲۶-۰۴-۱۳",
        title: "گزارش بازار نیویورک — فصل اول ۲۰۲۶",
        excerpt:
          "فصل اول ۲۰۲۶ تقاضای اجاره قوی، معاملات فعال و جابه‌جایی قیمت در NYC را نشان داد. برای بهار چه معنایی دارد؟",
        image: photos.blog2,
        href: "/blog/q1-2026-nyc-market-report",
        paragraphs: [
          "موجودی کم ماند. خریداران جدی که زودتر تأمین مالی شدند، معامله را بستند. بازار بهار به کسانی پاداش می‌دهد که محله‌شان را از قبل می‌شناسند.",
          "اگر می‌فروشید، استیجینگ و قیمت‌گذاری در این دوره اختیاری نیست. اگر می‌خرید، قبل از عاشق شدن به عکس آگهی، با یک انسان واقعی حرف بزنید.",
        ],
      },
      {
        slug: "philly-winter-chill",
        date: "۲۰۲۶-۰۴-۰۱",
        title: "املاک فیلادلفیا: سرمای زمستان یا فرصت بهار؟",
        excerpt:
          "کمبود بی‌سابقه آگهی و رشد پایدار قیمت، فوریه متفاوتی برای مترو فیلادلفیا رقم زد.",
        image: photos.blog3,
        href: "/blog/philly-winter-chill",
        paragraphs: [
          "زمستان فیلادلفیا در ظاهر آرام و در زیر سطح رقابتی بود. کمبود آگهی، حتی با کاهش بازدید، قیمت‌ها را محکم نگه داشت.",
          "بهار همان پنجره است — نه چون بازار آسان است، بلکه چون همه منتظران هم‌زمان می‌رسند. ترجیح می‌دهیم زود و دقیق باشید.",
        ],
      },
    ],
  },

  cta: {
    id: "contact",
    heading: "شما را پیدا می‌کنیم.",
    headingEmphasis: "کمکتان می‌کنیم برسید.",
    ctaLabel: "شروع کنیم",
    ctaHref: "/contact",
    background: photos.skyline,
  },

  aboutPage: {
    heading: "املاک،",
    headingEmphasis: "بازتعریف‌شده.",
    body: "FIND بر این باور ساخته شد که املاک باید برای همه طرف‌ها توانمندکننده باشد. ابزارهای مدرن، رویکرد مشتری‌محور و مدل مالکیت مشاوران را کنار هم آورده‌ایم.",
    stats: [
      { value: "۱۰٬۰۰۰+", label: "معامله هدایت‌شده" },
      { value: "۱٬۰۰۰+", label: "مشاور پشتیبانی‌شده" },
      { value: "NYC", label: "و در حال گسترش" },
    ],
  },

  joinPage: {
    heading: "حرفه‌تان را",
    headingEmphasis: "اجاره نکنید.",
    body: "عملکردهای برتر سهام واقعی، گواهی‌نامه و رهبری می‌گیرند — تا زندگی بسازند، نه فقط پایپ‌لاین ببندند.",
    ctaLabel: "درخواست همکاری",
  },

  contactPage: {
    heading: "با یک انسان",
    headingEmphasis: "واقعی حرف بزنید.",
    body: "بگویید دنبال چه هستید. شما را به مشاوری وصل می‌کنیم که واقعاً گوش می‌دهد — بعد دقیق می‌شویم.",
    successTitle: "پیامتان را دریافت کردیم.",
    successBody: "به‌زودی یک مشاور پیگیری می‌کند. اگر فوری است، با دفتر تماس بگیرید.",
  },

  notFound: {
    heading: "این صفحه در فهرست نیست.",
    body: "خانه‌ای که دنبالش بودید شاید فروخته شده — یا لینک اشتباه است.",
    backLabel: "بازگشت به",
  },

  footer: {
    newsletterTitle: "عضویت در خبرنامه",
    newsletterPlaceholder: "آدرس ایمیل",
    newsletterSubmit: "عضویت",
    nav: [
      { label: "جستجو", href: "/search" },
      { label: "مشاوران", href: "/agents" },
      { label: "همکاری", href: "/join" },
      { label: "درباره ما", href: "/about" },
      { label: "تماس", href: "/contact" },
    ],
    social: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Youtube", href: "https://youtube.com" },
      { label: "Linkedin", href: "https://linkedin.com" },
    ],
    legal: [
      { label: "شرایط استفاده", href: "/about" },
      { label: "حریم خصوصی", href: "/about" },
      { label: "اطلاعیه Fair Housing", href: "/about" },
      { label: "تسهیلات مناسب", href: "/about" },
      { label: "رویه‌های عملیاتی", href: "/about" },
      { label: "رسانه", href: "/blog" },
    ],
    vouchers: [
      "پذیرش Housing Choice Vouchers",
      "Se Aceptan Vales de Elección de Vivienda",
    ],
    copyrightPrefix: "کپی‌رایت ©",
    copyrightYear: "۲۰۲۶",
  },

  searchPage: {
    heading: "جستجوی",
    headingEmphasis: "املاک",
    subheading: "بر اساس محله، قیمت و سبکی که می‌خواهید زندگی کنید فیلتر کنید.",
    filtersLabel: "فیلترها",
    neighborhoodsLabel: "محله‌ها",
    allNeighborhoodsLabel: "همه",
    statusLabel: "وضعیت",
    forSaleLabel: "فروشی",
    forRentLabel: "اجاره‌ای",
    forSaleValue: "فروشی",
    forRentValue: "اجاره‌ای",
    priceLabel: "قیمت",
    anyPriceLabel: "هر قیمت",
    bedsBathsLabel: "خواب",
    anyBedsLabel: "همه",
    resultsSuffix: "نتیجه",
    sortLabel: "مرتب‌سازی:",
    sortNewest: "جدیدترین",
    sortPriceAsc: "قیمت ↑",
    sortPriceDesc: "قیمت ↓",
    emptyLabel: "ملکی با این فیلترها پیدا نشد. یک فیلتر را پاک کنید و دوباره امتحان کنید.",
    clearLabel: "پاک کردن فیلترها",
    priceRanges: [
      { label: "هر قیمت", min: 0, max: Infinity },
      { label: "زیر ۱۰ میلیون دلار", min: 0, max: 10000000 },
      { label: "۱۰ تا ۲۰ میلیون دلار", min: 10000000, max: 20000000 },
      { label: "بالای ۲۰ میلیون دلار", min: 20000000, max: Infinity },
    ],
  },

  forms: {
    nameLabel: "نام کامل",
    namePlaceholder: "نام شما",
    emailLabel: "ایمیل",
    emailPlaceholder: "ایمیل خود را وارد کنید",
    phoneLabel: "شماره تماس",
    phonePlaceholder: "شماره خود را وارد کنید",
    messageLabel: "پیام",
    messagePlaceholder: "دنبال چه چیزی هستید؟",
    sendLabel: "ارسال",
    sendingLabel: "در حال ارسال…",
  },
};

export default siteConfig;
