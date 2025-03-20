import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Mimifur Technologies</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Based in Montreal, we deliver secure, compliant, and efficient systems that meet the unique needs of government organizations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Compliant with government security standards and regulations</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals in software development</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-gray-600">Rigorous testing and quality control processes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 