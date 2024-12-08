import React, { useState, useEffect } from "react";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PreLoader from "./components/PreLoader";
import ScrollToTop from "./components/helper/scroll-to-top";
import Experience from "./components/Experience";
import { personalData } from "./dataStore";
import Aos from "aos";
import "aos/dist/aos.css";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactSection from "./components/ContactSection";
import Projects from "./components/Projects";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    document.title = `${personalData.name}'s Portfolio`;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          {/* <Blog /> */}
          <ContactSection />
          <ScrollToTop />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
