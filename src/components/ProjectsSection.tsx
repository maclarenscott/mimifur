import React from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Government Portal System',
      description: 'A comprehensive portal system for managing government services and citizen interactions.',
      category: 'Web Application',
      image: '/projects/portal.jpg',
    },
    {
      title: 'Secure Document Management',
      description: 'Enterprise-level document management system with advanced security features.',
      category: 'Enterprise Solution',
      image: '/projects/document.jpg',
    },
    {
      title: 'Data Analytics Platform',
      description: 'Advanced analytics platform for government decision-making and reporting.',
      category: 'Data Analytics',
      image: '/projects/analytics.jpg',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Success Stories
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover how we&apos;ve helped government organizations transform their digital infrastructure.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
              >
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400">Project Image</span>
                  </div>
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{project.category}</p>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 