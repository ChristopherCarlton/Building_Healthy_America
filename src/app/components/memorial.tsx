import React from 'react';

// In Memoriam — Thomas Rudolph Brinsko, co-founder of Building Healthier America.
// Details below are drawn from Tom's obituary. The donation link is the same
// Givebutter link used elsewhere on the site.
const tom = {
  name: 'Thomas Rudolph Brinsko',
  lifespan: 'September 21, 1951 — May 16, 2026',
  role: 'Co-Founder, Building Healthier America',
  image: '/images/TomBrinsko.jpg',
  donateUrl: 'https://givebutter.com/dMaREx',
  memoryUrl: 'https://www.oconnellfuneralhomes.com',
};

const Memorial = () => {
  return (
    <section
      aria-label="In memoriam of Thomas Rudolph Brinsko"
      className="w-full bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20 border-t-4 border-accent fade-in transition-opacity duration-1000 opacity-0 translate-y-4"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-center text-secondary tracking-[0.3em] text-sm sm:text-base font-semibold uppercase mb-10">
          In Memoriam
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* Photo — place of honor */}
          <div className="shrink-0">
            <img
              src={tom.image}
              alt={tom.name}
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-xl ring-4 ring-white border border-gray-200 mx-auto"
            />
          </div>

          {/* Tribute */}
          <div className="text-center lg:text-left max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-semibold text-primary">{tom.name}</h2>
            <p className="text-accent text-xl sm:text-2xl mt-2">{tom.lifespan}</p>
            <p className="text-gray-500 text-lg sm:text-xl mt-1">{tom.role}</p>

            <div className="mt-6 space-y-4 text-gray-600 text-lg sm:text-xl leading-relaxed">
              <p>
                It is with heavy hearts that we share the passing of our co-founder and friend,
                Tom Brinsko, who died on May 16, 2026, at the age of 74, in the company of his
                loving family. Tom&rsquo;s vision, generosity, and tireless commitment to families
                shaped everything Building Healthier America is today.
              </p>
              <p>
                Born on September 21, 1951, in Iron Mountain, Michigan, to Rudy and Anne Brinsko,
                Tom spent his youth in Appleton, Wisconsin, before earning a master&rsquo;s degree in
                human performance from the University of Wisconsin&ndash;La Crosse. His passion for
                fitness led to a 42-year career with the YMCA, where he rose from an entry-level
                position to become President and CEO of the YMCA of Greater St. Paul, contributing to
                the health and well-being of his community. He also served for many years on the board
                of directors of HealthPartners, working to expand community access to medical care.
              </p>
              <p>
                A caring and active member of his community, Tom founded the non-profit Building
                Healthier America to provide services and support to individuals with disabilities and
                their families. Together with Andy Nelson, he helped turn the findings of a 1997 study
                into action &mdash; building a more supportive path for families navigating chronic
                illness and disability, and laying the foundation for the work that continues today.
              </p>
              <p>
                Outside of his career, Tom loved fitness and sport. An avid Packer and Badger fan, he
                competed in three Ironman competitions along with numerous triathlons and marathons.
                He loved skiing and snowshoeing in the winter, but his greatest passion was his
                bicycle &mdash; he rode long distances and even biked across the United States.
              </p>
              <p>
                Tom is survived by his loving wife of 44 years, Cynthia Brinsko; his sons, Bryan,
                Stephen, and Dan Brinsko; his brothers, James (Kim) Brinsko, Joseph (Pat) Brinsko, and
                Mike (Nancy) Brinsko; and many sisters- and brothers-in-law, nieces, and nephews. He
                was preceded in death by his parents, Rudolph and Anne Brinsko. He will be deeply
                missed, and his legacy lives on in the families this community continues to serve.
              </p>
            </div>

            {/* Service details */}
            <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-left">
              <h3 className="text-primary text-xl font-semibold mb-3">Services</h3>
              <p className="text-gray-600 leading-relaxed">
                A Mass of Christian Burial will be held on Saturday, June 13, 2026, at 11:00 a.m. at
                St. Patrick&rsquo;s Parish, 1500 Vine St, Hudson, WI. Visitation will be held one hour
                prior to the service. The Mass will be live-streamed on the St. Patrick&rsquo;s of
                Hudson Facebook page.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Services are entrusted to O&rsquo;Connell Family Funeral Home and Cremation Services of
                Hudson. To share a memory, please visit{' '}
                <a
                  href={tom.memoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  oconnellfuneralhomes.com
                </a>{' '}
                or call 715-386-3725.
              </p>
            </div>

            {/* Donation appeal */}
            <div className="mt-6 bg-primary text-white rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-lg sm:text-xl text-center sm:text-left">
                In lieu of flowers, donations may be made to Building Healthier America in Tom&rsquo;s
                memory.
              </p>
              <a
                href={tom.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-white text-primary px-8 py-3 rounded-md font-semibold shadow-lg transform hover:scale-105 transition duration-300"
              >
                DONATE IN TOM&rsquo;S MEMORY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memorial;
