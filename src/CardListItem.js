import React from 'react';

class CardListItem extends React.Component{

  checkType(type){
    switch(type){
      case 'studentCard':
        return 'creditCard1';
        break;
    
      case 'anywhereCard':
        return 'creditCard2';
        break;

      case 'liquidCard':
      return 'creditCard3';
      break;
    }
  }

  render(){
    const showCard = this.props.isShown
   
    return (
      <div style={{height: 250}}>
        { showCard[this.props.card.type] ? 
          
          <div className={[this.checkType(this.props.card.type)]}
            onClick={this.props.add}
          >
          <div className="creditCardName">
            <h3>
              {this.props.card.title}
            </h3>
            <p>{`APR: ${this.props.card.apr}`}</p>
            <p>{`Balance Transfer: ${this.props.card.balanceTransfer}`}</p>
            <p>{`Offer duration: ${this.props.card.offerDuration}`}</p>
            <p>{`Credit Available: £${this.props.card.creditAvailable}`}</p>
          </div>
        </div>

          : null}
      </div>

    );
  }
}

export default CardListItem;