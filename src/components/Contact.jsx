import { useState } from 'react'
import { useSendMessage } from '../hooks/useSendMessage'

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' })
  const { send, loading } = useSendMessage()

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await send(formData)
      onShowToast('Successfully sent!', 'success')
      setFormData({ name: '', email: '', number: '', message: '' })
    } catch (err) {
      onShowToast(err?.message ?? 'Failed to send message. Try again.', 'error')
    }
  }

  return (
    <section id="contact" className="min-h-screen pt-12 sm:pt-20">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] pb-3 font-bold uppercase tracking-tight text-text-primary">
          contact <span className="text-main">me</span>
        </h1>
        <p className="text-text-muted text-[1.4rem] sm:text-[1.6rem] max-w-2xl leading-relaxed">
          Have a project in mind or want to work together? Drop a message — I'll get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
        <a href="mailto:izaheerkhan21@gmail.com" className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-main-dark/20 bg-card hover:shadow-xl hover:border-main/20 transition-all duration-300 shadow-lg">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-main text-white text-xl sm:text-2xl shadow-md group-hover:scale-110 group-hover:bg-main-dark transition-all duration-300 mb-3 sm:mb-4">
            <i className="fas fa-envelope" aria-hidden />
          </div>
          <h3 className="text-text-primary text-[1.8rem] sm:text-2xl font-bold uppercase tracking-wide mb-2">Email</h3>
          <p className="text-text-muted text-[1.4rem] sm:text-[1.5rem] lowercase break-all">izaheerkhan21@gmail.com</p>
          <p className="text-text-muted text-[1.4rem] sm:text-[1.5rem] lowercase break-all">jahirkhanis665@gmail.com</p>
        </a>
        <a href="tel:+918766806557" className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-main-dark/20 bg-card hover:shadow-xl hover:border-main/20 transition-all duration-300 shadow-lg">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-main text-white text-xl sm:text-2xl shadow-md group-hover:scale-110 group-hover:bg-main-dark transition-all duration-300 mb-3 sm:mb-4">
            <i className="fas fa-phone" aria-hidden />
          </div>
          <h3 className="text-text-primary text-[1.8rem] sm:text-2xl font-bold uppercase tracking-wide mb-2">Phone</h3>
          <p className="text-text-muted text-[1.4rem] sm:text-[1.5rem]">+91-8766806557</p>
          <p className="text-text-muted text-[1.4rem] sm:text-[1.5rem]">+91-9272167719</p>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-10 items-start">
        <form onSubmit={handleSubmit} className="w-full p-6 sm:p-8 rounded-2xl border border-main-dark/20 bg-card shadow-lg">
          <h3 className="text-text-primary text-[1.8rem] sm:text-[2rem] font-bold uppercase tracking-wide mb-5 sm:mb-6">Send a message</h3>
          <div className="space-y-3 sm:space-y-4">
            <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required className="w-full border-2 border-main-dark/20 rounded-lg px-4 py-3 text-[1.4rem] sm:text-[1.6rem] outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all text-text-primary bg-body placeholder:text-text-muted" />
            <input type="email" placeholder="Your email" name="email" value={formData.email} onChange={handleChange} required className="w-full border-2 border-main-dark/20 rounded-lg px-4 py-3 text-[1.4rem] sm:text-[1.6rem] outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all text-text-primary bg-body placeholder:text-text-muted" />
            <input type="tel" placeholder="Your number" name="number" value={formData.number} onChange={handleChange} required className="w-full border-2 border-main-dark/20 rounded-lg px-4 py-3 text-[1.4rem] sm:text-[1.6rem] outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all text-text-primary bg-body placeholder:text-text-muted" />
            <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required rows={5} className="w-full border-2 border-main-dark/20 rounded-lg px-4 py-3 text-[1.4rem] sm:text-[1.6rem] min-h-[12rem] resize-y outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all text-text-primary bg-body placeholder:text-text-muted" />
          </div>
          <button type="submit" disabled={loading} className="mt-6 py-3 px-8 sm:px-10 bg-main text-white text-[1.5rem] sm:text-[1.6rem] font-medium rounded-xl hover:bg-main-dark transition-all duration-200 border-0 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed">
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </form>

        <aside className="flex flex-col gap-5">
          <div className="p-6 sm:p-7 rounded-2xl border border-main-dark/20 bg-card shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-main/15 text-main mb-4">
              <i className="fas fa-paper-plane text-xl" aria-hidden />
            </div>
            <h4 className="text-text-primary text-[1.5rem] font-bold uppercase tracking-wide mb-2">Let's work together</h4>
            <p className="text-text-muted text-[1.35rem] leading-relaxed">
              Open to full-time, freelance, and contract work. Tell me about your project.
            </p>
          </div>
          <div className="p-6 sm:p-7 rounded-2xl border border-main-dark/20 bg-card shadow-lg">
            <h4 className="text-text-primary text-[1.5rem] font-bold uppercase tracking-wide mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/in/zaheerk1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-body/80 hover:bg-main hover:text-white text-text-muted transition-colors duration-200 group" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-2xl text-main group-hover:text-white transition-colors" aria-hidden />
                <span className="text-[1.35rem] font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/ZaheerK-pro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-body/80 hover:bg-main hover:text-white text-text-muted transition-colors duration-200 group" aria-label="GitHub">
                <i className="fab fa-github text-2xl text-main group-hover:text-white transition-colors" aria-hidden />
                <span className="text-[1.35rem] font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
