import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Globe, 
  Settings, 
  Terminal, 
  Container, 
  Code, 
  GitBranch, 
  FileCode, 
  Database,
  Palette,
  Users,
  Zap
} from "lucide-react";

// Import real logos
import terraformLogo from "@/assets/logos/terraform-fixed.svg";
import gcpLogo from "@/assets/logos/gcp.svg";
import gitLogo from "@/assets/logos/git.svg";
import gitAltLogo from "@/assets/logos/git-alt.svg";
import dockerLogo from "@/assets/logos/docker.svg";
import nodejsLogo from "@/assets/logos/nodejs.svg";
import reactLogo from "@/assets/logos/react.svg";
import typescriptLogo from "@/assets/logos/typescript.svg";
import javascriptLogo from "@/assets/logos/javascript.svg";
import figmaLogo from "@/assets/logos/figma.svg";
import azureLogo from "@/assets/logos/azure.svg";
import powershellLogo from "@/assets/logos/powershell.png";
import azureDevopsLogo from "@/assets/logos/azure-devops.svg";
import yamlLogo from "@/assets/logos/yaml.svg";
import azureCliLogo from "@/assets/logos/azure-cli.png";
import cLangLogo from "@/assets/logos/c-lang.svg";
import bitbucketLogo from "@/assets/logos/bitbucket.svg";
import gitlabLogo from "@/assets/logos/gitlab.svg";
import githubLogo from "@/assets/logos/github.svg";

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
    { name: "Azure", logo: azureLogo, icon: Cloud },
    { name: "GCP", logo: gcpLogo, icon: Globe },
    { name: "Terraform", logo: terraformLogo, icon: Settings },
    { name: "Azure DevOps", logo: azureDevopsLogo, icon: GitBranch },
    { name: "Docker", logo: dockerLogo, icon: Container },
    { name: "PowerShell", logo: powershellLogo, icon: Terminal },
    { name: "Azure CLI", logo: azureCliLogo, icon: Terminal },
    { name: "YAML", logo: yamlLogo, icon: FileCode },
    { name: "GitOps", logo: gitAltLogo, icon: GitBranch },
    { name: "Node.js", logo: nodejsLogo, icon: Zap },
    { name: "React", logo: reactLogo, icon: Code },
    { name: "TypeScript", logo: typescriptLogo, icon: Code },
    { name: "JavaScript", logo: javascriptLogo, icon: Code },
    { name: "C", logo: cLangLogo, icon: Code },
    { name: "REST APIs", icon: Database },
    { name: "Git", logo: gitLogo, icon: GitBranch },
    { name: "GitHub", logo: githubLogo, icon: GitBranch },
    { name: "GitLab", logo: gitlabLogo, icon: GitBranch },
    { name: "Bitbucket", logo: bitbucketLogo, icon: GitBranch },
    { name: "Figma", logo: figmaLogo, icon: Palette },
    { name: "Agile Methodologies", icon: Users },
    { name: "AI Tools", icon: Zap }
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
          {/* First Row - Moving Right */}
          <div className="flex animate-[scroll-right_45s_linear_infinite] gap-4 mb-4 whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Badge 
                  key={`row1-${index}`}
                  variant="outline" 
                  className="px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default shadow-lg backdrop-blur-sm bg-card/50 border-primary/20 hover:shadow-primary/20 hover:scale-105 flex-shrink-0 flex items-center gap-2"
                >
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                  ) : (
                    <IconComponent className="h-4 w-4" />
                  )}
                  {tech.name}
                </Badge>
              );
            })}
          </div>

          {/* Second Row - Moving Left */}
          <div className="flex animate-[scroll-left_40s_linear_infinite] gap-4 whitespace-nowrap">
            {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Badge 
                  key={`row2-${index}`}
                  variant="secondary" 
                  className="px-6 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default shadow-lg backdrop-blur-sm bg-secondary/50 border-accent/20 hover:shadow-accent/20 hover:scale-105 flex-shrink-0 flex items-center gap-2"
                >
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                  ) : (
                    <IconComponent className="h-4 w-4" />
                  )}
                  {tech.name}
                </Badge>
              );
            })}
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