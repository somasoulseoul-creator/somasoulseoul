import React from 'react'
import ReactDOM from 'react-dom/client'
import { Brain, Zap, Shield, Globe, ArrowRight, EyeOff } from 'lucide-react'

const SomaSoulSeoul = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 py-6 px-8 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full">
            <span className="text-white font-medium text-xs italic">SSS</span>
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase">Soma Soul Seoul / 소마 소울 서울</span>
        </div>
        <div className="bg-black text-white px-4 py-2 text-xs font-medium uppercase tracking-tighter">
          Phase 1 Active / 1단계 활성화
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 border-b border-gray-100">
        <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter text-balance">
          THE SYSTEM IS <br />
          <span className="text-blue-700 italic underline">OBSOLETE. / 시스템은 폐기되었습니다.</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-tight mb-12 max-w-3xl">
          The era of 2031 will not reward compliant students. It will reward somatic resilience and undisrupted cognition. 
          2031년의 시대는 순응하는 학생에게 보상하지 않습니다. 신체적 탄력성과 방해받지 않는 인지 능력이 핵심입니다.
        </p>
        <button className="bg-black text-white px-8 py-4 text-xl font-medium flex items-center group">
          JOIN THE 2031 MISSION / 2031 미션 참여 <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </section>

      {/* The Core Strategy */}
      <section className="bg-gray-50 py-24 px-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 uppercase italic underline decoration-blue-600">
            The Seoul Knowledge Gap / 서울 학부모가 모르는 진실
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-8 border-red-500 pl-6 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-medium mb-2 uppercase">The Traditional Error / 전통적 오류</h3>
                <p className="text-gray-500 italic mb-4">Read early. Compete now. Focus on the test. / 일찍 읽히고, 지금 경쟁하고, 시험에 집중하라.</p>
                <p className="text-lg">
                  Korean parents are sold the lie of early literacy. Forcing a 5-year-old to read creates a neurological bottleneck that prevents creative architecture from forming.
                  한국 부모들은 조기 교육이라는 거짓말에 속고 있습니다. 5세 아이에게 독서를 강요하는 것은 창의적 구조 형성을 방해하는 신경학적 병목 현상을 만듭니다.
                </p>
              </div>

              <div className="border-l-8 border-blue-600 pl-6 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-medium mb-2 uppercase">The Waldorf/SV Logic / 실리콘밸리의 전략</h3>
                <p className="text-gray-500 italic mb-4">Develop the body. Protect the eye. Delay the text. / 몸을 발달시키고, 시각을 보호하며, 문자를 늦춰라.</p>
                <p className="text-lg">
                  The elite tech architects of Palo Alto delay reading until Age 7. They prioritize executive function over early decoding.
                  팔로알토의 엘리트 공학자들은 7세까지 독서를 미룹니다. 그들은 조기 해독보다 실행 기능 발달을 우선시합니다.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-2">
                <Brain className="text-blue-600" /> Forensic Audit / 포렌식 진단
              </h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-black uppercase text-xs font-black">
                    <th className="pb-2">Metric / 지표</th>
                    <th className="pb-2">Seoul System</th>
                    <th className="pb-2">Soma Protocol</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="py-4">Reading Age / 독서 연령</td>
                    <td className="py-4 text-red-500">Age 4-5</td>
                    <td className="py-4 text-blue-600">Age 7</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4">Brain State / 뇌 상태</td>
                    <td className="py-4 text-red-400 font-medium">Stress / 스트레스</td>
                    <td className="py-4 text-blue-600 font-medium">Flow / 몰입</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4">2031 Value / 미래 가치</td>
                    <td className="py-4 line-through">Obsolescence / 도태</td>
                    <td className="py-4 text-blue-600 font-medium">Leadership / 리더십</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 px-8 text-center">
        <EyeOff className="mx-auto text-gray-200 mb-6" size={48} />
        <p className="font-medium uppercase tracking-[0.2em] text-xs">
          somasoulseoul.com | No Masks. No Flattery. / 가식 없이, 아부 없이.
        </p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SomaSoulSeoul />
  </React.StrictMode>,
)
