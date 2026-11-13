import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MapPin, Download, Send, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { profile, sectionMeta, miscIcons } from '@/data/site';

export function Contact() {
  const { icon, eyebrow, title } = sectionMeta.contact;
  const { ArrowUpRight: Arrow } = miscIcons;

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const WEB3FORMS_ACCESS_KEY = '7d7b10fa-303f-490b-8aee-ba79fedc0e4f';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: 'Gaurika Portfolio Contact',
          subject: `New Portfolio Message from ${formState.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" eyebrow={eyebrow} title={title} icon={icon}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-pretty text-lg leading-relaxed text-ash-300 md:text-xl"
            >
              I am open to full-time Software Engineering, Data Engineering, and Frontend roles.
              Let&apos;s discuss how I can contribute to your team and build high-impact solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2 font-mono text-sm text-ash-400">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </div>

              <a
                href="/resume/Gaurika_Pareek_Resume.pdf"
                download="Gaurika_Pareek_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-ash-700 bg-ash-950/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black active:scale-95"
                aria-label="Download Resume"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-8 space-y-4 rounded-2xl border border-ash-800 bg-ash-950/40 p-6 md:p-8"
          >
            <div className="flex items-center justify-between border-b border-ash-800 pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-ash-400">
                Send a Direct Message
              </span>
            </div>

            <div>
              <label htmlFor="contact-name" className="block font-mono text-[11px] uppercase tracking-wider text-ash-400 mb-1.5">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-ash-800 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-ash-600 outline-none transition-colors focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block font-mono text-[11px] uppercase tracking-wider text-ash-400 mb-1.5">
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-ash-800 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-ash-600 outline-none transition-colors focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block font-mono text-[11px] uppercase tracking-wider text-ash-400 mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                placeholder="Hi Gaurika, I'd like to discuss an opportunity..."
                className="w-full resize-none rounded-xl border border-ash-800 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-ash-600 outline-none transition-colors focus:border-white"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-black transition-all hover:bg-ash-200 active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Message Sent</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="font-mono text-xs text-emerald-400 text-center">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-rose-400 text-center">
                Failed to send message. Please email directly at {profile.email}.
              </p>
            )}
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="lg:col-span-6 space-y-px overflow-hidden rounded-2xl border border-ash-800 self-start"
        >
          {profile.social.map((s) => {
            const Icon = s.icon;
            const hasLink = Boolean(s.href);
            const isEmail = s.href.startsWith('mailto:');
            const displayValue = isEmail
              ? profile.email
              : s.label === 'LinkedIn'
                ? 'linkedin.com/in/gaurika-pareek'
                : s.label === 'GitHub'
                  ? 'github.com/GAURIKAPAREEK'
                  : s.label === 'LeetCode'
                    ? 'leetcode.com/u/gaurikaapareek_'
                    : s.label;

            const inner = (
              <div className="flex items-center justify-between bg-ash-950/40 px-6 py-5 transition-colors hover:bg-ash-900/60">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ash-800 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white block">{s.label}</span>
                    <span className="font-mono text-xs text-ash-500">{displayValue}</span>
                  </div>
                </div>
                {hasLink && <Arrow className="h-4 w-4 text-ash-400" />}
              </div>
            );
            return hasLink ? (
              <a
                key={s.label}
                href={s.href}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={s.label}>{inner}</div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
