import './custom.css';

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      desc: "Crafting interactive and user-friendly web experiences with modern technologies",
      icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-primary mr-3"
        aria-hidden="true"
      >
        <path d="M12 19h8"></path>
        <path d="m4 17 6-6-6-6"></path>
      </svg>
    ),
      tags: ["JavaScript", "TypeScript","React.js", "Next.js", "Shopware Frontend", "Twig", "TailwindCSS", "Bootstrap"],
      color: "text-green-500"
    },
    {
      title: "Backend",
      desc: "Designing robust servers and efficient databases to power seamless applications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-6 h-6 text-primary mr-3" aria-hidden="true"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
      ),
      tags: ["Node.js", "PostgreSQL"],
      color: "text-green-500"
    },
    {
      title: "Project Management",
      desc: "Planning, organizing, and executing projects efficiently to achieve goals on time",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase w-6 h-6 text-primary mr-3" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
      ),
      tags: ["Agile", "Scrum", "Kanban", "Trello", "Jira", "Azure DevOps"],
      color: "text-green-500"
    },
    {
      title: "UI/UX Design",
      desc: "Transforming ideas into visually engaging and intuitive designs that drive impact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brush w-6 h-6 text-primary mr-3" aria-hidden="true"><path d="m11 10 3 3"></path><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"></path><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"></path></svg>
      ),
      tags: ["UX Research", "UI Design", "Figma"],
      color: "text-green-500"
    },
  ]

  return (
    <div className='skills-content bg-bgSecondary'>
      <div className='skills-content'>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skills-card">
              <div className="flex items-center gap-1 mb-2">
                <div className={`text-lg ${skill.color}`}>{skill.icon}</div>
                <h2 className="skills-card-title">{skill.title}</h2>
              </div>
              <p className="skills-card-desc">{skill.desc}</p>
              <div className="flex flex-wrap gap-1">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="skills-card-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
