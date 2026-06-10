import { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Twitter, Instagram, Github, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-purple-400' },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setErrorMessage(result.message || 'Submission failed. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Something went wrong. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-accent-cyan/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Mail className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-medium text-navy-200">Get in Touch</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Let's Build Your <span className="gradient-text">Success Story</span>
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss how I can help you achieve your marketing goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="glass-card p-12 text-center animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-navy-950" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">Message Sent!</h3>
                <p className="text-navy-300 mb-6">
                  Thanks for reaching out. I'll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="outline-button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                {/* Hidden Web3Forms access key */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                {/* Honeypot spam filter */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 animate-scale-in">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <p className="text-sm text-red-300">{errorMessage}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-200 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-200 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy-200 mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="" className="bg-navy-900">Select a service</option>
                    <option value="Grooming" className="bg-navy-900">Grooming</option>
                    <option value="Medical Consultation" className="bg-navy-900">Medical Consultation</option>
                    <option value="Other" className="bg-navy-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-200 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all resize-none disabled:opacity-50"
                    placeholder="Tell me about your project and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full glow-button font-display flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status === 'submitting' ? (
                      <>
                        Sending...
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info card */}
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-cyan/10">
                    <Mail className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-navy-400 mb-1">Email</div>
                    <a href="mailto:usamashakil07@gmail.com" className="text-white hover:text-accent-cyan transition-colors">
                      usamashakil07@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-blue/10">
                    <MapPin className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-navy-400 mb-1">Location</div>
                    <div className="text-white">Available Worldwide</div>
                    <div className="text-sm text-navy-400">Remote-first collaboration</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-blue/10">
                    <MapPin className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-navy-400 mb-1">Phone</div>
                    <a href="tel:+923084328928" className="text-white hover:text-accent-cyan transition-colors">
                      +92 308 4328928
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-navy-300 group-hover:text-current transition-colors" />
                    <span className="text-navy-200 group-hover:text-white font-medium transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card p-8 bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 border-accent-cyan/20">
              <div className="text-lg font-semibold text-white mb-2">
                Ready to start a project?
              </div>
              <p className="text-navy-300 text-sm mb-4">
                Book a free 30-minute strategy call to discuss your goals.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-accent-cyan font-medium hover:text-white transition-colors group"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
