export const data = {
  Patient: {
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    dateOfBirth: {
      year: '',
      month: '',
      day: '',
    },
    address1: '', // line 1. eg. 123 fake street
    address2: '', // line 2. eg. suite 500
    city: '',
    state: '',
    zipcode: '',
    country: '',
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
