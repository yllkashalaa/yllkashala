import "./custom.css";

const projects = [
  {
    title: "To-Do List",
    desc: "Task management app with a clean, responsive interface. Responsible for full frontend development using Next.js and JavaScript.",
    tech: ["UX Reasearch", "UI Design", "Figma", "Project Management", "JavaScript", "Next.js", "TailwindCSS"],
    image: "",
  },
  {
    title: "Elegance Elixir",
    desc: "UI/UX design for a Shopware store with clean, intuitive, and visually engaging interface from wireframes to high-fidelity prototype.",
    tech: ["UX Reasearch", "UI Design", "Figma", "Project Management"],
    image: "/images/elixir-elegance.png",
  },
  {
    title: "Pocket Nurse",
    desc: "Managed project and designed a user-friendly interface for a healthcare solution. Coding in progress.",
    tech: ["UX Reasearch", "UI Design", "Figma", "Project Management"],
    image: "/images/pocket-nurse.png"
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Some Projects</h2>
      <p className="projects-subtitle">
        A collection of projects that demonstrate my problem-solving mindset, technical expertise, and passion for building meaningful digital experiences.
      </p>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.image} alt={p.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-content-title">{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="buttons">
                <a href={p.demo} className="btn btn-demo flex items-center justify-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  View Project
                </a>
                {p.demo && (
                  <a href={p.code} className="btn btn-code">
                  Code
                </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
