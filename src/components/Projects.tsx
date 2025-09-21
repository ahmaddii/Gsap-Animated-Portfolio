import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import finmindImg from "../assets/images/FinMind.png";
import renteaseImg from "../assets/images/Rent-Ease.png";
import digitalNexusImg from "../assets/images/Digital-Nexus.png";
import AtmAppImg from "../assets/images/Atm-App.png";
import CryptoTrendImg from "../assets/images/CryptoTrend.png";
import TouristAgencyImg from "../assets/images/Toursti-Agency.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "FinMind",
      description: "Pakistan First MSME'S Financial Tracker",
      image: finmindImg,
      technologies: ["Flutter", "Dart", "Supabase", "Gemini APIs"],
      type: "Mobile App",
      users: "Published on Playstore",
      liveUrl: "https://github.com/ahmaddii",
      githubUrl: "https://github.com/ahmaddii",
    },
    {
      title: "RentEase",
      description:
        "Feature-rich rental application for efficient home discovery.",
      image: renteaseImg,
      technologies: ["Flutter", "Real-time APIs", "Listings Logic", "Google Maps"],
      type: "Mobile App",
      users: "Testing Users",
      liveUrl: "https://github.com/ahmaddii",
      githubUrl: "https://github.com/ahmaddii",
    },
    {
      title: "Digital Nexus",
      description: "Smart Job solution making Job Search seamless and efficient",
      image: digitalNexusImg,
      technologies: ["Bootstrap", "PHP", "MySQL", "CSS"],
      type: "Web App",
      users: "100+ Users",
      liveUrl: "https://github.com/ahmaddii",
      githubUrl: "https://github.com/ahmaddii",
    },
    {
      title: "ATM Backend Simulation",
      description: "Created an ATM Backend in Golang with Proper Error Handling",
      image: AtmAppImg,
      technologies: ["Golang", "Backend Imports", "GO Packages"],
      type: "Console App",
      users: "Personal One",
      liveUrl: "https://github.com/ahmaddii",
      githubUrl: "https://github.com/ahmaddii",
    },
    {
      title: "AI Voice Agent Tourio",
      description:
        "Pakistan 1st AI Powered Voice Agent Using Trillet AI to answer Tourist Queries",
      image: TouristAgencyImg,
      technologies: ["AI", "ML/AI", "Prompt Engineering", "Trillet AI"],
      type: "Tourist Agent",
      users: "200+ Assessments",
      liveUrl: "https://github.com/ahmaddii",
      githubUrl: "https://github.com/ahmaddii",
    },
    {
      title: "Crypto Trend Analyzer",
      description:
        "Automated Crypto Task sending daily emails analyzing crypto prices",
      image: CryptoTrendImg,
      technologies: ["n8n", "Crypto API", "Google Email", "Json", "Network Calls"],
      type: "AI Automated Task",
      users: "100+ Users",
      liveUrl: "https://github.com/ahmaddii",
      githubUrl: "https://github.com/ahmaddii",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
              ease: "back.out(1.7)",
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Digital{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My portfolio showcasing Innovative Solutions across Mobile apps, Web
            development, AI Automation, and programming language design. Each
            project demonstrates expertise in Flutter, AI & Automation, Golang,
            and Cross-platform development with Real World Impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={addToRefs}
              className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.type}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm font-medium text-primary">
                    {project.users}
                  </span>
                  <div className="flex items-center space-x-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-card rounded-2xl border border-border/50">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Mobile Apps</div>
          </div>
          <div className="text-center p-8 bg-gradient-card rounded-2xl border border-border/50">
            <div className="text-4xl font-bold text-primary mb-2">1K+</div>
            <div className="text-muted-foreground">Users Reached</div>
          </div>
          <div className="text-center p-8 bg-gradient-card rounded-2xl border border-border/50">
            <div className="text-4xl font-bold text-primary mb-2">6</div>
            <div className="text-muted-foreground">Months Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
