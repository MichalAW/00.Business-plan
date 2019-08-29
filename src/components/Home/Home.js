import React, { Component } from 'react'
import Footer from '../Layout/Footer/Footer';
import Midbar from '../Layout/Midbar/Midbar';
import Topbar from '../Layout/Topbar/Topbar';
import Main from '../Layout/Main/Main';
import Sorter from '../Utils/Sorter/Sorter';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.onClickAddProductToCart= this.onClickAddProductToCart.bind(this);
		this.midbarReference = React.createRef();
		this.mainReference = React.createRef();
		this.onChangeSort = this.onChangeSort.bind(this);
	}

	onClickAddProductToCart(product) {
		this.midbarReference.current.addProductToCart(product);
	}

	onChangeSort(sortName) {
		this.mainReference.current.onChangeSort(sortName);
	}

  	render() {
		return (
			<div>
				<header>
					<Topbar/>
					<Midbar ref={this.midbarReference}/>
				</header>
				<Sorter onChangeSort={this.onChangeSort}/>
				<Main ref={this.mainReference} onClickAddProductToCart={this.onClickAddProductToCart}/>
				<Footer/>
			</div>
		)
	}
}
