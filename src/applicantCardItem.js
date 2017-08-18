import React from 'react';

let styles;

class ApplicantCard extends React.Component{

  constructor(props) {
    super(props);
    this.calculator= this.calculator.bind(this);
}

calculator(){
  this.props.calculateCards(this.props.data)
}

render(){
  console.log(this.props.calculateCards);
  return(
    <div style={styles.container}
    onClick={this.calculator}
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


styles = {
  container: {height: 200, width: 250, border:'2px solid darkGrey', margin: 10, padding: 10}
};