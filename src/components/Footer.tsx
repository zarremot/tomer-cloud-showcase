import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/tomer-devops" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/tomer-devops" },
    { icon: Mail, label: "Email", url: "mailto:tomerraz29@gmail.com" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">

        <p className="text-muted-foreground text-sm text-center">
          © {currentYear} Tomer Raz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;