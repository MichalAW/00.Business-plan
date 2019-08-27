/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import './PanelBar.scss';
import { NavLink } from "react-router-dom";
export const PanelBar = props => {
	return (
		<section className="section--panel_bar">
			<div className="container">
				<div className="panel-bar">
					<div className="row no-gutters align-items-end">
						<div className="col-auto heading">
							<h3>INVESTMENT GOAL</h3>
						</div>
						<div className="col menu">
							<nav>
								<ul>
									<li className="active accordion">
										<NavLink exact to="./Build" activeClassName="active">
											Build
										</NavLink>
									</li>
									<li className="accordion">
										<NavLink exact to="./Furnishings" activeClassName="active">
											Furnishings
										</NavLink>
									</li>
									<li className="accordion">
										<NavLink exact to="./Installation" activeClassName="active">
											Installation
										</NavLink>
									</li>
									<li className="accordion">
										<NavLink exact to="./Machine" activeClassName="active">
											Machine
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-auto dots">
							<ul>
								<li>
									<a src="#" className="active">
										<NavLink exact to="./Build" activeClassName="active">
										</NavLink>
									</a>
								</li>
								<li>
									<a src="#">
										<NavLink exact to="./Furnishings" activeClassName="active">
										</NavLink>
									</a>
								</li>
								<li>
									<a src="#">
										<NavLink exact to="./Installation" activeClassName="active">
										</NavLink>
									</a>
								</li>
								<li>
									<a src="#">
										<NavLink exact to="./Machine" activeClassName="active">
										</NavLink>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
