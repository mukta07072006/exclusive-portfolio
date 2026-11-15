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

      <div className="mx-auto mt-10 max-w-3xl space-y-6 text-white-200">
        <p>
          <strong className="text-white">Moshud Muktadir</strong> is a
          full-stack web developer from Dhaka, Bangladesh with 2+ years of
          experience turning product ideas into fast, accessible web
          applications. He works end to end — interface design, frontend
          engineering, APIs, databases and deployment — with Next.js, React,
          TypeScript, Tailwind CSS and Node.js.
        </p>
        <p>
          Over 20+ shipped projects he has built SaaS dashboards, real-time
          competition platforms and 3D interactive experiences. Recent work
          includes <strong className="text-white">ArenaKit</strong>, a
          tournament and duel platform with live brackets and prize pools, and{" "}
          <strong className="text-white">Learnix</strong>, an AI-assisted
          learning platform with role-based dashboards, quizzes and progress
          tracking.
        </p>

        <h3 className="pt-4 text-2xl font-bold text-white">
          Selected projects
        </h3>
        <ul className="list-disc space-y-2 pl-6">
          {projects.map((project) => (
            <li key={project.id}>
              <span className="text-white">{project.title}</span> —{" "}
              {project.des}
            </li>
          ))}
        </ul>

        <h3 className="pt-4 text-2xl font-bold text-white">
          Frequently asked questions
        </h3>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h4 className="text-lg font-semibold text-white">
                {faq.question}
              </h4>
              <p className="mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFaq;
