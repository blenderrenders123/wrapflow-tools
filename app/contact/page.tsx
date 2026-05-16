"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, MessageSquare, Sparkles, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [topic, setTopic] = useState("feedback");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "539f1512-6f42-46cf-9fd3-d0bf311e86c6");
    formData.append("subject", `WrapFlow [${topic}]: ${formData.get("name")}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute top-[400px] right-[5%] h-[450px] w-[450px] rounded-full bg-cyan-400/15 blur-[120px]" />
      </div>

      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600">
              <MessageSquare className="h-3.5 w-3.5 text-zinc-900" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium">Contact</span>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-2xl px-6 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-xs text-amber-300 backdrop-blur-xl">
            <Sparkles className="h-3 w-3" />
            We read every message
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Got <span className="bg-gradient-to-r from-amber-200 via-cyan-300 to-violet-300 bg-clip-text text-transparent">feedback?</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400 sm:text-base">
            Suggest a tool. Report a bug. Tell us what&apos;s missing. WrapFlow is built on installer feedback.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-emerald-400/30 bg-emerald-400/5 p-12 text-center backdrop-blur-xl">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/20">
              <CheckCircle2 className="h-7 w-7 text-emerald-300" />
            </div>
            <h2 className="text-2xl font-medium text-white">Message received</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
              Thanks for reaching out. We&apos;ll get back to you within 1-2 days.
            </p>
            <button onClick={() => setStatus("idle")} className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-300 transition hover:bg-white/[0.08]">
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-300">What&apos;s this about?</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "feedback", label: "Feedback" },
                  { id: "bug", label: "Bug report" },
                  { id: "tool-request", label: "Tool request" },
                  { id: "other", label: "Other" },
                ].map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setTopic(t.id)}
                    className={"rounded-full border px-3 py-1.5 text-xs font-medium transition " + (topic === t.id ? "border-amber-400/40 bg-amber-400/15 text-amber-200" : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white")}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-300">Your name</label>
                <input name="name" type="text" required placeholder="John" className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-amber-400/40 focus:bg-white/[0.04] focus:outline-none" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-300">Email</label>
                <input name="email" type="email" required placeholder="you@shop.com" className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-amber-400/40 focus:bg-white/[0.04] focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-300">Shop name (optional)</label>
              <input name="shop" type="text" placeholder="Apex Wraps" className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-amber-400/40 focus:bg-white/[0.04] focus:outline-none" />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-300">Message</label>
              <textarea name="message" rows={6} required placeholder="Tell us what's on your mind..." className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-amber-400/40 focus:bg-white/[0.04] focus:outline-none" />
            </div>

            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {status === "error" && (
              <div className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/5 p-3 text-sm text-red-300">
                <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button type="submit" disabled={status === "loading"} className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
              {status === "loading" ? (
                <>
                  <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-zinc-900 border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Send message
                </>
              )}
            </button>

            <p className="text-center text-[10px] text-zinc-600">
              No tracking. No spam. We just read your message and reply.
            </p>
          </motion.form>
        )}
      </section>
    </main>
  );
}