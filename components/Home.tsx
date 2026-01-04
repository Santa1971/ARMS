import React from 'react';
import { Link } from 'react-router-dom';
import { SimulationSection } from './SimulationSection';
import { CharacterSprite } from './CharacterSprite';
import { Zap, Shield, Search, Menu, X, Rocket, CheckCircle2, History, FileImage, ShieldCheck, Database, Layers, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Helper function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  // Function to open OCR demo in a popup window
  const openOcrDemo = () => {
    const width = 1280;
    const height = 900;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    window.open(
      'https://image-ocr-plus.vercel.app/', 
      'ocrDemo', 
      `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes`
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans overflow-hidden">
        
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
            <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <div className="absolute inset-0 bg-blue-600 rounded-lg md:rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg md:rounded-xl flex items-center justify-center font-black text-white shadow-inner border border-white/20 text-sm md:text-base">
                  AR
                </div>
              </div>
              <span className="font-black text-xl md:text-2xl tracking-tighter text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">ARMS</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 text-sm font-bold text-slate-400">
              {['솔루션 소개', '업무 시나리오', '보존 매체 변환', '도입효과'].map((item, idx) => {
                  const ids = ['about', 'simulation', 'preservation', 'impact'];
                  return (
                    <button key={idx} onClick={() => scrollToSection(ids[idx])} className="relative hover:text-white transition-colors group py-2">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    </button>
                  );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-4 pl-6 border-l border-white/10">
              <div className="text-right">
                <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest animate-pulse">시스템 정상 가동 중</div>
                <div className="text-xs font-bold text-slate-300">v2.4.0 Active</div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/50 blur-lg rounded-full"></div>
                <CharacterSprite emotion="guide" size="sm" className="border-blue-500/30 relative z-10" />
              </div>
            </div>

            {/* Mobile Toggle */}
            <button 
                className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div className="md:hidden absolute top-16 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 text-center shadow-2xl z-40">
                <button className="text-slate-300 font-bold text-lg py-2" onClick={() => scrollToSection('about')}>솔루션 소개</button>
                <button className="text-slate-300 font-bold text-lg py-2" onClick={() => scrollToSection('simulation')}>업무 시나리오</button>
                <button className="text-slate-300 font-bold text-lg py-2" onClick={() => scrollToSection('preservation')}>보존 매체 변환</button>
                <button className="text-slate-300 font-bold text-lg py-2" onClick={() => scrollToSection('impact')}>도입효과</button>
              </div>
          )}
        </nav>

        {/* Hero Section */}
        <header className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-4 md:px-6 overflow-visible perspective-1000">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <div className="space-y-6 md:space-y-8 animate-fade-in-up transform-style-3d text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:border-blue-500/50 transition-colors cursor-default">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
                        </span>
                        <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">차세대 지능형 기록관리 솔루션</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight break-keep text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 drop-shadow-2xl">
                        기록관리의<br className="hidden md:block"/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">새로운 차원</span>을<br/>
                        경험하세요
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light break-keep">
                        종이 문서의 <b className="text-white">데이터 자산화(Datafication)</b>부터<br/>
                        AI 기반의 <b className="text-white">의사결정 지원(Decision Support)</b>까지.<br/>
                        ARMS는 단순한 시스템이 아닌, 당신의 든든한 파트너입니다.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <button 
                            onClick={() => scrollToSection('simulation')}
                            className="glass-shine relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 border border-blue-400/30 flex items-center justify-center gap-3 group"
                        >
                            <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            <span>업무 시나리오 체험</span>
                            <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
                        </button>
                        <button 
                            onClick={openOcrDemo}
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 group"
                        >
                            <History className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                            <span>OCR 데모 실행</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </button>
                    </div>
                </div>
                
                {/* 3D Floating Elements */}
                <div className="relative hidden lg:block h-[600px] w-full perspective-1000 group">
                    <div className="absolute inset-0 flex items-center justify-center transform-style-3d group-hover:rotate-y-12 transition-transform duration-700 ease-out">
                         
                         {/* Back Glow */}
                         <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[100px] rounded-full animate-pulse"></div>

                         {/* Main Card */}
                         <div className="relative w-[380px] h-[480px] bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center transform translate-z-0 transition-transform duration-500 hover:scale-105 overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                             <div className="absolute top-0 w-full h-full bg-grid-pattern opacity-30"></div>
                             
                             {/* Holographic Character */}
                             <div className="relative z-10 transform translate-z-20 scale-125 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <CharacterSprite emotion="work" size="lg" className="border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                             </div>

                             {/* Floating Stats - Left */}
                             <div className="absolute bottom-20 -left-12 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-float transform translate-z-30 flex items-center gap-3 w-48">
                                <div className="p-2 bg-emerald-500/20 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase">정확도 (Accuracy)</div>
                                    <div className="text-xl font-black text-white">99.9%</div>
                                </div>
                             </div>

                             {/* Floating Stats - Right */}
                             <div className="absolute top-20 -right-12 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-float-delayed transform translate-z-40 flex items-center gap-3 w-48">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <Search className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase">검색 속도</div>
                                    <div className="text-xl font-black text-white">0.02초</div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </header>

        {/* About Section - Bento Grid Style */}
        <section id="about" className="py-16 md:py-24 relative bg-[#020617]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
                        기록관리의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">패러다임 전환</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                        ARMS는 단순한 아카이빙을 넘어, 비전자기록물의 데이터를 살아있는 자산으로 변화시킵니다.<br className="hidden md:block"/>
                        AI 기술과 기록관리 전문가의 노하우가 결합된 강력한 엔진을 만나보세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {/* Card 1: Large Span */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:bg-slate-900/60 hover:shadow-[0_0_50px_rgba(37,99,235,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-6 md:p-10 h-full flex flex-col justify-between relative z-10">
                            <div>
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Search className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">심층 문맥 검색 (Deep Context Search)</h3>
                                <p className="text-slate-400 leading-relaxed max-w-lg">
                                    단순 텍스트 매칭이 아닙니다. 문서의 서식(Form)과 맥락(Context)을 이해하여 
                                    키워드 그 이상의 의미를 찾아내는 <span className="text-blue-400 font-semibold">의미론적 검색(Semantic Search)</span>을 제공합니다.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mt-8 text-sm font-bold text-blue-400/80 group-hover:text-blue-400 transition-colors">
                                <span>자세히 보기</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                        {/* Decorative background visual */}
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-600/30 transition-colors"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                         <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                         <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:rotate-6 transition-transform">
                                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">스마트 보안 (Smart Security)</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                개인정보보호법 기반의 자동 마스킹 및 권한 제어로 안심할 수 있는 열람 환경.
                            </p>
                         </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                         <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                         <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:rotate-6 transition-transform">
                                <Database className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">자동 아카이빙 (Auto Archiving)</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                분류, 편철, 이관, 폐기 등 기록물의 전 생애주기(Lifecycle) 자동화.
                            </p>
                         </div>
                    </div>

                    {/* Card 4: Large Span */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:bg-slate-900/60 hover:shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-6 md:p-10 h-full flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="flex-1">
                                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Layers className="w-7 h-7 text-indigo-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">워크플로우 자동화</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    단순 반복 업무를 획기적으로 줄여주는 지능형 워크플로우. <br/>
                                    기록연구사는 더 가치 있는 일에 집중할 수 있습니다.
                                </p>
                            </div>
                            
                            {/* Visual Graphic */}
                            <div className="w-full md:w-1/3 aspect-video bg-indigo-900/20 rounded-xl border border-indigo-500/20 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-500 rounded-full blur-[40px] animate-pulse"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Simulation Section Component */}
        <SimulationSection />

        {/* Microfilm Preservation Tool Section */}
        <section id="preservation" className="py-16 md:py-24 bg-[#020617] relative border-t border-white/5 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 md:space-y-8">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <ShieldCheck className="w-3 h-3" /> Archive Integrity
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-white leading-tight break-keep">
                    기록물의 진본성(Authenticity)과<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">무결성(Integrity) 보장</span>
                 </h2>
                 <p className="text-slate-400 text-lg leading-relaxed break-keep">
                    공공기록물법 시행령 규격에 맞춘 
                    <strong className="text-emerald-200"> 영구 보존 매체(마이크로필름) 수록용 전처리 기술</strong>입니다.
                    메타데이터 워터마킹과 블록체인급 해시 검증으로 법적 증거 능력을 확보하세요.
                 </p>
                 
                 <div className="space-y-4">
                    {[
                        { title: "메타데이터 자동 스탬핑", desc: "문서 고유번호, 생산일자, 면수(Page) 정보를 이미지 여백에 표준 규격으로 자동 기입" },
                        { title: "위변조 검증 (Anti-Tampering)", desc: "SHA-256 알고리즘 기반의 해시값 대조를 통해 원본 데이터의 무결성 즉시 판별" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-900/20 transition-colors group">
                            <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-bold text-white text-base mb-1">{item.title}</div>
                                <div className="text-sm text-slate-400">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                 </div>

                 <div className="pt-8 text-center md:text-left">
                    <Link to="/image-master" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-lg shadow-[0_10px_30px_rgba(5,150,105,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(5,150,105,0.5)] border border-emerald-400/30 glass-shine">
                       <FileImage className="w-5 h-5" />
                       이미지 마스터(Image Master) 실행
                    </Link>
                    <p className="mt-4 text-xs text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2">
                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                       WebAssembly 기술로 브라우저 내에서 안전하게 처리됩니다.
                    </p>
                 </div>
              </div>

              {/* 3D Dashboard Preview */}
              <div className="relative perspective-1000 group">
                 <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full opacity-50 animate-pulse"></div>
                 <div className="relative bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-700 ease-out">
                    
                    {/* Fake UI Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-white/10">
                              <CharacterSprite emotion="success" size="sm" className="scale-75" />
                          </div>
                          <div>
                             <div className="text-base font-bold text-white">변환 프로세스 모니터링</div>
                             <div className="text-xs text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 
                                처리 중 (Processing Active)
                             </div>
                          </div>
                       </div>
                    </div>
                    
                    {/* Fake Progress Bars */}
                    <div className="space-y-6">
                       <div>
                           <div className="flex justify-between text-xs text-slate-400 font-mono mb-2">
                              <span>Target: REC_2024_0042.jpg</span>
                              <span className="text-emerald-400">78%</span>
                           </div>
                           <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                              <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[78%] relative overflow-hidden">
                                  <div className="absolute inset-0 bg-white/20 animate-[shine_1s_infinite] skew-x-[-20deg]"></div>
                              </div>
                           </div>
                       </div>

                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 text-center hover:border-emerald-500/30 transition-colors">
                             <div className="text-3xl font-black text-white mb-1">1,420</div>
                             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">처리 완료</div>
                          </div>
                          <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 text-center hover:border-red-500/30 transition-colors">
                             <div className="text-3xl font-black text-emerald-500 mb-1">0</div>
                             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">오류</div>
                          </div>
                       </div>
                    </div>

                    {/* Reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact / Statistics Section */}
        <section id="impact" className="py-16 md:py-24 bg-[#020617] relative">
             <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                     <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight break-keep">
                        혁신의 결과, <span className="text-blue-500">숫자로 증명합니다</span>
                    </h2>
                    <p className="text-slate-500">A시청, B공사 등 실제 도입 기관의 성과 측정 리포트</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Rocket, val: "90", unit: "%", label: "시간 절약", desc: "수동 BRM 매핑 및 검수 시간 단축", color: "blue" },
                        { icon: CheckCircle2, val: "99.9", unit: "%", label: "정확도", desc: "비정형 문서 텍스트 인식 정확도", color: "emerald" },
                        { icon: Database, val: "∞", unit: "", label: "자산 가치", desc: "죽어있던 데이터의 완벽한 자산화", color: "purple" }
                    ].map((stat, idx) => (
                        <div key={idx} className="group relative bg-slate-900/30 p-8 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900/50">
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-b from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`}></div>
                            
                            <div className="relative z-10 text-center">
                                <div className={`w-20 h-20 mx-auto bg-${stat.color}-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-${stat.color}-500/20`}>
                                    <stat.icon className={`w-10 h-10 text-${stat.color}-500`} />
                                </div>
                                <div className="text-5xl font-black text-white mb-2 tracking-tight">
                                    {stat.val}<span className={`text-${stat.color}-500 text-3xl`}>{stat.unit}</span>
                                </div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{stat.label}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">{stat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Footer */}
        <footer className="py-16 border-t border-white/5 bg-[#020617] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10">
                <div className="flex justify-center items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">AR</div>
                    <span className="text-2xl font-black tracking-tighter text-white">ARMS SOLUTION</span>
                </div>
                <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
                    30년 기록관리 전문가의 통찰이 담긴 가장 안전하고 지능적인 시스템.<br/>
                    공공기관의 디지털 혁신 파트너가 되어드리겠습니다.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-[10px] text-slate-600 tracking-[0.2em] uppercase font-bold">
                    <span className="hover:text-blue-500 transition-colors cursor-pointer">개인정보처리방침</span>
                    <span className="hover:text-blue-500 transition-colors cursor-pointer">서비스 이용약관</span>
                    <span>© 2024 ARMS. All rights reserved.</span>
                </div>
            </div>
        </footer>

      </div>
  );
};