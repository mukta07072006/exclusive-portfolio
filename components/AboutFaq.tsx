import Link from "next/link";

import { projects } from "@/data";
import { siteConfig } from "@/lib/site";

const faqs = [
  {
    question: "Who is Moshud Muktadir?",
    answer:
      "Moshud Muktadir is a full-stack web developer based in Dhaka, Bangladesh. He has more than two years of experience building production web applications and specializes in Next.js, React, TypeScript, Tailwind CSS and Node.js.",
  },
  {
    question: "What projects has Moshud Muktadir built?",
    answer:
      "Moshud Muktadir has shipped 20+ projects, including ArenaKit (an esports tournament and 1v1 duel platform with live brackets, entry fees and prize pools), Learnix (an AI-assisted e-learning platform with student, instructor and admin dashboards), a 3D solar system explorer built with Three.js, and an animated Apple iPhone 3D website.",
  },
  {
    question: "What technologies does Moshud Muktadir use?",
    answer:
      "His main stack is Next.js, React, TypeScript, Tailwind CSS, Node.js, Three.js, Framer Motion, PostgreSQL and MongoDB, along with Stripe payments, Docker and Vercel or AWS deployments.",
  },
  {
    question: "How can I contact Moshud Muktadir?",
    answer:
      "You can reach Moshud Muktadir by email at cr8v.muktadir@gmail.com or through the contact section of moshudmuktadir.pro.bd.",
  },
  {
    question: "Is Moshud Muktadir available for freelance work?",
    answer:
      "Yes. Moshud Muktadir takes on freelance and contract work for web application development, performance optimization and technical SEO, and is also open to full-time remote roles.",
  },
];

const quickFacts = [
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Experience", value: "2+ years" },
  { label: "Shipped", value: "20+ projects" },
  { label: "Focus", value: "Next.js · React · TypeScript" },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Three.js",
  "PostgreSQL",
  "Stripe",
  "Docker",
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteConfig.url}/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.url}/#projects`,
  name: `Projects by ${siteConfig.name}`,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.des,
      url: project.link,
      creator: { "@id": `${siteConfig.url}/#person` },
    },
  })),
};

const AboutFaq = () => {
  return (
    <section
      id="about-moshud-muktadir"
      aria-labelledby="about-moshud-heading"
      className="relative z-[30] py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />

      <h2 id="about-moshud-heading" className="heading">
        About <span className="text-purple">Moshud Muktadir</span>
      </h2>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-5">
        {/* Bio card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#08051b] p-7 md:p-10 lg:col-span-3">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-purple/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

          <p className="relative text-xs font-medium uppercase tracking-[0.3em] text-purple">
            Full-stack developer
          </p>

          <p className="relative mt-6 text-lg font-medium leading-snug text-white md:text-xl">
            Moshud Muktadir turns product ideas into fast, accessible web
            applications — from the first wireframe to the deployed API.
          </p>

          <p className="relative mt-5 text-[15px] leading-relaxed text-white-200">
            Working end to end with Next.js, React, TypeScript and Node.js, he
            has shipped 20+ projects: SaaS dashboards, real-time competition
            platforms and 3D interactive experiences. Recent work includes{" "}
            <span className="font-semibold text-white">ArenaKit</span>, a
            tournament and duel platform with live brackets and prize pools, and{" "}
            <span className="font-semibold text-white">Learnix</span>, an
            AI-assisted learning platform with role-based dashboards, quizzes
            and progress tracking.
          </p>

          <div className="relative mt-8 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white-100"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="relative mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-purple/50 hover:bg-white/[0.1]"
            >
              Work with me
            </Link>
            <Link
              href="#projects"
              className="text-sm font-semibold text-purple transition hover:text-white"
            >
              See recent projects →
            </Link>
          </div>
        </div>

        {/* Quick facts card */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#08051b] p-7 md:p-8 lg:col-span-2">
          <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-purple">
            At a glance
          </h3>

          <dl className="mt-6 divide-y divide-white/[0.06]">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-6 py-4 first:pt-0 last:pb-0"
              >
                <dt className="text-xs uppercase tracking-wider text-white-200/60">
                  {fact.label}
                </dt>
                <dd className="text-right text-sm font-semibold text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-6 py-4 last:pb-0">
              <dt className="text-xs uppercase tracking-wider text-white-200/60">
                Email
              </dt>
              <dd className="text-right">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-semibold text-purple transition hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-6 rounded-2xl border border-purple/20 bg-purple/[0.06] p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for new work
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white-200">
              Freelance, contract and full-time remote roles.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <h3 className="mt-16 text-center text-xs font-medium uppercase tracking-[0.3em] text-purple">
        Frequently asked questions
      </h3>
      <div className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:border-purple/30 hover:bg-white/[0.04]"
          >
            <div className="flex items-start gap-4">
              <span className="mt-0.5 text-xs font-semibold tabular-nums text-purple/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="text-[15px] font-semibold leading-snug text-white">
                  {faq.question}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white-200">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFaq;
