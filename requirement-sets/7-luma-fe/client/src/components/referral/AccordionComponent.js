import React, { useState } from 'react';
import './accordion-component.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import FormInput from './FormInput';

const useStyles = makeStyles((theme) => ({
  formTab: {
    background: 'var(--tab-one)',
  },
  accordionTab: {
    background: 'blue',
    padding: '0px',
  },
}));

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div className='accordion-wrapper'>
      <Accordion
        expanded={expanded === 'tab-one'}
        onChange={handleChange('tab-one')}
        className={classes.accordionTab}
      >
        <AccordionSummary
          id='tab-one'
          aria-controls='panel-content'
          style={{ paddingLeft: '0px', padding: '0px' }}
        >
          <Typography className={classes.formTab}>Tab one</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormInput />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
