import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Blog />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
