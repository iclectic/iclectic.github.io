import { useState, FormEvent } from 'react'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import { siteConfig } from '@/lib/siteConfig'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = 'Please enter a valid email address.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Ibim Braide. I am always open to interesting conversations about engineering, community, and collaboration."
        url="/contact"
      />

      <section className="pt-20 pb-20 md:pt-28">
        <Container>
          <div className="mx-auto max-w-xl">
            <h1 className="font-display text-h1 text-foreground dark:text-foreground-dark">
              Get in touch
            </h1>
            <p className="mt-4 text-body text-muted dark:text-muted-dark">
              I am always open to interesting conversations about engineering,
              community building, open source, or potential collaboration. Drop me a
              message and I will get back to you.
            </p>

            {/* Availability */}
            <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-4">
              <p className="text-body-sm text-foreground dark:text-foreground-dark">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
                Currently open to remote roles, speaking engagements, and open source collaboration.
              </p>
            </div>

            {/* Direct links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-accent dark:text-muted-dark transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteConfig.author.email}
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-accent dark:text-muted-dark transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-accent dark:text-muted-dark transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>

            {/* Form */}
            <div className="mt-12">
              {submitted ? (
                <div className="rounded-lg border border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/20 p-6 text-center">
                  <p className="text-body font-medium text-green-800 dark:text-green-300">
                    Thank you for reaching out. I will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {errors.general && (
                    <p className="text-body-sm text-red-600 dark:text-red-400">
                      {errors.general}
                    </p>
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
                        errors.name
                          ? 'border-red-500'
                          : 'border-border dark:border-border-dark'
                      }`}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-caption text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
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
                        errors.email
                          ? 'border-red-500'
                          : 'border-border dark:border-border-dark'
                      }`}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-caption text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
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
                        errors.message
                          ? 'border-red-500'
                          : 'border-border dark:border-border-dark'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-caption text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
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
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
