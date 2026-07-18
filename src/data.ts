import { 
  ProfileInfo, 
  StatItem, 
  SkillItem, 
  ServiceItem, 
  IndustryItem, 
  PortfolioItem, 
  TestimonialItem, 
  AwardItem, 
  CertificateItem, 
  FAQItem, 
  BlogPostItem 
} from "./types";

export const INITIAL_PROFILE: ProfileInfo = {
  name: "Saadul Islam",
  titles: [
    "Creative Designer",
    "Graphics Designer",
    "Digital Marketing Expert",
    "Website Designer",
    "Brand Strategist"
  ],
  description: "As one of the youngest creative professionals, I believe every great brand begins with a bold vision and exceptional execution. With 70+ successful projects and a 98% client satisfaction rate, I've built a reputation for delivering creative solutions that are modern, impactful, and tailored to each client's unique goals. Driven by innovation, attention to detail, and a passion for excellence, I strive to create meaningful digital experiences that leave a lasting impression and help businesses stand out in a competitive world.",
  phone: "01892661449",
  whatsapp: "01892661449",
  email: "saadulofficial@gmail.com",
  location: "Maijdee, Court, Noakhali, Bangladesh, 3800",
  profileImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg18UBibcOnakzKgbIouBvBRPi1QDozWlsSkMGa8nHksoLIVO2Lk83XuQ9zSoMOGPTNtTDlBzTgHMXZUEVAjNeN3VU9LnvwY2bwba6IbWGZUzsow5-jeQumnrOmdOR9xT7sur0taBo7MTubpoyO-m8IqtZGUmXqDph7ttJd-AFMyyaq6MtqjRNpAv4-01KP/w288-h320/IMG_8207.jpeg",
  github: "https://github.com/saadulofficial",
  linkedin: "https://linkedin.com/in/saadulofficial",
  facebook: "https://www.facebook.com/share/1Ag4yGEWjx/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/growth_velocity_hub?igsh=MWdoOHNnbHQyM3J3bQ%3D%3D&utm_source=qr",
  behance: "https://behance.net/saadulofficial",
  dribbble: "https://dribbble.com/saadulofficial",
  youtube: "https://youtube.com/@saadulofficial",
  tiktok: "https://tiktok.com/@saadulofficial",
  pinterest: "https://pinterest.com/saadulofficial",
  embeddedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58957.550186987514!2d91.0716616!3d22.8711462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754af55df98b7bb%3A0x6338e3e4a9c80521!2sMaijdee%2C%20Noakhali!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
};

export const INITIAL_STATS: StatItem[] = [
  { id: "years", label: "Years Experience", value: 3, suffix: "+" },
  { id: "projects", label: "Projects Delivered", value: 70, suffix: "+" },
  { id: "satisfaction", label: "Client Satisfaction", value: 98, suffix: "%" },
  { id: "designs", label: "Creative Designs", value: 97, suffix: "%" },
  { id: "campaigns", label: "Marketing Campaigns", value: 50, suffix: "+" }
];

export const INITIAL_SKILLS: SkillItem[] = [
  { id: "sk1", name: "Graphics Design", category: "Design", percentage: 100 },
  { id: "sk2", name: "Social Media Marketing", category: "Marketing", percentage: 100 },
  { id: "sk3", name: "Digital Marketing", category: "Marketing", percentage: 100 },
  { id: "sk4", name: "Facebook Ads", category: "Marketing", percentage: 100 },
  { id: "sk5", name: "Google Ads", category: "Marketing", percentage: 100 },
  { id: "sk6", name: "Website Design", category: "Design", percentage: 100 },
  { id: "sk7", name: "WordPress", category: "Development", percentage: 100 },
  { id: "sk8", name: "UI UX", category: "Design", percentage: 100 },
  { id: "sk9", name: "Brand Identity", category: "Design", percentage: 100 },
  { id: "sk10", name: "Video Editing", category: "Other", percentage: 95 },
  { id: "sk11", name: "Motion Graphics", category: "Other", percentage: 95 },
  { id: "sk12", name: "SEO", category: "Marketing", percentage: 100 },
  { id: "sk13", name: "AI Automation", category: "Development", percentage: 90 }
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "ser1",
    title: "Graphics Design",
    description: "Visually stunning design assets created using state-of-the-art tools to capture, convince, and build high brand recall.",
    features: ["Logo Design", "Brand Identity", "Social Media Templates", "Corporate Stationary"],
    icon: "Palette"
  },
  {
    id: "ser2",
    title: "Social Media Marketing",
    description: "Grow your social presence, execute viral content strategies, and build an active community around your brand message.",
    features: ["Facebook Marketing", "Instagram Campaigns", "Content Calendar Creation", "Audience Engagement Growth"],
    icon: "Megaphone"
  },
  {
    id: "ser3",
    title: "Google & Meta Ads",
    description: "Highly optimized paid campaigns targeting key transaction-ready cohorts to maximize immediate returns and scale lead flow.",
    features: ["Facebook Ads", "Google Ads Placement", "Retargeting Frameworks", "ROI Optimization"],
    icon: "TrendingUp"
  },
  {
    id: "ser4",
    title: "SEO Mastery",
    description: "Achieve and secure number-one spots on Google Search, capturing massive free high-intent inbound search traffic.",
    features: ["On-Page Optimization", "Technical Audit", "Backlink Strategy", "Local Noakhali & Global SEO"],
    icon: "Search"
  },
  {
    id: "ser5",
    title: "Website Design",
    description: "Aesthetic, super-fast, responsive web interfaces crafted in modern design guidelines to maximize leads and sales.",
    features: ["Landing Pages", "Luxury Portfolios", "E-commerce Stores", "WordPress Sites"],
    icon: "Globe"
  },
  {
    id: "ser6",
    title: "UI/UX & Brand Strategy",
    description: "Deep user research matched with beautiful visual system layout to elevate digital experiences and build premium value.",
    features: ["Interactive Wireframes", "High-Fidelity Mockups", "Brand Tone Guidelines", "Conversion Optimization"],
    icon: "Layers"
  },
  {
    id: "ser7",
    title: "Video & Motion Production",
    description: "High-retention cinematic video edits, social shorts, and motion graphics that demand immediate user attention.",
    features: ["YouTube Video Editing", "Viral TikTok/Reels Layout", "Motion Typography", "Audio Soundscapes"],
    icon: "Video"
  },
  {
    id: "ser8",
    title: "AI Automation",
    description: "Integrate futuristic AI tools, automations, and custom workflows to save precious work hours and streamline operations.",
    features: ["Chatbot Integrations", "Workflow Automation", "API Connections", "Data Scraping Systems"],
    icon: "Cpu"
  }
];

export const INITIAL_INDUSTRIES: IndustryItem[] = [
  { id: "ind1", name: "Food & Restaurant", icon: "Utensils" },
  { id: "ind2", name: "Real Estate", icon: "Home" },
  { id: "ind3", name: "Doctors & Clinics", icon: "Stethoscope" },
  { id: "ind4", name: "Hospitals", icon: "Activity" },
  { id: "ind5", name: "Influencers", icon: "Users" },
  { id: "ind6", name: "Fashion", icon: "Shirt" },
  { id: "ind7", name: "Beauty Salon", icon: "Sparkles" },
  { id: "ind8", name: "Gym", icon: "Dumbbell" },
  { id: "ind9", name: "Fitness", icon: "Flame" },
  { id: "ind10", name: "Travel Agency", icon: "Compass" },
  { id: "ind11", name: "Hotel", icon: "Bed" },
  { id: "ind12", name: "Construction", icon: "HardHat" },
  { id: "ind13", name: "Corporate", icon: "Briefcase" },
  { id: "ind14", name: "Education", icon: "GraduationCap" },
  { id: "ind15", name: "Online Course", icon: "BookOpen" },
  { id: "ind16", name: "Law Firm", icon: "Scale" },
  { id: "ind17", name: "Technology", icon: "Terminal" },
  { id: "ind18", name: "Startup", icon: "Rocket" },
  { id: "ind19", name: "E-commerce", icon: "ShoppingBag" },
  { id: "ind20", name: "Automobile", icon: "Car" },
  { id: "ind21", name: "NGO", icon: "Heart" }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  // Graphics Design Category
  {
    id: "port-g1",
    title: "Minimalist Brand Identity",
    category: "Graphics Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    description: "An elegant, minimalist vector branding design utilizing strict golden ratio geometry, luxurious color contrasts, and modern sans-serif typography. Suitable for an elite investment firm.",
    technologies: ["Adobe Illustrator", "Vector Design", "Golden Ratio Grid"],
    client: "Aether Capital",
    results: "98% Positive stakeholder feedback, established custom corporate brand assets used internationally.",
    behanceLink: "https://behance.net/saadulofficial",
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "port-g2",
    title: "Luxury Cosmetic Packaging",
    category: "Graphics Design",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    description: "Premium packaging line design for organic cosmetics featuring delicate gold embossing accents, deep matte textures, and soft geometric details to evoke sophistication and nature.",
    technologies: ["Adobe Photoshop", "3D Mockup Renderer", "Typography Styling"],
    client: "Lumiere Botanicals",
    results: "Products launched in 12 high-end boutique stores with a 40% immediate sales bump due to visual appeal.",
    behanceLink: "https://behance.net/saadulofficial"
  },
  // Website Design Category
  {
    id: "port-w1",
    title: "Futuristic E-commerce Platform",
    category: "Website Design",
    image: "https://webdesignerm.com/wp-content/uploads/2026/05/E-commerce-Website-developer-5-768x1000.png",
    description: "A super-fast, fully responsive multi-vendor e-commerce layout featuring dark mode, interactive glassmorphic products, instant dynamic searching, and optimized visual filters.",
    technologies: ["React", "Vite", "Tailwind CSS", "WordPress headless API"],
    client: "Zenith Retail",
    results: "3.2 Second faster load times, resulting in a 24% increase in checkout conversions.",
    liveLink: "https://growthvelocityhub.com",
    behanceLink: "https://behance.net/saadulofficial",
    gallery: [
      "https://webdesignerm.com/wp-content/uploads/2026/05/E-commerce-Website-developer-5-768x1000.png",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "port-w2",
    title: "Elite Medical Clinic Web App",
    category: "Website Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description: "An ultra-premium corporate web interface built for a top surgical clinic. Integrates an instant scheduler, service catalog, team directories, and emergency contact channels.",
    technologies: ["Framer Motion", "Tailwind CSS", "WordPress", "Custom CSS"],
    client: "Apex Surgical",
    results: "Booking forms completed went up 45% within the first 30 days of launch.",
    liveLink: "https://growthvelocityhub.com"
  },
  // Brand Identity Category
  {
    id: "port-b1",
    title: "Vanguard Corporate Identity",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "End-to-end visual styling for a high-end commercial property builder. Covers premium logos, color pallets, custom stationary, letterheads, typography matching, and office banners.",
    technologies: ["Brand Book Guides", "Core Geometry", "Pantone Styling"],
    client: "Vanguard Properties",
    results: "Established a cohesive brand presence across all 5 regional offices in Southeast Asia.",
    behanceLink: "https://behance.net/saadulofficial",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  // Video Editing Category (using user's YouTube links)
  {
    id: "port-v1",
    title: "Cinematic High-Retention Commercial",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://youtu.be/xlRBdUUJ8yc?si=PSupQyiJFQCjXhFb",
    description: "A dynamic marketing ad with rapid-cut sequencing, custom SFX, matching keyframe zooms, and rich color grading to boost visual retention and brand metrics.",
    technologies: ["Adobe Premiere Pro", "After Effects", "Sound Synthesis"],
    client: "Velocity Agency",
    results: "78% Average retention rate on YouTube Shorts and Instagram Reels.",
    liveLink: "https://youtu.be/xlRBdUUJ8yc?si=PSupQyiJFQCjXhFb"
  },
  {
    id: "port-v2",
    title: "Modern Tech Explainer Ad",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://youtu.be/kyYT9b7OlAY?si=yLIe8ZSkIeuJcGur",
    description: "Minimalist corporate explainer combining custom voice overs, elegant kinetic text transitions, vector overlays, and animated device framings to describe a software suite.",
    technologies: ["Motion Typography", "Audio Equalization", "vector animation"],
    client: "CloudSphere Systems",
    results: "1.2M Combined views on targeted social campaigns, driving direct downloads.",
    liveLink: "https://youtu.be/kyYT9b7OlAY?si=yLIe8ZSkIeuJcGur"
  },
  {
    id: "port-v3",
    title: "Luxury Real Estate Walkthrough",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://youtu.be/p-a37nHzsRQ?si=BJ3jMTd6eImb81Lt",
    description: "Polished interior and architectural footage sequencing. Employs advanced speed-ramping, subtle light-leaks, background noise reduction, and custom acoustic selection to emphasize wealth and spacious layout.",
    technologies: ["Speed Ramping", "Light Leak FX", "Color Matching"],
    client: "Noakhali Elite Living",
    results: "Estate sold within 15 days of listing launch utilizing this high-end showcase.",
    liveLink: "https://youtu.be/p-a37nHzsRQ?si=BJ3jMTd6eImb81Lt"
  },
  {
    id: "port-v4",
    title: "Social Growth Hype Video",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://youtu.be/CF2xAa8Wujg?si=jhV4D1gwlcYprf6q",
    description: "Hype sequence featuring neon text overlays, glowing audio visualizers, and heavy glitch transitions customized for younger, active digital communities.",
    technologies: ["Glitch Transitions", "Audio Visualizers", "Color Grading"],
    client: "Growth Velocity Hub",
    results: "35,000+ Real follower acquisitions attributed to this specific campaign video.",
    liveLink: "https://youtu.be/CF2xAa8Wujg?si=jhV4D1gwlcYprf6q"
  },
  {
    id: "port-v5",
    title: "Interactive E-Learning Promo",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://youtu.be/Aa_T1uI4UXY?si=fPZbLUJXpP5Sm37s",
    description: "Fun, engaging promotional teaser using animated vector graphics, smooth zoom transitions, sound effect cues, and bright high-key lighting for modern online course structures.",
    technologies: ["After Effects", "Kinetic Design", "Color Balancing"],
    client: "EduScale Online",
    results: "400% ROI in lead sign-ups from native Facebook and YouTube Ads placement.",
    liveLink: "https://youtu.be/Aa_T1uI4UXY?si=fPZbLUJXpP5Sm37s"
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev1",
    name: "Mahmudul Hasan",
    role: "Managing Director",
    company: "Apex Real Estate",
    content: "Saadul is an absolute genius in digital strategy and brand design. He completely revitalized our real estate marketing campaigns, resulting in a 3x higher client inquiry rate. Flawless execution and premium quality!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev2",
    name: "Sophia Vance",
    role: "Founder & Creative Lead",
    company: "Vance Cosmetics UK",
    content: "Our custom logo and brand assets designed by Saadul Islam exceeded every possible expectation. He pays massive attention to subtle spacing, typographic elegance, and modern trends. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev3",
    name: "Dr. Nazmul Ahmed",
    role: "Chief Surgeon",
    company: "Noakhali Medisurg Clinic",
    content: "We hired Saadul to develop our new clinic website and implement local search optimization. The booking system is incredibly smooth, fully responsive, and clinic patients find it very easy to schedule appointments.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev4",
    name: "Tahsan Kabir",
    role: "Growth Marketer",
    company: "NextGen Tech Solutions",
    content: "Saadul's Facebook Ads configuration and content design was brilliant. We launched a high-yield campaign that delivered leads at half our previous acquisition cost. He is a master of digital advertising.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const INITIAL_AWARDS: AwardItem[] = [
  {
    id: "aw1",
    title: "Best Young Creative Designer",
    year: "2025",
    description: "Honored for outstanding digital portfolio designs, innovative visual branding, and exceptional client satisfaction ratings.",
    issuer: "Bangladesh Digital Design Summit"
  },
  {
    id: "aw2",
    title: "Elite Growth Marketer Badge",
    year: "2024",
    description: "Awarded for scaling 15+ local and e-commerce companies past their ROI targets through Meta and Google Ads campaigns.",
    issuer: "Growth Velocity Collective"
  },
  {
    id: "aw3",
    title: "Premium Webmaster Award",
    year: "2023",
    description: "Recognized for building fast, highly fluid, aesthetic, responsive WordPress and React-based landing pages.",
    issuer: "Aesthetic Web Awards"
  }
];

export const INITIAL_CERTIFICATES: CertificateItem[] = [
  {
    id: "cert1",
    title: "Advanced Brand Identity & Typography",
    issuer: "Coursera Design Institute",
    year: "2024"
  },
  {
    id: "cert2",
    title: "Meta Certified Digital Marketing Associate",
    issuer: "Meta Credentials (Facebook)",
    year: "2024"
  },
  {
    id: "cert3",
    title: "Google Ads Search Certification",
    issuer: "Google Skillshop",
    year: "2023"
  },
  {
    id: "cert4",
    title: "Complete UX Design & Research",
    issuer: "Interaction Design Foundation",
    year: "2023"
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "How do I start working with you?",
    answer: "Getting started is simple! Tap the 'Hire Me' button anywhere on the page to open a direct chat on my WhatsApp (01892661449), or fill out the 'Appointment Booking' form at the bottom of this website. I will respond to your inquiry in less than 2 hours."
  },
  {
    id: "faq2",
    question: "Do you offer unlimited revisions?",
    answer: "Yes, I offer unlimited design revisions for my projects! My primary target is client success and 100% satisfaction. I will refine layouts, typography, color balances, or video cuts until you are absolutely thrilled with the output."
  },
  {
    id: "faq3",
    question: "Which web platforms do you build on?",
    answer: "I specialize in premium custom-coded Website Designs (React, Vite, Tailwind CSS) for ultimate luxury experience and lightning fast loading. I also build highly robust, easily manageable WordPress business sites, landing pages, and fully custom Shopify E-commerce stores."
  },
  {
    id: "faq4",
    question: "What is your typical turnaround time?",
    answer: "For graphics designs or social media posts, typical delivery is 24-48 hours. Landing pages take around 3-5 days, and complete multi-page E-commerce sites or premium corporate projects are fully delivered in 1-2 weeks."
  },
  {
    id: "faq5",
    question: "Where are you located, and can we work remotely?",
    answer: "I am located in Maijdee, Noakhali, Bangladesh. However, 95% of my client collaborations are fully remote. We connect seamlessly via WhatsApp, Email, Zoom, or Google Meet, serving brands in London, USA, Dhaka, and globally."
  }
];

export const INITIAL_BLOGS: BlogPostItem[] = [
  {
    id: "blog1",
    title: "How Premium Brand Identity Double Sales Conversions",
    summary: "Discover why standard clip-art logos hurt your business trust, and how implementing bespoke luxury geometric branding establishes immediate credibility.",
    content: "When users land on your website, social media, or packaging, they form an opinion of your brand in exactly 50 milliseconds. Generic design immediately screams cheap quality. Bespoke premium layout, high-contrast typography, and gold-standard color palettes establish immediate credibility. Investing in Saadul's luxury brand identity service means positioning your business as the premium authority in your field, unlocking higher margins, and turning visitors into passionate evangelists.",
    date: "July 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
    category: "Branding"
  },
  {
    id: "blog2",
    title: "Designing Facebook Ads That Keep Users Scrolling",
    summary: "Unlocking high retention patterns. The exact 3-step color contrast and layout blueprint Saadul Islam uses to scale marketing campaign returns.",
    content: "The thumb-stop ratio determines the success of digital marketing. To make a user stop scrolling, your visual must break the standard interface style. Using rich high-contrast overlays, glowing glassmorphism accents, and concise display typography causes instant friction that captures user eyes. This detailed guide details how my Meta Ads designs keep users engaged and dramatically cut lead acquisition costs.",
    date: "June 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Marketing"
  },
  {
    id: "blog3",
    title: "Why Website Performance is the Ultimate SEO Secret",
    summary: "Slow websites lose 50%+ of potential leads. Learn how clean custom code and modern responsive design keep you ranking at No.1 on Google Search.",
    content: "Google's search algorithm strongly penalizes sites with high interaction delays or long load times. Many WordPress templates are bloated with unused plugins that stall browsers. By crafting custom lightweight layouts, lazy-loading heavy graphics, and writing clean responsive code, I construct websites that score 100/100 on Lighthouse, keeping your search rankings at the very top.",
    date: "May 15, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "Web Design"
  }
];
