import { useState, useEffect } from "react";
import "./styles.css";
import { experience, projects, skillCategories, allSkills } from "./data";
import SR from "./SR";

const navLinks = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const contactLinks = [
  { icon: "✉️", label: "Email", href: "mailto:jeromeshibuwork@gmail.com" },
  { icon: <img src={`${import.meta.env.BASE_URL}linkedin.png`} alt="LinkedIn" width="35" height="35" />, label: "LinkedIn", href: "https://www.linkedin.com/in/jerome-shibu-16a8521b0/" },
  { icon: <img src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub" width="22" height="22" className="invert-dark" />, label: "GitHub", href: "https://github.com/jeromej12" },
];

const footerLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#projects"],
  ["Contact", "#contact"],
];

function TimelineCard({ job }) {
  return (
    <div className="tl-card">
      <p className="tl-period">{job.period} · {job.type}</p>
      <p className="tl-role">{job.role}</p>
      <p className="tl-company">{job.company}</p>
      <div className="tl-details">
        <p className="tl-desc">{job.desc}</p>
        <div className="tl-tags">
          {job.tags.map(tag => <span className="tl-tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <>
      <div className="proj-icon">{project.icon}</div>
      <p className="proj-tag">{project.tag}</p>
      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-desc">{project.desc}</p>
      <div className="proj-footer">
        <div className="proj-tech">
          {project.tech.map(tech => <span className="proj-badge" key={tech}>{tech}</span>)}
        </div>
        <div className="proj-arrow">↗</div>
      </div>
    </>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>

      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <span className="nav-logo">Jerome Shibu</span>
          <ul className="nav-links">
            {navLinks.map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta">Get in touch</a>
          <button className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? "☀" : "☾"}
          </button>
        </div>
      </nav>


      <section className="hero" id="home">
        <div className="hero-inner">
          <h1 className="hero-name">Jerome Shibu</h1>
          <p className="hero-role">
            Software Developer at <span>Mindpetal</span>
          </p>
          <p className="hero-desc">
            I build software and automation — from full-stack web apps to cloud systems on AWS.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-fill">See my work</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>
      </section>


      <div className="about-section" id="about">
        <div className="about-inner">
          <SR>
            <div className="about-text">
              <p className="section-eyebrow">About me</p>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                Curious by nature.<br />Precise by practice.
              </h2>
              <p>
                I'm a Computer Science graduate from the University of Maryland, College Park with a minor in General Business. My interest in software started with wanting to understand how the tools I used every day actually worked and that curiosity turned into a career.
              </p>
              <p>
                I've interned at AWS and PCAOB, building everything from cloud deployment tools to automated workflows that reduced manual overhead. I like writing clean code and building things that actually work well.
              </p>
              <p>
                Outside of work, you'll find me playing guitar, DJing, hiking, or trying out new restaurants. I also like building side projects to explore new tech and solve problems that interest me.
              </p>
            </div>
          </SR>
          <SR delay={120}>
            <div className="about-meta">
              <div className="meta-row"><span className="meta-key">Location</span><span className="meta-val">Washington, DC</span></div>
              <div className="meta-row"><span className="meta-key">Current role</span><span className="meta-val">Software Developer @ Mindpetal</span></div>
              <div className="meta-row"><span className="meta-key">Focus</span><span className="meta-val">Full Stack / Backend</span></div>
              <div className="meta-row"><span className="meta-key">Education</span><span className="meta-val">B.S. Computer Science, UMD</span></div>
            </div>
          </SR>
        </div>
      </div>


      <div className="exp-section" id="experience">
        <div className="exp-inner">
          <SR>
            <p className="section-eyebrow">Work experience</p>
            <h2 className="section-title">Where I've worked.</h2>
          </SR>
          <div className="timeline">
            {experience.map((job, i) => (
              <SR key={job.role + job.company} delay={i * 100}>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <TimelineCard job={job} />
                </div>
              </SR>
            ))}
          </div>
        </div>
      </div>


      <div className="projects-section" id="projects">
        <div className="projects-inner">
          <SR>
            <p className="section-eyebrow">Selected work</p>
            <h2 className="section-title">Things I've built.</h2>
            <p className="section-sub">Personal projects, side experiments, and things I shipped at work.</p>
          </SR>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <SR key={project.title} delay={i * 80}>
                {project.link ? (
                  <a href={project.link} className="proj-card" target="_blank" rel="noopener noreferrer">
                    <ProjectCard project={project} />
                  </a>
                ) : (
                  <div className="proj-card">
                    <ProjectCard project={project} />
                  </div>
                )}
              </SR>
            ))}
          </div>
        </div>
      </div>


      <div className="skills-section" id="skills">
        <div className="skills-inner">
          <SR>
            <p className="section-eyebrow">Technical skills</p>
            <h2 className="section-title">What I work with.</h2>
            <p className="section-sub">The tools and technologies I use day to day.</p>
          </SR>
          <SR delay={80}>
            <div className="skills-cats">
              {skillCategories.map(cat => (
                <div className="skills-cat" key={cat.label}>
                  <p className="skills-cat-title">{cat.label}</p>
                  <div className="skills-cat-items">
                    {cat.skills.map(skill => <span className="skill-chip" key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </SR>
        </div>
        <SR delay={120}>
          <div className="skills-marquee-wrap">
            <div className="skills-marquee">
              {allSkills.map((skill, i) => <div className="marquee-pill" key={i}>{skill}</div>)}
            </div>
          </div>
        </SR>
      </div>


      <div className="contact-section" id="contact">
        <SR>
          <div className="contact-inner">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">Let's work together.</h2>
            <p className="section-sub">
              Whether it's a job opportunity, a project, or just a chat — I'd love to connect.
            </p>
            <div className="contact-btns">
              <a href="#" className="btn-ghost">Download resume</a>
            </div>
            <div className="contact-links">
              {contactLinks.map(link => (
                <a href={link.href} className="contact-link-item" key={link.label} target="_blank" rel="noopener noreferrer">
                  <div className="contact-link-icon">{link.icon}</div>
                  <span className="contact-link-label">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </SR>
      </div>


      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Jerome Shibu. All rights reserved.</p>
          <div className="footer-links">
            {footerLinks.map(([label, href]) => (
              <a href={href} key={label}>{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
