import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Story() {
  return (
    <section className="story-section section-pad" id="about">
      <div className="page-container story-grid">
        <div className="story-image-wrap">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85" alt="A bright classroom prepared for a day of learning" loading="lazy" />
          <div className="story-note"><Heart size={19} fill="currentColor" /><span>Every child has<br />their own kind of magic.</span></div>
          <span className="story-sun" aria-hidden="true">✹</span>
        </div>
        <div className="story-copy">
          <SectionHeading align="left" eyebrow="The heart of our school" title={<>A place to feel<br />at home, and<br /><span className="coral-word">ready to fly.</span></>} />
          <p className="story-body">School is about more than lessons and notebooks. It is where children find their voice, learn to care for others, try something new and discover what makes them special.</p>
          <p className="story-body">At Disney Jr./Sr. International Prep./Public School, we believe that encouragement, meaningful learning and a supportive school community can help every child take their next step with confidence.</p>
          <div className="story-values">
            <span><Sparkles size={17} /> Curiosity first</span>
            <span><Heart size={17} /> Kindness always</span>
          </div>
          <a href="#contact" className="text-link">Come say hello <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}