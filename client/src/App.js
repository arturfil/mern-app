import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Aux from './hoc/Aux';
import Landing from './components/Landing';
import Header from './components/Header';

import './App.css';

const Dasboard = () => <h2>Dasboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
    render() {
        return (
            <Aux>
                <BrowserRouter>   
                    <Aux className="App">
                        <Header />
                        <Route path="/" exact component={Landing} />
                        <Route path="/surveys" exact component={Dasboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </Aux>                 
                </BrowserRouter>
            </Aux>
        )
    }
}

export default App;