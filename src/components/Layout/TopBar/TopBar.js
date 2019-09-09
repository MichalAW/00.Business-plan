import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

import './Topbar.scss';

import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Topbar extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);

		this.state = {
			modal: false,
		};
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	};

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
										<li><div className="active" href="#">Home</div></li>
										<li><div>Faq</div></li>
										<li><div>About</div></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="welcome">
						<h3>Welcome to my site!</h3>
						<h1>Create your Business plan</h1>
						<div className="button-welcome">
							<button className="btn" isOpen={this.state.modal} onClick={this.toggle}>TELL ME MORE{this.props.buttonLabel}</button>
						</div>
					</div>
				</div>
				<div>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Welcome, here's couple details about this site</ModalHeader>
					<ModalBody>
						<ul>
							<li>You can switch between products by clickling : Build, Furnishings, Installation, Machine or dots on the panel</li>
							<li>You can see product details by clicking "QUICK VIEW" on the specific product</li>
							<li>You can add product to cart by clicking "ADD TO CARD"</li>
							<li>You can check your cart by cliking cart icon on right of the logo "WANTA"</li>
							<li>You want a discount? Here you go: "ZXCVBNM"</li>
						</ul>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggle}>Quit</Button>
					</ModalFooter>
					</Modal>
				</div>
			</section>
		)
	}
}
