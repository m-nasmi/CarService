import React, { useState } from 'react';
import axios from 'axios';



const Addcar = () => {
  const [name, setName] = useState('');
  const [car_type, setCar_type] = useState('');
  const [car_no, setCar_no] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [serviceType, setserviceType]=useState('');
  const [price, setPrice]=useState('');
 
  const url = 'http://localhost:8080/car/add';

  const serviceTypes = {
    "Full Service": 15000,
    "Oil change": 10000,
    "Tyre Change": 8000,
    "Body Wash": 2000,
  };


  const handleClick = async (e) => {
    e.preventDefault();
  

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }

    try {
      const response = await axios.post(
        url,
        {
          name,
          car_type,
          car_no,
          email,
          address,
          phone_number,
          serviceType,
          price
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Car added successfully:', response.data);

      // Optionally, reset the form fields after successful submission
      setName('');
      setCar_type('');
      setCar_no('');
      setEmail('');
      setAddress('');
      setPhone_number('');
      setserviceType('');
      setPrice('');

    } catch (error) {
      console.error('Error adding car:', error.message);

      if (error.response) {
        console.error('Server responded with:', error.response.data);
      }
    }
  };

  

  const handleServiceTypeChange = (selectedType) => {
    setserviceType(selectedType);
    setPrice(serviceTypes[selectedType] || 0);
  };

  return (
    
      <form onSubmit={handleClick} className="max-w-md p-6 mx-auto space-y-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            placeholder="Enter your name"
			value={name}
			onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label  className="block text-sm font-medium text-gray-700">Car Type</label>
          <input
            placeholder="Enter car type"
			value={car_type}
			onChange={(e) => setCar_type(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label  className="block text-sm font-medium text-gray-700">Car No.</label>
          <input
            placeholder="Enter car number"
			value={car_no}
			onChange={(e) => setCar_no(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label  className="block text-sm font-medium text-gray-700">Email</label>
          <input
            placeholder="Enter your email"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
      
<label className="block text-sm font-medium text-gray-700">
  Service Type
</label>
<div className="relative mb-4">
  <select
    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200"
    value={serviceType}
    onChange={(e) => handleServiceTypeChange(e.target.value)}
  >
    <option value="" disabled>
      Select Service Type
    </option>
    {Object.keys(serviceTypes).map((type) => (
      <option key={type} value={type}>
        {type}
      </option>
    ))}
  </select>
</div>

<label className="block text-sm font-medium text-gray-700">Price</label>
<div className="relative mb-4">
  <input
    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200"
    value={price}
    readOnly
  />
</div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            placeholder="Enter your phone number"
			value={phone_number}
			onChange={(e) => setPhone_number(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            placeholder="Enter your address"
			value={address}
			onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
        <button 
          className="w-full px-4 py-2 text-lg font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-700"
        >
          Submit
        </button>
      </form>
   
  );
  
};

export default Addcar;
