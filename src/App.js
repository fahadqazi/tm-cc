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
			total: 0
		}
	}

	showStudent(data){
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
			studentCard: this.showStudent(data),
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
		}
	}

	calculateTotal(){
		// let total = 0;
		// let anywhere = this.state.anywhereSelected;
		let anywhere = this.state.anywhereSelected ? cards.filter(item => item.type === 'anywhereCard')[0].creditAvailable : 0;
		// console.log(anywhere1);
		// let student = this.state.studentSelected;
		let student = this.state.studentSelected ? cards.filter(item => item.type === 'studentCard')[0].creditAvailable : 0;
		// console.log(student1);
		// let liquid = this.state.liquidSelected;
		let liquid = this.state.liquidSelected ? cards.filter(item => item.type === 'liquidCard')[0].creditAvailable : 0;
		// console.log(liquid1);
		let total = anywhere + liquid + student;
		console.log(total);
		return total;
		this.setState({
			total: total
		})
		// console.log(anywhere1,liquid1, student1);
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
      </div>
    );
  }
}

export default App;
