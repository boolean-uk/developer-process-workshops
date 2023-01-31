import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './accordionComponent.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import FormInput from './FormInput';

const useStyles = makeStyles((theme) => ({
  formTab: {
    background: 'var(--tab-one)',
    height: '150%',
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
  arrowHead: {
    transform: 'rotate(-90deg)',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: ' 60px 160px 270px 60px 20px',
    alignItems: 'center',
    justifyItems: 'left',
  },
  typography: {
    marginRight: 'auto',
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
        setContactDataToRender(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [count]);

  const onDelete = async (id) => {
    const objectToDeleteFrom = structuredClone(contactDataToRender);
    setContactDataToRender([
      ...objectToDeleteFrom.filter((el) => el.id !== id),
    ]);

    await deleteFromDb(id);
  };

  const deleteFromDb = async (id) => {
    await axios
      .delete(`http://localhost:8000/contacts/${id}`)
      .catch(function (error) {
        console.log(error);
      });

    setCount((previous) => previous + 1);
    setShowReferralForm(false);
  };

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
                    <div className={classes.container}>
                      <Typography className={`tab_${index}`}>
                        {index + 1}
                      </Typography>

                      <Typography>
                        {item.Patient.firstname} {item.Patient.lastname}
                      </Typography>

                      <div></div>
                      <IconButton
                        aria-label='delete'
                        onClick={() => onDelete(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <ChevronLeftIcon className={classes.arrowHead} />
                    </div>
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
                contactDataToRender={contactDataToRender}
              />
            </AccordionDetails>
          </Accordion>
        </div>
      )}

      {!showReferralForm && (
        <Button
          variant='outlined'
          color='primary'
          onClick={() => {
            setShowReferralForm(true);
          }}
        >
          + ADD ANOTHER PATIENT
        </Button>
      )}
    </>
  );
};

export default AccordionComponent;
