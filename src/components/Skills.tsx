import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "Microsoft Azure", level: 90 },
        { name: "Google Cloud Platform", level: 75 },
        { name: "Azure DevOps", level: 85 }
      ]
    },
    {
      title: "Infrastructure & Orchestration",
      skills: [
        { name: "Terraform", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Azure CLI", level: 85 },
        { name: "PowerShell", level: 80 }
      ]
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "Azure DevOps", level: 90 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "GitOps", level: 80 },
        { name: "YAML", level: 85 }
      ]
    },
    {
      title: "Development & Programming",
      skills: [
        { name: "React & TypeScript", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "C Programming", level: 75 }
      ]
    }
  ];

  const technologies = [
    "Azure", "GCP", "Terraform", "Azure DevOps", "Docker", "PowerShell", 
    "Azure CLI", "YAML", "GitOps", "Node.js", "React", "TypeScript",
    "JavaScript", "C", "REST APIs", "Git", "Figma", "Agile"
  ];

  return (
    <section className="py-20 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps and cloud engineering challenges
          </p>
        </div>

        {/* Animated Technology Carousel */}
        <div className="relative">
          <h3 className="text-2xl font-bold mb-8 text-center">Technologies & Tools</h3>
          
          {/* First Row - Moving Right */}
          <div className="flex animate-[scroll-right_30s_linear_infinite] gap-4 mb-4 whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, index) => (
              <Badge 
                key={`row1-${index}`}
                variant="outline" 
                className="px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default shadow-lg backdrop-blur-sm bg-card/50 border-primary/20 hover:shadow-primary/20 hover:scale-105 flex-shrink-0"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Second Row - Moving Left */}
          <div className="flex animate-[scroll-left_25s_linear_infinite] gap-4 whitespace-nowrap">
            {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map((tech, index) => (
              <Badge 
                key={`row2-${index}`}
                variant="secondary" 
                className="px-6 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default shadow-lg backdrop-blur-sm bg-secondary/50 border-accent/20 hover:shadow-accent/20 hover:scale-105 flex-shrink-0"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-secondary/20 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;