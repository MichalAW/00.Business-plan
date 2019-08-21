import React, { Component } from 'react'
import Footer from '../Layout/Footer/Footer';
import Menubar from '../Layout/MenuBar/Menubar';
import Midbar from '../Layout/Midbar/Midbar';
import Topbar from '../Layout/Topbar/Topbar';
import Products from '../Layout/Products/Products';
import HomeContent from '../HomeContent/HomeContent';
import '../../sass/Additionalcomponents/_header.scss';
import '../../sass/Additionalcomponents/_hover.scss';
import '../../sass/style.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
export default class Home extends Component {
  	render() {
		return (
			<div>
				<header>
					<Topbar/>
					<Midbar/>
					<Menubar/>
				</header>
				<Products/>
				<HomeContent/>
				<Footer/>
			</div>
		)
	}
}
