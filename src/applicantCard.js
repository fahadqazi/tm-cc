import React from 'react';

const ApplicantCard = (props) => {
  return(
    <div style={{height: 200, width: 250, border:'2px solid goldenrod' }}>
      <h4>{`${props.data.title} ${props.data.firstName} ${props.data.lastName}`}</h4>
      <h5>{props.data.dob}</h5>
      <p><i>{`Income: £${props.data.income}`}</i></p>
      <p><i>{`Employment: ${props.data.employment}`}</i></p>
      <p>{`Address: ${props.data.houseNo}, ${props.data.postCode}`}</p>
    </div>
  );
}

export default ApplicantCard;


// title: 'Mr',
// firstName: 'Trevor',
// lastName: 'Rieck',
// dob: '07/09/1990',
// income: 15000,
// employment: 'Part Time',
// houseNo: 343,
// postCode: 'TS25 2NF'