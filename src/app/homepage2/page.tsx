import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Building Healthier America</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
        <link rel="apple-touch-icon" href="https://buildinghealthieramerica.org/wp-content/themes/buildinghealthieramerica/apple-touch-icon.png" />
        <link rel="icon" href="https://buildinghealthieramerica.org/wp-content/themes/buildinghealthieramerica/apple-touch-icon.png" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://buildinghealthieramerica.org/xmlrpc.php" />
        <link rel="shortcut icon" type="image/x-icon" href="https://buildinghealthieramerica.org/wp-content/themes/buildinghealthieramerica/favicon.ico" />
      </Head>

      <main id="top" className="home page-template page-template-page-templates page-template-template-full-width page-template-page-templatestemplate-full-width-php page page-id-219 logged-in admin-bar no-customize-support">
        <a href="#main" className="sr-only sr-only-focusable color--alternate" aria-label="Navigation Skip Link">
          <span className="screen-reader-text">Skip Navigation or Skip to Content</span>
        </a>

        <div className='py-20'></div>

        <div className="w-screen h-[45rem] relative">
          <div id="hero-slider" className="h-full">
            <div className="h-full bg-cover bg-center relative" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/bha-hero-slider1-1600x1067.jpg)' }}>
              <div className="absolute inset-0 bg-[#286fb4] bg-opacity-70 z-10"></div>
              <div className="container mx-auto flex justify-center items-center text-center h-full relative z-20">
                <div className="block-lede text-white">
                  <h3 className="text-4xl pb-2">Welcome To</h3>
                  <h2 className="text-7xl font-semibold">Building Healthier America</h2>
                  <div className="block-description mt-4">
                    <p className="text-3xl">
                      Connecting Families with Children Managing a Chronic Illness or Disability to the<br /> Services and Support They Need
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-16 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h3 className="text-[#df4c7f] text-2xl font-medium">We Listened</h3>
              <h1 className="text-[#286fb4] text-5xl font-semibold mt-2">Our Partners & Our Why</h1>
            </div>
            <div className="relative mb-8" style={{ width: '1000px', height: '500px', margin: '0 auto' }}>
              <iframe
                src="//www.youtube.com/embed/LfwsGYyQtwE?modestbranding=1&rel=0"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-500 text-lg max-w-4xl mx-auto mt-4 ">
              Families with children managing a chronic illness or disability report their greatest stress comes from arranging numerous services through multiple agencies. Building Healthier America is building a national network to support families within their home communities so they can better navigate the medical, educational, and human services systems, improving quality of time and life for the entire family.
            </p>
          </div>
        </div>

        <div className="w-full feature-grid-container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/home-child-wheelchair-1600x1120.jpg)' }}>
              <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            </div>

            <div className="w-full lg:w-1/3 bg-[#98ccd6] text-white p-20">
              <div className="card">
                <div className="card-body">
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

            <div className="w-full lg:w-1/3 bg-[#df4c7f] text-white p-20">
              <div className="card">
                <div className="card-body">
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
          </div>
        </div>

        <div id="donate" className="w-full py-16 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h3 className="text-[#df4c7f] text-xl font-medium">Founding Principle</h3>
              <h2 className="text-[#286fb4] text-4xl font-bold mt-2">Our Mission</h2>
              <div className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
                <p>Our mission is to serve as a central community resource for families as they navigate the medical, human service, educational and local agencies serving children with chronic illness or disability.</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto bg-[#286fb4] text-white p-8 rounded-lg">
              <h5 className="text-lg font-medium">Pilot Cities</h5>
              <h4 className="text-2xl font-bold mt-2 mb-4">Get Involved</h4>
              <p className="mb-6">
                We are launching our first pilot site in Hudson, Wisconsin. We are actively seeking families managing children of any age with chronic illness or disability in these communities to help us develop and build our network of services. To learn more about what we have planned, click on the link below.
              </p>
              <a href="/contact/" className="bg-[#df4c7f] text-white px-6 py-3 rounded-full font-semibold" target="_self">
                LET'S CONNECT
              </a>
            </div>
          </div>
        </div>

        <div className="w-full relative h-[45rem]">
          <div id="hero-slider" className="h-full">
            <div className="h-full bg-cover bg-center relative" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/hero-slider-2-1600x1067.jpg)' }}>
              <div className="absolute inset-0 bg-white bg-opacity-70 z-10"></div>
              <div className="container mx-auto flex items-center h-full relative z-20 px-4">
                <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
                  <div className="block-lede text-[#286fb4]">
                    <h3 className="text-2xl text-[#df4c7f] pb-2">It's About Connections</h3>
                    <h2 className="text-6xl font-bold">Our Vision</h2>
                    <div className="block-description mt-4 text-gray-700 text-lg">
                      <p>Families and their children with chronic illness or disabilities should have access to independent care coordination and family advocacy that is family-centered, community-based and culturally sensitive.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full feature-grid-container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5 bg-white p-16 flex items-center justify-center text-center">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-2xl text-[#df4c7f] pb-2">Designed by Our Users</h3>
                  <h2 className="text-5xl text-[#286fb4] mb-4">Our Program Goals</h2>
                  <p className="mb-4 text-black">
                    The needs of our families are not just medical, educational, or human services related. Stress management, mental health services, employment considerations for parent, clothing needs, claims processing, changes to the physical structure of the home are all services families need.
                  </p>
                  <p className="text-black">
                    Our programs are being built from the ground up by families living with chronic illness and disability, we want parents to have the opportunity to customize virtual communities with the resources they need.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5 bg-cover bg-center" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/programs-1600x1067.jpg)' }}>
              <div className="absolute inset-0 bg-opacity-25"></div>
            </div>
          </div>
        </div>

        <div className="w-full h-[45rem] relative bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/newsletter-1600x1076.jpg)' }}>
          <div className="absolute inset-0 bg-[#286fb4] bg-opacity-70"></div>
          <div className="container mx-auto flex flex-col justify-center items-center text-center h-full relative z-20">
            <div className="text-white mb-4">
              <h3 className="text-3xl text-[#df4c7f] pb-2">Subscribe to Updates</h3>
              <h2 className="text-6xl font-semibold">Stay Connected</h2>
              <div className="block-description mt-4">
                <p className="text-xl w-[50rem]">If you like what we’re doing and want to stay up to date as our program develops, let us know by opting into emails from us. We promise to not overwhelm your inbox or share your information with anyone.</p>
              </div>
            </div>
            <div className="mt-6">
              <a href="/contact/" className="btn bg-[#df4c7f] text-white py-4 px-14 rounded-md">
                Opt In
              </a>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#286fb4] text-white py-14">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <h2 className="text-4xl mb-2">Like What We're Doing? Please Consider a Financial Contribution.</h2>
                <a href="/#donate" className="bg-white text-[#286fb4] px-6 py-2 rounded font-semibold">DONATE NOW</a>
            </div>
        </div>
      </main>
    </>
  );
};

export default Home;







