import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaHandshake, FaCarSide, FaShieldAlt, FaArrowRight, FaStar } from "react-icons/fa";

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
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How it Works</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Reviews</a>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-300% animate-gradient">
                Drive Your Dream.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              Experience the premium marketplace for buying and selling cars. Verified listings, direct negotiations, and secure test drives all in one sleek platform.
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
            
            <div className="mt-12 flex items-center gap-6 text-gray-400 text-sm">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">50k+</span>
                <span>Active Users</span>
              </div>
              <div className="w-px h-10 bg-gray-700"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">10k+</span>
                <span>Verified Cars</span>
              </div>
              <div className="w-px h-10 bg-gray-700"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">4.9/5</span>
                <span className="flex text-yellow-400 text-xs mt-1">
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </span>
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
             <div className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl animate-bounce-slow">
               <div className="text-xs text-gray-400">Current Offer</div>
               <div className="text-xl font-bold text-emerald-400">$45,000</div>
             </div>
             <div className="absolute -right-4 bottom-1/4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
               <div className="flex items-center gap-2">
                 <FaShieldAlt className="text-cyan-400" />
                 <span className="text-sm font-bold">Verified Seller</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose <span className="text-cyan-400">CarScout</span></h2>
            <p className="text-gray-400 text-lg">We've reimagined the car buying and selling experience to be completely transparent, seamless, and secure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaSearch />, title: "Smart Discovery", desc: "Advanced filtering and matching algorithms to find the exact car you're looking for, instantly." },
              { icon: <FaHandshake />, title: "Direct Negotiation", desc: "No middlemen. Make offers, receive counter-offers, and agree on a price directly with sellers." },
              { icon: <FaShieldAlt />, title: "Secure Transactions", desc: "Every user is verified and every listing is checked. Your safety and trust are our top priorities." }
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
              { step: "01", title: "Create Account", desc: "Sign up securely as a buyer or seller." },
              { step: "02", title: "Find or List", desc: "Browse thousands of cars or list your own in minutes." },
              { step: "03", title: "Negotiate", desc: "Use our built-in offer system to reach an agreement." },
              { step: "04", title: "Test Drive", desc: "Schedule a meetup and finalize the deal in person." }
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
      <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <FaCarSide className="text-cyan-400" />
              CarScout
            </div>
            <p>&copy; 2026 CarScout. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .bg-300\\% {
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
