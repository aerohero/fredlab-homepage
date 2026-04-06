export interface LecturePreview {
  title: string;
  href: string;
}

export interface CourseInfo {
  title: string;
  subtitle: string;
  duration: string;
  thumbnail: string;
  productUrl: string;
  previews: LecturePreview[];
}

export interface BrunchArticle {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  href: string;
}

export const courseInfo: CourseInfo = {
  title: "사업계획서 작성이 처음인 분들을 위한 작성방법 가이드",
  subtitle: "예비창업가, 정부지원사업 준비자, 창업경진대회 대학생을 위한 실전 강의",
  duration: "3시간 29분",
  thumbnail: "/class101-thumbnail.png",
  productUrl: "https://class101.net/ko/products/6871a60ef93b1933bae5ccf6",
  previews: [
    {
      title: "강의 미리보기 1",
      href: "https://class101.net/ko/classes/6871a60ef93b1933bae5ccf0/lectures/6871babb157a0a182c24b0bc?productId=6871a60ef93b1933bae5ccf6",
    },
    {
      title: "강의 미리보기 2",
      href: "https://class101.net/ko/classes/6871a60ef93b1933bae5ccf0/lectures/687225bf2c2d655edee6143f",
    },
  ],
};

// Oldest first, per board request
export const brunchArticles: BrunchArticle[] = [
  {
    id: 1,
    title: "사업계획서/피칭덱 작성 마인드셋",
    subtitle: "설득과 흐름",
    date: "2024.04.15",
    href: "https://brunch.co.kr/@fredlab/1",
  },
  {
    id: 2,
    title: "프런트 커버(Front Cover)",
    subtitle: "팀명과 아이템 한줄 설명, 이미지",
    date: "2024.04.15",
    href: "https://brunch.co.kr/@fredlab/2",
  },
  {
    id: 3,
    title: "문제정의",
    subtitle: "도입부로서의 사용",
    date: "2024.04.15",
    href: "https://brunch.co.kr/@fredlab/3",
  },
  {
    id: 4,
    title: "아이템(Solution)",
    subtitle: "PSF (Problem Solution Fit)",
    date: "2024.04.19",
    href: "https://brunch.co.kr/@fredlab/4",
  },
  {
    id: 5,
    title: "시장분석 (1)",
    subtitle: "시장분석의 필요성",
    date: "2024.06.03",
    href: "https://brunch.co.kr/@fredlab/5",
  },
  {
    id: 6,
    title: "시장분석 (2)",
    subtitle: "시장정의 필요성 및 방법",
    date: "2024.06.04",
    href: "https://brunch.co.kr/@fredlab/6",
  },
  {
    id: 7,
    title: "시장분석 (3)",
    subtitle: "시장규모",
    date: "2024.06.05",
    href: "https://brunch.co.kr/@fredlab/7",
  },
  {
    id: 8,
    title: "시장분석 (4)",
    subtitle: "성장률",
    date: "2024.06.06",
    href: "https://brunch.co.kr/@fredlab/8",
  },
  {
    id: 9,
    title: "경쟁분석 (1)",
    subtitle: "경쟁의 의미",
    date: "2024.10.26",
    href: "https://brunch.co.kr/@fredlab/9",
  },
];
