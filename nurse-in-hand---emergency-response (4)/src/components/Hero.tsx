import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-red-700 via-red-600 to-blue-600">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-red-100">
            When Minutes Count
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Help Us Make <br className="hidden md:block" />
            The Difference
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-100 font-light">
            Providing road accident emergency response — reducing fatalities on Kenyan highways.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#donate"
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Heart size={20} fill="currentColor" />
              Donate Now
            </a>
            <a 
              href="#about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Learn More
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave/Shape Divider (Optional, but adds style) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-10"></div>
    </section>
  );
}
