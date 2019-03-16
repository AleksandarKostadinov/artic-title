import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div>
        {/* <TestForm /> */}
        <h3>Wellcome to Artic Title. Feel free to wonder aroud our <Link to='/articles/all'> WORLD!</Link></h3>
      </div>
    )
  }
}
