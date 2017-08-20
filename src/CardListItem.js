import React from 'react';

class CardListItem extends React.Component{

  //todo: rename 
  checkType(type){
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


  //todo: name? use? 
  styling(){
    this.props.add(this.props.card)
  }

  //todo: rename 
  styleCase(style){
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

  //rename
  makeClassName(){
    let style1 = this.checkType(this.props.card.type);
    let newRes = this.styleCase(this.props.card.type)
    let style2 = newRes ? 'selected' : '';
    this.props.calculateTotal();
    return `${style1} ${style2}`;
  }

  //todo: fix styling and function calls
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