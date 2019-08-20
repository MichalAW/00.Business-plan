import React, { Component } from 'react'
import './HomeContent.scss'
export default class HomeContent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstYear: "",
			secondYear: "",
			goal: ""
		}
		this.onClickFirstYear=this.onClickFirstYear.bind(this);
		this.onClickSecondYear = this.onClickSecondYear.bind(this);
		this.onClickInvestmentGoal = this.onClickInvestmentGoal.bind(this);
	}

	onClickFirstYear(index) {
		this.setState({firstYear: index});
	}

	onClickSecondYear(index) {
		this.setState({secondYear: index});
	}

	onClickInvestmentGoal(index) {
		this.setState({goal: index});
	}

	render() {
		return (
			<section className="Main">
				<h1>REVENUES 2018</h1>
				<div className="main-card">
					<div onClick={()=>this.onClickFirstYear(0)} className={"card" + (this.state.firstYear === 0 ? " active": "")}>Up to 500.000,00 PLN</div>
					<div onClick={()=>this.onClickFirstYear(1)} className={"card" + (this.state.firstYear === 1 ? " active": "")}>Up to 1.000.000,00 PLN</div>
					<div onClick={()=>this.onClickFirstYear(2)} className={"card" + (this.state.firstYear === 2 ? " active": "")}>Over 2.000.000,00 PLN</div>
				</div>
				<h1>REVENUES 2019</h1>
					<div className="main-card">
					<div onClick={()=>this.onClickSecondYear(0)} className={"card" + (this.state.secondYear === 0 ? " active": "")}>Up to 500.000,00 PLN</div>
					<div onClick={()=>this.onClickSecondYear(1)} className={"card" + (this.state.secondYear === 1 ? " active": "")}>Up to 1.000.000,00 PLN</div>
					<div onClick={()=>this.onClickSecondYear(2)} className={"card" + (this.state.secondYear === 2 ? " active": "")}>Over 2.000.000,00 PLN</div>
				</div>
				<h1>INVESTMENT GOAL</h1>
					<div className="main-card">
					<div onClick={()=>this.onClickInvestmentGoal(0)} className={"card" + (this.state.secondYear === 0 ? " active": "")}>Warehouse construction</div>
					<div onClick={()=>this.onClickInvestmentGoal(1)} className={"card" + (this.state.secondYear === 1 ? " active": "")}>Financial expenditures</div>
					<div onClick={()=>this.onClickInvestmentGoal(2)} className={"card" + (this.state.secondYear === 2 ? " active": "")}>Machine</div>
					<div onClick={()=>this.onClickInvestmentGoal(3)} className={"card" + (this.state.secondYear === 3 ? " active": "")}>Consolidation</div>
				</div>
			</section>
		)
	}
}
