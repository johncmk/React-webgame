const React = require('react');
const { Component } = React;

class WordRelay extends Component
{
    state = {
        test: 'Hello, webpack'
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.test}</h1>
            </div>
        )
    }
}

module.exports = WordRelay;