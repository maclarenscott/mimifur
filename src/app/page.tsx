import Image from "next/image";
import Link from "next/link";
// import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-heading font-semibold text-gray-900">Mimifur Technologies Limited</span>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="#services" className="text-gray-600 hover:text-gray-900">Solutions</Link>
              <Link href="#products" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-white">
        <Image
          src="/cover.jpg"
          alt="Enterprise Software Solutions"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white max-w-2xl pt-16">
              <h1 className="font-heading text-5xl font-semibold tracking-tight mb-6">
                Custom Software for Enterprise & Government
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Delivering secure, scalable, and compliant solutions tailored for the unique requirements of enterprise organizations and government agencies.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Banner */}
      {/* <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering enterprises and government organizations with purpose-built software solutions that drive efficiency, ensure compliance, and enhance security.
          </p>
        </div>
      </section> */}

      {/* About Section
      <section className="bg-white py-24">
        <AboutSection />
      </section> */}

      {/* Services Section */}
      <section className="bg-gray-50 py-24">
        <ServicesSection />
      </section>

      {/* Products Section */}
      <section className="bg-white py-24">
        <ProductsSection />
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-24">
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}
