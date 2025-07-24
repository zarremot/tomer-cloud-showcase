import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, GitBranch, Shield, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Designing and implementing scalable cloud solutions primarily on Azure, with additional experience in GCP"
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Terraform and Pulumi for automated infrastructure management and deployment"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Building robust deployment pipelines with Azure DevOps and GitHub Actions"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implementing security best practices and maintaining compliance standards"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Monitoring, alerting, and optimizing system performance and reliability"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Bridging development and operations teams for seamless software delivery"
    }
  ];

  const certifications = [
    "B.Sc Computer Science - In Progress",
    "Microsoft Azure Fundamentals (AZ-900)",
    "Full Stack Development - HackerU",
    "Full Stack Development - Kernelios"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-gradient-to-l from-secondary/15 to-primary/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Currently pursuing B.Sc in Computer Science while working as a Cloud DevOps Engineer at Vegvizer. 
            Experienced in designing secure Azure infrastructure with Terraform, implementing CI/CD pipelines, 
            and full-stack development. Strong background in teamwork, critical thinking, and Agile environments.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;