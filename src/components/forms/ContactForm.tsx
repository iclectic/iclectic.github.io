'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'

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
    const nextErrors: Record<string, string> = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setErrors({ ...errors, [event.target.name]: '' })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mblkkjyq', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (response.ok) {
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
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center dark:border-green-900 dark:bg-green-900/20">
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
          className="mb-1.5 block text-body-sm font-medium text-foreground dark:text-foreground-dark"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full rounded-lg border bg-background px-4 py-2.5 text-body text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent dark:bg-background-dark dark:text-foreground-dark ${
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
          className="mb-1.5 block text-body-sm font-medium text-foreground dark:text-foreground-dark"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full rounded-lg border bg-background px-4 py-2.5 text-body text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent dark:bg-background-dark dark:text-foreground-dark ${
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
          className="mb-1.5 block text-body-sm font-medium text-foreground dark:text-foreground-dark"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`w-full resize-y rounded-lg border bg-background px-4 py-2.5 text-body text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent dark:bg-background-dark dark:text-foreground-dark ${
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
