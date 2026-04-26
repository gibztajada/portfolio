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

const projects = [
  {
    id: 'idol',
    title: 'Japanese Idol Fan Engagement & Membership Platform',
    company: 'HIPE Japan Inc.',
    description:
      'Built a responsive frontend for a Japanese idol fan community platform with membership management, interactive features, and a smooth UX for fan engagement.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    status: 'LIVE',
    category: 'Fan Engagement',
    index: '01',
  },
  {
    id: 'aws',
    title: 'AWS Lambda Email Management System',
    company: 'HIPE Japan Inc.',
    description:
      'Developed an enterprise-grade email management system with OAuth-based authentication, built on serverless AWS Lambda architecture and REST APIs.',
    tags: ['Java', 'AWS Lambda', 'REST API', 'Enterprise Auth'],
    status: 'LIVE',
    category: 'Enterprise',
    index: '02',
  },
  {
    id: 'kids',
    title: 'Kids Learning Platform',
    company: 'HIPE Japan Inc.',
    description:
      'Built an interactive e-learning platform for children with engaging UI, content management, and progress tracking features.',
    tags: ['React', 'TypeScript', 'Next.js'],
    status: 'DELIVERED',
    category: 'E-Learning',
    index: '03',
  },
  {
    id: 'epub',
    title: 'E-Publication & Matching Service',
    company: 'HIPE Japan Inc.',
    description:
      'Developed a digital publication platform with a smart matching service to connect readers with relevant content.',
    tags: ['Vue.js', 'Next.js'],
    status: 'DELIVERED',
    category: 'E-Commerce',
    index: '04',
  },
  {
    id: 'poker',
    title: 'Poker Store System',
    company: 'HIPE Japan Inc.',
    description:
      'Built a cross-platform mobile application for a poker merchandise store with product listings, cart, and checkout.',
    tags: ['React Native'],
    status: 'DELIVERED',
    category: 'Mobile',
    index: '05',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Web Applications',
    company: 'HIPE Japan Inc.',
    description:
      'Developed multiple enterprise-level web applications handling complex business logic, data management, and user workflows.',
    tags: ['PHP', 'JavaScript', 'Laravel'],
    status: 'LIVE',
    category: 'Enterprise',
    index: '06',
  },
]

const tagColors = {
  'React': '#61dafb',
  'TypeScript': '#3b82f6',
  'Tailwind CSS': '#38bdf8',
  'Zustand': '#764abc',
  'Java': '#f89820',
  'AWS Lambda': '#ff9900',
  'REST API': '#10b981',
  'Enterprise Auth': '#a855f7',
  'Next.js': '#f9fafb',
  'Vue.js': '#42b883',
  'React Native': '#61dafb',
  'PHP': '#8892be',
  'JavaScript': '#f7df1e',
  'Laravel': '#ff2d20',
}

function ProjectCard({ project, visible, delay }) {
  return (
    <div
      className={`fade-in ${visible ? 'visible' : ''} relative group cursor-default`}
      style={{ transitionDelay: delay }}
    >
      <div
        className="h-full flex flex-col"
        style={{
          background: 'rgba(17,24,39,0.8)',
          border: '1px solid #1f2937',
          borderTop: '2px solid #f0b429',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(240,180,41,0.5)'
          e.currentTarget.style.boxShadow = '0 0 24px rgba(240,180,41,0.08), 0 12px 40px rgba(0,0,0,0.5)'
          e.currentTarget.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#1f2937'
          e.currentTarget.style.borderTopColor = '#f0b429'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Card header */}
        <div className="px-5 pt-5 pb-3 flex items-start justify-between gap-2">
          <div>
            <span
              className="text-[0.55rem] tracking-widest uppercase"
              style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4b5563' }}
            >
              {project.index} · {project.category}
            </span>
          </div>
          <span className={project.status === 'LIVE' ? 'status-live' : 'status-delivered'}>
            {project.status}
          </span>
        </div>

        {/* Title */}
        <div className="px-5 pb-3">
          <h3
            className="text-sm font-bold text-[#f9fafb] leading-snug"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            {project.title}
          </h3>
          <p
            className="text-[0.65rem] mt-1 tracking-wide"
            style={{ fontFamily: '"JetBrains Mono", monospace', color: '#f0b429', opacity: 0.7 }}
          >
            {project.company}
          </p>
        </div>

        {/* Description */}
        <div className="px-5 pb-4 flex-1">
          <p className="text-[0.78rem] leading-relaxed" style={{ color: '#6b7280' }}>
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div
          className="px-5 pb-5 pt-3 border-t flex flex-wrap gap-1.5"
          style={{ borderColor: '#1f2937' }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] px-2 py-0.5 rounded-sm"
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                background: `${tagColors[tag] || '#9ca3af'}15`,
                border: `1px solid ${tagColors[tag] || '#9ca3af'}30`,
                color: tagColors[tag] || '#9ca3af',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [sectionRef, sectionVisible] = useInView(0.05)

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="divider mb-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="mb-12 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="section-title mb-2">// 03</p>
            <h2 className="section-heading text-2xl sm:text-3xl text-[#f9fafb]">
              Key <span style={{ color: '#f0b429' }}>Projects</span>
            </h2>
            <div className="mt-3 w-16 h-px bg-[#f0b429]" />
          </div>
          <span
            className="text-[0.65rem] tracking-widest uppercase pb-1"
            style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4b5563' }}
          >
            {projects.length} Projects · HIPE Japan Inc.
          </span>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              visible={sectionVisible}
              delay={`${i * 0.08}s`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
