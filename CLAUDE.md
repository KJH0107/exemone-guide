# exemONE 기능 가이드 앱

## 이 앱이 무엇인가

exemONE DB 모니터링 플랫폼의 **인터랙티브 기능 가이드 앱**.
신입 교육 / 외부 발표 시 실제 UI를 보여주면서 기능을 설명하는 용도.

- 우측 360px 가이드 패널이 슬라이드인 → 해당 기능 영역을 하이라이트
- 사용자가 UI를 직접 조작하면서 기능을 배움
- 추후 단일 HTML 파일로 변환 예정

**기획서 원본**: `C:\기획\exemone-guide-pj.html` (인터랙티브 시뮬레이터 v3-gsd)
**3개 교육 시나리오**: 출근 일상 점검 / 장애 대응 / 성능 추적 → `.claude/PROJECT.md` 참조

---

## 실행

```bash
cd C:\exemONE_guide\guide-app
npm run dev -- -p 6061
# → http://localhost:6061
```

---

## 기술 스택

- Next.js 14 (App Router) + TypeScript
- Zustand (가이드 상태 관리)
- ECharts (차트)
- 인라인 스타일 (순수 style prop, CSS-in-JS 없음)

---

## 핵심 파일 구조

```
src/
├── app/
│   ├── layout.tsx              ← Sidebar + main + GuidePanelLayout flex row
│   ├── database/page.tsx       ← 오버뷰 + InstanceDrawer (가장 많이 작업한 파일)
│   ├── home/page.tsx
│   ├── performance/page.tsx
│   └── alert/page.tsx
│
├── components/
│   ├── guide/
│   │   ├── GuidePanelLayout.tsx  ← 우측 360px 패널 (blue/teal 테마)
│   │   └── GuideHighlight.tsx    ← UI 컴포넌트 감싸는 하이라이트 래퍼
│   ├── layout/
│   │   └── Sidebar.tsx           ← GuideToggleButton 포함 (clone과 다름)
│   └── database/
│       ├── HexagonGrid.tsx / InstanceTable.tsx / FilterPanel.tsx / SummaryBar.tsx
│
├── stores/
│   └── guideStore.ts           ← isOpen, activeFeature, isDrawerOpen, openDrawer/closeDrawer
│
└── lib/
    └── guide/
        └── features.ts         ← 전체 기능 설명 데이터 (ClickUp 공식 문서 기반)
```

---

## 가이드 시스템 아키텍처

### 상태 (guideStore.ts)
```ts
isOpen: boolean           // 가이드 패널 열림 여부
activeFeature: string | null  // 현재 선택된 기능 ID
isDrawerOpen: boolean     // InstanceDrawer 열림 여부
```

### 레이아웃
```
[Sidebar 220px] [main flex:1] [GuidePanelLayout 360px or 0]
```
가이드 패널이 flex sibling → 열리면 main이 밀림 (겹치지 않음)
InstanceDrawer: `right: guideOpen ? 360 : 0` 으로 패널과 겹침 방지

### GuideHighlight
- 가이드 ON + activeFeature === id → `box-shadow` 하이라이트
- `onClickCapture` → 클릭 시 해당 기능 자동 선택 (내부 UI 동작 차단 안 함)
- 배지("이 영역을 확인하세요") — 요소 내부 상단 오버레이

### 테마
| 컨텍스트 | 테마 | 색상 |
|---------|------|-----|
| 일반 페이지 | blue | #2563eb |
| Instance Detail Drawer | teal | #0d9488 |

### InstanceDrawer ↔ 가이드 양방향 동기화
- 탭 클릭 → `TAB_FEATURE_MAP[tab]` → `setFeature()`
- 가이드 이전/다음 → `FEATURE_TAB_MAP[id]` → `setTab()`

---

## features.ts 구조

```ts
type PageKey = 'home' | 'database' | 'database-detail' | 'performance' | 'alert'
```

| PageKey | features 수 | 연결 완료 |
|---------|------------|---------|
| home | 6 | 0 (미연결) |
| database | 4 | 4 ✅ |
| database-detail | 8 | 8 ✅ |
| performance | 5 | 0 (미연결) |
| alert | 3 | 0 (미연결) |

**전체 커버리지**: 26개 중 12개 연결 → `.claude/FEATURES_COVERAGE.md` 참조

---

## 구현 완료

- Zustand 가이드 스토어 + 사이드바 토글 버튼
- GuidePanelLayout flex sibling (content push)
- GuideHighlight (box-shadow / onClickCapture / 내부 배지)
- database 오버뷰 4개 기능 + InstanceDrawer 8탭 가이드 연결
- 탭 ↔ 가이드 양방향 동기화
- teal 테마 자동 전환 + breadcrumb
- relatedFeatures "이어서 확인하세요" 링크

## 미완료 (다음 작업)

- [ ] home / performance / alert GuideHighlight 연결 (14개 미연결)
- [ ] Session Detail / SQL Detail / Parameter Detail 슬라이드 가이드
- [ ] 단일 HTML 파일 변환

---

## clone 앱 관계

**clone 앱(`C:\복사본`, 포트 6062)** = 이 앱의 UI 기반.
guide-app은 clone을 fork해서 가이드 시스템을 얹은 것.

> ⚠️ clone의 Sidebar.tsx / globals.css / layout.tsx를 그대로 복사하면 가이드 기능 깨짐
> (guide-app Sidebar에는 GuideToggleButton 있음, layout에는 GuidePanelLayout 있음)

> ⚠️ clone의 `src/app/styles/theme_*.css`는 `var(--color-w-gray-*)` 토큰 시스템에 의존
> guide-app에 해당 토큰이 없으므로 import해도 작동 안 함 → **복사 불필요, guide-app 자체 CSS vars 유지**

clone 구현 현황: `.claude/CLONE_STATUS.md` 참조

---

## ClickUp 가이드 문서

- Doc: `rbeb5-416338` (전체 매뉴얼) / Workspace: `25540965`
- Instance 오버뷰: `rbeb5-2687118`
- Instance Detail Slide: `rbeb5-2690518`
- Session Detail: `rbeb5-2690498`
- SQL Detail: `rbeb5-2690738`
- Parameter Detail: `rbeb5-2690818`

---

## 유용한 명령어

```bash
# 개발 서버
npm run dev -- -p 6061

# TS 에러 확인
npx tsc --noEmit 2>&1 | grep "error TS" | grep -v "TS2339\|TS2322"

# 가이드 패널 너비 변경
# GuidePanelLayout.tsx → GUIDE_PANEL_WIDTH = 360
# database/page.tsx → guideOpen ? 360 : 0 (2곳)
```

---

## .claude/ 참조 문서

| 파일 | 내용 |
|------|------|
| `.claude/PROJECT.md` | 기획 의도, 시나리오 정의, 로드맵 |
| `.claude/CLONE_STATUS.md` | clone 앱 구현 현황, 컴포넌트 목록 |
| `.claude/FEATURES_COVERAGE.md` | features.ts 커버리지 추적 (26개 중 몇 개 연결됐는지) |
