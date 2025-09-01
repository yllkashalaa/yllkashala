import './custom.css';

function Experience() {
  const experience = [
    {
      title: "Frontend Developer",
      desc: "HoxWeb L.L.C",
      tags: ["April 2024 - Present"],
      color: "text-green-500"
    },
    {
      title: "AlbiSoft GmbH",
      desc: "Web Developer",
      tags: ["January 2025 - July 2025"],
      color: "text-green-500"
    },
    {
      title: "Software Developer",
      desc: "TelOS Labs",
      tags: ["March 2023 - June 2024"],
      color: "text-green-500"
    }
  ];

  return (
    <div className="experience-container">
      <span className=" bg-primary"></span>
      <div className="experience-content">
        <p className="experience-title">Experience</p>
        <p className="experience-subtitle">Professional Milestones and Achievements</p>
        <p className='experience-desc'>A glimpse into my career path, highlighting the roles and experiences that honed my skills and shaped my professional growth.</p>
      </div>

      <div className="experience-grid">
        {experience.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <div className="experience-card-title">{exp.title}</div>
            <div className="experience-card-desc">{exp.desc}</div>
            <div>
              {exp.tags.map((tag, i) => (
                <span key={i} className="experience-card-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
