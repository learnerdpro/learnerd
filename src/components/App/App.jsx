import React from 'react';
import CSSModules from 'react-css-modules';
import style from './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="collin">Collin is Great</div>
        );
    }
}


export default CSSModules(App, style, {allowMultiple: true});