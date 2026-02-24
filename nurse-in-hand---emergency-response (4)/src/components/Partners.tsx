
import { FC } from 'react';

export default function Partners() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-2">Our Partners</h2>
          <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex justify-center items-center">
          {/* TODO: Replace '/images/partners.png' with the actual uploaded image file if different. */}
          <img 
            src="/images/partners.png" 
            alt="Our Partners" 
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
