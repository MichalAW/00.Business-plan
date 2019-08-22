/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import './PanelBar.scss';

export default class Select extends Component {
	render() {
		return (
			<section className="section--panel_bar">
				<div className="container">
					<div className="panel-bar">
						<div className="row no-gutters align-items-end">
							<div className="col-auto heading">
								<h3>INVESTMENT GOAL</h3>
							</div>
							<div className="col menu">
								<ul>
									<li className="active accordion"><a src="#Build">Build</a></li>
									<li className="accordion"><a src="#Furnishings">Furnishings</a></li>
									<li className="accordion"><a src="#Machine">Installation</a></li>
									<li className="accordion"><a src="#Installation"></a>Machine</li>
								</ul>
							</div>
							<div className="col-auto dots">
								<ul>
									<li><a src="#" className="active"></a></li>
									<li><a src="#"></a></li>
									<li><a src="#"></a></li>
									<li><a src="#"></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
