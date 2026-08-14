import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Cog, 
  Bot, 
  Wrench, 
  Plane, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage, type Language } from '../../context/LanguageContext';

interface CategoryItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  examples: string;
  badge?: string;
  tag: string;
}

interface ImportCategoriesI18n {
  legalBadge: string;
  title: string;
  desc: string;
  categories: CategoryItem[];
  complianceBadge: string;
  complianceTitle: string;
  complianceDesc: string;
  compliancePoints: string[];
  ctaQuestion: string;
  ctaButton: string;
}

const importCategoriesI18n: Record<Language, ImportCategoriesI18n> = {
  en: {
    legalBadge: "Legal Items Only · DGFT & Customs Compliant",
    title: "What We Import",
    desc: "From precision sensors and electronic components to advanced robotics, STEM learning kits, machinery parts, and drone hardware — Byalance procures and imports 100% compliant goods directly to your Indian facility.",
    complianceBadge: "Strict Compliance Guarantee",
    complianceTitle: "100% Legal & Authorized Items Only",
    complianceDesc: "Byalance operates strictly within the legal framework established by the Directorate General of Foreign Trade (DGFT), Central Board of Indirect Taxes & Customs (CBIC), and Indian Customs ICEGATE rules. We do not import restricted, counterfeit, or prohibited items.",
    compliancePoints: [
      "Accurate 8-digit HSN classification",
      "Official Bill of Entry in your name/our entity",
      "Legitimate overseas vendor invoice pass-through",
      "100% GST Tax Invoice to claim Input Tax Credit (ITC)"
    ],
    ctaQuestion: "Have a specific component or part number to verify?",
    ctaButton: "Verify Import Feasibility",
    categories: [
      {
        icon: Layers,
        title: 'Sensors & Modules',
        subtitle: 'Precision Sensing & Wireless Nodes',
        examples: 'IoT sensors, environmental & gas sensors, optical, LiDAR, IMU, ultrasonic, BLE, LoRa, Wi-Fi & RF modules.',
        badge: 'High Demand',
        tag: 'Customs cleared with GST Tax Invoice'
      },
      {
        icon: Cpu,
        title: 'Electronics & Components',
        subtitle: 'Semiconductors & Active / Passive Parts',
        examples: 'Microcontrollers (MCUs), FPGAs, power ICs, development boards, precision passives, connectors, and custom PCBs.',
        tag: 'Customs cleared with GST Tax Invoice'
      },
      {
        icon: GraduationCap,
        title: 'STEM Kits',
        subtitle: 'Educational & Prototyping Learning Sets',
        examples: 'DIY electronics kits, robotics starter sets, sensor experiment modules, science & coding kits for schools, labs & makers.',
        tag: 'Customs cleared with GST Tax Invoice'
      },
      {
        icon: Cog,
        title: 'Machinery & Machinery Parts',
        subtitle: 'Industrial Mechanical & Automation Spares',
        examples: 'CNC-machined parts, servo & stepper motors, linear motion guides, pneumatic/hydraulic fittings, and transmission spares.',
        tag: 'Customs cleared with GST Tax Invoice'
      },
      {
        icon: Bot,
        title: 'Robotics & AI Products',
        subtitle: 'Intelligent Systems & Edge Compute',
        examples: 'Robotic arms, AI vision accelerator boards, edge AI computing kits, robotic grippers, and autonomous mobile kits.',
        tag: 'Customs cleared with GST Tax Invoice'
      },
      {
        icon: Wrench,
        title: 'Hardware Tools',
        subtitle: 'Testing, Assembly & Calibration Instruments',
        examples: 'Digital oscilloscopes, multimeters, precision soldering rework stations, calibration devices, and specialized workshop tools.',
        tag: 'Customs cleared with GST Tax Invoice'
      },
      {
        icon: Plane,
        title: 'Drones & UAV Components',
        subtitle: 'Compliant Flight Hardware & Avionics',
        examples: 'Flight controllers, brushless motors, Electronic Speed Controllers (ESCs), carbon fibre frames, and telemetry systems.',
        tag: 'Customs cleared with GST Tax Invoice'
      }
    ]
  },
  hi: {
    legalBadge: "केवल वैध वस्तुएं · DGFT एवं सीमा शुल्क अनुपालन",
    title: "हम क्या आयात करते हैं",
    desc: "सटीक सेंसर और इलेक्ट्रॉनिक घटकों से लेकर उन्नत रोबोटिक्स, STEM लर्निंग किट, मशीनरी पार्ट्स और ड्रोन हार्डवेयर तक — Byalance 100% अनुपालन वाले सामान सीधे आपकी भारतीय सुविधा तक पहुंचाता है।",
    complianceBadge: "सख्त अनुपालन गारंटी",
    complianceTitle: "केवल 100% कानूनी एवं अधिकृत वस्तुएं",
    complianceDesc: "Byalance विदेश व्यापार महानिदेशालय (DGFT), केंद्रीय अप्रत्यक्ष कर एवं सीमा शुल्क बोर्ड (CBIC), और भारतीय कस्टम्स ICEGATE नियमों के कानूनी दायरे में काम करता है। हम किसी भी प्रतिबंधित या अवैध वस्तु का आयात नहीं करते।",
    compliancePoints: [
      "सटीक 8-अंकीय HSN वर्गीकरण",
      "आधिकारिक बिल ऑफ एंट्री (Bill of Entry)",
      "विदेशी विक्रेता का वैध मूल इनवॉइस",
      "100% इनपुट टैक्स क्रेडिट (ITC) हेतु GST इनवॉइस"
    ],
    ctaQuestion: "क्या आपके पास सत्यापित करने के लिए कोई विशेष पार्ट नंबर है?",
    ctaButton: "आयात पात्रता की जांच करें",
    categories: [
      {
        icon: Layers,
        title: 'सेंसर और मॉड्यूल',
        subtitle: 'सटीक सेंसिंग और वायरलेस नोड्स',
        examples: 'IoT सेंसर, पर्यावरण व गैस सेंसर, ऑप्टिकल, LiDAR, IMU, अल्ट्रासोनिक, BLE, LoRa, Wi-Fi और RF मॉड्यूल।',
        badge: 'उच्च मांग',
        tag: 'सीमा शुल्क क्लीयरेंस और GST इनवॉइस सहित'
      },
      {
        icon: Cpu,
        title: 'इलेक्ट्रॉनिक्स और घटक',
        subtitle: 'सेमीकंडक्टर और सक्रिय / निष्क्रिय पार्ट्स',
        examples: 'माइक्रोकंट्रोलर (MCUs), FPGAs, पावर ICs, डेवलपमेंट बोर्ड, प्रेसिजन पैसिव्स, कनेक्टर्स और कस्टम PCBs।',
        tag: 'सीमा शुल्क क्लीयरेंस और GST इनवॉइस सहित'
      },
      {
        icon: GraduationCap,
        title: 'स्टेम किट (STEM Kits)',
        subtitle: 'शैक्षणिक और प्रोटोटाइपिंग लर्निंग सेट्स',
        examples: 'DIY इलेक्ट्रॉनिक्स किट, रोबोटिक्स स्टार्टर सेट, सेंसर प्रयोग मॉड्यूल, स्कूलों व लैब्स के लिए साइंस और कोडिंग किट।',
        tag: 'सीमा शुल्क क्लीयरेंस और GST इनवॉइस सहित'
      },
      {
        icon: Cog,
        title: 'मशीनरी और मशीनरी पार्ट्स',
        subtitle: 'औद्योगिक यांत्रिक और ऑटोमेशन स्पेयर पार्ट्स',
        examples: 'CNC-मशीन्ड पार्ट्स, सर्वो व स्टेपर मोटर्स, लीनियर मोशन गाइड्स, न्यूमेटिक/हाइड्रोलिक फिटिंग्स और ट्रांसमिशन पार्ट्स।',
        tag: 'सीमा शुल्क क्लीयरेंस और GST इनवॉइस सहित'
      },
      {
        icon: Bot,
        title: 'रोबोटिक्स और AI उत्पाद',
        subtitle: 'इंटेलिजेंट सिस्टम और एज कंप्यूट',
        examples: 'रोबोटिक आर्म्स, AI विज़न एक्सेलेरेटर बोर्ड, एज AI कंप्यूटिंग किट, रोबोटिक ग्रिपर्स और ऑटोनॉमस मोबाइल रोबोट पार्ट्स।',
        tag: 'सीमा शुल्क क्लीयरेंस और GST इनवॉइस सहित'
      },
      {
        icon: Wrench,
        title: 'हार्डवेयर टूल्स',
        subtitle: 'टेस्टिंग, असेंबली और कैलिब्रेशन उपकरण',
        examples: 'डिजिटल ऑसिलोस्कोप, मल्टीमीटर, प्रेसिजन सोल्डरिंग रीवर्क स्टेशन, कैलिब्रेशन डिवाइस और वर्कशॉप टूल्स।',
        tag: 'सीमा शुल्क क्लीयरेंस और GST इनवॉइस सहित'
      },
      {
        icon: Plane,
        title: 'ड्रोन और UAV घटक',
        subtitle: 'अनुपालन युक्त फ्लाइट हार्डवेयर और एवियोनिक्स',
        examples: 'फ्लाइट कंट्रोलर्स, ब्रशलेस मोटर्स, इलेक्ट्रॉनिक स्पीड कंट्रोलर्स (ESCs), कार्बन फाइबर फ्रेम और टेलीमेट्री सिस्टम।',
        tag: 'सीमा शुल्क क्लीयरेंस और GST इनवॉइस सहित'
      }
    ]
  },
  kn: {
    legalBadge: "ಕಾನೂನುಬದ್ಧ ವಸ್ತುಗಳು ಮಾತ್ರ · DGFT ಮತ್ತು ಕಸ್ಟಮ್ಸ್ ಅನುಸರಣೆ",
    title: "ನಾವು ಏನನ್ನು ಆಮದು ಮಾಡುತ್ತೇವೆ",
    desc: "ನಿಖರವಾದ ಸಂವೇದಕಗಳು ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಘಟಕಗಳಿಂದ ಹಿಡಿದು ಸುಧಾರಿತ ರೋಬೋಟಿಕ್ಸ್, STEM ಲರ್ನಿಂಗ್ ಕಿಟ್‌ಗಳು, ಯಂತ್ರೋಪಕರಣಗಳ ಬಿಡಿಭಾಗಗಳು ಮತ್ತು ಡ್ರೋನ್ ಹಾರ್ಡ್‌ವೇರ್‌ವರೆಗೆ — Byalance 100% ನಿಯಮಬದ್ಧ ವಸ್ತುಗಳನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಭಾರತೀಯ ಕೇಂದ್ರಕ್ಕೆ ಆಮದು ಮಾಡುತ್ತದೆ.",
    complianceBadge: "ಕಟ್ಟುನಿಟ್ಟಾದ ಅನುಸರಣೆ ಭರವಸೆ",
    complianceTitle: "100% ಕಾನೂನುಬದ್ಧ ಮತ್ತು ಅಧಿಕೃತ ವಸ್ತುಗಳು ಮಾತ್ರ",
    complianceDesc: "Byalance ವಿದೇಶಿ ವ್ಯಾಪಾರ ಮಹಾನಿರ್ದೇಶನಾಲಯ (DGFT), ಕೇಂದ್ರೀಯ ಪರೋಕ್ಷ ತೆರಿಗೆಗಳು ಮತ್ತು ಕಸ್ಟಮ್ಸ್ ಮಂಡಳಿ (CBIC) ಮತ್ತು ಭಾರತೀಯ ಕಸ್ಟಮ್ಸ್ ICEGATE ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ನಾವು ಯಾವುದೇ ನಿರ್ಬಂಧಿತ ಅಥವಾ ನಿಷೇಧಿತ ವಸ್ತುಗಳನ್ನು ಆಮದು ಮಾಡಿಕೊಳ್ಳುವುದಿಲ್ಲ.",
    compliancePoints: [
      "ನಿಖರವಾದ 8-ಅಂಕಿಯ HSN ವರ್ಗೀಕರಣ",
      "ಅಧಿಕೃತ ಬಿಲ್ ಆಫ್ ಎಂಟ್ರಿ (Bill of Entry)",
      "ವಿದೇಶಿ ಪೂರೈಕೆದಾರರ ಅಧಿಕೃತ ಮೂಲ ಇನ್‌ವಾಯ್ಸ್",
      "100% ಇನ್‌ಪುಟ್ ಟ್ಯಾಕ್ಸ್ ಕ್ರೆಡಿಟ್ (ITC) ಪಡೆಯಲು GST ಇನ್‌ವಾಯ್ಸ್"
    ],
    ctaQuestion: "ಪರಿಶೀಲಿಸಲು ನಿರ್ದಿಷ್ಟ ಘಟಕ ಅಥವಾ ಭಾಗ ಸಂಖ್ಯೆ (Part Number) ಇದೆಯೇ?",
    ctaButton: "ಆಮದು ಸಾಧ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
    categories: [
      {
        icon: Layers,
        title: 'ಸೆನ್ಸಾರ್‌ಗಳು ಮತ್ತು ಮಾಡ್ಯೂಲ್‌ಗಳು',
        subtitle: 'ನಿಖರ ಸೆನ್ಸಿಂಗ್ ಮತ್ತು ವೈರ್‌ಲೆಸ್ ನೋಡ್‌ಗಳು',
        examples: 'IoT ಸೆನ್ಸಾರ್‌ಗಳು, ಪರಿಸರ ಮತ್ತು ಅನಿಲ ಸಂವೇದಕಗಳು, ಆಪ್ಟಿಕಲ್, LiDAR, IMU, ಅಲ್ಟ್ರಾಸಾನಿಕ್, BLE, LoRa, Wi-Fi ಮತ್ತು RF ಮಾಡ್ಯೂಲ್‌ಗಳು.',
        badge: 'ಹೆಚ್ಚಿನ ಬೇಡಿಕೆ',
        tag: 'ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಮತ್ತು GST ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ'
      },
      {
        icon: Cpu,
        title: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ಕಾಂಪೊನೆಂಟ್‌ಗಳು',
        subtitle: 'ಸೆಮಿಕಂಡಕ್ಟರ್‌ಗಳು ಮತ್ತು ಆಕ್ಟಿವ್ / ಪ್ಯಾಸಿವ್ ಭಾಗಗಳು',
        examples: 'ಮೈಕ್ರೊಕಂಟ್ರೋಲರ್‌ಗಳು (MCUs), FPGAs, ಪವರ್ IC ಗಳು, ಡೆವಲಪ್‌ಮೆಂಟ್ ಬೋರ್ಡ್‌ಗಳು, ಪ್ರೆಸಿಷನ್ ಪ್ಯಾಸಿವ್ಸ್, ಕನೆಕ್ಟರ್‌ಗಳು ಮತ್ತು ಕಸ್ಟಮ್ PCB ಗಳು.',
        tag: 'ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಮತ್ತು GST ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ'
      },
      {
        icon: GraduationCap,
        title: 'STEM ಕಿಟ್‌ಗಳು',
        subtitle: 'ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಪ್ರೊಟೊಟೈಪಿಂಗ್ ಕಲಿಕಾ ಸೆಟ್‌ಗಳು',
        examples: 'DIY ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಕಿಟ್‌ಗಳು, ರೋಬೋಟಿಕ್ಸ್ ಸ್ಟಾರ್ಟರ್ ಸೆಟ್‌ಗಳು, ಸೆನ್ಸರ್ ಪ್ರಯೋಗ ಮಾಡ್ಯೂಲ್‌ಗಳು, ಶಾಲೆಗಳು ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳಿಗೆ ಕೋಡಿಂಗ್ ಕಿಟ್‌ಗಳು.',
        tag: 'ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಮತ್ತು GST ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ'
      },
      {
        icon: Cog,
        title: 'ಯಂತ್ರೋಪಕರಣಗಳು ಮತ್ತು ಬಿಡಿಭಾಗಗಳು',
        subtitle: 'ಕೈಗಾರಿಕಾ ಮೆಕ್ಯಾನಿಕಲ್ ಮತ್ತು ಆಟೊಮೇಷನ್ ಸ್ಪೇರ್‌ಗಳು',
        examples: 'CNC-ಮೆಷಿನ್ಡ್ ಭಾಗಗಳು, ಸರ್ವೋ ಮತ್ತು ಸ್ಟೆಪ್ಪರ್ ಮೋಟಾರ್‌ಗಳು, ಲೀನಿಯರ್ ಮೋಷನ್ ಗೈಡ್‌ಗಳು, ನ್ಯೂಮ್ಯಾಟಿಕ್/ಹೈಡ್ರಾಲಿಕ್ ಫಿಟ್ಟಿಂಗ್‌ಗಳು.',
        tag: 'ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಮತ್ತು GST ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ'
      },
      {
        icon: Bot,
        title: 'ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು AI ಉತ್ಪನ್ನಗಳು',
        subtitle: 'ಬುದ್ಧಿವಂತ ವ್ಯವಸ್ಥೆಗಳು ಮತ್ತು ಎಡ್ಜ್ ಕಂಪ್ಯೂಟ್',
        examples: 'ರೋಬೋಟಿಕ್ ಆರ್ಮ್ಸ್, AI ವಿಷನ್ ಆಕ್ಸಿಲರೇಟರ್ ಬೋರ್ಡ್‌ಗಳು, ಎಡ್ಜ್ AI ಕಂಪ್ಯೂಟಿಂಗ್ ಕಿಟ್‌ಗಳು, ರೋಬೋಟಿಕ್ ಗ್ರಿಪ್ಪರ್‌ಗಳು ಮತ್ತು ಮೊಬೈಲ್ ರೋಬೋಟ್ ಕಿಟ್‌ಗಳು.',
        tag: 'ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಮತ್ತು GST ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ'
      },
      {
        icon: Wrench,
        title: 'ಹಾರ್ಡ್‌ವೇರ್ ಪರಿಕರಗಳು',
        subtitle: 'ಪರೀಕ್ಷೆ, ಜೋಡಣೆ ಮತ್ತು ಮಾಪನಾಂಕ ನಿರ್ಣಯ ಉಪಕರಣಗಳು',
        examples: 'ಡಿಜಿಟಲ್ ಆಸಿಲೋಸ್ಕೋಪ್‌ಗಳು, ಮಲ್ಟಿಮೀಟರ್‌ಗಳು, ನಿಖರ ಬೆಸುಗೆ ರಿವರ್ಕ್ ಕೇಂದ್ರಗಳು, ಕ್ಯಾಲಿಬ್ರೇಶನ್ ಸಾಧನಗಳು ಮತ್ತು ವರ್ಕ್‌ಶಾಪ್ ಉಪಕರಣಗಳು.',
        tag: 'ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಮತ್ತು GST ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ'
      },
      {
        icon: Plane,
        title: 'ಡ್ರೋನ್‌ಗಳು ಮತ್ತು UAV ಕಾಂಪೊನೆಂಟ್‌ಗಳು',
        subtitle: 'ಅನುಸರಣೆ ಹೊಂದಿರುವ ಫ್ಲೈಟ್ ಹಾರ್ಡ್‌ವೇರ್ ಮತ್ತು ಏವಿಯಾನಿಕ್ಸ್',
        examples: 'ಫ್ಲೈಟ್ ಕಂಟ್ರೋಲರ್‌ಗಳು, ಬ್ರಶ್‌ಲೆಸ್ ಮೋಟಾರ್‌ಗಳು, ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸ್ಪೀಡ್ ಕಂಟ್ರೋಲರ್‌ಗಳು (ESCs), ಕಾರ್ಬನ್ ಫೈಬರ್ ಫ್ರೇಮ್‌ಗಳು ಮತ್ತು ಟೆಲಿಮೆಟ್ರಿ ವ್ಯವಸ್ಥೆಗಳು.',
        tag: 'ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಮತ್ತು GST ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ'
      }
    ]
  },
  te: {
    legalBadge: "చట్టబద్ధమైన వస్తువులు మాత్రమే · DGFT & కస్టమ్స్ నిబంధనల పాటింపు",
    title: "మేము వేటిని దిగుమతి చేస్తాము",
    desc: "ఖచ్చితమైన సెన్సార్లు మరియు ఎలక్ట్రానిక్ కాంపోనెంట్ల నుండి అధునాతన రోబోటిక్స్, STEM లెర్నింగ్ కిట్లు, మెషినరీ విడిభాగాలు మరియు డ్రోన్ హార్డ్‌వేర్ వరకు — Byalance 100% నిబంధనలకు లోబడి మీ భారతీయ సౌకర్యానికి నేరుగా దిగుమతి చేస్తుంది.",
    complianceBadge: "ఖచ్చితమైన నిబంధనల హామీ",
    complianceTitle: "100% చట్టబద్ధమైన మరియు అధీకృత వస్తువులు మాత్రమే",
    complianceDesc: "Byalance డైరెక్టరేట్ జనరల్ ఆఫ్ ఫారిన్ ట్రేడ్ (DGFT), సెంట్రల్ బోర్డ్ ఆఫ్ ఇన్‌డైరెక్ట్ టాక్సెస్ & కస్టమ్స్ (CBIC), మరియు ఇండియన్ కస్టమ్స్ ICEGATE నిబంధనల పరిధిలో మాత్రమే పనిచేస్తుంది. మేము నిషేధిత లేదా పరిమిత వస్తువులను దిగుమతి చేయము.",
    compliancePoints: [
      "ఖచ్చితమైన 8-అంకెల HSN వర్గీకరణ",
      "అధికారిక బిల్ ఆఫ్ ఎంట్రీ (Bill of Entry)",
      "విదేశీ విక్రేత యొక్క చట్టబద్ధమైన అసలు ఇన్వాయిస్",
      "100% ఇన్‌పుట్ టాక్స్ క్రెడిట్ (ITC) కోసం GST ఇన్వాయిస్"
    ],
    ctaQuestion: "పరిశీలించడానికి ఏదైనా నిర్దిష్ట భాగం లేదా పార్ట్ నంబర్ ఉందా?",
    ctaButton: "దిగుమతి సాధ్యతను ధృవీకరించండి",
    categories: [
      {
        icon: Layers,
        title: 'సెన్సార్లు మరియు మాడ్యూల్స్',
        subtitle: 'ఖచ్చితమైన సెన్సింగ్ మరియు వైర్‌లెస్ నోడ్స్',
        examples: 'IoT సెన్సార్లు, పర్యావరణ & గ్యాస్ సెన్సార్లు, ఆప్టికల్, LiDAR, IMU, అల్ట్రాసోనిక్, BLE, LoRa, Wi-Fi మరియు RF మాడ్యూల్స్.',
        badge: 'అధిక డిమాండ్',
        tag: 'కస్టమ్స్ క్లియరెన్స్ & GST ఇన్వాయిస్‌తో'
      },
      {
        icon: Cpu,
        title: 'ఎలక్ట్రానిక్స్ మరియు కాంపోనెంట్లు',
        subtitle: 'సెమీకండక్టర్లు మరియు యాక్టివ్ / పాసివ్ విడిభాగాలు',
        examples: 'మైక్రోకంట్రోలర్లు (MCUs), FPGAs, పవర్ ICs, డెవలప్‌మెంట్ బోర్డులు, ప్రెసిషన్ పాసివ్స్, కనెక్టర్లు మరియు కస్టమ్ PCBs.',
        tag: 'కస్టమ్స్ క్లియరెన్స్ & GST ఇన్వాయిస్‌తో'
      },
      {
        icon: GraduationCap,
        title: 'STEM కిట్లు',
        subtitle: 'విద్యా మరియు ప్రోటోటైపింగ్ లెర్నింగ్ సెట్లు',
        examples: 'DIY ఎలక్ట్రానిక్స్ కిట్లు, రోబోటిక్స్ స్టార్టర్ సెట్లు, సెన్సార్ ప్రయోగ మాడ్యూల్స్, పాఠశాలలు & ల్యాబ్‌ల కోసం కోడింగ్ కిట్లు.',
        tag: 'కస్టమ్స్ క్లియరెన్స్ & GST ఇన్వాయిస్‌తో'
      },
      {
        icon: Cog,
        title: 'యంత్రాలు మరియు విడిభాగాలు',
        subtitle: 'పారిశ్రామిక మెకానికల్ మరియు ఆటోమేషన్ స్పేర్స్',
        examples: 'CNC-మెషిన్డ్ భాగాలు, సర్వో & స్టెప్పర్ మోటార్లు, లీనియర్ మోషన్ గైడ్స్, న్యూమాటిక్/హైడ్రాలిక్ ఫిట్టింగ్స్ మరియు ట్రాన్స్‌మిషన్ స్పేర్స్.',
        tag: 'కస్టమ్స్ క్లియరెన్స్ & GST ఇన్వాయిస్‌తో'
      },
      {
        icon: Bot,
        title: 'రోబోటిక్స్ మరియు AI ఉత్పత్తులు',
        subtitle: 'ఇంటెలిజెంట్ సిస్టమ్స్ మరియు ఎడ్జ్ కంప్యూట్',
        examples: 'రోబోటిక్ ఆర్మ్స్, AI విజన్ యాక్సిలరేటర్ బోర్డులు, ఎడ్జ్ AI కంప్యూటింగ్ కిట్లు, రోబోటిక్ గ్రిప్పర్స్ మరియు అటానమస్ మొబైల్ కిట్లు.',
        tag: 'కస్టమ్స్ క్లియరెన్స్ & GST ఇన్వాయిస్‌తో'
      },
      {
        icon: Wrench,
        title: 'హార్డ్‌వేర్ టూల్స్',
        subtitle: 'టెస్టింగ్, అసెంబ్లీ మరియు కాలిబ్రేషన్ పరికరాలు',
        examples: 'డిజిటల్ ఓసిల్లోస్కోప్‌లు, మల్టీమీటర్లు, ప్రెసిషన్ సోల్డరింగ్ రీవర్క్ స్టేషన్లు, కాలిబ్రేషన్ పరికరాలు మరియు వర్క్‌షాప్ టూల్స్.',
        tag: 'కస్టమ్స్ క్లియరెన్స్ & GST ఇన్వాయిస్‌తో'
      },
      {
        icon: Plane,
        title: 'డ్రోన్లు మరియు UAV భాగాలు',
        subtitle: 'ఫ్లైట్ హార్డ్‌వేర్ మరియు ఏవియానిక్స్',
        examples: 'ఫ్లైట్ కంట్రోలర్లు, బ్రష్‌లెస్ మోటార్లు, ఎలక్ట్రానిక్ స్పీడ్ కంట్రోలర్లు (ESCs), కార్బన్ ఫైబర్ ఫ్రేమ్‌లు మరియు టెలిమెట్రీ సిస్టమ్స్.',
        tag: 'కస్టమ్స్ క్లియరెన్స్ & GST ఇన్వాయిస్‌తో'
      }
    ]
  },
  mr: {
    legalBadge: "केवळ कायदेशीर वस्तू · DGFT आणि कस्टम्स अनुपालन",
    title: "आम्ही काय आयात करतो",
    desc: "अचूक सेन्सर्स आणि इलेक्ट्रॉनिक घटकांपासून ते प्रगत रोबोटिक्स, STEM लर्निंग किट्स, मशिनरी सुटे भाग आणि ड्रोन हार्डवेअरपर्यंत — Byalance 100% नियमांचे पालन करून वस्तू थेट तुमच्या भारतीय केंद्रात आयात करते.",
    complianceBadge: "कठोर अनुपालन हमी",
    complianceTitle: "केवळ 100% कायदेशीर आणि अधिकृत वस्तू",
    complianceDesc: "Byalance डायरेक्टरेट जनरल ऑफ फॉरेन ट्रेड (DGFT), सेंट्रल बोर्ड ऑफ इनडायरेक्ट टॅक्सेस अँड कस्टम्स (CBIC) आणि भारतीय कस्टम्स ICEGATE नियमांच्या कायदेशीर चौकटीत पूर्णपणे कार्य करते. आम्ही कोणत्याही प्रतिबंधित वस्तूंची आयात करत नाही.",
    compliancePoints: [
      "अचूक 8-अंकी HSN वर्गीकरण",
      "अधिकृत बिल ऑफ एंट्री (Bill of Entry)",
      "विदेशी पुरवठादाराचे वैध मूळ इनव्हॉइस",
      "100% इनपुट टॅक्स क्रेडिट (ITC) मिळवण्यासाठी GST इनव्हॉइस"
    ],
    ctaQuestion: "तपासण्यासाठी तुमच्याकडे काही विशिष्ट पार्ट नंबर किंवा घटक आहे का?",
    ctaButton: "आयात व्यवहार्यता तपासा",
    categories: [
      {
        icon: Layers,
        title: 'सेन्सर्स आणि मॉड्यूल्स',
        subtitle: 'अचूक सेन्सिंग आणि वायरलेस नोड्स',
        examples: 'IoT सेन्सर्स, पर्यावरण आणि गॅस सेन्सर्स, ऑप्टिकल, LiDAR, IMU, अल्ट्रासोनिक, BLE, LoRa, Wi-Fi आणि RF मॉड्यूल्स.',
        badge: 'उच्च मागणी',
        tag: 'कस्टम्स क्लिअरन्स व GST इनव्हॉइससह'
      },
      {
        icon: Cpu,
        title: 'इलेक्ट्रॉनिक्स आणि घटक',
        subtitle: 'सेमीकंडक्टर आणि ॲक्टिव्ह / पॅसिव्ह भाग',
        examples: 'मायक्रोकंट्रोलर्स (MCUs), FPGAs, पॉवर ICs, डेव्हलपमेंट बोर्ड्स, प्रिसिजन पॅसिव्ह्स, कनेक्टर्स आणि कस्टम PCBs.',
        tag: 'कस्टम्स क्लिअरन्स व GST इनव्हॉइससह'
      },
      {
        icon: GraduationCap,
        title: 'STEM किट्स',
        subtitle: 'शैक्षणिक आणि प्रोटोटायपिंग लर्निंग सेट्स',
        examples: 'DIY इलेक्ट्रॉनिक्स किट्स, रोबोटिक्स स्टार्टर सेट्स, सेन्सर प्रयोग मॉड्यूल्स, शाळा आणि लॅब्ससाठी कोडिंग किट्स.',
        tag: 'कस्टम्स क्लिअरन्स व GST इनव्हॉइससह'
      },
      {
        icon: Cog,
        title: 'मशिनरी आणि सुटे भाग',
        subtitle: 'औद्योगिक यांत्रिक आणि ऑटोमेशन स्पेअर्स',
        examples: 'CNC-मशीन्ड भाग, सर्व्हो आणि स्टेपर मोटर्स, लिनियर मोशन गाइड्स, न्यूमॅटिक/हायड्रॉलिक फिटिंग्ज आणि ट्रान्समिशन स्पेअर्स.',
        tag: 'कस्टम्स क्लिअरन्स व GST इनव्हॉइससह'
      },
      {
        icon: Bot,
        title: 'रोबोटिक्स आणि AI उत्पादने',
        subtitle: 'इंटेलिजंट सिस्टीम्स आणि एज कॉम्प्युट',
        examples: 'रोबोटिक आर्म्स, AI व्हिजन ॲक्सिलरेटर बोर्ड्स, एज AI कॉम्प्युटिंग किट्स, रोबोटिक ग्रिपर्स आणि ऑटोनॉमस मोबाइल किट्स.',
        tag: 'कस्टम्स क्लिअरन्स व GST इनव्हॉइससह'
      },
      {
        icon: Wrench,
        title: 'हार्डवेअर टूल्स',
        subtitle: 'टेस्टिंग, असेंब्ली आणि कॅलिब्रेशन उपकरणे',
        examples: 'डिजिटल ऑसिलोस्कोप्स, मल्टीमीटर्स, प्रिसिजन सोल्डरिंग रिवर्क स्टेशन्स, कॅलिब्रेशन उपकरणे आणि वर्कशॉप टूल्स.',
        tag: 'कस्टम्स क्लिअरन्स व GST इनव्हॉइससह'
      },
      {
        icon: Plane,
        title: 'ड्रोन्स आणि UAV घटक',
        subtitle: 'फ्लाइट हार्डवेअर आणि एव्हिऑनिक्स',
        examples: 'फ्लाइट कंट्रोलर्स, ब्रशलेस मोटर्स, इलेक्ट्रॉनिक स्पीड कंट्रोलर्स (ESCs), कार्बन फायबर फ्रेम्स आणि टेलिमेट्री सिस्टीम्स.',
        tag: 'कस्टम्स क्लिअरन्स व GST इनव्हॉइससह'
      }
    ]
  },
  ta: {
    legalBadge: "சட்டப்பூர்வ பொருட்கள் மட்டுமே · DGFT & சுங்க இணக்கம்",
    title: "நாங்கள் எவற்றை இறக்குமதி செய்கிறோம்",
    desc: "துல்லியமான சென்சார்கள் மற்றும் எலக்ட்ரானிக் உதிரிபாகங்கள் முதல் மேம்பட்ட ரோபாட்டிக்ஸ், STEM கற்றல் கிட்கள், இயந்திர பாகங்கள் மற்றும் ட்ரோன் வன்பொருள் வரை — Byalance 100% விதிமுறைகளுக்கு உட்பட்டு உங்கள் இந்திய மையத்திற்கு நேரடியாக இறக்குமதி செய்கிறது.",
    complianceBadge: "கடுமையான இணக்க உத்தரவாதம்",
    complianceTitle: "100% சட்டப்பூர்வ மற்றும் அங்கீகரிக்கப்பட்ட பொருட்கள் மட்டுமே",
    complianceDesc: "Byalance வெளிநாட்டு வர்த்தக இயக்குநரகம் (DGFT), மறைமுக வரிகள் மற்றும் சுங்க வாரியம் (CBIC) மற்றும் இந்திய சுங்க ICEGATE விதிகளின் சட்ட வரம்பிற்குள் மட்டுமே செயல்படுகிறது. நாங்கள் தடைசெய்யப்பட்ட அல்லது கட்டுப்படுத்தப்பட்ட பொருட்களை இறக்குமதி செய்வதில்லை.",
    compliancePoints: [
      "துல்லியமான 8-இலக்க HSN வகைப்பாடு",
      "அதிகாரப்பூர்வ பில் ஆஃப் என்ட்ரி (Bill of Entry)",
      "வெளிநாட்டு விற்பனையாளரின் அசல் இன்வாய்ஸ்",
      "100% உள்ளீட்டு வரிச் சலுகை (ITC) பெற GST இன்வாய்ஸ்"
    ],
    ctaQuestion: "சரிபார்க்க ஏதேனும் குறிப்பிட்ட பாகம் அல்லது பகுதி எண் (Part Number) உள்ளதா?",
    ctaButton: "இறக்குமதி சாத்தியத்தை சரிபார்க்கவும்",
    categories: [
      {
        icon: Layers,
        title: 'சென்சார்கள் மற்றும் தொகுதிகள்',
        subtitle: 'துல்லியமான சென்சிங் & வயர்லெஸ் முனைகள்',
        examples: 'IoT சென்சார்கள், சுற்றுச்சூழல் & எரிவாயு சென்சார்கள், ஆப்டிகல், LiDAR, IMU, அல்ட்ராசோனிக், BLE, LoRa, Wi-Fi மற்றும் RF தொகுதிகள்.',
        badge: 'அதிக தேவை',
        tag: 'சுங்க அனுமதி & GST இன்வாய்ஸுடன்'
      },
      {
        icon: Cpu,
        title: 'எலக்ட்ரானிக்ஸ் மற்றும் உதிரிபாகங்கள்',
        subtitle: 'செமிகண்டக்டர்கள் & செயலில் / செயலற்ற பாகங்கள்',
        examples: 'மைக்ரோகண்ட்ரோலர்கள் (MCUs), FPGAs, பவர் ICs, டெவலப்மென்ட் போர்டுகள், துல்லியமான பாசிவ்ஸ், கனெக்டர்கள் மற்றும் தனிப்பயன் PCBகள்.',
        tag: 'சுங்க அனுமதி & GST இன்வாய்ஸுடன்'
      },
      {
        icon: GraduationCap,
        title: 'STEM கிட்கள்',
        subtitle: 'கல்வி மற்றும் முன்மாதிரி கற்றல் தொகுப்புகள்',
        examples: 'DIY எலக்ட்ரானிக்ஸ் கிட்கள், ரோபாட்டிக்ஸ் ஸ்டார்ட்டர் செட்கள், சென்சார் பரிசோதனை தொகுதிகள், பள்ளிகள் மற்றும் ஆய்வகங்களுக்கான கோடிங் கிட்கள்.',
        tag: 'சுங்க அனுமதி & GST இன்வாய்ஸுடன்'
      },
      {
        icon: Cog,
        title: 'இயந்திரங்கள் மற்றும் உதிரிபாகங்கள்',
        subtitle: 'தொழில்துறை மெக்கானிக்கல் & ஆட்டோமேஷன் உதிரிபாகங்கள்',
        examples: 'CNC-இயந்திர பாகங்கள், சர்வோ & ஸ்டெப்பர் மோட்டார்கள், லீனியர் மோஷன் வழிகாட்டிகள், நியூமேடிக்/ஹைட்ராலிக் பொருத்துதல்கள்.',
        tag: 'சுங்க அனுமதி & GST இன்வாய்ஸுடன்'
      },
      {
        icon: Bot,
        title: 'ரோபாட்டிக்ஸ் மற்றும் AI தயாரிப்புகள்',
        subtitle: 'நுண்ணறிவு அமைப்புகள் & எட்ஜ் கம்ப்யூட்',
        examples: 'ரோபோடிக் கைகள், AI விஷன் ஆக்சிலரேட்டர் போர்டுகள், எட்ஜ் AI கம்ப்யூட்டிங் கிட்கள், ரோபோடிக் கிரிப்பர்கள் மற்றும் தன்னாட்சி மொபைல் கிட்கள்.',
        tag: 'சுங்க அனுமதி & GST இன்வாய்ஸுடன்'
      },
      {
        icon: Wrench,
        title: 'வன்பொருள் கருவிகள்',
        subtitle: 'சோதனை, அசெம்பிளி மற்றும் அளவுத்திருத்த கருவிகள்',
        examples: 'டிஜிட்டல் அலைக்காட்டிகள் (Oscilloscopes), மல்டிமீட்டர்கள், துல்லியமான சாலிடரிங் நிலையங்கள், அளவுத்திருத்த சாதனங்கள்.',
        tag: 'சுங்க அனுமதி & GST இன்வாய்ஸுடன்'
      },
      {
        icon: Plane,
        title: 'ட்ரோன்கள் மற்றும் UAV பாகங்கள்',
        subtitle: 'விமான வன்பொருள் மற்றும் ஏவியோனிக்ஸ்',
        examples: 'விமானக் கட்டுப்பாட்டாளர்கள் (Flight Controllers), பிரஷ்லெஸ் மோட்டார்கள், எலக்ட்ரானிக் வேகக் கட்டுப்பாட்டாளர்கள் (ESCs), கார்பன் ஃபைபர் பிரேம்கள்.',
        tag: 'சுங்க அனுமதி & GST இன்வாய்ஸுடன்'
      }
    ]
  }
};

export default function ImportCategories() {
  const { language } = useLanguage();
  const currentLang = (language as Language) in importCategoriesI18n ? (language as Language) : 'en';
  const t = importCategoriesI18n[currentLang];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200" id="import-categories">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-700" /> {t.legalBadge}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-400/80 transition-all duration-200 flex flex-col justify-between relative group"
              >
                {cat.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full">
                    {cat.badge}
                  </span>
                )}
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mb-3">
                    {cat.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.examples}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] font-bold text-slate-500 group-hover:text-amber-700 transition-colors">
                  <span>{cat.tag}</span>
                </div>
              </div>
            );
          })}

          {/* COMPLIANCE ASSURANCE CARD (8th box to balance grid) */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> {t.complianceBadge}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {t.complianceTitle}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {t.complianceDesc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.compliancePoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-xs text-slate-400 font-medium">{t.ctaQuestion}</span>
              <a
                href="https://wa.me/917406296116?text=Hi%20Byalance%2C%20I%20want%20to%20check%20if%20a%20product%20can%20be%20imported%20to%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-xl shadow transition-all shrink-0 whitespace-nowrap"
              >
                {t.ctaButton} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
