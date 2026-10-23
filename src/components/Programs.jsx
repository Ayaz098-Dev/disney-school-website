import SectionHeading from "./SectionHeading";
import { programs } from "../data/siteData";
import { ArrowUpRight } from "lucide-react";

export default function Programs() {
  return (
    <section className="section-pad programs-section" id="academics">
      <div className="page-container">
        <SectionHeading eyebrow="A journey for every age" title={<>Room to learn.<br className="mobile-break" /> Space to become.</>} text="Every stage matters. Our learning journey is designed to help children feel confident, capable and excited about what comes next." />
        <div className="program-grid">
          {programs.map((program) => (
            <article className={`program-card ${program.color}`} key={program.number}>
              <div className="program-card-top"><span className="program-number">{program.number}</span><span className="program-emoji">{program.icon}</span></div>
              <p className="program-age">{program.age}</p>
              <h3>{program.title}</h3>
              <p className="program-text">{program.text}</p>
              <a href="#admissions" className="round-link" aria-label={`Enquire about ${program.title}`}><ArrowUpRight size={19} /></a>
              <span className="card-scribble" aria-hidden="true">〰</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}