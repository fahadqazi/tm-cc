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

  styling(){
    this.props.add(this.props.card)
  }

  styleCase(style){
    switch(style){
      case 'anywhereCard': 
        return this.props.isShown.anywhereSelected;
        break;

      case 'studentCard':
        return this.props.isShown.studentSelected;
        break;
      
      case 'liquidCard':
        return this.props.isShown.liquidSelected;
        break;

    }
  }

  makeClassName(){
    let style1 = this.checkType(this.props.card.type);
    let stylish = this.props.isShown
    let newRes = this.styleCase(this.props.card.type)
    let style2 = newRes ? 'selected' : '';
    this.props.calculateTotal();
    return `${style1} ${style2}`;
  }

  render(){
    const showCard = this.props.isShown
   
    return (
      <div style={{height: 250}}>
        { showCard[this.props.card.type] ? 
          
          <div className={this.makeClassName()}
            onClick={this.styling.bind(this)}>
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