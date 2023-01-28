import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
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
  accordionWrapper: {
    display: 'grid',
    placeItems: 'center',
    paddingBottom: '24px',
  },
}));

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [contactDataToRender, setContactDataToRender] = useState([]);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [count, setCount] = useState(0);

  const handleChange = (panel) => (event, isExpanded, index) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/contacts`)
      .then(function (response) {
        let uniqueArray = [];
        response.data.flat().filter((item) => {
          if (!uniqueArray.some((i) => i.id === item.id)) {
            uniqueArray.push(item);
          }
        });
        setContactDataToRender(uniqueArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [count]);

  return (
    <>
      {true &&
        contactDataToRender.map((item, index) => {
          return (
            <>
              <div className={classes.accordionWrapper}>
                <Accordion
                  expanded={expanded === `${index}`}
                  onChange={handleChange(`${index}`)}
                  className={classes.accordionTab}
                >
                  <AccordionSummary
                    id={`${index}`}
                    aria-controls='panel-content'
                    style={{ paddingLeft: '0px', padding: '0px' }}
                  >
                    <Typography className={classes.formTab}>
                      Tab {index + 1}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormInput item={item} setCount={setCount} />
                  </AccordionDetails>
                </Accordion>
              </div>
            </>
          );
        })}

      {showReferralForm && (
        <div className={classes.accordionWrapper}>
          <Accordion
            expanded={expanded === 'new-referral'}
            onChange={handleChange('new-referral')}
            className={classes.accordionTab}
          >
            <AccordionSummary
              id='new-referral'
              aria-controls='panel-content'
              style={{
                paddingLeft: '0px',
                padding: '0px',
              }}
            >
              <Typography className={classes.formTab}>New Referral</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormInput
                setCount={setCount}
                item={'new-referral'}
                setShowReferralForm={setShowReferralForm}
              />
            </AccordionDetails>
          </Accordion>
        </div>
      )}
      <Button
        variant='outlined'
        color='primary'
        onClick={() => {
          setShowReferralForm(true);
        }}
      >
        + ADD ANOTHER PATIENT
      </Button>
    </>
  );
};

export default AccordionComponent;
