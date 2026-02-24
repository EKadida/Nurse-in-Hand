import { Bike, Stethoscope } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            {/* TODO: Replace '/images/core-services.svg' with the actual uploaded image file. 
                If you uploaded a file named 'my-image.png', move it to 'public/images/' and update the src below. */}
            <img 
              src="/images/core-services.png" 
              alt="Nurse with helmet, ambulance and motorcycle" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-contain bg-gray-50"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-lg text-red-600 mt-1">
                <Bike size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Transport</h3>
                <p className="text-gray-600">
                  Fast transport of qualified medical personnel from trauma centers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mt-1">
                <Stethoscope size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trauma Care</h3>
                <p className="text-gray-600">
                  Service delivery units positioned along highways to host paramedics, emergency response motorcycles, 
                  accident evacuation equipment, and medical supplies to respond to incidents effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
