import { ArrowUpRight, Phone } from "lucide-react";
import { school } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-main">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><span>DS</span><i>✦</i></span>
          <span className="brand-copy"><strong>DISNEY</strong><small>JR./SR. INTERNATIONAL SCHOOL</small></span>
        </a>
        <p>Growing kind hearts and curious minds,<br />one little step at a time.</p>
        <a className="footer-phone" href={`tel:${school.phone}`}><Phone size={16} /> {school.phone}</a>
      </div>
      <div className="page-container footer-bottom">
        <span>© {new Date().getFullYear()} {school.name}. All rights reserved.</span>
        <div><a href="#home">Back to top ↑</a><span className="footer-flower">✿</span></div>
      </div>
    </footer>
  );
}