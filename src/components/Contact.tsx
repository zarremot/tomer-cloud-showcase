import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tomerraz29@gmail.com",
      link: "mailto:tomerraz29@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tel Aviv, Israel",
      link: null
    }
  ];


  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-primary text-primary-foreground border-0 overflow-hidden relative">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 animate-pulse"></div>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-white/20 rounded-full animate-float"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl text-center">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex justify-center gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/tomer-raz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;