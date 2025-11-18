# GitHub 리포지토리 설정 가이드

## 1. GitHub에 리포지토리 생성

1. GitHub (https://github.com)에 로그인
2. 우측 상단 '+' 버튼 클릭 → "New repository" 선택
3. Repository name: `typer`
4. Owner: `seokjunjin`
5. Description: "타이핑 연습 프로그램"
6. Public/Private 선택
7. "Create repository" 클릭

## 2. 로컬 리포지토리 초기화 및 GitHub 연결

터미널에서 다음 명령어를 실행하세요:

```bash
# typer 디렉토리로 이동
cd /Users/devsiters/typer

# Git 초기화
git init

# 원격 리포지토리 추가
git remote add origin https://github.com/seokjunjin/typer.git

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 타이핑 연습 프로그램 프로젝트 초기 설정"

# main 브랜치로 이름 변경 (필요시)
git branch -M main

# GitHub에 푸시
git push -u origin main
```

## 3. 의존성 설치

```bash
# npm 패키지 설치
npm install
```

## 4. 개발 서버 시작

```bash
# 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:5173 으로 접속하여 확인하세요.

## 5. 개발 환경 설정

### Claude Desktop
- 이미 Claude Desktop을 통해 프로젝트를 생성했습니다.

### Claude Code
Claude Code를 사용하여 터미널에서 직접 작업할 수 있습니다:

```bash
# Claude Code 설치 (아직 설치하지 않았다면)
# https://docs.claude.com/en/docs/claude-code

# 프로젝트 디렉토리에서 Claude Code 실행
cd /Users/devsiters/typer
claude code
```

### Cursor (선택사항)
Cursor IDE를 사용하려면:

1. Cursor 실행
2. File → Open Folder
3. `/Users/devsiters/typer` 폴더 선택

## 6. 주요 Git 명령어

```bash
# 변경사항 확인
git status

# 변경사항 스테이징
git add .

# 커밋
git commit -m "커밋 메시지"

# 푸시
git push

# 풀
git pull

# 브랜치 생성 및 이동
git checkout -b feature/new-feature

# 브랜치 목록 확인
git branch

# 브랜치 병합
git merge feature/new-feature
```

## 7. 다음 단계

프로젝트가 성공적으로 설정되었습니다! 이제 다음과 같은 작업을 진행할 수 있습니다:

- [ ] 더 많은 연습 텍스트 추가
- [ ] 타이핑 히스토리 저장 기능
- [ ] 다양한 난이도 레벨
- [ ] 키보드 시각화
- [ ] 통계 차트 추가
- [ ] 다크모드/라이트모드 토글
- [ ] 사용자 설정 저장 (LocalStorage)
