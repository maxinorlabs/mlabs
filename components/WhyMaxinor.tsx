'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const items = [
  {
    id: '01',
    title: 'THE SCALE GAP',
    detail:
      '90% of Indian startups fail within 5 years. The problem usually is not the idea itself, but the lack of consistent execution, operator depth, and scale discipline.',
  },
  {
    id: '02',
    title: 'OPERATORS OVER ADVISORS',
    detail:
      'Studio startups reach Series A in 25 months vs. 56 months traditionally. Embedded operators who build with you \u2014 not consultants who leave after a deck.',
  },
  {
    id: '03',
    title: 'FOUR ENGINES, NOT ONE FIX',
    detail:
      "Revenue, Operations, Talent, AI & Data \u2014 synchronized growth across every lever, each led by someone who's scaled before.",
  },
  {
    id: '04',
    title: 'MILESTONE-FIRST CAPITAL',
    detail:
      'We prove value through embedded execution before deploying capital. Skin in the game \u2014 not just a term sheet.',
  },
];

export default function WhyMaxinor() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative overflow-hidden py-32 px-6 border-y border-brand/10 bg-[linear-gradient(180deg,rgba(243,111,33,0.05)_0%,rgba(255,255,255,0.92)_18%,rgba(247,247,245,1)_100%)]">
      <div className="absolute left-1/2 top-0 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-brand/8 blur-[90px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] border border-brand/15 bg-white/75 backdrop-blur-sm px-6 py-12 md:px-12 md:py-14 shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
          <div className="text-center mb-16">
            <h3 className="text-sm font-display font-black tracking-[0.2em] text-brand uppercase mb-6">
              Why Maxinor
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-navy text-center max-w-3xl mx-auto leading-tight">
              &ldquo;Building startups is hard, but scaling them without operators is harder&rdquo;
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {items.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    className={`overflow-hidden rounded-[2rem] border transition-colors duration-300 ${
                      isActive ? 'border-brand/30 bg-white shadow-sm' : 'border-brand/15 bg-brand/5'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="w-full text-left p-6 md:p-8"
                    >
                      <div className="flex items-center gap-4 md:gap-6">
                        <span className="text-3xl md:text-4xl font-display font-medium text-navy/20">
                          {item.id}
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="block text-base md:text-lg font-bold text-navy tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                            isActive ? 'border-brand/20 bg-brand/10 text-brand' : 'border-grey/30 text-navy/50'
                          }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key={`${item.id}-detail`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 md:px-8 md:pb-8">
                            <div className="border-t border-navy/10 pt-6">
                              <p className="max-w-3xl text-base md:text-lg text-navy/80 font-light leading-relaxed">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand text-warm-white font-medium tracking-wide rounded-full hover:bg-brand/90 transition-all duration-300 flex items-center justify-center shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
