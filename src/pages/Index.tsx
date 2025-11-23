import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Facility from "@/components/Facility";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Facility />
      <Contact />
    </div>
  );
};

export default Index;
