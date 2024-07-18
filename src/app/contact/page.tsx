"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPhoneVolume, FaMapMarkerAlt, FaRegClock, FaThumbsUp, FaFacebookF, FaGoogle, FaYelp, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bestTime: '',
    message: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;
      elements.forEach((element) => {
        const positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-wordpress-site.com/wp-admin/admin-ajax.php', {
        action: 'gravityforms_submit_form',
        form_id: 1,
        input_1: formData.name,
        input_2: formData.email,
        input_3: formData.phone,
        input_10: formData.bestTime,
        input_7: formData.message,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data && response.data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          bestTime: '',
          message: '',
        });
      } else {
        setError('There was an issue submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an issue submitting the form. Please try again.');
    }
  };

  return (
    <main className="text-center bg-white">
      <div className='py-24'></div>
      <div className="container mx-auto px-4 py-8 fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
        <h3 className="text-[#BA4A68] text-2xl mb-2">We Want to Hear from You!</h3>
        <h1 className="text-[#1D568B] text-5xl font-semibold mb-4">CONNECT</h1>
        <p className="text-gray-700 mb-8">
          Interested in learning more about Building Healthier America? Are you a member of a family managing a child with chronic illness or disability? Do you have ideas you’d like to share, or simply want to be involved? Let us know. We will respond to each and every message received!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-md shadow-md">
            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-left font-medium text-gray-700" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
                    placeholder="First & Last Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-left font-medium text-gray-700" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
                    placeholder="info@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-left font-medium text-gray-700" htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
                    placeholder="(555) 555-5555"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-left font-medium text-gray-700" htmlFor="bestTime">Best Time to Reach You</label>
                  <input
                    type="text"
                    id="bestTime"
                    className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
                    placeholder="Morning, Day, Evening and/or specific time"
                    value={formData.bestTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-left font-medium text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
                  rows={10}
                  placeholder="Enter basic project details, comments, questions, concerns or anything else we should know"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-[#BA4A68] text-white font-bold rounded hover:bg-[#ff6699] transition">SUBMIT</button>
              {submitSuccess && <p className="text-green-500 mt-4">Thank you! Your message has been submitted.</p>}
              {error && <p className="text-[#BA4A68] mt-4">{error}</p>}
            </form>
          </div>

          <div className="bg-[#1D568B] text-white p-8 rounded-md shadow-md space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <FaPhoneVolume className="text-3xl text-white" />
                <div>
                  <h3 className="text-lg font-bold">Contact Info</h3>
                  <p>Phone: <a href="tel:(512) 686-2525" className="text-white">(612) 750-6538</a></p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-3xl text-white" />
                <div>
                  <h3 className="text-lg font-bold">Location</h3>
                  <p>715 Countryview Cir<br />Hudson, WI 54016</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaRegClock className="text-3xl text-white" />
                <div>
                  <h3 className="text-lg font-bold">Office Hours</h3>
                  <p>Mon: 8am-6pm<br />
                    Tue, Wed, Thur: 8am-4pm<br />
                    Fri: 8am-1pm<br />
                    Sat & Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaThumbsUp className="text-3xl text-white" />
                <div>
                  <h3 className="text-lg font-bold">Follow Us</h3>
                  <div className="flex space-x-2">
                    <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-white"><FaFacebookF /></a>
                    <a href="https://www.google.com/maps/place/715+Countryview+Cir,+Hudson,+WI+54016/@44.9658153,-92.709131,17z/data=!3m1!4b1!4m6!3m5!1s0x87f7e1e2d906333b:0xd355b5c19cc9dee7!8m2!3d44.9658153!4d-92.709131!16s%2Fg%2F11cpjd3wrv?entry=ttu" aria-label="Google" target="_blank" rel="noopener noreferrer" className="text-white"><FaGoogle /></a>
                    <a href="https://www.yelp.com/" aria-label="Yelp" target="_blank" rel="noopener noreferrer" className="text-white"><FaYelp /></a>
                    <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white"><FaInstagram /></a>
                    <a href="https://www.pinterest.com/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer" className="text-white"><FaPinterest /></a>
                    <a href="https://www.youtube.com/" aria-label="Youtube" target="_blank" rel="noopener noreferrer" className="text-white"><FaYoutube /></a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.7425743656487!2d-92.709131!3d44.9658153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f7e1e2d906333b%3A0xd355b5c19cc9dee7!2s715%20Countryview%20Cir%2C%20Hudson%2C%20WI%2054016%2C%20USA!5e0!3m2!1sen!2sus!4v1688408970289!5m2!1sen!2sus" 
                width="100%" 
                height="250" 
                className="rounded-md shadow-md border-0" 
                allowFullScreen 
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[27rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-fixed md:bg-center bg-center sm:bg-[50%] md:bg-cover" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/contact-1600x1067.jpg)' }}></div>
      </div>

      <div className="w-full bg-[#1D568B] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-2 text-center lg:text-left">
            Consider Making a Tax Deductible Donation. Any Amount Helps!
          </h2>
          <a href="https://buy.stripe.com/cN216geI46bI0M0eUU" className="bg-white text-[#1D568B] px-4 py-2 rounded font-semibold mt-4 lg:mt-0">
            DONATE
          </a>
        </div>
      </div>
    </main>
  );
}; 

export default ContactPage;