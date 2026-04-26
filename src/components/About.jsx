import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.2) {
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

function CountUp({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useInView()

  useEffect(() => {
    if (!visible) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [visible, target, duration])

  return (
    <div ref={ref}>
      <span>{count}</span>
      <span>{suffix}</span>
    </div>
  )
}

const stats = [
  { label: 'Years Experience', value: 4, suffix: '+', desc: 'Full-stack development' },
  { label: 'Key Projects', value: 6, suffix: '+', desc: 'Across multiple domains' },
  { label: 'Employee of the Month', value: 7, suffix: '×', desc: 'At HIPE Japan Inc.' },
]

export default function About() {
  const [sectionRef, sectionVisible] = useInView(0.1)

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="mb-12">
          <p className="section-title mb-2">// 01</p>
          <h2 className="section-heading text-2xl sm:text-3xl text-[#f9fafb]">
            About <span style={{ color: '#f0b429' }}>Me</span>
          </h2>
          <div className="mt-3 w-16 h-px bg-[#f0b429]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Profile text */}
          <div
            className={`fade-in ${sectionVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            {/* Terminal window header */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-t border border-b-0"
              style={{ background: '#111827', borderColor: '#1f2937' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f0b429] opacity-80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
              <span
                className="ml-3 text-[0.6rem] tracking-widest uppercase"
                style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4b5563' }}
              >
                profile.md
              </span>
            </div>
            <div
              className="p-6 rounded-b border"
              style={{ background: 'rgba(17,24,39,0.6)', borderColor: '#1f2937' }}
            >
              <p
                className="text-[0.85rem] leading-relaxed mb-5"
                style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}
              >
                Experienced Software Engineer with{' '}
                <span style={{ color: '#f0b429' }}>4+ years</span> in full-stack
                web development, delivering solutions across{' '}
                <span style={{ color: '#f9fafb' }}>fan engagement, enterprise, e-learning,</span>{' '}
                and <span style={{ color: '#f9fafb' }}>e-commerce</span> domains.
              </p>
              <p
                className="text-[0.85rem] leading-relaxed mb-5"
                style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}
              >
                Skilled in building scalable applications with{' '}
                <span style={{ color: '#f0b429' }}>React, Vue.js, Node.js,</span>{' '}
                and cloud technologies, with strong expertise in{' '}
                <span style={{ color: '#f9fafb' }}>database design, API development,</span>{' '}
                and <span style={{ color: '#f9fafb' }}>authentication systems.</span>
              </p>
              <p
                className="text-[0.85rem] leading-relaxed"
                style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}
              >
                Recognized{' '}
                <span style={{ color: '#f0b429', fontWeight: 600 }}>7 times</span>{' '}
                as Employee of the Month at HIPE Japan Incorporated for outstanding performance.
              </p>

              {/* Contact info row */}
              <div className="mt-6 pt-5 border-t flex flex-wrap gap-4" style={{ borderColor: '#1f2937' }}>
                {[
                  { icon: '📍', text: 'Cebu City, PH' },
                  { icon: '✉', text: 'gibotajada@gmail.com' },
                  { icon: '📞', text: '+63 935 218 7166' },
                ].map((item) => (
                  <span
                    key={item.text}
                    className="flex items-center gap-2 text-[0.7rem] tracking-wide"
                    style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6b7280' }}
                  >
                    <span>{item.icon}</span>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Education below */}
            <div
              className="mt-4 p-4 border flex items-start gap-4"
              style={{ background: 'rgba(17,24,39,0.4)', borderColor: '#1f2937', borderLeft: '3px solid #f0b429' }}
            >
              <span className="text-[#f0b429] text-lg mt-0.5">🎓</span>
              <div>
                <p
                  className="text-[0.65rem] tracking-widest uppercase mb-1"
                  style={{ fontFamily: '"JetBrains Mono", monospace', color: '#f0b429' }}
                >
                  Education
                </p>
                <p className="text-[0.8rem] text-[#f9fafb] font-medium">Zuitt Coding Bootcamp</p>
                <p className="text-[0.72rem] text-[#6b7280]">Full-stack Web Development · 2021–2022</p>
                <p className="text-[0.8rem] text-[#f9fafb] font-medium mt-2">Negros Oriental State University</p>
                <p className="text-[0.72rem] text-[#6b7280]">B.S. Civil Engineering · 2009–2015</p>
              </div>
            </div>
          </div>

          {/* Right — Stat counters */}
          <div
            className={`fade-in ${sectionVisible ? 'visible' : ''} flex flex-col gap-4`}
            style={{ transitionDelay: '0.25s' }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="card-glass p-6 rounded"
                style={{
                  border: '1px solid #1f2937',
                  transitionDelay: `${i * 0.1}s`,
                  animation: 'glowPulse 3s ease-in-out infinite',
                  animationDelay: `${i * 1}s`,
                }}
              >
                {/* Value */}
                <div
                  className="text-5xl font-black mb-1 leading-none"
                  style={{ fontFamily: '"JetBrains Mono", monospace', color: '#f0b429' }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} duration={1600} />
                </div>
                {/* Label */}
                <p
                  className="text-sm font-semibold text-[#f9fafb] mb-1"
                  style={{ fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.05em' }}
                >
                  {stat.label}
                </p>
                {/* Sub-label */}
                <p className="text-[0.72rem] text-[#6b7280]">{stat.desc}</p>

                {/* Mini bar */}
                <div className="mt-4 h-px" style={{ background: '#1f2937' }}>
                  <div
                    className="h-full"
                    style={{
                      width: `${(stat.value / 10) * 100}%`,
                      background: 'linear-gradient(90deg, #f0b429, #b8860b)',
                      transition: 'width 1.5s ease',
                    }}
                  />
                </div>
              </div>
            ))}

            {/* HIPE badge */}
            <div
              className="p-4 border flex items-center gap-4"
              style={{ background: 'rgba(17,24,39,0.4)', borderColor: '#1f2937' }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center text-xs font-black shrink-0"
                style={{
                  background: 'rgba(240,180,41,0.1)',
                  border: '1px solid rgba(240,180,41,0.3)',
                  color: '#f0b429',
                  fontFamily: '"JetBrains Mono", monospace',
                }}
              >
                HP
              </div>
              <div>
                <p
                  className="text-[0.7rem] tracking-widest uppercase mb-0.5"
                  style={{ fontFamily: '"JetBrains Mono", monospace', color: '#f0b429' }}
                >
                  Currently at
                </p>
                <p className="text-sm font-semibold text-[#f9fafb]">HIPE Japan Incorporated</p>
                <p className="text-[0.7rem] text-[#6b7280]">Software Engineer · 2022 – Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
