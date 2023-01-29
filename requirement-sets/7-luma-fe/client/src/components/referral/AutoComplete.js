import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';

import uuid4 from 'uuid4';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';

const LocationSearchInput = ({ classes, values }) => {
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
          <FormControl className={classes.address}>
            <InputLabel className={classes.inputLabel}>
              Address
              <span style={{ color: 'var( --asterisk)', marginLeft: '4px' }}>
                *
              </span>
            </InputLabel>

            <Field
              as={Input}
              name='Patient.address1'
              onChange={handleChange}
              value={values.Patient.address1}
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
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
