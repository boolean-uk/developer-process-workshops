import React from 'react';
import './referral-form.css';
import AccordionComponent from './AccordionComponent';

const ReferralForm = () => {
  return (
    <>
      <div className='form-wrapper'>
        <div className='form-heading'>
          <p>Patient Referral Form</p>
          <p>Hays Valley Health San Francisco</p>
        </div>
        <main className='form-main'>
          <p className='paragraph-one'>Referral Patients</p>
          <p className='paragraph-two'>
            You can add up to five patients at a time
          </p>
          <AccordionComponent />
        </main>
      </div>
    </>
  );
};

export default ReferralForm;
