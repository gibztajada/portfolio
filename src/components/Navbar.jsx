import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10,14,26,0.97)'
          : 'rgba(10,14,26,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'rgba(240,180,41,0.2)' : 'rgba(31,41,55,0.8)',
        boxShadow: scrolled ? '0 0 24px rgba(240,180,41,0.06)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          <div
            className="w-8 h-8 flex items-center justify-center text-[#0a0e1a] text-xs font-black"
            style={{
              background: '#f0b429',
              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            GT
          </div>
          <span
            className="text-[#f9fafb] text-xs font-semibold tracking-widest uppercase hidden sm:block"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            Gilbert Tajada
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/Gilbert_Tajada_CV.pdf"
          download
          className="btn-gold hidden md:inline-block text-[0.65rem]"
        >
          Download CV
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 bg-[#f0b429] transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}
          />
          <span
            className="block w-5 h-0.5 bg-[#f0b429] transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-[#f0b429] transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          borderTop: menuOpen ? '1px solid rgba(31,41,55,0.8)' : 'none',
          background: 'rgba(10,14,26,0.98)',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-sm"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Gilbert_Tajada_CV.pdf"
            download
            className="btn-gold self-start mt-2 text-[0.65rem]"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
