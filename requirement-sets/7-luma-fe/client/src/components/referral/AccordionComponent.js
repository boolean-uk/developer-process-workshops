import React, { useState } from 'react';
import './accordion-component.css';

import AutoComplete from './AutoComplete.js';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

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
          <AutoComplete />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'tab-two'}
        onChange={handleChange('tab-two')}
      >
        <AccordionSummary id='tab-two' aria-controls='panel-content'>
          <Typography>Tab Two</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AutoComplete />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'tab-three'}
        onChange={handleChange('tab-three')}
      >
        <AccordionSummary id='tab-three' aria-controls='panel-content'>
          <Typography>Tab Three</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AutoComplete />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'tab-four'}
        onChange={handleChange('tab-four')}
      >
        <AccordionSummary id='tab-four' aria-controls='panel-content'>
          <Typography>Tab Four</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AutoComplete />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'tab-five'}
        onChange={handleChange('tab-five')}
      >
        <AccordionSummary id='tab-five' aria-controls='panel-content'>
          <Typography>Tab Five</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AutoComplete />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
