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
      className="min-h-screen relative flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Interactive floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Interactive grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="border border-primary/20 hover:bg-primary/10 transition-all duration-500 hover:border-primary/40"
            />
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      
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
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Azure-certified Cloud DevOps Engineer with expertise in Infrastructure as Code, 
            CI/CD pipelines, and full-stack development. Passionate about automation and scalable cloud solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12 animate-slide-up">
            <Button variant="hero" size="lg" className="group" onClick={scrollToAbout}>
              View My Work
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;