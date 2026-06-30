import { useState, useEffect } from 'react';
import { X, AlertTriangle, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

const popupTranslations = {
  en: {
    headerNotice: "STRICT QUARTERLY CAPACITY LIMIT",
    badge: "Client Limit",
    heading: "Pragmatic Quality Control",
    text1: "To guarantee pristine, error-free books & dedicated professional attention, we only onboard",
    text1Highlight: "8 new accounts each quarter",
    statusMessagePart1: "⏳ 5 of 8 slots are locked. Just",
    statusMessagePart2: "3 slots remain",
    statusMessagePart3: "before onboarding closes",
    buttonText: "Claim 1 of 3 Remaining Slots",
    closeButton: "Continue to browse",
    whatsappMessage: "Hi Byalance Team! I want to lock in 1 of the 3 remaining client slots for this quarter. I am ready to start with your bookkeeping & compliance services."
  },
  hi: {
    headerNotice: "कठोर त्रैमासिक क्षमता सीमा",
    badge: "नोटिस",
    heading: "व्यावहारिक गुणवत्ता नियंत्रण",
    text1: "सटीक, त्रुटि-रहित बहीखाता और समर्पित व्यावसायिक ध्यान सुनिश्चित करने के लिए, हम केवल ऑनबोर्ड करते हैं",
    text1Highlight: "प्रत्येक तिमाही में 8 नए खाते",
    statusMessagePart1: "⏳ 8 में से 5 स्लॉट बुक हो चुके हैं। केवल",
    statusMessagePart2: "3 स्लॉट शेष हैं",
    statusMessagePart3: "ऑनबोर्डिंग बंद होने से पहले",
    buttonText: "शेष 3 में से 1 स्लॉट बुक करें",
    closeButton: "ब्राउज़ करना जारी रखें",
    whatsappMessage: "नमस्ते Byalance टीम! मैं इस तिमाही के लिए बचे हुए 3 ग्राहक स्लॉट में से 1 सुरक्षित करना चाहता हूँ। मैं आपकी बहीखाता और अनुपालन सेवाओं को शुरू करने के लिए तैयार हूँ।"
  },
  kn: {
    headerNotice: "ಕಟ್ಟುನಿಟ್ಟಾದ ತ್ರೈಮಾಸಿಕ ಸಾಮರ್ಥ್ಯ ಮಿತಿ",
    badge: "ಸೂಚನೆ",
    heading: "ಪ್ರಾಯೋಗಿಕ ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ",
    text1: "ನಿಖರವಾದ ಮತ್ತು ದೋಷ-ಮುಕ್ತ ಬುಕ್ಕೀಪಿಂಗ್ ಹಾಗೂ ಬದ್ಧ ವೃತ್ತಿಪರ ಗಮನವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು, ನಾವು ಕೇವಲ ಸೇರಿಸಿಕೊಳ್ಳುತ್ತೇವೆ",
    text1Highlight: "ಪ್ರತಿ ತ್ರೈಮಾಸಿಕದಲ್ಲಿ 8 ಹೊಸ ಖಾತೆಗಳು",
    statusMessagePart1: "⏳ 8 ರಲ್ಲಿ 5 ಸ್ಲಾಟ್‌ಗಳು ಈಗಾಗಲೇ ಬುಕ್ ಆಗಿವೆ. ಕೇವಲ",
    statusMessagePart2: "3 ಸ್ಲಾಟ್‌ಗಳು ಉಳಿದಿವೆ",
    statusMessagePart3: "ನೋಂದಣಿ ಮುಚ್ಚುವ ಮೊದಲು",
    buttonText: "ಉಳಿದಿರುವ 3 ರಲ್ಲಿ 1 ಸ್ಲಾಟ್ ಕಾಯ್ದಿರಿಸಿ",
    closeButton: "ವೀಕ್ಷಿಸಲು ಮುಂದುವರಿಯಿರಿ",
    whatsappMessage: "ನಮಸ್ಕಾರ Byalance ತಂಡ! ಈ ತ್ರೈಮಾಸಿಕಕ್ಕೆ ಉಳಿದಿರುವ 3 ಕ್ಲೈಂಟ್ ಸ್ಲಾಟ್‌ಗಳಲ್ಲಿ 1 ಅನ್ನು ಕಾಯ್ದಿರಿಸಲು ನಾನು ಬಯಸುತ್ತೇನೆ. ನಿಮ್ಮ ಬುಕ್ಕೀಪಿಂಗ್ ಮತ್ತು ನಿಯಂತ್ರಣ ಸೇವೆಗಳನ್ನು ಪ್ರಾರಂಭಿಸಲು ನಾನು ಸಿದ್ಧನಿದ್ದೇನೆ."
  },
  te: {
    headerNotice: "కఠినమైన త్రైమాసిక సామర్థ్య పరిమితి",
    badge: "నోటీసు",
    heading: "ఆచరణాత్మక నాణ్యత నియంత్రణ",
    text1: "ఖచ్చితమైన, లోపాలు లేని బుక్ కీపింగ్ మరియు ప్రత్యేక వృత్తిపరమైన శ్రద్ధను అందించడానికి, మేము కేవలం",
    text1Highlight: "ప్రతి త్రైమాసికంలో 8 కొత్త ఖాతాలను మాత్రమే స్వీకరిస్తాము",
    statusMessagePart1: "⏳ 8 స్లాట్లలో 5 ఇప్పటికే బుక్ అయ్యాయి. కేవలం",
    statusMessagePart2: "3 స్లాట్లు మిగిలి ఉన్నాయి",
    statusMessagePart3: "ఆన్‌బోర్డింగ్ ముగిసేలోగా",
    buttonText: "మిగిలిన 3 స్లాట్లలో 1 బుక్ చేసుకోండి",
    closeButton: "బ్రౌజ్ చేయడం కొనసాగించండి",
    whatsappMessage: "నమస్తే Byalance టీమ్! ఈ త్రైమాసికానికి మిగిలి ఉన్న 3 క్లయింట్ స్లాట్లలో 1 ని బుక్ చేసుకోవాలనుకుంటున్నాను. మీ బుక్ కీపింగ్ & పన్ను సేవలు ప్రారంభించడానికి నేను సిద్ధంగా ఉన్నాను."
  },
  mr: {
    headerNotice: "कडक त्रैमासिक क्षमता मर्यादा",
    badge: "सूचना",
    heading: "व्यावहारिक गुणवत्ता नियंत्रण",
    text1: "अचूक, त्रुटी-मुक्त बहीखाते आणि समर्पित व्यावसायिक लक्ष सुनिश्चित करण्यासाठी, आम्ही फक्त ऑनबोर्ड करतो",
    text1Highlight: "प्रत्येक तिमाहीत 8 नवीन बिझनेस खाती",
    statusMessagePart1: "⏳ 8 पैकी 5 स्लॉट आधीच बुक झाले आहेत. फक्त",
    statusMessagePart2: "3 स्लॉट शिल्लक आहेत",
    statusMessagePart3: "ऑनबोर्डिंग बंद होण्यापूर्वी",
    buttonText: "शिल्लक 3 स्लॉटपैकी 1 बुक करा",
    closeButton: "ब्राउझ करणे सुरू ठेवा",
    whatsappMessage: "नमस्कार Byalance टीम! मला या तिमाहीसाठी शिल्लक असलेल्या ३ क्लायंट स्लॉटपैकी १ स्लॉट सुरक्षित करायचा आहे. मी तुमच्या बुककीपिंग आणि अनुपालन सेवा सुरू करण्यास तयार आहे."
  },
  ta: {
    headerNotice: "கடுமையான காலாண்டு திறன் வரம்பு",
    badge: "அறிவிப்பு",
    heading: "நடைமுறை தரக் கட்டுப்பாடு",
    text1: "மிகத் துல்லியமான, பிழையற்ற கணக்குப்பதிவு மற்றும் பிரத்யேக நிபுணத்துவ கведений வழங்க, நாங்கள் காலாண்டுக்கு",
    text1Highlight: "8 புதிய வாடிக்கையாளர்களை மட்டுமே சேர்க்கிறோம்",
    statusMessagePart1: "⏳ 8 இல் 5 இடங்கள் ஏற்கனவே முன்பতিவு செய்யப்பட்டுள்ளன. வெறும்",
    statusMessagePart2: "3 இடங்கள் மட்டுமே உள்ளன",
    statusMessagePart3: "முன்பதிவு முடிவதற்குள்",
    buttonText: "மீதமுள்ள 3 இடங்களில் 1 ஐ முன்பதிவு செய்க",
    closeButton: "தொடர்ந்து பார்க்கவும்",
    whatsappMessage: "வணக்கம் Byalance குழுவே! இந்த காலாண்டிற்கு மீதமுள்ள 3 வாடிக்கையாளர் இடங்களில் 1 ஐ முன்பதிவு செய்ய விரும்புகிறேன். உங்கள் கணக்குப்பதிவு மற்றும் இணக்க சேவைகளைத் தொடங்க நான் தயாராக உள்ளேன்."
  }
};

const ScarcityPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Avoid double trigger if dismissed once
    const hasDismissed = sessionStorage.getItem('byalance_scarcity_dismissed');
    if (hasDismissed) {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds wait time as requested

    return () => clearTimeout(timer);
  }, []);

  // Fallback to English if language is not supported
  const t = popupTranslations[language as keyof typeof popupTranslations] || popupTranslations.en;

  const getWhatsAppLink = () => {
    return `https://wa.me/917406296116?text=${encodeURIComponent(t.whatsappMessage)}`;
  };

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('byalance_scarcity_dismissed', 'true');
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4 font-sans">
            {/* Backdrop click dismisses safely but retains minimized button */}
            <div className="absolute inset-0 cursor-default" onClick={handleClose} />

            <motion.div
              id="scarcity-popup-body"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl border border-red-100 max-w-[340px] w-full relative overflow-hidden shadow-2xl flex flex-col z-10"
            >
              
              {/* Alert Ribbon */}
              <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-2 px-4 font-black tracking-widest text-[9px] uppercase flex items-center justify-between shadow-sm relative">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-yellow-300 rounded-full animate-ping" />
                  <span>{t.headerNotice}</span>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white hover:bg-white/10 p-0.5 rounded-full transition-colors cursor-pointer"
                  aria-label="Minimize popup"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                </button>
              </div>

              {/* Core Content Box */}
              <div className="p-5 text-center flex flex-col items-center">
                <div className="flex justify-center mb-0.5">
                  <div className="bg-red-50/80 border border-red-100 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm text-red-600 text-[9px] font-black uppercase tracking-widest">
                    <AlertTriangle size={10} className="text-red-500" />
                    <span>{t.badge}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight mt-2 leading-snug">
                  {t.heading}
                </h3>

                <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed font-medium">
                  {t.text1} <strong className="font-bold text-red-600 bg-red-50 px-1 py-0.2 rounded">{t.text1Highlight}</strong>.
                </p>

                {/* Scarcity Display Tracker Card */}
                <div className="text-[11px] text-slate-800 mt-3.5 bg-rose-50/60 border border-dashed border-red-100 rounded-xl p-3 text-center font-bold relative overflow-hidden w-full">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-red-100 rounded-full filter blur-xl opacity-30 -z-10" />
                  
                  <div className="flex items-center justify-center gap-1.5 mb-1 text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                    <Clock size={10} className="text-slate-400" />
                    Onboarding Speed Tracker
                  </div>

                  <p className="leading-relaxed">
                    {t.statusMessagePart1} <strong className="text-red-600 text-xs font-black tracking-tight">{t.statusMessagePart2}</strong> {t.statusMessagePart3}.
                  </p>
                </div>

                <div className="mt-4 space-y-2 w-full">
                  <a
                    id="scarcity-whatsapp-btn"
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-4 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all hover:shadow-md hover:shadow-red-500/10 active:scale-[0.98] cursor-pointer"
                  >
                    <span>{t.buttonText}</span>
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </a>
                  
                  <button
                    id="scarcity-dismiss-btn"
                    onClick={handleClose}
                    className="w-full text-[9px] font-bold text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-150 py-2 rounded-xl transition-colors uppercase tracking-wider block cursor-pointer"
                  >
                    {t.closeButton}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScarcityPopup;
