import { ArrowUpRight, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { school } from "../data/siteData";

export default function Admissions() {
  return (
    <section className="admissions-section" id="admissions">
      <div className="page-container admissions-inner">
        <div className="admissions-decoration" aria-hidden="true">✳</div>
        <div className="admissions-copy">
          <p className="eyebrow light-eyebrow">Your next chapter starts here</p>
          <h2>Come meet your<br />child’s next big adventure.</h2>
          <p>Have a question about admissions or want to see the school for yourself? We’d love to help you take the next step.</p>
          <div className="admissions-points"><span><CheckCircle2 size={17} /> Friendly guidance</span><span><CheckCircle2 size={17} /> Campus enquiries</span></div>
        </div>
        <div className="admissions-card">
          <span className="admission-card-icon">✉</span>
          <h3>Let’s talk school.</h3>
          <p>Call us to ask about classes, availability and the admission process.</p>
          <a href={`tel:${school.phone}`} className="button-primary admissions-call"><Phone size={17} /> {school.phone}</a>
          <a href="#contact" className="admissions-small-link">Find our location <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}