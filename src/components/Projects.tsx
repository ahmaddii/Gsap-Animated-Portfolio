import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import finmindImg from "../assets/images/FinMind.png";
import renteaseImg from "../assets/images/Rent-Ease.png";
import digitalNexusImg from "../assets/images/Digital-Nexus.png";
import AtmAppImg from "../assets/images/Atm-App.png";
import CryptoTrendImg from "../assets/images/CryptoTrend.png";
import TouristAgencyImg from "../assets/images/Toursti-Agency.png";
import frame60 from "../assets/projects/Frame 60.png";
import frame61 from "../assets/projects/Frame 61.png";
import frame62 from "../assets/projects/Frame 62.png";
import frame63 from "../assets/projects/Frame 63.png";
import frame64 from "../assets/projects/Frame 64.png";
import frame65 from "../assets/projects/Frame 65.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const snapshotsRef = useRef(null);
  const [currentSnapshot, setCurrentSnapshot] = useState(0);

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

  const appSnapshots = [
    frame60,
    frame61,
    frame62,
    frame63,
    frame64,
    frame65,
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

      if (snapshotsRef.current) {
        gsap.fromTo(
          snapshotsRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: snapshotsRef.current,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-scroll snapshots
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnapshot((prev) => (prev < appSnapshots.length - 1 ? prev + 1 : 0));
    }, 3000); // Change snapshot every 3 seconds

    return () => clearInterval(interval);
  }, [appSnapshots.length]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const handlePrevSnapshot = () => {
    setCurrentSnapshot((prev) => (prev > 0 ? prev - 1 : appSnapshots.length - 1));
  };

  const handleNextSnapshot = () => {
    setCurrentSnapshot((prev) => (prev < appSnapshots.length - 1 ? prev + 1 : 0));
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

        {/* App Snapshots Section */}
        <div ref={snapshotsRef} className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              App{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Snapshots
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a closer look at the user interfaces and features of our applications
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              {/* Main snapshot display */}
              <div className="relative flex items-center justify-center mb-8 h-[500px]">
                <div className="relative w-full h-full overflow-hidden">
                  <div 
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSnapshot * 100}%)` }}
                  >
                    {appSnapshots.map((snapshot, idx) => (
                      <div key={idx} className="min-w-full h-full flex-shrink-0 flex items-center justify-center px-4">
                        <img
                          src={snapshot}
                          alt={`App snapshot ${idx + 1}`}
                          className="max-h-full w-auto object-contain rounded-2xl shadow-2xl"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows - Overlaid on image */}
                <button
                  onClick={handlePrevSnapshot}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-3 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-glow z-10"
                  aria-label="Previous snapshot"
                >
                  <ChevronLeft className="h-5 w-5 text-primary" />
                </button>

                <button
                  onClick={handleNextSnapshot}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-3 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-glow z-10"
                  aria-label="Next snapshot"
                >
                  <ChevronRight className="h-5 w-5 text-primary" />
                </button>
              </div>

              {/* Bottom Bar - Always Visible */}
              <div className="flex items-center justify-between bg-background/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3 px-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {currentSnapshot + 1} / {appSnapshots.length}
                  </span>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 flex-1">
                  {appSnapshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSnapshot(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSnapshot === idx
                          ? "w-8 bg-primary"
                          : "w-2 bg-primary/30 hover:bg-primary/50"
                      }`}
                      aria-label={`Go to snapshot ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="w-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;