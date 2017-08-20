import React from 'react';
import CardListItem from './CardListItem';

class CardList extends React.Component{

  mapper() {
    return this.props.cards.map(item => {
      return (<CardListItem 
                key={item.type}
                card={item}
                isShown={this.props.isShown}
                add={this.props.add}
                selected={this.props.selected}
                calculateTotal={this.props.calculateTotal}
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

export default CardList;