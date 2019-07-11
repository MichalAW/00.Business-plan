import React, { Component } from 'react'

export default class Select extends Component {
	render() {
		return (
      <select class="ddProducts subject">
        <option value="">Select a category</option>
        <option value="Farmer">Farmer</option>
        <option value="Enterpriser">Enterpriser</option>
        <option value="Companies">Companies</option>
        <option value="Communities">Communities</option>
      </select>
		)
	}
}


