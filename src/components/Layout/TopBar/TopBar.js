import React, { Component } from 'react';
import './Topbar.scss';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// var links = document.querySelectorAll('.topbar a');
// var sections = document.querySelectorAll('section');

// function toggleTopbar() {
// 	document.getElementById('topbar').classList.toggle('active');
// }

// // event for all links in topbar
// for (var i = 0; i < links.length; i++) {
// 	links[i].addEventListener('click', function () {

// 		// remove class active from all sections
// 		for (var i = 0; i < sections.length; i++) {
// 			sections[i].classList.remove('active');
// 		}
// 	});

// 	toggle.addEventListener("click", function () {
// 		toggleTopbar();
// 	});
// }


export default class Topbar extends Component {
	render() {
		return (
			<section className="about">
				<div className="background">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-xs-12">
								<div className="topbar" id="topbar">
									<div className="toggle-btn" id="toggle">
										<span></span>
										<span></span>
										<span></span>
									</div>
									<ul>
										<li><a className="active" href="#">Home</a></li>
										<li><a href="#">Faq</a></li>
										<li><a href="#">About</a></li>
										<li><a href="#">Contact</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="welcome">
						<h3>Welcome to my site!</h3>
						<h1>Create your Business plan</h1>
						<div className="button-welcome">
							<button className="btn">TELL ME MORE</button>
						</div>
					</div>
				</div>
      		</section>
		)
	}
}
