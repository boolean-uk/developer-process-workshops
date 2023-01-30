import React, { useState } from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { Field } from 'formik';

import uuid4 from 'uuid4';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';

const LocationSearchInput = ({ classes, values, item }) => {
  const [address, setAddress] = useState('');

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    setAddress(result[0].formatted_address);
  };

  const handleChange = (address) => {
    setAddress(address);
  };

  values.Patient.address1 = address;

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <FormControl className={classes.address}>
            <InputLabel className={classes.inputLabel}>
              Address
              <span style={{ color: 'var( --asterisk)', marginLeft: '4px' }}>
                *
              </span>
            </InputLabel>

            {item.Patient?.address1 ? (
              <Field
                as={Input}
                name='Patient.address1'
                value={item.Patient?.address1}
              />
            ) : (
              <Field
                as={Input}
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
            )}
          </FormControl>

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
