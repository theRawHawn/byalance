import React from 'react';
import { motion } from 'motion/react';
import { useLanguage, Language } from '../context/LanguageContext';
import { Layers, ChevronRight } from 'lucide-react';

const toolCompatibilityContent: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  footnote: string;
}> = {
  en: {
    badge: 'Integrations',
    title: 'Seamless Tool Compatibility',
    subtitle: 'Transitioning your accounts to Byalance is friction-free. We synchronize perfectly with leading financial platforms, billing software, and custom spreadsheets.',
    footnote: 'We can work with whatever setup your business is currently using. Seamless custom onboarding is guaranteed.'
  },
  hi: {
    badge: 'इंटीग्रेशन (सॉफ्टवेयर)',
    title: 'सहज टूल अनुकूलता',
    subtitle: 'अपने खातों को Byalance पर स्थानांतरित करना बेहद आसान है। हम प्रमुख वित्तीय प्लेटफॉर्म, बिलिंग सॉफ्टवेयर और स्प्रेडशीट के साथ पूरी तरह से जुड़े हुए हैं।',
    footnote: 'आपकी कंपनी वर्तमान में जिस भी सिस्टम या कस्टम सेटअप का उपयोग कर रही है, हम उसके साथ सीधे काम कर सकते हैं।'
  },
  kn: {
    badge: 'ಸಂಯೋಜನೆಗಳು (ಸಿಸ್ಟಮ್ಸ್)',
    title: 'ಸುಲಭ ಸಾಫ್ಟ್‌ವೇರ್ ಹೊಂದಾಣಿಕೆ',
    subtitle: 'ನಿಮ್ಮ ಖಾತೆಗಳನ್ನು ಬೈಯಾಲನ್ಸ್‌ಗೆ ವರ್ಗಾಯಿಸುವುದು ಅತ್ಯಂತ ಸರಳವಾಗಿದೆ. ನಾವು ಪ್ರಮುಖ ಹಣಕาสು ವೇದಿಕೆಗಳು, ಬಿಲ್ಲಿಂಗ್ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಸ್ಪ್ರೆಡ್‌ಶೀಟ್‌ಗಳೊಂದಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಸಿಂಕ್ ಆಗುತ್ತೇವೆ.',
    footnote: 'ನಿಮ್ಮ ಸಂಸ್ಥೆ ಪ್ರಸ್ತುತ ಬಳಸುತ್ತಿರುವ ಯಾವುದೇ ಸಿಸ್ಟಮ್ ಅಥವಾ ಕಸ್ಟಮ್ ಸೆಟಪ್‌ನೊಂದಿಗೆ ನಾವು ಸುಲಭವಾಗಿ ಕೆಲಸ ಮಾಡಬಲ್ಲೆವು.'
  },
  te: {
    badge: 'ఇంటిగ్రేషన్స్ (సాఫ్ట్‌వేర్)',
    title: 'సులభమైన సాఫ్ట్‌വേర్ అనుకూలత',
    subtitle: 'మీ ఖాతాలను Byalance కి బదిలీ చేయడం చాలా సులభం. మేము ప్రముఖ ఫైనాన్షియల్ ప్లాట్‌ఫారమ్‌లు, బిల్లింగ్ యాప్స్ మరియు స్ప్రెడ్‌షీట్‌లతో ఖచ్చితంగా సింక్ అవుతాము.',
    footnote: 'ప్రస్తుతం మీ వ్యాపారం ఉపయోగిస్తున్న ఏ సిస్టమ్ లేదా కస్టమ్ సెటప్ తో అయినా మేము సులభంగా పని చేయగలము.'
  },
  mr: {
    badge: 'एकीकरण (सिस्टम)',
    title: 'सुलभ सॉफ्टवेअर अनुकूलता',
    subtitle: 'तुमची खाती Byalance वर हस्तांतरित करणे अत्यंत सोपे आहे. आम्ही आघाडीच्या आर्थिक प्लॅटफॉर्म, बिलिंग सॉफ्टवेअर आणि स्प्रेडशीटशी तंतोतंत जोडले जातो.',
    footnote: 'तुमचा व्यवसाय सध्या जो काही सिस्टीम किंवा कस्टमाइज्ड सेटअप वापरत असेल, आम्ही त्यात सहज काम करू शकतो.'
  },
  ta: {
    badge: 'இணைப்புகள் (மென்பொருள்)',
    title: 'எளிதான மென்பொருள் இணக்கத்தன்மை',
    subtitle: 'உங்கள் கணக்குகளை Byalance க்கு மாற்றுவது மிகவும் எளிது. முன்னணி நிதி தளங்கள், பில்லிங் சாப்ட்வேர் மற்றும் விரிதாள்களுடன் நாங்கள் கச்சிதமாக இணைகிறோம்.',
    footnote: 'உங்கள் நிறுவனம் தற்போது பயன்படுத்தும் எந்தவொரு சிஸ்டம் அல்லது தனிப்பயன் அமைப்பிலும் நாங்கள் எளிதாக வேலை செய்ய முடியும்.'
  }
};

interface ToolLogo {
  id: string;
  name: string;
  colorClass: string;
  renderLogo?: () => React.JSX.Element;
  imageSrc?: string;
}

const tools: ToolLogo[] = [
  {
    id: 'zoho',
    name: 'Zoho Books',
    colorClass: 'hover:border-amber-400 hover:shadow-amber-50',
    imageSrc: '/custom-logos/zoho_books_logo.svg',
    renderLogo: () => (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="14" height="14" rx="3" fill="#E21C26" />
        <rect x="22" y="4" width="14" height="14" rx="3" fill="#159A44" />
        <rect x="4" y="22" width="14" height="14" rx="3" fill="#1C6CA1" />
        <rect x="22" y="22" width="14" height="14" rx="3" fill="#F4B01B" />
      </svg>
    )
  },
  {
    id: 'tally',
    name: 'Tally Prime',
    colorClass: 'hover:border-teal-500 hover:shadow-teal-50',
    imageSrc: '/custom-logos/tally_prime_logo-1.svg',
    renderLogo: () => (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#008080" />
        <path d="M12 14 H28 M20 14 V28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <rect x="20" y="25" width="8" height="3" fill="#FFE135" rx="1" />
      </svg>
    )
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    colorClass: 'hover:border-green-600 hover:shadow-green-50',
    imageSrc: '/custom-logos/quick_books_logo.svg',
    renderLogo: () => (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="16" fill="#2CA01C" />
        <circle cx="16" cy="20" r="6" stroke="#FFFFFF" strokeWidth="3" fill="none" />
        <circle cx="24" cy="20" r="6" stroke="#FFFFFF" strokeWidth="3" fill="none" />
      </svg>
    )
  },
  {
    id: 'sap',
    name: 'SAP ERP',
    colorClass: 'hover:border-blue-700 hover:shadow-blue-50',
    imageSrc: '/custom-logos/sap_logo.png',
    renderLogo: () => (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12 L36 8 L32 28 L8 32 Z" fill="#0064D2" />
        <text x="20" y="24" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="10" fill="#FFFFFF" textAnchor="middle">SAP</text>
      </svg>
    )
  },
  {
    id: 'excel',
    name: 'MS Excel',
    colorClass: 'hover:border-emerald-600 hover:shadow-emerald-50',
    renderLogo: () => (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="32" height="28" rx="4" fill="#107C41" />
        <path d="M14 12 L26 28 M26 12 L14 28" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    colorClass: 'hover:border-green-500 hover:shadow-green-50',
    renderLogo: () => (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="28" height="32" rx="4" fill="#0F9D58" />
        <path d="M12 12 H28 M12 20 H28 M12 28 H28" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="8" x2="20" y2="32" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
      </svg>
    )
  }
];

const toolCandidatePaths: Record<string, string[]> = {
  zoho: [
    '/custom-logos/zoho_books_logo.svg'
  ],
  tally: [
    '/custom-logos/tally_prime_logo-1.svg'
  ],
  quickbooks: [
    '/custom-logos/quick_books_logo.svg'
  ],
  sap: [
    '/custom-logos/sap_logo.png',
    '/custom-logos/sap_logo.svg'
  ]
};

function ToolLogoDisplay({ tool }: { tool: ToolLogo }) {
  const candidates = toolCandidatePaths[tool.id] || [];
  const [candidateIndex, setCandidateIndex] = React.useState(0);
  const [useFallback, setUseFallback] = React.useState(candidates.length === 0);

  const handleError = () => {
    if (candidateIndex + 1 < candidates.length) {
      setCandidateIndex(prev => prev + 1);
    } else {
      setUseFallback(true);
    }
  };

  if (!useFallback && candidates.length > 0) {
    let sizeClass = "w-8 h-8";
    if (tool.id === 'zoho') {
      sizeClass = "w-14 h-8 px-0.5 scale-110"; // Scale up Zoho Books SVG considerably
    } else if (tool.id === 'sap') {
      sizeClass = "w-14 h-8 px-0.5 scale-110"; // Scale up SAP PNG logo considerably
    }

    return (
      <img 
        src={candidates[candidateIndex]} 
        alt={`${tool.name} logo`} 
        className={`${sizeClass} object-contain rounded-md`}
        onError={handleError}
        referrerPolicy="no-referrer"
      />
    );
  }

  if (tool.renderLogo) {
    return <tool.renderLogo />;
  }

  return null;
}

export default function ToolCompatibility() {
  const { language } = useLanguage();
  const content = toolCompatibilityContent[language] || toolCompatibilityContent.en;

  // Double listing for seamless infinity carousel
  const carouselTools = [...tools, ...tools, ...tools];

  return (
    <section id="tool-compatibility" className="pt-20 pb-8 md:pb-12 bg-white relative overflow-hidden border-t border-b border-slate-100">
      {/* Decorative vectors */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute left-[8%] bottom-[5%] w-60 h-60 rounded-full bg-slate-50 blur-3xl"></div>
        <div className="absolute right-[5%] top-[5%] w-[400px] h-[400px] rounded-full bg-blue-50/30 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-600 border border-blue-100/50 mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            {content.badge}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight"
          >
            {content.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-slate-600 text-sm md:text-base leading-relaxed font-normal px-2"
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Endless scroll row (right-to-left marquee ticker) */}
        <div className="w-full relative py-6 select-none overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent after:z-20">
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] pointer-events-auto">
            {carouselTools.map((tool, idx) => {
              return (
                <div
                  key={`${tool.id}-${idx}`}
                  className={`flex items-center gap-3.5 px-6 py-3.5 mx-4 bg-slate-50/50 border border-slate-100/85 rounded-2xl transition-all duration-300 opacity-95 hover:opacity-100 hover:bg-white hover:scale-105 pointer-events-auto cursor-pointer ${tool.colorClass} shadow-sm hover:shadow-lg`}
                  title={tool.name}
                >
                  <ToolLogoDisplay tool={tool} />
                  <span className="text-slate-800 font-semibold text-sm tracking-tight whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Static interactive backup grid for quick accessibility */}
        <div className="max-w-4xl mx-auto mt-12 px-4 sm:px-6">
          <div className="bg-gradient-to-br from-blue-600/5 to-slate-50 border border-blue-100/30 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-24 h-24 bg-blue-100/20 rounded-full blur-2xl"></div>
            
            <p className="text-slate-700 text-sm sm:text-base font-medium relative z-10 max-w-2xl mx-auto leading-relaxed">
              💡 <span className="font-semibold text-blue-700">
                {content.footnote}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Styled animation styles directly inside are safe, but let's declare custom keyframe in index.css as well to guarantee high-performance smooth translation */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333%)); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
