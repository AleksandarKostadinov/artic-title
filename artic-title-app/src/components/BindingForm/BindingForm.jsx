import React, { Component } from 'react'
import { removeEnd, kebapToCamel } from '../../utils/stringParser'


// function getInitialFormValue(children) {
//   const result = {}

//   mapRecursive(children, setPropertyIfInput)

//   return result

//   function setPropertyIfInput(child) {
//     if(child.type === 'input') {
//       result[child.props.name] = '' 
//     }

//     return child
//   }
// }

export default class BindingForm extends Component {
  constructor(props) {
    super(props)

    //this.state = {
    //  formValue: getInitialFormValue(this.props.children)
    //}
  }

  mapRecursive = (children, callback) => (
    React.Children.map(
      children,
      child => (
        child.props.children
          ? [callback(child), this.mapRecursive(child.props.children, callback)]
          : callback(child)
      ),
    )
  );

  setHandleChange = (child) => {
    if (child.type === 'input' || child.type === 'textarea') {
      return React.cloneElement(child, { onChange: this.handleChange, ...child.props })
    }
  
    return child
  }

  handleChange = ({ target }) => {
    const { value, id } = target
    const parsedId = kebapToCamel(removeEnd(id, this.props.idEnd))

    this.setState((prevState) => {
      return { formValue: Object.assign({}, {...prevState.formValue}, {[parsedId]: value }) }
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e, { ...this.state.formValue })}>
        {
          this.mapRecursive(this.props.children, this.setHandleChange)
        }
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
