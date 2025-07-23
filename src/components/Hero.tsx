import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/tomer-profile.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Avatar */}
          <div className="mb-8 animate-scale-in">
            <img 
              src={profileAvatar}
              alt="Tomer Raz - Cloud DevOps Engineer"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary shadow-primary animate-float"
            />
          </div>

          {/* Name and Title */}
          <div className="mb-8 space-y-4 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Tomer Raz
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Cloud DevOps Engineer
              </Badge>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Azure-certified Cloud DevOps Engineer with expertise in Infrastructure as Code, 
            CI/CD pipelines, and full-stack development. Passionate about automation and scalable cloud solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button variant="hero" size="lg" className="group">
              View My Work
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
              <a href="https://www.linkedin.com/in/tomer-raz/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;