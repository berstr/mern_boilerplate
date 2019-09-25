import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './button.js';

class App extends React.Component {

    render() {
        const val = Date();
        return (
            <div>
                <div> { this.props.msg} - {val} !! </div>
                <p/>
                <MyButton title="button A"></MyButton><p/>
                <MyButton title="button B"></MyButton><p/>
                <MyButton title="button C"></MyButton><p/>
                <MyButton title="button D"></MyButton>
                </div>    
        );
    }
}

ReactDOM.render(<App msg="MERN with New Relic - Boilerplate"/>, document.getElementById('root'));