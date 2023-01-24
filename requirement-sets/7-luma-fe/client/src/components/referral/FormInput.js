import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import {
  AccountCircle as FirstNameIcon,
  CalendarToday as DateOfBirthIcon,
  Phone as PhoneIcon,
  LocationOn as AddressIcon,
  InsertEmoticon as LastNameIcon,
  Language as ContactLanguageIcon,
  Email as EmailIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    color: 'var(--primary-font)',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '48%',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '48%',
  },
  inputField: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  inputLabel: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--secondary-font)',
  },
  inputIcon: {
    marginRight: theme.spacing(1),
    color: 'var(--secondary-font)',
  },
  inputPlaceholder: {
    '&::placeholder': {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
      color: 'var(--secondary-font)',
    },
  },
}));

const FormInput = () => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <div className={classes.leftColumn}>
        <FormControl className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            <FirstNameIcon className={classes.inputIcon} />
            First Name
            <span style={{ color: 'var( --asterisk)', marginLeft: '4px' }}>
              *
            </span>
          </InputLabel>
          <Input
            placeholder='First Name'
            required
            inputProps={{ style: { placeholder: classes.placeholder } }}
          />
        </FormControl>
        <FormControl className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            <DateOfBirthIcon className={classes.inputIcon} />
            Date of Birth*
          </InputLabel>
          <Input placeholder='Date of Birth' required />
        </FormControl>
        <FormControl className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            <PhoneIcon className={classes.inputIcon} />
            Phone*
          </InputLabel>
          <Input placeholder='Phone' required />
        </FormControl>
        <FormControl className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            <AddressIcon className={classes.inputIcon} />
            Address*
          </InputLabel>
          {/* <AutoComplete /> */}
          <Input placeholder='Address' required />
        </FormControl>
        <FormControl className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            <DateOfBirthIcon className={classes.inputIcon} />
            Notes*
          </InputLabel>
          <Input placeholder='Notes/Reason' required />
        </FormControl>
      </div>
      <div className={classes.rightColumn}>
        <FormControl className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            <LastNameIcon className={classes.inputIcon} />
            Last Name*
          </InputLabel>
          <Input placeholder='Last Name' required />
        </FormControl>
        <FormControl className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            <ContactLanguageIcon className={classes.inputIcon} />
            Contact Language*
          </InputLabel>
          <Input placeholder='Contact Language' required />
        </FormControl>
        <FormControl className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            <EmailIcon className={classes.inputIcon} />
            Email*
          </InputLabel>
        </FormControl>
      </div>
    </form>
  );
};

export default FormInput;
