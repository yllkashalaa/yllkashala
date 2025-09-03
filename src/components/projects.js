import "./custom.css";

const projects = [
  {
    title: "To-Do List",
    desc: "Lorem ipsum",
    tech: [],
    demo: "#",
    image: "",
  },
  {
    title: "Elegance-Elixir",
    desc: "",
    tech: [],
    demo: "#",
    image: "#",
  },
  {
    title: "PocketNuse",
    desc: "Lorem ipsum",
    tech: [],
    demo: "#",
    image: "/images/pigdice.png",
  },
  {
    title: "To-Do List Design",
    desc: "Lorem-ipsum",
    tech: [],
    image: "/images/minesweeper.png",
  },
  {
    title: "Elegance-Elixir Design",
    desc: "Lorem-ipsum",
    tech: [],
    image: "/images/minesweeper.png",
  },
  {
    title: "PocketNurse Design",
    desc: "Lorem-ipsum",
    tech: [],
    image: "/images/minesweeper.png",
  },
  {
    title: "To-Do List Project Management",
    desc: "Lorem-ipsum",
    tech: [],
    image: "/images/minesweeper.png",
  },
  {
    title: "Elegance-Elixir Project Management",
    desc: "Lorem-ipsum",
    tech: [],
    image: "/images/minesweeper.png",
  },
  {
    title: "PocketNurse Project Management",
    desc: "Lorem-ipsum",
    tech: [],
    image: "/images/minesweeper.png",
  },
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
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="buttons">
                <a href={p.demo} className="btn btn-demo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-3 h-3 mr-1.5" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                    Demo
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
