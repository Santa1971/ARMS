import React, { useState } from 'react';
import { SIMULATION_DATA } from '../constants';
import { CharacterSprite } from './CharacterSprite';
import { Search, FolderTree, Scale, ShieldCheck, Brain, Lightbulb, Building2, FileText, Calendar, Eye, Link2, FileType, ChevronRight, Activity } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  search: <Search className="w-5 h-5" />,
  'folder-tree': <FolderTree className="w-5 h-5" />,
  scale: <Scale className="w-5 h-5" />,
  'shield-check': <ShieldCheck className="w-5 h-5" />,
};

export const SimulationSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);

  const activeCategory = SIMULATION_DATA[activeCategoryIdx];
  const activeCase = activeCategory.cases[activeCaseIdx];

  const handleCategoryChange = (idx: number) => {
    setActiveCategoryIdx(idx);
    setActiveCaseIdx(0); // Reset case index when category changes
  };

  return (
    <section id="simulation" className="py-16 md:py-24 bg-[#0B1120] relative overflow-hidden border-y border-white/5">
      {/* Dynamic Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B1120] to-[#0B1120] pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <Activity className="w-3 h-3 text-blue-400 animate-pulse" />
            <span className="text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">실시간 시뮬레이션</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight break-keep">
            실무 최적화 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">지능형 프로세스</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light break-keep">
            실제 공공기관의 업무 환경을 그대로 구현했습니다.<br className="hidden md:block"/>
            클릭하여 상황별 AI 솔루션이 어떻게 작동하는지 확인해보세요.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 bg-[#0F172A]/60 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden min-h-[600px] lg:min-h-[800px] ring-1 ring-white/5">
          
          {/* Sidebar / Control Panel */}
          {/* Added horizontal scroll for mobile (overflow-x-auto, snap-x) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 p-3 lg:p-4 border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0F172A]/80 overflow-x-auto custom-scrollbar snap-x">
            <div className="hidden lg:block p-4 mb-2">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">시나리오 선택</div>
            </div>
            {SIMULATION_DATA.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(idx)}
                className={`group relative flex-shrink-0 flex items-center gap-3 lg:gap-4 p-4 rounded-xl lg:rounded-2xl text-left transition-all duration-300 outline-none min-w-[220px] lg:min-w-0 snap-start
                  ${activeCategoryIdx === idx 
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] ring-1 ring-blue-400/50' 
                    : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'
                  }`}
              >
                <div className={`${activeCategoryIdx === idx ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'} transition-colors`}>
                  {iconMap[cat.icon]}
                </div>
                <div className="whitespace-nowrap lg:whitespace-normal flex-1">
                  <div className="font-bold text-xs md:text-sm leading-tight">
                    {cat.title.split('(')[0]}
                  </div>
                </div>
                {activeCategoryIdx === idx && (
                  <ChevronRight className="w-4 h-4 hidden lg:block animate-pulse" />
                )}
              </button>
            ))}
            
            {/* Sidebar Footer Decoration */}
            <div className="hidden lg:block mt-auto p-6 opacity-30">
                <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`h-1 rounded-full ${i%2===0 ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
                    ))}
                </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9 flex flex-col relative h-full bg-gradient-to-br from-transparent to-white/5 min-h-[500px]">
            
            {/* Case Tabs (Horizontal) */}
            <div className="flex items-center overflow-x-auto px-4 md:px-8 pt-4 md:pt-6 pb-2 gap-2 border-b border-white/5 custom-scrollbar snap-x">
              {activeCategory.cases.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCaseIdx(i)}
                  className={`relative px-5 py-2.5 rounded-full text-[11px] md:text-xs font-bold tracking-wide uppercase transition-all whitespace-nowrap snap-start
                    ${activeCaseIdx === i 
                        ? 'bg-white/10 text-white border border-white/20 shadow-lg' 
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/5 border border-transparent'}
                  `}
                >
                  사례 0{i + 1}
                  {activeCaseIdx === i && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>}
                </button>
              ))}
            </div>

            {/* Main Content Scrollable Area */}
            <div className="flex-1 p-4 md:p-10 overflow-y-auto custom-scrollbar">
              <div className="animate-fadeIn max-w-5xl mx-auto space-y-8 md:space-y-10">
                
                {/* Header Section */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-slate-800 rounded-md text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-700 shadow-inner">
                      문제 상황 (Context)
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {activeCase.tags.map(tag => (
                            <span key={tag} className="text-[10px] text-blue-300/80 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">#{tag}</span>
                        ))}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-white leading-tight break-keep mb-4 md:mb-6">
                    {activeCase.name}
                  </h3>
                  
                  {/* Scenario Bubble */}
                  <div className="relative p-5 md:p-6 bg-slate-800/60 rounded-r-3xl rounded-bl-3xl border border-white/5 shadow-inner backdrop-blur-sm max-w-3xl">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-l-3xl"></div>
                    <p className="text-slate-200 font-medium leading-relaxed text-sm md:text-lg pl-3 md:pl-4">
                      "{activeCase.scenario}"
                    </p>
                  </div>
                </div>

                {/* Actual Case Card (Glassmorphism) */}
                <div className="bg-slate-900/40 rounded-3xl p-5 md:p-6 border border-white/5 shadow-xl backdrop-blur-md relative overflow-hidden group">
                     {/* Decorative Gradients */}
                     <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-[50px] group-hover:bg-indigo-500/20 transition-colors"></div>

                     <div className="flex items-center gap-2 mb-6 relative z-10">
                        <div className="p-2 bg-indigo-500/20 rounded-lg">
                            <Building2 className="w-4 h-4 text-indigo-400" />
                        </div>
                        <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">실제 기록 데이터</span>
                        <div className="h-px bg-indigo-500/20 flex-1 ml-4"></div>
                     </div>
                     
                     {/* Record Details Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
                        <div className="md:col-span-7 bg-slate-950/50 rounded-2xl p-4 md:p-5 border border-white/5">
                            <div className="flex items-start gap-4 mb-5 border-b border-white/5 pb-4">
                                <FileText className="w-8 h-8 text-slate-500 mt-1 flex-shrink-0" />
                                <div>
                                    <div className="text-[10px] text-slate-500 mb-1 uppercase tracking-wider">문서 제목</div>
                                    <div className="text-base md:text-lg font-bold text-white leading-snug break-keep">{activeCase.realWorldExample.title}</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-[10px] text-slate-500 mb-1">내용 요약</div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{activeCase.realWorldExample.summary}</p>
                                </div>
                                <div className="flex items-start md:items-center gap-2 text-xs text-slate-500 pt-2">
                                    <Link2 className="w-3 h-3 mt-0.5 md:mt-0 flex-shrink-0" />
                                    <span>관련 기록: <span className="text-slate-400 italic block md:inline">{activeCase.realWorldExample.relation}</span></span>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5 space-y-3">
                             <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                                <div className="p-2 bg-slate-800 rounded-lg"><FileType className="w-4 h-4 text-indigo-400"/></div>
                                <div>
                                    <div className="text-[10px] text-slate-500">단위 과제</div>
                                    <div className="text-sm font-bold text-slate-200">{activeCase.realWorldExample.unitTask}</div>
                                </div>
                             </div>
                             <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                                <div className="p-2 bg-slate-800 rounded-lg"><Calendar className="w-4 h-4 text-indigo-400"/></div>
                                <div>
                                    <div className="text-[10px] text-slate-500">보존 기간</div>
                                    <div className="text-sm font-bold text-slate-200">{activeCase.realWorldExample.retention}</div>
                                </div>
                             </div>
                             <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                                <div className="p-2 bg-slate-800 rounded-lg"><Eye className="w-4 h-4 text-indigo-400"/></div>
                                <div>
                                    <div className="text-[10px] text-slate-500">공개 여부</div>
                                    <div className={`text-sm font-bold ${activeCase.realWorldExample.disclosure.includes('비공개') ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {activeCase.realWorldExample.disclosure}
                                    </div>
                                </div>
                             </div>
                        </div>
                     </div>
                </div>

                {/* Solution Logic Cards (3D Lift) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* AI Solution */}
                  <div className="bg-gradient-to-br from-blue-900/10 to-slate-900/80 p-6 md:p-8 rounded-[2rem] border border-blue-500/20 relative group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.3)] transition-all duration-500">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Brain className="w-24 h-24 text-blue-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="p-2.5 bg-blue-500/20 rounded-xl border border-blue-500/30">
                        <Brain className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="font-black text-xs uppercase text-blue-400 tracking-wider">AI 분석 처리</span>
                    </div>
                    <p className="text-white text-sm md:text-base font-bold leading-relaxed relative z-10">
                      {activeCase.aiSolution}
                    </p>
                  </div>

                  {/* Expert Logic */}
                  <div className="bg-gradient-to-br from-emerald-900/10 to-slate-900/80 p-6 md:p-8 rounded-[2rem] border border-emerald-500/20 relative group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.3)] transition-all duration-500">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Lightbulb className="w-24 h-24 text-emerald-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="p-2.5 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                        <Lightbulb className="w-6 h-6 text-emerald-400" />
                      </div>
                      <span className="font-black text-xs uppercase text-emerald-400 tracking-wider">전문가 논리 적용</span>
                    </div>
                    <p className="text-slate-300 text-sm md:text-sm font-medium leading-relaxed relative z-10">
                      {activeCase.expertLogic}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Impact Footer Panel */}
            <div className="p-6 md:p-8 bg-[#0B1120] border-t border-white/5 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
                <div className="relative z-10 flex-shrink-0">
                    <div className="relative">
                        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                        <CharacterSprite emotion={activeCategory.pose} size="md" className="w-24 h-24 md:w-32 md:h-32 shadow-2xl border-white/20 relative z-10" />
                    </div>
                </div>
                
                <div className="relative z-10 flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-5 rounded-2xl border-l-4 border-slate-600 backdrop-blur-sm">
                        <div className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">도입 전 (Before)</div>
                        <p className="text-sm text-slate-400 leading-snug">{activeCategory.impact_before}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/40 to-slate-800/50 p-5 rounded-2xl border-l-4 border-blue-500 backdrop-blur-sm shadow-lg">
                         <div className="text-[10px] text-blue-400 font-black uppercase mb-2 tracking-widest flex items-center gap-2">
                            도입 후 (After) <span className="px-1.5 py-0.5 bg-blue-500 text-white rounded text-[9px]">해결됨</span>
                         </div>
                         <p className="text-sm text-blue-100 font-bold leading-snug">{activeCategory.impact_after}</p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};