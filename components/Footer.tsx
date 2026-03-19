import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-grey/20 bg-warm-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <Link href="/" className="text-4xl font-display font-bold tracking-tighter mb-6 flex items-center gap-3">
              <img src="/logo.png" alt="Maxinor Logo" className="w-10 h-10 rounded-[99px] object-cover" />
              MAXINOR
            </Link>
            <p className="text-grey max-w-sm">
              We Scale &amp; Build, Not Just Back Startups. India&apos;s 1st Operator Led Venture Studio.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center gap-6">
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/maxinor" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-grey/50 flex items-center justify-center hover:bg-brand hover:text-warm-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:mango@mlabs.co.in" className="w-12 h-12 rounded-full border border-grey/50 flex items-center justify-center hover:bg-brand hover:text-warm-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-grey/20 text-sm text-grey/60 gap-4">
          <p>© {new Date().getFullYear()} Maxinor Venture Studio. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/scale" className="hover:text-brand transition-colors">Venture Scale</Link>
            <Link href="/build" className="hover:text-brand transition-colors">Venture Build</Link>
            <Link href="/startups" className="hover:text-brand transition-colors">Startups</Link>
            <Link href="/investors" className="hover:text-brand transition-colors">Investors</Link>
            <Link href="/corporate" className="hover:text-brand transition-colors">Corporate</Link>
            <Link href="/team" className="hover:text-brand transition-colors">Team</Link>
            <Link href="/privacy" className="hover:text-brand transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
