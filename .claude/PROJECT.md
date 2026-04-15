---
# exemONE 기능 가이드 앱 — 프로젝트 기획

## 목적

exemONE DB 모니터링 플랫폼의 **인터랙티브 기능 가이드 앱**.

- 외부 발표 / 신입 교육 자료용
- 사용자가 실제 UI를 조작하면서 기능을 배울 수 있는 인터랙티브 형태
- 추후 단일 HTML 파일로 변환 예정 (오프라인 배포 대비)

---

## 교육 시나리오 (기획서 기준, C:\기획\exemone-guide-pj.html)

인터랙티브 교육 시뮬레이터 v3-gsd 기준으로 3개 시나리오를 정의함.
이 시나리오가 guide-app의 가이드 흐름 설계 기준이 됨.

### 시나리오 A — 출근 일상 점검
> 오버뷰에서 전체 인스턴스 상태를 확인하고, 정상 인스턴스의 메트릭을 살펴보는 일상 모니터링

단계: 오버뷰 확인 → 인스턴스 정보 → 메트릭 확인

### 시나리오 B — 장애 대응
> 오버뷰에서 Critical 인스턴스를 발견하고, 메트릭에서 CPU 급등 확인 → 액티브 세션에서 Lock 세션 Kill

단계: 오버뷰 확인 → 인스턴스 정보 → 메트릭 확인 → 액티브 세션 확인 → Multi Kill 실행

### 시나리오 C — 성능 추적
> 특정 인스턴스에서 Slow Query를 추적하고, SQL 텍스트를 분석

---

## 원본 참조

- 클론 앱: `C:\복사본` (포트 6062) — exemONE UI 구현체, guide-app의 UI 기반
- 기획서 HTML: `C:\기획\exemone-guide-pj.html` — 시나리오 정의 원본
- ClickUp 공식 문서: Workspace `25540965`, Doc `rbeb5-416338`

---

## 로드맵 (guide-app 기준)

### 완료
- [x] database 오버뷰 페이지 가이드 연결 (4개 기능)
- [x] InstanceDrawer 8개 탭 가이드 연결
- [x] 탭 ↔ 가이드 양방향 동기화
- [x] GuideHighlight + teal/blue 테마 전환

### 진행 예정
- [ ] home 페이지 GuideHighlight 연결
- [ ] performance 페이지 GuideHighlight 연결
- [ ] alert 페이지 GuideHighlight 연결
- [ ] Session Detail / SQL Detail / Parameter Detail 슬라이드 가이드
- [ ] 단일 HTML 파일 변환
