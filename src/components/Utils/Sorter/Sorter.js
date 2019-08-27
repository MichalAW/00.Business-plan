import React, { Component } from 'react'
import Build from '../../Layout/Main/Products/Build/Build';
import Furnishings from '../../Layout/Main/Products/Furnishings/Furnishings';
import Installation from '../../Layout/Main/Products/Installation/Installation';
import Machine from '../../Layout/Main/Products/Machine/Machine';
import './Sorter.scss';
export default class Sorter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "Sort"
		};
	}

	render() {

		// const { movies,value } = this.state;
		return (
			<section className="Sorter">
				<form onSubmit={this.handleSubmit}>
					<select id="rating-filter"  onChange={this.handleChange}>
						<option value="Sort">Sort</option>
						<option value="Low rating">Low rating</option>
						<option value="High rating">High rating</option>
						<option value="A-Z">A-Z</option>
						<option value="Z-A">Z-A</option>
					</select>
					<input type="submit" value="Filter" />
				</form>
			</section>
		);
	};
};

// class SorterTemplate extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		const { genre, rating, poster } = this.props.movie;
// 		return (
// 			<figure>
// 				<figcaption>
// 					<p>{genre.join(' ')}</p>
// 					<div className="rating">
// 						<i className="fa fa-heart" />
// 						<h4>{rating}</h4>
// 					</div>
// 				</figcaption>
// 			</figure>
// 		);
// 	}
// }
