import React, { Component } from 'react';
import { render } from 'react-dom';
import { _ } from 'lodash';
import { BrowserRouter as Router, Redirect, Link, Route } from 'react-router-dom';
// Components
import FormCreate from './Suggestions/FormCreate/Index.js';
import List from './Suggestions/List/Index.js';
// Styles
import './less/style.less';

const App = () => (
    <Router>
        <div className="app-wrapper">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/list">List</Link></li>
                        <li><Link to="/create">Create</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="container">
                <Route path="/create" component={FormCreate}/>
                <Route exact path="/list" component={List}/>
                <Redirect to="/list" />
            </div>
        </div>
    </Router>
);


// render(<Dashboard />, document.getElementById('app'));
render(<App />, document.getElementById('app'));