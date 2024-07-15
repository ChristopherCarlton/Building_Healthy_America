import React from 'react';

const FlipCardLetsConnect: React.FC = () => {
  return (
    <div className="group w-full max-w-3xl mx-auto my-8 [perspective:1000px]">
      <div className="relative w-full h-96 text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full flex items-center justify-center [backface-visibility:hidden] rounded-lg overflow-hidden" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/8a/Let%27s_Connect_logo_in_SVG_format.svg')", backgroundSize: '100%', backgroundPosition: 'center' }}>
          <div className="absolute w-full h-full bg-gray-800 opacity-20"></div>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full bg-[#286fb4] text-white p-8 rounded-lg flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h5 className="text-lg font-medium">Pilot Cities</h5>
          <h4 className="text-2xl font-bold mt-2 mb-4">Get Involved</h4>
          <p className="mb-6">
            We are launching our first pilot site in Hudson, Wisconsin. We are actively seeking families managing children of any age with chronic illness or disability in these communities to help us develop and build our network of services. To learn more about what we have planned, click on the link below.
          </p>
          <a href="/contact/" className="bg-[#df4c7f] text-white px-6 py-3 rounded-full font-semibold">
            LET'S CONNECT
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlipCardLetsConnect;
