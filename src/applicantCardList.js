import React from 'react';
import ApplicantCardItem from './applicantCardItem'

class ApplicantCardList extends React.Component{
  mapper() {
    return this.props.data.map(item => {
      return (<ApplicantCardItem 
                data={item}
            />)
    })
  }
  render(){
    return(
      <div>
        {this.mapper()}
      </div>
      
    );
  }
}

export default ApplicantCardList;