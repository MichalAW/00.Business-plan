import React, { Component } from 'react'
import Footer from '../Layout/Footer/Footer';
import Midbar from '../Layout/Midbar/Midbar';
import Topbar from '../Layout/Topbar/Topbar';
import Main from '../Layout/Main/Main';
import Sorter from '../Utils/Sorter/Sorter';

export default class Home extends Component {
  	render() {
		return (
			<div>
				<header>
					<Topbar/>
					<Midbar/>
				</header>
				<Sorter/>
				<Main/>
				<Footer/>
			</div>
		)
	}
}
