# 세션 복원 가이드

## 빠른 시작 (이미 로컬에 있을 때)

```bash
# guide-app
git pull && npx next dev -p 6061

# clone (참조용)
cd C:\복사본 && git pull && npx next dev -p 6062
```

Claude 첫 마디: `CLAUDE.md 읽고 프로젝트 컨텍스트 파악해줘`

---

## 처음 세팅 (새 PC / 초기화 후)

### 1. exemone-guide (메인)

```bash
git clone https://github.com/KJH0107/exemone-guide.git C:\exemONE_guide\guide-app
cd C:\exemONE_guide\guide-app
npm install
npx next dev -p 6061
```

→ http://localhost:6061

```bash
cd C:\exemONE_guide\guide-app
claude
```

**Claude 첫 마디:**
```
CLAUDE.md 읽고 프로젝트 컨텍스트 파악해줘
```

---

### 2. exemone-clone (UI 참조용, 필요할 때만)

```bash
git clone https://github.com/KJH0107/exemone-clone.git C:\복사본
cd C:\복사본
npm install
npx next dev -p 6062
```

→ http://localhost:6062

```bash
cd C:\복사본
claude
```

**Claude 첫 마디:**
```
WORK_LOG.md 읽고 프로젝트 컨텍스트 파악해줘
```

---

## 포트 정리

| 포트 | 프로젝트 | 용도 |
|------|---------|------|
| 6061 | exemone-guide | 가이드 앱 (메인 작업) |
| 6062 | exemone-clone | UI 참조용 |

---

## 컨텍스트 문서 위치

| 문서 | 내용 |
|------|------|
| `CLAUDE.md` | 단일 진입점 — 기술스택/구조/아키텍처/미완료 전부 |
| `.claude/PROJECT.md` | 기획 의도 + 시나리오 3종 + 로드맵 |
| `.claude/CLONE_STATUS.md` | clone 구현 현황 참조 |
| `.claude/FEATURES_COVERAGE.md` | 26개 기능 연결 현황 추적표 |
