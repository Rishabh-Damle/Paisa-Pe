import { Wallet, Send, Shield, ArrowRight, Zap, Menu, X, } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">

      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="bg-black p-2 rounded-lg group-hover:scale-105 transition-transform">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Paisa-Pe</span>
            </div>


            <div className="hidden md:flex items-center space-x-8">
              <Link to="/signin" className="text-gray-600 hover:text-black font-medium transition-colors">
                Login
              </Link>
              <Link to="/signup">
                <button className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>


            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-black transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>


        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/signin" 
                className="block text-center w-full py-3 text-gray-600 hover:text-black font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup"
                className="block text-center w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>


      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-600">v1.0 is now live</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-black">
            Send Money.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">
              Instantly.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the future of payments. Simple, secure, and lightning fast. 
            Join thousands of users trusting Paisa-Pe today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 text-lg font-medium group cursor-pointer w-full sm:w-auto justify-center">
              <span>Start Sending</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://github.com/Rishabh-Damle/Paisa-Pe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-lg font-medium flex items-center justify-center space-x-2 cursor-pointer">
                <FaGithub className="text-xl" />
                <span>Star on GitHub</span>
              </button>
            </a>
          </div>
        </div>
      </section>


      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up-delayed">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Why Choose Paisa-Pe?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've reimagined the payment experience to be as simple as a text message, 
              yet as secure as a bank vault.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wallet className="w-6 h-6 text-white" />,
                title: "Digital Wallet",
                description: "Manage your balance effortlessly. Your money, always accessible, always secure."
              },
              {
                icon: <Send className="w-6 h-6 text-white" />,
                title: "Instant Transfers",
                description: "Send money to anyone in seconds. Real-time balance updates for both parties."
              },
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: "Bank-Grade Security",
                description: "Protected by atomic transactions and industry-standard encryption protocols."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white p-10 rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-3 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-12">

            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>

            {[
              { number: "1", title: "Create Account", desc: "Sign up in seconds" },
              { number: "2", title: "Add Money", desc: "Top up your wallet" },
              { number: "3", title: "Send", desc: "Pay anyone instantly" }
            ].map((step, index) => (
              <div key={index} className="relative text-center bg-white p-4">
                <div className="w-24 h-24 bg-black text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold shadow-2xl skew-y-3 hover:skew-y-0 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-black rounded-[2.5rem] text-center px-6 py-20 relative overflow-hidden">

          <div className="absolute top-0 left-0 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-white tracking-tight">
              Ready to simplify<br/>your payments?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the fastest growing payment network today. No hidden fees, just seamless transactions.
            </p>
            <Link to="/signup">
              <button className="px-12 py-5 bg-white text-black rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-xl font-bold inline-flex items-center space-x-2 cursor-pointer">
                <span>Create Free Account</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>


      <footer className="border-t border-gray-100 py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Wallet className="w-8 h-8" />
                <span className="text-2xl font-bold">Paisa-Pe</span>
              </div>
              <p className="text-gray-600 max-w-sm text-lg leading-relaxed">
                Making digital payments accessible, secure, and simple for everyone. 
                Built with modern web technologies.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Product</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500">
            <p>© 2026 Paisa-Pe. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <FaGithub className="w-6 h-6 hover:text-black cursor-pointer transition-colors"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
