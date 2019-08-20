import React, { Component } from 'react'
import Select from '../../Utils/Select/Select'
import './Menubar.scss';
export default class Menubar extends Component {
	render() {
		return (
			<div className="menu-bar">
				<div className="container">
					<div className="row align-items-center">
						<div className="col products-display">
							<form className="search-form">
								<Select defaultText="Select a category" options={[{value:"farmer",text:"Farmer"},{value:"Enterpriser",text:"Enterpriser"},{value:"Companies",text:"Companies"},{value:"Communities",text:"Communities"}]}/>
								<Select defaultText="Select a subject" options={[{value:"farmer",text:"DEMAND"},{value:"Enterpriser",text:"PIT"},{value:"Companies",text:"KPiR"},{value:"Communities",text:"ACT"}]}/>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

