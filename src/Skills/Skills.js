import SkillsS from "./Skills.module.css";
import Particles from "react-particles-js";
import React, { useEffect } from "react";

function Skills() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className={SkillsS.Skills}>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className={SkillsS.NamePage}>SKILLS</div>
      <div className={`${SkillsS.Frontend} ${SkillsS.BlockStyles}`}>
        <h3>Frontend</h3>
        It's important to make a first impression. A comfortable and beautiful
        UI is what I love and want to do this all my life.
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>TypeScript (coming soon)</li>
          <li>React & Redux</li>
          <li>Vue (coming soon)</li>
        </ul>
      </div>
      <div className={`${SkillsS.Backend} ${SkillsS.BlockStyles}`}>
        <h3>Backend</h3>
        Don't judge a book by its cover. Therefore, it is very important to have
        a fast, safe and functional backend.
        <ul>
          <li>Java (my first technology)</li>
          <li>SQL: MySQL/PostgreSQL</li>
          <li>Node.js (coming soon)</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
