import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// ─── EmailJS config ───────────────────────────────────────────────────────────
// Replace these three values after setting up your EmailJS account:
//   1. Go to https://www.emailjs.com and sign up (free)
//   2. Add a Gmail service (Email Services → Add Service → Gmail)
//      → copy the Service ID here
//   3. Create an email template (Email Templates → Create Template)
//      Use these variables in the template body:
//        From: {{from_name}} <{{from_email}}>
//        Message: {{message}}
//      → copy the Template ID here
//   4. Go to Account → API Keys → copy your Public Key here
const EMAILJS_SERVICE_ID  = 'service_j551o9q'
const EMAILJS_TEMPLATE_ID = 'template_a020gje'
const EMAILJS_PUBLIC_KEY  = 'CZTizkEst4YrVsvfa'
// ─────────────────────────────────────────────────────────────────────────────

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

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'gibotajada@gmail.com',
    href: 'mailto:gibotajada@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+63 935 218 7166',
    href: 'tel:+639352187166',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Sanciangko St., Cebu City',
    href: null,
  },
]

export default function Contact() {
  const [sectionRef, sectionVisible] = useInView(0.05)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef(null)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSending(true)

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_email: 'gibotajada@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSending(false)
        setSent(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      })
      .catch((err) => {
        setSending(false)
        setError('Failed to send. Please email me directly at gibotajada@gmail.com')
        console.error('EmailJS error:', err)
      })
  }

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div className="divider mb-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="mb-12">
          <p className="section-title mb-2">// 05</p>
          <h2 className="section-heading text-2xl sm:text-3xl text-[#f9fafb]">
            Get in <span style={{ color: '#f0b429' }}>Touch</span>
          </h2>
          <div className="mt-3 w-16 h-px bg-[#f0b429]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Contact info */}
          <div
            className={`fade-in ${sectionVisible ? 'visible' : ''} flex flex-col gap-4`}
            style={{ transitionDelay: '0.05s' }}
          >
            <p
              className="text-sm leading-relaxed mb-2"
              style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}
            >
              Open to new opportunities, collaborations, or just a good conversation about tech.
              Feel free to reach out through any channel below.
            </p>

            {contactInfo.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4"
                style={{
                  background: 'rgba(17,24,39,0.6)',
                  border: '1px solid #1f2937',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(240,180,41,0.3)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1f2937' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-base shrink-0"
                  style={{
                    background: 'rgba(240,180,41,0.08)',
                    border: '1px solid rgba(240,180,41,0.2)',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-[0.6rem] tracking-widest uppercase mb-0.5"
                    style={{ fontFamily: '"JetBrains Mono", monospace', color: '#f0b429' }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-[#f9fafb] hover:text-[#f0b429] transition-colors duration-200"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm text-[#f9fafb]"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Download CV */}
            <div
              className="mt-4 p-5 border"
              style={{ background: 'rgba(17,24,39,0.4)', borderColor: 'rgba(240,180,41,0.15)', borderLeft: '3px solid #f0b429' }}
            >
              <p
                className="text-[0.65rem] tracking-widest uppercase mb-3"
                style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6b7280' }}
              >
                Prefer a PDF?
              </p>
              <p
                className="text-sm text-[#9ca3af] mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Download my full CV for a detailed overview of my experience and skills.
              </p>
              <a href="/Gilbert_Tajada_CV.pdf" download className="btn-gold inline-block">
                Download CV
              </a>
            </div>
          </div>

          {/* Right — Contact form */}
          <div
            className={`fade-in ${sectionVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="card-glass rounded overflow-hidden">
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-5 py-3 border-b"
                style={{ background: 'rgba(17,24,39,0.8)', borderColor: '#1f2937' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f0b429] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
                <span
                  className="ml-3 text-[0.6rem] tracking-widest uppercase"
                  style={{ fontFamily: '"JetBrains Mono", monospace', color: '#4b5563' }}
                >
                  new_message.send()
                </span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label
                    className="block text-[0.6rem] tracking-widest uppercase mb-2"
                    style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6b7280' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="input-terminal"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-[0.6rem] tracking-widest uppercase mb-2"
                    style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6b7280' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="input-terminal"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-[0.6rem] tracking-widest uppercase mb-2"
                    style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6b7280' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="input-terminal resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-3 mt-2">
                  <button
                    type="submit"
                    className="btn-gold w-full text-center"
                    disabled={sending || sent}
                    style={{ opacity: sending ? 0.8 : 1 }}
                  >
                    {sending ? 'Transmitting...' : sent ? 'Message Sent ✓' : 'Send Message'}
                  </button>

                  {sent && (
                    <p
                      className="text-center text-[0.7rem] tracking-wide"
                      style={{ fontFamily: '"JetBrains Mono", monospace', color: '#10b981' }}
                    >
                      ✓ Message delivered to gibotajada@gmail.com
                    </p>
                  )}

                  {error && (
                    <p
                      className="text-center text-[0.7rem] tracking-wide"
                      style={{ fontFamily: '"JetBrains Mono", monospace', color: '#ef4444' }}
                    >
                      ✗ {error}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
