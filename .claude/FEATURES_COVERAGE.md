---
# features.ts 커버리지 현황

`src/lib/guide/features.ts`에 정의된 기능 설명 데이터와
실제 UI GuideHighlight 연결 상태를 추적한다.

## 페이지별 연결 상태

### home (`/home`)
| feature ID | 설명 | GuideHighlight 연결 |
|-----------|------|-------------------|
| status-summary | 상태 요약 카드 | ❌ 미연결 |
| widget-custom | 화면 커스텀 | ❌ 미연결 |
| recent-dashboard | 최근 방문 대시보드 | ❌ 미연결 |
| realtime-alert | 실시간 알람 현황 | ❌ 미연결 |
| alert-summary | 최근 알람 요약 | ❌ 미연결 |
| critical-list | 장애 인스턴스 목록 | ❌ 미연결 |

### database (`/database` — 오버뷰)
| feature ID | 설명 | GuideHighlight 연결 |
|-----------|------|-------------------|
| instance-card | Instance Card (SummaryBar) | ✅ `<GuideHighlight id="instance-card">` |
| filters | Filters (FilterPanel) | ✅ `<GuideHighlight id="filters">` |
| instance-map | Instance Map (HexagonGrid) | ✅ `<GuideHighlight id="instance-map">` |
| instance-list | Instance List (InstanceTable) | ✅ `<GuideHighlight id="instance-list">` |

### database-detail (InstanceDrawer)
| feature ID | 설명 | GuideHighlight 연결 |
|-----------|------|-------------------|
| drawer-info | 정보 탭 | ✅ |
| drawer-metric | 메트릭 탭 | ✅ |
| drawer-active-session | 액티브 세션 탭 | ✅ |
| drawer-sql-list | SQL 목록 탭 | ✅ |
| drawer-lock | Lock 정보 탭 | ✅ |
| drawer-alert | 알람 탭 | ✅ |
| drawer-parameter | 파라미터 탭 | ✅ |
| drawer-host-process | 호스트 프로세스 탭 | ✅ |

### performance (`/performance/database`)
| feature ID | 설명 | GuideHighlight 연결 |
|-----------|------|-------------------|
| trend-chart | 트렌드 차트 | ❌ 미연결 |
| session-dist | 세션 분포 | ❌ 미연결 |
| top-sql | Top SQL | ❌ 미연결 |
| slow-query | Slow Query | ❌ 미연결 |
| tablespace | Tablespace | ❌ 미연결 |

### alert (`/alert`)
| feature ID | 설명 | GuideHighlight 연결 |
|-----------|------|-------------------|
| alert-status | 알람 현황 | ❌ 미연결 |
| alert-event | 알람 이벤트 목록 | ❌ 미연결 |
| alert-rule | 알람 규칙 | ❌ 미연결 |

## 요약

| 페이지 | 전체 | 연결 완료 | 미연결 |
|--------|------|---------|--------|
| home | 6 | 0 | 6 |
| database | 4 | 4 | 0 |
| database-detail | 8 | 8 | 0 |
| performance | 5 | 0 | 5 |
| alert | 3 | 0 | 3 |
| **합계** | **26** | **12** | **14** |
