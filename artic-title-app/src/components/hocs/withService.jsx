import React from 'react'

const withService = (Component, serviceMethod) => {
  return class extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        articles: [],
        articlesCount: 0,
        hasFeatched: false
      }
    }

    componentDidMount () {
      serviceMethod()
        .then(data => {
          console.log(data)
          this.setState({ ...data, hasFeatched: true })
        })
    }

    render () {
      if (!this.state.hasFeatched) {
        return <div>Loading...</div>
      }

      return (
        <div>
          Feed works!
          <Component articles={this.state.articles} {...this.props} />
        </div>
      )
    }
  }
}

export default withService
