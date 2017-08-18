import React from 'react';
import ApplicantCardItem from './applicantCardItem'

class ApplicantCardList extends React.Component{

  mapper() {
    return this.props.data.map(item => {
      return (<ApplicantCardItem 
                data={item}
                key={item.houseNo}
                calculateCards={this.props.calculateCards}
            />)
    })
  }
  render(){
    return(
      <div style={{display: 'flex', flexDirection:'row'}}>
        {this.mapper()}
      </div>
      
    );
  }
}

export default ApplicantCardList;