import React, { useEffect, useState } from "react";
import { translations } from "../../data/termsConditions";

export default function Term_Condition() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "kh" || hash === "en") {
        setLang(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const currentData = translations[lang];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#282828] py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased text-[#1E293B] dark:text-slate-200 transition-colors duration-200">
      <div className="max-w-4xl mx-auto bg-white dark:bg-[#353535] border border-[#E2E8F0] dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden p-6 sm:p-10 md:p-16 relative">
        
        {/* Decorative Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2D88C9] to-[#1E6091]" />

        {/* Header Section */}
        <header className="border-b border-[#F1F5F9] dark:border-slate-700 pb-8 mb-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#2D88C9] dark:text-cyan-400 uppercase block mb-1">
                {currentData.subtitle}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-slate-100">
                {currentData.title}
              </h1>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F1F5F9] dark:bg-slate-700 text-[#64748B] dark:text-white border border-[#E2E8F0] dark:border-slate-600 whitespace-nowrap self-start md:self-auto">
              {currentData.lastUpdated}
            </div>
          </div>
        </header>

        {/* Document Content */}
        <main className="space-y-8">
          {currentData.sections.map((section) => (
            <section 
              key={section.num} 
              className="group pl-0 sm:pl-4 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="hidden sm:inline-block text-xs font-mono font-semibold text-[#2D88C9] dark:text-cyan-300 bg-[#E0F2FE] dark:bg-slate-700 px-2 py-0.5 rounded">
                  {section.num}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-[#2D88C9] dark:text-cyan-400 tracking-tight group-hover:text-[#2D88C9] dark:group-hover:text-cyan-300 transition-colors duration-200">
                  {/* Fallback segment logic to display unified layout for desktop/mobile numbers */}
                  <span className="inline mr-2 ">{section.num}.</span>
                  {section.title}
                </h2>
              </div>
              
              <div className="text-sm sm:text-base text-[#475569] dark:text-white leading-relaxed pl-0 sm:pl-8 space-y-4">
                {section.body && <p>{section.body}</p>}
                
                {section.type === "list" && section.items && (
                  <ul className="space-y-2.5 mt-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2D88C9] dark:bg-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}