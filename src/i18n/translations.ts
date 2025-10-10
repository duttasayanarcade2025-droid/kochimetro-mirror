export type Language = 'en' | 'ml' | 'hi';

export interface Translations {
  // Header & Navigation
  whoWeAre: string;
  whatWeDo: string;
  environmentSocial: string;
  passengerInfo: string;
  vigilance: string;
  aboutUs: string;
  history: string;
  leadership: string;
  achievements: string;
  operations: string;
  projects: string;
  futurePlans: string;
  maintenance: string;
  sustainability: string;
  csrInitiatives: string;
  greenPractices: string;
  reports: string;
  routes: string;
  faresTickets: string;
  stationFacilities: string;
  travelGuidelines: string;
  login: string;
  
  // Top Bar
  rti: string;
  notifications: string;
  openData: string;
  privacyPolicy: string;
  newsletters: string;
  grievanceRedressal: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  
  // Welcome Section
  welcomeTitle: string;
  welcomeText: string;
  
  // Journey Planner
  journeyPlannerTitle: string;
  journeyPlannerDesc: string;
  from: string;
  to: string;
  planJourney: string;
  selectStation: string;
  duration: string;
  fare: string;
  stops: string;
  noRoute: string;
  transferAt: string;
  transferTime: string;
  
  // Stations
  stationsTitle: string;
  stationsDesc: string;
  line1: string;
  line2: string;
  stations: string;
  interchange: string;
  
  // Features
  featuresTitle: string;
  modernInfra: string;
  modernInfraDesc: string;
  smartTicketing: string;
  smartTicketingDesc: string;
  ecoFriendly: string;
  ecoFriendlyDesc: string;
  safetyFirst: string;
  safetyFirstDesc: string;
  
  // FAQ
  faqTitle: string;
  faqDesc: string;
  
  // Contact
  contactTitle: string;
  contactDesc: string;
  
  // Common
  learnMore: string;
  viewAll: string;
  close: string;
  minutes: string;
  rupees: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Header & Navigation
    whoWeAre: 'WHO WE ARE',
    whatWeDo: 'WHAT WE DO',
    environmentSocial: 'ENVIRONMENT & SOCIAL',
    passengerInfo: 'PASSENGER INFO',
    vigilance: 'VIGILANCE',
    aboutUs: 'About Us',
    history: 'History',
    leadership: 'Leadership',
    achievements: 'Achievements',
    operations: 'Operations',
    projects: 'Projects',
    futurePlans: 'Future Plans',
    maintenance: 'Maintenance',
    sustainability: 'Sustainability',
    csrInitiatives: 'CSR Initiatives',
    greenPractices: 'Green Practices',
    reports: 'Reports',
    routes: 'Routes & Lines',
    faresTickets: 'Fares & Tickets',
    stationFacilities: 'Station Facilities',
    travelGuidelines: 'Travel Guidelines',
    login: 'AGAMI LOGIN',
    
    // Top Bar
    rti: 'RTI',
    notifications: 'NOTIFICATIONS & G.O.S',
    openData: 'OPEN DATA',
    privacyPolicy: 'PRIVACY POLICY',
    newsletters: 'NEWSLETTERS',
    grievanceRedressal: 'GRIEVANCE REDRESSAL',
    
    // Hero Section
    heroTitle: 'Kochi Metro',
    heroSubtitle: 'Connecting Lives, Building Tomorrow',
    
    // Welcome Section
    welcomeTitle: 'Welcome to India\'s Most Advanced Metro System',
    welcomeText: 'Kochi Metro Rail Limited (KMRL) is India\'s first metro system to integrate water transport. With cutting-edge technology and sustainable practices, we\'re revolutionizing urban mobility in Kerala.',
    
    // Journey Planner
    journeyPlannerTitle: 'Plan Your Journey',
    journeyPlannerDesc: 'Find the fastest route between any two stations',
    from: 'From',
    to: 'To',
    planJourney: 'Plan Journey',
    selectStation: 'Select a station',
    duration: 'Duration',
    fare: 'Fare',
    stops: 'stops',
    noRoute: 'No route found',
    transferAt: 'Transfer at',
    transferTime: 'transfer time',
    
    // Stations
    stationsTitle: 'Our Stations',
    stationsDesc: 'Explore all metro stations across Kerala',
    line1: 'Line 1',
    line2: 'Line 2',
    stations: 'stations',
    interchange: 'Interchange',
    
    // Features
    featuresTitle: 'Why Choose Kochi Metro',
    modernInfra: 'Modern Infrastructure',
    modernInfraDesc: 'State-of-the-art facilities and comfortable coaches',
    smartTicketing: 'Smart Ticketing',
    smartTicketingDesc: 'Contactless payment and digital ticketing',
    ecoFriendly: 'Eco-Friendly',
    ecoFriendlyDesc: 'Solar-powered stations and green initiatives',
    safetyFirst: 'Safety First',
    safetyFirstDesc: '24/7 CCTV surveillance and trained security',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqDesc: 'Find answers to common questions',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactDesc: 'We\'re here to help you',
    
    // Common
    learnMore: 'Learn More',
    viewAll: 'View All',
    close: 'Close',
    minutes: 'min',
    rupees: '₹',
  },
  
  ml: {
    // Header & Navigation
    whoWeAre: 'ഞങ്ങൾ ആരാണ്',
    whatWeDo: 'ഞങ്ങൾ എന്താണ് ചെയ്യുന്നത്',
    environmentSocial: 'പരിസ്ഥിതിയും സാമൂഹികവും',
    passengerInfo: 'യാത്രക്കാർക്കുള്ള വിവരങ്ങൾ',
    vigilance: 'ജാഗ്രത',
    aboutUs: 'ഞങ്ങളെക്കുറിച്ച്',
    history: 'ചരിത്രം',
    leadership: 'നേതൃത്വം',
    achievements: 'നേട്ടങ്ങൾ',
    operations: 'പ്രവർത്തനങ്ങൾ',
    projects: 'പദ്ധതികൾ',
    futurePlans: 'ഭാവി പദ്ധതികൾ',
    maintenance: 'അറ്റകുറ്റപ്പണി',
    sustainability: 'സുസ്ഥിരത',
    csrInitiatives: 'സി.എസ്.ആർ സംരംഭങ്ങൾ',
    greenPractices: 'ഹരിത സമ്പ്രദായങ്ങൾ',
    reports: 'റിപ്പോർട്ടുകൾ',
    routes: 'റൂട്ടുകളും ലൈനുകളും',
    faresTickets: 'നിരക്കുകളും ടിക്കറ്റുകളും',
    stationFacilities: 'സ്റ്റേഷൻ സൗകര്യങ്ങൾ',
    travelGuidelines: 'യാത്രാ മാർഗ്ഗനിർദ്ദേശങ്ങൾ',
    login: 'അഗമി ലോഗിൻ',
    
    // Top Bar
    rti: 'ആർ.ടി.ഐ',
    notifications: 'അറിയിപ്പുകളും ഉത്തരവുകളും',
    openData: 'തുറന്ന ഡാറ്റ',
    privacyPolicy: 'സ്വകാര്യതാ നയം',
    newsletters: 'വാർത്താലേഖനങ്ങൾ',
    grievanceRedressal: 'പരാതി പരിഹാരം',
    
    // Hero Section
    heroTitle: 'കൊച്ചി മെട്രോ',
    heroSubtitle: 'ജീവിതങ്ങളെ ബന്ധിപ്പിക്കുന്നു, നാളെ നിർമ്മിക്കുന്നു',
    
    // Welcome Section
    welcomeTitle: 'ഇന്ത്യയിലെ ഏറ്റവും നൂതനമായ മെട്രോ സംവിധാനത്തിലേക്ക് സ്വാഗതം',
    welcomeText: 'കൊച്ചി മെട്രോ റയിൽ ലിമിറ്റഡ് (കെ.എം.ആർ.എൽ) ജലഗതാഗതം സമന്വയിപ്പിക്കുന്ന ഇന്ത്യയിലെ ആദ്യത്തെ മെട്രോ സംവിധാനമാണ്. അത്യാധുനിക സാങ്കേതികവിദ്യയും സുസ്ഥിര സമ്പ്രദായങ്ങളും ഉപയോഗിച്ച്, ഞങ്ങൾ കേരളത്തിലെ നഗര ചലനാത്മകതയിൽ വിപ്ലവം സൃഷ്ടിക്കുകയാണ്.',
    
    // Journey Planner
    journeyPlannerTitle: 'നിങ്ങളുടെ യാത്ര ആസൂത്രണം ചെയ്യുക',
    journeyPlannerDesc: 'ഏതെങ്കിലും രണ്ട് സ്റ്റേഷനുകൾക്കിടയിൽ വേഗമേറിയ റൂട്ട് കണ്ടെത്തുക',
    from: 'എവിടെ നിന്ന്',
    to: 'എവിടേക്ക്',
    planJourney: 'യാത്ര ആസൂത്രണം',
    selectStation: 'ഒരു സ്റ്റേഷൻ തിരഞ്ഞെടുക്കുക',
    duration: 'സമയം',
    fare: 'നിരക്ക്',
    stops: 'സ്റ്റോപ്പുകൾ',
    noRoute: 'റൂട്ട് കണ്ടെത്തിയില്ല',
    transferAt: 'കൈമാറ്റം',
    transferTime: 'കൈമാറ്റ സമയം',
    
    // Stations
    stationsTitle: 'ഞങ്ങളുടെ സ്റ്റേഷനുകൾ',
    stationsDesc: 'കേരളത്തിലുടനീളമുള്ള എല്ലാ മെട്രോ സ്റ്റേഷനുകളും പര്യവേക്ഷണം ചെയ്യുക',
    line1: 'ലൈൻ 1',
    line2: 'ലൈൻ 2',
    stations: 'സ്റ്റേഷനുകൾ',
    interchange: 'കൈമാറ്റം',
    
    // Features
    featuresTitle: 'കൊച്ചി മെട്രോ തിരഞ്ഞെടുക്കേണ്ട കാരണങ്ങൾ',
    modernInfra: 'ആധുനിക അടിസ്ഥാന സൗകര്യങ്ങൾ',
    modernInfraDesc: 'അത്യാധുനിക സൗകര്യങ്ങളും സുഖപ്രദമായ കോച്ചുകളും',
    smartTicketing: 'സ്മാർട്ട് ടിക്കറ്റിംഗ്',
    smartTicketingDesc: 'സ്പർശരഹിത പേയ്‌മെന്റും ഡിജിറ്റൽ ടിക്കറ്റിംഗും',
    ecoFriendly: 'പരിസ്ഥിതി സൗഹൃദം',
    ecoFriendlyDesc: 'സൗരോർജ്ജത്തിൽ പ്രവർത്തിക്കുന്ന സ്റ്റേഷനുകളും ഹരിത സംരംഭങ്ങളും',
    safetyFirst: 'സുരക്ഷ പ്രഥമം',
    safetyFirstDesc: '24/7 സിസിടിവി നിരീക്ഷണവും പരിശീലനം ലഭിച്ച സുരക്ഷയും',
    
    // FAQ
    faqTitle: 'പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ',
    faqDesc: 'സാധാരണ ചോദ്യങ്ങൾക്ക് ഉത്തരം കണ്ടെത്തുക',
    
    // Contact
    contactTitle: 'ബന്ധപ്പെടുക',
    contactDesc: 'നിങ്ങളെ സഹായിക്കാൻ ഞങ്ങൾ ഇവിടെയുണ്ട്',
    
    // Common
    learnMore: 'കൂടുതൽ അറിയുക',
    viewAll: 'എല്ലാം കാണുക',
    close: 'അടയ്ക്കുക',
    minutes: 'മിനിറ്റ്',
    rupees: '₹',
  },
  
  hi: {
    // Header & Navigation
    whoWeAre: 'हम कौन हैं',
    whatWeDo: 'हम क्या करते हैं',
    environmentSocial: 'पर्यावरण और सामाजिक',
    passengerInfo: 'यात्री जानकारी',
    vigilance: 'सतर्कता',
    aboutUs: 'हमारे बारे में',
    history: 'इतिहास',
    leadership: 'नेतृत्व',
    achievements: 'उपलब्धियाँ',
    operations: 'संचालन',
    projects: 'परियोजनाएं',
    futurePlans: 'भविष्य की योजनाएं',
    maintenance: 'रखरखाव',
    sustainability: 'स्थिरता',
    csrInitiatives: 'सीएसआर पहल',
    greenPractices: 'हरित प्रथाएं',
    reports: 'रिपोर्ट',
    routes: 'मार्ग और लाइनें',
    faresTickets: 'किराए और टिकट',
    stationFacilities: 'स्टेशन सुविधाएं',
    travelGuidelines: 'यात्रा दिशानिर्देश',
    login: 'आगमी लॉगिन',
    
    // Top Bar
    rti: 'आरटीआई',
    notifications: 'अधिसूचनाएं और जी.ओ.एस',
    openData: 'खुला डेटा',
    privacyPolicy: 'गोपनीयता नीति',
    newsletters: 'समाचार पत्र',
    grievanceRedressal: 'शिकायत निवारण',
    
    // Hero Section
    heroTitle: 'कोच्चि मेट्रो',
    heroSubtitle: 'जीवन जोड़ना, कल बनाना',
    
    // Welcome Section
    welcomeTitle: 'भारत की सबसे उन्नत मेट्रो प्रणाली में आपका स्वागत है',
    welcomeText: 'कोच्चि मेट्रो रेल लिमिटेड (केएमआरएल) जल परिवहन को एकीकृत करने वाली भारत की पहली मेट्रो प्रणाली है। अत्याधुनिक तकनीक और टिकाऊ प्रथाओं के साथ, हम केरल में शहरी गतिशीलता में क्रांति ला रहे हैं।',
    
    // Journey Planner
    journeyPlannerTitle: 'अपनी यात्रा की योजना बनाएं',
    journeyPlannerDesc: 'किसी भी दो स्टेशनों के बीच सबसे तेज मार्ग खोजें',
    from: 'से',
    to: 'तक',
    planJourney: 'यात्रा योजना',
    selectStation: 'एक स्टेशन चुनें',
    duration: 'अवधि',
    fare: 'किराया',
    stops: 'स्टॉप',
    noRoute: 'कोई मार्ग नहीं मिला',
    transferAt: 'स्थानांतरण',
    transferTime: 'स्थानांतरण समय',
    
    // Stations
    stationsTitle: 'हमारे स्टेशन',
    stationsDesc: 'केरल भर में सभी मेट्रो स्टेशनों का अन्वेषण करें',
    line1: 'लाइन 1',
    line2: 'लाइन 2',
    stations: 'स्टेशन',
    interchange: 'विनिमय',
    
    // Features
    featuresTitle: 'कोच्चि मेट्रो क्यों चुनें',
    modernInfra: 'आधुनिक बुनियादी ढांचा',
    modernInfraDesc: 'अत्याधुनिक सुविधाएं और आरामदायक कोच',
    smartTicketing: 'स्मार्ट टिकटिंग',
    smartTicketingDesc: 'संपर्क रहित भुगतान और डिजिटल टिकटिंग',
    ecoFriendly: 'पर्यावरण के अनुकूल',
    ecoFriendlyDesc: 'सौर ऊर्जा संचालित स्टेशन और हरित पहल',
    safetyFirst: 'सुरक्षा पहले',
    safetyFirstDesc: '24/7 सीसीटीवी निगरानी और प्रशिक्षित सुरक्षा',
    
    // FAQ
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqDesc: 'सामान्य प्रश्नों के उत्तर खोजें',
    
    // Contact
    contactTitle: 'संपर्क में रहें',
    contactDesc: 'हम आपकी सहायता के लिए यहां हैं',
    
    // Common
    learnMore: 'और जानें',
    viewAll: 'सभी देखें',
    close: 'बंद करें',
    minutes: 'मिनट',
    rupees: '₹',
  },
};
