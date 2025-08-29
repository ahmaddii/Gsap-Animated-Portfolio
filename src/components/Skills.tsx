import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Icons
import { FaCuttlefish, FaPhp, FaLinux, FaGithub } from "react-icons/fa";
import {
  SiDart,
  SiFlutter,
  SiJavascript,
  SiSupabase,
  SiGit,
  SiGooglecloud,
  SiGoland,
  SiPython,
  SiPostgresql,
  SiFigma,
  SiAndroidstudio,
  SiMysql,
  SiFirebase,
  SiReact,
  SiNpm,
  SiCss3,
  SiBootstrap,
  SiNextdotjs,
  SiGithub,
  SiAndroid,
  SiMongodb,
  SiStackoverflow,
  SiTypescript,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Dart", icon: <SiDart size={28} />, mastery: 95, category: "Mobile" },
        { name: "C++", icon: <FaCuttlefish size={28} />, mastery: 95, category: "Language" },
        { name: "Golang", icon: <SiGoland size={28} />, mastery: 85, category: "Language" },
        { name: "JavaScript", icon: <SiJavascript size={28} />, mastery: 80, category: "Language" },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Flutter", icon: <SiFlutter size={28} />, mastery: 75, category: "Frontend" },
        { name: "Supabase", icon: <SiSupabase size={28} />, mastery: 90, category: "Backend" },
        { name: "Git", icon: <SiGit size={28} />, mastery: 85, category: "Version Control" },
        { name: "Google Cloud", icon: <SiGooglecloud size={28} />, mastery: 70, category: "Cloud" },
      ],
    },
    {
      title: "Specializations",
      skills: [
        { name: "Mobile Development", icon: <SiFlutter size={28} />, mastery: 95, category: "Cross-platform" },
        { name: "API Integration", icon: <SiSupabase size={28} />, mastery: 90, category: "Backend" },
        { name: "Performance Optimization", icon: <SiGooglecloud size={28} />, mastery: 85, category: "Optimization" },
        { name: "AI and Automation", icon: <SiPython size={28} />, mastery: 88, category: "AI" },
      ],
    },
  ];

  const techIcons = [
    { icon: <SiDart size={50} />, name: "Dart" },
    { icon: <FaCuttlefish size={50} />, name: "C++" },
    { icon: <SiGoland size={50} />, name: "Golang" },
    { icon: <SiJavascript size={50} />, name: "JavaScript" },
    { icon: <SiFlutter size={50} />, name: "Flutter" },
    { icon: <SiSupabase size={50} />, name: "Supabase" },
    { icon: <SiGit size={50} />, name: "Git" },
    { icon: <SiGooglecloud size={50} />, name: "Google Cloud" },
    { icon: <SiPython size={50} />, name: "Python" },
    { icon: <SiPostgresql size={50} />, name: "PostgreSQL" },
    { icon: <SiFigma size={50} />, name: "Figma" },
    { icon: <SiAndroidstudio size={50} />, name: "Android Studio" },
    { icon: <FaLinux size={50} />, name: "Linux" },
    { icon: <SiMysql size={50} />, name: "MySQL" },
    { icon: <FaPhp size={50} />, name: "PHP" },
    { icon: <SiFirebase size={50} />, name: "Firebase" },
    { icon: <SiReact size={50} />, name: "React" },
    { icon: <SiNpm size={50} />, name: "NPM" },
    { icon: <SiCss3 size={50} />, name: "CSS" },
    { icon: <SiBootstrap size={50} />, name: "Bootstrap" },
    { icon: <SiNextdotjs size={50} />, name: "Next Js" },
    { icon: <SiGithub size={50} />, name: "Github" },
    { icon: <SiAndroid size={50} />, name: "Android" },
    { icon: <SiMongodb size={50} />, name: "Mongo Db" },
    { icon: <SiStackoverflow size={50} />, name: "Stack Overflow" },
    { icon: <SiTypescript size ={50} />, name: "TypeScript " },
    
  ];

  const getMasteryColor = (mastery) => {
    if (mastery >= 90) return "bg-gradient-to-r from-green-500 to-emerald-600";
    if (mastery >= 80) return "bg-gradient-to-r from-blue-500 to-cyan-600";
    if (mastery >= 70) return "bg-gradient-to-r from-yellow-500 to-orange-500";
    return "bg-gradient-to-r from-gray-400 to-gray-500";
  };

  const getMasteryText = (mastery) => {
    if (mastery >= 90) return "Expert";
    if (mastery >= 80) return "Advanced";
    if (mastery >= 70) return "Intermediate";
    return "Beginner";
  };

  // 🟢 Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
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
          },
        }
      );

      // Skill cards
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.2,
            delay: i * 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );
      });

      // Stats cards
      statsRef.current.forEach((stat, i) => {
        gsap.fromTo(
          stat,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.1,
            delay: i * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: stat,
              start: "top 95%",
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

  const addToStats = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My Technical Toolkit Each Skill Represents a Technology I've Mastered for Creating Exceptional Applications.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    ref={addToRefs}
                    key={skillIndex}
                    className="gradient-card shadow-custom-lg transition-all duration-300 hover:shadow-glow hover:-translate-y-2 group"
                  >
                    <CardContent className="p-6 text-center">
                      {/* Skill Icon */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center text-white text-lg shadow-glow group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 bg-background border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{skill.mastery}%</span>
                        </div>
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>

                      {/* Mastery Level */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Mastery</span>
                          <span className="font-semibold text-primary">{getMasteryText(skill.mastery)}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative">
                          <Progress value={skill.mastery} className="h-2 bg-muted" />
                          <div
                            className={`absolute top-0 left-0 h-2 rounded-full ${getMasteryColor(
                              skill.mastery
                            )}`}
                            style={{ width: `${skill.mastery}%` }}
                          />
                        </div>

                        {/* Category */}
                        <div className="text-xs text-muted-foreground bg-muted/50 rounded-full px-3 py-1 inline-block">
                          {skill.category}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Icons */}
<div className="mt-20 relative overflow-hidden">
  {/* Heading */}
  <h3 className="text-3xl font-bold mb-20 text-center">My  Tech  Stack</h3>


  <motion.div
    className="flex gap-12 min-w-max"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
  >
    {[...techIcons, ...techIcons].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center min-w-[100px] hover:scale-110 transition-transform duration-300"
      >
        {item.icon}
        <p className="text-sm text-muted-foreground mt-2">{item.name}</p>
      </div>
    ))}
  </motion.div>
</div>


        {/* Stats */}
       <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 mb-30">
          {[
            { label: "Months Experience", value: "6+" },
            { label: "Technologies", value: "19+" },
            { label: "Students Trained", value: "100+" },
            { label: "Projects Completed", value: "20+" },
          ].map((stat, index) => (
            <Card ref={addToStats} key={index} className="gradient-card shadow-custom-md text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
