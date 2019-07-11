import React, { Component } from 'react'

export default class Select extends Component {
	render() {
		return (
      <select class="ddProducts form">
        <option value="">Select a category</option>
        <option value="Farmer">DEMAND</option>
        <option value="Enterpriser">PIT</option>
        <option value="Companies">KPiR</option>
        <option value="Communities">ACT</option>
      </select>
		)
	}
}
