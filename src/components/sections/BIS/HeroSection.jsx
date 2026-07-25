// import FloatingRobot from "./FloatingRobot";

const HeroSection = () => {
  return (
    <section className="relative flex items-center w-full h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100">
      {/* Background Blur */}
      <div className="absolute bg-blue-300 rounded-full -top-20 -left-20 w-96 h-96 blur-3xl opacity-20"></div>

      <div className="absolute bg-purple-300 rounded-full bottom-0 right-0 w-96 h-96 blur-3xl opacity-20"></div>

      <div className="relative z-10 grid items-center w-full grid-cols-1 gap-10 px-8 pt-20 mx-auto max-w-7xl lg:grid-cols-3">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center px-5 py-2 mb-6 text-sm font-bold text-blue-600 bg-white shadow-lg rounded-2xl">
            🚀 AI-Powered Learning
          </div>

          <h1 className="text-5xl font-black leading-tight lg:text-7xl text-slate-800">
            Smart School
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              For Future Kids
            </span>
          </h1>

          <p className="max-w-lg mt-6 text-lg leading-8 text-slate-600">
            Interactive AI learning platform for
            children with smart education,
            creativity, and fun experiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">
            <button className="px-8 py-4 font-bold text-white transition shadow-xl rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105">
              Start Learning
            </button>

            <button className="px-8 py-4 font-bold transition bg-white shadow-xl rounded-2xl text-slate-700 hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Cartoon Kids */}
          <div className="flex gap-5 mt-10 text-6xl">
            👦 👧 🧒
          </div>
        </div>

        {/* CENTER */}
        <div className="flex justify-center">
          {/* <FloatingRobot /> */}
        </div>

        {/* RIGHT CONTACT */}
        <div className="p-8 bg-white border shadow-2xl rounded-[40px] border-white/50 backdrop-blur-xl">
          <h2 className="mb-2 text-4xl font-black text-slate-800">
            Contact Us
          </h2>

          <p className="mb-8 text-gray-500">
            Let AI help your children learn smarter.
          </p>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 border outline-none rounded-2xl border-slate-200 focus:border-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 border outline-none rounded-2xl border-slate-200 focus:border-blue-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-5 py-4 border outline-none rounded-2xl border-slate-200 focus:border-blue-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-5 py-4 border outline-none resize-none rounded-2xl border-slate-200 focus:border-blue-400"
            />

            <button className="w-full py-4 font-bold text-white transition shadow-xl rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105">
              Send Message ✨
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;