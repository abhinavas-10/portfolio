import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

import phishieldImage from "../assets/phishield-project.jpg";

export const Route = createFileRoute("/work/phishield")({
  head: () => ({
    meta: [
      { title: "PHISHIELD Case Study — Abhinav A S" },
      { name: "description", content: "How Abhinav A S built an AI-powered phishing URL detection experience with Python, Flask, and a Random Forest model." },
      { property: "og:title", content: "PHISHIELD Case Study — Abhinav A S" },
      { property: "og:description", content: "A recruiter-friendly look at the problem, architecture, machine-learning approach, challenges, and lessons behind PHISHIELD." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://abhinav-portfolio-sooty-two.vercel.app/work/phishield" },
      { property: "og:image", content: "https://abhinav-portfolio-sooty-two.vercel.app/og-image.svg" },
      { property: "og:image:alt", content: "ABHINAV A S — PHISHIELD case study" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PHISHIELD Case Study — Abhinav A S" },
      { name: "twitter:description", content: "A recruiter-friendly look at the problem, architecture, machine-learning approach, and lessons behind PHISHIELD." },
      { name: "twitter:image", content: "https://abhinav-portfolio-sooty-two.vercel.app/og-image.svg" },
    ],
    links: [{ rel: "canonical", href: "https://abhinav-portfolio-sooty-two.vercel.app/work/phishield" }],
  }),
  component: PhishieldCaseStudy,
});

const sections = [
  { title: "Problem", body: "A suspicious URL rarely explains why it should not be trusted. PHISHIELD turns that uncertainty into a direct, understandable assessment before a user decides to continue." },
  { title: "Solution", body: "The product accepts a URL, validates the input, sends it to a Flask API, extracts relevant URL characteristics, and returns the model’s prediction in a clear interface." },
  { title: "How it works", body: "Each request moves through a short, visible pipeline. Validation and error states remain separate from the actual security result, so users can tell a malformed URL or connection problem from a phishing prediction." },
  { title: "Machine learning approach", body: "A Random Forest classifier built with Scikit-learn evaluates extracted URL features. This approach combines multiple decision trees and returns one classification that the interface can communicate without exposing academic complexity." },
  { title: "Key features", body: "URL input validation, Flask API integration, machine-learning classification, distinct loading and error states, and a responsive result experience designed for quick decisions." },
  { title: "Results", body: "The completed workflow connects the user interface, API, feature extraction, and model prediction into one usable product. It provides a clear foundation for further model testing and feature improvement." },
  { title: "Challenges", body: "The central challenge was separating invalid input, network failure, and a genuine model result. Treating each as its own state made the experience more dependable and easier to test." },
  { title: "What I learned", body: "PHISHIELD strengthened my understanding of frontend–backend integration, API contracts, validation, machine-learning delivery, and the importance of translating technical output into useful product feedback." },
];

function PhishieldCaseStudy() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset["theme"] === "dark");
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset["theme"] = next ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  };

  return (
    <main className="case-page">
      <nav className="case-nav" aria-label="Case study navigation">
        <Link to="/" hash="work"><ArrowLeft aria-hidden size={16} /> All projects</Link>
        <span className="case-nav-tools">AAS / Case 02 <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? <Sun aria-hidden size={16} /> : <Moon aria-hidden size={16} />}</button></span>
      </nav>

      <header className="case-hero">
        <p>Case study / Machine learning security</p>
        <h1>PHISHIELD</h1>
        <div className="case-hero-meta">
          <p>AI-powered phishing URL detection, designed to turn a technical prediction into a confident next step.</p>
          <div>
        <a href="https://phishield-gamma.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open PHISHIELD live demo in a new tab">Live Demo <ArrowUpRight aria-hidden size={16} /></a>
            <a href="https://github.com/abhinavas-10" target="_blank" rel="noreferrer" aria-label="Open Abhinav's GitHub profile in a new tab">GitHub <ArrowUpRight aria-hidden size={16} /></a>
          </div>
        </div>
      </header>

      <motion.figure className="case-cover" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
        <div className="case-cover-placeholder" role="img" aria-label="Placeholder for a PHISHIELD project screenshot">
          <span>Project screenshot</span>
          <strong>PHISHIELD</strong>
          <i aria-hidden />
        </div>
      </motion.figure>

      <section className="architecture" aria-labelledby="architecture-title">
        <p>System architecture</p>
        <h2 id="architecture-title">One clear path from input to decision.</h2>
        <ol>
          {['User', 'Flask API', 'Feature Extraction', 'ML Model', 'Prediction', 'Result'].map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="case-sections" aria-label="PHISHIELD project details">
        {sections.map((section, index) => (
          <motion.article key={section.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </motion.article>
        ))}
      </section>

      <footer className="case-footer">
        <p>Explore the working product.</p>
        <a href="https://phishield-gamma.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open PHISHIELD in a new tab">Open PHISHIELD <ArrowUpRight aria-hidden /></a>
        <Link to="/" hash="work">Return to projects</Link>
      </footer>
    </main>
  );
}