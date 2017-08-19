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

	constructor(props){
		super(props)
		this.state = {
			studentCard: null,
			anywhereCard: null,
			liquidCard: null
		}
	}

	showStudent(data){
		console.log('student: ', data.employment)
		return data.employment === 'Student'
	}

	anywhereCard(data){
		return true
	}

	liquidCard(data){
		console.log(data.income)
		return data.income > 16000
	}

	calculateCards = (data) => {
		console.log(data.firstName)
		this.setState({
			studentCard: this.showStudent(data),
			anywhereCard: this.anywhereCard(data),
			liquidCard: this.liquidCard(data)
		})
	}

  render() {
    return (
			<div className='app-container'>
				<div>
					<ApplicantCardList 
						data={applicants}
						calculateCards={this.calculateCards}
					/>
				</div>
				
				<div>
					{this.state.studentCard ? <h1>Studentss</h1>: null}
				</div>

				<div>
				{this.state.anywhereCard ? <h1>FREEEE</h1>: null}
			</div>

			<div>
			{this.state.liquidCard ? <h1>LIQUID</h1>: null}
		</div>

      </div>
    );
  }
}

export default App;
