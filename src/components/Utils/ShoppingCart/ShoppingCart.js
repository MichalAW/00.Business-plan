// VARIABLES
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { register, poke, bazar } from 'bazar';


import ProductDetails from '../ProductDetails/ProductDetails';

import Build from '../../Layout/Main/Products/Build/Build';
import Furnishings from '../../Layout/Main/Products/Furnishings/Furnishings';
import Installation from '../../Layout/Main/Products/Installation/Installation';
import Machine from '../../Layout/Main/Products/Machine/Machine';

import house from '../../../images/house.jpg';
import werehouse from '../../../images/werehouse.jpg';
import hotel from '../../../images/hotel.jpg';
import cowshed from '../../../images/cowshed.jpg';
import car from '../../../images/car.jpg';
import tractor from '../../../images/tractor.jpg';
import factory from '../../../images/factory.jpg';
import forklift from '../../../images/forklift.jpg';
import gas from '../../../images/gas.jpg';
import electric from '../../../images/electric.jpg';
import security from '../../../images/security.jpg';
import satelite from '../../../images/satelite.jpg';
import forHouse from '../../../images/forHouse.jpg';
import forOffice from '../../../images/forOffice.jpg';
import forPublic from '../../../images/forPublic.jpg';
import forShop from '../../../images/forShop.jpg';

import './ShoppingCart.scss';
const products = [{
		id: 1,
		name: "House",
		price: 10.00,
		img: house,
		alt: house,
		previousPage: "/build",
	},
	{
		id: 2,
		name: "Werehouse",
		price: 20.00,
		img: werehouse,
		alt: werehouse,
		previousPage: "/build",
	},
	{
		id: 3,
		name: "Hotel",
		price: 40.00,
		img: hotel,
		alt: hotel,
		previousPage: "/build",
	},
	{
		id: 4,
		name: "Cowshed",
		price: 30.00,
		img: cowshed,
		alt: cowshed,
		previousPage: "/build",
	},
	{
		id: 5,
		name: "ForHouse",
		price: 10.00,
		img: forHouse,
		alt: forHouse,
		previousPage: "/furnishings",
	},
	{
		id: 6,
		name: "ForOffice",
		price: 30.00,
		img: forOffice,
		alt: forOffice,
		previousPage: "/furnishings",
	},
	{
		id: 7,
		name: "ForPublic",
		price: 40.00,
		img: forPublic,
		alt: forPublic,
		previousPage: "/furnishings",
	},
	{
		id: 8,
		name: "ForShop",
		price: 20.00,
		img: forShop,
		alt: forShop,
		previousPage: "/furnishings",
	},
	{
		id: 9,
		name: "Gas",
		price: 20.00,
		img: gas,
		alt: gas,
		previousPage: "/installation",
	},
	{
		id: 10,
		name: "Electric",
		price: 10.00,
		img: electric,
		alt: electric,
		previousPage: "/installation",
	},
	{
		id: 11,
		name: "Security",
		price: 40.00,
		img: security,
		alt: security,
		previousPage: "/installation",
	},
	{
		id: 12,
		name: "Satelite",
		price: 30.00,
		img: satelite,
		alt: satelite,
		previousPage: "/installation",
	},
	{
		id: 13,
		name: "Car",
		price: 10.00,
		img: car,
		alt: car,
		previousPage: "/machine",
	},
	{
		id: 14,
		name: "Tractor",
		price: 20.00,
		img: tractor,
		alt: tractor,
		previousPage: "/machine",
	},
	{
		id: 15,
		name: "Factory",
		price: 40.00,
		img: factory,
		alt: factory,
		previousPage: "/machine",
	},
	{
		id: 16,
		name: "Forklift",
		price: 30.00,
		img: forklift,
		alt: forklift,
		previousPage: "/machine",
	}
]

const colors = [
	{ name: "Yellow", hex: "#FDFF8D", text: "black", price: 615 },
	{ name: "Wine", hex: "#4D1310", text: "white", price: 258 },
	{ name: "Punch", hex: "#EF5678", text: "black", price: 493 },
	{ name: "Blue", hex: "#4342B6", text: "white", price: 807 },
	{ name: "Green", hex: "#3CAF49", text: "black", price: 105 },
	{ name: "Peach", hex: "#F99484", text: "black", price: 752 },
	{ name: "Olive", hex: "#95BE67", text: "black", price: 60 },
	{ name: "Rose", hex: "#DF3034", text: "white", price: 810 },
	{ name: "Mint", hex: "#97ECC2", text: "black", price: 739 },
	{ name: "Lilac", hex: "#B560CA", text: "white", price: 974 },
	{ name: "Oil", hex: "#0D0702", text: "white", price: 153 },
	{ name: "Teal", hex: "#4DA8AB", text: "white", price: 156 },
	{ name: "Slate", hex: "#757A86", text: "white", price: 244 },
	{ name: "Blush", hex: "#FEC4E4", text: "black", price: 981 },
	{ name: "Sky", hex: "#67C3D8", text: "white", price: 239 },
	{ name: "Wood", hex: "#413323", text: "white", price: 343 },
	{ name: "Iris", hex: "#9865C2", text: "white", price: 56 },
	{ name: "Smoke", hex: "#5A525E", text: "black", price: 902 },
	{ name: "Azure", hex: "#2920A2", text: "white", price: 433 },
	{ name: "Basil", hex: "#356132", text: "white", price: 743 }
];



const Item = props => {
	const { id, name, price, image, alt, hex, text } = props.color;

	const buy = () =>
		poke("App", {
			name,
			type: "increment"
		});

	return (
		<div className="brick">
			<div className="content">
				<div className="color" style={{ color: text }}>
					<div className="palette" style={{ background: hex }} />
					<h1>{name}</h1>
				</div>
				<div className="action">
					<p>$ {price}</p>
					<button className="buyButton" onClick={() => buy()}>
						Buy
					</button>
				</div>
			</div>
		</div>
	);
};

const Shop = props => {
	const items = () => {
		return props.colors.map((color, index) => {
		return <Item color={color} key={index} />;
		});
	};

	return <div className="wall">{items()}</div>;
};

const Cart = props => {
	let total = 0;
	const purchases = props.items.map((item, index) => {
		const { name, hex, price, quantity } = item;
		const currentImport = quantity * price;
		total += currentImport;
		return (
		<li key={index}>
			<span className="cartColor" style={{ background: hex }}>{name}</span>
			<span className="cartColorQty"> x{item.quantity}</span>
			<button onClick={() => poke("App", { name, type: "increment" })}>
			➕
			</button>
			<button onClick={() => poke("App", { name, type: "decrement" })}>
			➖
			</button>
			<span className="cartColorImport"> ${currentImport}</span>
			<button onClick={() => poke("App", { name, type: "remove" })}>🗑</button>
		</li>
		);
	});

	return (
		<div className="Cart">
		<ul>{purchases.length === 0 ? "empty (:" : purchases}</ul>
		<div className="cartTotal">$ {total}</div>
		</div>
	);
};

const Navbar = props => (
	<div className="navBar">
		<ul>
		<li onClick={() => props.changeView("shop")}>
			<span role="img" aria-label="shop">
			🏪{" "}
			</span>
			<span>Shop</span>
		</li>
		<li onClick={() => props.changeView("cart")}>
			<span role="img" aria-label="shop">
			🛒{" "}
			</span>
			<span>Cart </span>
			<span className="cartQuantity">{props.quantity}</span>
		</li>
		</ul>
	</div>
);
export default class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: colors.map(e => ({
				...e,
				quantity: 0
			}))
		};

		register({
			id: "App",
			sync: () => this.state,
			onPoke: arg => {
				const { name, type } = arg;
				console.log('poked', name);
				const { colors } = this.state;
				this.setState({
					colors: colors.map(e => {
						const { quantity } = e;
						return e.name === name
						? {
							...e,
							quantity: (() => {
								if (type === "increment") return quantity + 1;
								else if (type === "remove") return 0;
								return quantity - 1;
							})()
							}
						: e;
					})
				});
			}
		});

		this.changeView = this.changeView.bind(this);
	}

	changeView = where => this.setState({ view: where });

	render() {
		const { view = "shop", colors } = this.state;

		const quantity = colors.map(e => e.quantity).reduce((a, b) => a + b);

		const inCart = colors.filter(e => e.quantity > 0);

		return (
			<div className="App">
				<Navbar changeView={this.changeView} quantity={quantity} />
				{view === "shop" ? <Shop colors={colors} /> : <Cart items={inCart} />}
			</div>
		);
	}
}
