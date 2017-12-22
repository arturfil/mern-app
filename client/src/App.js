import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';

const Header = () => <h2>Header</h2>
const Dasboard = () => <h2>Dasboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" component={Landing} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;