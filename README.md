# Typer - 타이핑 연습 프로그램

웹 기반 타이핑 연습 프로그램입니다.

## 기능

- 실시간 타이핑 속도 측정 (WPM, CPM)
- 정확도 계산
- 다양한 연습 텍스트
- 진행 상황 시각화
- 타이핑 히스토리 저장

## 개발 환경

- Claude Desktop
- Claude Code
- Cursor (필요시)

## 시작하기

```bash
# 리포지토리 클론
git clone https://github.com/seokjunjin/typer.git
cd typer

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

## 프로젝트 구조

```
typer/
├── src/
│   ├── components/     # React 컴포넌트
│   ├── hooks/          # 커스텀 훅
│   ├── utils/          # 유틸리티 함수
│   └── styles/         # 스타일 파일
├── public/             # 정적 파일
└── tests/              # 테스트 파일
```

## 기술 스택

- React
- TypeScript
- Vite
- Tailwind CSS

## 라이센스

MIT
