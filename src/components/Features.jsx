import React from 'react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#E1EACD] text-[#2A004E] flex flex-col justify-start items-start px-6 py-8">
      <h1 className="text-4xl font-extrabold mb-6">Our Features</h1>
      
      <p className="text-xl mb-6">Explore the key features of our seamless online bus ticket booking platform:</p>
      
      <ul className="list-disc text-lg space-y-4 max-w-full pl-8 mb-8">
        <li className="max-w-full"><strong>User-friendly platform:</strong> Our easy-to-use platform ensures a hassle-free booking experience.</li>
        <li className="max-w-full"><strong>Secure payment options:</strong> We offer a secure payment gateway for your peace of mind.</li>
        <li className="max-w-full"><strong>Updates on schedules and availability:</strong> Stay updated on bus schedules and ticket availability in real-time.</li>
        <li className="max-w-full"><strong>Wide network of destinations:</strong> Our platform offers a wide range of destinations to choose from.</li>
        <li className="max-w-full"><strong>Comfortable and luxury bus options:</strong> Choose from comfortable and luxury buses for your journey.</li>
        <li className="max-w-full"><strong>E-tickets for convenience:</strong> Receive your tickets digitally for easy access and quick boarding.</li>
        <li className="max-w-full"><strong>24/7 customer support:</strong> Our customer support team is available around the clock to assist you.</li>
      </ul>

      <div className="w-full flex justify-end mt-48">
        <button
          onClick={() => navigate(-1)} // Navigate back
          className="px-6 py-3 bg-[#8D77AB] text-white rounded-md hover:bg-[#2A004E] transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Features;
