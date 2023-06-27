# Luma Front End Engineering Interview

## Interview Task

Build the Patient Referral Form using this [design spec](https://www.figma.com/file/XIHFNbIXykq8KosWEIryhoRJ/Patient-Referral-Form-interview?node-id=0%3A1).

There is no need to build any backend (api layer, server, database). For simulating form submission, you can do a POST to /api/referrals


## Duration

Up to 8 hours. We do not expect you to complete the assessment in this time.

## Submission
1.  Fork this repo
2.  Build Patient Referral Form. Suggested libraries
    -  Material UI components - [https://material-ui.com/](https://material-ui.com/)
    -  Address lookup - [https://www.npmjs.com/package/react-places-autocomplete](https://www.npmjs.com/package/react-places-autocomplete)
4.  Submit a Pull Request (PR)
5.  In the PR, include a README that includes the following:
    -  If you made any assumptions, what are they
    - Outline what else needs to be done if given more time


### Example Data

```
Patient: {
    firstname: string,
    lastname: string,
    dateOfBirth: {
        year: number,
        month: number,
        day: number,
    },
    address1: string, // line 1. eg. 123 fake street
    address2: string, // line 2. eg. suite 500
    city: string,
    state: string,
    zipcode: string,
    country: string,
    language: string,
    contacts: [{
        active: bool,
        type: string, // eg. email, sms, voice, fax
        value: string
    }]
}

Referral: {
    patient: id,
    notes: string,
}
```

Taken from https://github.com/lumahealthhq/front-end-interview

## IMPORTANT NOTE
- The tech test's repo is old and has not been maintained, so you may face dependency issues.
- One known issue is that on trying to run the React app (after running `npm start`), it will display the error message `error:0308010C:digital envelope routines::unsupported` and the app will not be useable.
- This is a dependency issue between Node and Webpack. If you get this message, then your installed version of Node is too modern, so you will need to downgrade to v16.
- The Node v16 LTS version number is `16.20.1`.
- It has however been successfully resolved using `v16.14.0`.
