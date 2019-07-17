import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <section className="Main">
        <div className="col-auto">
          <h1>REVENUES 2018</h1>
          <ul>
            <li><a href="#">Up to 500.000,00 PLN</a></li>
            <li><a href="#">Up to 1.000.000,00 PLN</a></li>
            <li><a href="#">Over 2.000.000,00 PLN</a></li>
          </ul>
        </div>
        <div className="col-auto">
          <h1>REVENUES 2019</h1>
          <ul>
            <li><a href="#">Up to 500.000,00 PLN</a></li>
            <li><a href="#">Up to 1.000.000,00 PLN</a></li>
            <li><a href="#">Over 2.000.000,00 PLN</a></li>
          </ul>
        </div>
        <div className="col-auto">
          <h1>INVESTMENT GOAL</h1>
          <ul>
            <li><a href="#">Warehouse construction</a></li>
            <li><a href="#">Financial expenditures</a></li>
            <li><a href="#">Machine</a></li>
            <li><a href="#">Consolidation</a></li>
          </ul>
        </div>
      </section>
    )
  }
}
