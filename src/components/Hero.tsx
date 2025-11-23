import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";
import heroImage from "@/assets/hero-boxing.jpg";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Boxing training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-boxing-dark/95 via-boxing-dark/85 to-boxing-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-boxing-red/20 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Paphos Boxing Club Logo" className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/30 hover:ring-primary/60 transition-all duration-300" />
            <div className="hidden md:block">
              <h2 className="text-xl font-bebas text-white tracking-wider">Paphos Boxing Club</h2>
              <p className="text-xs text-red-400">Cyprus Training Academy</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('programs')} className="text-white hover:text-primary transition-colors">Programs</button>
            <button onClick={() => scrollToSection('facility')} className="text-white hover:text-primary transition-colors">Facility</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-primary transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-boxing-dark/98 backdrop-blur-lg border-t border-primary/20 animate-fade-in">
            <div className="flex flex-col gap-4 p-6">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary transition-colors text-left py-2">About</button>
              <button onClick={() => scrollToSection('programs')} className="text-white hover:text-primary transition-colors text-left py-2">Programs</button>
              <button onClick={() => scrollToSection('facility')} className="text-white hover:text-primary transition-colors text-left py-2">Facility</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-primary transition-colors text-left py-2">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-fade-in">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white leading-none">
            Train Like A
            <br />
            <span className="block text-primary text-7xl md:text-9xl lg:text-[10rem] mt-2 relative drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              CHAMPION
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            Elite boxing training academy in the heart of Paphos, Cyprus. 
            Professional coaching, state-of-the-art equipment, and proven results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/50"
              onClick={() => scrollToSection('programs')}
            >
              View Programs
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-boxing-dark text-lg px-8 py-6 font-semibold hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bebas text-primary">7+</div>
              <div className="text-sm text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="text-center border-x border-primary/30">
              <div className="text-4xl md:text-5xl font-bebas text-primary">100+</div>
              <div className="text-sm text-gray-400 mt-1">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bebas text-primary">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Training Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
