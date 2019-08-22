import React, { Component } from 'react'
import Select from '../../Utils/Select/Select'
import './Menubar.scss';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
								<Select defaultText="Select last revenue" options={[{value:"little",text:"200k pln"},{value:"medium",text:"400k pln"},{value:"much",text:"800k pln"},{value:"big",text:"above 1mln pln"}]}/>
								<Select defaultText="Select current revenue" options={[{value:"little",text:"200k pln"},{value:"medium",text:"400k pln"},{value:"much",text:"800k pln"},{value:"big",text:"above 1mln pln"}]}/>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

