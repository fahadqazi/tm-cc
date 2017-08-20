import React from 'react';
import CardListItem from './CardListItem';

class CardList extends React.Component{

  cardList() {
    return this.props.cards.map(item => {
      return (<CardListItem 
                key={item.type}
                card={item}
                isShown={this.props.isShown}
                setSelected={this.props.setSelected}
                selected={this.props.selected}
                calculateTotal={this.props.calculateTotal}
            />);
    })
  }

  render(){
    return(
      <div className='cardList'>
          {this.cardList()}
      </div>
    );
  }
}

export default CardList;