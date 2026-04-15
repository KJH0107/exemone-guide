---
# clone 앱 현황 (C:\복사본)

guide-app의 UI 기반이 되는 exemONE 클론 앱의 구현 상태.
guide-app 작업 시 이 내용을 참조해 어떤 페이지/컴포넌트가 존재하는지 파악한다.

## GitHub
https://github.com/KJH0107/exemone-clone (main)
마지막 커밋: `53c91e8` — PostgreSQL 싱글뷰, 사이드바 재설계, 라이트 테마 (2026-04-15)

## 구현 완료 페이지

| 경로 | 상태 | 내용 |
|------|------|------|
| `/` (home) | ✅ | 위젯 대시보드, 시작 가이드 온보딩 (4단계) |
| `/dashboard` | ✅ | 대시보드 목록 |
| `/database` | ✅ | HexagonGrid + InstanceTable (InstanceDrawer 포함) |
| `/alert` | ✅ | 알람 현황 + 알람 규칙 + 알람 정보 탭 |
| `/performance/database` | ✅ | 성능분석 (Scatter, Trend) |
| `/db/postgresql/single` | ✅ | PostgreSQL 싱글뷰 (3컬럼 레이아웃) |

## 구현 완료 컴포넌트 (guide-app과 공유 기반)

| 컴포넌트 | 경로 |
|---------|------|
| Sidebar | `src/components/layout/Sidebar.tsx` — DATABASE 카테고리 계층 구조 |
| HexagonGrid | `src/components/database/HexagonGrid.tsx` |
| InstanceTable | `src/components/database/InstanceTable.tsx` |
| FilterPanel | `src/components/database/FilterPanel.tsx` |
| SummaryBar | `src/components/database/SummaryBar.tsx` |
| OverviewChart | `src/components/database/OverviewChart.tsx` |

## 스타일 시스템

- `src/app/styles/theme_light.css` / `theme_dark.css` — CSS 변수 기반 테마
- `src/app/styles/typography-v2.css` — Pretendard + JetBrainsMono 로컬 폰트
- `public/fonts/` — Pretendard (Bold/Medium/Regular/Light), JetBrainsMono

> ⚠️ guide-app은 자체 CSS vars 사용 중 — clone 스타일 직접 복사 시 충돌 가능
> 폰트 파일(`public/fonts/`)만 복사 완료, CSS vars는 guide-app 것 유지

## InstanceDrawer 탭 목록 (database/page.tsx)

정보 / 메트릭 / 액티브 세션 / SQL 목록 / Lock 정보 / 알람 / 파라미터 / 호스트 프로세스
