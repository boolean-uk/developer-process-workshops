import React, { useState } from 'react';
import { useField } from 'formik';

const CustomDatePicker = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <input
        {...field}
        {...props}
        type='date'
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        style={{
          backgroundColor: isFocused ? 'var(--asterisk)' : 'yellow',
          marginLeft: '4px',
          color: 'var(--secondary-font)',
        }}
      />
    </>
  );
};

export default CustomDatePicker;
