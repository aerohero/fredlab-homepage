export const services = [
  {
    id: "program",
    title: "창업교육 프로그램 운영",
    shortDesc: "예비·초기·로컬 창업가 대상 아이템 발굴 → BM 고도화 → 사업계획 수립",
    href: "/service#program",
    curriculum: [
      { step: "1단계", content: "창업가 탐구 및 아이디어 탐색 (지역자원조사)" },
      { step: "2단계", content: "아이디어 디벨롭" },
      { step: "3단계", content: "사업계획 구체화 및 피칭덱 작성/발표" },
      { step: "4단계", content: "선배 창업가 멘토링" },
    ],
  },
  {
    id: "mentoring",
    title: "커뮤니케이션형 멘토링",
    shortDesc: "평가하지 않고, 질문으로 창업가 스스로 답을 찾도록 돕는 소통형 멘토링",
    href: "/service#mentoring",
  },
  {
    id: "patent",
    title: "특허전략 컨설팅",
    shortDesc: "경영 관점에서 특허를 고민하는 선행기술조사, 특허맵, IP-R&D",
    href: "/service#patent",
    items: ["선행기술조사", "특허맵 (특허동향조사)", "IP-R&D", "SMK"],
  },
  {
    id: "lecture",
    title: "강의/특강",
    shortDesc: "사업계획서부터 지식재산·세무·노무까지, 워크숍형 강의",
    href: "/service#lecture",
  },
];

export const stats = [
  { value: "700+", unit: "회", label: "코칭/멘토링 진행 횟수" },
  { value: "300+", unit: "팀", label: "코칭/멘토링 창업팀 수" },
  { value: "15+", unit: "년", label: "특허·창업 분야 경력" },
  { value: "4", unit: "분야", label: "창업교육(강의) · 코칭 · 특허 · 자금조달" },
];

export const tags = ["#창업교육", "#멘토링", "#사업계획서", "#피칭덱", "#특허전략"];
