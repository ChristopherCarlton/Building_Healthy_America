import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="bg-white w-full">
      <main className="w-full py-10">
        <div className='py-24'></div>
        <section className="text-center mb-20 w-full">
          <h3 className="text-[#df4c7f] font-semibold text-2xl pb-2">Our Tenets</h3>
          <h1 className="text-6xl font-semibold text-[#286fb4]">We Believe</h1>
          <p className="text-gray-500 text-xl mt-10 w-full sm:w-[55%] mx-auto">
            What we develop is driven by those we serve. Families at the local level and their
            community services will provide guidance and the relevant direction needed for our
            programs...building on the strengths of their own local communities. This strategy will
            help ensure local support and sustainability as we build a framework that can be
            replicated in communities across the country.
          </p>
        </section>

        <section className="grid grid-cols-1 w-full lg:grid-cols-3 mb-20">
            <div className="bg-cover bg-center h-100 w-full" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/tenets-image-1600x1120.jpg)', height: '25rem', width: '100%' }}>
            </div>
            <div className="bg-blue-500 text-white px-24 py-12 w-full flex flex-col justify-center" style={{ height: '25rem' }}>
                <h3 className="text-2xl font-semibold mb-4">Nimble Framework</h3>
                <h2 className="text-4xl font-bold mb-2">Community Resource</h2>
                <p className="mt-4">
                We will be a central community resource for families and their unique needs in
                navigating local medical, educational, and human services agencies. We have developed
                a national framework designed to be simple, relevant, collaborative, and adaptable at
                the local level. That's not to say once built, it will remain static. We must be
                nimble enough to evaluate and improve based on the needs of the communities we serve
                no matter the age or the needs of the child and family.
                </p>
            </div>
            <div className="bg-[#df4c7f] text-white px-24 py-12 w-full flex flex-col justify-center" style={{ height: '25rem' }}>
                <h3 className="text-2xl font-semibold mb-4">Pass It On</h3>
                <h2 className="text-4xl font-bold mb-2">Family Strength</h2>
                <p className="mt-4">
                While our families face challenges based on chronic illness or the disability of a
                child, there is also an ability to celebrate and share strengths with each other.
                Community partners like the YMCA, Boys and Girls Clubs and other local organizations
                can aid in providing a welcoming environment – whether in person or virtually – to
                bring families together...allowing a comfortable and private forum to share
                strategies while providing mutual support.
                </p>
            </div>
        </section>

        <section className="text-center mb-14 w-full">
          <h3 className="text-[#df4c7f] text-xl font-semibold">Knowledgeable Leadership</h3>
          <h2 className="text-4xl text-[#286fb4] font-semibold">Our Leadership and Board</h2>
          <p className="text-gray-500 text-lg mt-4 sm:w-[50%] mx-auto">
            Our Executive Board is made up of people with experience in healthcare and service to
            families and children with chronic illness and disability. But experience only goes so
            far. Most importantly, all are passionate about improving the lives of those we serve
            through their individual and family strengths, and community assets.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 w-3/4 mx-auto">
        <div className="card bg-white p-6 rounded-lg shadow-md">
            <a href="https://buildinghealthieramerica.org/board-member/amy-schneider/">
            <img
                src="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2023/11/Amy-Schneider-Headshot-600x600.jpg"
                alt="Amy Schneider"
                className="h-80 w-full object-cover rounded-t-lg"
            />
            </a>
            <div className="pt-4 text-center">
            <h3 className="text-xl font-bold text-[#286fb4]">Amy Schneider</h3>
            <h4 className="text-gray-500">Board Member</h4>
            <ul className="mt-2 flex justify-between px-4">
                <li>
                <a href="tel:+17153862128" className="text-[#df4c7f] flex items-center">
                    <FaPhoneAlt className="mr-2" /> 715-386-2128
                </a>
                </li>
                <li>
                <a href="mailto:www.stcroixtherapy.org" className="text-[#df4c7f] flex items-center">
                    <MdEmail className="mr-2" /> Send Email
                </a>
                </li>
            </ul>
            </div>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md">
            <a href="https://buildinghealthieramerica.org/board-member/chris-kost/">
            <img
                src="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2023/11/pic-board-600x600.jpg"
                alt="Chris Kost"
                className="h-80 w-full object-cover rounded-t-lg"
            />
            </a>
            <div className="pt-4 text-center">
            <h3 className="text-xl font-bold text-[#286fb4]">Chris Kost</h3>
            <h4 className="text-gray-500">Board Member</h4>
            <ul className="mt-2 flex justify-between px-4">
                <li>
                <a href="tel:+16512592125" className="text-[#df4c7f] flex items-center">
                    <FaPhoneAlt className="mr-2" /> 651-259-2125
                </a>
                </li>
                <li>
                <a href="mailto:Chris.Kost@ymcamn.org" className="text-[#df4c7f] flex items-center">
                    <MdEmail className="mr-2" /> Send Email
                </a>
                </li>
            </ul>
            </div>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md">
            <a href="https://buildinghealthieramerica.org/board-member/andy-nelson/">
            <img
                src="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/andy-nelson-bha-600x600.jpg"
                alt="Andy Nelson"
                className="h-80 w-full object-cover rounded-t-lg"
            />
            </a>
            <div className="pt-4 text-center">
            <h3 className="text-xl font-bold text-[#286fb4]">Andy Nelson</h3>
            <h4 className="text-gray-500">Board Member</h4>
            <ul className="mt-2 space-y-1 flex justify-center">
                <li>
                <a href="mailto:bha4families@gmail.com" className="text-[#df4c7f] flex items-center">
                    <MdEmail className="mr-2" /> Send Email
                </a>
                </li>
            </ul>
            </div>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md">
            <a href="https://buildinghealthieramerica.org/board-member/thomas-brinsko/">
            <img
                src="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/tom-brinsko-bha-600x600.jpg"
                alt="Thomas Brinsko"
                className="h-80 w-full object-cover rounded-t-lg"
            />
            </a>
            <div className="pt-4 text-center">
            <h3 className="text-xl font-bold text-[#286fb4]">Thomas Brinsko</h3>
            <h4 className="text-gray-500">Board Member</h4>
            <ul className="mt-2 space-y-1 flex justify-center">
                <li>
                <a href="mailto:bha4families@gmail.com" className="text-[#df4c7f] flex items-center">
                    <MdEmail className="mr-2" /> Send Email
                </a>
                </li>
            </ul>
            </div>
        </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-5 w-full">
            <div className="lg:col-span-3 bg-cover bg-center h-128 lg:h-auto w-full" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/11/bha-history-1600x1120.jpg)', height: '42rem' }}>
            </div>
            <div className="lg:col-span-2 bg-blue-500 text-white p-8 lg:p-12 flex items-center justify-center w-full" style={{ height: '42rem' }}>
                <div className="text-center">
                <h3 className="text-2xl ">From Past to the Present</h3>
                <h2 className="text-4xl font-bold mt-2">Our History</h2>
                <p className="mt-4">
                    Building Healthier America has a history of work to understand the challenges families
                    face when their child has a chronic disease or disability including work funded by the
                    Robert Wood Johnson Foundation. We also have worked with cities to reverse the obesity
                    trends faced by children, families and communities – many of whom wrestled with the
                    impact diabetes was having on their lives. Our guiding philosophy is building a
                    sustainable culture of healthy behavior requires engagement in not only the individual
                    behavior, but within our communities. Successful strides for community wide diabetes
                    efforts were made in Chicago, Washington DC, Los Angeles and the Pacific Northwest.
                    The models developed in these communities are transferable to today's expanded mission
                    of serving families with children managing chronic illness or disability.
                </p>
                </div>
            </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
            <div className="lg:col-span-2 bg-white text-gray-800 p-12 flex items-center justify-center w-full">
                <div className="text-center">
                <h3 className="text-2xl font-bold text-[#df4c7f]">Want to Get Involved?</h3>
                <h2 className="text-5xl font-bold mt-2 text-[#286fb4]">Join Our Advisory Groups</h2>
                <p className="mt-8 text-lg leading-relaxed">
                    Building Healthier America is actively seeking advisors to help guide us in
                    implementing our mission. We are looking for passionate people willing to contribute
                    their ideas, experience, intellect, and specific talents as we grow. Advisors can be
                    members of a family or someone managing chronic illness or disability, professionals
                    working in healthcare and/or social services, attorneys, teachers, accountants…anyone
                    that has a passion for improving the lives of our families. Your support through
                    funding, time and talent is needed as we build a healthier America.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    We hope you consider getting involved. The commitment is not overly time consuming,
                    but we promise you it will be rewarding. To learn more click on the button below.
                </p>
                <div className="mt-8">
                    <a
                    href="https://buildinghealthieramerica.org/contact/"
                    className="btn bg-[#df4c7f] text-white py-2 px-8 rounded-full hover:bg-pink-600"
                    >
                    Tell Me More
                    </a>
                </div>
                </div>
            </div>
            <div className="lg:col-span-3 h-full w-full">
                <div className="bg-cover bg-center h-full w-full" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/adisory-1600x1120.jpg)' }}>
                </div>
            </div>
        </section>
        <div className="w-full bg-[#286fb4] text-white py-20">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <h2 className="text-5xl mb-2">Interested in Helping with a Financial Contribution?</h2>
                <a href="/#donate" className="bg-white text-[#286fb4] px-6 py-2 rounded font-semibold">DONATE NOW</a>
            </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
