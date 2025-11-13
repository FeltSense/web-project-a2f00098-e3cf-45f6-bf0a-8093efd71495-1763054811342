import { Zap, Shield, Users, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Lightning Fast Solutions',
      description: 'Cutting-edge technology that delivers results at unprecedented speed. Our optimized systems ensure your business runs efficiently 24/7.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols protect your data and operations. We implement industry-leading standards to keep your business safe.',
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Grow without limits. Our cloud-based solutions scale seamlessly with your business, from startup to enterprise level.',
    },
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months. Our streamlined onboarding process means you start seeing results immediately.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Solutions for Modern Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to transform your operations and accelerate growth in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}