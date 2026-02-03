import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent to the Daily News team.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-[#121417] flex flex-col">
            Get In Touch
            <span className="h-1.5 w-24 bg-orange-600 mt-2"></span>
          </h2>
          <p className="text-gray-500 mt-6 text-lg max-w-2xl">
            Have a news tip, a correction, or just want to say hello? We'd love to hear from you. 
            Our team typically responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information Cards */}
          <div className="space-y-6"> 
            <div className="bg-gray-50 p-6 border-l-4 border-orange-600 shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <Mail className="text-orange-600" size={24} />
                <h3 className="font-bold text-lg">Email Us</h3>
              </div>
              <p className="text-gray-600">editorial@dailynews.com</p>
              <p className="text-gray-600">support@dailynews.com</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-orange-600 shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <Phone className="text-orange-600" size={24} />
                <h3 className="font-bold text-lg">Call Us</h3>
              </div>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Mon - Fri, 9am - 6pm EST</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-orange-600 shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <MapPin className="text-orange-600" size={24} />
                <h3 className="font-bold text-lg">Visit Us</h3>
              </div>
              <p className="text-gray-600">123 News Plaza, Media District</p>
              <p className="text-gray-600">Lahore, Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-gray-100 p-8 shadow-sm rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 focus:border-orange-600 outline-none transition-all"
                    placeholder="Shabana Asif"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 focus:border-orange-600 outline-none transition-all"
                    placeholder="shabana@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 focus:border-orange-600 outline-none transition-all"
                  placeholder="News Tip / Feedback"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 focus:border-orange-600 outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#ff6600] text-white px-8 py-4 font-bold flex items-center gap-3 hover:bg-black  transition-all uppercase tracking-widest"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;