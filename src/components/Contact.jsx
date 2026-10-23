import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { school } from "../data/siteData";

export default function Contact() {
  const mapQuery = encodeURIComponent(school.address);
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="page-container">
        <div className="contact-heading">
          <div><p className="eyebrow">We’re right here in Muzaffarpur</p><h2>Let’s make the first<br />hello a happy one.</h2></div>
          <p>Come by, give us a call, or send a family member to learn more. We’ll help you with the next step.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-detail"><span className="contact-icon"><MapPin /></span><div><h3>Visit the school</h3><p>{school.address}</p></div></div>
            <div className="contact-detail"><span className="contact-icon"><Phone /></span><div><h3>Call our team</h3><a href={`tel:${school.phone}`}>{school.phone}</a></div></div>
            <div className="contact-detail"><span className="contact-icon"><Clock /></span><div><h3>Plan a visit</h3><p>Please call ahead to confirm suitable visiting hours.</p></div></div>
            <a className="button-primary contact-call" href={`tel:${school.phone}`}>Call the school <ArrowUpRight size={17} /></a>
          </div>
          <div className="map-card">
            <div className="map-placeholder">
              <div className="map-paper-lines"></div>
              <div className="map-pin"><MapPin size={28} fill="currentColor" /></div>
              <div className="map-label"><strong>Disney School</strong><span>Kacchi Pakki · Muzaffarpur</span></div>
              <div className="map-road road-one"></div><div className="map-road road-two"></div><div className="map-road road-three"></div>
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer" className="map-open">Open in Google Maps <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}