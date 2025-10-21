"use client";
import React from "react";
import { Mail, Phone, CheckCircle, TrendingUp, Globe, Zap } from "lucide-react";

export default function DomainSalePage() {
  const [language, setLanguage] = React.useState(
    typeof window !== "undefined" && localStorage.getItem("language")
      ? localStorage.getItem("language")
      : (typeof window !== "undefined" && navigator.language.split('-')[0] === "ar" ? "ar" : "en")
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);

      if (language === "ar") {
        document.title = "sas-egy.net - دومين مميز للبيع | تقنية للبيع";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute(
            "content",
            "اشترِ sas-egy.net - دومين مصري مميز للبيع. مثالي للشركات التقنية، شركات البرمجيات، والمزيد. تواصل الآن!"
          );
        } else {
          const meta = document.createElement("meta");
          meta.name = "description";
          meta.content = "اشترِ sas-egy.net - دومين مصري مميز للبيع. مثالي للشركات التقنية، شركات البرمجيات، والمزيد. تواصل الآن!";
          document.head.appendChild(meta);
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute(
            "content",
            "دومين للبيع, شراء دومين مصري, ستارت أب, تقنية مصر, سعر دومين"
          );
        } else {
          const meta = document.createElement("meta");
          meta.name = "keywords";
          meta.content = "دومين للبيع, شراء دومين مصري, ستارت أب, تقنية مصر, سعر دومين";
          document.head.appendChild(meta);
        }
      } else {
        document.title = "sas-egy.net - Buy Premium Egyptian Domain | Tech for Sale";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute(
            "content",
            "Buy sas-egy.net - Premium Egyptian domain for sale. Ideal for tech startups, software companies, and more. Contact us now!"
          );
        } else {
          const meta = document.createElement("meta");
          meta.name = "description";
          meta.content = "Buy sas-egy.net - Premium Egyptian domain for sale. Ideal for tech startups, software companies, and more. Contact us now!";
          document.head.appendChild(meta);
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute(
            "content",
            "domain for sale, buy domain Egypt, tech startup, SaaS, Egypt domain"
          );
        } else {
          const meta = document.createElement("meta");
          meta.name = "keywords";
          meta.content = "domain for sale, buy domain Egypt, tech startup, SaaS, Egypt domain";
          document.head.appendChild(meta);
        }
      }

      // Add canonical link for SEO
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = "https://sas-egy.net";
        document.head.appendChild(canonical);
      }
    }
  }, [language]);

  const getContent = () => {
    if (language === "ar") {
      return {
        subHeader: "استعد لهذا الدومين المميز الآن!",
        benefitsTitle: "مثالي لـ:",
        benefits: ["شركات البرمجيات", "ستارت أب تقنية", "حلول تقنية"],
        whyTitle: "لماذا تختاره؟",
        whyItems: [
          { text: "سهل التذكر: قصير وسهل الاستدعاء" },
          { text: "احترافي: مثالي للمشاريع B2B" },
          { text: "استراتيجي: مركز على مصر مع .net" }
        ],
        ctaTitle: "📞 تواصل للشراء:",
        ctaText: "واتساب الآن",
        footer: "استفسارات جادة فقط • نقل سريع • صفقة آمنة\nآخر تحديث: 21 أكتوبر 2025",
        toggleText: "تغيير إلى الإنجليزية"
      };
    } else {
      return {
        subHeader: "Secure this premium domain now!",
        benefitsTitle: "Perfect For:",
        benefits: ["Software Companies", "Tech Startups", "Tech Solutions"],
        whyTitle: "Why Choose This?",
        whyItems: [
          { text: "Memorable: Short and easy to recall" },
          { text: "Professional: Ideal for B2B ventures" },
          { text: "Strategic: Egypt-focused with .net appeal" }
        ],
        ctaTitle: "📞 Contact to Purchase:",
        ctaText: "WhatsApp Now",
        footer: "Serious inquiries only • Quick transfer • Secure deal\nLast updated: October 21, 2025",
        toggleText: "Switch to Arabic"
      };
    }
  };

  const content = getContent();

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background with reduced impact */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10 max-w-4xl w-full">
        <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl shadow-xl border-2 border-yellow-500/50 p-6 md:p-10 transition-all duration-300 hover:shadow-2xl">
          {/* Language Toggle Button */}
          <div className="text-right mb-4">
            <button
              onClick={toggleLanguage}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-md"
            >
              {content.toggleText}
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-md">
              <Zap className="w-8 h-8 text-slate-900" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-yellow-400">sas-egy.net</span>
              <span className="text-white"> – For Sale</span>
              <span className="inline-block animate-bounce">🚀</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              {content.subHeader}
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-slate-700/30 rounded-2xl p-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center justify-center">
              <Globe className="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-400" />
              {content.benefitsTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                <span className="text-gray-300">{content.benefits[0]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                <span className="text-gray-300">{content.benefits[1]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                <span className="text-gray-300">{content.benefits[2]}</span>
              </div>
            </div>
          </div>

          {/* Why This Domain */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-400" />
              {content.whyTitle}
            </h2>
            <div className="space-y-3">
              <div className="bg-slate-700/20 rounded-lg p-3 md:p-4 border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="text-yellow-400 font-semibold">✓</span> {content.whyItems[0].text}
                </p>
              </div>
              <div className="bg-slate-700/20 rounded-lg p-3 md:p-4 border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="text-yellow-400 font-semibold">✓</span> {content.whyItems[1].text}
                </p>
              </div>
              <div className="bg-slate-700/20 rounded-lg p-3 md:p-4 border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="text-yellow-400 font-semibold">✓</span> {content.whyItems[2].text}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-5 md:p-6 text-center shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              {content.ctaTitle}
            </h2>
            <a
              href="https://wa.me/201556722667"
              className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 md:px-6 md:py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-base md:text-lg">{content.ctaText}</span>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs md:text-sm">
              {content.footer}
            </p>
          </div>
        </div>

        {/* SEO Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: language === "ar" ? "دومين sas-egy.net" : "sas-egy.net Domain",
            description: language === "ar"
              ? "دومين مصري مميز للبيع، مثالي للشركات التقنية"
              : "Premium Egyptian domain for sale, ideal for tech businesses",
            category: "Domain Names",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              price: "Contact for price",
              priceCurrency: "USD",
              priceValidUntil: "2026-10-21",
            },
          })}
        </script>
      </main>
    </div>
  );
}