"use client";
import React from "react";
import { Mail, Phone, CheckCircle, TrendingUp, Globe, Zap } from "lucide-react";

export default function DomainSalePage() {
  React.useEffect(() => {
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
    // Add canonical link for SEO
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = "https://sas-egy.net";
      document.head.appendChild(canonical);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background with reduced impact */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10 max-w-4xl w-full">
        <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl shadow-xl border-2 border-yellow-500/50 p-6 md:p-10 transition-all duration-300 hover:shadow-2xl">
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
              Secure this premium domain now!
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-slate-700/30 rounded-2xl p-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center justify-center">
              <Globe className="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-400" />
              Perfect For:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                <span className="text-gray-300">Software Companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                <span className="text-gray-300">Tech Startups</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                <span className="text-gray-300">Tech Solutions</span>
              </div>
            </div>
          </div>

          {/* Why This Domain */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-400" />
              Why Choose This?
            </h2>
            <div className="space-y-3">
              <div className="bg-slate-700/20 rounded-lg p-3 md:p-4 border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="text-yellow-400 font-semibold">✓ Memorable:</span> Short and easy to recall
                </p>
              </div>
              <div className="bg-slate-700/20 rounded-lg p-3 md:p-4 border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="text-yellow-400 font-semibold">✓ Professional:</span> Ideal for B2B ventures
                </p>
              </div>
              <div className="bg-slate-700/20 rounded-lg p-3 md:p-4 border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="text-yellow-400 font-semibold">✓ Strategic:</span> Egypt-focused with .net appeal
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-5 md:p-6 text-center shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              📞 Contact to Purchase:
            </h2>
            <a
              href="https://wa.me/201556722667"
              className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 md:px-6 md:py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-base md:text-lg">WhatsApp Now</span>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs md:text-sm">
              Serious inquiries only • Quick transfer • Secure deal
            </p>
            <p className="text-gray-500 text-xs mt-1">Last updated: October 21, 2025</p>
          </div>
        </div>

        {/* SEO Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "sas-egy.net Domain",
            description: "Premium Egyptian domain for sale, ideal for tech businesses",
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