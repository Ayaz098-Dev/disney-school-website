import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { faqs } from "../data/siteData";

export default function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section-pad faq-section">
      <div className="page-container faq-layout">
        <div><SectionHeading align="left" eyebrow="Good to know" title={<>A few questions,<br />answered.</>} text="Need something else? Our school team is happy to help." /></div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className={`faq-item ${active === index ? "faq-active" : ""}`} key={faq.question}>
              <button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}>
                <span>{faq.question}</span>{active === index ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              {active === index && <p>{faq.answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}