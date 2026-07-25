import React, { useState } from "react";
import usePageTitle from '@/hooks/usePageTitle';
import {
    Play,
    User,
    Mail,
    Phone,
    MessageSquare,
} from 'lucide-react';

export default function Home() {
    usePageTitle('សាលាប៊ែលធី អន្តរជាតិ', 'BELTEI International School');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };
    return (
        <div className="w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-1 items-center my-4 overflow-hidden z-20">
            {/* Left Side Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pr-6">
                <div className="self-start inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 font-bold px-4 py-1 rounded-full text-xs shadow-sm border border-indigo-100/50">
                    <span>🎓</span> Welcome to BELTEI International School!
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                    Growing Bright Minds <br />
                    
                    with <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">AI-Powered</span> Learning
                </h2>
                <p className="text-slate-600 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
                    We combine quality education with AI technology to help children learn smarter, grow happier, and achieve their dreams.
                </p>
                <div className="flex items-center gap-4 pt-1">
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-100 transition-all flex items-center gap-2 text-xs sm:text-sm group">
                        Watch Video
                        <div className="bg-blue-100 p-1 rounded-full text-blue-600">
                            <Play className="w-3 h-3 fill-blue-600" />
                        </div>
                    </button>

                </div>
                <div className="pt-2 flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-2xl shadow flex items-center justify-center text-white text-xl animate-bounce">
                        🤖
                    </div>
                    <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 relative">
                        <p className="text-[9px] font-bold text-slate-400 leading-none">Hello! I'm</p>
                        <p className="text-xs font-black text-indigo-600 flex items-center gap-1 my-0.5">Brighty AI 👋</p>
                        <p className="text-[10px] text-gray-500 font-medium leading-none">How can I help you today?</p>
                    </div>
                </div>
            </div>

            {/* Right Side: Contact Form Card */}
            <div className="lg:col-span-5 bg-white rounded-[2rem] shadow-xl p-4 border border-slate-100 flex flex-col justify-center relative">
                <div className="absolute -top-3 -right-3 bg-indigo-50 text-indigo-600 p-2.5 rounded-xl shadow-sm  sm:block transform rotate-12 text-lg">✈️</div>
                <div className="absolute -bottom-3 -left-3 bg-pink-50 text-pink-500 p-2.5 rounded-full shadow-sm  sm:block transform -rotate-12 text-sm">❤️</div>
                <div className="mb-4">
                    <h3 className="text-xl font-black text-slate-900">Contact to Us</h3>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                        We'd love to hear from you! Send us a message.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-slate-50/60 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-slate-50/60 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-slate-50/60 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div className="relative">
                        <MessageSquare className="absolute left-4 top-3 w-4 h-4 text-slate-400" />
                        <textarea
                            rows="3"
                            placeholder="Your Message"
                            className="w-full bg-slate-50/60 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        ></textarea>
                    </div>

                    {/* Send Message Button */}
                    <button className="w-full py-4 font-bold text-white transition shadow-xl rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105">
                        Send Message ✨
                    </button>
                </form>
            </div>
        </div>
    );
}