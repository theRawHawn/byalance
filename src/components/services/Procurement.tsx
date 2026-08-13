import SEO from '../SEO';
import React, { useState } from 'react';
import { Check, ArrowRight, Globe, ArrowLeft, HelpCircle, ChevronDown, Sparkles, Send, CreditCard, Box, Award } from "lucide-react";
import { useLanguage, Language } from "../../context/LanguageContext";
import FAQSchema from '../FAQSchema';
import { procurementFAQs } from '../../data/faqData';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../BreadcrumbSchema';
import { ServiceBackgroundDoodle } from '../ServiceBackgroundDoodle';

const procurementI18n: Record<Language, {
  backToServices: string;
  flagshipBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroDesc: string;
  shareWhatsapp: string;
  requestQuote: string;
  steps: {
    title: string;
    desc: string;
    stageLabel: string;
  }[];
  positioning: {
    badge: string;
    title: string;
    titleNot: string;
    desc: string;
    highlight: string;
    cta: string;
  };
  servicesScope: {
    badge: string;
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
  howItWorks: {
    badge: string;
    title: string;
    desc: string;
    steps: { step: number; title: string; desc: string }[];
  };
  benefits: {
    badge: string;
    title: string;
    desc: string;
    items: string[];
  };
  targetCustomers: {
    cardTitle: string;
    cardDesc: string;
    speakWithTeam: string;
    items: { title: string; desc: string }[];
  };
  pricing: {
    badge: string;
    title: string;
    desc: string;
    boxBadge: string;
    boxTitle: string;
    boxDesc: string;
    check1: string;
    check2: string;
    check3: string;
    check4: string;
    breakdownTitle: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    included: string;
    claimable: string;
    cta: string;
  };
  faq: {
    badge: string;
    title: string;
    desc: string;
  };
  ctaSection: {
    badge: string;
    title: string;
    desc: string;
    chatWhatsapp: string;
    sendEnquiry: string;
    footerTag: string;
  };
}> = {
  en: {
    backToServices: "Back to Services",
    flagshipBadge: "Flagship Service",
    heroTitle: "Procurement & ",
    heroTitleHighlight: "Import Compliance",
    heroSubtitle: "Your Outsourced Global Procurement & Import Team",
    heroDesc: "Stop worrying about customs paperwork, international forex wires, DHL clearance delays, and complex import documentation. Simply send us a product link or Bill of Materials — we handle global purchasing, customs clearance, and deliver directly to your door anywhere in India with a valid GST Tax Invoice.",
    shareWhatsapp: "Share Product Link on WhatsApp",
    requestQuote: "Request Landed Quote",
    steps: [
      {
        title: "1. Share Link, BOM or Part No.",
        desc: "Send us your product link (DigiKey, Mouser, OEM, etc.), part numbers, or Bill of Materials via WhatsApp or email.",
        stageLabel: "Stage 1: Link & Request Submission"
      },
      {
        title: "2. Receive Quote & Pay in INR",
        desc: "We provide an all-inclusive landed cost quote in INR (product, forex, customs duty, shipping, GST). You approve and pay in INR.",
        stageLabel: "Stage 2: Transparent Landed Quote in INR"
      },
      {
        title: "3. We Import, Clear & Deliver",
        desc: "We manage customs clearance, DHL/FedEx coordination, Bill of Entry, and deliver to your doorstep with a GST Tax Invoice.",
        stageLabel: "Stage 3: Customs Clearance & Doorstep Delivery"
      }
    ],
    positioning: {
      badge: "Our Strategic Positioning",
      title: "Byalance is ",
      titleNot: "NOT",
      desc: "Byalance is a business operations company that helps Indian startups, R&D labs, manufacturers and SMEs procure products from anywhere in the world while handling the complete import process.",
      highlight: "Customers don't deal with DigiKey, Mouser, DHL, Customs or import paperwork. They simply send us a product link — we handle everything.",
      cta: "Send Product Link"
    },
    servicesScope: {
      badge: "Comprehensive Scope",
      title: "Services Included in Global Procurement & Import",
      desc: "14 specialized operational services packaged into one seamless, hassle-free workflow.",
      items: [
        { title: "Global Supplier Sourcing", desc: "Sourcing parts & equipment from any worldwide vendor or OEM." },
        { title: "Procurement Management", desc: "End-to-end purchasing lifecycle management from link to doorstep." },
        { title: "RFQ Management", desc: "Request for Quotation negotiation to secure optimum global pricing." },
        { title: "International Supplier Payments", desc: "Seamless forex wires and international payments to global suppliers." },
        { title: "Import Documentation", desc: "Complete preparation of customs forms, commercial invoices & packing lists." },
        { title: "HSN Classification", desc: "Accurate Harmonized System Code determination to ensure compliance." },
        { title: "Landed Cost Estimation", desc: "All-inclusive transparent INR quotes prior to order confirmation." },
        { title: "Customs Compliance", desc: "Zero-risk customs clearance adhering to Indian import laws & DGFT rules." },
        { title: "DHL/FedEx/UPS Coordination", desc: "Direct handling of clearance desks and courier port-of-entry issues." },
        { title: "Import Duty Handling", desc: "Computation, payment, and receipt management for customs duties." },
        { title: "Bill of Entry Management", desc: "Filing and archival of legal Bill of Entry documents." },
        { title: "GST Documentation", desc: "Proper alignment with Indian GST portal for input credit eligibility." },
        { title: "Domestic Delivery", desc: "Insured express transport directly to your lab, factory, or office." },
        { title: "GST Tax Invoice", desc: "Official tax invoice issued to enable 100% Input Tax Credit (ITC)." }
      ]
    },
    howItWorks: {
      badge: "6-Step Workflow",
      title: "How Global Procurement & Import Works",
      desc: "From international component selection to your Indian doorstep — completely effortless.",
      steps: [
        { step: 1, title: "Share Product Link, BOM or Part Number", desc: "Send us links from DigiKey, Mouser, global vendors, or attach your Bill of Materials." },
        { step: 2, title: "Receive Final Quote", desc: "We calculate all landed costs (forex, duty, shipping, GST) and send a single transparent quote in INR." },
        { step: 3, title: "Approve & Pay", desc: "Approve the quote and transfer payment locally in INR to Byalance." },
        { step: 4, title: "We Procure Globally", desc: "We initiate forex payments and buy directly from international suppliers on your behalf." },
        { step: 5, title: "We Handle Customs & Compliance", desc: "We manage HSN classification, customs declarations, duty payments, and carrier clearance desks." },
        { step: 6, title: "Delivered Anywhere in India", desc: "Your order arrives at your door with complete import documentation and a valid GST Tax Invoice." }
      ]
    },
    benefits: {
      badge: "Key Benefits",
      title: "Why Indian Companies Choose Byalance for Global Imports",
      desc: "Eliminate procedural bottlenecks, unexpected customs assessments, and international wire headaches. Focus on building products while Byalance manages your supply chain compliance.",
      items: [
        "No Import Experience Required",
        "No Customs Headaches",
        "No Supplier Communication",
        "No Documentation Hassle",
        "No DHL Coordination",
        "Single Point of Contact",
        "Transparent Pricing in INR",
        "Valid GST Tax Invoice (Claim ITC)",
        "Professional Import Operations Team"
      ]
    },
    targetCustomers: {
      cardTitle: "Who We Serve",
      cardDesc: "Tailored global procurement for teams that require rapid, compliant import of components, sensors, equipment, and prototypes into India.",
      speakWithTeam: "Speak with Procurement Team",
      items: [
        { title: "Startups", desc: "Early-stage hardware & deeptech innovators" },
        { title: "R&D Labs", desc: "Corporate & private research centers" },
        { title: "Robotics Companies", desc: "Autonomous system & hardware builders" },
        { title: "Electronics Companies", desc: "PCB assemblers & IoT product teams" },
        { title: "Manufacturers", desc: "Industrial equipment & component plants" },
        { title: "Industrial Automation", desc: "PLC, sensor & robotics integrators" },
        { title: "Universities", desc: "Academic engineering & science faculties" },
        { title: "Engineering Teams", desc: "Prototyping & product development squads" },
        { title: "MSMEs", desc: "Growing small-to-medium enterprises across India" }
      ]
    },
    pricing: {
      badge: "Transparent Pricing Model",
      title: "Global Procurement Pricing & Landed Quotes",
      desc: "No surprise customs duties, no forex markup fees. You receive a single transparent landed quote in INR and pay locally in India.",
      boxBadge: "All-Inclusive Landed Pricing (INR)",
      boxTitle: "Custom Landed Cost Quote",
      boxDesc: "Simply share your product link (DigiKey, Mouser, OEM) or Bill of Materials (BOM). Byalance computes all international variables and provides a single, all-inclusive INR price before you commit.",
      check1: "100% Compliant GST Tax Invoice issued for full Input Tax Credit (ITC) eligibility.",
      check2: "Zero Forex Friction: Pay in INR locally via RTGS/NEFT/UPI. We handle foreign wire transfers to global vendors.",
      check3: "Complete Customs Clearance: HSN classification, Bill of Entry, and carrier clearance desks handled end-to-end.",
      check4: "Insured Doorstep Delivery: Express courier transport directly to your lab, factory, or office in India.",
      breakdownTitle: "Quote Breakdown Includes",
      item1: "Global Supplier Item Cost",
      item2: "Forex & Banking Charges",
      item3: "Indian Customs Duty & Cess",
      item4: "Air Freight & Express Clearance",
      item5: "GST Invoice for ITC",
      included: "Included",
      claimable: "Claimable",
      cta: "Request Landed Quote"
    },
    faq: {
      badge: "Answering your Queries",
      title: "Frequently Asked Questions — Global Procurement & Import",
      desc: "Clear details on quotes, GST tax invoices, customs, and supported platforms."
    },
    ctaSection: {
      badge: "Outsource Global Procurement Today",
      title: "Ready to Procure Globally Without Customs Friction?",
      desc: "Send us your product link or Bill of Materials. We'll send you an all-inclusive landed quote in INR and handle the complete import process to your door with a GST Tax Invoice.",
      chatWhatsapp: "Chat on WhatsApp",
      sendEnquiry: "Send an Enquiry",
      footerTag: "★ NO IMPORT EXPERIENCE REQUIRED • ALL-INCLUSIVE INR LANDED PRICING"
    }
  },
  hi: {
    backToServices: "सेवाओं पर वापस जाएं",
    flagshipBadge: "प्रमुख सेवा (Flagship Service)",
    heroTitle: "खरीद एवं ",
    heroTitleHighlight: "आयात अनुपालन (Procurement & Import)",
    heroSubtitle: "आपकी आउटसोर्स की गई वैश्विक खरीद और आयात टीम",
    heroDesc: "सीमा शुल्क (Customs) कागजी कार्रवाई, अंतर्राष्ट्रीय विदेशी मुद्रा (Forex) वायर ट्रांसफर, DHL क्लीयरेंस देरी और जटिल आयात दस्तावेजों की चिंता छोड़ें। बस हमें एक उत्पाद लिंक या BOM भेजें — हम वैश्विक खरीद, सीमा शुल्क निकासी संभालते हैं और मान्य जीएसटी टैक्स चालान के साथ भारत में सीधे आपके द्वार तक पहुंचाते हैं।",
    shareWhatsapp: "व्हाट्सएप पर उत्पाद लिंक साझा करें",
    requestQuote: "आयात मूल्य उद्धरण (Quote) प्राप्त करें",
    steps: [
      {
        title: "1. लिंक, BOM या पार्ट नंबर साझा करें",
        desc: "हमें व्हाट्सएप या ईमेल के माध्यम से अपना उत्पाद लिंक (DigiKey, Mouser, OEM आदि), पार्ट नंबर या बिल ऑफ मटेरियल भेजें।",
        stageLabel: "चरण 1: लिंक और अनुरोध जमा करना"
      },
      {
        title: "2. INR में उद्धरण प्राप्त करें और भुगतान करें",
        desc: "हम INR में सभी लागतों (उत्पाद, विदेशी मुद्रा, सीमा शुल्क, शिपिंग, जीएसटी) को शामिल करते हुए एक पारदर्शी मूल्य प्रदान करते हैं। आप स्वीकृति दें और INR में भुगतान करें।",
        stageLabel: "चरण 2: INR में पारदर्शी लैंडेड लागत उद्धरण"
      },
      {
        title: "3. हम आयात, निकासी और डिलीवरी करते हैं",
        desc: "हम सीमा शुल्क निकासी, DHL/FedEx समन्वय, बिल ऑफ एंट्री संभालते हैं और जीएसटी टैक्स चालान के साथ आपके द्वार तक डिलीवरी करते हैं।",
        stageLabel: "चरण 3: सीमा शुल्क निकासी और डोरस्टेप डिलीवरी"
      }
    ],
    positioning: {
      badge: "हमारी रणनीतिक स्थिति",
      title: "Byalance कोई इलेक्ट्रॉनिक्स वितरक ",
      titleNot: "नहीं",
      desc: "Byalance एक व्यावसायिक परिचालन कंपनी है जो भारतीय स्टार्टअप्स, R&D प्रयोगशालाओं, निर्माताओं और MSMEs को पूरी आयात प्रक्रिया को संभालते हुए दुनिया में कहीं से भी उत्पाद खरीदने में मदद करती है।",
      highlight: "ग्राहकों को DigiKey, Mouser, DHL, कस्टम्स या आयात कागजी कार्रवाई से निपटने की आवश्यकता नहीं है। वे केवल हमें एक उत्पाद लिंक भेजते हैं — हम सब कुछ संभालते हैं।",
      cta: "उत्पाद लिंक भेजें"
    },
    servicesScope: {
      badge: "व्यापक कार्यक्षेत्र",
      title: "वैश्विक खरीद और आयात में शामिल सेवाएं",
      desc: "14 विशेष परिचालन सेवाएं एक निर्बाध, परेशानी मुक्त कार्यप्रवाह में बंधी हैं।",
      items: [
        { title: "वैश्विक आपूर्तिकर्ता सोर्सिंग", desc: "दुनिया भर के किसी भी विक्रेता या OEM से पुर्जे और उपकरण प्राप्त करना।" },
        { title: "खरीद प्रबंधन", desc: "उत्पाद लिंक से लेकर आपके द्वार तक एंड-टू-एंड खरीद जीवनचक्र प्रबंधन।" },
        { title: "RFQ प्रबंधन", desc: "सर्वोत्तम वैश्विक मूल्य प्राप्त करने के लिए कोटेशन वार्ता।" },
        { title: "अंतर्राष्ट्रीय आपूर्तिकर्ता भुगतान", desc: "वैश्विक आपूर्तिकर्ताओं को निर्बाध विदेशी मुद्रा वायर और अंतर्राष्ट्रीय भुगतान।" },
        { title: "आयात दस्तावेज़ीकरण", desc: "सीमा शुल्क फॉर्म, वाणिज्यिक चालान और पैकिंग सूचियों की पूर्ण तैयारी।" },
        { title: "HSN वर्गीकरण", desc: "अनुपालन सुनिश्चित करने के लिए सटीक सामंजस्यपूर्ण प्रणाली कोड निर्धारण।" },
        { title: "लैंडेड लागत अनुमान", desc: "ऑर्डर की पुष्टि से पहले सभी लागतों को शामिल करने वाला पारदर्शी INR उद्धरण।" },
        { title: "सीमा शुल्क अनुपालन", desc: "भारतीय आयात कानूनों और DGFT नियमों का पालन करते हुए शून्य-जोखिम सीमा शुल्क निकासी।" },
        { title: "DHL/FedEx/UPS समन्वय", desc: "क्लीयरेंस डेस्क और कूरियर मुद्दों का सीधा प्रबंधन।" },
        { title: "आयात शुल्क प्रबंधन", desc: "सीमा शुल्क के लिए गणना, भुगतान और रसीद प्रबंधन।" },
        { title: "बिल ऑफ एंट्री प्रबंधन", desc: "कानूनी बिल ऑफ एंट्री दस्तावेजों का फाइलिंग और संग्रह।" },
        { title: "जीएसटी दस्तावेज़ीकरण", desc: "इनपुट क्रेडिट पात्रता के लिए भारतीय जीएसटी पोर्टल के साथ उचित तालमेल।" },
        { title: "घरेलू डिलीवरी", desc: "आपकी लैब, फ़ैक्टरी या कार्यालय में सीधे बीमित एक्सप्रेस परिवहन।" },
        { title: "जीएसटी टैक्स चालान", desc: "100% इनपुट टैक्स क्रेडिट (ITC) सक्षम करने के लिए आधिकारिक टैक्स चालान जारी किया गया।" }
      ]
    },
    howItWorks: {
      badge: "6-चरण कार्यप्रवाह",
      title: "वैश्विक खरीद और आयात कैसे काम करता है",
      desc: "अंतर्राष्ट्रीय घटक चयन से लेकर आपके भारतीय द्वार तक — पूरी तरह से आसान।",
      steps: [
        { step: 1, title: "उत्पाद लिंक, BOM या पार्ट नंबर भेजें", desc: "DigiKey, Mouser, वैश्विक विक्रेताओं से लिंक भेजें, या अपना बिल ऑफ मटेरियल संलग्न करें।" },
        { step: 2, title: "अंतिम उद्धरण प्राप्त करें", desc: "हम सभी लैंडेड लागतों (फॉरेक्स, ड्यूटी, शिपिंग, जीएसटी) की गणना करते हैं और INR में एक पारदर्शी उद्धरण भेजते हैं।" },
        { step: 3, title: "स्वीकृति दें और भुगतान करें", desc: "उद्धरण को मंजूरी दें और भुगतान स्थानीय रूप से INR में Byalance को स्थानांतरित करें।" },
        { step: 4, title: "हम वैश्विक स्तर पर खरीद करते हैं", desc: "हम आपकी ओर से अंतर्राष्ट्रीय आपूर्तिकर्ताओं से सीधे भुगतान और खरीद करते हैं।" },
        { step: 5, title: "हम सीमा शुल्क और अनुपालन संभालते हैं", desc: "हम HSN वर्गीकरण, सीमा शुल्क घोषणाएं, शुल्क भुगतान और कूरियर क्लीयरेंस संभालते हैं।" },
        { step: 6, title: "भारत में कहीं भी डिलीवरी", desc: "आपका ऑर्डर पूर्ण आयात दस्तावेजों और एक मान्य जीएसटी टैक्स चालान के साथ आपके द्वार पर पहुंचता है।" }
      ]
    },
    benefits: {
      badge: "प्रमुख लाभ",
      title: "भारतीय कंपनियां वैश्विक आयात के लिए Byalance को क्यों चुनती हैं",
      desc: "प्रक्रियात्मक बाधाओं, अप्रत्याशित सीमा शुल्क आकलन और अंतर्राष्ट्रीय वायर झंझटों को खत्म करें। उत्पाद बनाने पर ध्यान दें जबकि Byalance आपकी आपूर्ति श्रृंखला अनुपालन का प्रबंधन करता है।",
      items: [
        "कोई आयात अनुभव आवश्यक नहीं",
        "सीमा शुल्क की कोई सिरदर्द नहीं",
        "आपूर्तिकर्ता से सीधे बातचीत की आवश्यकता नहीं",
        "दस्तावेजीकरण का कोई झंझट नहीं",
        "DHL / FedEx समन्वय की आवश्यकता नहीं",
        "संपर्क का एकल बिंदु",
        "INR में पारदर्शी मूल्य निर्धारण",
        "वैध जीएसटी टैक्स चालान (ITC का दावा करें)",
        "पेशेवर आयात परिचालन टीम"
      ]
    },
    targetCustomers: {
      cardTitle: "हम किन व्यवसायों की सेवा करते हैं",
      cardDesc: "उन टीमों के लिए विशेष रूप से तैयार वैश्विक खरीद, जिन्हें भारत में घटकों, सेंसरों, उपकरणों और प्रोटोटाइप के त्वरित, अनुपालन आयात की आवश्यकता होती है।",
      speakWithTeam: "खरीद टीम से बात करें",
      items: [
        { title: "स्टार्टअप्स", desc: "प्रारंभिक चरण के हार्डवेयर और डीपटेक इनोवेटर्स" },
        { title: "R&D प्रयोगशालाएं", desc: "कॉर्पोरेट और निजी अनुसंधान केंद्र" },
        { title: "रोबोटिक्स कंपनियां", desc: "स्वायत्त प्रणाली और हार्डवेयर निर्माता" },
        { title: "इलेक्ट्रॉनिक्स कंपनियां", desc: "पीसीबी असेंबलर और आईओटी उत्पाद टीमें" },
        { title: "निर्माता (Manufacturers)", desc: "औद्योगिक उपकरण और घटक संयंत्र" },
        { title: "औद्योगिक स्वचालन", desc: "PLC, सेंसर और रोबोटिक्स इंटीग्रेटर्स" },
        { title: "विश्वविद्यालय", desc: "अकादमिक इंजीनियरिंग और विज्ञान संकाय" },
        { title: "इंजीनियरिंग टीमें", desc: "प्रोटोटाइपिंग और उत्पाद विकास दल" },
        { title: "MSMEs", desc: "पूरे भारत में बढ़ते छोटे और मध्यम उद्यम" }
      ]
    },
    pricing: {
      badge: "पारदर्शी मूल्य निर्धारण मॉडल",
      title: "वैश्विक खरीद मूल्य निर्धारण और लैंडेड कोटेशन",
      desc: "कोई अप्रत्याशित सीमा शुल्क नहीं, कोई विदेशी मुद्रा शुल्क नहीं। आपको INR में एक पारदर्शी मूल्य मिलता है और आप भारत में स्थानीय रूप से भुगतान करते हैं।",
      boxBadge: "सभी लागतों सहित लैंडेड मूल्य (INR)",
      boxTitle: "अनुकूलित लैंडेड लागत उद्धरण",
      boxDesc: "बस अपना उत्पाद लिंक (DigiKey, Mouser, OEM) या बिल ऑफ मटेरियल (BOM) साझा करें। Byalance सभी अंतर्राष्ट्रीय चर की गणना करता है और ऑर्डर से पहले आपको एक स्पष्ट INR मूल्य प्रदान करता है।",
      check1: "पूर्ण इनपुट टैक्स क्रेडिट (ITC) पात्रता के लिए 100% अनुपालन जीएसटी टैक्स चालान जारी किया गया।",
      check2: "शून्य विदेशी मुद्रा परेशानी: RTGS/NEFT/UPI के माध्यम से स्थानीय रूप से INR में भुगतान करें। हम वैश्विक विक्रेताओं को वायर ट्रांसफर संभालते हैं।",
      check3: "पूर्ण सीमा शुल्क निकासी: HSN वर्गीकरण, बिल ऑफ एंट्री और कूरियर क्लीयरेंस डेस्क एंड-टू-एंड संचालित।",
      check4: "बीमित डोरस्टेप डिलीवरी: भारत में आपकी लैब, फ़ैक्टरी या कार्यालय में सीधे एक्सप्रेस कूरियर परिवहन।",
      breakdownTitle: "उद्धरण ब्रेकडाउन में शामिल हैं",
      item1: "वैश्विक आपूर्तिकर्ता उत्पाद लागत",
      item2: "विदेशी मुद्रा और बैंकिंग शुल्क",
      item3: "भारतीय सीमा शुल्क और उपकर",
      item4: "एयर फ्रेट और एक्सप्रेस क्लीयरेंस",
      item5: "ITC के लिए जीएसटी चालान",
      included: "शामिल",
      claimable: "दावा योग्य (Claimable)",
      cta: "आयात मूल्य उद्धरण प्राप्त करें"
    },
    faq: {
      badge: "आपके प्रश्नों के उत्तर",
      title: "अक्सर पूछे जाने वाले प्रश्न — वैश्विक खरीद और आयात",
      desc: "उद्धरण, जीएसटी टैक्स चालान, सीमा शुल्क और समर्थित प्लेटफॉर्म पर स्पष्ट विवरण।"
    },
    ctaSection: {
      badge: "आज ही वैश्विक खरीद आउटसोर्स करें",
      title: "बिना सीमा शुल्क बाधाओं के वैश्विक स्तर पर खरीदारी के लिए तैयार हैं?",
      desc: "हमें अपना उत्पाद लिंक या BOM भेजें। हम आपको INR में एक पारदर्शी उद्धरण भेजेंगे और जीएसटी टैक्स चालान के साथ आपके द्वार तक पूरी आयात प्रक्रिया संभालेंगे।",
      chatWhatsapp: "व्हाट्सएप पर चैट करें",
      sendEnquiry: "पूछताछ भेजें",
      footerTag: "★ कोई आयात अनुभव आवश्यक नहीं • सभी लागतों सहित INR मूल्य निर्धारण"
    }
  },
  kn: {
    backToServices: "ಸೇವೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ",
    flagshipBadge: "ಮುಖ್ಯ ಸೇವೆ (Flagship Service)",
    heroTitle: "ಖರೀದಿ ಮತ್ತು ",
    heroTitleHighlight: "ಆಮದು ಅನುಸರಣೆ (Procurement & Import)",
    heroSubtitle: "ನಿಮ್ಮ ಜಾಗತಿಕ ಖರೀದಿ ಮತ್ತು ಆಮದು ಕಾರ್ಯಾಚರಣೆಯ ತಂಡ",
    heroDesc: "ಕಸ್ಟಮ್ಸ್ ದಾಖಲೆಗಳು, ಅಂತರರಾಷ್ಟ್ರೀಯ ಫೊರೆಕ್ಸ್ ಪಾವತಿಗಳು ಮತ್ತು ಆಮದು ತೊಂದರೆಗಳ ಬಗ್ಗೆ ಚಿಂತಿಸಬೇಡಿ. ನಮಗೆ ಉತ್ಪನ್ನದ ಲಿಂಕ್ ಅಥವಾ BOM ಕಳುಹಿಸಿ - ನಾವು ಜಾಗತಿಕ ಖರೀದಿ, ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ನಿರ್ವಹಿಸಿ ಜಿಎಸ್‌ಟಿ ಟ್ಯಾಕ್ಸ್ ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ ನೇರವಾಗಿ ನಿಮ್ಮ ಮನೆಬಾಗಿಲಿಗೆ ತಲುಪಿಸುತ್ತೇವೆ.",
    shareWhatsapp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಲಿಂಕ್ ಹಂಚಿಕೊಳ್ಳಿ",
    requestQuote: "ಆಮದು ಬೆಲೆ ವಿವರ ಪಡೆಯಿರಿ",
    steps: [
      {
        title: "1. ಲಿಂಕ್ ಅಥವಾ BOM ಹಂಚಿಕೊಳ್ಳಿ",
        desc: "DigiKey, Mouser, OEM ಲಿಂಕ್‌ಗಳು ಅಥವಾ ಭಾಗಗಳ ಪಟ್ಟಿಯನ್ನು ವಾಟ್ಸಾಪ್ ಅಥವಾ ಇಮೇಲ್ ಮೂಲಕ ನಮಗೆ ಕಳುಹಿಸಿ.",
        stageLabel: "ಹಂತ 1: ಲಿಂಕ್ ಮತ್ತು ವಿನಂತಿ ಸಲ್ಲಿಕೆ"
      },
      {
        title: "2. INR ನಲ್ಲಿ ಬೆಲೆ ಪಡೆಯಿರಿ ಮತ್ತು ಪಾವತಿಸಿ",
        desc: "ನಾವು ಎಲ್ಲಾ ವೆಚ್ಚಗಳನ್ನು ಒಳಗೊಂಡ ಸ್ಪಷ್ಟ INR ಬೆಲೆಯನ್ನು ನೀಡುತ್ತೇವೆ. ನೀವು ಅನುಮೋದಿಸಿ INR ನಲ್ಲೇ ಪಾವತಿಸಬಹುದು.",
        stageLabel: "ಹಂತ 2: ಪಾರದರ್ಶಕ INR ಬೆಲೆ ಕೋಟ್"
      },
      {
        title: "3. ನಾವು ಆಮದು ಮಾಡಿ ತಲುಪಿಸುತ್ತೇವೆ",
        desc: "ನಾವು ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್, DHL/FedEx ಸಮನ್ವಯ ನಿರ್ವಹಿಸಿ ಜಿಎಸ್‌ಟಿ ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ ನಿಮ್ಮ ಮನೆಬಾಗಿಲಿಗೆ ತಲುಪಿಸುತ್ತೇವೆ.",
        stageLabel: "ಹಂತ 3: ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಮತ್ತು ವಿತರಣೆ"
      }
    ],
    positioning: {
      badge: "ನಮ್ಮ ಕಾರ್ಯತಂತ್ರದ ಸ್ಥಾನ",
      title: "Byalance ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ವಿತರಕರಲ್ಲ, ",
      titleNot: "ಬದಲಿಗೆ ಕಾರ್ಯಾಚರಣೆ ಸಂಸ್ಥೆ",
      desc: "Byalance ಭಾರತೀಯ ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳು, R&D ಲ್ಯಾಬ್‌ಗಳು ಮತ್ತು ಸಣ್ಣ ಉದ್ಯಮಗಳಿಗೆ ಪ್ರಪಂಚದಾದ್ಯಂತ ಉತ್ಪನ್ನಗಳನ್ನು ಖರೀದಿಸಲು ಮತ್ತು ಸಂಪೂರ್ಣ ಆಮದು ಪ್ರಕ್ರಿಯೆಯನ್ನು ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      highlight: "ಗ್ರಾಹಕರು DigiKey, Mouser, DHL ಅಥವಾ ಕಸ್ಟಮ್ಸ್ ದಾಖಲೆಗಳೊಂದಿಗೆ ವ್ಯವಹರಿಸಬೇಕಾಗಿಲ್ಲ. ಕೇವಲ ಲಿಂಕ್ ಕಳುಹಿಸಿದರೆ ಸಾಕು — ನಾವು ಎಲ್ಲವನ್ನೂ ನಿರ್ವಹಿಸುತ್ತೇವೆ.",
      cta: "ಉತ್ಪನ್ನ ಲಿಂಕ್ ಕಳುಹಿಸಿ"
    },
    servicesScope: {
      badge: "ಸಂಪೂರ್ಣ ವ್ಯಾಪ್ತಿ",
      title: "ಜಾಗತಿಕ ಖರೀದಿ ಮತ್ತು ಆಮದಿನಲ್ಲಿ ಸೇರ್ಪಡೆಗೊಂಡ ಸೇವೆಗಳು",
      desc: "14 ವಿಶೇಷ ಕಾರ್ಯಾಚರಣೆಯ ಸೇವೆಗಳನ್ನು ಒಂದೇ ಸುಲಭ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ನೀಡಲಾಗುತ್ತದೆ.",
      items: [
        { title: "ಜಾಗತಿಕ ಪೂರೈಕೆದಾರರ ಮೂಲ", desc: "ಪ್ರಪಂಚದಾದ್ಯಂತದ ಯಾವುದೇ ಪೂರೈಕೆದಾರರಿಂದ ಭಾಗಗಳನ್ನು ಖರೀದಿಸುವುದು." },
        { title: "ಖರೀದಿ ನಿರ್ವಹಣೆ", desc: "ಲಿಂಕ್‌ನಿಂದ ಮನೆಬಾಗಿಲಿಗೆ ತಲುಪಿಸುವವರೆಗಿನ ಸಂಪೂರ್ಣ ನಿರ್ವಹಣೆ." },
        { title: "RFQ ನಿರ್ವಹಣೆ", desc: "ಅುತ್ತಮ ಬೆಲೆ ಪಡೆಯಲು ಪೂರೈಕೆದಾರರೊಂದಿಗೆ ಮಾತುಕತೆ." },
        { title: "ಅಂತರರಾಷ್ಟ್ರೀಯ ಪಾವತಿಗಳು", desc: "ವಿದೇಶಿ ಪೂರೈಕೆದಾರರಿಗೆ ಸರಳ ಫೊರೆಕ್ಸ್ ಪಾವತಿಗಳು." },
        { title: "ಆಮದು ದಾಖಲೆಗಳು", desc: "ಕಸ್ಟಮ್ಸ್ ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ವಾಣಿಜ್ಯ ಇನ್‌ವಾಯ್ಸ್‌ಗಳ ಸಿದ್ಧತೆ." },
        { title: "HSN ವರ್ಗೀಕರಣ", desc: "ನಿಖರವಾದ HSN ಕೋಡ್ ನಿರ್ಧಾರ ಮತ್ತು ನಿಯಮಗಳ ಪಾಲನೆ." },
        { title: "ವೆಚ್ಚ ಅಂದಾಜು", desc: "ಆರ್ಡರ್ ಮಾಡುವ ಮೊದಲು ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕ INR ಬೆಲೆ ವಿವರ." },
        { title: "ಕಸ್ಟಮ್ಸ್ ಅನುಸರಣೆ", desc: "ಭಾರತೀಯ ಆಮದು ನಿಯಮಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಸುರಕ್ಷಿತ ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್." },
        { title: "DHL/FedEx ಸಮನ್ವಯ", desc: "ಕೊರಿಯರ್ ಮತ್ತು ಕಸ್ಟಮ್ಸ್ ಸಮಸ್ಯೆಗಳ ನೇರ ನಿರ್ವಹಣೆ." },
        { title: "ಆಮದು ಸುಂಕ ನಿರ್ವಹಣೆ", desc: "ಕಸ್ಟಮ್ಸ್ ಸುಂಕಗಳ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ಪಾವತಿ." },
        { title: "ಬಿಲ್ ಆಫ್ ಎಂಟ್ರಿ ನಿರ್ವಹಣೆ", desc: "ಕಾನೂನುಬದ್ಧ ಬಿಲ್ ಆಫ್ ಎಂಟ್ರಿ ದಾಖಲೆಗಳ ಸಲ್ಲಿಕೆ." },
        { title: "ಜಿಎಸ್‌ಟಿ ದಾಖಲೆಗಳು", desc: "ಇನ್‌ಪುಟ್ ಕ್ರೆಡಿಟ್‌ಗಾಗಿ ಜಿಎಸ್‌ಟಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನಿಖರ ದಾಖಲಾತಿ." },
        { title: "ಮನೆಬಾಗಿಲಿಗೆ ವಿತರಣೆ", desc: "ನಿಮ್ಮ ಲ್ಯಾಬ್ ಅಥವಾ ಕಾರ್ಖಾನೆಗೆ ಸುರಕ್ಷಿತ ಎಕ್ಸ್‌ಪ್ರೆಸ್ ವಿತರಣೆ." },
        { title: "ಜಿಎಸ್‌ಟಿ ಟ್ಯಾಕ್ಸ್ ಇನ್‌ವಾಯ್ಸ್", desc: "100% ಇನ್‌ಪುಟ್ ಟ್ಯಾಕ್ಸ್ ಕ್ರೆಡಿಟ್ (ITC) ಪಡೆಯಲು ಅಧಿಕೃತ ಇನ್‌ವಾಯ್ಸ್." }
      ]
    },
    howItWorks: {
      badge: "6-ಹಂತದ ಪ್ರಕ್ರಿಯೆ",
      title: "ಜಾಗತಿಕ ಖರೀದಿ ಮತ್ತು ಆಮದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
      desc: "ಉತ್ಪನ್ನ ಆಯ್ಕೆಯಿಂದ ನಿಮ್ಮ ಮನೆಬಾಗಿಲಿಗೆ ತಲುಪುವವರೆಗೆ ಅತ್ಯಂತ ಸುಲಭ ಹಂತಗಳು.",
      steps: [
        { step: 1, title: "ಉತ್ಪನ್ನದ ಲಿಂಕ್ ಕಳುಹಿಸಿ", desc: "DigiKey, Mouser ಅಥವಾ ಜಾಗತಿಕ ಪೂರೈಕೆದಾರರ ಲಿಂಕ್‌ಗಳನ್ನು ಕಳುಹಿಸಿ." },
        { step: 2, title: "ಬೆಲೆ ವಿವರ ಪಡೆಯಿರಿ", desc: "ನಾವು ಎಲ್ಲಾ ವೆಚ್ಚಗಳನ್ನು ಲೆಕ್ಕಹಾಕಿ ಸರಳ INR ಬೆಲೆಯನ್ನು ಕಳುಹಿಸುತ್ತೇವೆ." },
        { step: 3, title: "ಅನುಮೋದಿಸಿ & ಪಾವತಿಸಿ", desc: "ಬೆಲೆಯನ್ನು ಅನುಮೋದಿಸಿ ಸ್ಥಳೀಯವಾಗಿ INR ನಲ್ಲಿ ಪಾವತಿಸಿ." },
        { step: 4, title: "ನಾವು ಖರೀದಿಸುತ್ತೇವೆ", desc: "ನಾವು ಅಂತರರಾಷ್ಟ್ರೀಯ ಪೂರೈಕೆದಾರರಿಗೆ ಪಾವತಿಸಿ ಉತ್ಪನ್ನವನ್ನು ಖರೀದಿಸುತ್ತೇವೆ." },
        { step: 5, title: "ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್", desc: "ನಾವು ಕಸ್ಟಮ್ಸ್ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಸುಂಕ ಪಾವತಿಯನ್ನು ನಿರ್ವಹಿಸುತ್ತೇವೆ." },
        { step: 6, title: "ಮನೆಬಾಗಿಲಿಗೆ ತಲುಪುತ್ತದೆ", desc: "ಜಿಎಸ್‌ಟಿ ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ ಉತ್ಪನ್ನ ನೇರವಾಗಿ ನಿಮ್ಮ ಕೈಸೇರುತ್ತದೆ." }
      ]
    },
    benefits: {
      badge: "ಪ್ರಮುಖ ಅನುಕೂಲಗಳು",
      title: "ಭಾರತೀಯ ಸಂಸ್ಥೆಗಳು Byalance ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತವೆ",
      desc: "ಕಸ್ಟಮ್ಸ್ ಮತ್ತು ಆಮದು ತೊಂದರೆಗಳನ್ನು ತಪ್ಪಿಸಿ. ನಿಮ್ಮ ಉತ್ಪನ್ನ ಅಭಿವೃದ್ಧಿಯತ್ತ ಗಮನಹರಿಸಿ.",
      items: [
        "ಯಾವುದೇ ಆಮದು ಅನುಭವದ ಅಗತ್ಯವಿಲ್ಲ",
        "ಕಸ್ಟಮ್ಸ್ ತೊಂದರೆಗಳಿಲ್ಲ",
        "ಪೂರೈಕೆದಾರರೊಂದಿಗೆ ನೇರ ಸಂವಹನದ ಅಗತ್ಯವಿಲ್ಲ",
        "ದಾಖಲೆಗಳ ಗೊಂದಲವಿಲ್ಲ",
        "DHL / FedEx ಸಮನ್ವಯದ ಅಗತ್ಯವಿಲ್ಲ",
        "ಏಕೈಕ ಸಂಪರ್ಕ ಕೇಂದ್ರ",
        "INR ನಲ್ಲಿ ಪಾರದರ್ಶಕ ಬೆಲೆ",
        "ಮಾನ್ಯ ಜಿಎಸ್‌ಟಿ ಇನ್‌ವಾಯ್ಸ್ (ITC ಕ್ಲೈಮ್ ಮಾಡಿ)",
        "ವೃತ್ತಿಪರ ಆಮದು ಕಾರ್ಯಾಚರಣೆ ತಂಡ"
      ]
    },
    targetCustomers: {
      cardTitle: "ನಮ್ಮ ಸೇವೆ ಯಾರಿಗೆ?",
      cardDesc: "ಭಾರತಕ್ಕೆ ಬಿಡಿಭಾಗಗಳು, ಸೆನ್ಸಾರ್‌ಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ಆಮದು ಮಾಡಿಕೊಳ್ಳಲು ಬಯಸುವ ತಂಡಗಳಿಗೆ.",
      speakWithTeam: "ಖರೀದಿ ತಂಡದೊಂದಿಗೆ ಮಾತನಾಡಿ",
      items: [
        { title: "ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳು", desc: "ಹಾರ್ಡ್‌ವೇರ್ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ನಾವೀನ್ಯಕಾರರು" },
        { title: "R&D ಲ್ಯಾಬ್‌ಗಳು", desc: "ಸಂಶೋಧನಾ ಕೇಂದ್ರಗಳು" },
        { title: "ರೋಬೋಟಿಕ್ಸ್ ಸಂಸ್ಥೆಗಳು", desc: "ಸ್ವಯಂಚಾಲಿತ ವ್ಯವಸ್ಥೆಗಳ ತಯಾರಕರು" },
        { title: "ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಸಂಸ್ಥೆಗಳು", desc: "PCB ಮತ್ತು IoT ಉತ್ಪನ್ನ ತಂಡಗಳು" },
        { title: "ತಯಾರಕರು (Manufacturers)", desc: "ಕೈಗಾರಿಕಾ ಉಪಕರಣ ತಯಾರಕರು" },
        { title: "ಇಂಡಸ್ಟ್ರಿಯಲ್ ಆಟೋಮೇಷನ್", desc: "PLC ಮತ್ತು ಸೆನ್ಸಾರ್ ಇಂಟಿಗ್ರೇಟರ್‌ಗಳು" },
        { title: "ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು", desc: "ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ವಿಜ್ಞಾನ ವಿಭಾಗಗಳು" },
        { title: "ಎಂಜಿನಿಯರಿಂಗ್ ತಂಡಗಳು", desc: "ಪ್ರೋಟೋಟೈಪ್ ಅಭಿವೃದ್ಧಿ ತಂಡಗಳು" },
        { title: "MSMEಗಳು", desc: "ಬೆಳೆಯುತ್ತಿರುವ ಸಣ್ಣ ಮತ್ತು ಮಧ್ಯಮ ಉದ್ಯಮಗಳು" }
      ]
    },
    pricing: {
      badge: "ಪಾರದರ್ಶಕ ದರ ಮಾದರಿ",
      title: "ಜಾಗತಿಕ ಖರೀದಿ ಬೆಲೆ ವಿವರ ಮತ್ತು ಅಂದಾಜು",
      desc: "ಯಾವುದೇ ಅಡಗಿದ ಕಸ್ಟಮ್ಸ್ ವೆಚ್ಚಗಳಿಲ್ಲ. ಒಂದೇ ಪಾರದರ್ಶಕ INR ಬೆಲೆಯನ್ನು ಪಡೆಯಿರಿ.",
      boxBadge: "ಸಂಪೂರ್ಣ ವೆಚ್ಚ ಒಳಗೊಂಡ ಬೆಲೆ (INR)",
      boxTitle: "ಅನುಕೂಲಕರ ಆಮದು ಬೆಲೆ ಕೋಟ್",
      boxDesc: "ನಿಮ್ಮ ಉತ್ಪನ್ನದ ಲಿಂಕ್ ಅಥವಾ BOM ಹಂಚಿಕೊಳ್ಳಿ. ನಾವು ಎಲ್ಲಾ ಅಂತರರಾಷ್ಟ್ರೀಯ ವೆಚ್ಚಗಳನ್ನು ಲೆಕ್ಕಹಾಕಿ ಸ್ಪಷ್ಟ INR ಬೆಲೆಯನ್ನು ನೀಡುತ್ತೇವೆ.",
      check1: "ಸಂಪೂರ್ಣ ಇನ್‌ಪುಟ್ ಟ್ಯಾಕ್ಸ್ ಕ್ರೆಡಿಟ್‌ಗಾಗಿ (ITC) 100% ಮಾನ್ಯ ಜಿಎಸ್‌ಟಿ ಇನ್‌ವಾಯ್ಸ್.",
      check2: "ಸ್ಥಳೀಯವಾಗಿ RTGS/NEFT/UPI ಮೂಲಕ INR ನಲ್ಲಿ ಪಾವತಿಸಿ.",
      check3: "ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಮತ್ತು HSN ವರ್ಗೀಕರಣದ ಸಂಪೂರ್ಣ ನಿರ್ವಹಣೆ.",
      check4: "ನಿಮ್ಮ ಲ್ಯಾಬ್ ಅಥವಾ ಕಚೇರಿಗೆ ಸುರಕ್ಷಿತ ಎಕ್ಸ್‌ಪ್ರೆಸ್ ವಿತರಣೆ.",
      breakdownTitle: "ಬೆಲೆ ವಿವರ ಒಳಗೊಂಡಿರುವುದು",
      item1: "ಉತ್ಪನ್ನದ ಮೂಲ ಬೆಲೆ",
      item2: "ಫೊರೆಕ್ಸ್ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಶುಲ್ಕಗಳು",
      item3: "ಭಾರತೀಯ ಕಸ್ಟಮ್ಸ್ ಸುಂಕ",
      item4: "ಏರ್ ಫ್ರೈಟ್ ಮತ್ತು ಕೊರಿಯರ್ ಕ್ಲಿಯರೆನ್ಸ್",
      item5: "ITC ಗಾಗಿ ಜಿಎಸ್‌ಟಿ ಇನ್‌ವಾಯ್ಸ್",
      included: "ಒಳಗೊಂಡಿದೆ",
      claimable: "ಕ್ಲೈಮ್ ಮಾಡಬಹುದು",
      cta: "ಆಮದು ಬೆಲೆ ವಿವರ ಪಡೆಯಿರಿ"
    },
    faq: {
      badge: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳು",
      title: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು — ಜಾಗತಿಕ ಖರೀದಿ & ಆಮದು",
      desc: "ಬೆಲೆ ವಿವರಗಳು, ಜಿಎಸ್‌ಟಿ ಇನ್‌ವಾಯ್ಸ್ ಮತ್ತು ಕಸ್ಟಮ್ಸ್ ಕುರಿತು ಸ್ಪಷ್ಟ ವಿವರಣೆ."
    },
    ctaSection: {
      badge: "ಇಂದೇ ಜಾಗತಿಕ ಖರೀದಿಯನ್ನು ಹೊರಗುತ್ತಿಗೆ ನೀಡಿ",
      title: "ಕಸ್ಟಮ್ಸ್ ತೊಂದರೆಯಿಲ್ಲದೆ ಜಾಗತಿಕವಾಗಿ ಖರೀದಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
      desc: "ಉತ್ಪನ್ನದ ಲಿಂಕ್ ಅಥವಾ BOM ನಮಗೆ ಕಳುಹಿಸಿ. ಜಿಎಸ್‌ಟಿ ಇನ್‌ವಾಯ್ಸ್‌ನೊಂದಿಗೆ ಸಂಪೂರ್ಣ ಆಮದು ಪ್ರಕ್ರಿಯೆಯನ್ನು ನಾವು ನಿರ್ವಹಿಸುತ್ತೇವೆ.",
      chatWhatsapp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ",
      sendEnquiry: "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ",
      footerTag: "★ ಆಮದು ಅನುಭವದ ಅಗತ್ಯವಿಲ್ಲ • ಸಂಪೂರ್ಣ ವೆಚ್ಚ ಒಳಗೊಂಡ INR ಬೆಲೆ"
    }
  },
  te: {
    backToServices: "సేవలకు తిరిగి వెళ్ళండి",
    flagshipBadge: "ప్రధాన సేవ (Flagship Service)",
    heroTitle: "కొనుగోలు & ",
    heroTitleHighlight: "దిగుమతి పాటింపు (Procurement & Import)",
    heroSubtitle: "మీ అవుట్‌సోర్స్ గ్లోబల్ ప్రోక్యూర్మెంట్ & ఇంపోర్ట్ టీమ్",
    heroDesc: "కస్టమ్స్ పేపర్‌వర్క్, ఫారెక్స్ వైర్ ట్రాన్స్‌ఫర్‌లు మరియు దిగుమతి ఆలస్యాల గురించి చింతించకండి. నమూనా లేదా ప్రొడక్ట్ లింక్ మాకు పంపండి — మేము అంతర్జాతీయ కొనుగోలు, కస్టమ్స్ క్లియరెన్స్ చేసి జీఎస్టీ టాక్స్ ఇన్వాయిస్‌తో నేరుగా మీ వద్దకు డెలివరీ చేస్తాము.",
    shareWhatsapp: "వాట్సాప్‌లో లింక్ పంపండి",
    requestQuote: "ధర అంచనా పొందండి",
    steps: [
      {
        title: "1. లింక్ లేదా BOM షేర్ చేయండి",
        desc: "DigiKey, Mouser, OEM లింక్‌లు లేదా ప్రొడక్ట్ పాయింట్లను వాట్సాప్ లేదా ఈమెయిల్ ద్వారా పంపండి.",
        stageLabel: "దశ 1: లింక్ మరియు అభ్యర్థన సమర్పణ"
      },
      {
        title: "2. INR లో ధర పొందండి & చెల్లించండి",
        desc: "మేము అన్ని ఖర్చులతో కూడిన స్పష్టమైన INR ధరను అందిస్తాము. మీరు ఆమోదించి INR లోనే చెల్లించవచ్చు.",
        stageLabel: "దశ 2: పారదర్శక INR ధర కోట్"
      },
      {
        title: "3. దిగుమతి & డెలివరీ చేస్తాము",
        desc: "కస్టమ్స్ క్లియరెన్స్, DHL/FedEx కోఆర్డినేషన్ పూర్తి చేసి జీఎస్టీ ఇన్వాయిస్‌తో మీ ఇంటి వద్దకు డెలివరీ చేస్తాము.",
        stageLabel: "దశ 3: కస్టమ్స్ క్లియరెన్స్ మరియు డెలివరీ"
      }
    ],
    positioning: {
      badge: "మా వ్యూహాత్మక స్థానం",
      title: "Byalance ఎలక్ట్రానిక్స్ డిస్ట్రిబ్యూటర్ కాదు, ",
      titleNot: "ఆపరేషన్స్ సంస్థ",
      desc: "Byalance భారతీయ స్టార్టప్‌లు, R&D ల్యాబ్‌లు మరియు చిన్న పరిశ్రమలకు ప్రపంచవ్యాప్తంగా ప్రొడక్ట్స్ కొనుగోలు చేయడానికి మరియు దిగుమతి ప్రక్రియను నిర్వహించడానికి సహాయం చేస్తుంది.",
      highlight: "కస్టమర్లు DigiKey, Mouser, DHL లేదా కస్టమ్స్ డాక్యుమెంట్లతో శ్రమపడనవసరం లేదు. కేవలం లింక్ పంపితే చాలు — మేమే అంతా చూసుకుంటాము.",
      cta: "ప్రొడక్ట్ లింక్ పంపండి"
    },
    servicesScope: {
      badge: "పూర్తి పరిధి",
      title: "గ్లోబల్ ప్రోక్యూర్మెంట్ & ఇంపోర్ట్‌లో చేర్చబడిన సేవలు",
      desc: "14 రకాల ప్రత్యేక ఆపరేషనల్ సేవలు ఒకే సులువైన ప్రాసెస్‌లో అందుబాటులో ఉన్నాయి.",
      items: [
        { title: "గ్లోబల్ సప్లయర్ సోర్సింగ్", desc: "ప్రపంచవ్యాప్త సరఫరాదారుల నుండి ప్రొడక్ట్స్ మరియు పార్ట్స్ కొనుగోలు." },
        { title: "ప్రోక్యూర్మెంట్ మేనేజ్‌మెంట్", desc: "లింక్ నుండి డోర్‌స్టెప్ వరకు పూర్తి కొనుగోలు జీవితచక్ర నిర్వహణ." },
        { title: "RFQ మేనేజ్‌మెంట్", desc: "మెరుగైన ధర కోసం గ్లోబల్ సప్లయర్లతో చర్చలు." },
        { title: "అంతర్జాతీయ చెల్లింపులు", desc: "విదేశీ సరఫరాదారులకు సులువైన ఫారెక్స్ చెల్లింపులు." },
        { title: "దిగుమతి డాక్యుమెంటేషన్", desc: "కస్టమ్స్ ఫారాలు మరియు కమర్షియల్ ఇన్వాయిస్ల తయారీ." },
        { title: "HSN వర్గీకరణ", desc: "ఖచ్చితమైన HSN కోడ్ నిర్ధారణ మరియు నిబంధనల పాటింపు." },
        { title: "మొత్తం ఖర్చు అంచనా", desc: "ఆర్డర్ ముందు పారదర్శక INR ధర కోట్." },
        { title: "కస్టమ్స్ క్లియరెన్స్", desc: "భారతీయ దిగుమతి చట్టాలకు అనుగుణంగా సురక్షిత కస్టమ్స్ క్లియరెన్స్." },
        { title: "DHL/FedEx కోఆర్డినేషన్", desc: "కొరియర్ మరియు కస్టమ్స్ సమస్యల నేరు నిర్వహణ." },
        { title: "దిగుమతి సుంకం నిర్వహణ", desc: "కస్టమ్స్ డ్యూటీ లెక్కింపు మరియు చెల్లింపులు." },
        { title: "బిల్ ఆఫ్ ఎంట్రీ నిర్వహణ", desc: "చట్టబద్ధమైన బిల్ ఆఫ్ ఎంట్రీ పత్రాల దాఖలు." },
        { title: "జీఎస్టీ డాక్యుమెంటేషన్", desc: "ఇన్‌పుట్ టాక్స్ క్రెడిట్ కోసం జీఎస్టీ పోర్టల్ సమన్వయం." },
        { title: "డోర్‌స్టెప్ డెలివరీ", desc: "మీ ల్యాబ్ లేదా ఫ్యాక్టరీకి సురక్షిత ఎక్స్‌ప్రెస్ రవాణా." },
        { title: "జీఎస్టీ టాక్స్ ఇన్వాయిస్", desc: "100% ఇన్‌పుట్ టాక్స్ క్రెడిట్ (ITC) పొందడానికి అధికారిక ఇన్వాయిస్." }
      ]
    },
    howItWorks: {
      badge: "6-దశల విధానం",
      title: "గ్లోబల్ ప్రోక్యూర్మెంట్ ఎలా పనిచేస్తుంది",
      desc: "అంతర్జాతీయ ప్రొడక్ట్ ఎంపిక నుండి మీ ఇంటి వద్దకు చేరే వరకు సులువైన విధానం.",
      steps: [
        { step: 1, title: "ప్రొడక్ట్ లింక్ పంపండి", desc: "DigiKey, Mouser లేదా అంతర్జాతీయ సరఫరాదారుల లింక్‌లు పంపండి." },
        { step: 2, title: "ధర అంచనా పొందండి", desc: "మేము అన్ని ఖర్చులను లెక్కించి స్పష్టమైన INR ధరను పంపుతాము." },
        { step: 3, title: "ఆమోదించండి & చెల్లించండి", desc: "ధరను ఆమోదించి స్థానికంగా INR లో చెల్లించండి." },
        { step: 4, title: "మేము కొనుగోలు చేస్తాము", desc: "మేము విదేశీ సరఫరాదారులకు చెల్లించి ప్రొడక్ట్ కొనుగోలు చేస్తాము." },
        { step: 5, title: "కస్టమ్స్ క్లియరెన్స్", desc: "మేము కస్టమ్స్ ప్రక్రియ మరియు పన్ను చెల్లింపులను నిర్వహిస్తాము." },
        { step: 6, title: "మీ వద్దకు చేరుతుంది", desc: "జీఎస్టీ ఇన్వాయిస్‌తో ప్రొడక్ట్ నేరుగా మీ వద్దకు చేరుతుంది." }
      ]
    },
    benefits: {
      badge: "ముఖ్య ప్రయోజనాలు",
      title: "భారతీయ సంస్థలు Byalance ని ఎందుకు ఎంచుకుంటాయి",
      desc: "దిగుమతి మరియు కస్టమ్స్ ఇబ్బందులను నివారించండి. మీ ప్రొడక్ట్ డెవలప్‌మెంట్‌పై దృష్టి పెట్టండి.",
      items: [
        "దిగుమతి అనుభవం అవసరం లేదు",
        "కస్టమ్స్ తలనొప్పులు లేవు",
        "సప్లయర్లతో నేరుగా మాట్లాడనవసరం లేదు",
        "డాక్యుమెంటేషన్ శ్రమ లేదు",
        "DHL / FedEx కోఆర్డినేషన్ శ్రమ లేదు",
        "సింగిల్ పాయింట్ ఆఫ్ కాంటాక్ట్",
        "INR లో పారదర్శక ధరలు",
        "చెల్లుబాటు అయ్యే జీఎస్టీ ఇన్వాయిస్ (ITC క్లెయిమ్ చేయండి)",
        "ప్రొఫెషనల్ ఇంపోర్ట్ ఆపరేషన్స్ టీమ్"
      ]
    },
    targetCustomers: {
      cardTitle: "మేము ఎవరికి సేవలు అందిస్తాము",
      cardDesc: "భారతదేశానికి పార్ట్స్, సెన్సార్లు మరియు పరికరాలను దిగుమతి చేసుకోవాలనుకునే టీమ్‌ల కోసం.",
      speakWithTeam: "ప్రోక్యూర్మెంట్ టీమ్‌తో మాట్లాడండి",
      items: [
        { title: "స్టార్టప్‌లు", desc: "హార్డ్‌వేర్ మరియు డీప్‌టెక్ ఇన్నోవేటర్లు" },
        { title: "R&D ల్యాబ్‌లు", desc: "పరిశోధనా కేంద్రాలు" },
        { title: "రోబోటిక్స్ సంస్థలు", desc: "ఆటోనామస్ సిస్టమ్స్ బిల్డర్లు" },
        { title: "ఎలక్ట్రానిక్స్ కంపెనీలు", desc: "PCB మరియు IoT ప్రొడక్ట్ టీమ్‌లు" },
        { title: "తయారీదారులు (Manufacturers)", desc: "పరిశ్రమల పరికరాల తయారీదారులు" },
        { title: "ఇండస్ట్రియల్ ఆటోమేషన్", desc: "PLC మరియు సెన్సార్ ఇంటిగ్రేటర్లు" },
        { title: "యూనివర్సిటీలు", desc: "ఇంజనీరింగ్ మరియు సైన్స్ విభాగాలు" },
        { title: "ఇంజనీరింగ్ టీమ్‌లు", desc: "ప్రోటోటైప్ డెవలప్‌మెంట్ టీమ్‌లు" },
        { title: "MSMEలు", desc: "పెరుగుతున్న చిన్న మరియు మధ్య తరహా పరిశ్రమలు" }
      ]
    },
    pricing: {
      badge: "పారదర్శక ధరల నమూనా",
      title: "గ్లోబల్ ప్రోక్యూర్మెంట్ ధరలు & ల్యాండెడ్ కోట్స్",
      desc: "అదనపు కస్టమ్స్ సుంకాలు ఉండవు. ఒకే పారదర్శక INR ధరను పొందండి.",
      boxBadge: "అన్ని ఖర్చులతో కూడిన ధర (INR)",
      boxTitle: "కస్టమ్ ల్యాండెడ్ కాస్ట్ కోట్",
      boxDesc: "మీ ప్రొడక్ట్ లింక్ లేదా BOM ని షేర్ చేయండి. మేము అన్ని రవాణా, కస్టమ్స్ ఖర్చులను లెక్కించి స్పష్టమైన INR ధరను అందిస్తాము.",
      check1: "పూర్తి ఇన్‌పుట్ టాక్స్ క్రెడిట్ (ITC) కోసం 100% చెల్లుబాటు అయ్యే జీఎస్టీ ఇన్వాయిస్.",
      check2: "స్థానికంగా RTGS/NEFT/UPI ద్వారా INR లో చెల్లించండి.",
      check3: "కస్టమ్స్ క్లియరెన్స్ మరియు HSN వర్గీకరణ పూర్తి నిర్వహణ.",
      check4: "మీ ల్యాబ్ లేదా ఆఫీస్‌కు సురక్షిత ఎక్స్‌ప్రెస్ డెలివరీ.",
      breakdownTitle: "ధర వివరణలో ఉన్నవి",
      item1: "ప్రొడక్ట్ అసలు ధర",
      item2: "ఫారెక్స్ మరియు బ్యాంకింగ్ ఛార్జీలు",
      item3: "భారతీయ కస్టమ్స్ డ్యూటీ",
      item4: "ఎయిర్ ఫ్రైట్ మరియు కొరియర్ క్లియరెన్స్",
      item5: "ITC కోసం జీఎస్టీ ఇన్వాయిస్",
      included: "చేర్చబడింది",
      claimable: "క్లెయిమ్ చేయవచ్చు",
      cta: "ధర అంచనా పొందండి"
    },
    faq: {
      badge: "మీ ప్రశ్నలకు సమాధానాలు",
      title: "తరచుగా అడిగే ప్రశ్నలు — గ్లోబಲ್ ప్రోక్యూర్మెంట్ & ఇంపోర్ట్",
      desc: "ధర వివరాలు, జీఎస్టీ ఇన్వాయిస్ మరియు కస్టమ్స్ పై స్పష్టత."
    },
    ctaSection: {
      badge: "ఈరోజే గ్లోబల్ ప్రోక్యూర్మెంట్ అవుట్‌సోర్స్ చేయండి",
      title: "కస్టమ్స్ ఇబ్బందులు లేకుండా అంతర్జాతీయంగా కొనుగోలు చేయడానికి సిద్ధంగా ఉన్నారా?",
      desc: "ప్రొడక్ట్ లింక్ లేదా BOM మాకు పంపండి. జీఎస్టీ ఇన్వాయిస్‌తో పూర్తి దిగుమతి ప్రక్రియను మేము నిర్వహిస్తాము.",
      chatWhatsapp: "వాట్సాప్‌లో చాట్ చేయండి",
      sendEnquiry: "విచారణ పంపండి",
      footerTag: "★ దిగుమతి అనుభవం అవసరం లేదు • అన్ని ఖర్చులతో కూడిన INR ధర"
    }
  },
  mr: {
    backToServices: "सेवांवर वापस जा",
    flagshipBadge: "प्रमुख सेवा (Flagship Service)",
    heroTitle: "खरेदी आणि ",
    heroTitleHighlight: "आयात अनुपालन (Procurement & Import)",
    heroSubtitle: "तुमची आउटसोर्स केलेली जागतिक खरेदी आणि आयात टीम",
    heroDesc: "सीमा शुल्क कागदपत्रे, परकीय चलन (Forex) वायर ट्रान्सफर आणि आयात विलंबाची चिंता सोडा. फक्त आम्हाला उत्पादनाची लिंक किंवा BOM पाठवा — आम्ही जागतिक खरेदी, सीमा शुल्क clearance हाताळतो आणि वैध GST टॅक्स इनव्हॉइससह तुमच्या दारापर्यंत डिलिव्हरी करतो.",
    shareWhatsapp: "व्हॉट्सॲपवर लिंक पाठवा",
    requestQuote: "कोटेशन मिळवा",
    steps: [
      {
        title: "1. लिंक किंवा BOM शेअर करा",
        desc: "DigiKey, Mouser, OEM लिंक्स किंवा पार्ट नंबर व्हॉट्सॲप किंवा ईमेलद्वारे पाठवा.",
        stageLabel: "टप्पा 1: लिंक व विनंती सादर करणे"
      },
      {
        title: "2. INR मध्ये कोटेशन मिळवा व भरणा करा",
        desc: "आम्ही सर्व खर्चांसह स्पष्ट INR कोटेशन देतो. तुम्ही ते मंजूर करून INR मध्ये भरणा करू शकता.",
        stageLabel: "टप्पा 2: पारदर्शक INR कोटेशन"
      },
      {
        title: "3. आम्ही आयात व डिलिव्हरी करतो",
        desc: "आम्ही कस्टम्स क्लिअरन्स, DHL/FedEx समन्वय हाताळतो आणि GST इनव्हॉइससह तुमच्या दारापर्यंत पोहोचवतो.",
        stageLabel: "टप्पा 3: सीमा शुल्क क्लिअरन्स व डिलिव्हरी"
      }
    ],
    positioning: {
      badge: "आमचे धोरणात्मक स्थान",
      title: "Byalance इलेक्ट्रॉनिक्स डिस्ट्रीब्यूटर नाही, ",
      titleNot: "तर ऑपरेशन्स कंपनी आहे",
      desc: "Byalance भारतीय स्टार्टअप्स, R&D लॅब्स आणि लहान उद्योगांना जगभरातून उत्पादने खरेदी करण्यात आणि पूर्ण आयात प्रक्रिया हाताळण्यात मदत करते.",
      highlight: "ग्राहकांना DigiKey, Mouser, DHL किंवा कस्टम्स कागदपत्रांची चिंता करण्याची गरज नाही. फक्त लिंक पाठवा — सर्व काही आम्ही हाताळतो.",
      cta: "उत्पादन लिंक पाठवा"
    },
    servicesScope: {
      badge: "संपूर्ण व्याप्ती",
      title: "जागतिक खरेदी आणि आयातीमध्ये समाविष्ट सेवा",
      desc: "14 विशेष ऑपरेशन्स सेवा एका सोप्या प्रक्रियेत समाविष्ट आहेत.",
      items: [
        { title: "जागतिक पुरवठादार सोर्सिंग", desc: "जगभरातील कोणत्याही पुरवठादाराकडून भाग खरेदी करणे." },
        { title: "खरेदी व्यवस्थापन", desc: "लिंकपासून दारापर्यंत पूर्ण खरेदी जीवनचक्र व्यवस्थापन." },
        { title: "RFQ व्यवस्थापन", desc: "सर्वोत्तम किमतीसाठी पुरवठादारांशी बोलणी." },
        { title: "आंतरराष्ट्रीय देयके", desc: "परदेशी पुरवठादारांना फॉरेक्सद्वारे सोपे पेमेंट." },
        { title: "आयात दस्तऐवजीकरण", desc: "सीमा शुल्क फॉर्म्स आणि कमर्शियल इनव्हॉइस तयार करणे." },
        { title: "HSN वर्गीकरण", desc: "अचूक HSN कोड निश्चित करणे व नियमांचे पालन." },
        { title: "एकूण खर्च अंदाज", desc: "ऑर्डर देण्यापूर्वी सर्व खर्चांसह पारदर्शक INR कोटेशन." },
        { title: "सीमा शुल्क अनुपालन", desc: "भारतीय आयात नियमांनुसार सुरक्षित कस्टम्स क्लिअरन्स." },
        { title: "DHL/FedEx समन्वय", desc: "कूरियर आणि कस्टम्स समस्यांचे थेट निवारण." },
        { title: "आयात शुल्क व्यवस्थापन", desc: "सीमा शुल्क मोजणी आणि भरणा." },
        { title: "बिल ऑफ एंट्री व्यवस्थापन", desc: "कायदेशीर बिल ऑफ एंट्री कागदपत्रे भरणे." },
        { title: "जीएसटी दस्तऐवजीकरण", desc: "इनपुट क्रेडिटसाठी जीएसटी पोर्टलवर योग्य नोंदणी." },
        { title: "दारापर्यंत डिलिव्हरी", desc: "तुमच्या लॅब किंवा कारखान्यात सुरक्षित एक्सप्रेस वाहतूक." },
        { title: "जीएसटी टॅक्स इनव्हॉइस", desc: "100% इनपुट टॅक्स क्रेडिट (ITC) मिळवण्यासाठी अधिकृत इनव्हॉइस." }
      ]
    },
    howItWorks: {
      badge: "6-टप्प्यांची प्रक्रिया",
      title: "जागतिक खरेदी आणि आयात कसे कार्य करते",
      desc: "आंतरराष्ट्रीय घटक निवडीपासून तुमच्या दारापर्यंत — अत्यंत सोपी प्रक्रिया.",
      steps: [
        { step: 1, title: "उत्पादन लिंक पाठवा", desc: "DigiKey, Mouser किंवा जागतिक पुरवठादारांच्या लिंक्स पाठवा." },
        { step: 2, title: "कोटेशन मिळवा", desc: "आम्ही सर्व खर्च मोजून स्पष्ट INR कोटेशन पाठवतो." },
        { step: 3, title: "मंजूर करा व भरणा करा", desc: "कोटेशन मंजूर करून स्थानिक पातळीवर INR मध्ये भरणा करा." },
        { step: 4, title: "आम्ही खरेदी करतो", desc: "आम्ही परदेशी पुरवठादारांना पेमेंट करून वस्तू खरेदी करतो." },
        { step: 5, title: "कस्टम्स क्लिअरन्स", desc: "आम्ही सीमा शुल्क प्रक्रिया आणि शुल्क भरणा हाताळतो." },
        { step: 6, title: "दारापर्यंत पोहोचते", desc: "जीएसटी इनव्हॉइससह उत्पादन थेट तुमच्या हातात पोहोचते." }
      ]
    },
    benefits: {
      badge: "प्रमुख फायदे",
      title: "भारतीय कंपन्या जागतिक आयातीसाठी Byalance का निवडतात",
      desc: "आयात आणि कस्टम्सच्या अडचणी दूर करा. तुमच्या प्रॉडक्ट विकासावर लक्ष केंद्रित करा.",
      items: [
        "आयात अनुभवाची गरज नाही",
        "कस्टम्सची कोणतीही डोकेदुखी नाही",
        "पुरवठादारांशी थेट संभाषणाची गरज नाही",
        "कागदपत्रांचा कोणताही मनस्ताप नाही",
        "DHL / FedEx समन्वयाची गरज नाही",
        "संपर्काचा एकच केंद्रबिंदू",
        "INR मध्ये पारदर्शक दर",
        "वैध जीएसटी इनव्हॉइस (ITC क्लेम करा)",
        "व्यावसायिक आयात ऑपरेशन्स टीम"
      ]
    },
    targetCustomers: {
      cardTitle: "आम्ही कोणाला सेवा देतो",
      cardDesc: "भारतात सुटे भाग, सेन्सर्स आणि उपकरणे आयात करू इच्छिणाऱ्या टीम्ससाठी.",
      speakWithTeam: "खरेदी टीमशी बोला",
      items: [
        { title: "स्टार्टअप्स", desc: "हार्डवेअर आणि डीपटेक इनो्हेटर्स" },
        { title: "R&D लॅब्स", desc: "संशोधन केंद्रे" },
        { title: "रोबोटिक्स कंपन्या", desc: "स्वायत्त प्रणाली उत्पादक" },
        { title: "इलेक्ट्रॉनिक्स कंपन्या", desc: "PCB आणि IoT प्रॉडक्ट टीम्स" },
        { title: "उत्पादक (Manufacturers)", desc: "औद्योगिक उपकरण उत्पादक" },
        { title: "इंडस्ट्रियल ऑटोमेशन", desc: "PLC आणि सेन्सर इंटिग्रेटर्स" },
        { title: "विद्यापीठे", desc: "अभियांत्रिकी व विज्ञान विभाग" },
        { title: "इंजिनिअरिंग टीम्स", desc: "प्रोटोटाइप विकास टीम्स" },
        { title: "MSMEs", desc: "वाढणारे लहान व मध्यम उद्योग" }
      ]
    },
    pricing: {
      badge: "पारदर्शक दर मॉडेल",
      title: "जागतिक खरेदी दर आणि लँडेड कोटेशन्स",
      desc: "कोणतेही लपलेले सीमा शुल्क नाही. एकच पारदर्शक INR कोटेशन मिळवा.",
      boxBadge: "सर्व खर्चांसह दर (INR)",
      boxTitle: "कस्टम लँडेड कॉस्ट कोटेशन",
      boxDesc: "तुमची प्रॉडक्ट लिंक किंवा BOM शेअर करा. आम्ही सर्व आंतरराष्ट्रीय खर्च मोजून स्पष्ट INR दर देतो.",
      check1: "पूर्ण इनपुट टॅक्स क्रेडिट (ITC) साठी 100% वैध जीएसटी टॅक्स इनव्हॉइस.",
      check2: "स्थानिक पातळीवर RTGS/NEFT/UPI द्वारे INR मध्ये भरणा करा.",
      check3: "कस्टम्स क्लिअरन्स आणि HSN वर्गीकरणाचे पूर्ण व्यवस्थापन.",
      check4: "तुमच्या लॅब किंवा ऑफिसमध्ये सुरक्षित एक्सप्रेस डिलिव्हरी.",
      breakdownTitle: "दर पत्रकात समाविष्ट",
      item1: "उत्पादनाची मूळ किंमत",
      item2: "फॉरेक्स आणि बँकिंग शुल्क",
      item3: "भारतीय सीमा शुल्क",
      item4: "एर फ्रेट आणि कूरियर क्लिअरन्स",
      item5: "ITC साठी जीएसटी इनव्हॉइस",
      included: "समाविष्ट",
      claimable: "क्लेम करता येण्याजोगे",
      cta: "कोटेशन मिळवा"
    },
    faq: {
      badge: "तुमच्या प्रश्नांची उत्तरे",
      title: "सतत विचारले जाणारे प्रश्न — जागतिक खरेदी व आयात",
      desc: "कोटेशन्स, जीएसटी इनव्हॉइस आणि कस्टम्सबद्दल स्पष्ट माहिती."
    },
    ctaSection: {
      badge: "आजच जागतिक खरेदी आउटसोर्स करा",
      title: "कस्टम्स त्रासाशिवाय आंतरराष्ट्रीय खरेदीसाठी तयार आहात?",
      desc: "उत्पादन लिंक किंवा BOM पाठवा. जीएसटी इनव्हॉइससह पूर्ण आयात प्रक्रिया आम्ही हाताळू.",
      chatWhatsapp: "व्हॉट्सॲपवर चॅट करा",
      sendEnquiry: "चौकशी पाठवा",
      footerTag: "★ आयात अनुभवाची गरज नाही • सर्व खर्चांसह INR दर"
    }
  },
  ta: {
    backToServices: "சேவைகளுக்குத் திரும்பு",
    flagshipBadge: "முதன்மை சேவை (Flagship Service)",
    heroTitle: "கொள்முதல் மற்றும் ",
    heroTitleHighlight: "இறக்குமதி இணக்கம் (Procurement & Import)",
    heroSubtitle: "உங்கள் உலகளாவிய கொள்முதல் மற்றும் இறக்குமதி குழு",
    heroDesc: "சுங்க ஆவணங்கள், சர்வதேச அந்நிய செலாவணி கொடுப்பனவுகள் மற்றும் இறக்குமதி தாமதங்கள் பற்றி கவலைப்பட வேண்டாம். எங்களுக்கு தயாரிப்பு லிங்க் அனுப்பவும் — நாங்கள் உலகளாவிய கொள்முதல், சுங்க இணக்கத்தை கையாண்டு செல்லுபடியாகும் GST வரி இன்வாய்ஸுடன் உங்கள் வாசலில் விநியோகிக்கிறோம்.",
    shareWhatsapp: "வாட்ஸ்அப்பில் லிங்க் அனுப்பவும்",
    requestQuote: "விலை விவரம் கேட்கவும்",
    steps: [
      {
        title: "1. லிங்க் அல்லது BOM அனுப்பவும்",
        desc: "DigiKey, Mouser, OEM லிங்க்கள் அல்லது பகுதி எண்களை வாட்ஸ்அப் அல்லது மின்னஞ்சலில் அனுப்பவும்.",
        stageLabel: "நிலை 1: லிங்க் சமர்ப்பித்தல்"
      },
      {
        title: "2. INR இல் விலை பெற்று செலுத்தவும்",
        desc: "அனைத்து செலவுகளையும் உள்ளடக்கிய தெளிவான INR விலையை நாங்கள் வழங்குகிறோம். நீங்கள் ஒப்புக்கொண்டு INR இல் செலுத்தலாம்.",
        stageLabel: "நிலை 2: வெளிப்படையான INR விலை"
      },
      {
        title: "3. நாங்கள் இறக்குமதி செய்து விநியோகிக்கிறோம்",
        desc: "சுங்க அனுமதி, DHL/FedEx ஒருங்கிணைப்பை நாங்கள் கையாண்டு ஜிஎஸ்டி இன்வாய்ஸுடன் உங்கள் இருப்பிடத்திற்கு விநியோகிக்கிறோம்.",
        stageLabel: "நிலை 3: சுங்க அனுமதி மற்றும் விநியோகம்"
      }
    ],
    positioning: {
      badge: "எங்கள் மூலோபாய நிலைப்பாடு",
      title: "Byalance எலக்ட்ரானிக்ஸ் விநியோகஸ்தர் அல்ல, ",
      titleNot: "செயல்பாட்டு நிறுவனம்",
      desc: "Byalance இந்திய ஸ்டார்ட்அப்கள், R&D ஆய்வகங்கள் மற்றும் சிறு தொழில்களுக்கு உலகம் முழுவதிலுமிருந்து தயாரிப்புகளை வாங்கவும் இறக்குமதி செய்ய உதவவும் செயல்படுகிறது.",
      highlight: "வாடிக்கையாளர்கள் DigiKey, Mouser, DHL அல்லது சுங்க ஆவணங்களை கையாள வேண்டியதில்லை. லிங்க் அனுப்பினால் போதும் — நாங்கள் அனைத்தையும் பார்த்துக்கொள்கிறோம்.",
      cta: "தயாரிப்பு லிங்க் அனுப்பவும்"
    },
    servicesScope: {
      badge: "முழுமையான எல்லை",
      title: "உலகளாவிய கொள்முதல் மற்றும் இறக்குமதியில் சேர்க்கப்பட்டுள்ள சேவைகள்",
      desc: "14 சிறப்பு செயல்பாட்டு சேவைகள் ஒரே எளிய செயல்முறையாக வழங்கப்படுகின்றன.",
      items: [
        { title: "உலகளாவிய விநியோகஸ்தர் ஆதாரம்", desc: "உலகின் எந்தவொரு விநியோகஸ்தரிடமிருந்தும் பாகங்களை வாங்குதல்." },
        { title: "கொள்முதல் நிர்வாகம்", desc: "லிங்க் முதல் வீட்டு வாசலில் விநியோகம் வரையிலான முழு நிர்வாகம்." },
        { title: "RFQ நிர்வாகம்", desc: "சிறந்த விலையைப் பெற விநியோகஸ்தர்களுடன் பேச்சுவார்த்தை." },
        { title: "சர்வதேச கொடுப்பனவுகள்", desc: "வெளிநாட்டு விநியோகஸ்தர்களுக்கு எளிய அந்நிய செலாவணி கொடுப்பனவுகள்." },
        { title: "இறக்குமதி ஆவணங்கள்", desc: "சுங்க படிவங்கள் மற்றும் வணிக இன்வாய்ஸ்களை தயார் செய்தல்." },
        { title: "HSN வகைப்பாடு", desc: "துல்லியமான HSN குறியீட்டை தீர்மானித்தல் மற்றும் விதிகளை பின்பற்றுதல்." },
        { title: "மொத்த செலவு மதிப்பீடு", desc: "ஆர்டர் செய்வதற்கு முன் வெளிப்படையான INR விலை விவரம்." },
        { title: "சுங்க இணக்கம்", desc: "இந்திய இறக்குமதி விதிகளுக்கு உட்பட்ட பாதுகாப்பான சுங்க அனுமதி." },
        { title: "DHL/FedEx ஒருங்கிணைப்பு", desc: "கூரியர் மற்றும் சுங்க சிக்கல்களை நேரடியாக கையாளுதல்." },
        { title: "இறக்குமதி தீர்வை நிர்வாகம்", desc: "சுங்க தீர்வை கணக்கிடுதல் மற்றும் செலுத்துதல்." },
        { title: "பில் ஆஃப் என்ட்ரி நிர்வாகம்", desc: "சட்டபூர்வ பில் ஆஃப் என்ட்ரி ஆவணங்களை தாக்கல் செய்தல்." },
        { title: "ஜிஎஸ்டி ஆவணங்கள்", desc: "வரி விலக்கு பெற ஜிஎஸ்டி போர்ட்டலில் சரியான பதிவுகள்." },
        { title: "வீட்டு வாசலில் விநியோகம்", desc: "உங்கள் ஆய்வகம் அல்லது தொழிற்சாலைக்கு பாதுகாப்பான விநியோகம்." },
        { title: "ஜிஎஸ்டி வரி இன்வாய்ஸ்", desc: "100% உள்ளீட்டு வரி விலக்கு (ITC) பெற அதிகாரப்பூர்வ இன்வாய்ஸ்." }
      ]
    },
    howItWorks: {
      badge: "6-படி நிலை செயல்முறை",
      title: "உலகளாவிய கொள்முதல் எவ்வாறு செயல்படுகிறது",
      desc: "தயாரிப்பு தேர்வில் இருந்து உங்கள் வீட்டு வாசல் வரை — மிகவும் எளிய முறைகள்.",
      steps: [
        { step: 1, title: "தயாரிப்பு லிங்க் அனுப்பவும்", desc: "DigiKey, Mouser அல்லது சர்வதேச விநியோகஸ்தர்களின் லிங்க்களை அனுப்பவும்." },
        { step: 2, title: "விலை விவரம் பெறவும்", desc: "அனைத்து செலவுகளையும் கணக்கிட்டு தெளிவான INR விலையை அனுப்புகிறோம்." },
        { step: 3, title: "ஒப்புக்கொண்டு செலுத்தவும்", desc: "விலையை ஒப்புக்கொண்டு உள்ளூர் முறையில் INR இல் செலுத்தவும்." },
        { step: 4, title: "நாங்கள் வாங்குகிறோம்", desc: "வெளிநாட்டு விநியோகஸ்தர்களுக்கு செலுத்தி தயாரிப்பை வாங்குகிறோம்." },
        { step: 5, title: "சுங்க அனுமதி", desc: "சுங்க செயல்முறைகள் மற்றும் வரி செலுத்தலை நாங்கள் கையாளுகிறோம்." },
        { step: 6, title: "உங்களை வந்தடையும்", desc: "ஜிஎஸ்டி இன்வாய்ஸுடன் தயாரிப்பு நேரடியாக உங்களிடம் வருகிறது." }
      ]
    },
    benefits: {
      badge: "முக்கிய நன்மைகள்",
      title: "இந்திய நிறுவனங்கள் Byalance ஐ ஏன் தேர்ந்தெடுக்கின்றன",
      desc: "இறக்குமதி மற்றும் சுங்க சிக்கல்களைத் தவிர்க்கவும். உங்கள் தயாரிப்பு உருவாக்கத்தில் கவனம் செலுத்துங்கள்.",
      items: [
        "இறக்குமதி அனுபவம் தேவையில்லை",
        "சுங்க தொல்லைகள் இல்லை",
        "விநியோகஸ்தர்களுடன் நேரடியாக பேச தேவையில்லை",
        "ஆவணங்கள் சிக்கல் இல்லை",
        "DHL / FedEx ஒருங்கிணைப்பு தேவையில்லை",
        "ஒரே தொடர்புகொள்ளும் மையம்",
        "INR இல் வெளிப்படையான விலை",
        "செல்லுபடியாகும் ஜிஎஸ்டி இன்வாய்ஸ் (ITC பெறலாம்)",
        "தொழில்முறை இறக்குமதி செயல்பாட்டுக் குழு"
      ]
    },
    targetCustomers: {
      cardTitle: "நாங்கள் யாருக்கு சேவை செய்கிறோம்",
      cardDesc: "இந்தியாவிற்கு பாகங்கள், சென்சார்கள் மற்றும் உபகரணங்களை இறக்குமதி செய்ய விரும்பும் குழுக்களுக்கு.",
      speakWithTeam: "கொள்முதல் குழுவுடன் பேசவும்",
      items: [
        { title: "ஸ்டார்ட்அப்கள்", desc: "வன்பொருள் மற்றும் தொழில்நுட்ப கண்டுபிடிப்பாளர்கள்" },
        { title: "R&D ஆய்வகங்கள்", desc: "ஆராய்ச்சி மையங்கள்" },
        { title: "ரோபோடிக்ஸ் நிறுவனங்கள்", desc: "தானியங்கி அமைப்பு உருவாக்குபவர்கள்" },
        { title: "எலக்ட்ரானிக்ஸ் நிறுவனங்கள்", desc: "PCB மற்றும் IoT குழுக்கள்" },
        { title: "உற்பத்தியாளர்கள்", desc: "தொழில்துறை உபகரண உற்பத்தியாளர்கள்" },
        { title: "இண்டஸ்ட்ரியல் ஆட்டோமேஷன்", desc: "PLC மற்றும் சென்சார் அமைப்பாளர்கள்" },
        { title: "பல்கலைக்கழகங்கள்", desc: "பொறியியல் மற்றும் அறிவியல் துறைகள்" },
        { title: "பொறியியல் குழுக்கள்", desc: "மாதிரி தயாரிப்பு குழுக்கள்" },
        { title: "MSMEகள்", desc: "வளரும் சிறு மற்றும் நடுத்தர நிறுவனங்கள்" }
      ]
    },
    pricing: {
      badge: "வெளிப்படையான விலை மாதிரி",
      title: "உலகளாவிய கொள்முதல் விலை மற்றும் மதிப்பீடுகள்",
      desc: "மறைக்கப்பட்ட சுங்க கட்டணங்கள் எதுவும் இல்லை. ஒரே வெளிப்படையான INR விலையைப் பெறுங்கள்.",
      boxBadge: "அனைத்து செலவுகளும் அடங்கிய விலை (INR)",
      boxTitle: "சிறப்பு இறக்குமதி விலை விவரம்",
      boxDesc: "தயாரிப்பு லிங்க் அல்லது BOM ஐப் பகிரவும். அனைத்து சர்வதேச செலவுகளையும் கணக்கிட்டு தெளிவான INR விலையை வழங்குகிறோம்.",
      check1: "முழு உள்ளீட்டு வரி விலக்கிற்கு (ITC) 100% செல்லுபடியாகும் ஜிஎஸ்டி இன்வாய்ஸ்.",
      check2: "RTGS/NEFT/UPI மூலம் உள்ளூர் முறையில் INR இல் செலுத்தலாம்.",
      check3: "சுங்க அனுமதி மற்றும் HSN வகைப்பாட்டின் முழு நிர்வாகம்.",
      check4: "உங்கள் ஆய்வகம் அல்லது அலுவலகத்திற்கு பாதுகாப்பான விநியோகம்.",
      breakdownTitle: "விலை விவரத்தில் உள்ளவை",
      item1: "தயாரிப்பின் அசல் விலை",
      item2: "அந்நிய செலாவணி & வங்கி கட்டணங்கள்",
      item3: "இந்திய சுங்க தீர்வை",
      item4: "விமான சரக்கு & கூரியர் அனுமதி",
      item5: "ITC க்கான ஜிஎஸ்டி இன்வாய்ஸ்",
      included: "சேர்க்கப்பட்டுள்ளது",
      claimable: "பெறக்கூடியது (Claimable)",
      cta: "விலை விவரம் கேட்கவும்"
    },
    faq: {
      badge: "உங்கள் கேள்விகளுக்கு பதில்கள்",
      title: "அடிக்கடி கேட்கப்படும் கேள்விகள் — உலகளாவிய கொள்முதல் & இறக்குமதி",
      desc: "விலை விவரங்கள், ஜிஎஸ்டி இன்வாய்ஸ் மற்றும் சுங்கம் பற்றிய தெளிவான தகவல்கள்."
    },
    ctaSection: {
      badge: "இன்றே உலகளாவிய கொள்முதலை ஒப்படையுங்கள்",
      title: "சுங்க சிக்கல்கள் இன்றி சர்வதேச அளவில் வாங்க தயாராக இருக்கிறீர்களா?",
      desc: "தயாரிப்பு லிங்க் அல்லது BOM எங்களுக்கு அனுப்பவும். ஜிஎஸ்டி இன்வாய்ஸுடன் முழு இறக்குமதி செயல்முறையையும் நாங்கள் கையாளுவோம்.",
      chatWhatsapp: "வாட்ஸ்அப்பில் அரட்டை அடிக்கவும்",
      sendEnquiry: "விசாரணை அனுப்பவும்",
      footerTag: "★ இறக்குமதி அனுபவம் தேவையில்லை • அனைத்து செலவுகளும் அடங்கிய INR விலை"
    }
  }
};

function ProcurementIllustration({ lang }: { lang: Language }) {
  const [activeStep, setActiveStep] = useState(0);
  const data = procurementI18n[lang] || procurementI18n.en;
  const stepsData = data.steps;

  const steps = [
    {
      title: stepsData[0].title,
      desc: stepsData[0].desc,
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Procurement Link Sharing Flow">
          <rect width="440" height="220" rx="16" fill="#FFFBEB" />
          <g transform="translate(15, 15)">
            <rect width="410" height="190" rx="12" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="1" />
            <rect width="410" height="30" rx="12" fill="#D97706" />
            <text x="15" y="19" fontSize="10" fontWeight="bold" fill="#FFFFFF">{stepsData[0].stageLabel}</text>
            
            <g transform="translate(20, 50)" fontSize="8.5" fill="#1E293B">
              <rect width="140" height="110" rx="8" fill="#FFFBEB" stroke="#FCD34D" />
              <text x="10" y="20" fontWeight="bold" fill="#B45309" fontSize="9">Client (Startup / R&D)</text>
              <text x="10" y="45" fill="#64748B">Shares Link or BOM:</text>
              <text x="10" y="60" fontWeight="bold" fill="#D97706">• DigiKey / Mouser Links</text>
              <text x="10" y="75" fontWeight="bold" fill="#D97706">• Part Numbers / Datasheets</text>
              <text x="10" y="90" fontWeight="bold" fill="#D97706">• Target Quantities</text>

              {/* Arrow */}
              <g transform="translate(150, 45)">
                <line x1="0" y1="10" x2="60" y2="10" stroke="#D97706" strokeWidth="2.5" strokeDasharray="4 2" />
                <polygon points="60,6 68,10 60,14" fill="#D97706" />
                <text x="34" y="0" fontSize="7.5" fontWeight="black" fill="#D97706" textAnchor="middle">URL / BOM</text>
              </g>

              <rect x="230" y="0" width="140" height="110" rx="8" fill="#EFF6FF" stroke="#BFDBFE" />
              <text x="240" y="20" fontWeight="bold" fill="#1E40AF" fontSize="9">Byalance Operations</text>
              <text x="240" y="45" fill="#475569">Sourcing check</text>
              <text x="240" y="60" fill="#475569">HSN classification</text>
              <text x="240" y="75" fill="#475569">Landed cost estimation</text>
              <rect x="240" y="88" width="120" height="14" rx="3" fill="#2563EB" />
              <text x="300" y="98" fontSize="7" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">CALCULATING QUOTE</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: stepsData[1].title,
      desc: stepsData[1].desc,
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Landed Cost INR Payment Flow">
          <rect width="440" height="220" rx="16" fill="#ECFDF5" />
          <g transform="translate(15, 15)">
            <rect width="410" height="190" rx="12" fill="#FFFFFF" stroke="#D1FAE5" strokeWidth="1" />
            <rect width="410" height="30" rx="12" fill="#047857" />
            <text x="15" y="19" fontSize="10" fontWeight="bold" fill="#FFFFFF">{stepsData[1].stageLabel}</text>
            
            <g transform="translate(20, 50)" fontSize="8.5" fill="#1E293B">
              <rect width="140" height="110" rx="8" fill="#ECFDF5" stroke="#A7F3D0" />
              <text x="10" y="20" fontWeight="bold" fill="#065F46" fontSize="9">Final Quote Breakdown</text>
              <text x="10" y="42" fill="#047857" fontSize="8" fontWeight="bold">NO HIDDEN SURPRISES</text>
              <text x="10" y="58" fill="#475569">• Global Component Cost</text>
              <text x="10" y="72" fill="#475569">• Import Duty & Customs</text>
              <text x="10" y="86" fill="#475569">• Freight + GST Invoice</text>

              {/* Arrow */}
              <g transform="translate(150, 45)">
                <line x1="0" y1="10" x2="60" y2="10" stroke="#059669" strokeWidth="2.5" strokeDasharray="4 2" />
                <polygon points="60,6 68,10 60,14" fill="#059669" />
                <text x="34" y="0" fontSize="7.5" fontWeight="black" fill="#059669" textAnchor="middle">Pay INR</text>
              </g>

              <rect x="230" y="0" width="140" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
              <text x="240" y="20" fontWeight="bold" fill="#1E293B" fontSize="9">Order Confirmed</text>
              <text x="240" y="45" fill="#475569">Forex wire initiated</text>
              <text x="240" y="60" fill="#475569">International supplier paid</text>
              <text x="240" y="75" fontWeight="bold" fill="#059669">• Zero Forex Friction</text>
              <text x="240" y="90" fontWeight="bold" fill="#059669">• Single Point Contact</text>
            </g>
          </g>
        </svg>
      )
    },
    {
      title: stepsData[2].title,
      desc: stepsData[2].desc,
      svg: (
        <svg viewBox="0 0 440 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg" aria-label="Customs Clearance & Doorstep Delivery Flow">
          <rect width="440" height="220" rx="16" fill="#EFF6FF" />
          <g transform="translate(15, 15)">
            <rect width="410" height="190" rx="12" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1" />
            <rect width="410" height="30" rx="12" fill="#1D4ED8" />
            <text x="15" y="19" fontSize="10" fontWeight="bold" fill="#FFFFFF">{stepsData[2].stageLabel}</text>
            
            <g transform="translate(20, 50)" fontSize="8.5" fill="#1E293B">
              <rect width="140" height="110" rx="8" fill="#EFF6FF" stroke="#BFDBFE" />
              <text x="10" y="20" fontWeight="bold" fill="#1E40AF" fontSize="9">Customs & Compliance</text>
              <text x="10" y="45" fill="#64748B">• Bill of Entry filed</text>
              <text x="10" y="60" fill="#64748B">• Duties cleared</text>
              <text x="10" y="75" fill="#64748B">• DHL/FedEx coordination</text>
              <text x="10" y="90" fontWeight="bold" fill="#1D4ED8">100% Tax Compliant</text>

              {/* Arrow */}
              <g transform="translate(150, 45)">
                <line x1="0" y1="10" x2="60" y2="10" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="4 2" />
                <polygon points="60,6 68,10 60,14" fill="#2563EB" />
                <text x="34" y="0" fontSize="7" fontWeight="black" fill="#2563EB" textAnchor="middle">Doorstep Express</text>
              </g>

              <rect x="230" y="0" width="140" height="110" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
              <text x="240" y="20" fontWeight="bold" fill="#1E293B" fontSize="9">Delivered in India</text>
              <text x="240" y="45" fill="#475569">Product safely delivered</text>
              <text x="240" y="60" fill="#475569">to lab / factory door.</text>
              <rect x="240" y="75" width="120" height="24" rx="4" fill="#10B981" />
              <text x="300" y="89" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">GST TAX INVOICE ✓</text>
            </g>
          </g>
        </svg>
      )
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full max-w-[480px] mx-auto bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden p-4">
      <div className="mb-4">
        {steps[activeStep].svg}
      </div>
      <div className="px-2 pb-2 text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all uppercase tracking-wider ${
                idx === activeStep 
                  ? "bg-amber-600 text-white shadow" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
            >
              Step {idx + 1}
            </button>
          ))}
        </div>
        <h4 className="text-sm font-bold text-slate-900 mb-1">{steps[activeStep].title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed h-[40px] overflow-hidden">{steps[activeStep].desc}</p>
      </div>
    </div>
  );
}

export default function Procurement() {
  const { language } = useLanguage();
  const currentLang = (language as Language) in procurementI18n ? (language as Language) : 'en';
  const data = procurementI18n[currentLang];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title="Procurement & Import Compliance | Your Outsourced Global Procurement Team | Byalance"
        description="Byalance helps Indian startups, R&D labs, manufacturers & SMEs procure products globally (DigiKey, Mouser, OEMs) with complete import compliance, customs clearance, and GST tax invoices."
        keywords="procurement services, procurement outsourcing, procurement services for SMEs, global procurement India, import compliance India, procurement services for startups, procure from DigiKey India, Mouser import India, customs clearance electronics India, outsourced import operations, end-to-end procurement services, Byalance procurement"
        canonical="https://byalance.in/services/procurement-import-compliance"
        ogType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Procurement & Import Compliance", url: "/services/procurement-import-compliance" }
        ]}
      />
      
      <div className="min-h-screen bg-slate-50/50 pt-20">
        
        {/* HERO HEADER */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-slate-50/50 pt-8 pb-16 md:pt-10 md:pb-24 border-b border-slate-100">
          <ServiceBackgroundDoodle service="procurement" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 md:mb-5">
              <Link
                to="/#services"
                className="inline-flex items-center justify-center w-10 h-10 text-amber-600 hover:text-amber-700 bg-white border border-slate-100 hover:bg-slate-50 rounded-xl transition-all shadow-sm hover:shadow-md"
                aria-label={data.backToServices}
                title={data.backToServices}
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-200 mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" /> {data.flagshipBadge}
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-none mb-4">
                  {data.heroTitle} <br />
                  <span className="text-amber-600">{data.heroTitleHighlight}</span>
                </h1>
                <p className="text-xl font-bold text-slate-800 mb-6">
                  {data.heroSubtitle}
                </p>
                <p className="text-base text-slate-600 leading-relaxed mb-8">
                  {data.heroDesc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-stretch max-w-xl">
                  <a
                    href="https://wa.me/917406296116?text=Hi%20Byalance%2C%20I%20have%20a%20product%20link/BOM%20I%20would%20like%20to%20procure%20and%20import."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 py-4 rounded-xl shadow-lg shadow-green-100 hover:shadow-green-200 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> {data.shareWhatsapp}
                  </a>
                  <a
                    href="/#contact"
                    className="flex-1 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-sm px-6 py-4 rounded-xl transition-all flex items-center justify-center"
                  >
                    {data.requestQuote}
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ProcurementIllustration lang={currentLang} />
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONING BANNER */}
        <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Globe className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">{data.positioning.badge}</span>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4">
                    {data.positioning.title} <span className="text-amber-400 underline decoration-amber-500/50 underline-offset-4">{data.positioning.titleNot}</span>
                  </h2>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 font-medium">
                    {data.positioning.desc}
                  </p>
                  <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-slate-200">
                      {data.positioning.highlight}
                    </p>
                    <a
                      href="https://wa.me/917406296116?text=Hi%20Byalance%2C%20I%20want%20to%20send%20a%20product%20link%20for%20a%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black uppercase text-[11px] tracking-[0.15em] px-6 py-3 rounded-lg shadow transition-all shrink-0 whitespace-nowrap"
                    >
                      {data.positioning.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES INCLUDED GRID */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 mb-3">
                <Box className="w-3.5 h-3.5" /> {data.servicesScope.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                {data.servicesScope.title}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base mt-3">
                {data.servicesScope.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.servicesScope.items.map((srv, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50/70 border border-slate-100 rounded-2xl p-6 hover:border-amber-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{srv.title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed pl-11">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200 mb-3">
              {data.howItWorks.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
              {data.howItWorks.title}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg mb-16">
              {data.howItWorks.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {data.howItWorks.steps.map((s) => (
                <div key={s.step} className="bg-white rounded-2xl border border-slate-200 p-6 relative shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center font-black text-sm shadow">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMER BENEFITS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200 mb-4">
                  <Award className="w-3.5 h-3.5" /> {data.benefits.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
                  {data.benefits.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {data.benefits.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.benefits.items.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="text-slate-800 text-sm font-bold">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TARGET CUSTOMERS CARD */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-10 -translate-y-10 opacity-10 pointer-events-none">
                  <Globe className="w-64 h-64 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black mb-3">{data.targetCustomers.cardTitle}</h3>
                <p className="text-amber-100 text-sm leading-relaxed mb-8 font-medium">
                  {data.targetCustomers.cardDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.targetCustomers.items.map((tc, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15">
                      <p className="font-extrabold text-white text-sm">{tc.title}</p>
                      <p className="text-amber-100/90 text-xs mt-0.5">{tc.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs font-bold text-amber-100">{data.targetCustomers.cardTitle}</p>
                  <a
                    href="https://wa.me/917406296116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors shrink-0"
                  >
                    {data.targetCustomers.speakWithTeam}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCUREMENT PRICING & LANDED COST SECTION */}
        <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-amber-50/50 via-white to-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 mb-3">
                <CreditCard className="w-3.5 h-3.5 text-amber-600" /> {data.pricing.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight mb-4">
                {data.pricing.title}
              </h2>
              <p className="text-slate-600 text-base md:text-lg">
                {data.pricing.desc}
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-amber-800/40">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                <div className="md:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                    <Box className="w-3.5 h-3.5" /> {data.pricing.boxBadge}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {data.pricing.boxTitle}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {data.pricing.boxDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span>{data.pricing.check1}</span>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span>{data.pricing.check2}</span>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span>{data.pricing.check3}</span>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span>{data.pricing.check4}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 bg-slate-950/80 border border-amber-700/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">{data.pricing.breakdownTitle}</span>
                    <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                      <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span>{data.pricing.item1}</span>
                        <span className="font-bold text-white">{data.pricing.included}</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span>{data.pricing.item2}</span>
                        <span className="font-bold text-white">{data.pricing.included}</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span>{data.pricing.item3}</span>
                        <span className="font-bold text-white">{data.pricing.included}</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span>{data.pricing.item4}</span>
                        <span className="font-bold text-white">{data.pricing.included}</span>
                      </li>
                      <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span>{data.pricing.item5}</span>
                        <span className="font-bold text-emerald-400">{data.pricing.claimable}</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/917406296116?text=Hi%20Byalance%2C%20I%20want%20to%20get%20a%20landed%20procurement%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase text-xs tracking-wider px-6 py-4 rounded-xl shadow-lg transition-all text-center"
                  >
                    {data.pricing.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-3">
                <HelpCircle className="w-3.5 h-3.5" /> {data.faq.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                {data.faq.title}
              </h2>
              <p className="text-slate-500 text-sm mt-3">
                {data.faq.desc}
              </p>
            </div>

            <div className="space-y-4">
              {procurementFAQs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-amber-200 transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/10"
                    >
                      <span className="font-display font-bold text-slate-900 text-base md:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-amber-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.15),transparent_50%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 block">{data.ctaSection.badge}</span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight leading-none mb-6 text-white">
              {data.ctaSection.title}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed">
              {data.ctaSection.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/917406296116?text=Hi%20Byalance%2C%20I%20have%20a%20product%20link/BOM%20for%20global%20procurement."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold uppercase text-xs tracking-[0.2em] px-10 py-4 rounded-xl shadow-lg transition-all text-center"
              >
                {data.ctaSection.chatWhatsapp}
              </a>
              <a
                href="/#contact"
                className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/5 text-white font-bold uppercase text-xs tracking-[0.2em] px-10 py-4 rounded-xl transition-all text-center"
              >
                {data.ctaSection.sendEnquiry}
              </a>
            </div>
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-6">
              {data.ctaSection.footerTag}
            </p>
          </div>
        </section>

      </div>
      
      {/* Dynamic JSON-LD structured data for indexers and crawlers */}
      <FAQSchema faqs={procurementFAQs} title="Frequently Asked Questions — Byalance Global Procurement & Import" />
    </>
  );
}
