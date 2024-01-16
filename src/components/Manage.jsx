import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';

const Manage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    process.env.REACT_APP_API_URL || 'http://localhost:8080/car/getAll';
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(await axios.delete(`http://localhost:8080/car/deleteCar/${id}`));
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const generatePDF = (car) => {
    const doc = new jsPDF();
    doc.text(`Car Details - ID: ${car.id}`, 20, 10);
    doc.text(`Car Number: ${car.car_no}`, 20, 20);
    doc.text(`Car Type: ${car.car_type}`, 20, 30);
    doc.text(`Owner: ${car.first_name} ${car.last_name}`, 20, 40);
    doc.text(`Service Type: ${car.serviceType}`, 20, 50);
    doc.text(`Phone Number: ${car.phone_number}`, 20, 60);
    doc.text(`Price: Rs. ${car.price}`, 20, 70);

    doc.save(`car_details_${car.id}.pdf`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Car Details</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        cars.map((car) => (
          <div key={car.id} className="mb-4 p-4 border rounded-md">
            <p>
              <strong>Id :</strong> {car.id}
            </p>
            <p>
              <strong>Name :</strong> {car.name}
            </p>
            <p>
              <strong>Address :</strong> {car.address}
            </p>
            <p>
              <strong>Car No :</strong> {car.car_no}
            </p>
            <p>
              <strong>Car Type :</strong> {car.car_type}
            </p>
            <p>
              <strong>Service Type :</strong> {car.serviceType}
            </p>
            <p>
              <strong className="text-red-500">Price :</strong> Rs: {car.price}
             
            </p>
            
            <div className="flex justify-between items-center mt-4">
              <div className="space-x-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(car.id);
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
              <button
                onClick={() => {
                  generatePDF(car);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Generate PDF
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Manage;
