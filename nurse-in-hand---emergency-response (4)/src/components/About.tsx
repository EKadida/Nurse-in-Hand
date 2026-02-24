import { Target, Eye, AlertTriangle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About The Initiative</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nurse in Hand Emergency Response is a Vision 2030 potential flagship project, aligned to SDG 3 target 6, that seeks to reduce accident related deaths on our highways.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* The Problem */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-red-500">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
              <AlertTriangle size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem</h3>
            <p className="text-gray-600 leading-relaxed">
              Road crashes are sudden and violent often leading to disabilities and long term psychological effects. 
              The economic cost of road crashes is approx up to 5% of our GDP, about Sh. 800 billion annually. (Davis Chirchir, Transport CS, 2025; NTSA).
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To achieve a realistic golden 10 minutes emergency response time on our roads to save more lives.
              Road Emergency Doctors Service seeks to benchmark its operations against UK emergency response standards, guidelines, and best practices to enhance its response capabilities and improve patient outcomes in Kenya.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-green-500">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To achieve a holistic solution in Kenya that will accomplish vision zero deaths on our roads.
              Leveraging technology to aggregate emergency medical services to road accident victims.
            </p>
          </div>
        </div>

        {/* Objectives List */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">Strategic Objectives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Enlist Subscribers to our Web and Mobile based Application",
              "Train Paramedics",
              "Train public service vehicle drivers and boda bodas on accident scene management",
              "Establish Emergency Care Centres along the highways",
              "Establish Trauma Centres to Augment the referral track",
              "Map highways, roads, hospitals, police stations and fire stations",
              "Augment County governments Emergency & disaster dispatch units",
              "Public Safety awareness"
            ].map((objective, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </span>
                <p className="text-sm text-gray-700 font-medium">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
