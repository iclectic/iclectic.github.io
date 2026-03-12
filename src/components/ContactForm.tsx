'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'

interface FormState {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/mblkkjyq', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setErrors({ general: 'Something went wrong. Please try again.' })
      }
    } catch {
      setErrors({ general: 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/20 p-6 text-center">
        <p className="text-body font-medium text-green-800 dark:text-green-300">
          Thank you for reaching out. I will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {errors.general && (
        <p className="text-body-sm text-red-600 dark:text-red-400">{errors.general}</p>
      )}
      <div>
        <label
          htmlFor="name"
          className="block text-body-sm font-medium text-foreground dark:text-foreground-dark mb-1.5"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full rounded-lg border bg-background px-4 py-2.5 text-body text-foreground transition-colors dark:bg-background-dark dark:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.name ? 'border-red-500' : 'border-border dark:border-border-dark'
          }`}
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1 text-caption text-red-600 dark:text-red-400">{errors.name}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-body-sm font-medium text-foreground dark:text-foreground-dark mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full rounded-lg border bg-background px-4 py-2.5 text-body text-foreground transition-colors dark:bg-background-dark dark:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.email ? 'border-red-500' : 'border-border dark:border-border-dark'
          }`}
          autoComplete="email"
        />
        {errors.email && (
          <p className="mt-1 text-caption text-red-600 dark:text-red-400">{errors.email}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-body-sm font-medium text-foreground dark:text-foreground-dark mb-1.5"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`w-full rounded-lg border bg-background px-4 py-2.5 text-body text-foreground transition-colors dark:bg-background-dark dark:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-accent resize-y ${
            errors.message ? 'border-red-500' : 'border-border dark:border-border-dark'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-caption text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-foreground px-6 py-3 text-body font-semibold text-background transition-colors hover:bg-foreground/80 disabled:opacity-60 dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-foreground-dark/80"
      >
        {submitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
