import React from 'react';
import FlipCard from '../components/FlipCard';

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <FlipCard
        frontImage="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/programs-1600x1067.jpg"
        frontAlt="Avatar"
        name="John Doe"
        title="Architect & Engineer"
        description="We love that guy"
      />
    </div>
  );
};

export default HomePage;
