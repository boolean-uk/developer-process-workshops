import React, { useState } from 'react';
import './accordion-component.css';

import AutoComplete from './AutoComplete.js';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

import FormInput from './FormInput';

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='accordion-wrapper'>
      <Accordion
        expanded={expanded === 'tab-one'}
        onChange={handleChange('tab-one')}
      >
        <AccordionSummary id='tab-one' aria-controls='panel-content'>
          <Typography>Tab one</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormInput />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
