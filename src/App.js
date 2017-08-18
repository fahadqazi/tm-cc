import React, { Component } from 'react';

import './App.css';
import ApplicantCard from './applicantCard';
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


  render() {
    return (
      <div style={{width: '80%'}}>
        Hello
        <ApplicantCard 
          data={applicants[0]}
        />
      </div>
    );
  }
}

export default App;
