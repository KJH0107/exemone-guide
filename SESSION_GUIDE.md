# 세션 복원 가이드 — exemone-guide

---

## 빠른 재시작 (로컬에 이미 있을 때)

```bash
cd C:\exemONE_guide\guide-app
git pull
npx next dev -p 6061
```

→ http://localhost:6061

---

## Claude Code 세션 복원 순서

```
# Step 0 — 실제 최신 상태 확인 (필수, stale 방지)
git log --oneline -10

# Step 1 — 구조/아키텍처 파악
CLAUDE.md 읽고 프로젝트 컨텍스트 파악해줘

# Step 2 — 현재 작업 위치 파악 (필수)
.claude/FEATURES_COVERAGE.md 읽어줘

# Step 3 — 기획 의도 확인 (선택)
.claude/PROJECT.md 읽어줘
```

> Step 0 → Step 2 순서 지키면 "어디서 이어받는지" 바로 파악 가능

---

## 처음 세팅 (새 PC / 초기화 후)

```bash
# 1. 클론
git clone https://github.com/KJH0107/exemone-guide.git C:\exemONE_guide\guide-app

# 2. 설치
cd C:\exemONE_guide\guide-app
npm install

# 3. 서버 실행
npx next dev -p 6061
```

---

## 포트 정리

| 포트 | 프로젝트 | 경로 |
|------|---------|------|
| **6061** | exemone-guide (이 앱) | `C:\exemONE_guide\guide-app` |
| 6062 | exemone-clone (UI 참조) | `C:\복사본` |

---

## 컨텍스트 문서

| 문서 | 내용 | 필수 여부 |
|------|------|---------|
| `CLAUDE.md` | 구조/아키텍처/주의사항 | ✅ 필수 |
| `.claude/FEATURES_COVERAGE.md` | 26개 기능 연결 현황 (작업 재개 위치) | ✅ 필수 |
| `.claude/PROJECT.md` | 기획 의도 + 시나리오 3종 | 선택 |
| `.claude/CLONE_STATUS.md` | clone 구현 현황 참조 | 선택 |

---

## 주의사항

- `Sidebar.tsx`에 GuideToggleButton 있음 — clone 버전으로 덮어쓰면 가이드 버튼 사라짐
- `layout.tsx`에 GuidePanelLayout 있음 — clone layout 복사 금지
- clone theme CSS(`--color-w-gray-*` 토큰 의존) → guide-app에 복사해도 작동 안 함

---

## GitHub

- 이 레포: https://github.com/KJH0107/exemone-guide
- clone 레포: https://github.com/KJH0107/exemone-clone
