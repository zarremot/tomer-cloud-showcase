import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {


  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Merged Contact Information & Social Links */}
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
              <CardTitle className="text-2xl text-center">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-white" />
                <span className="text-xl font-medium text-white">tomerraz29@gmail.com</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;