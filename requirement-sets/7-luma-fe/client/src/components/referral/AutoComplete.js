import React, { useState } from 'react';
import uuid4 from 'uuid4';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';

const LocationSearchInput = () => {
  const [address, setAddress] = useState('');

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    console.log(result);
    setAddress(value);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
          />
          <div className='autocomplete-dropdown-container'>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  key={uuid4()}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
