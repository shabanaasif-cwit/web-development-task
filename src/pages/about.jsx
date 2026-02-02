import React, { useEffect } from "react";
import { Users, Globe, Award, ShieldCheck } from "lucide-react";


//this function should render once
function AboutPage() {
  // Ensure the page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="mb-16 border-b border-gray-100 pb-12">
          <h2 className="text-5xl font-black text-[#121417] uppercase italic tracking-tighter mb-6">
            Inside <span className="text-orange-600">Daily</span> News
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Founded in 2026, Daily News has grown from a small digital startup into a leading 
            source of global information. We believe that independent journalism is the 
            heartbeat of a functioning society.
          </p>
        </div>

        {/* Mission Grid */}
        {/*This creates the side-by-side layout for the mission text and the quote box: */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#121417] uppercase tracking-tight flex items-center gap-3">
              <span className="h-8 w-1 bg-orange-600"></span>
              Our Mission
            </h3>
            <p className="text-gray-700 leading-loose">
              Our mission is simple: to provide rigorous, real-time journalism and in-depth analysis on the stories that shape our world. We strive to be the most reliable and up-to-date news source for our global audience.
            </p>
          </div>
          <div className="bg-gray-100 p-8 border border-gray-100 italic text-gray-600 relative">
            {/* -top-2 qutation marks*/}
            <span className="text-6xl text-orange-200 absolute -top-1 -left-2 font-italic">"</span>
            We don't just report the news; we explain why it matters to your life, your business, and your future.
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 text-orange-600 mb-4">
              <Globe size={32} />
            </div>
            <h4 className="font-bold text-[#121417] mb-2 uppercase">Global Reach</h4>
            <p className="text-sm text-gray-500">Reporting from over 50 countries to bring you local perspectives.</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 text-orange-600 mb-4">
              <ShieldCheck size={32} />
            </div>
            <h4 className="font-bold text-[#121417] mb-2 uppercase">Fact Checked</h4>
            <p className="text-sm text-gray-500">Every story undergoes a rigorous multi-step verification process.</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 text-orange-600 mb-4">
              <Users size={32} />
            </div>
            <h4 className="font-bold text-[#121417] mb-2 uppercase">Community</h4>
            <p className="text-sm text-gray-500">We prioritize the voices of our readers and the impact on local communities.</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 text-orange-600 mb-4">
              <Award size={32} />
            </div>
            <h4 className="font-bold text-[#121417] mb-2 uppercase">Integrity</h4>
            <p className="text-sm text-gray-500">Honesty and transparency are the foundations of our editorial room.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;