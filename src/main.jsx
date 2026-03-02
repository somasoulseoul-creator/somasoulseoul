import React from 'react';

const SomaSoulSeoul = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#efefef] font-sans selection:bg-white selection:text-black">
      
      {/* Precision Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-10 md:px-20">
        <div className="group cursor-pointer">
          {/* LOGO CRITICAL FIX: Ensure file is in /public/logo.png */}
          <img 
            src="/logo.png" 
            alt="SOMA SOUL SEOUL" 
            className="h-6 w-auto brightness-0 invert tracking-tighter"
            onError={(e) => { e.target.style.display='none'; }} 
          />
          <span className="text-[10px] tracking-[0.5em] font-bold uppercase opacity-50 group-hover:opacity-100 transition-opacity">
            SOMA SOUL SEOUL
          </span>
        </div>
        
        <div className="flex space-x-12 text-[9px] uppercase tracking-[0.4em] font-light">
          <a href="#" className="hover:line-through">Mission</a>
          <a href="#" className="hover:line-through">Protocol</a>
          <a href="#" className="hover:line-through">2031</a>
        </div>
      </nav>

      {/* Hero Section: The "Million Dollar" Look */}
      <main className="relative pt-48 pb-20 px-8 md:px-20">
        
        {/* Background Decorative Text - Subtle */}
        <div className="absolute top-40 right-10 opacity-5 select-none pointer-events-none">
          <span className="text-[15vw] font-bold leading-none uppercase">Seoul</span>
        </div>

        <section className="relative z-10 max-w-6xl">
          {/* The Status Statement */}
          <div className="mb-12 flex items-center space-x-4">
            <span className="h-[1px] w-12 bg-white opacity-30"></span>
            <span className="text-[10px] uppercase tracking-[0.6em] text-white opacity-60">
              System Update: 2026.03.01
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-8xl font-extralight tracking-tight leading-[0.9] mb-16">
            Architecting the <br />
            <span className="font-serif italic text-gray-400">Resilient Lineage</span>.
          </h1>

          {/* Korean Phrase as Art */}
          <div className="mb-20">
            <p className="text-2xl md:text-3xl font-light text-white opacity-90 tracking-widest">
              가장 고귀한 것을 지키는 힘, <br />
              <span className="opacity-40">새로운 시대를 선도하는 정신.</span>
            </p>
          </div>

          {/* Forensic Mission Statement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-t border-white/10 pt-16">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.4em] mb-8 text-gray-500 font-bold">
                01 / The Mission
              </h3>
              <p className="text-lg leading-relaxed font-light text-gray-300">
                The current global structure is fading. We don't just survive the transition; we **lead the outcome**. Soma Soul Seoul is the blueprint for the **middle-class family** to weaponize clarity and **protect the future** of their lineage heading into 2031.
              </p>
            </div>
            
            <div className="flex flex-col justify-end">
              <h3 className="text-[10px] uppercase tracking-[0.4em] mb-8 text-gray-500 font-bold">
                02 / The Protocol
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 uppercase tracking-widest">
                Transparency is our only mask. <br />
                Direct action is our only currency. <br />
                The family is our only priority.
              </p>
              
              <button className="mt-12 w-fit px-12 py-5 border border-white/20 text-[10px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-500">
                Initialize Entry
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Minimalist */}
      <footer className="px-8 md:px-20 py-10 opacity-20 text-[9px] tracking-[0.3em] uppercase">
        © 2026 Soma Soul Seoul / Private Protocol / 2031 Horizon
      </footer>

    </div>
  );
};

export default SomaSoulSeoul;
