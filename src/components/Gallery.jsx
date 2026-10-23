import SectionHeading from "./SectionHeading";

const photos = [
  { src: "photo-1472162072942-cd5147eb3902", alt: "Children exploring and playing together", cls: "gallery-tall" },
  { src: "photo-1503676260728-1c00da094a0b", alt: "Children learning together in a classroom", cls: "gallery-wide" },
  { src: "photo-1516627145497-ae6968895b74", alt: "Child enjoying a creative activity", cls: "gallery-small" },
  { src: "photo-1502086223501-7ea6ecd79368", alt: "Children playing outdoors in the sunshine", cls: "gallery-small" },
];

export default function Gallery() {
  return (
    <section className="section-pad gallery-section" id="gallery">
      <div className="page-container">
        <SectionHeading eyebrow="Little moments, big memories" title="A glimpse of the joy." text="Learning happens in a hundred little moments — in a question, a new friendship or a masterpiece made with paint-covered fingers." />
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <figure className={`gallery-photo ${photo.cls}`} key={photo.src}>
              <img src={`https://images.unsplash.com/${photo.src}?auto=format&fit=crop&w=900&q=80`} alt={photo.alt} loading="lazy" />
              <figcaption>{["Play. Explore. Repeat.", "Curious by nature.", "Made with imagination.", "Outside is a classroom too."][index]}</figcaption>
            </figure>
          ))}
        </div>
        <p className="gallery-disclaimer">Campus photographs shown are illustrative. Contact the school for an in-person visit and current campus details.</p>
      </div>
    </section>
  );
}