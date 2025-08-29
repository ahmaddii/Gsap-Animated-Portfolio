"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<any[]>([]);

  const experiences = [
    {
      title: "Associate Software Engineer - Flutter",
      company: "FinMind",
      location: "Islamabad, Pakistan",
      duration: "Jan 2025 - Present",
      description:
        "Creating a Solution for MSME'S of Pakistan and creating scalable digital solutions. Integrated complex Localiztion to Support Urdu and Backend with Postgre SQL",
      highlight: "In App Localization to Support Urdu Language",
      responsibilities: [
        "Developing, testing, and maintaining mobile applications",
        "Integrating third-party services and API",
        "Collaborating with cross-functional open Source teams",
        "Working with solution architects on scalable systems",
      ],
      technologies: ["Flutter", "Dart", "Gemini APIs", "Agile", "App Localization"],
    },
    {
      title: "Associate Software Engineer",
      company: "Digital Nexus",
      location: "Islamabad",
      duration: "2024",
      description:
        "Created Full Stack Application where User can Post Job data Saved in SQL Database and Fetched Using PHP Display to the FrontEnd Page",
      highlight: "Best 4th Semester Project of my Class",
      responsibilities: [
        "Created Dashboard for the Users Application",
        "Levaraging Php Skills",
        "Created design from Scratch",
        "Defend in front of Teacher How we can Scale up with AI",
      ],
      technologies: ["Bootstrap", "Javascript", "MySql", "Php", "Css"],
    },
    {
      title: "Associate Software Engineer – Flutter",
      company: "RentEase",
      location: "Islamabad, Pakistan",
      duration: "June 205 - July 2025 (6 months)",
      description:
        "Created a Rental Home Solution in which User can Search his Good Home with Rental Listings",
      highlight:
        "Delivered a production Ready Rental Solution with seamless Real time home listings and location based search.",
      responsibilities: [
        "Managed the Google Cloud API'S",
        "Implement Google Maps Functionlity",
        "Favorites Screen with Real Time Supabase Listings",
        "Real Time Home Listings with Web Hooks",
      ],
      technologies: ["Flutter", "Flutter-Packages", "Supabase", "Dart", "Maps API"],
    },
  ];

  // 🔥 GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            delay: i * 0.1, // 👈 Staggered entrance
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: any) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">SaaS Product Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building impactful digital solutions across various domains
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              ref={addToRefs}
              key={index}
              className="gradient-card shadow-custom-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Building className="mr-2 h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start">
                        <TrendingUp className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-primary font-medium leading-relaxed">
                          {exp.highlight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="font-semibold mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
