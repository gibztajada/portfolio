import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.15) {
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

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    code: 'FE',
    color: '#3b82f6',
    skills: [
      'React', 'Vue.js', 'Next.js', 'React Native',
      'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
      'Tailwind CSS', 'Zustand', 'Pinia', 'SPA & PWA',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    code: 'BE',
    color: '#10b981',
    skills: [
      'Node.js', 'Express.js', 'Laravel', 'Java', 'Python',
      'RESTful API', 'OAuth 1.0/2.0', 'SAML',
      'Line OAuth', 'Twitter/X OAuth',
    ],
  },
  {
    id: 'database',
    label: 'Database',
    code: 'DB',
    color: '#a855f7',
    skills: [
      'MySQL', 'PostgreSQL', 'SQL Server',
      'Django', 'Flask', 'FlaskAPI',
      'Prisma ORM', 'Schema Design', 'Data Sync',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    code: 'CL',
    color: '#f97316',
    skills: [
      'AWS Lambda', 'Cloud Deployment', 'AWS Integration',
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Process',
    code: 'TL',
    color: '#ec4899',
    skills: [
      'Git', 'VSCode', 'WordPress', 'jQuery',
      'JSON', 'REST APIs', 'SDLC', 'PHP', 'Laravel',
    ],
  },
]

function SkillPanel({ category, visible, delay }) {
  return (
    <div
      className={`fade-in ${visible ? 'visible' : ''} card-glass rounded p-5`}
      style={{ transitionDelay: delay }}
    >
      {/* Panel header */}
      <div className="flex items-center justify-between mb-4">
        <div className="panel-header" style={{ borderColor: category.color, color: category.color }}>
          {category.label}
        </div>
        <span
          className="text-[0.6rem] px-2 py-0.5 rounded font-mono font-bold"
          style={{
            background: `${category.color}15`,
            border: `1px solid ${category.color}30`,
            color: category.color,
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          {category.code}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="skill-badge"
            style={{
              background: `${category.color}08`,
              borderColor: `${category.color}20`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Count indicator */}
      <div className="mt-4 pt-3 border-t flex items-center justify-between" style={{ borderColor: '#1f2937' }}>
        <span
          className="text-[0.6rem] tracking-widest uppercase"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4b5563' }}
        >
          {category.skills.length} Technologies
        </span>
        <div className="flex gap-1">
          {Array.from({ length: Math.min(category.skills.length, 10) }).map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full"
              style={{
                height: '12px',
                background: i < category.skills.length ? category.color : '#1f2937',
                opacity: i < category.skills.length ? 0.6 + (i / category.skills.length) * 0.4 : 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [sectionRef, sectionVisible] = useInView(0.05)

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      {/* Subtle top divider */}
      <div className="divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="mb-12">
          <p className="section-title mb-2">// 02</p>
          <h2 className="section-heading text-2xl sm:text-3xl text-[#f9fafb]">
            Technical <span style={{ color: '#f0b429' }}>Stack</span>
          </h2>
          <div className="mt-3 w-16 h-px bg-[#f0b429]" />
        </div>

        {/* Main grid: 2 cols large left, 1 col right stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Frontend takes up more space conceptually — show it first, larger */}
          <div className="xl:col-span-2">
            <SkillPanel
              category={skillCategories[0]}
              visible={sectionVisible}
              delay="0.05s"
            />
          </div>
          <div>
            <SkillPanel
              category={skillCategories[1]}
              visible={sectionVisible}
              delay="0.15s"
            />
          </div>
          <div>
            <SkillPanel
              category={skillCategories[2]}
              visible={sectionVisible}
              delay="0.25s"
            />
          </div>
          <div>
            <SkillPanel
              category={skillCategories[3]}
              visible={sectionVisible}
              delay="0.35s"
            />
          </div>
          <div>
            <SkillPanel
              category={skillCategories[4]}
              visible={sectionVisible}
              delay="0.45s"
            />
          </div>
        </div>

        {/* Bottom summary row */}
        <div
          className={`fade-in ${sectionVisible ? 'visible' : ''} mt-6 p-4 border flex flex-wrap items-center justify-between gap-4`}
          style={{ background: 'rgba(17,24,39,0.4)', borderColor: '#1f2937', transitionDelay: '0.55s' }}
        >
          <span
            className="text-[0.65rem] tracking-widest uppercase"
            style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6b7280' }}
          >
            Total · {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)} Technologies
          </span>
          <div className="flex items-center gap-4 flex-wrap">
            {skillCategories.map((cat) => (
              <span
                key={cat.id}
                className="flex items-center gap-1.5 text-[0.6rem] uppercase tracking-widest"
                style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4b5563' }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
