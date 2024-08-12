"use client"
import React, { useState } from 'react';
import { supabase } from '@/pages/api/supabaseClient';

const Enews = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const zipCode = formData.get('zipCode') as string;
    const email = formData.get('email') as string;

    try {
      // Check if the email already exists
      const { data: existingEmails, error: fetchError } = await supabase
        .from('Newsletter')
        .select('email')
        .eq('email', email);

      if (fetchError) {
        throw fetchError;
      }

      if (existingEmails && existingEmails.length > 0) {
        // Email already exists, so just show the subscribed message
        setIsSubmitted(true);
        setErrorMessage(null); // Clear any previous error messages
      } else {
        // Email doesn't exist, proceed to insert the new entry
        const { error } = await supabase
          .from('Newsletter')
          .insert([{ name, zipCode, email }]);

        if (error) {
          throw error;
        }

        setIsSubmitted(true);
        setErrorMessage(null); // Clear any previous error messages
      }
    } catch (error) {
      setErrorMessage('There was an issue subscribing. Please try again later.');
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div
      className="w-full h-auto relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(/images/BHAtogether.jpg)' }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      <div className="container mx-auto flex flex-col justify-center items-center text-center h-full relative z-20 px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[95rem]">
          <div className="text-white text-left">
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">SUBSCRIBE TO NEWSLETTER</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mt-4 sm:mt-8">
              Our bi-monthly newsletter is a collection of relevant news, localized resources, and a digest of conversations that have happened inside the Building Healthier America community.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full bg-secondary p-4 sm:p-8 rounded-md">
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder="Name"
                autoComplete="name"
                className="mt-1 p-2 sm:p-3 w-full text-base sm:text-lg bg-transparent text-white placeholder-gray-300 border-b-2 border-white focus:outline-none" 
              />
              <input 
                type="text" 
                id="zipCode"
                name="zipCode"
                placeholder="Zip Code"
                autoComplete="postal-code"
                className="mt-1 p-2 sm:p-3 w-full text-base sm:text-lg bg-transparent text-white placeholder-gray-300 border-b-2 border-white focus:outline-none" 
              />
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                className="mt-1 p-2 sm:p-3 w-full text-base sm:text-lg bg-transparent text-white placeholder-gray-300 border-b-2 border-white focus:outline-none" 
              />
              <p className="text-white text-sm sm:text-base">By entering your email address, you are confirming that you are 13+.</p>
              <button 
                type="submit" 
                className="w-full bg-white text-secondary py-3 sm:py-4 px-8 sm:px-14 rounded-md mt-4 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300"
              >
                SIGN UP
              </button>
            </form>
            {isSubmitted && (
              <div className="w-full bg-accent text-white p-4 rounded-md mt-4 text-center">
                Subscribed to newsletter
              </div>
            )}
            {errorMessage && (
              <div className="w-full bg-red-500 text-white p-4 rounded-md mt-4 text-center">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enews;
