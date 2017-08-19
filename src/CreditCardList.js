import React from 'react';
import CreditCardItem from './CreditCardItem';

class CreditCardList extends React.Component{

  mapper() {
    return this.props.cards.map(item => {
      return (<CreditCardItem 
                card={item}
                isShown={this.props.isShown}
                add={this.props.add}
            />)
    })
  }

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'row'}}>
          {this.mapper()}
      </div>
    );
  }
}

export default CreditCardList;