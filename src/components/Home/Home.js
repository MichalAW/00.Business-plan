import React, { Component } from 'react'
import Footer from '../Layout/Footer/Footer';
import Midbar from '../Layout/MidBar/MidBar';
import Topbar from '../Layout/TopBar/TopBar';
import Main from '../Layout/Main/Main';
import Sorter from '../Utils/Sorter/Sorter';

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.onClickAddProductToCart= this.onClickAddProductToCart.bind(this)
		this.midbarReference = React.createRef()
		this.mainReference = React.createRef()
		this.onChangeSort = this.onChangeSort.bind(this)
		this.refreshProductCart = this.refreshProductCart.bind(this)
	};

	onClickAddProductToCart(product) {
		this.midbarReference.current.addProductToCart(product)
	};

	onChangeSort(sortName) {
		this.mainReference.current.onChangeSort(sortName)
	};

	refreshProductCart() {
		this.midbarReference.current.refreshProductCart()
	};

  	render() {

		return (
			<div>
				<header>
					<Topbar/>
					<Midbar ref={this.midbarReference}/>
				</header>
				<section className="contentContainer">
					<Sorter onChangeSort={this.onChangeSort}/>
					<Main ref={this.mainReference} onClickAddProductToCart={this.onClickAddProductToCart} refreshProductCart={this.refreshProductCart}/>
				</section>
				<Footer/>
			</div>
		)
	}
}
