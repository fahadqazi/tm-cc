import React from 'react';
import visa_img from './Visa_Logo.png';

class CreditCardItem extends React.Component{

  checkType(type){
    console.log(type)
    switch(type){
      case 'Student Life Card':
        return 'creditCard1';
        break;
    
      case 'Anywhere Card':
        return 'creditCard2';
        break;

      case 'Liquid Card':
      return 'creditCard3';
      break;
    }
  }

  render(){
    console.log('type: ',this.props.card.type);
    console.log(this.checkType(this.props.card.type))
    return(
      <div className={this.checkType(this.props.card.type)}>
        <h3>{this.props.card.type}</h3>
      </div>
    );
  }
}

export default CreditCardItem;