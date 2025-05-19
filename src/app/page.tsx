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

function TechTag({ name }: { name: string }) {
  return (
    <span className="inline-block bg-gray-800 text-indigo-300 text-xs px-2 py-1 rounded mr-2 mb-2">
      {name}
    </span>
  );
}

function ProjectCard({
  title,
  description,
  link,
  technologies = [],
  imageUrl
}: {
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
  imageUrl?: string;
}) {
  return (
    <article className="flex flex-col p-6 border border-gray-800 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg">
      {imageUrl && (
        <div className="mb-4 relative h-80 w-full overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={`${title} project screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-indigo-300">{title}</h3>
      <p className="mt-2 text-gray-300 flex-1 leading-relaxed">{description}</p>

      {technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap">
          {technologies.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      )}

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

function SkillSection({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-indigo-300 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
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
              {/* Computer Engineer & Full‑Stack Developer specializing in embedded systems and AI‑powered web apps. */}
              Computer Engineer building embedded systems, AI-integrated tools, and full-stack web/mobile apps.
            </p>

            <a
              href="/resume.pdf"
              className="mt-6 inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
            >
              View Resume
            </a>
            <div className="mt-8 flex space-x-6 text-2xl justify-center">
              <SocialLink href="https://github.com/dfall33" label="GitHub"><Github size={28} /></SocialLink>
              <SocialLink href="https://linkedin.com/in/david-fall3" label="LinkedIn"><Linkedin size={28} /></SocialLink>
              <SocialLink href="mailto:david.c.fall33@gmail.com" label="Email"><Mail size={28} /></SocialLink>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-indigo-400">About</h2>
          <p className="leading-relaxed text-gray-300 text-lg">
            I'm a Computer Engineering graduate from Purdue University with a passion for building end-to-end products.
            My experience spans developing embedded systems, web applications, and mobile apps with a strong focus on the
            intersection of hardware and software. I have particular interest in AI and machine learning integration into
            practical applications. Throughout my academic and project work, I've maintained a commitment to writing clean,
            efficient, and dependable code that solves real problems.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-indigo-400">Skills</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <SkillSection
              title="Languages"
              skills={["Python", "C/C++", "JavaScript", "TypeScript", "Assembly"]}
            />
            <SkillSection
              title="Web & Mobile"
              skills={["React", "React Native", "Next.js", "Node.js", "Express"]}
            />
            <SkillSection
              title="Embedded Systems"
              skills={["ESP32", "STM32", "RISC-V", "PCB Design", "Verilog"]}
            />
            <SkillSection
              title="AI & Data"
              skills={["TensorFlow", "PyTorch", "MongoDB", "PostgreSQL", "AWS"]}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-indigo-400 text-center">Selected Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <ProjectCard
              title="Enlytn"
              description="AI-driven course generation platform delivering personalized learning pathways. Users can generate interactive courses on any topic with custom lesson modules, quizzes, and diagrams."
              technologies={["Next.js", "Express", "MongoDB", "OpenAI API", "AWS"]}
              link="https://enlytn.app"
              imageUrl="/enlytn.jpg"
            />
            <ProjectCard
              title="Vulu"
              description="Mobile social fitness app connecting enthusiasts through workouts, recipes, and real-time messaging. Features AI-driven recommendations using CLIP embeddings."
              technologies={["React Native", "Node.js", "MongoDB", "Socket.io", "AWS"]}
              link="https://vulu.app"
              imageUrl="/vulu.jpg"
            />
            <ProjectCard
              title="Motion-Activated Photo Display"
              description="Custom interactive photo frame that changes pictures when motion is detected. Built with ESP32, MPU6050 motion sensor, and a 3D printed enclosure."
              technologies={["MicroPython", "ESP32", "MPU6050", "FreeCAD", "3D Printing"]}
              link="https://github.com/dfall33/picture-box"
              imageUrl="/picture-box.jpg"
            />
            <ProjectCard
              title="Electronic Skee Ball"
              description="Miniaturized electronic skee-ball machine with sensors and motor control. Created for accessibility to users with disabilities through custom PCB design."
              technologies={["C/C++", "STM32", "PCB Design", "KiCad", "Embedded Systems"]}
              link="https://github.com/dfall33/ece477-skee-ball"
              // imageUrl="/api/placeholder/600/400"
              imageUrl="/skee-ball.jpg"
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