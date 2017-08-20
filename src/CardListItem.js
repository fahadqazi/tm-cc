import React from 'react';

class CardListItem extends React.Component{

  cardType(type){
    switch(type){
      case 'studentCard':
        return 'creditCard1';
      case 'anywhereCard':
        return 'creditCard2';
      case 'liquidCard':
        return 'creditCard3';
      default:
        break;
    }
  }

  handleClick(){
    this.props.setSelected(this.props.card)
  }

  isSelected(style){
    switch(style){
      case 'anywhereCard': 
        return this.props.isShown.anywhereSelected;
      case 'studentCard':
        return this.props.isShown.studentSelected;
      case 'liquidCard':
        return this.props.isShown.liquidSelected;
      default:
        break;
    }
  }

  getClassNames(){
    let style1 = this.cardType(this.props.card.type);
    let style2 = this.isSelected(this.props.card.type) ? 'selected' : '';
    return `${style1} ${style2}`;
  }

  render(){
    const showCard = this.props.isShown
   
    return (
      <div className='cardListContainer'>
        { showCard[this.props.card.type] ? 
          
          <div className={this.getClassNames()}
            onClick={this.handleClick.bind(this)}>
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