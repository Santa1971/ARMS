import { SimulationCategory } from './types';

export const SIMULATION_DATA: SimulationCategory[] = [
  {
    id: 'search',
    title: '지능형 심층 검색 (Deep Search)',
    icon: 'search',
    color: 'text-blue-500',
    description_before: "단순 메타데이터(제목, 생산자) 중심 검색으로 이미지/비전자 기록의 본문 내용 활용 불가.",
    description_after: "AI OCR 및 의미론적(Semantic) 분석을 통해 비정형 문서의 본문, 서식, 수기 메모까지 100% 데이터 자산화.",
    impact_before: "과거 토지대장 및 제적등본 열람 민원 처리에 건당 평균 4시간 소요 (수기 대조)",
    impact_after: "키워드 입력 즉시 원문 하이라이팅 및 연관 문서 제시로 처리 시간 0.5초 단축",
    pose: 'insight',
    cases: [
      {
        name: "고기록물(古記錄物) 딥러닝 OCR 복원",
        scenario: "1970~80년대 생산된 구(舊) 토지대장 및 수기 행정 문서 조회 시, 흘림체(Cursive)와 한자(Hanja) 혼용으로 인한 판독 불가 및 검색 누락 발생.",
        aiSolution: "자체 구축한 '공공행정 특화 파운데이션 모델'을 적용하여 '乙(을) 移轉(이전)'과 같은 고문서 패턴을 99.2% 정확도로 판독, 텍스트 DB(Digital Archive)로 변환.",
        expertLogic: "단순 문자 인식을 넘어, 공문서 고유의 서식(Form Structure)을 학습한 레이아웃 분석 엔진이 '표제부', '갑구/을구' 등 의미적 영역을 분리하여 메타데이터를 자동 추출함.",
        tags: ["Archival OCR", "Hanja Recognition"]
      },
      {
        name: "맥락 기반 시멘틱 검색 (Context-aware RAG)",
        scenario: "국회 요구자료 작성을 위해 1987년도 '평화연구원' 설립 당시의 허가증 및 최초 기안 문서를 찾아야 하나, 문서번호나 정확한 생산일자를 알 수 없는 상황.",
        aiSolution: "RAG(Retrieval-Augmented Generation) 기반 벡터 검색 기술이 '설립 허가', '비영리법인' 등 문맥적으로 연관된 문서를 군집화하여 도출. (1987.12. 생산 '사단법인 설립허가' 기안용지 원문 즉시 확보)",
        expertLogic: "행정안전부 공공용어 사전(Thesaurus) 및 유의어 관계망을 온톨로지(Ontology)로 구축하여, 과거 행정 용어와 현재 용어 간의 매핑을 통해 검색 재현율(Recall)을 극대화함.",
        tags: ["Semantic Search", "Knowledge Graph"]
      },
      {
        name: "도면 및 비정형 객체 인식 (Layout Analysis)",
        scenario: "노후 청사 리모델링을 위해 1990년대 수기 시설공사 설계도면(Blueprints) 내의 '승인 번호' 및 '구조 변경 사항'을 검색해야 함.",
        aiSolution: "비전 트랜스포머(ViT) 기반의 레이아웃 분석 기술이 수만 개의 선과 텍스트가 혼재된 도면에서 표제란(Title Block)의 'No. 92-A42' 텍스트를 정밀 타격하여 인덱싱.",
        expertLogic: "도면 내의 치수 숫자와 결재 승인 번호를 문맥적으로 구분(Segmentation)하여, 시설 관리자의 유지보수 업무 효율을 극대화하고 도면 관리의 정합성을 확보.",
        tags: ["Blueprint OCR", "Object Detection"]
      }
    ]
  },
  {
    id: 'brm',
    title: 'BRM 자동 분류 (Auto Classification)',
    icon: 'folder-tree',
    color: 'text-indigo-500',
    description_before: "담당자의 주관적 판단에 따른 분류로 오분류율 약 30% 발생, 인계인수 시 기록물 이력 단절.",
    description_after: "문서 생성/스캔 즉시 기록관리기준표(BRM)와 매핑하여 분류 및 편철 자동화.",
    impact_before: "연말 기록물 정리 및 이관 기간 야근 평균 40시간 발생",
    impact_after: "실시간 자동 분류 및 검증 프로세스로 정리 업무 시간 95% 단축",
    pose: 'work',
    cases: [
      {
        name: "기록관리기준표 단위과제 자동 매핑",
        scenario: "대량의 비전자 문서를 스캔하여 시스템 등록 시, 각 문서의 내용에 부합하는 '단위과제' 및 '보존기간'을 수동으로 입력해야 하는 부담 발생.",
        aiSolution: "문서 본문의 '관제', 'SOC', '침해대응' 등 도메인 키워드와 문맥을 분석하여 [정보화 > 정보보안 > 시스템 보안 운영] 단위과제 코드를 매칭 확률(Confidence Score)과 함께 자동 추천.",
        expertLogic: "국가기록원 표준 단위과제 분류 체계와 기관 고유의 기능 분류(Function Classification)를 실시간 대조하여, 분류의 정확도와 일관성을 보장하는 지능형 분류기(Classifier) 적용.",
        tags: ["Taxonomy Mapping", "Auto Classification"]
      },
      {
        name: "미정리 기록물 자동 군집화 (Clustering)",
        scenario: "조직개편 및 인사이동으로 인해 전임자가 남긴 파일명 없는 스캔 문서 500여 건이 무질서하게 혼재되어 업무 파악 곤란.",
        aiSolution: "비지도 학습(Unsupervised Learning) 기반의 군집 분석을 수행하여 결재문서, 붙임자료, 영수증을 유형별로 분류하고, 생산일자순으로 정렬하여 가상의 '기록물철'을 자동 생성.",
        expertLogic: "기록물의 논리적 연관성(Correlation)을 분석하여 개별 '건(Item)' 단위가 아닌 맥락이 연결된 '철(Folder)' 단위의 관리가 가능하도록 구조화하여 기록의 증거적 가치를 보존.",
        tags: ["Doc Clustering", "Auto-Filing"]
      },
      {
        name: "이관 데이터 무결성(Integrity) 검증",
        scenario: "기록물관리시스템(RMS)으로 이관 시, 원본 파일과 수정본, 참조본이 섞여 데이터 중복 및 버전 혼선 발생.",
        aiSolution: "파일의 해시(Hash)값 비교 및 텍스트 유사도(Cosine Similarity) 검사를 통해 중복 문서를 99.9% 식별하고, 최종 결재 정보가 포함된 '원본 추정' 문서를 우선 선별.",
        expertLogic: "행정 효율성을 저해하는 중복 데이터를 제거(De-duplication)하고, 진본성(Authenticity)이 보장된 기록물만 선별 이관하여 스토리지 효율성 및 데이터 신뢰도 확보.",
        tags: ["Data Integrity", "De-duplication"]
      }
    ]
  },
  {
    id: 'compliance',
    title: '법령 기반 컴플라이언스 (Compliance)',
    icon: 'scale',
    color: 'text-emerald-500',
    description_before: "법령 개정 시 기준표 미반영으로 인한 감사 지적 및 무단 폐기 리스크 상존.",
    description_after: "법제처 API 연동으로 법령 변경 사항을 실시간 반영하고, 보존기간 책정 오류를 자동 탐지.",
    impact_before: "보존기간 책정 오류로 인한 중요 기록물 분실/폐기 위험",
    impact_after: "법적 리스크 Zero 달성 및 변경 이력(Audit Trail) 자동 관리",
    pose: 'guide',
    cases: [
      {
        name: "법령 개정 실시간 감지 및 적용",
        scenario: "「민원 처리에 관한 법률」 개정으로 특정 민원 서류의 보존기간이 변경되었으나, 내부 시스템 미반영으로 인한 규정 위반 우려.",
        aiSolution: "국가법령정보센터 크롤링 봇(Bot)이 개정 사항을 실시간 감지하고, 해당 단위과제의 보존기간을 '5년'에서 '10년'으로 상향 조정하는 변경 제안 알림(Alert)을 즉시 발송.",
        expertLogic: "단순 알림을 넘어, 기 생산된 기록물 중 소급 적용(Retroactive Application)이 필요한 대상 목록을 자동 추출하여 기록물관리전문요원의 신속한 의사결정을 지원.",
        tags: ["Regulatory Tech", "Audit Support"]
      },
      {
        name: "보존기간 책정 오류(Anomaly) 탐지",
        scenario: "담당자 실수로 역사적 가치가 높은 '주요 정책 결정 문서'를 '3년' 보존으로 과소 책정하여 조기 폐기될 위험 발생.",
        aiSolution: "ARMS의 30년치 기록 학습 데이터와 비교하여, '계획', '지침', '훈령' 등 영구 보존 속성을 가진 문서가 단기 보존으로 설정된 이상 징후(Anomaly)를 사전에 탐지 및 차단.",
        expertLogic: "기록물의 중요도 평가 알고리즘(Valuation Algorithm)이 휴먼 에러를 방어하는 'AI 감사관' 역할을 수행하여 기록관리의 법적 준거성을 확보.",
        tags: ["Risk Management", "Anomaly Detection"]
      }
    ]
  },
  {
    id: 'privacy',
    title: '보존/공개 가치 재평가 (Re-appraisal)',
    icon: 'shield-check',
    color: 'text-orange-500',
    description_before: "공개 전환 시 수작업 마스킹으로 인한 정보 유출 우려 및 평가심의 자료 작성 부담.",
    description_after: "AI가 개인정보/민감정보를 정밀 식별하여 비가역적 마스킹 처리 및 평가 근거 자동 생성.",
    impact_before: "정보공개 청구 1건 처리에 평균 3일 소요 (수동 검토 및 마스킹)",
    impact_after: "청구 즉시 비공개 사유 판별 및 마스킹 자동화 (10분 내 처리)",
    pose: 'success',
    cases: [
      {
        name: "민감정보 비식별화(De-identification)",
        scenario: "과거 징계 의결서 및 인사기록카드 등 민감한 개인정보가 포함된 문서의 대국민 공개 전환 요청 급증.",
        aiSolution: "고성능 NER(개체명 인식) 모델이 성명, 주민번호뿐만 아니라 문맥상 유추 가능한 주소, 가족관계 등을 식별하여 이미지 레이어 자체를 삭제하는 비가역적(Irreversible) 마스킹 수행.",
        expertLogic: "정보공개법 제9조 제1항 각 호의 비공개 세부 기준을 적용하여 과도한 마스킹을 방지하고, 국민의 알 권리와 개인 프라이버시 간의 균형을 유지하는 '부분 공개' 자동화.",
        tags: ["Auto Masking", "Privacy Protection"]
      },
      {
        name: "기록 가치 재평가(Appraisal) 자동화",
        scenario: "보존기간 만료 문서 10,000건의 폐기/연장 심의(기록물평가심의회)를 위해 각 문서의 가치를 판단하고 심의서를 작성해야 하는 업무 과중.",
        aiSolution: "문서의 행정 참조 빈도, 역사적 키워드 포함 여부, 최근 법적 분쟁 관련성을 종합 분석하여 '폐기(80%)', '보류(15%)', '영구 보존(5%)'의 평가 의견을 자동 생성.",
        expertLogic: "정량적 데이터 분석에 기반한 '기록물 가치 평가 보고서'를 자동 생성하여 평가심의회의 객관적 근거 자료로 활용하고, 중요 기록물의 멸실을 방지.",
        tags: ["Valuation", "Decision Support"]
      }
    ]
  }
];