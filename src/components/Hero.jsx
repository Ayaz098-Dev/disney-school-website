import { ArrowDown, ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-doodle doodle-star">✳</div>
      <div className="hero-doodle doodle-sun">☼</div>
      <div className="hero-doodle doodle-squiggle">〰</div>
      <div className="page-container hero-grid">
        <div className="hero-copy">
          <div className="handmade-label"><span className="label-spark">✦</span> A happy place to grow</div>
          <h1>Big dreams begin<br />with <span className="highlight-word">little steps.</span></h1>
          <p className="hero-description">A school where children feel seen, ideas are welcomed, and every new day brings something wonderful to discover.</p>
          <div className="hero-actions">
            <a href="#admissions" className="button-primary">Explore admissions <ArrowUpRight size={18} /></a>
            <a href="#about" className="text-link">Get to know us <ArrowDown size={16} /></a>
          </div>
          <div className="hero-note">
            <div className="mini-avatars" aria-hidden="true"><span>😊</span><span>🌼</span><span>⭐</span></div>
            <p><strong>A community that cares</strong><br /><span>Children, families & teachers — together.</span></p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-frame">
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1100&q=85" alt="Young children enjoying a happy moment outdoors" />
            <div className="photo-sticker sticker-top"><span>✿</span> Learn with joy</div>
            <div className="photo-sticker sticker-bottom"><span>★</span> Be curious!</div>
          </div>
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="floating-pencil">✎</div>
        </div>
      </div>
      <div className="hero-bottom page-container">
        <span>CURIOUS MINDS</span><span className="tiny-dot"></span><span>KIND HEARTS</span><span className="tiny-dot"></span><span>CONFIDENT FUTURES</span>
        <Star size={17} className="bottom-star" fill="currentColor" />
      </div>
    </section>
  );
}