import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Shield, Cloud, Cpu } from "lucide-react";
import cloudArchitecture from "@/assets/cloud-architecture.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description: "Designed and implemented a unified Kubernetes platform spanning AWS, Azure, and GCP with automated failover and cross-cloud workload distribution.",
      image: cloudArchitecture,
      technologies: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Istio"],
      highlights: [
        "99.9% uptime across all regions",
        "50% reduction in deployment time",
        "Automated disaster recovery"
      ],
      icon: Cloud,
      metrics: {
        uptime: "99.9%",
        cost_savings: "30%",
        deployment_speed: "10x faster"
      }
    },
    {
      title: "Zero-Downtime CI/CD Pipeline",
      description: "Built a sophisticated CI/CD pipeline with blue-green deployments, automated testing, and rollback capabilities for microservices architecture.",
      image: cloudArchitecture,
      technologies: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Helm"],
      highlights: [
        "Zero-downtime deployments",
        "Automated security scanning",
        "Real-time deployment monitoring"
      ],
      icon: Zap,
      metrics: {
        deployment_frequency: "50/day",
        lead_time: "< 2 hours",
        change_failure: "< 5%"
      }
    },
    {
      title: "Infrastructure Security Hardening",
      description: "Implemented comprehensive security measures including automated compliance checking, vulnerability scanning, and secure secrets management.",
      image: cloudArchitecture,
      technologies: ["AWS Security Hub", "Vault", "Falco", "OPA Gatekeeper"],
      highlights: [
        "SOC 2 Type II compliance",
        "Automated security scanning",
        "Zero security incidents"
      ],
      icon: Shield,
      metrics: {
        vulnerabilities: "0 critical",
        compliance_score: "100%",
        mttr: "< 1 hour"
      }
    },
    {
      title: "Auto-Scaling Observability Stack",
      description: "Deployed a comprehensive monitoring and observability solution with predictive scaling, anomaly detection, and intelligent alerting.",
      image: cloudArchitecture,
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "PagerDuty"],
      highlights: [
        "Predictive auto-scaling",
        "Anomaly detection",
        "Custom SLI/SLO dashboards"
      ],
      icon: Cpu,
      metrics: {
        mttr: "15 minutes",
        false_positives: "< 2%",
        cost_optimization: "25%"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world solutions that demonstrate expertise in cloud architecture, automation, and DevOps best practices
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-card border-border hover:shadow-card transition-all duration-500 group">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="p-3 rounded-lg bg-primary/20 backdrop-blur-sm">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="default" size="sm" className="group">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;