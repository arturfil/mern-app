import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from './hoc/Aux';
import Landing from './components/Landing';
import Header from './components/Header';
import * as actions from './actions/actionTypes';

import './App.css';

const Dasboard = () => <h2>Dasboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Aux>
                <BrowserRouter>   
                    <Aux className="App">
                        <Header />
                        <div className="container">
                            <Route path="/" exact component={Landing} />
                            <Route path="/surveys" exact component={Dasboard} />
                            <Route path="/surveys/new" component={SurveyNew} />
                        </div>
                    </Aux>                 
                </BrowserRouter>
            </Aux>
        )
    }
}

export default connect(null, actions)(App);