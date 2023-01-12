import React, { useState } from 'react';
import axios from 'axios';

function PlaceDetails() {
  let [placeId, setPlaceId] = useState('');
  const [placeData, setPlaceData] = useState({});

  placeId = 'GXvPAor1ifNfpF0U5PTG0w';
  placeId = 'ohGSnJtMIC5nPfYRi_HTAg';

  const fetchPlaceData = async (e) => {
    e.preventDefault();
    const apiUrl = `http://localhost:3000/place/${placeId}`;
    try {
      const response = await axios.get(apiUrl);

      setPlaceData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form>
        <label>Place ID:</label>
        <input
          type='text'
          value={placeId}
          onChange={(e) => setPlaceId(e.target.value)}
        />
        <button onClick={fetchPlaceData}>Fetch Place Data</button>
      </form>
      {placeData.name && (
        <div>
          <h2>{placeData.name}</h2>
          <p>Address: {placeData.address}</p>
          <p>Opening Hours: {placeData.openingHours.days.friday[0].start}</p>
        </div>
      )}
    </div>
  );
}

export default PlaceDetails;
