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

  const technologies = [
    { name: "Azure", logo: azureLogo, icon: Cloud },
    { name: "GCP", logo: gcpLogo, icon: Globe },
    { name: "Terraform", logo: terraformLogo, icon: Settings },
    { name: "Azure DevOps", logo: azureDevopsLogo, icon: GitBranch },
    { name: "PowerShell", logo: powershellLogo, icon: Terminal },
    { name: "Azure CLI", logo: azureCliLogo, icon: Terminal },
    { name: "YAML", logo: yamlLogo, icon: FileCode },
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
            All the tools needed for modern cloud development and operations
          </p>
        </div>

        {/* Animated Technology Carousel */}
        <div className="relative">
          {/* First Row - Moving Right */}
          <div
            className="flex gap-2 whitespace-nowrap animate-[scroll-right_45s_linear_infinite] md:gap-4 mb-2"
            style={{ animationDuration: window.innerWidth < 768 ? '28s' : '55s' }}
          >
            {[...technologies, ...technologies].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Badge
                  key={`row1-${index}`}
                  variant="outline"
                  className="flex-shrink-0 flex items-center gap-1 px-3 py-1 text-xs md:px-6 md:py-3 md:text-sm max-w-[110px] md:max-w-none truncate"
                  style={{ minWidth: window.innerWidth < 768 ? '70px' : undefined }}
                >
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                  ) : (
                    <IconComponent className="h-4 w-4" />
                  )}
                  <span className="truncate block w-full">{tech.name}</span>
                </Badge>
              );
            })}
          </div>

          {/* Second Row - Moving Left */}
          <div
            className="flex gap-2 whitespace-nowrap animate-[scroll-left_24s_linear_infinite] md:gap-4 mb-2"
            style={{ animationDuration: window.innerWidth < 768 ? '24s' : '50s' }}
          >
            {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Badge
                  key={`row2-${index}`}
                  variant="secondary"
                  className="flex-shrink-0 flex items-center gap-1 px-3 py-1 text-xs md:px-6 md:py-3 md:text-sm max-w-[110px] md:max-w-none truncate"
                  style={{ minWidth: window.innerWidth < 768 ? '70px' : undefined }}
                >
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                  ) : (
                    <IconComponent className="h-4 w-4" />
                  )}
                  <span className="truncate block w-full">{tech.name}</span>
                </Badge>
              );
            })}
          </div>

          {/* Third Row - Only show on mobile */}
          {window.innerWidth < 768 && (
            <div
              className="flex gap-2 whitespace-nowrap animate-[scroll-right_20s_linear_infinite] md:gap-4"
              style={{ animationDuration: '20s' }}
            >
              {[...technologies.slice(5), ...technologies.slice(5), ...technologies.slice(0,5), ...technologies.slice(0,5)].map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <Badge
                    key={`row3-${index}`}
                    variant="outline"
                    className="flex-shrink-0 flex items-center gap-1 px-3 py-1 text-xs md:px-6 md:py-3 md:text-sm max-w-[110px] md:max-w-none truncate"
                    style={{ minWidth: window.innerWidth < 768 ? '70px' : undefined }}
                  >
                    {tech.logo ? (
                      <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                    ) : (
                      <IconComponent className="h-4 w-4" />
                    )}
                    <span className="truncate block w-full">{tech.name}</span>
                  </Badge>
                );
              })}
            </div>
          )}

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-secondary/20 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;