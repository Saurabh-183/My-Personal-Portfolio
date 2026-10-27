"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import Reveal from "./Reveal";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  MessageSquare,
  Linkedin,
  Github,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Phone,
  Clock,
} from "lucide-react";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");
  const [isActivation, setIsActivation] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setStatus("loading");
    setStatusMessage("");
    setIsActivation(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setIsActivation(!!data.isActivation);
        setStatusMessage(
          data.message ||
            "Your message has been sent successfully! I'll get back to you shortly."
        );
        if (!data.isActivation) {
          setFormData({ name: "", email: "", subject: "", message: "" });
        }
      } else {
        setStatus("error");
        setIsActivation(false);
        setStatusMessage(
          data.error ||
            data.message ||
            "Failed to send your message. Please email directly at " + personal.email
        );
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setStatusMessage(
        "Network error occurred. Please try again or email directly at " + personal.email
      );
    }
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-16 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-mono text-blue-600 dark:text-[#00f5d4] text-xs tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-blue-600 dark:bg-[#00f5d4]" />
              06 · GET IN TOUCH
              <span className="w-8 h-px bg-blue-600 dark:bg-[#00f5d4]" />
            </p>
            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-tight text-slate-900 dark:text-white mb-4">
              {"Let's build something"}{" "}
              <span className="text-blue-600 dark:text-[#00f5d4]">great</span>
            </h2>
            <p className="text-slate-600 dark:text-[#7a99a8] text-base md:text-lg font-light leading-relaxed">
              Have a project, role, or collaboration in mind? Drop a message below
              and it will be delivered directly to my email inbox.
            </p>
          </div>
        </Reveal>

        {/* Content Grid - Equal Width (50% / 50%) & Equal Height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Direct Channels & Information (Equal Size) */}
          <Reveal delay={100} className="h-full">
            <div className="bg-white dark:bg-[#0f1922] border border-slate-200 dark:border-[rgba(0,245,212,0.18)] rounded-2xl p-6 md:p-10 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] h-full flex flex-col justify-between">
              
              <div>
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 rounded-full text-xs font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for SDE / Frontend roles
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-[#00f5d4]" />
                  Direct Channels
                </h3>
                <p className="text-slate-600 dark:text-[#7a99a8] text-sm leading-relaxed mb-6 font-light">
                  Feel free to reach out directly through any of my verified channels
                  or send an email with one click.
                </p>

                {/* Contact Cards List */}
                <div className="flex flex-col gap-3.5 mb-6">
                  
                  {/* Email Card */}
                  <div className="bg-slate-50 dark:bg-[#050a0e]/80 border border-slate-200 dark:border-[rgba(0,245,212,0.15)] rounded-xl p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-[rgba(0,245,212,0.1)] flex items-center justify-center text-blue-600 dark:text-[#00f5d4] shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <p className="text-[11px] font-mono text-slate-500 dark:text-[#7a99a8] uppercase">Email</p>
                        <a
                          href={`mailto:${personal.email}`}
                          className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-[#00f5d4] transition-colors truncate block"
                        >
                          {personal.email}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="shrink-0 text-xs px-3.5 py-1.5 rounded-lg border border-blue-500/30 dark:border-[rgba(0,245,212,0.3)] bg-white dark:bg-[#0f1922] text-blue-600 dark:text-[#00f5d4] hover:bg-blue-600 hover:text-white dark:hover:bg-[#00f5d4] dark:hover:text-[#050a0e] transition-all font-mono font-medium flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Send Email</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Phone / WhatsApp Card */}
                  {personal.phone && (
                    <div className="bg-slate-50 dark:bg-[#050a0e]/80 border border-slate-200 dark:border-[rgba(0,245,212,0.15)] rounded-xl p-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-[rgba(0,245,212,0.1)] flex items-center justify-center text-blue-600 dark:text-[#00f5d4] shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="text-[11px] font-mono text-slate-500 dark:text-[#7a99a8] uppercase">Phone / WhatsApp</p>
                          <a
                            href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                            className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-[#00f5d4] transition-colors truncate block"
                          >
                            {personal.phone}
                          </a>
                        </div>
                      </div>
                      <a
                        href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                        className="shrink-0 text-xs px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-[rgba(0,245,212,0.3)] bg-white dark:bg-[#0f1922] text-slate-700 dark:text-[#00f5d4] hover:bg-slate-100 dark:hover:bg-[#00f5d4]/10 transition-colors font-mono font-medium flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Call</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  {/* Location Card */}
                  <div className="bg-slate-50 dark:bg-[#050a0e]/80 border border-slate-200 dark:border-[rgba(0,245,212,0.15)] rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-[rgba(0,245,212,0.1)] flex items-center justify-center text-blue-600 dark:text-[#00f5d4] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-[#7a99a8] uppercase">Location</p>
                      <p className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white">
                        {personal.location}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-[#7a99a8]">Open to Remote, Hybrid & Relocation</p>
                    </div>
                  </div>

                </div>

                {/* Social Channels */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-slate-200 dark:border-[rgba(0,245,212,0.2)] bg-slate-50 dark:bg-[#050a0e]/40 text-slate-700 dark:text-[#7a99a8] hover:text-blue-600 dark:hover:text-[#00f5d4] hover:border-blue-400 dark:hover:border-[#00f5d4] hover:bg-white dark:hover:bg-[#00f5d4]/5 transition-all text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    LinkedIn Profile ↗
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-slate-200 dark:border-[rgba(0,245,212,0.2)] bg-slate-50 dark:bg-[#050a0e]/40 text-slate-700 dark:text-[#7a99a8] hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-[#00f5d4] hover:bg-white dark:hover:bg-[#00f5d4]/5 transition-all text-xs font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Profile ↗
                  </a>
                </div>
              </div>

              {/* Bottom Quick SLA Card */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-[#050a0e]/50 border border-slate-200/80 dark:border-[rgba(0,245,212,0.1)] flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600 dark:text-[#00f5d4] shrink-0" />
                <div className="text-xs text-slate-600 dark:text-[#7a99a8] leading-tight">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Quick Response Guarantee</p>
                  <p className="text-[11px] mt-0.5">I usually respond within 24 hours · IST (UTC+5:30)</p>
                </div>
              </div>

            </div>
          </Reveal>

          {/* Right Column: Contact Message Form (Equal Size) */}
          <Reveal delay={200} className="h-full">
            <div className="bg-white dark:bg-[#0f1922] border border-slate-200 dark:border-[rgba(0,245,212,0.18)] rounded-2xl p-6 md:p-10 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] h-full flex flex-col justify-between">
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-slate-600 dark:text-[#7a99a8] text-sm mb-6 font-light">
                  Fill in your details below. I typically respond within 24 hours.
                </p>

                {/* Status Alert Banners */}
                {status === "success" && (
                  <div
                    className={`mb-6 p-4 rounded-xl border flex items-start gap-3 ${
                      isActivation
                        ? "bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/60 text-amber-900 dark:text-amber-200"
                        : "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-200"
                    }`}
                  >
                    {isActivation ? (
                      <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm font-medium leading-relaxed">
                      {statusMessage}
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-rose-800 dark:text-rose-200 font-medium">
                      {statusMessage}
                    </p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-[#7a99a8] uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 dark:text-[#7a99a8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          required
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#050a0e]/90 border border-slate-200 dark:border-[rgba(0,245,212,0.2)] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#7a99a8]/50 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-[#00f5d4] focus:ring-2 focus:ring-blue-600/15 dark:focus:ring-[#00f5d4]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-[#7a99a8] uppercase tracking-wider mb-1.5">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 dark:text-[#7a99a8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. john@example.com"
                          required
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#050a0e]/90 border border-slate-200 dark:border-[rgba(0,245,212,0.2)] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#7a99a8]/50 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-[#00f5d4] focus:ring-2 focus:ring-blue-600/15 dark:focus:ring-[#00f5d4]/20 transition-all"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-[#7a99a8] uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 dark:text-[#7a99a8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. SDE Opportunity / Project Discussion"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#050a0e]/90 border border-slate-200 dark:border-[rgba(0,245,212,0.2)] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#7a99a8]/50 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-[#00f5d4] focus:ring-2 focus:ring-blue-600/15 dark:focus:ring-[#00f5d4]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-[#7a99a8] uppercase tracking-wider mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Saurabh, I came across your portfolio and wanted to reach out regarding..."
                      required
                      className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#050a0e]/90 border border-slate-200 dark:border-[rgba(0,245,212,0.2)] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#7a99a8]/50 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-[#00f5d4] focus:ring-2 focus:ring-blue-600/15 dark:focus:ring-[#00f5d4]/20 transition-all resize-y min-h-[110px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-1 w-full flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed bg-slate-900 text-white hover:bg-blue-600 dark:bg-[#00f5d4] dark:text-[#050a0e] dark:hover:bg-[#00e5c4] dark:hover:shadow-[0_8px_30px_rgba(0,245,212,0.35)]"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 dark:text-[#7a99a8]/70 mt-0.5 font-mono">
                    Direct delivery to {personal.email} · Spam protected
                  </p>

                </form>
              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
