import { useState } from 'react'

const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15040.109469846204!2d77.0315944426454!3d19.540438580169287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd048ee4b08cf13%3A0x5fe349212cb14a3e!2sAundha%20Nagnath%2C%20Maharashtra%20431705!5e0!3m2!1sen!2sin!4v1692189623520!5m2!1sen!2sin'

export default function Contact({ theme = 'light', onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' })
  const isLight = theme === 'light'

  const cardBg = isLight ? 'bg-white border-slate-100 shadow-lg' : 'bg-slate-800 border-slate-700 shadow-xl shadow-slate-900/50'
  const headingCls = isLight ? 'text-text-primary' : 'text-white'
  const textCls = isLight ? 'text-text-muted' : 'text-slate-400'
  const inputCls = isLight
    ? 'border-slate-200 text-text-primary bg-white placeholder:text-slate-500'
    : 'border-slate-600 text-white bg-slate-700 placeholder:text-slate-400'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now: show success and clear form (no backend call)
    onShowToast('Successfully sent!', 'success')
    setFormData({ name: '', email: '', number: '', message: '' })
  }

  return (
    <section id="contact" className="min-h-screen pt-12 sm:pt-20 transition-colors duration-300">
      <div className="mb-8 sm:mb-12">
        <h1 className={`text-3xl sm:text-4xl md:text-[3.5rem] pb-3 font-bold uppercase tracking-tight ${headingCls}`}>
          contact <span className="text-main">me</span>
        </h1>
        <p className={`${textCls} text-[1.4rem] sm:text-[1.6rem] max-w-2xl leading-relaxed`}>
          Have a project in mind or want to work together? Drop a message — I'll get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
        <a href="mailto:izaheerkhan21@gmail.com" className={`group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border hover:shadow-xl hover:border-main/20 transition-all duration-300 ${cardBg}`}>
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-main text-white text-xl sm:text-2xl shadow-md group-hover:scale-110 group-hover:bg-main-dark transition-all duration-300 mb-3 sm:mb-4">
            <i className="fas fa-envelope" aria-hidden />
          </div>
          <h3 className={`${headingCls} text-[1.8rem] sm:text-2xl font-bold uppercase tracking-wide mb-2`}>Email</h3>
          <p className={`${textCls} text-[1.4rem] sm:text-[1.5rem] lowercase break-all`}>izaheerkhan21@gmail.com</p>
          <p className={`${textCls} text-[1.4rem] sm:text-[1.5rem] lowercase break-all`}>jahirkhanis665@gmail.com</p>
        </a>
        <a href="tel:+918766806557" className={`group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border hover:shadow-xl hover:border-main/20 transition-all duration-300 ${cardBg}`}>
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-main text-white text-xl sm:text-2xl shadow-md group-hover:scale-110 group-hover:bg-main-dark transition-all duration-300 mb-3 sm:mb-4">
            <i className="fas fa-phone" aria-hidden />
          </div>
          <h3 className={`${headingCls} text-[1.8rem] sm:text-2xl font-bold uppercase tracking-wide mb-2`}>Phone</h3>
          <p className={`${textCls} text-[1.4rem] sm:text-[1.5rem]`}>+91-8766806557</p>
          <p className={`${textCls} text-[1.4rem] sm:text-[1.5rem]`}>+91-9272167719</p>
        </a>
        <div className={`group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border transition-colors duration-300 ${cardBg} sm:col-span-2 xl:col-span-1`}>
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-main text-white text-xl sm:text-2xl shadow-md mb-3 sm:mb-4">
            <i className="fas fa-map-marker-alt" aria-hidden />
          </div>
          <h3 className={`${headingCls} text-[1.8rem] sm:text-2xl font-bold uppercase tracking-wide mb-2`}>Address</h3>
          <p className={`${textCls} text-[1.4rem] sm:text-[1.5rem] leading-relaxed`}>near police station, Aundha Nagnath, Hingoli, India — 431705</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 items-stretch xl:items-start">
        <form onSubmit={handleSubmit} className={`flex-1 min-w-0 max-w-2xl w-full p-6 sm:p-8 rounded-2xl border transition-colors duration-300 ${cardBg}`}>
          <h3 className={`${headingCls} text-[1.8rem] sm:text-[2rem] font-bold uppercase tracking-wide mb-5 sm:mb-6`}>Send a message</h3>
          <div className="space-y-3 sm:space-y-4">
            <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-3 text-[1.4rem] sm:text-[1.6rem] outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all ${inputCls}`} />
            <input type="email" placeholder="Your email" name="email" value={formData.email} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-3 text-[1.4rem] sm:text-[1.6rem] outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all ${inputCls}`} />
            <input type="tel" placeholder="Your number" name="number" value={formData.number} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-3 text-[1.4rem] sm:text-[1.6rem] outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all ${inputCls}`} />
            <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required rows={5} className={`w-full border-2 rounded-lg px-4 py-3 text-[1.4rem] sm:text-[1.6rem] min-h-[12rem] resize-y outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all ${inputCls}`} />
          </div>
          <button type="submit" className="mt-6 py-3 px-8 sm:px-10 bg-main text-white text-[1.5rem] sm:text-[1.6rem] font-medium rounded-xl hover:bg-main-dark transition-all duration-200 border-0 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2">
            Send message
          </button>
        </form>
        <div className={`flex-1 min-w-0 min-h-[280px] sm:min-h-[340px] overflow-hidden rounded-2xl shadow-lg border ${isLight ? 'border-slate-100' : 'border-slate-700'}`}>
          <iframe title="Location map" src={MAP_EMBED} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full min-h-[280px] sm:min-h-[340px] sm:h-[380px] block" />
        </div>
      </div>
    </section>
  )
}
