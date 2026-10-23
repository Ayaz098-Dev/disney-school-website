import { useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { school } from "../data/siteData";

const links = [
  ["Our School", "#about"],
  ["Academics", "#academics"],
  ["Campus Life", "#campus"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-strip">
        <span>Little steps today. Big possibilities tomorrow.</span>
        <a href={`tel:${school.phone}`}><Phone size={14} /> {school.phone}</a>
      </div>
      <div className="nav-wrap page-container">
        <a className="brand" href="#home" aria-label="Disney School home">
          <span className="brand-mark"><span>DS</span><i>✦</i></span>
          <span className="brand-copy">
            <strong>DISNEY</strong>
            <small>JR./SR. INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta mobile-cta" href="#admissions" onClick={() => setOpen(false)}>Admissions <ArrowUpRight size={16} /></a>
        </nav>

        <a className="nav-cta desktop-cta" href="#admissions">Admissions <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}