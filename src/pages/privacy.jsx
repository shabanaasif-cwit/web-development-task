import React, { useEffect } from "react";
import { ShieldCheck, EyeOff, Lock, FileText } from "lucide-react";

function PrivacyPage() {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <EyeOff size={24} />,
      title: "Data Collection",
      content: "We collect minimal information necessary to provide our news services, such as email addresses for newsletters and browser cookies to improve your reading experience."
    },
    {
      icon: <Lock size={24} />,
      title: "Data Security",
      content: "Daily News employs industry-standard encryption and security protocols to protect your personal data from unauthorized access or disclosure."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Third-Party Sharing",
      content: "We do not sell your personal data. Information is only shared with trusted partners essential for site functionality, such as analytics or email delivery services."
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-3 text-orange-600 mb-4">
            <FileText size={32} />
            <span className="font-bold uppercase tracking-widest text-sm">Legal Documentation</span>
          </div>
          <h2 className="text-4xl font-black text-[#121417] uppercase italic tracking-tighter">
            Privacy <span className="text-orange-600">Policy</span>
          </h2>
          <p className="text-gray-500 mt-4">Last Updated: January 31, 2026</p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-bold">Daily News</span>, we value your trust. This policy outlines how we handle your information and our commitment to maintaining your privacy while you stay informed with our global reporting.
          </p>
        </section>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-50 p-6 border-t-4 border-orange-600 shadow-sm">
              <div className="text-orange-600 mb-4">{section.icon}</div>
              <h3 className="font-bold text-[#121417] uppercase mb-2">{section.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Detailed Content */}
        <div className="prose prose-orange max-w-none text-gray-600 space-y-8">
          <article>
            <h3 className="text-xl font-bold text-[#121417] uppercase mb-4">1. Information We Collect</h3>
            <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and subscribe to the newsletter.</p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-[#121417] uppercase mb-4">2. Cookies and Tracking</h3>
            <p>Our site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them.</p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-[#121417] uppercase mb-4">3. Contacting Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact our editorial team via our <a href="/contact" className="text-orange-600 font-bold hover:underline">Contact Page</a>.</p>
          </article>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPage;