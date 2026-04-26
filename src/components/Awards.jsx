import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

const recognitions = [
  { date: 'MAR 2025', label: 'Employee of the Month', org: 'HIPE Japan Inc.', months: ['March'] },
  { date: '2024', label: 'Employee of the Month ×3', org: 'HIPE Japan Inc.', months: ['March', 'May', 'August'] },
  { date: 'SEP 2023', label: 'Employee of the Month', org: 'HIPE Japan Inc.', months: ['September'] },
  { date: 'NOV 2022', label: 'Employee of the Month', org: 'HIPE Japan Inc.', months: ['November'] },
]

const certifications = [
  {
    title: 'Frontend Development Certificate',
    issuer: 'Zuitt Coding Bootcamp',
    type: 'CERT',
    color: '#3b82f6',
  },
  {
    title: 'Backend Development Certificate',
    issuer: 'Zuitt Coding Bootcamp',
    type: 'CERT',
    color: '#10b981',
  },
  {
    title: 'Full-Stack Development Certificate',
    issuer: 'Zuitt Coding Bootcamp',
    type: 'CERT',
    color: '#f0b429',
  },
  {
    title: 'Best Capstone — Backend Development',
    issuer: 'Zuitt Bootcamp · Capstone 2',
    type: 'AWARD',
    color: '#a855f7',
  },
  {
    title: 'Best Capstone — Full-Stack MERN',
    issuer: 'Zuitt Bootcamp · Capstone 3',
    type: 'AWARD',
    color: '#f97316',
  },
]

export default function Awards() {
  const [sectionRef, sectionVisible] = useInView(0.05)

  return (
    <section id="awards" className="py-24 relative" ref={sectionRef}>
      <div className="divider mb-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="mb-12">
          <p className="section-title mb-2">// 04</p>
          <h2 className="section-heading text-2xl sm:text-3xl text-[#f9fafb]">
            Recognition & <span style={{ color: '#f0b429' }}>Certifications</span>
          </h2>
          <div className="mt-3 w-16 h-px bg-[#f0b429]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left — Professional Recognition */}
          <div
            className={`fade-in ${sectionVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.05s' }}
          >
            <div className="card-glass rounded overflow-hidden">
              {/* Panel header */}
              <div
                className="px-5 py-3 border-b flex items-center justify-between"
                style={{ background: 'rgba(17,24,39,0.6)', borderColor: '#1f2937' }}
              >
                <div className="panel-header">Professional Recognition</div>
                <span
                  className="text-[0.6rem] px-2 py-0.5"
                  style={{
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    color: '#10b981',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.55rem',
                    letterSpacing: '0.15em',
                  }}
                >
                  7 AWARDS
                </span>
              </div>

              {/* Recognition rows */}
              <div className="divide-y" style={{ divideColor: '#1f2937' }}>
                {recognitions.map((rec, i) => (
                  <div
                    key={i}
                    className="award-row px-5 py-4 flex items-start gap-4"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    {/* Icon */}
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center shrink-0 text-sm"
                      style={{
                        background: 'rgba(240,180,41,0.1)',
                        border: '1px solid rgba(240,180,41,0.2)',
                      }}
                    >
                      🏆
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p
                          className="text-sm font-semibold text-[#f9fafb]"
                          style={{ fontFamily: '"JetBrains Mono", monospace' }}
                        >
                          {rec.label}
                        </p>
                        <span
                          className="text-[0.6rem] tracking-widest shrink-0"
                          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#f0b429' }}
                        >
                          {rec.date}
                        </span>
                      </div>
                      <p className="text-[0.7rem] text-[#6b7280] mt-0.5">{rec.org}</p>
                      {rec.months.length > 1 && (
                        <div className="flex gap-1.5 mt-2 flex-wrap">
                          {rec.months.map((m) => (
                            <span
                              key={m}
                              className="text-[0.55rem] px-2 py-0.5 tracking-widest uppercase"
                              style={{
                                background: 'rgba(16,185,129,0.08)',
                                border: '1px solid rgba(16,185,129,0.2)',
                                color: '#10b981',
                                fontFamily: '"JetBrains Mono", monospace',
                              }}
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div
                className="px-5 py-3 border-t flex items-center gap-2"
                style={{ background: 'rgba(17,24,39,0.4)', borderColor: '#1f2937' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                <span
                  className="text-[0.6rem] tracking-widest uppercase"
                  style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6b7280' }}
                >
                  HIPE Japan Inc. · 2022 – 2025
                </span>
              </div>
            </div>
          </div>

          {/* Right — Certifications & Awards */}
          <div
            className={`fade-in ${sectionVisible ? 'visible' : ''} flex flex-col gap-3`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Panel header */}
            <div
              className="card-glass rounded overflow-hidden"
            >
              <div
                className="px-5 py-3 border-b flex items-center justify-between"
                style={{ background: 'rgba(17,24,39,0.6)', borderColor: '#1f2937' }}
              >
                <div className="panel-header">Certifications & Awards</div>
                <span
                  className="text-[0.6rem] px-2 py-0.5"
                  style={{
                    background: 'rgba(240,180,41,0.08)',
                    border: '1px solid rgba(240,180,41,0.2)',
                    color: '#f0b429',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.55rem',
                    letterSpacing: '0.15em',
                  }}
                >
                  {certifications.length} ITEMS
                </span>
              </div>

              <div className="p-5 flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded"
                    style={{
                      background: 'rgba(10,14,26,0.6)',
                      border: `1px solid ${cert.color}20`,
                      transition: 'border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cert.color}50` }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${cert.color}20` }}
                  >
                    {/* Type badge */}
                    <span
                      className="text-[0.55rem] px-2 py-0.5 shrink-0 mt-0.5 font-bold tracking-widest"
                      style={{
                        background: `${cert.color}15`,
                        border: `1px solid ${cert.color}30`,
                        color: cert.color,
                        fontFamily: '"JetBrains Mono", monospace',
                      }}
                    >
                      {cert.type}
                    </span>

                    {/* Content */}
                    <div className="min-w-0">
                      <p
                        className="text-[0.78rem] font-semibold text-[#f9fafb] leading-snug"
                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                      >
                        {cert.title}
                      </p>
                      <p className="text-[0.65rem] text-[#6b7280] mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary block */}
            <div
              className="p-4 border"
              style={{
                background: 'rgba(17,24,39,0.4)',
                borderColor: '#1f2937',
                borderLeft: '3px solid #f0b429',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p
                    className="text-[0.65rem] tracking-widest uppercase mb-0.5"
                    style={{ fontFamily: '"JetBrains Mono", monospace', color: '#f0b429' }}
                  >
                    Bootcamp Credentials
                  </p>
                  <p className="text-sm text-[#f9fafb] font-semibold">Zuitt Coding Bootcamp</p>
                  <p className="text-[0.7rem] text-[#6b7280]">
                    3 Certificates · 2 Best Capstone Awards · 2021–2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
