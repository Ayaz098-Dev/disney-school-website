import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Story from "./components/Story";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Admissions from "./components/Admissions";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programs />
        <Story />
        <Facilities />
        <Gallery />
        <Admissions />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}