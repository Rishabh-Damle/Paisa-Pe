import { Wallet, Send, Shield, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
export function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Wallet className="w-8 h-8" />
              <span className="text-2xl font-bold">Paisa-Pe</span>
            </div>
            <div className="flex space-x-4">
              <button className="border-2 border-black text-black rounded-lg hover:bg-gray-50 transition-colors px-6 py-2 cursor-pointer">
                <Link to="/signin">Login</Link>
              </button>

              <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Send Money.
              <br />
              <span className="text-gray-600">Instantly on finger tips.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              An application that lets users send money to each other using an
              initial dummy balance.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="px-8 py-4 bg-black text-white rounded-lg transition-colors flex items-center space-x-2 text-lg font-medium ">
                <span>Click to contribute</span>
                <ArrowRight className="w-5 h-5" />
              </div>
              <a
                href="https://github.com/Rishabh-Damle/Paisa-Pe"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button className="px-8 py-4 border-2 border-black text-black rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium cursor-pointer">
                  <FaGithub className="text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Paisa-Pe?</h2>
            <p className="text-xl text-gray-600">
              Built for simplicity, designed for security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="cursor-pointer bg-white p-8 rounded-xl border border-gray-200 hover:border-black transition-all">
              <div className="  w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Digital Wallet</h3>
              <p className="text-gray-600 leading-relaxed">
                Manage your balance effortlessly. Your money, always accessible,
                always secure.
              </p>
            </div>

            <div className="cursor-pointer bg-white p-8 rounded-xl border border-gray-200 hover:border-black transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Instant Transfers</h3>
              <p className="text-gray-600 leading-relaxed">
                Send money to anyone in seconds. Real-time balance updates for
                both parties.
              </p>
            </div>

            <div className="cursor-pointer bg-white p-8 rounded-xl border border-gray-200 hover:border-black transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Secure & Safe</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank-level security with atomic transactions and proper
                authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Three simple steps to start sending money
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Sign Up</h3>
              <p className="text-gray-600">
                Create your account and get instant wallet access
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Add Balance</h3>
              <p className="text-gray-600">
                Start with a dummy balance to explore the platform
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Send Money</h3>
              <p className="text-gray-600">
                Transfer funds to anyone instantly and securely
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join Paisa-Pe for their daily transactions
          </p>
          <button className="cursor-pointer px-10 py-5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-xl font-medium inline-flex items-center space-x-2">
            <Link to="/signup">Create Your Wallet</Link>

            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Wallet className="w-6 h-6" />
              <span className="text-xl font-bold">Paisa-Pe</span>
            </div>
            <p className="text-gray-600">
              © 2026 Paisa-Pe. A learning-focused fintech project.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
