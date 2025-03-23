import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Custom Enterprise Software',
      description: 'Tailored software solutions designed to address the specific operational needs of large organizations and government agencies, with scalability and security built in from the ground up.',
    },
    {
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, secure platforms while preserving critical business logic and ensuring minimal disruption to operations.',
    },
    {
      title: 'Secure Cloud Migration',
      description: 'Enterprise-grade cloud solutions with comprehensive security controls that meet regulatory compliance requirements for government and regulated industries.',
    },
    {
      title: 'Data Integration & Analytics',
      description: 'Connect disparate systems and unlock actionable insights from your organization&apos;s data with secure, compliant integration and analytics solutions.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that address the complex challenges faced by enterprise organizations and government agencies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 