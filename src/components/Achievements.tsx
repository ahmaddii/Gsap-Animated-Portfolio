import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Users, Zap, Award, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AtmAppimg from "../assets/images/Atm-App.png"
import CryptoAppimg from "../assets/images/CryptoTrend.png"
import DigitalAppimg from "../assets/images/Digital-Nexus.png"
import FinmindAppimg from "../assets/images/FinMind.png"
import RentEaseAppimg from "../assets/images/Rent-Ease.png"
import TouristAppimg from "../assets/images/Toursti-Agency.png"


gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const achievementsRef = useRef([]);
  const statsRef = useRef([]);
  const appsRef = useRef([]);
  const phoneRef = useRef(null);

  const addToAppsRefs = (el) => {
    if (el && !appsRef.current.includes(el)) {
      appsRef.current.push(el);
    }
  };

  const achievements = [
    {
      icon: Trophy,
      title: "Top 5 Position",
      description: "Get 5th Position in Building Voice AI Agent using Trillet AI at Nust",
      metric: "95% Judges Satisfaction",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "50+ Extention Downloads",
      description: "Built a BlackCoffee Dark Theme which got 50 Plus Downloads",
      metric: "Downloads",
      color: "text-blue-500"
    },
    {
      icon: Target,
      title: "50% Performance Boost",
      description: "Optimized applications improving performance by up to 50%",
      metric: "25+ Apps",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Agile Development",
      description: "Reduced development time by 40% through efficient methodologies like using AI",
      metric: "4 Months Avg",
      color: "text-purple-500"
    },
    {
      icon: Award,
      title: "Fintech Industry",
      description: "FinMind an AI Powered Mobile App Solves MSME'S Problem",
      metric: "30% Accuracy Boost",
      color: "text-red-500"
    },
    {
      icon: TrendingUp,
      title: "Team Leadership",
      description: "Led Google Developer team On Campus",
      metric: "Conduct 10+ Workshops",
      color: "text-indigo-500"
    }
  ];

  const stats = [
    { value: "10+", label: "Projects Completed", suffix: "" },
    { value: "100+", label: "Users Impacted", suffix: "" },
    { value: "95%", label: "Success Rate", suffix: "" },
    { value: "6+", label: "Months Experience", suffix: "" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate achievement cards
      achievementsRef.current.forEach((achievement, i) => {
        if (achievement) {
          gsap.fromTo(achievement,
            { opacity: 0, y: 50, rotation: -5 },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.6,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: achievement,
                start: "top 90%",
                toggleActions: "play none none reverse"
              },
              ease: "back.out(1.7)"
            }
          );
        }
      });

      // Animate stats with counter effect
      statsRef.current.forEach((stat, i) => {
        if (stat) {
          const numberElement = stat.querySelector('.stat-number');
          const targetValue = parseInt(numberElement.textContent.replace(/\D/g, '')) || 0;
          
          gsap.fromTo(stat,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: i * 0.2,
              scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              ease: "back.out(1.7)"
            }
          );

          // Counter animation
          gsap.to({}, {
            duration: 2,
            delay: i * 0.2 + 0.5,
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            onUpdate: function() {
              const progress = this.progress();
              const currentValue = Math.round(targetValue * progress);
              if (numberElement.textContent.includes('K')) {
                numberElement.textContent = currentValue + 'K+';
              } else if (numberElement.textContent.includes('%')) {
                numberElement.textContent = currentValue + '%';
              } else {
                numberElement.textContent = currentValue + '+';
              }
            }
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToAchievementRefs = (el) => {
    if (el && !achievementsRef.current.includes(el)) {
      achievementsRef.current.push(el);
    }
  };

  const addToStatRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  // Add phone tilt effect handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const phone = phoneRef.current as HTMLDivElement | null;
    if (!phone) return;
    const rect = phone.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (y / rect.height) * 50;
    const rotateY = (x / rect.width) * -50;
    phone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const phone = phoneRef.current as HTMLDivElement | null;
    if (!phone) return;
    phone.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section ref={sectionRef} id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-hero/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Key <span className="bg-gradient-hero bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Milestones that define my Journey as a Software engineer, showcasing impact, 
            innovation, and excellence in Mobile Development and team leadership.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              ref={addToAchievementRefs}
              className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/20 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-primary/20 transition-colors">
                    <achievement.icon className={`h-10 w-10 ${achievement.color}`} />
                  </div>
                  <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                    {achievement.metric}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={addToStatRefs}
              className="text-center p-8 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="stat-number text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>


        {/* Mobile Development Expertise Highlight */}
       {/* Mobile Development Expertise Highlight */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 rounded-full px-6 py-3 border border-primary/20">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-semibold">Mobile Apps Expert</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* iPhone Mockup */}
            <div className="relative mx-auto lg:mx-0">
              <div 
  ref={phoneRef}
  className="relative w-80 h-[640px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-500"
  style={{ perspective: "1000px" }}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  {/* Phone Frame */}
  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
    {/* Status Bar */}
    <div className="bg-white px-6 py-3 flex justify-between items-center text-black text-sm font-medium">
      <span>9:41</span>
      <div className="flex space-x-1">
        <div className="w-4 h-2 bg-black rounded-sm"></div>
        <div className="w-4 h-2 bg-black rounded-sm"></div>
        <div className="w-4 h-2 bg-black rounded-sm"></div>
      </div>
    </div>
    
    {/* Notch */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
    
    {/* Screen Content */}
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 h-full pt-6 px-6 pb-14">
      {/* App Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div ref={addToAppsRefs} className="rounded-2xl h-16 shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden">
          <img src={AtmAppimg} alt="ATM App" className="w-full h-full object-cover" />
        </div>
        <div ref={addToAppsRefs} className="rounded-2xl h-16 shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden">
          <img src={CryptoAppimg} alt="Crypto App" className="w-full h-full object-cover" />
        </div>
        <div ref={addToAppsRefs} className="rounded-2xl h-16 shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden">
          <img src={DigitalAppimg} alt="Digital App" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div ref={addToAppsRefs} className="rounded-2xl h-16 shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden">
          <img src={FinmindAppimg} alt="FinMind App" className="w-full h-full object-cover" />
        </div>
        <div ref={addToAppsRefs} className="rounded-2xl h-16 shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden">
          <img src={RentEaseAppimg} alt="RentEase App" className="w-full h-full object-cover" />
        </div>
        <div ref={addToAppsRefs} className="rounded-2xl h-16 shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden">
          <img src={TouristAppimg} alt="Tourist App" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    {/* Bottom Indicator (fixed at bottom) */}
    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
      <div className="w-28 h-1.5 bg-black rounded-full opacity-60"></div>
    </div>
  </div>

  {/* Floating particles */}
  <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping"></div>
  <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
</div>
</div>

            
            {/* Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Mobile Development Expertise
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Specializing in Flutter development with a Proven Track Record of Building 
                High-Impact Mobile Applications. From Fintech MSME'S platforms to 
                Professional Level apps, I create Solutions that Serve Thousands of Users Worldwide.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-card rounded-2xl p-6 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-2">9+</div>
                  <div className="text-muted-foreground">Mobile Apps</div>
                </div>
                <div className="bg-gradient-card rounded-2xl p-6 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-2">1K+</div>
                  <div className="text-muted-foreground">Users Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Achievements;