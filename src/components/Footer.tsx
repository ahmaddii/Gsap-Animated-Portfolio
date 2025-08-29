import Lottie from "lottie-react";
import { SiUpwork } from "react-icons/si"; // Upwork icon
import { MdEmail } from "react-icons/md";   // Email icon
import footerIcon from "../assets/footer-icon.json";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-start text-left gap-6">

        {/* Lottie Icon */}
        <div className="w-60 h-60 -mt-6">
          <Lottie 
            animationData={footerIcon} 
            loop 
            autoplay 
            className="w-full h-full" 
          />
        </div>

        <div className="flex-1 flex flex-col justify-between h-full">
          <div>
            {/* Call to Action */}
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-primary">
              Interested in Collaborating?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Whether it's a project, mentorship, or just a chat about technology, feel free to reach out. 
              I'm always open to new opportunities and creative collaborations.
            </p>

            {/* Contact Buttons */}
        
<div className="flex flex-wrap items-center gap-4">
  <a
    href="mailto:malikahmad6666666@gmail.com"
    className="flex items-center gap-2 bg-gradient-primary hover:bg-gradient-hero text-white font-semibold px-6 py-3 rounded-full shadow-glow transition-all duration-300"
  >
    <MdEmail className="w-5 h-5" />
    Email Me
  </a>

  {/* OR separator */}
  <span className="text-muted-foreground font-semibold">OR</span>

  <a
    href="https://www.upwork.com/freelancers/~YOUR_UPWORK_ID"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-glow transition-all duration-300"
  >
    <SiUpwork className="w-5 h-5" />
    Hire Me on Upwork
  </a>
</div>

          </div>

          {/* Copyright at bottom-right */}
          <p className="text-sm text-muted-foreground text-right mt-12">
            &copy; {new Date().getFullYear()} Malik Ahmad Rasheed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
