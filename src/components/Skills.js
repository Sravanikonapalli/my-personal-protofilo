import React, { useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/skills.css";

const technicalSkills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "JavaScript", level: 95 },
  { name: "React", level: 97 },
  { name: "Node.js", level: 90 },
  { name: "Python", level: 92 },
  { name: "SQL", level: 95 },
  { name: "Git", level: 95 },
];

const otherSkills = [
  { name: "Problem Solving", level: 98 },
  { name: "Creativity", level: 97 },
  { name: "Teamwork", level: 98 },
  { name: "Communication", level: 96 },
];

const Skills = () => {
  const circleRefs = useRef([]); // Holds references to circular skill elements
  useEffect(() => {
    const currentRefs = circleRefs.current;

    // Create IntersectionObserver to animate circles when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const level = otherSkills[index].level;
            const angle = (level / 100) * 360;
            const circle = entry.target.querySelector(".circle");
            if (circle) {
              circle.classList.add("visible");
              circle.style.setProperty("--angle", `${angle}deg`);
            }
          }
        });
      },
      { threshold: 0.5 } // Fire animation when 50% visible
    );

    // Attach observer to each circle wrapper
    currentRefs.forEach((ref) => {              
      if (ref) observer.observe(ref);
    });

        
    // Cleanup on unmount
    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills">
      <h2 className="skills-heading">
        Skill <span>Proficiency</span>
      </h2>

      <div className="skills-wrapper">
        {/* Technical Skills */}
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={technicalSkills} layout="vertical" margin={{ left: 40 }}>
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} />
              <Bar dataKey="level" fill="#ff69b4" radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Other Skills */}
        <div className="other-skills">
          <h3>Other Skills</h3>
          <div className="circles">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="circle-wrapper"
                ref={(el) => (circleRefs.current[index] = el)}
              >
                <div className="circle">
                  <div className="label">
                    {skill.name}
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
