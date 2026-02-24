import { Stethoscope, Truck, Activity, Box, Scissors, HeartPulse, UserPlus } from 'lucide-react';

const items = [
  {
    name: "Emergency Roadside Centre Units",
    desc: "Fabricated container units",
    image: "https://images.unsplash.com/photo-1587582541194-5900f4a0c843?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Trauma Kits & Medical Supplies",
    desc: "Essential first aid and trauma care",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Emergency Response Motorcycles",
    desc: "With sirens for rapid access",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Road Accident Evacuation Equipment",
    desc: "Stretchers, immobilizers",
    image: "https://images.unsplash.com/photo-1516574187841-693018f54746?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vehicle Cutting Equipment",
    desc: "Jaws of life for extrication",
    image: "https://images.unsplash.com/photo-1626025437642-0b05076ca301?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ambulance Vehicles",
    desc: "Critical Life Support",
    image: "https://images.unsplash.com/photo-1616555846447-b87329b3878e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Trauma Centers",
    desc: "Help us equip our Trauma centers",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vitals Monitor & Defibrillator",
    desc: "Lifepack 15/20",
    image: "https://images.unsplash.com/photo-1584036561566-b93a50208c3c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Paramedics",
    desc: "Qualified medical personnel",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Sponsorship() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Items To Sponsor</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Help us equip our Trauma centers and Roadside Units with these critical items.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group overflow-hidden border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
