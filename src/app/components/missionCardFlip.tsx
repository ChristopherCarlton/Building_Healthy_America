import React from 'react';

const MissionFlip = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4 bg-white">
      {/* Card 1 */}
      <div className="group w-full max-w-full mx-auto my-8 [perspective:1000px]">
        <div className="relative w-full h-96 text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center [backface-visibility:hidden] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/home-child-wheelchair-1600x1120.jpg')" }}
          >
            <div className="absolute w-full h-full bg-[#2D7B86] opacity-80"></div>
            <h2 className="text-4xl font-bold text-white z-10">WHAT WE DO</h2>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full bg-[#2D7B86] text-white p-8 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h3 className="text-2xl font-semibold mb-4">Build Local Networks</h3>
            {/* <h2 className="text-4xl font-bold mb-4">What We Do</h2> */}
            <p className="mb-4">
              Building Healthier America connects families who are navigating chronic illness or disability of a child -- to services and to each other.
            </p>
            <p>
              We provide a centralized and searchable database of resources, and a growing network of families who are walking a similar path.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group w-full max-w-full mx-auto my-8 [perspective:1000px]">
        <div className="relative w-full h-96 text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center [backface-visibility:hidden] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/hero-slider-2-1600x1067.jpg')" }}
          >
            <div className="absolute w-full h-full bg-[#BA4A68] opacity-80"></div>
            <h2 className="text-4xl font-bold text-white z-10">WHO WE SERVE</h2>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full bg-[#BA4A68] text-white p-8 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h3 className="text-2xl font-semibold mb-4">Inclusivity, Not Exclusivity</h3>
            {/* <h2 className="text-4xl font-bold mb-4">Who We Serve</h2> */}
            <p className="mb-4">
              Our community-centric framework allows us to serve as many families as possible; our vision is that no family is ever turned away.
            </p>
            <p>
              While we provide localized resources based on funding, our digital-first approach provides families a way to connect regardless of their geographic location.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group w-full max-w-full mx-auto my-8 [perspective:1000px]">
        <div className="relative w-full h-96 text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center [backface-visibility:hidden] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/water.png')" }}
          >
            <div className="absolute w-full h-full bg-[#1D568B] opacity-80"></div>
            <h2 className="text-4xl font-bold text-white z-10">HOW WE DO IT</h2>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full bg-[#1D568B] text-white p-8 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h3 className="text-2xl font-semibold mb-4">Secure Connection</h3>
            {/* <h2 className="text-4xl font-bold mb-4">How We Do It</h2> */}
            <p className="mb-4">
              We partner with Handzin, a secure community platform, to create a hub of connection for our families.
            </p>
            <p>
              In the cases of our local chapters, we have a community navigator who aggregates resources and serves as a bridge between the various social service organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionFlip;
