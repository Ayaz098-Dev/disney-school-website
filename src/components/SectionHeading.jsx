export default function SectionHeading({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`section-heading ${align === "left" ? "text-left" : "text-center"}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}