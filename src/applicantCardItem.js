import React from 'react';

class ApplicantCard extends React.Component{

render(){
  return(
    <div style={{height: 200, width: 250, border:'2px solid darkGrey', margin: 10, padding: 10 }}
    >
      <h4>{`${this.props.data.title} ${this.props.data.firstName} ${this.props.data.lastName}`}</h4>
      <h5>{this.props.data.dob}</h5>
      <p><i>{`Income: £${this.props.data.income}`}</i></p>
      <p><i>{`Employment: ${this.props.data.employment}`}</i></p>
      <p>{`Address: ${this.props.data.houseNo}, ${this.props.data.postCode}`}</p>
    </div>
  );
}
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