import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#E1EACD] text-[#2A004E] flex flex-col justify-start items-start px-6 py-8">
      <h1 className="text-4xl font-extrabold mb-6">About Us</h1>
      
      <p className="text-xl mb-6">At Elite Roadways, we offer a streamlined and secure bus booking experience designed to make your travel easier and more convenient. Here's what makes us stand out:</p>
      
      <ul className="list-disc text-lg space-y-4 max-w-full pl-8 mb-8">
        <li className="max-w-full"><strong>User-friendly Platform:</strong> Our easy-to-use website ensures that booking tickets is a breeze for travelers of all ages.</li>
        <li className="max-w-full"><strong>Seamless Ticket Reservations:</strong> Quickly reserve your bus tickets with just a few clicks, with options for every budget.</li>
        <li className="max-w-full"><strong>Secure Payments:</strong> Our payment system is fully secure, ensuring your transactions are always protected.</li>
        <li className="max-w-full"><strong>Reliable Service:</strong> Whether it's a short trip or a long journey, we guarantee punctual, comfortable, and safe rides.</li>
        <li className="max-w-full"><strong>Convenience at Your Fingertips:</strong> Book tickets anytime, anywhere, and enjoy the flexibility to modify or cancel your bookings as needed.</li>
      </ul>
      
      <p className="text-lg mb-6">Join us at <strong>Elite Roadways</strong> and travel smarter, knowing you're in safe hands every step of the way.</p>
      
      {/* Move back button slightly up */}
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

export default About;
