import React from "react";
import "../styles/components/aboutcontainer.sass";
import "../styles/components/carrer.sass";
import { carrerData } from "../dataBase/carrerData";

const CarrerContainer = () => {
  return (
<section className="experience-section">
      <h2>Carreira</h2>

      <div className="experience-list">
        {carrerData.map((exp) => (
          <article className="experience-item" key={`${exp.company}-${exp.role}`}>
            <header className="experience-header">
              <h3 className="experience-title">
                {exp.company} — <span className="experience-role">{exp.role}</span>
              </h3>
              <span className="experience-period">{exp.period}</span>
            </header>

            {exp.summary && <p className="experience-summary">{exp.summary}</p>}

            {Array.isArray(exp.bullets) && exp.bullets.length > 0 && (
              <ul className="experience-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {Array.isArray(exp.techs) && exp.techs.length > 0 && (
              <div className="experience-techs">
                <strong>Tecnologias:</strong> {exp.techs.join(", ")}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default CarrerContainer;
