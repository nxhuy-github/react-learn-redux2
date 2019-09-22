import React from 'react';
import './App.css';
import {userAction, productsAction, apiRequest} from './actions/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class App extends React.Component {
  constructor(){
    super()
    this.myfunction = this.myfunction.bind(this)
  }

  myfunction() {
    console.log("Clicked")
    this.props.action1()
  }

  componentDidMount() {
    // fetch API
    setTimeout(() => {
      this.props.action3()
    }, 1500)
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Hello World</h1><br/>
        {this.props.defaultProp}<br/>
        {this.props.user}<br/>
        <input onChange={(e) => {this.props.action1(e.target.value)}} />User Action: {this.props.user}
      </div>
    );
  }
}

const mapStateToProp = (state, props) => {
  console.log("Log from mapStateToProp: ", state, props)
  return {
    user: state.user,
    products: state.products,
    mergeProp: `${state.user}-${props.defaultProp}`
  }
}

const mapActionToProp = (dispatch, props) => {
  console.log("Log from mapActionToProp: ", props)
  return bindActionCreators({
    action1: userAction,
    action2: productsAction,
    action3: apiRequest
  }, dispatch)
}

export default connect(mapStateToProp, mapActionToProp)(App);
