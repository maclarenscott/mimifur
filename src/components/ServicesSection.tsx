import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Secure and compliant software solutions tailored to government requirements.',
    },
    {
      title: 'System Integration',
      description: 'Seamless integration with existing government infrastructure and systems.',
    },
    {
      title: 'Cloud Solutions',
      description: 'Government-compliant cloud infrastructure and services.',
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for sensitive government data.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 