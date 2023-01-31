import React from 'react';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';
import './landing-page.css';

const LandingPage = () => {
  return (
    <>
      <div className='form-wrapper landing-page'>
        <div className='form-heading'>
          <p>Patient Referral Form</p>
          <p>Hays Valley Health San Francisco</p>
        </div>
      </div>

      <Link reloadDocument className='link-notes' to='/referral'>
        <span>
          <ArrowRight style={{ fontSize: '70px' }} /> Go to Referrals{' '}
          <ArrowRight style={{ fontSize: '70px' }} />
        </span>
      </Link>
      <div className='link-arrow'></div>
    </>
  );
};

export default LandingPage;
