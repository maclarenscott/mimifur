import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsSection() {
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade solutions designed for government agencies, educational institutions, and public sector organizations.
          </p>
        </div>

        {/* TicketNova Product Showcase */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/ticketnovaevents.png"
                alt="TicketNova Events Platform"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">TicketNova</h3>
              <p className="text-lg text-gray-600 mb-6">
                A SaaS white-label ticketing platform designed specifically for universities and public venues.
              </p>
              
              {/* <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4> */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hosted on our secure servers, no need to worry about infrastructure</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seamless ticket sales and digital delivery</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced seating maps and inventory management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fraud prevention and secure ticket transfer</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time analytics and event management tools</span>
                </li>
              </ul>
           
              
              <Link 
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg mt-20">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/piapi.png"
                alt="PI API"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">PI API</h3>
              <p className="text-lg text-gray-600 mb-6">
                A Backend as a Service (BaaS) to connect to your SQL database.
              </p>
              
              {/* <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4> */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Import your existing SQL database, and we automatically create API endpoints that suit your needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Manage connectivity with API keys</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quickly create new endpoints to analyze datasets</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>PI API handles hosting and scaling as projects grow</span>
                </li>
                
              </ul>
           
              
              <Link 
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
} 