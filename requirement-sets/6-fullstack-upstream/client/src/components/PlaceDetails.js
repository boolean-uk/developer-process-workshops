import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PlaceDetails() {
  const [validId, setValidId] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const [placeData, setPlaceData] = useState({});
  const [days, setDays] = useState([]);
  const [closedDay, setClosedDay] = useState('');

  const fetchPlaceData = async () => {
    console.log('FETCH');
    const apiUrl = `http://localhost:3001/place/${validId}`;
    try {
      const response = await axios.get(apiUrl);
      setPlaceData(response.data);
      setDays(Object.entries(response.data.openingHours.days));
      setClosedDay(response.data.closedDay);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (validId) fetchPlaceData();
  }, [validId]);

  const handleTextChange = (e) => {
    setValidId(e.target.value);
    setSelectedOption('');
  };

  const handleRadioChange = (e) => {
    if (e.target.value === 'Casa Ferlin') {
      setValidId('GXvPAor1ifNfpF0U5PTG0w');
    } else if (e.target.value === 'Le Cafe du Marche') {
      setValidId('ohGSnJtMIC5nPfYRi_HTAg');
    }
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <form>
        <label>Place ID:</label>
        <div>
          <input type='text' onChange={handleTextChange} />
          <input
            type='radio'
            value='Casa Ferlin'
            onChange={handleRadioChange}
            checked={selectedOption === 'Casa Ferlin'}
          />
          Casa Ferlin
          <input
            type='radio'
            value='Le Cafe du Marche'
            onChange={handleRadioChange}
            checked={selectedOption === 'Le Cafe du Marche'}
          />
          Le Cafe du Marche
        </div>
        <button onClick={fetchPlaceData}>Fetch Place Data</button>
      </form>
      {placeData && (
        <div>
          <h2>{placeData.name}</h2>
          <p>Address: {placeData.address}</p>
        </div>
      )}
      <h3>We are closed on: </h3>
      {closedDay && closedDay.map((day) => <p>{day}</p>)}
      {days && (
        <div>
          {days.map(([day, times]) => (
            <div key={day}>
              <h3>{day}</h3>
              {times.map((time, index) => (
                <div key={index}>
                  <p>Open: {time.start}</p>
                  <p>Close: {time.end}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlaceDetails;
