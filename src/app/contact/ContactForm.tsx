'use client'

import { useState } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

type Status = 'idle' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="border border-neutral-200 bg-neutral-50 p-8">
        <h3 className="font-bebas-neue text-3xl uppercase text-brand-dark">Thank you</h3>
        <p className="font-poppins mt-3 text-sm leading-relaxed text-neutral-600">
          We have received your message and look forward to a wonderful business partnership ahead.
          Our team will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          className="contact-input"
          name="firstName"
          placeholder="First name *"
          value={form.firstName}
          onChange={update('firstName')}
          autoComplete="given-name"
          required
        />
        <input
          className="contact-input"
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={update('lastName')}
          autoComplete="family-name"
        />
      </div>
      <input
        className="contact-input"
        name="email"
        type="email"
        placeholder="Email address *"
        value={form.email}
        onChange={update('email')}
        autoComplete="email"
        required
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          className="contact-input"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={update('company')}
          autoComplete="organization"
        />
        <input
          className="contact-input"
          name="phone"
          type="tel"
          placeholder="Contact number"
          value={form.phone}
          onChange={update('phone')}
          autoComplete="tel"
        />
      </div>
      <textarea
        className="contact-input min-h-[140px] resize-y"
        name="message"
        placeholder="Your message *"
        value={form.message}
        onChange={update('message')}
        required
      />
      {status === 'error' && (
        <p className="font-poppins text-sm text-brand-blue">Please fill in name, email, and message.</p>
      )}
      <div className="btn-red-wrap inline-flex w-full max-w-[240px] pt-6 sm:w-[218px] sm:max-w-none">
        <button
          type="submit"
          className="btn-red inline-flex h-12 min-h-12 w-full items-center justify-center gap-2 px-6 text-xs font-medium uppercase tracking-wider sm:h-[66px] sm:min-h-[66px]"
        >
          Send Message
          <span className="btn-red__arrow" aria-hidden>
            <LuArrowUpRight size={18} />
          </span>
        </button>
      </div>
    </form>
  )
}
