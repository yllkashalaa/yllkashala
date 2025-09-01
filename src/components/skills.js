import './skills.css';

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      desc: "Crafting interactive and user-friendly web experiences with modern technologies",
      icon: "<>",
      tags: ["JavaScript", "TypeScript","React", "Next.js", "TailwindCSS"],
      color: "text-green-500"
    },
    {
      title: "Backend",
      desc: "Designing robust servers and efficient databases to power seamless applications",
      icon: "<>",
      tags: ["Node.js", "PostgreSQL"],
      color: "text-green-500"
    },
    {
      title: "Project Management",
      desc: "Planning, organizing, and executing projects efficiently to achieve goals on time",
      icon: "▢",
      tags: ["Agile", "Scrum", "Kanban", "Trello", "Jira"],
      color: "text-green-500"
    },
    {
      title: "UI/UX Design",
      desc: "Transforming ideas into visually stunning and user-friendly designs",
      icon: "✎",
      tags: ["UX Research", "UI Design", "Figma"],
      color: "text-green-500"
    },
  ]

  return (
    <div className='skills bg-bgSecondary'>
      <div className='skills-content max-w-4xl mx-auto flex flex-col justify-center items-center gap-4 py-6'>
        <div className="grid md:grid-cols-2 gap-4 w-full">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-bgPrimary rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-1 mb-2">
                <div className={`text-lg ${skill.color}`}>{skill.icon}</div>
                <h2 className="text-lg text-white font-semibold">{skill.title}</h2>
              </div>
              <p className="text-[11px] text-gray-400 mb-2">{skill.desc}</p>
              <div className="flex flex-wrap gap-1">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-black/30 text-gray-200 text-[9px] px-1.5 py-0.5 rounded"
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
