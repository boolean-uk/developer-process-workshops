import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import {
  AccountCircle as FirstNameIcon,
  CalendarToday as DateOfBirthIcon,
  Phone as PhoneIcon,
  InsertEmoticon as LastNameIcon,
  Language as ContactLanguageIcon,
  Email as EmailIcon,
} from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//   form: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     fontFamily: 'Montserrat, sans-serif',
//     fontWeight: 400,
//     color: 'var(--primary-font)',
//   },
//   leftColumn: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '48%',
//   },
//   rightColumn: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '48%',
//   },
//   inputField: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: theme.spacing(2),
//   },
//   inputLabel: {
//     display: 'flex',
//     alignItems: 'center',
//     color: 'var(--secondary-font)',
//     marginBottom: theme.spacing(2),
//   },
//   inputIcon: {
//     marginRight: theme.spacing(1),
//     color: 'var(--icons)',
//   },
//   dateInput: {
//     marginRight: theme.spacing(1),
//     color: 'var(--secondary-font)',
//   },
// }));
const useStyles = makeStyles((theme) => ({
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr  1fr',
    gridTemplateRows: 'repeat(7)',
    gridTemplateAreas: `
    "firstname lastname"
    "dob language"
    "phone email"
    "address address"
    "notes notes"
    "submit submit"
    `,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    color: 'var(--primary-font)',
    width: '600px',
    height: '340px',
    margin: '-18px',
  },
  firstname: {
    display: 'grid',
    gridArea: 'firstname',
    marginBottom: theme.spacing(2),
  },
  dob: {
    display: 'grid',
    gridArea: 'dob',
    marginBottom: theme.spacing(2),
  },
  phone: {
    display: 'grid',
    gridArea: 'contacts',
    marginBottom: theme.spacing(2),
    width: '90%',
  },
  address: {
    display: 'grid',
    gridArea: 'address',
    width: '200% ',
    marginBottom: theme.spacing(2),
  },
  notes: {
    display: 'grid',
    gridArea: 'notes',
    width: '200% ',
    marginBottom: theme.spacing(2),
  },
  lastname: {
    display: 'grid',
    gridArea: 'lastname',
    marginBottom: theme.spacing(2),
    width: '90%',
  },
  language: {
    display: 'grid',
    gridArea: 'language',
    marginBottom: theme.spacing(2),
    width: '90%',
  },

  email: {
    display: 'grid',
    gridArea: 'email',
    marginBottom: theme.spacing(2),
    width: '90%',
  },

  submit: {
    display: 'grid',
    gridArea: 'submit',
    marginTop: '80px',
    borderRadius: '110%',
    marginBottom: theme.spacing(2),
  },
  inputLabel: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--secondary-font)',
    marginBottom: theme.spacing(2),
  },
  inputIcon: {
    marginRight: theme.spacing(1),
    color: 'var(--icons)',
  },
  dateInput: {
    marginRight: theme.spacing(1),
    color: 'var(--secondary-font)',
  },
  leftColumn: {
    paddingRight: '24px',
  },
  rightColumn: {
    paddingLeft: '24px',
  },
}));

const FormInput = () => {
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const [contactData, setContactData] = useState([]);

  const [contactDataToRender, setContactDataToRender] = useState([]);

  const initialValues = {
    Patient: {
      firstname: '',
      lastname: '',
      dateOfBirth: '',
      email: '',
      // dateOfBirth: {
      //   year: '',
      //   month: '',
      //   day: '',
      // },
      address1: '', // line 1. eg. 123 fake street
      // address2: '', // line 2. eg. suite 500
      // city: '',
      // state: '',
      // zipcode: '',
      // country: '',
      language: '',
      contacts: [
        {
          active: true,
          type: '', // eg. email, sms, voice, fax
          value: '',
        },
      ],
    },
    Referral: {
      patient: '',
      notes: '',
    },
  };

  const handleCustomOnFocus = () => {
    setIsFocused(true);
  };

  const handleCustomOnBlur = () => {
    setIsBlur(false);
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/contacts`)
  //     .then(function (response) {
  //       setContactDataToRender(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  // const postToDb = () => {
  //   axios
  //     .post(`http://localhost:8000/contacts`, contactData)
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setValues }) => {
        setContactData([...contactData, values]);
        console.log(contactData);
        setValues({ ...initialValues });
        setIsFocused(false);
        setIsBlur(false);
        // postToDb();
      }}
    >
      {({ handleChange, values, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.rightColumn}>
            <FormControl className={classes.firstname}>
              <InputLabel className={classes.inputLabel}>
                <FirstNameIcon className={classes.inputIcon} />
                First Name
                <span style={{ color: 'var( --asterisk)', marginLeft: '4px' }}>
                  *
                </span>
              </InputLabel>
              <Field
                as={Input}
                name='Patient.firstname'
                onChange={handleChange}
                value={values.Patient.firstname}
              />
            </FormControl>
            <FormControl className={classes.dob}>
              <InputLabel className={classes.inputLabel}>
                <DateOfBirthIcon className={classes.inputIcon} />
                Date of Birth
                <span style={{ color: 'var( --asterisk)', marginLeft: '4px' }}>
                  *
                </span>
              </InputLabel>
              <Field
                as={Input}
                type='date'
                name='Patient.dateOfBirth'
                onChange={handleChange}
                value={values.Patient.dateOfBirth}
                onFocus={handleCustomOnFocus}
                onBlur={handleCustomOnBlur}
                style={{
                  color:
                    !isFocused && !isBlur
                      ? 'var(--transparent)'
                      : 'var(----secondary-font)',
                  marginLeft: '4px',
                }}
              />
            </FormControl>

            <FormControl className={classes.phone}>
              <InputLabel className={classes.inputLabel}>
                <PhoneIcon className={classes.inputIcon} />
                Phone
                <span style={{ color: 'var( --asterisk)', marginLeft: '4px' }}>
                  *
                </span>
              </InputLabel>
              <Field
                as={Input}
                name='Patient.contacts[0].value'
                onChange={handleChange}
                value={values.Patient.contacts[0].value}
              />
            </FormControl>
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
              />
            </FormControl>
            <FormControl className={classes.notes}>
              <InputLabel className={classes.inputLabel}>
                Notes/Reason
              </InputLabel>
              <Field
                as={Input}
                name='Referral.notes'
                onChange={handleChange}
                value={values.Referral.notes}
              />
            </FormControl>
          </div>
          <div className={classes.rightColumn}>
            <FormControl className={classes.lastname}>
              <InputLabel className={classes.inputLabel}>
                <FirstNameIcon className={classes.inputIcon} />
                Last Name
                <span style={{ color: 'var( --asterisk)', marginLeft: '4px' }}>
                  *
                </span>
              </InputLabel>
              <Field
                as={Input}
                name='Patient.lastname'
                onChange={handleChange}
                value={values.Patient.lastname}
              />
            </FormControl>
            <FormControl className={classes.language}>
              <InputLabel className={classes.inputLabel}>
                <ContactLanguageIcon className={classes.inputIcon} />
                Contact Language
              </InputLabel>
              <Field
                as={Input}
                name='Patient.language'
                onChange={handleChange}
                value={values.Patient.language}
              />
            </FormControl>
            <FormControl className={classes.email}>
              <InputLabel className={classes.inputLabel}>
                <EmailIcon className={classes.inputIcon} />
                Email
              </InputLabel>
              <Field
                as={Input}
                name='Patient.email'
                onChange={handleChange}
                value={values.Patient.email}
              />
            </FormControl>
          </div>
          <div className={classes.submit}>
            <Button type='submit' variant='contained' color='primary'>
              Submited
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormInput;
