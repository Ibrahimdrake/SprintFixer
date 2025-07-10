
import React from 'react';

export default function SprintfixerLanding() {
  return (
    <div className="font-sans bg-white text-sprintfixer-black">

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-extrabold leading-tight max-w-3xl mx-auto mb-8">
          The trusted bridge between people <br /> and skilled hands
        </h1>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-center font-bold text-xl mb-12">Who We Are</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-20 max-w-5xl mx-auto">
          {/* Circular photo group */}
          <div className="rounded-full border-8 border-#F58634 overflow-hidden w-56 h-56 flex items-center justify-center mb-10 md:mb-0">
            <img
              src="/assets/WhoWeAre Page pics/0b7442b77af656395ed4dda0b7aedc97982b469b.png" 
              alt=""
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text blocks */}
          <div className="flex-1 text-sm leading-relaxed space-y-4 text-sprintfixer-black">
            <p>
              We’re a Servi-Tech platform that connects Nigerians to trusted, verified artisans,
              plumbers, electricians, painters, and more. We’re here to take the guesswork out of home services.
            </p>
            <p>
              We are offering secured, seamless, and reliability at your fingertips, while empowering artisans with steady jobs,
              visibility, and secure payments. At Sprintfixer it’s not just about connecting; we’re here to restore trust in the process.
            </p>
          </div>
        </div>
      </section>

      {/* What guides what we do */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h3 className="font-semibold text-lg mb-8 max-w-3xl mx-auto">
          What guides what we do
        </h3>
        <p className="text-sm max-w-3xl mx-auto mb-12 text-sprintfixer-black">
          Everything we do at Sprintfixer is driven by core principles. We’re more than just a link between users and artisans,
          we’re restoring trust in how services are found, booked, and delivered.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

          {/* Card 1 - Accountability */}
          <div className="bg-sprintfixer-darkgreen text-sprintfixer-yellow p-6 rounded-md shadow-md flex flex-col items-center space-y-4">
            <img
              src="/assets/WhoWeAre Page pics/Accountability icon.png" 
              alt=""
              className="w-12 h-12"
            />
            <h4 className="font-semibold text-lg">Accountability</h4>
            <p className="text-xs text-black-200 text-center">
              We own our work and our customers. Users can trust us to show up and make things right.
            </p>
          </div>

          {/* Card 2 - Trust */}
          <div className="bg-sprintfixer-darkgreen text-sprintfixer-yellow p-6 rounded-md shadow-md flex flex-col items-center space-y-4">
            <img
              src="/assets/WhoWeAre Page pics/Trust Icon.png"
              alt=""
              className="w-12 h-12"
            />
            <h4 className="font-semibold text-lg">Trust</h4>
            <p className="text-xs text-black-200 text-center">
              We believe trust is everything between customers and artisans, and between Sprintfixer and users.
            </p>
          </div>

          {/* Card 3 - Innovation */}
          <div className="bg-sprintfixer-darkgreen text-sprintfixer-yellow p-6 rounded-md shadow-md flex flex-col items-center space-y-4">
            <img
              src="/assets/WhoWeAre Page pics/Innovation icon.png"
              alt=""
              className="w-12 h-12"
            />
            <h4 className="font-semibold text-lg">Innovation</h4>
            <p className="text-xs text-black-200 text-center">
              We embrace technology that simplifies life and uplifts people.
            </p>
          </div>

          {/* Card 4 - Placeholder */}
          <div className="bg-sprintfixer-darkgreen text-sprintfixer-yellow p-6 rounded-md shadow-md flex flex-col items-center space-y-4">
            <img
              src="/assets/WhoWeAre Page pics/Excellence icon.png"
              alt=""
              className="w-12 h-12"
            />
            <h4 className="font-semibold text-lg">Excellence</h4>
            <p className="text-xs text-black-200 text-center">
              We deliver better apps and services for you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 space-y-20 mb-24">
        <div className="relative bg-sprintfixer-yellow py-12 px-8 rounded-lg max-w-5xl mx-auto">
          <h3 className="font-semibold text-sprintfixer-darkgreen text-lg mb-4">Our Mission</h3>
          <p className="text-sm text-sprintfixer-black max-w-3xl">
            Our mission is to redefine how Nigerians experience everyday services by building a transparent platform that connects verified artisans to customers, putting safety, convenience, and quality service first.
          </p>
          <img
            src="/assets/WhoWeAre Page pics/Worker image.png"
            alt=""
            className="absolute right-8 bottom-0 w-24 h-24"
          />
        </div>

        <div className="relative bg-sprintfixer-yellow py-12 px-8 rounded-lg max-w-5xl mx-auto">
          <h3 className="font-semibold text-sprintfixer-darkgreen text-lg mb-4">Our Vision</h3>
          <p className="text-sm text-sprintfixer-black max-w-3xl">
            To become West Africa’s leading platform for dependable, on-demand home and workplace services while uplifting the informal economy through dignity, professionalism, and opportunity.
          </p>
          <div className="absolute left-8 bottom-0 w-48 h-10 rounded-full bg-black opacity-70" />
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-sprintfixer-darkgreen text-sprintfixer-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex-1 max-w-lg">
            <h3 className="font-semibold text-lg mb-4">What We Offer</h3>
            <h2 className="text-3xl font-extrabold mb-6">Verified Artisans</h2>
            <p className="text-sm leading-relaxed mb-8">
              We verify and vet every artisan that joins our platform to ensure you get quality and reliable service every time.
            </p>
            <button className="bg-sprintfixer-orange rounded-full px-6 py-3 font-semibold hover:bg-orange-500">
              Get Started
            </button>
          </div>
          <img
            src="/assets/WhoWeAre Page pics/Verify.jpg"
            alt=""
            className="w-64 h-64 object-cover rounded-md"
          />
          <img
            src="/assets/WhoWeAre Page pics/Market place.jpg"
            alt=""
            className="w-44 h-44 object-cover rounded-md"
            />
             <img
            src="/assets/WhoWeAre Page pics/Customer Support.jpg"
            alt=""
            className="w-44 h-44 object-cover rounded-md"
            />
        </div>
      </section>

      {/* Contact Us */}
      <footer id="contact" className="bg-white py-12 px-6 max-w-7xl mx-auto text-center text-sprintfixer-black">
        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
        <p className="mb-6 text-sm max-w-2xl mx-auto">
          Questions? Reach out anytime via email at{' '}
          <a href="mailto:hello@sprintfixer.com" className="underline hover:text-sprintfixer-orange">
            hello@sprintfixer.com
          </a>{' '}
          or call us at{' '}
          <a href="tel:+2348000000000" className="underline hover:text-sprintfixer-orange">
            +234 800 000 0000
          </a>.
        </p>
        <div className="space-x-6 text-sprintfixer-gray">
          <a href="https://facebook.com/sprintfixer" target="_blank" rel="noopener noreferrer" className="hover:text-sprintfixer-orange">
            Facebook
          </a>
          <a href="https://twitter.com/sprintfixer" target="_blank" rel="noopener noreferrer" className="hover:text-sprintfixer-orange">
            Twitter
          </a>
          <a href="https://instagram.com/sprintfixer" target="_blank" rel="noopener noreferrer" className="hover:text-sprintfixer-orange">
            Instagram
          </a>
        </div>
      </footer>

    </div>
  );
}
