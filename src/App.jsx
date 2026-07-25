import { useNavigate } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import {Globe, Sparkles} from "lucide-react";
import { cardMenu } from '@/data/card';
import AnimatedGradientText from './components/common/AnimatedGradientText';

export default function App() {
    usePageTitle('ថ្នាលសិក្សា ប៊ែលធី', 'BELTEI PORTAL');
    const navigate = useNavigate();

    return (
        <div 
            className="min-h-screen text-zinc-900 flex flex-col antialiased selection:bg-blue-500/10 selection:text-blue-600 relative overflow-hidden"
            style={{
                backgroundImage: "url('/assets/images/bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Soft Dark Overlay to enhance readability (ជួយទប់លំនឹងពន្លឺ និងអក្សរឱ្យកាន់តែច្បាស់) */}
            <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />

            {/* Modern Mesh Background Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/20  transition-all">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <div
                        className="flex items-center gap-3 group cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        <div className="bg-zinc-950 text-white p-2.5 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-200">
                            <Globe size={20} className="text-cyan-400" />
                        </div>

                        <div>
                            <h1 className="text-lg font-bold tracking-tight text-zinc-900">
                                BELTEI <span className="text-cyan-500">Website</span>
                            </h1>
                            <p className="text-md  text-white">
                                ប្រព័ន្ធគ្រប់គ្រងគេហទំព័រ
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-12 mx-auto w-full relative z-10">
                <div className="max-w-4xl text-center">

                    {/* Premium Glassmorphic Pill Tag */}
                    <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-cyan-200 text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-white/20 shadow-inner">
                        <Sparkles size={16} className="text-cyan-300 animate-pulse" />
                        ប្រព័ន្ធគ្រប់គ្រងគេហទំព័រឆ្លាតវៃ
                    </div>

                    <h1 className="text-4xl md:text-[52px] font-black tracking-tight leading-[1.4] py-2">
                        {/* Text motion */}
                        <AnimatedGradientText
                            colors="from-sky-300 via-blue-400 to-indigo-400" 
                            duration={5}
                            className="pb-1"
                        >
                            ប្រព័ន្ធគ្រប់គ្រងគេហទំព័រ
                        </AnimatedGradientText>

                        <AnimatedGradientText 
                            colors="from-cyan-300 via-emerald-300 to-sky-300" 
                            duration={7}
                            className="mt-4 text-5xl md:text-[56px] leading-[1.3]"
                        >
                            សាលា និងសាកលវិទ្យាល័យ ប៊ែលធីអន្តរជាតិ
                        </AnimatedGradientText>
                    </h1>

                    <div className="mt-8 space-y-2 max-w-2xl mx-auto">
                        <p className="text-base md:text-lg text-zinc-100 font-medium tracking-wide">
                            ចូលរួមចំណែកអភិវឌ្ឍធនធានមនុស្ស ស្របតាមទិសស្លោករបស់ ប៊ែលធី
                        </p>
                        <p className="text-base md:text-lg text-cyan-200 font-medium tracking-wider">
                            « គុណភាព ប្រសិទ្ធភាព ឧត្តមភាព សីលធម៌ គុណធម៌ »
                        </p>
                    </div>
                    
                </div>

                {/* Card Grid System */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-w-7xl w-full">
                    {cardMenu.map((item, index) => {
                        const rawBgColor = item.bg?.replace('[', '').replace(']', '');

                        return (
                            <a
                                key={index}
                                href={item.link}
                                className="group overflow-hidden rounded-xl border border-white/10 bg-white/95 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
                                style={{
                                    '--hover-border': rawBgColor
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = rawBgColor}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                            >
                                <div>
                                    {/* 1. Top Banner */}
                                    <div className="h-16 overflow-hidden bg-zinc-50 flex items-center justify-center border-b border-zinc-100">
                                        {item.images?.[0] && (
                                            <img
                                                src={item.images[0]}
                                                alt="Banner"
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>

                                    {/* 2. Card Body */}
                                    <div className="flex gap-4 p-5 text-left items-start">
                                        
                                        <div className="w-32 h-28 sm:w-36 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100 border border-zinc-200/50">
                                            <img
                                                src={item.Bgimages?.[0]}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="flex flex-col justify-between flex-1 min-w-0 h-28 sm:h-32">
                                            <div>
                                                <h3 
                                                    className="text-[14px] font-bold leading-snug text-zinc-900 line-clamp-2 transition-colors duration-300"
                                                    onMouseEnter={(e) => e.currentTarget.style.color = rawBgColor}
                                                    onMouseLeave={(e) => e.currentTarget.style.color = '#18181b'}
                                                >
                                                    {item.title}
                                                </h3>

                                                <p className="mt-1.5 text-[11px] sm:text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                                                    {item.subTitle}
                                                </p>
                                            </div>

                                            <div 
                                                className="flex items-center font-bold text-xs transition-colors duration-300"
                                                style={{ color: rawBgColor }}
                                            >
                                                View Page
                                                <svg
                                                    className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </main>

            {/* Footer  */}
            <footer className="bg-white/20 relative z-10">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
                    <div>
                        © 2026 ប្រព័ន្ធគ្រប់គ្រងគេហទំព័រ ប៊ែលធី
                    </div>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-zinc-900 transition-colors">គោលការណ៍ឯកជនភាព</a>
                        <a href="#terms" className="hover:text-zinc-900 transition-colors">លក្ខខណ្ឌប្រើប្រាស់</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}