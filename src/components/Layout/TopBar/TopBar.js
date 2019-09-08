import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
										<li><a className="active" href="#">Home</a></li>
										<li><a href="#">Faq</a></li>
										<li><a href="#">About</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="welcome">
						<h3>Welcome to my site!</h3>
						<h1>Create your Business plan</h1>
						<div className="button-welcome">
							<button className="btn" isOpen={this.state.modal} onClick={this.toggle}>TELL ME MORE</button>
						</div>
					</div>
				</div>
				<div>
					<Button color="danger" onClick={this.toggle}>Submit{this.props.buttonLabel}</Button>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Thank you for buy</ModalHeader>
					<ModalBody>
						Select "Buy" to finish your purchase
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.onClickBuy}>Buy</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>Quit</Button>
					</ModalFooter>
					</Modal>
				</div>
			</section>
		)
	}
}
