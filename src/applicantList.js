import React from 'react';
import ApplicantListItem from './applicantListItem'

class ApplicantList extends React.Component{

  //Todo: better naming and clean up
  mapper() {
    return this.props.data.map(item => {
      return (<ApplicantListItem 
                data={item}
                key={item.houseNo}
                checkCardEligibility={this.props.checkCardEligibility}
            />)
    })
  }
  render(){
    return(
      <div className='cardList'>
        {this.mapper()}
      </div>
      
    );
  }
}

export default ApplicantList;