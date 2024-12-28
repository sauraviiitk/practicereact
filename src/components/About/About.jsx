import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section: Header */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">Learn more about our mission and values</p>
      </section>

      {/* Section: Company Overview */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a company dedicated to bringing the best shoes and apparel to
          our customers. Our mission is to provide high-quality footwear and
          clothing for all ages and lifestyles. We believe that everyone
          deserves comfort and style, no matter their journey.
        </p>
      </section>

      {/* Section: Our Values */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Quality</h3>
              <p className="text-gray-600 mt-2">
                We ensure that all our products meet the highest standards of
                quality, durability, and design.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Customer Care</h3>
              <p className="text-gray-600 mt-2">
                Our customers are at the heart of everything we do, and we strive
                to deliver the best experience with every purchase.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Sustainability</h3>
              <p className="text-gray-600 mt-2">
                We are committed to sustainable practices and environmentally
                conscious production methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Team */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Meet Our Team
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <img
              src="/images/team-member1.jpg"
              alt="Team Member 1"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <img
              src="/images/team-member2.jpg"
              alt="Team Member 2"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Chief Designer</p>
          </div>
          <div className="text-center">
            <img
              src="/images/team-member3.jpg"
              alt="Team Member 3"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Sara Lee</h3>
            <p className="text-gray-600">Marketing Lead</p>
          </div>
        </div>
      </section>

      {/* Section: Contact CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Want to Know More?</h2>
        <p className="text-lg mb-8">
          Get in touch with us and learn more about our products and services.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default About;
