import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Download, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';
import { sounds } from '../../utils/soundEffects';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    sounds.playSuccess();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playSuccess();
    
    // Trigger festive celebratory confetti matching green reference theme
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#16A34A', '#22C55E', '#86EFAC', '#15803D', '#F59E0B']
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Exceptional"
          subtitle="Whether you have an upcoming project, a design opening, or want to discuss user research strategies, I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-emerald-600/15"
            >
              <h3 className="text-xl font-bold font-display text-forest-950">
                Contact Information
              </h3>

              {/* Email item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Email Address</div>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs sm:text-sm font-bold text-forest-950 hover:text-emerald-700 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sounds.playHover()}
                  className="p-2.5 rounded-xl bg-white hover:bg-emerald-100 text-slate-600 hover:text-emerald-800 transition-colors shadow-sm"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">Phone & WhatsApp</div>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-xs sm:text-sm font-bold text-forest-950 hover:text-emerald-700 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-forest-950">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Download Resume Action */}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    sounds.playSuccess();
                    window.print();
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className="w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4 text-emerald-700" />
                  <span>Download / Print Resume CV</span>
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                className="glass-card p-4 rounded-2xl flex items-center justify-between group hover:border-emerald-500"
              >
                <span className="text-xs font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">
                  LinkedIn
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </a>

              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                className="glass-card p-4 rounded-2xl flex items-center justify-between group hover:border-emerald-500"
              >
                <span className="text-xs font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">
                  Behance
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-10 rounded-3xl border border-emerald-600/15 relative"
            >
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-forest-950">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out! Sri Mukesh will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-xl font-bold font-display text-forest-950">
                      Send a Message
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-emerald-50/50 border border-emerald-200 text-forest-950 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-emerald-50/50 border border-emerald-200 text-forest-950 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">
                      Project or Role Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Hi Sri Mukesh, we love your design portfolio and would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-emerald-50/50 border border-emerald-200 text-forest-950 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => sounds.playHover()}
                    className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
