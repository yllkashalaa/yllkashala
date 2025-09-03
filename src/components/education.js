import './custom.css';

function Education() {
  const experience = [
    {
      title: "Master of Science",
      desc: "Computer Science and Engineering",
      tags: ["Specialization on Software Systems Engineering"],
      color: "text-green-500"
    },
    {
      title: "Full-Stack Web Development",
      desc: "LeWagon Bootcamp",
      tags: ["Munich, Germany"],
      color: "text-green-500"
    },
    {
      title: "Master of Arts",
      desc: "University of Prishtina",
      tags: ["Faculty of Education"],
      color: "text-green-500"
    }
  ];

  return (
    <div className="experience-container">
      <span className=" bg-primary"></span>
      <div className="experience-content">
        <p className="titles">Education</p>
        <p className="subtitles">The Knowledge Behind the Code</p>
        <p className='description'>An overview of my academic journey, showcasing the degrees, courses, and learning experiences that built the foundation for my skills and professional growth.</p>
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

export default Education;
