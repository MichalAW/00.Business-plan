import React, { Component } from 'react'

export default class Select extends Component {
	render() {
		return (
			<div className="category">
				<i className="fas fa-list-ul"></i>
				<select className="ddProducts form">
					<option value="">{this.props.defaultText}</option>
					{
						this.props.options.map(option=>{
						return <option value={option.value}>{option.text}</option>
						})
					}
				</select>
			</div>
		)
	}
}


