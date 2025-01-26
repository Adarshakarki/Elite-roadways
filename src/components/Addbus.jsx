import { useState } from 'react';
import axios from 'axios';

const AddBus = () => {
  const [formData, setFormData] = useState({
    busnum: '',
    noOfSeats: 0,
    date: '',
    origin: '',
    destination: '',
    departuretime: '',
    driver: '',
  });

  // Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/bus/addbus', formData);
      if (response.data.success) {
        alert('Bus added successfully!');
      } else {
        alert('Failed to add bus');
      }
    } catch (error) {
      console.error('Error adding bus:', error);
      alert('Error adding bus');
    }
  };

  return (
<div className="bg-gradient-to-b from-[#F9F6E6] to-[#BAD8B6] min-h-screen overflow-hidden px-4">
<div className="max-w-lg mx-auto p-6 bg-white bg-opacity-80 shadow-lg rounded-lg mt-6 mb-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#8D77AB]">Add New Bus</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="busnum" className="mb-2 font-semibold text-[#8D77AB]">Bus Number</label>
          <input
            type="text"
            id="busnum"
            name="busnum"
            value={formData.busnum}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D77AB]"
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="noOfSeats" className="mb-2 font-semibold text-[#8D77AB]">Number of Seats</label>
          <input
            type="number"
            id="noOfSeats"
            name="noOfSeats"
            value={formData.noOfSeats}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D77AB] "
            required
            min="1"
            max="100"
          />
        </div>
        
        
        <div className="flex flex-col">
          <label htmlFor="date" className="mb-2 font-semibold text-[#8D77AB]">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D77AB] accent-[#8D77AB]"
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="origin" className="mb-2 font-semibold text-[#8D77AB]">Origin</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D77AB]"
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="destination" className="mb-2 font-semibold text-[#8D77AB]">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D77AB]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="departuretime" className="mb-2 font-semibold text-[#8D77AB]">Departure Time</label>
          <input
            type="datetime-local"
            id="departuretime"
            name="departuretime"
            value={formData.departuretime}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D77AB]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="driver" className="mb-2 font-semibold text-[#8D77AB]">Driver</label>
          <input
            type="text"
            id="driver"
            name="driver"
            value={formData.driver}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D77AB]"
            required
          />
        </div>

        <button type="submit" className="w-full py-3 mt-4 bg-[#8D77AB] text-white font-semibold rounded-md hover:bg-[#2A004E] focus:outline-none focus:ring-2 focus:ring-blue-600">
          Add Bus
        </button>
      </form>
    </div>
</div>
  );
};

export default AddBus;