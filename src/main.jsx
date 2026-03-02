import React from 'react'
import ReactDOM from 'react-dom/client'
import { Brain, Zap, Shield, Globe, ArrowRight, EyeOff } from 'lucide-react'

const SomaSoulSeoul = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* Forensic Header */}
      <nav className="border-b border-gray-100 py-6 px-8 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full">
            <span className="text-white font-black text-xs italic">SSS</span>
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase">Soma Soul Seoul</span>
        </div>
        <div className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-tighter">
          Phase 1 Active
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-b border-gray-100">
        <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter text-balance">
          THE SYSTEM IS <br />
          <span className="text-blue-700 italic underline">OBSOLETE.</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-tight mb-12 max-w-3xl">
          The era of 2031 will not reward **compliant students**. It will reward **somatic resilience** and **undisrupted cognition**.
        </p>
        <button className="bg-black text-white px-8 py-4 text-xl font-bold flex items-center group">
          JOIN THE 2031 MISSION <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </section>

      {/* The Core Strategy: Soma vs. Seoul */}
      <section className="bg-gray-50 py-24 px-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 uppercase italic underline decoration-blue-600">The "Seoul" Knowledge Gap</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-8 border-red-500 pl-6 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-2 uppercase">The Traditional Error</h3>
                <p className="text-gray-500 italic mb-4">"Read early. Compete now. Focus on the test."</p>
                <p className="font-bold text-lg">
                  Korean parents are sold the **lie of early literacy**. Forcing a 5-year-old to read creates a **neurological bottleneck** that prevents creative architecture from forming.
                </p>
              </div>

              <div className="border-l-8 border-blue-600 pl-6 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-2 uppercase">The Waldorf/SV Logic</h3>
                <p className="text-gray-500 italic mb-4">"Develop the body. Protect the eye. Delay the text."</p>
                <p className="font-bold text-lg">
                  The elite tech architects of Palo Alto delay reading until **Age 7**. They prioritize **executive function** over early decoding.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-2">
                <Brain className="text-blue-600" /> Forensic Audit
              </h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-black uppercase text-xs font-black">
                    <th className="pb-2">Metric</th>
                    <th className="pb-2">Seoul System</th>
                    <th className="pb-2">Soma Protocol</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="py-4">Reading Age</td>
                    <td className="py-4 text-red-500">Age 4-5</td>
                    <td className="py-4 text-blue-600">Age 7</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4">Brain State</td>
                    <td className="py-4">Cortisol/Stress</td>
                    <td className="py-4">Deep Play/Flow</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4">2031 Value</td>
                    <td className="py-4 line-through">Low (AI-Replaceable)</td>
                    <td className="py-4 text-blue-600">High (Leader)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 px-8 text-center">
        <EyeOff className="mx-auto text-gray-200 mb-6" size={48} />
        <p className="font-bold uppercase tracking-[0.2em] text-xs">somasoulseoul.com | No Masks. No Flattery.</p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SomaSoulSeoul />
  </React.StrictMode>,
)
