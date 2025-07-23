import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, GitBranch, Shield, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Designing and implementing scalable cloud solutions on AWS, Azure, and GCP"
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Terraform, CloudFormation, and Ansible for automated infrastructure management"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Building robust deployment pipelines with Jenkins, GitLab CI, and GitHub Actions"
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
    "AWS Solutions Architect Professional",
    "Azure DevOps Engineer Expert",
    "Kubernetes Administrator (CKA)",
    "HashiCorp Terraform Associate",
    "Docker Certified Associate"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 5 years of experience in DevOps and Cloud Engineering, I specialize in building 
            resilient, scalable infrastructure that empowers development teams to innovate faster while 
            maintaining the highest standards of security and reliability.
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