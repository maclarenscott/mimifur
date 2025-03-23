import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Mimifur Technologies</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience, we specialize in developing custom software solutions for enterprise organizations and government agencies that require the highest levels of security, compliance, and performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise-Grade</h3>
                <p className="text-gray-600">Scalable solutions built for complex organizational needs</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Focused</h3>
                <p className="text-gray-600">Adhering to industry standards and government security regulations</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Development</h3>
                <p className="text-gray-600">Tailored solutions addressing specific business requirements</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">Comprehensive maintenance and technical assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 