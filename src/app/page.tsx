import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-gray-400 hover:text-indigo-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function ProjectCard({ title, description, link }: { title: string; description: string; link?: string }) {
  return (
    <article className="flex flex-col p-6 border border-gray-800 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg">
      <h3 className="text-xl font-semibold text-indigo-300">{title}</h3>
      <p className="mt-2 text-gray-300 flex-1 leading-relaxed">{description}</p>
      {link && (
        <a
          href={link}
          className="mt-4 inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          View project <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
}

export default function PortfolioHome() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      {/* Hero */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              David Fall
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Computer Engineer & Full‑Stack Developer specializing in embedded systems and AI‑powered web apps.
            </p>
            <a
              href="/resume.pdf"
              className="mt-6 inline-block text-indigo-400 hover:text-indigo-300 font-medium"
            >
              View Resume
            </a>
            <div className="mt-8 flex space-x-6 text-2xl justify-center">
              <SocialLink href="https://github.com/dfall33" label="GitHub"><Github size={28} /></SocialLink>
              <SocialLink href="https://linkedin.com/in/david-fall3" label="LinkedIn"><Linkedin size={28} /></SocialLink>
              <SocialLink href="mailto:david.c.fall33@gmail.com" label="Email"><Mail size={28} /></SocialLink>
            </div>
            {/* Resume Link */}
           
          </div>
        </div>
      </header>

      {/* About */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-indigo-400">About</h2>
          <p className="leading-relaxed text-gray-300 text-lg">
            I'm a senior Computer Engineering student at Purdue. I enjoy building end-to-end products, including both hardware and software. 
            My experience includes developing embedded systems, web applications, and mobile apps. I have a strong interest in AI and machine learning, and I love exploring new technologies to create innovative solutions.
            My focus is on the intersection of hardware and software and on writing clean, dependable code.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-indigo-400 text-center">Selected Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Enlytn"
              description="AI‑driven course generation platform delivering personalized learning pathways."
              link="https://enlytn.app"
            />
            <ProjectCard
              title="Vulu"
              description="Mobile social fitness app connecting enthusiasts through workouts, recipes, and real‑time messaging."
              link="https://vulu.app"
            />
            <ProjectCard
              title="ESB"
              description="Miniaturized electronic skee‑ball machine with STM32‑powered sensors and motor control."
              link="https://github.com/dfall33/ece477-skee-ball"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-8 text-center text-sm border-t border-gray-800">
        © {new Date().getFullYear()} David Fall • Portfolio built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}
