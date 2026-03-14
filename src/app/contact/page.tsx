import ContactForm from '@/components/forms/ContactForm'
import Button from '@/components/primitives/Button'
import Container from '@/components/primitives/Container'
import { siteSettings } from '@/data/site'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Get in touch about freelance engineering, community work, or collaboration.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <section className="pt-20 pb-20 md:pt-28">
      <Container>
        <div className="mx-auto max-w-xl">
          <p className="text-caption uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Contact
          </p>
          <h1 className="mt-4 font-display text-h1 text-foreground dark:text-foreground-dark">
            Get in touch
          </h1>
          <p className="mt-4 text-body text-muted dark:text-muted-dark">
            I welcome thoughtful conversations about freelance engineering, community building, open source, and
            collaboration. Share your goals and I will respond with clear next steps.
          </p>

          <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-4">
            <p className="text-body-sm text-foreground dark:text-foreground-dark">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
              Open to freelance engagements focused on mobile and full stack delivery, speaking invitations, and open
              source collaboration.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${siteSettings.author.email}`} variant="secondary">
              {siteSettings.author.email}
            </Button>
            <Button href={siteSettings.author.linkedin} variant="ghost" external>
              LinkedIn
            </Button>
            <Button href={siteSettings.author.github} variant="ghost" external>
              GitHub
            </Button>
          </div>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
