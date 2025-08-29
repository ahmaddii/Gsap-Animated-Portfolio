import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "malikahmad6666666@gmail.com",
      href: "mailto:malikahmad6666666@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 304 70 58585",
      href: "tel:+923047058585",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "https://maps.app.goo.gl/x4S6KdizyWFxSXQu8",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ahmaddii",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/malik-ahmad-rasheed-3768902a9/",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life. I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <Card className="gradient-card shadow-custom-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-muted-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="gradient-card shadow-custom-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have a project in mind or just want to chat about technology and innovation, I'd love to hear from you.
                </p>
                <a href="mailto:malikahmad6666666@gmail.com">
                  <Button className="bg-gradient-primary hover:bg-gradient-hero text-white font-semibold px-8 py-3 rounded-full shadow-glow transition-all duration-300">
                    Send Me an Email
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-custom-lg">
              <CardContent className="p-8">
                <h4 className="font-bold mb-4">What I Can Help With:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Mobile app development (Flutter)",
                    "Web application development",
                    "Technical consulting",
                    "Code review and optimization",
                    "Training and mentoring",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
