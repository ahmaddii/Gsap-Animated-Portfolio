import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BugIcon from "../assets/images/Bug-Icon.png";
import { GoogleGenerativeAI } from "@google/generative-ai";

gsap.registerPlugin(ScrollTrigger);

// Initialize Gemini API
// Ensure VITE_GEMINI_API_KEY is correctly set in your .env file (e.g., VITE_GEMINI_API_KEY=YOUR_API_KEY)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const roles = [
  "Associate Software Engineer",
  "Full Stack Developer",
  "Open to Work",
];

const Hero = () => {
  const heroRef = useRef(null);
  const numbersRef = useRef([]);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const bugRef = useRef(null);
  const messagesEndRef = useRef(null);

  // State to control the chatbot's visibility and conversation
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! I'm Ahmad's portfolio Bug bot. How can I help you get to know him better?" },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  // New state to track if the bug icon has settled
  const [hasBugSettled, setHasBugSettled] = useState(false);

  // Pre-built suggestions for the user
  const initialSuggestions = [
    "Tell me about Ahmad's experience.",
    "What are Ahmad's key skills?",
    "Show me Ahmad's projects.",
    "Where can I find Ahmad's LinkedIn?",
    "How can I contact Ahmad?",
    "Can Ahmad Provide Freelancing Service"
  ];

  // Floating numbers
  const floatingNumbers = [
    { value: "3", top: "10%", left: "5%" },
    { value: "9", top: "20%", left: "85%" },
    { value: "6", top: "40%", left: "10%" },
    { value: "2", top: "60%", left: "90%" },
    { value: "7", top: "80%", left: "15%" },
    { value: "4", top: "15%", left: "75%" },
    { value: "1", top: "70%", left: "80%" },
    { value: "8", top: "30%", left: "5%" },
    { value: "5", top: "85%", left: "70%" },
  ];

  // Particles
  // Increased particle count, size, and opacity for better visibility
  const particles = Array.from({ length: 140 }, (_, i) => ({ // Increased from 80 to 120
    id: i,
    size: Math.random() * 8 + 3, // Increased base size and range for more visibility
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 1,
  }));

  // Scroll to the bottom of the chat window
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate particles
      particles.forEach((particle, i) => {
        gsap.to(`.particle-${i}`, {
          y: "-100vh",
          rotation: 360,
          duration: particle.duration,
          repeat: -1,
          yoyo: true,
          delay: particle.delay,
          ease: "none",
        });
      });

      // Animate content fade-in
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Animate profile image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "back.out(1.7)",
        }
      );

      // Floating numbers animation
      numbersRef.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 0.3,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
              ease: "back.out(1.7)",
            }
          );

          gsap.to(el, {
            y: "-20px",
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: Math.random() * 2,
          });
        }
      });

      // Bug icon falling animation on the right side
      gsap.fromTo(
        bugRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: -100,
        },
        {
          opacity: 1,
          scale: 1,
          y: "69vh", // Adjusted bug icon's final vertical position to provide more space
          rotation: 760,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom 0",
            scrub: true,
            onEnter: () => setHasBugSettled(true), // Bug has entered its settled state
            onLeaveBack: () => setHasBugSettled(false), // Bug is scrolling back up/out
          },
        }
      );

      // NEW: Expanding Pulsing Circles
      gsap.fromTo(".expanding-circle",
        { opacity: 0, scale: 0, x: () => Math.random() * window.innerWidth, y: () => Math.random() * window.innerHeight },
        {
          opacity: 1, scale: 1.5, // Increased opacity for better visibility
          x: () => Math.random() * window.innerWidth,
          y: () => Math.random() * window.innerHeight,
          duration: 8 + Math.random() * 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: (i) => i * 0.5 + Math.random() * 3,
          stagger: 0.1, // Stagger effect for multiple circles
        }
      );

      // NEW: Slow Drifting Squares
      gsap.fromTo(".drifting-square",
        { opacity: 0, x: () => Math.random() * window.innerWidth - window.innerWidth / 2, y: () => Math.random() * window.innerHeight - window.innerHeight / 2, rotation: 0 },
        {
          opacity: 1, x: () => Math.random() * window.innerWidth, y: () => Math.random() * window.innerHeight, rotation: 360, // Increased opacity for better visibility
          duration: 15 + Math.random() * 10,
          repeat: -1,
          yoyo: true,
          ease: "power0.none", // Linear movement
          delay: (i) => i * 1 + Math.random() * 5,
          stagger: 0.2,
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !numbersRef.current.includes(el)) {
      numbersRef.current.push(el);
    }
  };

  // Typewriter Text Component
  const TypewriterText = () => {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentRole = roles[roleIndex];
      let typingSpeed = isDeleting ? 50 : 100;

      const timeout = setTimeout(() => {
        if (!isDeleting && charIndex < currentRole.length) {
          setText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
      <h2 className="text-2xl lg:text-3xl font-medium bg-gradient-hero bg-clip-text text-transparent">
        {text}
        <span className="animate-blink">|</span>
      </h2>
    );
  };

  // Function to call the Gemini API
  const callGeminiAPI = async (prompt) => {
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "I'm sorry, I couldn't generate a response from the AI. Please try again later or try a different question.";
    }
  };

  // Function to get a bot response, prioritizing predefined answers
  const getBotResponse = useCallback(async (userPrompt) => {
    const lowerCasePrompt = userPrompt.toLowerCase();

    // 1. Self-introduction
    if (lowerCasePrompt.includes("who are you") || lowerCasePrompt.includes("who developed you") || lowerCasePrompt.includes("your creator")) {
      return "I'm Ahmad's portfolio chatbot. I was designed and implemented by Ahmad, a Software Engineer, using the Google Gemini API to power my responses.";
    }

    // 2. Portfolio-specific questions
    if (lowerCasePrompt.includes("ahmad's experience") || lowerCasePrompt.includes("about ahmad")) {
      return "Ahmad is an Associate Software Engineer with a passion for full-stack Web and App development. He focuses on creating functional, user-friendly products and enjoys learning new technologies. You can find more details in his resume linked on this page!";
    }
    if (lowerCasePrompt.includes("ahmad's key skills") || lowerCasePrompt.includes("what skills")) {
      return "Ahmad possesses a strong foundation in modern Mobile and Web technologies, including React, Next.js, Flutter, Firebase, Golang and various database systems. He's always expanding his skill set!";
    }
    if (lowerCasePrompt.includes("ahmad's projects") || lowerCasePrompt.includes("show me projects")) {
      return "Ahmad has worked on Several projects showcasing his creativity and problem-solving. While I can't display them directly here, you can typically find a 'Projects' section on his portfolio website.";
    }
    if (lowerCasePrompt.includes("ahmad's linkedin") || lowerCasePrompt.includes("linkedin profile")) {
      return "You can find Ahmad's professional presence on LinkedIn. I recommend checking out the navigation menu for a direct link!";
    }
    if (lowerCasePrompt.includes("contact ahmad") || lowerCasePrompt.includes("how can i contact")) {
      return "You can reach Ahmad via email at malikahmad6666666@gmail.com, or check out the 'Get In Touch' button on this page!";
    }
    if (lowerCasePrompt.includes("freelancing") || lowerCasePrompt.includes("freelancing service")) {
      return "Yes, you can go to the Contact Section where you'll find the 'Hire On Upwork' option.";
    }

    // 3. Irrelevant questions (simple keyword check for demonstration)
    const irrelevantKeywords = ["weather", "jokes", "recipe", "news", "time", "sports", "fuck", "sex", "porn"];
    if (irrelevantKeywords.some(keyword => lowerCasePrompt.includes(keyword))) {
      return "I'm specifically designed to provide information about Ahmad and his portfolio. I can't help with that question, but feel free to ask me something about Ahmad!";
    }

    // 4. Default to Gemini API for general but relevant queries
    return await callGeminiAPI(userPrompt);
  }, []);

  // Function to handle sending a message
  const handleSendMessage = async (userMessageText) => {
    const messageToSend = userMessageText || inputMessage; // Use provided text or current input
    if (messageToSend.trim() === '') return;

    const userMessage = { sender: 'user', text: messageToSend };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    
    setInputMessage(''); // Clear input immediately

    setIsTyping(true);
    // Ensure getBotResponse is called with the actual message text
    const botText = await getBotResponse(messageToSend); 
    setIsTyping(false);

    const botMessage = { sender: 'bot', text: botText };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen pt-16 relative overflow-hidden"
    >
      {/* Animated Particle Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            // Increased particle opacity for better visibility
            className={`particle-${particle.id} absolute rounded-full bg-primary/30`} // Increased opacity
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y + 100}%`,
            }}
          />
        ))}

        {/* NEW: Multiple Expanding Pulsing Circles */}
        {Array.from({ length: 5 }).map((_, i) => ( // 5 circles for good coverage
          <div key={`exp-circle-${i}`}
               className="expanding-circle absolute w-24 h-24 rounded-full bg-purple-500/40 blur-md" // Adjusted opacity for more visibility
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
               }}
          ></div>
        ))}

        {/* NEW: Multiple Slow Drifting Squares */}
        {Array.from({ length: 4 }).map((_, i) => ( // 4 squares
          <div key={`drift-square-${i}`}
               className="drifting-square absolute w-20 h-20 rounded-lg bg-gradient-to-tr from-blue-400/50 to-green-400/50 blur-sm" // Adjusted opacity for more visibility
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
               }}
          ></div>
        ))}

      </div>

      {/* Floating Numbers */}
      {floatingNumbers.map((item, index) => (
        <div
          key={index}
          ref={addToRefs}
          className="absolute text-6xl font-bold text-primary/10 pointer-events-none select-none"
          style={{ top: item.top, left: item.left }}
        >
          {item.value}
        </div>
      ))}

      {/* Shapes (Existing) */}
      <div
        className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-primary/20 rounded-lg animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-accent/30 rotate-45 animate-pulse" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Malik Ahmad Rasheed
                </span>
              </h1>

              {/* Typing Animated Text */}
              <TypewriterText />

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                I’m an <span className="font-bold">Associate Software Engineer</span> and aspiring Full Stack <span className="font-bold">Web </span>
                and <span className="font-bold">App</span> Developer with a focus on Turning Ideas into Functional,
                User-Friendly Products. I Enjoy learning new Technologies and
                Applying them in Real Human Problems that Showcase my Creativity and
                Problem Solving.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1jMSjdIwUoVAjM9Ft7uxxeBzEt8MWPrEp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-primary hover:bg-gradient-hero text-white font-semibold px-6 py-3 rounded-lg shadow-glow transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>

              <a href="mailto:malikahmad6666666@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="group transition-all duration-300 hover:border-primary"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div ref={imageRef} className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow transition-transform duration-500 hover:scale-105">
                <img
                  src={profileImage}
                  alt="Software Engineer Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-primary text-white px-4 py-2 rounded-full shadow-lg animate-float">
                <span className="text-sm font-semibold flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bug Icon - Now with an onClick handler */}
      <div
        ref={bugRef}
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className="fixed top-10 right-10 z-50 cursor-pointer"
      >
        <img
          src={BugIcon}
          alt="Bug Icon"
          className="w-20 h-20 drop-shadow-[0_0_20px_#00ffcc] animate-pulse"
        />
      </div>

      {/* Ask Query Text - Appears when bug has settled and chatbot is closed */}
      {hasBugSettled && !isChatbotOpen && (
        <div
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-[6vh] right-10 z-50 text-white bg-gradient-to-r from-green-500 to-teal-500 px-3 py-1 rounded-full drop-shadow-[0_0_20px_#00ffcc] cursor-pointer
                     hover:from-green-600 hover:to-teal-600 transition-all duration-300 animate-fadeIn font-semibold text-sm "
        >
          Chat Now !
        </div>
      )}

      {/* Chatbot Popup - Conditionally rendered */}
      {isChatbotOpen && (
        <div className="fixed bottom-24 right-10 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 z-[60] animate-fadeIn flex flex-col max-h-[80vh] border border-gray-200 dark:border-gray-700">
          {/* Chatbot Header */}
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Ahmad's Portfolio Bot</h3>
            <button
              onClick={() => setIsChatbotOpen(false)}
              className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-2xl leading-none"
              aria-label="Close Chatbot"
            >
              &times;
            </button>
          </div>

          {/* Chatbot Body - Updated to display messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-2 custom-scrollbar">
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <span 
                  className={`inline-block p-3 rounded-lg text-sm break-words max-w-[85%] ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <span className="inline-block p-3 rounded-lg text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white animate-pulse">
                  Typing...
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {initialSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(suggestion)}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs transition-all duration-200
                           hover:bg-blue-200 hover:shadow-sm
                           dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
                disabled={isTyping}
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Chatbot Input - Connected to state and function */}
      {/* Chatbot Input - Updated */}
{/* Chatbot Input - Updated */}
<div className="mt-4 flex items-center justify-between gap-2">
  {/* Input Box (smaller width, not full) */}
  <input
    type="text"
    placeholder="Ask me Anything..."
    value={inputMessage}
    onChange={(e) => setInputMessage(e.target.value)}
    onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
    className="w-56 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm 
               focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
               dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
    disabled={isTyping}
  />

  {/* Send Button (separate & compact) */}
  <button
    onClick={() => handleSendMessage(inputMessage)}
    className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg px-4 py-2 text-sm 
               flex items-center justify-center transition-colors duration-200 
               hover:from-blue-600 hover:to-primary shadow-sm min-w-[60px]"
    disabled={isTyping}
  >
    Send
  </button>
</div>



        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
