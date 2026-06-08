import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Trophy,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.92c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .27.18.58.69.48A10.1 10.1 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

const navItems = ["Home", "About", "Work", "Experience", "Contact"];

const projects = [
  {
    title: "THIRIKE",
    kind: "Social Impact",
    summary:
      "A community waste management platform connecting households, waste collectors, scrap dealers, and self-help groups to improve coordination and promote sustainable practices.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    link: "https://github.com/KRISHNAVENI-P-2006",
    image: "/photos/project/thirike.jpg",
  },
  {
    title: "AUTOVERSE",
    kind: "Full Stack",
    summary:
      "A web-based car dealership management system with role-based access for Admin, Staff, and Customers — built with Flask and SQLite, featuring vehicle listing, booking, and sales tracking.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    link: "https://autoverse-sy3v.onrender.com",
    image: "/photos/project/autoverse.jpg",
  },
  {
    title: "PORTFOLIX.TECH REDESIGN",
    kind: "Frontend",
    summary:
      "Redesigned the Portfolix website with a modern, responsive interface, improving visual appeal, usability, and overall user experience during my internship.",
    tech: ["HTML", "CSS", "JavaScript","React"],
    link: "https://portfolix-redesign.netlify.app/",
    image: "/photos/project/portfolix.jpg",
  },
  {
    title: "JavaScript Mini Builds",
    kind: "Frontend",
    summary:
      "A set of interactive browser games — Tic Tac Toe, Rock Paper Scissors, and more — built to strengthen DOM manipulation, event handling, and responsive design fundamentals.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://rockk-paper-scissorss.netlify.app/",
    image: "/photos/project/rps.jpg",
  },
];

const skills = [
  ["Languages", "Java", "Python", "C", "C++"],
  ["Web & Tools", "HTML", "CSS", "JavaScript", "MySQL"],
  ["Frameworks", "Flask", "SQLite", "React", "APIs"],
  ["Other Skills", "Problem Solving", "UI/UX Basics", "Communication", "Team Collaboration"],
];

const experience = [
  {
    icon: UsersRound,
    title: "Google Developer Groups on Campus",
    org: "Core Committee Member, MACE",
    period: "2025 – 2026",
    detail:
      "Assisting in smooth execution of events as part of the documentation team — supporting design sessions, hackathons, and developer community initiatives.",
  },
  {
    icon: UsersRound,
    title: "Arang'26 – Sanskriti",
    org: "Sub-Core Member",
    period: "2025 – 2026",
    detail:
      "Contributed to planning and execution of cultural events, serving as event head and coordinating logistics for Sanskriti's flagship programme.",
  },
  {
    icon: BadgeCheck,
    title: "Girlathon 2025",
    org: "Volunteer – DSC MACE @ KSUM Kalamassery",
    period: "2025",
    detail:
      "Assisted in organizing and coordinating the event at KSUM, Kalamassery — managing logistics and supporting participants throughout the day.",
  },
  {
    icon: BadgeCheck,
    title: "NASA Space Apps Challenge 2025",
    org: "Volunteer – AISA MACE",
    period: "2025",
    detail:
      "Contributed to the documentation team, helping record proceedings, summarize sessions, and support participant communications.",
  },
  {
    icon: GraduationCap,
    title: "B.Tech Computer Science Engineering",
    org: "Mar Athanasius College of Engineering, Kothamangalam",
    period: "2024 – 2028",
    detail:
      "Currently pursuing B.Tech CSE with a CGPA of 9.32. Focused on full stack development, applied AI, data structures, and collaborative product-building through tech events.",
  },
];

const achievements = [
  {
    icon: Trophy,
    text: "Class XII — 99.5% (State Board, NSBHSS Mannar)",
  },
  {
    icon: Trophy,
    text: "Class X — 97.2% (CBSE, Amrita Vidyalayam Harippad)",
  },
  {
    icon: BadgeCheck,
    text: "B.Tech CSE — CGPA 9.32, MACE Kothamangalam",
  },
  {
    icon: Zap,
    text: "Participated in multiple hackathons and technical events",
  },
  {
    icon: Code2,
    text: "Active problem solver on LeetCode and HackerRank",
  },
  {
    icon: UsersRound,
    text: "Coordinated and volunteered in several campus and state-level events",
  },
];

function App() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.dataset.nav);
        }
      },
      { rootMargin: "-28% 0px -52% 0px", threshold: [0.18, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const floatingWords = useMemo(
    () => ["", "", "", "", "", "", ""],
    []
  );

  const goTo = (item) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <button className="brand" onClick={() => goTo("Home")} aria-label="Go home">
          <span>Krishnaveni P</span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          className="menu-button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button key={item} onClick={() => goTo(item)}>
                {item}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* ── HOME ── */}
<section id="home" data-nav="Home" className="hero page-section">
  <div className="hero-copy reveal">
    <p className="eyebrow">
      <Sparkles size={14} />
      CSE Student · Builder · Community Volunteer
    </p>
    <h1>Krishnaveni P</h1>
    <p className="hero-text">
      Second-year CSE student at MACE Kothamangalam — building across full stack web,
      applied AI, DSA, and community tech through GDG On Campus and hackathons.
    </p>
    <div className="hero-actions">
      <button className="primary-action" onClick={() => goTo("Work")}>
        View work <ArrowUpRight size={16} />
      </button>
      <a className="secondary-action" href="https://github.com/KRISHNAVENI-P-2006" target="_blank" rel="noreferrer">
        <GithubIcon size={16} /> GitHub
      </a>
      <a className="secondary-action" href="https://www.linkedin.com/in/krishnaveni-p-32155134b/" target="_blank" rel="noreferrer">
        <LinkedinIcon size={16} /> LinkedIn
      </a>
    </div>
  </div>

  <div className="hero-stage reveal delay-1" aria-label="Photo space">
    <div className="portrait-frame-straight">
      <img src="/photos/profile.jpeg" alt="Krishnaveni P" />
      <div className="photo-placeholder">
      </div>
    </div>
  </div>
</section>

        {/* ── ABOUT ── */}
        <section id="about" data-nav="About" className="page-section about-section">
          <div className="section-kicker">About</div>
          <div className="split-layout">
            <div>
              <h2>From concepts to code</h2>
            </div>
            <div className="about-copy">
              <p>
                I am a second-year Computer Science student at Mar Athanasius College of
                Engineering actively building experience across web development, AI, community
                engagement, and event participation. My strongest pattern is learning by
                shipping: hackathon prototypes, project documentation, and full stack interfaces.
              </p>
              <p>
                My current direction combines React-style frontends, Python backends, MySQL,
                and stronger DSA fundamentals. I gravitate toward projects where technology
                is directly useful to people — waste management systems, location tools, and
                civic-tech ideas.
              </p>
            </div>
          </div>

          <div className="skill-grid">
            {skills.map(([group, ...items]) => (
              <article className="skill-panel" key={group}>
                <h3>{group}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── WORK ── */}
        <section id="work" data-nav="Work" className="page-section work-section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Projects</div>
              <h2>Learning, building, and solving</h2>
            </div>
            <a className="text-link" href="https://github.com/KRISHNAVENI-P-2006" target="_blank" rel="noreferrer">
              All repositories <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.title}>
                <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="project-image">
                  <img src={project.image} alt="" />
                  <div className="photo-placeholder">
                    <span>Add project image</span>
                    <small>{project.image}</small>
                  </div>
                </div>
                <div className="project-content">
                  <p>{project.kind}</p>
                  <h3>{project.title}</h3>
                  <span>{project.summary}</span>
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <small key={tech}>{tech}</small>
                    ))}
                  </div>
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <ArrowUpRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" data-nav="Experience" className="page-section experience-section">
          <div className="section-kicker">Experience &amp; Education</div>
          <h2>Volunteering, organizing, building — and studying.</h2>
          <div className="timeline">
            {experience.map((item) => {
              const Icon = item.icon;
              return (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-marker">
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="timeline-meta">
                      <span>{item.period}</span>
                      <span>{item.org}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Achievements sub-section */}
          <div className="achievements-block">
            <div className="section-kicker" style={{ marginTop: "3rem" }}>Achievements</div>
            <div className="achievements-grid">
              {achievements.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div className="achievement-item" key={i}>
                    <Icon size={15} className="ach-icon" />
                    <span>{a.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" data-nav="Contact" className="page-section contact-section">
          <div className="contact-panel">
            <div>
              <div className="section-kicker">Contact</div>
              <h2>Open to internships, hackathon teams, and web projects.</h2>
              <p>
                The best place to see current work is GitHub. For professional updates and
                collaboration, connect on LinkedIn.
              </p>
            </div>
            <div className="contact-links">
              <a href="https://github.com/KRISHNAVENI-P-2006" target="_blank" rel="noreferrer">
                <GithubIcon size={18} /> GitHub <ArrowUpRight size={16} />
              </a>
              <a href="https://www.linkedin.com/in/krishnaveni-p-32155134b/" target="_blank" rel="noreferrer">
                <LinkedinIcon size={18} /> LinkedIn <ArrowUpRight size={16} />
              </a>
              <a href="mailto:krishnaveni.p159@gmail.com">
                <Mail size={18} /> krishnaveni.p159@gmail.com <ArrowUpRight size={16} />
              </a>
              <span>
                <MapPin size={17} /> Kothamangalam, Kerala
              </span>
              <span>
                <BookOpen size={17} /> 2nd Year CSE — CGPA 9.32
              </span>
              <span>
                <Code2 size={17} /> Web · AI · DSA · Java · Python
              </span>
              <span>
                <CalendarDays size={17} /> Available for opportunities
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
