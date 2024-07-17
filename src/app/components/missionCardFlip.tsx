import React from 'react';

const MissionFlip = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4 bg-white">
      {/* Card 1 */}
      <div className="group w-full max-w-full mx-auto my-8 [perspective:1000px]">
        <div className="relative w-full h-96 text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center [backface-visibility:hidden] rounded-lg overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/home-child-wheelchair-1600x1120.jpg')" }}
          >
            <div className="absolute w-full h-full bg-black opacity-25"></div>
            <h2 className="text-4xl font-bold text-white z-10">What We Do</h2>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full bg-[#98ccd6] text-white p-8 rounded-lg flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h3 className="text-2xl font-semibold">Build Local Networks</h3>
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="mb-4">
              Families whose children have a chronic illness or disability must interact with at least three huge bureaucracies: the <strong>medical</strong> system, the <strong>educational</strong> system, and the <strong>local human services</strong> system. Unfortunately, it's rare the three-share basic information or collaborate on behalf of the child.
            </p>
            <p>
              Building Healthier America is creating a solution by developing a community network at the local level for families to tap into, so they can share information and resources to help streamline the process.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group w-full max-w-full mx-auto my-8 [perspective:1000px]">
        <div className="relative w-full h-96 text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center [backface-visibility:hidden] rounded-lg overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/home-child-wheelchair-1600x1120.jpg')" }}
          >
            <div className="absolute w-full h-full bg-black opacity-25"></div>
            <h2 className="text-4xl font-bold text-white z-10">Who We Serve</h2>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full bg-[#df4c7f] text-white p-8 rounded-lg flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h3 className="text-2xl font-semibold">Inclusivity</h3>
            <h2 className="text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="mb-4">
              Building Healthier America is about inclusivity, not exclusivity. Most organizations focus on singular categories of illness or disability. Our purpose is to serve all – including families with adult-age children.
            </p>
            <p>
              Families who are managing children with a wide variety of illnesses and disabilities will be served by our program. Our philosophy is to benefit all and that no one will be turned away regardless of a child’s condition. Our unique framework and technology were developed to be family centric, connecting families with others with similar conditions to share resources, knowledge, experiences, and just to talk in a just-in-time information both virtually and in person, most importantly, this is a safe, secure and confidential platform to communicate in.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group w-full max-w-full mx-auto my-8 [perspective:1000px]">
        <div className="relative w-full h-96 text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div
            className="absolute w-full h-full flex items-center justify-center [backface-visibility:hidden] rounded-lg overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/home-child-wheelchair-1600x1120.jpg')" }}
          >
            <div className="absolute w-full h-full bg-black opacity-25"></div>
            <h2 className="text-4xl font-bold text-white z-10">How We Do It</h2>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full bg-[#286fb4] text-white p-8 rounded-lg flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h3 className="text-2xl font-semibold">Secure Connection</h3>
            <h2 className="text-4xl font-bold mb-4">How We Do It</h2>
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
