import React, { Component } from 'react'
import Footer from '../Layout/Footer/Footer';
import Menubar from '../Layout/MenuBar/Menubar';
import Midbar from '../Layout/Midbar/Midbar';
import Topbar from '../Layout/Topbar/Topbar';
import Main from '../Layout/Main/Main';
import HomeContent from '../HomeContent/HomeContent';
import Sorter from '../Utils/Sorter/Sorter';

export default class Home extends Component {
  	render() {
		return (
			<div>
				<header>
					<Topbar/>
					<Midbar/>
					<Menubar/>
				</header>
				<Sorter/>
				<Main/>
				<HomeContent/>
				<Footer/>
			</div>
		)
	}
}
