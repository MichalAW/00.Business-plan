import React, { Component } from 'react'
import Footer from '../Layout/Footer/Footer';
import Menubar from '../Layout/MenuBar/Menubar';
import Midbar from '../Layout/Midbar/Midbar';
import Topbar from '../Layout/Topbar/Topbar';

export default class Home extends Component {
  render() {
	return (
	<div>
		<header>
			<Topbar/>
      <Midbar/>
      <Menubar/>
    </header>
    <Footer/>
	</div>
    )
  }
}
