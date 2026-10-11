import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { MotionValue, Variants } from "motion/react";
import { ArrowRight, ArrowUpRight, Download, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

// ===== Resume =====
// Upload the PDF to public/resume.pdf, then flip RESUME_AVAILABLE to true —
// every Resume button on the site becomes a direct PDF download (same tab,
// download attribute). No other changes needed.
const RESUME_AVAILABLE = true;
const RESUME_PATH = "/resume.pdf";
const RESUME_FILE_NAME = "Abhinav a s.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABHINAV A S — Software Developer | AI & Data Science" },
      {
        name: "description",
        content:
          "Software Developer and AI & Data Science graduate building practical software products with Python, AI, full-stack development, and modern web technologies.",
      },
      { property: "og:title", content: "ABHINAV A S — Software Developer | AI & Data Science" },
      {
        property: "og:description",
        content:
          "Software Developer and AI & Data Science graduate building practical software products with Python, AI, full-stack development, and modern web technologies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://abhinav-portfolio-sooty-two.vercel.app/" },
      { property: "og:image", content: "https://abhinav-portfolio-sooty-two.vercel.app/og-image.svg" },
      { property: "og:image:alt", content: "ABHINAV A S — Software Developer | AI & Data Science" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ABHINAV A S — Software Developer | AI & Data Science" },
      { name: "twitter:description", content: "Software Developer and AI & Data Science graduate building practical software products." },
      { name: "twitter:image", content: "https://abhinav-portfolio-sooty-two.vercel.app/og-image.svg" },
    ],
    links: [{ rel: "canonical", href: "https://abhinav-portfolio-sooty-two.vercel.app/" }],
  }),
  component: Portfolio,
});

const skills = [
  "Python",
  "SQL",
  "JavaScript",
  "Django",
  "REST APIs",
  "MySQL",
  "OOP",
  "Git",
  "Problem Solving",
  "Postman",
];

const projects = [
  {
    number: "01",
    slug: "nova",
    hasScreenshot: true,
    screenshotPath: "/nova.png",
    title: "NOVA — Fashion E-Commerce Platform",
    subtitle: "Full-stack commerce experience",
    monogram: "NV",
    alt: "Screenshot of the NOVA fashion e-commerce project",
    problem:
      "Turn product browsing and buying into one coherent, responsive shopping experience.",
    solution:
      "A full-stack fashion e-commerce platform with product browsing, authentication, cart functionality, and a modern responsive interface.",
    stack: ["Django", "MySQL", "Bootstrap", "JavaScript"],
    liveUrl: "https://nova-fashion-house.vercel.app/",
    githubUrl: "https://github.com/abhinavas-10",
    caseStudy: false,
  },
  {
    number: "02",
    slug: "phishield",
    hasScreenshot: false,
    screenshotPath: "/projects/phishield.png",
    title: "PHISHIELD — AI Phishing URL Detection",
    subtitle: "Machine-learning security tool",
    monogram: "PS",
    alt: "Screenshot of the PHISHIELD phishing URL detection project",
    problem: "Make suspicious links understandable before a user chooses to trust them.",
    solution:
      "An AI-powered system that analyzes URLs and predicts whether they are legitimate or potentially malicious.",
    stack: ["Python", "Flask", "Scikit-learn", "Random Forest", "Machine Learning"],
    liveUrl: "https://phishield-gamma.vercel.app/",
    githubUrl: "https://github.com/abhinavas-10",
    caseStudy: false,
  },
  {
  number: "03",
slug: "serviceflow",
hasScreenshot: false,
screenshotPath: "/projects/smartschedule.png",
title: "SmartSchedule — Intelligent Timetable Generator",
subtitle: "Intelligent academic scheduling platform",
monogram: "SS",
alt: "SmartSchedule intelligent timetable generator",
problem:
  "Creating college timetables manually is difficult when managing subjects, faculty availability, classrooms, divisions, and scheduling constraints.",
solution:
  "An intelligent timetable generation system that manages academic resources, applies scheduling constraints, generates timetables, and helps identify scheduling conflicts.",
stack: ["React", "TypeScript", "FastAPI", "Python", "SQLAlchemy", "SQLite"],
liveUrl: "https://smartschedule-frontend-jade.vercel.app",
githubUrl: null,
caseStudy: false,
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

const reveal: Variants = {
  hidden: { y: "110%" },
  visible: (i = 0) => ({
    y: 0,
    transition: { duration: 0.72, delay: 0.08 + i * 0.09, ease: easeOut },
  }),
};

function LineReveal({ children, index = 0, className = "" }: { children: React.ReactNode; index?: number; className?: string }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        custom={index}
        variants={reveal}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.span>
    </span>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 100 : 2200);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      aria-label="Loading portfolio"
      role="status"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      <svg viewBox="0 0 240 130" role="img" aria-label="Developer monogram">
        <motion.path
          d="M24 18v94h42c32 0 51-17 51-47S98 18 66 18H24Zm28 25h13c15 0 23 8 23 22s-8 22-23 22H52V43Zm92-25v94h72V87h-43V75h36V53h-36V43h42V18h-71Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <span>Portfolio / 2026</span>
    </motion.div>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const useDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset["theme"] = useDark ? "dark" : "light";
    setDark(useDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset["theme"] = next ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
      {dark ? <Sun aria-hidden size={16} /> : <Moon aria-hidden size={16} />}
    </button>
  );
}

function MagneticLink({ children, className = "", href }: { children: React.ReactNode; className?: string; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20 });
  const springY = useSpring(y, { stiffness: 260, damping: 20 });

  const handleMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.16);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.16);
  };

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 650, damping: 42, mass: 0.35 });
  const springY = useSpring(cursorY, { stiffness: 650, damping: 42, mass: 0.35 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX - 8);
      cursorY.set(event.clientY - 8);
    };
    const over = (event: globalThis.MouseEvent) => {
      const target = event.target;
      setActive(target instanceof Element && Boolean(target.closest("a, button, [data-cursor]")));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY]);

  return <motion.div aria-hidden className="custom-cursor" data-active={active} style={{ x: springX, y: springY }} />;
}

function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.15]);

  

  useEffect(() => {
    const sections = ["top", "about", "skills", "work", "experience", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.3;
        const current = sections.find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= marker && bounds.bottom > marker;
        }) ?? sections[0];
        if (current) setActiveSection(current.id);
      });
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const navLink = (id: string, label: string) => (
    <a href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>{label}</a>
  );

  return (
    <header className="hero" id="top">
      <div className={`hero-media${videoReady && !videoFailed ? " hero-media-playing" : ""}`} aria-hidden>
        {!videoFailed ? (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero-poster.svg"
            onCanPlay={() => setVideoReady(true)}
            onError={() => {
              setVideoFailed(true);
              setVideoReady(false);
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div className="hero-overlay" />
      </div>

      <nav className="hero-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Back to top">AAS / 26</a>
        <div className="hero-nav-links">
          {navLink("top", "Home")}
          {navLink("about", "About")}
          {navLink("skills", "Skills")}
          {navLink("work", "Projects")}
          {navLink("experience", "Experience")}
          {navLink("contact", "Contact")}
          <ResumeLink label="Resume" />
          <ThemeToggle />
        </div>
      </nav>

      <motion.div className="hero-type" style={{ y: titleY, opacity: titleOpacity }}>
        <p className="hero-kicker">Software Developer | AI &amp; Data Science</p>
        <h1>
          <LineReveal index={0}>ABHINAV A S</LineReveal>
          <LineReveal index={1} className="hero-role">SOFTWARE DEVELOPER</LineReveal>
        </h1>
      </motion.div>

      <div className="hero-bottom">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
        >
          I build practical software products using Python, AI, full-stack development, and modern web technologies.
        </motion.p>
        <div className="hero-actions" aria-label="Portfolio links">
          <a className="primary-action" href="#work">View Projects <ArrowRight aria-hidden size={16} /></a>
          <ResumeLink label="View Resume" />
          <a href="https://github.com/abhinavas-10" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abhinav-a-s-korattiyil/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="about section-pad" id="about">
      <SectionLabel number="01">Profile</SectionLabel>
      <motion.div
        className="about-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.p className="about-lead" variants={reveal}>
          Engineering useful systems,<br />not digital noise.
        </motion.p>
        <motion.div className="about-copy" variants={reveal}>
          <p>
            B.E. Artificial Intelligence &amp; Data Science graduate with a strong foundation in software development.
            Hands-on experience building web applications using Python, JavaScript, Django, and MySQL through academic
            projects and full-stack training.
          </p>
          <p>
            Comfortable with SQL, CRUD operations, databases, debugging, and the deliberate work of turning requirements
            into working applications.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Skills() {
  const entries = [...skills, ...skills];
  return (
    <section className="skills" id="skills" aria-label="Technical skills">
      <p className="skill-folio">02 / Toolkit</p>
      <div className="marquee-row">
        <div className="marquee-track">
          {entries.map((skill, index) => (
            <span key={`${skill}-${index}`}><i />{skill}</span>
          ))}
        </div>
      </div>
      <div className="skill-notes section-pad">
        <span>Frontend — HTML, CSS, JavaScript</span>
        <span>Backend — Django, REST APIs, JSON</span>
        <span>Database — MySQL, SQL Queries, CRUD</span>
        <span>Tools — Git, GitHub, Postman, VS Code</span>
      </div>
    </section>
  );
}
function ProjectVisual({
  project,
  imageY,
}: {
  project: (typeof projects)[number];
  imageY: MotionValue<string>;
}) {
  return (
    <div className="project-visual" data-cursor>
      {project.liveUrl ? (
        <div className="live-project-frame">
          <iframe
            src={project.liveUrl}
            title={`${project.title} live website`}
            loading="lazy"
            allow="fullscreen"
          />

          <div className="live-project-label">
            <span className="live-dot" />
            LIVE
          </div>
        </div>
      ) : project.hasScreenshot && project.screenshotPath ? (
        <motion.img
          src={project.screenshotPath}
          alt={project.alt}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          style={{ y: imageY }}
        />
      ) : (
        <div
          className={`project-placeholder project-placeholder-${project.slug}`}
        >
          <span className="placeholder-monogram">
            {project.monogram}
          </span>
        </div>
      )}

      <span className="project-index">{project.number}</span>
    </div>
  );
}



function Project({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <article ref={ref} className={`project ${index % 2 ? "project-reverse" : ""}`}>
      <ProjectVisual project={project} imageY={imageY} />
      <motion.div
        className="project-copy"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="project-type">Selected work / {project.number}</p>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <div className="case-note">
          <span>Problem</span>
          <p>{project.problem}</p>
        </div>
        <div className="case-note">
          <span>Solution</span>
          <p>{project.solution}</p>
        </div>
        <ul className="stack-list" aria-label="Technology stack">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="project-links" aria-label="Project links">
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight aria-hidden size={17} /></a> : null}
          {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden size={17} /></a> : null}
          {project.caseStudy ? <Link to="/work/phishield">Case Study <ArrowRight aria-hidden size={17} /></Link> : null}
          {!project.liveUrl && !project.githubUrl ? <span>GitHub / Case Study coming soon</span> : null}
        </div>
      </motion.div>
      {project.caseStudy && <PhishieldStudy />}
    </article>
  );
}

function PhishieldStudy() {
  return (
    <motion.aside
      className="deep-dive"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      <p className="deep-dive-label">Case study / PHISHIELD</p>
      <h4>Making a security verdict feel immediate—and trustworthy.</h4>
      <div className="deep-dive-grid">
        <div><span>Problem</span><p>Raw detection output is not useful by itself. A user needs an unambiguous result without losing context or submitting malformed input.</p></div>
        <div><span>My role &amp; decisions</span><p>I connected the React interface to the Flask service, shaped the request and response flow, and kept validation close to the point of entry.</p></div>
        <div><span>Technical challenge</span><p>The frontend had to distinguish invalid input, network failure, and a genuine phishing result instead of collapsing every response into one state.</p></div>
        <div><span>Solution &amp; outcome</span><p>I separated client validation from API errors and detection states, then tested the full exchange. The result is a clearer, more dependable decision path that is ready for model iteration.</p></div>
      </div>
      <Link className="deep-dive-link" to="/work/phishield">Read the full case study <ArrowRight aria-hidden size={17} /></Link>
    </motion.aside>
  );
}

function Experience() {
  return (
    <section className="experience section-pad" id="experience">
      <SectionLabel number="04">Foundation</SectionLabel>
      <div className="experience-list">
        <motion.article initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }}>
          <span className="experience-year">2026 — Now</span>
          <div>
            <p className="experience-kind">Training</p>
            <h3>Python Full Stack Development Trainee</h3>
            <p>TAP Academy, Bengaluru</p>
            <p className="experience-detail">Python, Java, SQL, JavaScript, Django, Flask, HTML, CSS, REST APIs, databases, Git, GitHub, and Postman.</p>
          </div>
        </motion.article>
        <motion.article initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }}>
          <span className="experience-year">2022 — 2026</span>
          <div>
            <p className="experience-kind">Education</p>
            <h3>B.E. Artificial Intelligence &amp; Data Science</h3>
            <p>Srinivas Institute of Technology, Mangalore · VTU</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact section-pad" id="contact">
      <SectionLabel number="05">Contact</SectionLabel>
      <div className="contact-layout">
        <p>Have a role, a brief, or a hard problem?</p>
        <h2>LET’S MAKE<br /><em>IT WORK.</em></h2>
        <MagneticLink href="https://www.linkedin.com/in/abhinav-a-s-korattiyil/" className="email-link">
          Connect on LinkedIn <ArrowUpRight aria-hidden />
        </MagneticLink>
        <ContactForm />
      </div>
      <div className="footer-row">
        <span>Available for software development opportunities</span>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/abhinav-a-s-korattiyil/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/abhinavas-10" target="_blank" rel="noreferrer">GitHub</a>
          <ResumeLink label="Resume" />
        </div>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}

const formEndpoint = import.meta.env["VITE_FORMSPREE_ENDPOINT"]?.trim();

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "config">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formEndpoint) {
      setStatus("config");
      setStatusMessage("The contact form is not connected yet. Please use LinkedIn while the form endpoint is configured.");
      return;
    }

    if (!values.name.trim() || !values.message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setStatus("error");
      setStatusMessage("Please enter your name, a valid email address, and a message.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setValues({ name: "", email: "", message: "" });
      setStatus("success");
      setStatusMessage("Thanks — your message was sent successfully.");
    } catch {
      setStatus("error");
      setStatusMessage("Your message could not be sent. Please try again or use LinkedIn.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-heading">
        <p>Or send a short note.</p>
        {!formEndpoint ? <span>Form endpoint not configured yet.</span> : null}
      </div>
      <div className="contact-form-fields">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} />
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} />
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} required value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} />
      </div>
      <div className="contact-form-actions">
        <Button type="submit" disabled={status === "submitting"} className="contact-submit">
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
        {statusMessage ? <p className={`contact-form-status contact-form-status-${status}`} role={status === "success" ? "status" : "alert"}>{statusMessage}</p> : null}
      </div>
    </form>
  );
}

function ResumeLink({ label }: { label: string }) {
  const [showNotice, setShowNotice] = useState(false);
  const noticeTimer = useRef<number | undefined>(undefined);
  const noticeId = useId();

  useEffect(() => () => window.clearTimeout(noticeTimer.current), []);

  if (RESUME_AVAILABLE) {
    return (
      <a className="resume-ready" href={RESUME_PATH} download={RESUME_FILE_NAME} data-resume-path={RESUME_PATH}>
        {label} <Download aria-hidden size={15} />
      </a>
    );
  }

  return (
    <span className="resume-wrap resume-pending" data-resume-path={RESUME_PATH}>
      <button
        type="button"
        aria-describedby={noticeId}
        onClick={() => {
          window.clearTimeout(noticeTimer.current);
          setShowNotice(true);
          noticeTimer.current = window.setTimeout(() => setShowNotice(false), 2600);
        }}
      >
        {label} <span className="resume-badge">Soon</span> <Download aria-hidden size={15} />
      </button>
      <span id={noticeId} className={`resume-toast${showNotice ? " resume-toast-visible" : ""}`} role="status">
        {showNotice ? "Resume download will be available soon" : ""}
      </span>
    </span>
  );
}

function Portfolio() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    setShowPreloader(window.sessionStorage.getItem("portfolio-seen") !== "true");
  }, []);

  const finishPreloader = () => {
    window.sessionStorage.setItem("portfolio-seen", "true");
    setShowPreloader(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      {showPreloader && <Preloader onComplete={finishPreloader} />}
      <CustomCursor />
      <div className="grain" aria-hidden />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <section className="work section-pad" id="work" aria-labelledby="work-title">
      <SectionLabel number="03">Selected work</SectionLabel>
          <div className="work-heading">
            <h2 id="work-title">BUILT TO<br />BE USED.</h2>
        <p>Three projects built around real workflows: shopping, link safety, and service tasks.</p>
          </div>
          <div className="projects">
            {projects.map((project, index) => <Project key={project.title} project={project} index={index} />)}
          </div>
        </section>
        <Experience />
        <Contact />
      </main>
    </>
  );
}