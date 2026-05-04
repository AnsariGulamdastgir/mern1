import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaHandshake, FaCarSide, FaShieldAlt, FaArrowRight, FaRobot, FaCalendarCheck, FaCommentDots, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#060b13] text-white font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#060b13]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-2">
            <FaCarSide className="text-cyan-400" />
            CarScout
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How it Works</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/login')}
              className="text-sm font-medium text-white hover:text-cyan-400 transition-colors"
            >
              Log In
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-sm font-bold text-[#060b13] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:-translate-y-0.5"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              The Future of Car Trading
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Find, Negotiate, & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-300-percent animate-gradient">
                Drive Your Dream.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              A comprehensive Car Scout platform featuring role-based dashboards, real-time negotiation, test-drive scheduling, and integrated AI chatbot support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/signup')}
                className="px-8 py-4 rounded-full bg-white text-[#060b13] font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors"
              >
                Start Exploring <FaArrowRight />
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Seller Portal
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Role-Based Portals
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Offers & Negotiation
              </div>
              <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-purple-300">
                <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
                AI Chatbot Integrated
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
             {/* Glowing platform beneath the car */}
             <div className="absolute bottom-10 w-[80%] h-12 bg-cyan-500/30 blur-[40px] rounded-[100%]"></div>
             <img 
               src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
               alt="Premium Sports Car" 
               className="relative z-10 w-full object-contain rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
               style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
             />
             
             {/* Floating UI Elements */}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <div className="border-y border-white/5 bg-[#0a101a] py-8 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Trusted Network</span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span className="text-xl font-bold font-serif text-white">AutoTrust</span>
            <span className="text-xl font-bold italic text-white">DriveSafe</span>
            <span className="text-xl font-bold tracking-tighter text-white">VelocityMotors</span>
            <span className="text-xl font-bold text-white">EliteCars</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose <span className="text-cyan-400">CarScout</span></h2>
            <p className="text-gray-400 text-lg">We've reimagined the car buying and selling experience to be completely transparent, seamless, and secure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaHandshake />, title: "Offer & Counter-Offer", desc: "A complete negotiation engine. Buyers make offers, sellers can counter-offer, and both can settle on a final price." },
              { icon: <FaCalendarCheck />, title: "Test Drive Scheduling", desc: "Easily request a test drive by selecting a date, time, and location. Sellers can accept or reject directly from their dashboard." },
              { icon: <FaRobot />, title: "AI Assistant & Live Chat", desc: "Resolve queries instantly via the AI Chatbot, and use real-time messaging to communicate directly with car owners." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-[#0a101a] relative border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">How It <span className="text-emerald-400">Works</span></h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Select Role", desc: "Sign up as a Buyer to explore cars, or as a Seller to list inventory." },
              { step: "02", title: "Smart Discovery", desc: "Browse listings, filter options, or use the AI Chatbot for guidance." },
              { step: "03", title: "Negotiate & Chat", desc: "Place an offer or chat directly with the seller to discuss details." },
              { step: "04", title: "Test Drive", desc: "Schedule a meetup and verify the car in person before concluding." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-white/5 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute top-10 right-[-20%] w-[40%] h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/40 to-emerald-900/40 border border-cyan-500/20 p-12 md:p-16 rounded-[40px] backdrop-blur-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to find your next ride?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join thousands of satisfied users who have found their perfect car on CarScout.</p>
            <button 
              onClick={() => navigate('/signup')}
              className="px-10 py-5 rounded-full bg-white text-[#060b13] font-black text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="pt-20 pb-10 border-t border-white/10 bg-[#040810] text-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
                <FaCarSide className="text-cyan-400" />
                CarScout
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The most secure and transparent platform to find, negotiate, and drive your dream car.
              </p>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-cyan-400 transition-colors text-lg"><FaTwitter /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors text-lg"><FaInstagram /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors text-lg"><FaLinkedin /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors text-lg"><FaGithub /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Platform</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Browse Cars</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Seller Portal</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Test Drives</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing & Fees</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Press & Media</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Stay Updated</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest car deals and updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-[#0f172a] border border-white/10 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-cyan-500 w-full"
                />
                <button className="bg-cyan-500 text-[#060b13] px-4 py-2 font-bold rounded-r-lg hover:bg-cyan-400 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500">
            <p>&copy; {new Date().getFullYear()} CarScout Marketplace. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .bg-300-percent {
          background-size: 300% auto;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
