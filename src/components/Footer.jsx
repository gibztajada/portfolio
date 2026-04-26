export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: '#1f2937', background: 'rgba(10,14,26,0.9)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left — logo + name */}
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 flex items-center justify-center text-[0.6rem] font-black text-[#0a0e1a]"
            style={{
              background: '#f0b429',
              clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))',
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            GT
          </div>
          <span
            className="text-[0.65rem] tracking-widest uppercase"
            style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4b5563' }}
          >
            Gilbert Tajada · Software Engineer
          </span>
        </div>

        {/* Center — copyright */}
        <span
          className="text-[0.6rem] tracking-widest"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#374151' }}
        >
          © {year} · All rights reserved
        </span>

        {/* Right — built with */}
        <span
          className="text-[0.6rem] tracking-widest"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#374151' }}
        >
          Built with{' '}
          <span style={{ color: '#f0b429' }}>React</span>
          {' + '}
          <span style={{ color: '#38bdf8' }}>Tailwind</span>
        </span>
      </div>
    </footer>
  )
}
