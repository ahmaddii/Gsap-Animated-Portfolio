import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, User } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const personalInfo = [
    { icon: User, label: "Age", value: "20 years" },
    { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
    { icon: GraduationCap, label: "Degree", value: "BS Software Engineering" },
    { icon: Calendar, label: "Experience", value: "1 Year" },
  ];

  const skills = [
    "Cross-platform mobile development",
    "Complex API Integration",
    "Real-time data sync and offline support Using Open Source Database",
    "Performance optimization",
    "Technical training and mentoring",
    "Strong OOP and Data Structures",
    "Software Requirment Engineering",
    "Software Design and Architecture",
    "UI/UX Awareness (responsive design, usability principles)",
    "Agile & Team Collaboration",
    "AI Integrated Apps Using Gemini or Open API",
    "Performance Optimization (App responsiveness, lazy loading, caching)",
    "Authentication & Authorization (JWT, Firebase Auth, Supabase Auth)",
    "Golang and Javascript Master",
    "App Localizations",
    "AI Automated Tasks Using Gemini",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate each card
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
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
    <section ref={sectionRef} id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Software Engineer with 6 Months of experience 
            Specializing in Web and Mobile App Development. I love creating innovative AI Powered
            Solutions that Solve Real-World Problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Information */}
          <Card ref={addToRefs} className="gradient-card shadow-custom-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-3 h-6 w-6 text-primary" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {personalInfo.map((info, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <info.icon className="mr-2 h-4 w-4" />
                      <span className="text-sm">{info.label}</span>
                    </div>
                    <div className="font-semibold">{info.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card ref={addToRefs} className="gradient-card shadow-custom-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Bachelor of Science in Software Engineering</h4>
                <p className="text-muted-foreground">Szabist University Islamabad</p>
                <p className="text-sm text-muted-foreground">2023 - 2027</p>
                
                <div className="space-y-2">
                  <p className="text-sm">• CGPA: 3.5+/4.00</p>
                  <p className="text-sm">• Tech Stack in AI and Automation , Web Development , App Development</p>
                  <p className="text-sm">• Active in Tech Communities and Leadership Roles</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What I Do */}
          <div className="lg:col-span-2">
            <Card ref={addToRefs} className="gradient-card shadow-custom-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">What I Do</h3>
                <p className="text-muted-foreground mb-6">
                  I specialize in AI Powered Web and Mobile App Development with modern frameworks, 
                  creating innovative solutions and Products that make a Real Impact. My Expertise Includes:
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

           <div className="mt-8">
  <h4 className="text-xl font-semibold mb-4">Watch My Introduction</h4>
  <div className="flex justify-center">
    <div className="w-full max-w-md aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full object-cover"
        src="https://www.youtube.com/embed/o3PEWrhJpzM"
        title="Introduction Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
