import React, { Component } from 'react';

import './App.css';
import ApplicantList from './applicantList'

import CardList from './CardList';


var cards = [
	{
		title: 'Student Life Card',
		apr: 18.9,
		balanceTransfer: 0,
		offerDuration: 6,
		creditAvailable: 1200,
		type: 'studentCard'
	},
	{
		title: 'Anywhere Card',
		apr: 33.9,
		balanceTransfer: 0,
		offerDuration: 0,
		creditAvailable: 300,
		type: 'anywhereCard'
	},
	{
		title: 'Liquid Card',
		apr: 33.9,
		balanceTransfer: 12,
		offerDuration: 6,
		creditAvailable: 3000,
		type: 'liquidCard'
	}
];

var applicants = [
	{
		title: 'Mr',
		firstName: 'OLLIE',
		lastName: 'MURPHEE',
		dob: '01/07/1970',
		income: 34000,
		employment: 'Full time',
		houseNo: 700,
		postCode: 'BS14 9PR'
	},
	{
		title: 'Miss',
		firstName: 'ELIZABETH',
		lastName: 'EDMUNDSON',
		dob: '29/06/1984',
		income: 17000,
		employment: 'Student',
		houseNo: 177,
		postCode: 'PH12 8UW'
	},
	{
		title: 'Mr',
		firstName: 'TREVOR',
		lastName: 'RIECK',
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
			liquidCard: null,
			studentSelected: false,
			anywhereSelected: false,
			liquidSelected: false,
		}
	}

	studentCard(data){
		return data.employment === 'Student'
	}

	anywhereCard(data){
		return true
	}

	liquidCard(data){
		return data.income > 16000
	}

	calculateCards = (data) => {
		this.setState({
			studentCard: this.studentCard(data),
			anywhereCard: this.anywhereCard(data),
			liquidCard: this.liquidCard(data),
		})
		this.resetCards();
	}

	resetCards(){
		this.setState({
			anywhereSelected: false,
			studentSelected: false,
			liquidSelected: false
		})
	}

	add(data){
		let type = data.type;
		switch(type){
			case 'anywhereCard':
				this.setState(() => {
					return {anywhereSelected: !this.state.anywhereSelected}
				});
				break;
			case 'studentCard': 
				this.setState(() => {
					return {studentSelected: !this.state.studentSelected}
				});
				break;
			case 'liquidCard':
				this.setState(() => {
					return {liquidSelected: !this.state.liquidSelected}
				});
				break;
			default:
				break;
		}
	}

	calculateTotal(){
		const anywhere = this.state.anywhereSelected ? cards.filter(item => item.type === 'anywhereCard')[0].creditAvailable : 0;
		const student = this.state.studentSelected ? cards.filter(item => item.type === 'studentCard')[0].creditAvailable : 0;
		const liquid = this.state.liquidSelected ? cards.filter(item => item.type === 'liquidCard')[0].creditAvailable : 0;
		return anywhere + liquid + student;
	}

  render() {
    return (
			<div className='app-container'>

					<ApplicantList 
						data={applicants}
						calculateCards={this.calculateCards}
					/>

				<hr/>
				
					<CardList 
						cards={cards}
						isShown={this.state}
						add={this.add.bind(this)}
						selected={this.state}
						calculateTotal={this.calculateTotal.bind(this)}
					/>

				<hr/>

				<div>
					<h3>{`Total Credit Available: ${this.calculateTotal()}`}</h3>
				</div>
				<hr/>
				<h3>Steps: </h3>
				<ol>
					<li>Click on a name card to see eligible cards</li>
					<li>Select/unselect credit cards by clicking on them, watch total credit value change</li>
					<li>Excuse the poor design &#9786;</li>
				</ol>
      </div>
    );
  }
}

export default App;
