import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const FundraiserDetails = () => {
  const { id } = useParams(); // Get the fundraiser ID from the URL
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [fundraiser, setFundraiser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFundraiser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/fundraisers/${id}`);
        setFundraiser(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load fundraiser details');
        setLoading(false);
      }
    };

    fetchFundraiser();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  // Handle the click event for the "Donate Now" button
  const handleDonateClick = () => {
    navigate('/underconstruction'); // Navigate to the Under Construction page
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {fundraiser ? (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Fundraiser Caption */}
          <h1 className="text-4xl font-bold text-indigo-600 mb-6">{fundraiser.CAPTION}</h1>
          
          {/* Organizer and City */}
          <p className="text-gray-700 mb-2">
            <strong>Organizer:</strong> {fundraiser.ORGANIZER}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>City:</strong> {fundraiser.CITY}
          </p>
          
          {/* Category */}
          <p className="text-gray-700 mb-2">
            <strong>Category:</strong> {fundraiser.category_name}
          </p>
          
          {/* Funding Details */}
          <p className="text-gray-700 mb-2">
            <strong>Target Funding:</strong> ${fundraiser.TARGET_FUNDING}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Current Funding:</strong> ${fundraiser.CURRENT_FUNDING}
          </p>
          
          {/* Description */}
          <p className="text-gray-700 mb-6">
            <strong>Description:</strong> {fundraiser.DESCRIPTION || 'No description available'}
          </p>
          
          {/* Call to Action Button */}
          <div className="text-center">
            <button
              onClick={handleDonateClick}  // On click, navigate to Under Construction
              className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Donate Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-red-500">Fundraiser not found</div>
      )}
    </div>
  );
};

export default FundraiserDetails;
