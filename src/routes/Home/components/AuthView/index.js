import React from 'react'
import LoginView from './LoginView'
import SignUpView from './SignUpView'

class AuthView extends React.Component {
  constructor () {
    super()

    this.state = {
      currentView: 1
    }
  }

  changeView (newView) {
    this.setState({
      currentView:newView
    })
  }

  render () {
    const view = this.state.currentView === 1
    ? <LoginView onChangeView={this.changeView.bind(this)} />
    : <SignUpView onChangeView={this.changeView.bind(this)} />

    return view
  }
}

export default AuthView
