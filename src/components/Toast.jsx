import { useEffect } from 'react'

export default function Toast({ message, type, visible, onHide }) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onHide, 3000)
    return () => clearTimeout(t)
  }, [visible, onHide])

  if (!visible) return null

  return (
    <div
      role="alert"
      className={`fixed top-6 right-6 left-6 sm:left-auto sm:max-w-md min-w-[280px] py-6 px-8 rounded-2xl text-[1.6rem] sm:text-[1.8rem] font-semibold z-[10001] toast-enter shadow-2xl ${
        type === 'success' ? 'bg-main text-white' : 'bg-red-500 text-white'
      }`}
    >
      <span className="flex items-center gap-3">
        {type === 'success' ? (
          <i className="fas fa-check-circle text-[2rem] shrink-0" aria-hidden />
        ) : (
          <i className="fas fa-exclamation-circle text-[2rem] shrink-0" aria-hidden />
        )}
        {message}
      </span>
    </div>
  )
}
