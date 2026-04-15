'use client'
import { useState } from 'react'
import { PAGE_FEATURES, type PageKey } from '@/lib/guide/features'
import { mockInstances } from '@/lib/mock/instances'
import { mockMetric, mockSessionDist, mockTopSql, mockSlowQuery, mockTablespace } from '@/lib/mock/db-metrics'
import FeaturePanel from '@/components/guide/FeaturePanel'
import GuidePreview from '@/components/guide/GuidePreview'

const PAGES: { key: PageKey; label: string; icon: string }[] = [
  { key: 'home',        label: '홈',      icon: '🏠' },
  { key: 'database',    label: '오버뷰',  icon: '🗄' },
  { key: 'performance', label: '성능분석', icon: '📈' },
  { key: 'alert',       label: '알람',   icon: '🔔' },
]

export default function GuidePage() {
  const [activePage, setActivePage] = useState<PageKey>('home')
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const handlePageChange = (page: PageKey) => {
    setActivePage(page)
    setActiveFeature(null)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>

      {/* ── 헤더 + 페이지 탭 ── */}
      <div style={{
        background: '#fff', borderBottom: '1px solid #e3e7ea',
        boxShadow: '0 2px 6px 0 rgba(0,13,29,.08)',
        flexShrink: 0,
      }}>
        {/* 상단 타이틀 바 */}
        <div style={{
          height: 48, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 20px',
          borderBottom: '1px solid #f1f5f9',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              fontSize: 11, fontWeight: 700,
              background: '#dbeafe', color: '#1d4ed8',
              padding: '2px 8px', borderRadius: 99,
            }}>
              GUIDE MODE
            </span>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#282c32' }}>
              exemONE 기능 가이드
            </span>
          </div>
          <span style={{ fontSize: 11, color: '#9fa5ae' }}>
            우측 패널에서 기능을 클릭하면 화면에서 위치를 확인할 수 있습니다
          </span>
        </div>

        {/* 페이지 탭 */}
        <div style={{ display: 'flex', padding: '0 20px', gap: 0 }}>
          {PAGES.map(p => (
            <button
              key={p.key}
              onClick={() => handlePageChange(p.key)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '9px 16px', fontSize: 13, cursor: 'pointer',
                background: 'none', border: 'none', outline: 'none',
                borderBottom: activePage === p.key ? '2px solid #3b82f6' : '2px solid transparent',
                color: activePage === p.key ? '#1d4ed8' : '#626872',
                fontWeight: activePage === p.key ? 700 : 400,
                transition: 'all .15s',
              }}
            >
              <span>{p.icon}</span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── 본문: 프리뷰 + 우측 패널 ── */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* 프리뷰 영역 (오버레이 포함) */}
        <div style={{ flex: 1, position: 'relative', overflow: 'auto' }}>

          {/* 어두운 오버레이 — 기능 선택 시 표시 */}
          {activeFeature && (
            <div
              onClick={() => setActiveFeature(null)}
              style={{
                position: 'absolute', inset: 0, zIndex: 10,
                background: 'rgba(15, 23, 42, 0.55)',
                backdropFilter: 'blur(1px)',
                cursor: 'pointer',
                transition: 'opacity .2s',
              }}
            />
          )}

          <GuidePreview
            activePage={activePage}
            highlightFeature={activeFeature}
            instances={mockInstances}
            metric={mockMetric}
            sessionDist={mockSessionDist}
            topSql={mockTopSql}
            slowQuery={mockSlowQuery}
            tablespace={mockTablespace}
          />
        </div>

        {/* 우측 기능 설명 패널 */}
        <FeaturePanel
          pageFeatures={PAGE_FEATURES[activePage]}
          activeFeature={activeFeature}
          onFeatureClick={setActiveFeature}
        />
      </div>
    </div>
  )
}
