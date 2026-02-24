import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-red-500 leading-none">R.E.D</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Road Emergency Doctors</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing safe, efficient and timely emergency response services. Reducing accident fatalities on Kenyan highways.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#donate" className="text-gray-400 hover:text-red-500 transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="text-red-500 shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:info@nurseinhand.co.ke" className="hover:text-white">info@nurseinhand.co.ke</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="text-red-500 shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+254745372037" className="hover:text-white">(+254) 745 372037</a>
                  <span className="text-xs text-gray-500"> </span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-red-500 shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span>Naivasha, Nakuru County</span>
                  <span>Delamere Place</span>
                  <span>Off Nairobi-Nakuru highway</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nurse In Hand Emergency Response. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
