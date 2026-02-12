import { useState, useEffect } from "react";
import "./styles.css";
import { experience, projects, skillGroups, allSkills } from "./data";
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

function JobCard({ job }) {
  return (
    <div className="job-card">
      <p className="job-period">{job.period} · {job.type}</p>
      <p className="job-role">{job.role}</p>
      <p className="job-company">{job.company}</p>
      <div className="job-details">
        <p className="job-desc">{job.desc}</p>
        <div className="job-tags">
          {job.tags.map(tag => <span className="job-tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <>
      <div className="project-icon">{project.icon}</div>
      <p className="project-type">{project.tag}</p>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-bottom">
        <div className="project-tech">
          {project.tech.map(tech => <span className="project-badge" key={tech}>{tech}</span>)}
        </div>
        <div className="project-arrow">↗</div>
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
          <a href="#contact" className="nav-contact">Get in touch</a>
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
            <a href="#projects" className="btn-solid">See my work</a>
            <a href="#contact" className="btn-outline">Get in touch</a>
          </div>
        </div>
      </section>


      <div className="about-section" id="about">
        <div className="about-inner">
          <SR>
            <div className="about-text">
              <p className="section-label">About me</p>
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
            <div className="about-info">
              <div className="info-row"><span className="info-label">Location</span><span className="info-value">Washington, DC</span></div>
              <div className="info-row"><span className="info-label">Current role</span><span className="info-value">Software Developer @ Mindpetal</span></div>
              <div className="info-row"><span className="info-label">Focus</span><span className="info-value">Full Stack / Backend</span></div>
              <div className="info-row"><span className="info-label">Education</span><span className="info-value">B.S. Computer Science, UMD</span></div>
            </div>
          </SR>
        </div>
      </div>


      <div className="exp-section" id="experience">
        <div className="exp-inner">
          <SR>
            <p className="section-label">Work experience</p>
            <h2 className="section-title">Where I've worked.</h2>
          </SR>
          <div className="timeline">
            {experience.map((job, i) => (
              <SR key={job.role + job.company} delay={i * 100}>
                <div className="job-item">
                  <div className="job-dot" />
                  <JobCard job={job} />
                </div>
              </SR>
            ))}
          </div>
        </div>
      </div>


      <div className="projects-section" id="projects">
        <div className="projects-inner">
          <SR>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Things I've built.</h2>
            <p className="section-desc">Personal projects, side experiments, and things I shipped at work.</p>
          </SR>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <SR key={project.title} delay={i * 80}>
                {project.link ? (
                  <a href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
                    <ProjectCard project={project} />
                  </a>
                ) : (
                  <div className="project-card">
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
            <p className="section-label">Technical skills</p>
            <h2 className="section-title">What I work with.</h2>
            <p className="section-desc">The tools and technologies I use day to day.</p>
          </SR>
          <SR delay={80}>
            <div className="skill-groups">
              {skillGroups.map(group => (
                <div className="skill-group" key={group.label}>
                  <p className="skill-group-title">{group.label}</p>
                  <div className="skill-group-items">
                    {group.skills.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </SR>
        </div>
        <SR delay={120}>
          <div className="marquee-wrap">
            <div className="marquee">
              {allSkills.map((skill, i) => <div className="marquee-item" key={i}>{skill}</div>)}
            </div>
          </div>
        </SR>
      </div>


      <div className="contact-section" id="contact">
        <SR>
          <div className="contact-inner">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's work together.</h2>
            <p className="section-desc">
              Whether it's a job opportunity, a project, or just a chat — I'd love to connect.
            </p>
            <div className="contact-btns">
              <a href="https://drive.google.com/file/d/1HQEK0Hv5Dbo-pkYqA01eX1V2wM4UhF3Q/view?usp=sharing" className="btn-outline">Download resume</a>
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
