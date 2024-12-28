import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Have questions or feedback? We’d love to hear from you!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <form
         onSubmit={()=>preventdefault()}
         className="grid grid-cols-1 gap-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Contact Details Section */}
      <section className="mt-12 w-full max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="mt-4 text-gray-600">
          You can also reach out to us directly through the following:
        </p>
        <div className="mt-6 flex justify-around text-left">
          {/* Email */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Email</h3>
            <p className="text-gray-600">support@example.com</p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Phone</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Address</h3>
            <p className="text-gray-600">123 Street Name, City, Country</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
