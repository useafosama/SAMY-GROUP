import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Videos } from "./components/Videos";
import { SocialLinks } from "./components/SocialLinks";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-cairo">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Videos />
        <SocialLinks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
