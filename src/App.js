import React, { Component } from 'react';

import './App.css';
import ApplicantCardList from './applicantCardList'
// import cardData from './cards';

var cards = [
	{
		apr: 18.9,
		balanceTransfer: 0,
		offerDuration: 6,
		creditAvailable: 1200
	},
	{
		apr: 33.9,
		balanceTransfer: 0,
		offerDuration: 0,
		creditAvailable: 300
	},
	{
		apr: 33.9,
		balanceTransfer: 12,
		offerDuration: 6,
		creditAvailable: 3000
	}
];

var applicants = [
	{
		title: 'Mr',
		firstName: 'Ollie',
		lastName: 'Murphee',
		dob: '01/07/1970',
		income: 34000,
		employment: 'Full time',
		houseNo: 700,
		postCode: 'BS14 9PR'
	},
	{
		title: 'Miss',
		firstName: 'Elizabeth',
		lastName: 'Edmundson',
		dob: '29/06/1984',
		income: 17000,
		employment: 'Student',
		houseNo: 177,
		postCode: 'PH12 8UW'
	},
	{
		title: 'Mr',
		firstName: 'Trevor',
		lastName: 'Rieck',
		dob: '07/09/1990',
		income: 15000,
		employment: 'Part Time',
		houseNo: 343,
		postCode: 'TS25 2NF'
	}
]

class App extends Component {

	calculateCards = (data) => {
		console.log(data.firstName)
	}

  render() {
    return (
			<div style={{height: 800, width: 900, border:'2px solid goldenrod', margin: 'auto' }}>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<ApplicantCardList 
						data={applicants}
						calculateCards={this.calculateCards}
					/>
				</div>
      </div>
    );
  }
}

export default App;
