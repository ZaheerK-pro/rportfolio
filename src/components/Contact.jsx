import { useState } from 'react'
import { useSendMessage } from '../hooks/useSendMessage'
import SectionShell from './SectionShell'

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' })
  const { send, loading } = useSendMessage()

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await send(formData)
      onShowToast('Message sent successfully!', 'success')
      setFormData({ name: '', email: '', number: '', message: '' })
    } catch (err) {
      onShowToast(err?.message ?? 'Failed to send. Try again.', 'error')
    }
  }

  return (
    <SectionShell
      id="contact"
      number="07"
      title="Contact"
      subtitle={<>Let's <span className="gradient-text">Talk</span></>}
      description="Have a project in mind? Drop a message — I typically reply within 24 hours."
      variant="dark-band"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-3xl">
        <a href="mailto:izaheerkhan21@gmail.com" className="reveal-scale glass-card-hover p-6 sm:p-7 text-center neon-border group">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-white text-[1.6rem] mb-4 group-hover:scale-105 transition-transform shadow-glow-sm">
            <i className="fas fa-envelope" />
          </div>
          <h3 className="font-display text-[1.65rem] font-extrabold text-text-primary">Email</h3>
          <p className="text-[1.2rem] text-text-muted mt-2 lowercase break-all">izaheerkhan21@gmail.com</p>
        </a>
        <a href="tel:+918766806557" className="reveal-scale glass-card-hover p-6 sm:p-7 text-center neon-border group">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-white text-[1.6rem] mb-4 group-hover:scale-105 transition-transform shadow-glow-sm">
            <i className="fas fa-phone" />
          </div>
          <h3 className="font-display text-[1.65rem] font-extrabold text-text-primary">Phone</h3>
          <p className="text-[1.2rem] text-text-muted mt-2">+91-8766806557</p>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <form onSubmit={handleSubmit} className="reveal lg:col-span-3 glass-card p-7 sm:p-9 neon-border">
          <h3 className="font-display text-[2.2rem] font-extrabold text-text-primary mb-2">Send a message</h3>
          <p className="text-[1.25rem] text-text-muted mb-7 leading-[1.65]">Share your idea, timeline, and goals.</p>
          <div className="space-y-3.5">
            {[
              { name: 'name', type: 'text', placeholder: 'Your name', auto: 'name' },
              { name: 'email', type: 'email', placeholder: 'Your email', auto: 'email' },
              { name: 'number', type: 'tel', placeholder: 'Your number', auto: 'tel' },
            ].map((f) => (
              <input
                key={f.name}
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                autoComplete={f.auto}
                value={formData[f.name]}
                onChange={handleChange}
                required
                className="field-input"
              />
            ))}
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="field-input resize-y min-h-[13rem]"
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary mt-6 text-[1.3rem] w-full justify-center min-h-[5rem] disabled:opacity-50 disabled:pointer-events-none">
            {loading ? 'Sending...' : <>Send Message <i className="fas fa-paper-plane" /></>}
          </button>
        </form>

        <aside className="reveal lg:col-span-2 flex flex-col gap-5">
          <div className="glass-card p-7 neon-border">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent text-white text-2xl mb-5 shadow-glow-sm">
              <i className="fas fa-paper-plane" />
            </div>
            <h4 className="font-display text-[1.75rem] font-extrabold text-text-primary mb-2">Let's collaborate</h4>
            <p className="text-[1.25rem] text-text-muted leading-[1.65] mb-4">
              Open to full-time, freelance, and contract work. Tell me about your project and I'll get back to you soon.
            </p>
            <ul className="space-y-2.5 mb-6">
              {['Full-time roles', 'Freelance projects', 'Contract work'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[1.2rem] text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-2.5 pt-5 border-t border-border">
              {[
                { href: 'https://www.linkedin.com/in/zaheerk1', icon: 'fab fa-linkedin', label: 'LinkedIn' },
                { href: 'https://github.com/ZaheerK-pro', icon: 'fab fa-github', label: 'GitHub' },
                { href: 'https://www.instagram.com/im__zaheerk/', icon: 'fab fa-instagram', label: 'Instagram' },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-xl glass text-accent text-[1.6rem] hover:bg-accent hover:text-white hover:shadow-glow transition-all">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </SectionShell>
  )
}
