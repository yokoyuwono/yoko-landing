'use client';

import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

const faqs = [
  {
    id: 1,
    question: 'How much data do you need from me?',
    answer: 'Just the basics: product/service, target audience, and primary goal (e.g., more WhatsApp chats or online sales). Everything else — structure, copy, and visuals — we handle together.',
  },
  {
    id: 2,
    question: 'Can I pay via bank transfer?',
    answer: 'Yes, bank transfer in USD or IDR. For international clients, Stripe is available with a 3% processing fee.',
  },
  {
    id: 3,
    question: 'How fast can you deliver?',
    answer: 'Standard delivery is 2-3 weeks. Express service (1 week) is available for an additional 50% fee. Rush jobs are possible with prior arrangement.',
  },
  {
    id: 4,
    question: 'Do you offer revisions?',
    answer: 'Yes — 2 rounds of revisions are included. Additional revisions cost $200 per round. Major changes after approval are billed separately.',
  },
  {
    id: 5,
    question: 'What if I need more than a single project?',
    answer: 'For ongoing work, I offer retainer partnerships at $3,000/month for 10 hours of design work — priority queueing and dedicated support.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = React.useState<number | null>(1);

  return (
    <section
      id="faq"
      className="py-24 md:py-32 lg:py-40 bg-surface-elevated"
      aria-labelledby="faq-title"
    >
      <div className="container-custom">
        <ScrollReveal variant="fade">
          <div className="max-w-3xl mb-16">
            <h2 id="faq-title" className="text-display-lg font-black tracking-tight text-balance">
              Questions?
            </h2>
            <p className="mt-6 text-body-lg text-text-muted max-w-xl">
              Everything you need to know about working together.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer delay={0.2} stagger={0.1}>
          <div className="border-t border-line">
            {faqs.map((faq) => (
              <StaggerItem key={faq.id} variant="slide-up">
                <details
                  className={cn(
                    'group border-b border-line/30 transition-all duration-300',
                    openId === faq.id ? 'open' : ''
                  )}
                  open={openId === faq.id}
                  onToggle={(e: React.SyntheticEvent<HTMLDetailsElement>) => {
                    setOpenId(e.currentTarget.open ? faq.id : null);
                  }}
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                    <span className="text-body font-medium text-text pr-8">
                      {faq.question}
                    </span>
                    <motion.div
                      className="flex-shrink-0 h-5 w-5 text-brand-yellow transition-transform duration-300"
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </motion.div>
                  </summary>
                  <motion.div
                    className="px-6 pb-6 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openId === faq.id ? 'auto' : 0,
                      opacity: openId === faq.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-body text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </details>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
