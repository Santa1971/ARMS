export interface RealWorldCase {
  title: string;       // 문서 제목
  unitTask: string;    // 단위과제
  retention: string;   // 보존기간
  disclosure: string;  // 공개여부
  summary: string;     // 내용요약
  relation: string;    // 관련기록
}

export interface CaseStudy {
  name: string;
  scenario: string;
  aiSolution: string;
  expertLogic: string;
  realWorldExample: RealWorldCase; // Changed from string to structured object
  tags: string[];
}

export interface SimulationCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  description_before: string;
  description_after: string;
  impact_before: string;
  impact_after: string;
  pose: 'guide' | 'success' | 'work' | 'insight';
  cases: CaseStudy[];
}

export interface NavItem {
  label: string;
  href: string;
}