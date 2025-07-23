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
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps and cloud engineering challenges
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;