import React from 'react';
import { Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Home from '../home';
import SingleButton from '../single-button';
import AlphaList from '../alpha-list';
import CategoryList from '../category-list';
import RandomList from '../random-list';
import Results from '../results';

const App = props => (
    <div>
        <AppBar title="Demonstration of Hick's Law" showMenuIconButton={false} />

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/single" component={SingleButton} />
            <Route exact path="/alpha" component={AlphaList} />
            <Route exact path="/category" component={CategoryList} />
            <Route exact path="/random" component={RandomList} />
            <Route exact path="/results" component={Results} />
        </main>
    </div>
);

export default App;
