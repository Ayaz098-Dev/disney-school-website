import { BookOpen, Palette, Trophy, FlaskConical, ShieldCheck, Users, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { facilities } from "../data/siteData";

const icons = { BookOpen, Palette, Trophy, FlaskConical, ShieldCheck, Users };

export default function Facilities() {
  return (
    <section className="section-pad facilities-section" id="campus">
      <div className="page-container facilities-layout">
        <div className="facilities-intro">
          <SectionHeading align="left" eyebrow="More than a classroom" title={<>A little bit of<br />everything they<br /><span className="scribble-underline">love.</span></>} text="Children learn in different ways. We make room for questions, movement, friendship and the joy of making something with their own hands." />
          <a href="#contact" className="button-outline">Discover our school <ArrowUpRight size={17} /></a>
          <div className="hand-drawn-flower" aria-hidden="true">✿</div>
        </div>
        <div className="facility-grid">
          {facilities.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <article className={`facility-item facility-${index + 1}`} key={item.title}>
                <div className="facility-icon"><Icon size={23} strokeWidth={1.8} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}