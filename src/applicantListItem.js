import React from 'react';

class ApplicantCard extends React.Component{

  constructor(props) {
    super(props);
    this.calculator= this.calculator.bind(this);
  }

  calculator(){
    this.props.checkCardEligibility(this.props.data)
  }

  render(){
    return(
      <div className='cardListItem'
      onClick={this.calculator}
      >
        <div className='nameBorder'>
        <p className='cardName'>{`${this.props.data.firstName} ${this.props.data.lastName}`}</p>
        </div>
        <div className='details'>
        <span className='textSize'>{this.props.data.dob}</span><br/>
        <span className='textSize'><span className='color'>Income: </span>{`£ ${this.props.data.income}`}</span><br/>
        <span className='textSize'><span className='color'>Employment: </span>{this.props.data.employment}</span><br/>
        <span className='textSize'><span className='color'>Address: </span>{this.props.data.houseNo}, {this.props.data.postCode}</span><br/>
        </div>
      </div>
    );
  }
}

export default ApplicantCard;