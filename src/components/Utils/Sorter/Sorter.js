import React, { Component } from 'react';

import './Sorter.scss';

export default class Sorter extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this)
	};

	handleChange(event) {
		this.props.onChangeSort(event.target.value);
	};

	render() {

		return (
			<section className="Sorter">
				<select id="rating-filter" onChange={this.handleChange}>
					<option value="sort">Sort</option>
					<option value="lowest">Lowest price</option>
					<option value="highest">Highest price</option>
					<option value="a-z">A-Z</option>
					<option value="z-a">Z-A</option>
				</select>
			</section>
		);
	};
};
