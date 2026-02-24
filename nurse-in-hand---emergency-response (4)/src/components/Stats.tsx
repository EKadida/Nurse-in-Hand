import { Clock, MapPin, Activity, ShieldCheck } from 'lucide-react';

const stats = [
  { 
    icon: Clock,
    value: "10 min", 
    label: "Target Response Time" 
  },
  { 
    icon: MapPin,
    value: "12", 
    label: "Counties to be covered" 
  },
  { 
    icon: Activity,
    value: "50 kms", 
    label: "between trauma centers" 
  },
  { 
    icon: ShieldCheck,
    value: "24/7", 
    label: "Emergency Support" 
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-500 py-12 relative z-20 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="mb-3 p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <stat.icon size={32} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm md:text-base text-blue-100 font-medium uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
