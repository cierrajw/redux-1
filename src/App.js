import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createSelector } from 'reselect';
//connect components in our app to the 'store' using the following:
import { connect } from 'react-redux';
import { updateUser, apiRequest, showError } from './Actions/user-actions';
import { bindActionCreators } from 'redux';
import CitySearch from './Components/CitySearch'

class App extends Component {
  constructor(props){
    super(props);

  }

  onUpdateUser = (event) =>{

    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.props.onApiRequest();
    }, 1500)

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">City Search</h1>
        </header>


        <CitySearch />

      </div>


    );
  }
}

// const mapStateToProps = state =>({
//   products: state.products,
//   users: state.user
// })

// const mapStateToProps = (state, props) =>{
//   return{
//     products: state.products,
//     users: state.user,
//     userPlusProp: `${state.user} ${props.randoProp}`
//   }
// }

//first two arguments are functions that get passed the state
//last argument receives the results of the first two arguments

// SELECTOR:
// const mapStateToProps = createSelector(
//   state => state.products,
//   state => state.user,
//   (products, user) => ({
//   products,
//   user
//   })
// )

const prouctsSelector = createSelector(
  state => state.products,
  products => products
)

const userSelector = createSelector(
  state => state.user,
  user => user
)


const mapStateToProps = createSelector(
  prouctsSelector,
  userSelector,
  (products, user) => ({
  products,
  user
  })
)
console.log(mapStateToProps)

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
  onShowError: showError
}


export default connect(mapStateToProps, mapActionsToProps)(App);