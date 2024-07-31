import React from 'react';

export default function GetInvolved() {
  return (
    <div className="w-screen mx-auto px-4 py-12 font-crimson-text bg-blue-100">
      {/* bg-gradient-to-br from-blue-100 to-green-100"> */}
      <div className='py-32'></div>
      <h1 className="text-5xl font-bold text-center mb-8 text-[#2c3e50] tracking-wide">GET INVOLVED</h1>
      <p className="text-lg sm:text-2xl md:text-3xl text-center mb-12 text-[#34495e]">There are many ways to get involved with Building Healthier America!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
  <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
    <h2 className="text-3xl font-bold mb-6 text-primary">JOIN</h2>
    <p className="mb-6 text-gray-700 leading-relaxed">Sign up for our free community. Share wisdom with families who are a few steps behind you, and get insights from families who are a few steps ahead of you.</p>
    <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="inline-block text-primary hover:text-primary-dark font-semibold transition duration-300">LEARN MORE <i className="fas fa-arrow-right ml-2"></i></a>
  </div>
  
  <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
    <h2 className="text-3xl font-bold mb-6 text-secondary">DONATE</h2>
    <p className="mb-6 text-gray-700 leading-relaxed">We're here for families during some of their most challenging times. Make a gift today to help ensure that no family ever has to walk alone.</p>
    <a href="https://buy.stripe.com/cN216geI46bI0M0eUU" className="inline-block text-secondary hover:text-secondary-dark font-semibold transition duration-300">LEARN MORE <i className="fas fa-arrow-right ml-2"></i></a>
  </div>

  <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
    <h2 className="text-3xl font-bold mb-6 text-accent">EVENTS</h2>
    <p className="mb-6 text-gray-700 leading-relaxed">Join us at one of our several events! The majority of our events are free and open to the public, and are a great way to get involved in the BHA community!</p>
    <a href="/events" className="inline-block text-accent hover:text-accent-dark font-semibold transition duration-300">LEARN MORE <i className="fas fa-arrow-right ml-2"></i></a>
  </div>
  
  <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">PARTNER</h2>
    <p className="mb-6 text-gray-700 leading-relaxed">Our success depends largely on working closely with partners who are aligned with our mission. If you are a resource provider or funder in this space, join us!</p>
    <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="inline-block text-accent hover:text-accent-dark font-semibold transition duration-300">LEARN MORE <i className="fas fa-arrow-right ml-2"></i></a>
  </div>
</div>

      
      <div className="mt-12 text-center">
        <button className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full text-xl font-bold transition duration-300 shadow-lg transform hover:scale-105">
          Subscribe
        </button>
      </div>
    </div>
  );
}
