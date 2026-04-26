const tickerItems = [
  'React', 'TypeScript', 'Vue.js', 'Node.js', 'Next.js', 'React Native',
  'AWS Lambda', 'PostgreSQL', 'Laravel', 'Java', 'Tailwind CSS', 'Prisma ORM',
  'Express.js', 'MySQL', 'REST API', 'OAuth 2.0', 'SAML', 'Zustand',
  'JavaScript', 'HTML5', 'CSS3', 'Git', 'PHP', 'Pinia',
]

const tickerDouble = [...tickerItems, ...tickerItems]

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden scanline"
      style={{ paddingTop: '56px' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(240,180,41,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-20 left-6 w-12 h-12 border-l border-t border-[rgba(240,180,41,0.2)]" />
      <div className="absolute top-20 right-6 w-12 h-12 border-r border-t border-[rgba(240,180,41,0.2)]" />
      <div className="absolute bottom-24 left-6 w-12 h-12 border-l border-b border-[rgba(240,180,41,0.2)]" />
      <div className="absolute bottom-24 right-6 w-12 h-12 border-r border-b border-[rgba(240,180,41,0.2)]" />

      {/* Status bar (top-right terminal-style) */}
      <div
        className="absolute top-20 right-10 hidden lg:flex items-center gap-3 text-[0.6rem] tracking-widest uppercase"
        style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4b5563' }}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          Available for work
        </span>
        <span style={{ color: '#1f2937' }}>|</span>
        <span>Cebu City, PH</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start gap-6">
        {/* Label */}
        <div
          className="flex items-center gap-3 text-[0.65rem] tracking-widest uppercase"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6b7280' }}
          role="text"
        >
          <span className="w-8 h-px bg-[#f0b429]" />
          Portfolio · 2025
          <span className="w-8 h-px bg-[#f0b429]" />
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            color: '#f9fafb',
            animation: 'fadeUp 0.7s ease forwards',
          }}
        >
          GILBERT
          <br />
          <span style={{ color: '#f0b429' }}>TAJADA</span>
        </h1>

        {/* Title with cursor */}
        <div
          className="flex items-center gap-2 text-lg sm:text-2xl font-light tracking-[0.3em] uppercase"
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            color: '#9ca3af',
            animation: 'fadeUp 0.7s 0.15s ease both',
          }}
        >
          SOFTWARE ENGINEER
          <span
            className="inline-block w-0.5 h-6 bg-[#f0b429] ml-1"
            style={{ animation: 'blink 1s step-end infinite' }}
          />
        </div>

        {/* Tagline */}
        <p
          className="text-sm sm:text-base text-[#6b7280] tracking-wider max-w-xl"
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            animation: 'fadeUp 0.7s 0.3s ease both',
          }}
        >
          <span style={{ color: '#f0b429' }}>4+ Years</span>
          {' · Full-Stack · '}
          <span style={{ color: '#f0b429' }}>React</span>
          {' · Node.js · '}
          <span style={{ color: '#f0b429' }}>AWS</span>
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-3 mt-2"
          style={{ animation: 'fadeUp 0.7s 0.45s ease both' }}
        >
          <button className="btn-gold" onClick={scrollToProjects}>
            View Projects
          </button>
          <button className="btn-outline" onClick={scrollToContact}>
            Contact Me
          </button>
        </div>
      </div>

      {/* Ticker bar */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t"
        style={{ borderColor: 'rgba(31,41,55,0.8)', background: 'rgba(10,14,26,0.9)' }}
      >
        {/* Ticker label */}
        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-4 text-[0.6rem] tracking-widest uppercase"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              color: '#f0b429',
              background: 'linear-gradient(90deg, #0a0e1a 70%, transparent)',
              minWidth: '100px',
            }}
          >
            TECH STACK
          </div>
          <div
            className="absolute right-0 top-0 bottom-0 z-10"
            style={{ background: 'linear-gradient(270deg, #0a0e1a 70%, transparent)', minWidth: '60px' }}
          />
          <div className="ticker-wrapper py-2.5">
            <div className="ticker-content">
              {tickerDouble.map((item, i) => (
                <span
                  key={i}
                  className="mx-5 text-[0.65rem] uppercase tracking-widest"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    color: i % 5 === 0 ? '#f0b429' : '#4b5563',
                  }}
                >
                  {item}
                  <span className="ml-5 text-[#1f2937]">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
