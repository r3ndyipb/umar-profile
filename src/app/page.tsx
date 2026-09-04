import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import AboutMe from '@/components/AboutMe';
import Expertise from '@/components/Expertise';
import Impact from '@/components/Impact';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* 01. Full 100vh Hero Screen (Navbar + Hero Stage) */}
      <section className="hero-screen" id="home">
        <Navbar />
        <Hero />
      </section>

      {/* 02. Infinite Marquee Loop (Strictly Below/Outside Hero Viewport, Solid Black Background) */}
      <Marquee />

      {/* 03. About Me Section (Image Left, Narrative Right) */}
      <AboutMe />

      {/* 04. Core Pillars of Expertise */}
      <Expertise />

      {/* 05. Proven Track Record & Impact Milestones */}
      <Impact />

      {/* 06. Executive Endorsements */}
      <Testimonials />

      {/* 07. Connect & Advisory Booking */}
      <Contact />

      {/* 08. Footer */}
      <Footer />
    </div>
  );
}
