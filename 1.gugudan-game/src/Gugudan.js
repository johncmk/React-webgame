import React, { Component } from 'react'


class Gugudan extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: '',
        };
    }

    onSubmit = (e) =>
    {
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second)
        {
            this.setState((prevState) => {
                return {
                    result: `정답: ${prevState.value}`,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: '',
                };
            });
            this.inputNumber.focus();
        }
        else
        {
            this.setState({
                result: '땡',
                value: '',
            });
            this.inputNumber.focus();
        }
    }

    onChange = (e) =>
    {
        this.setState({ value: e.target.value })
    };

    onRefInputFocus = (c) =>
    {
        this.inputNumber = c
    }

    inputNumber;

    render()
    {
        return (
            <>
                <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInputFocus} type="number" value={this.state.value} onChange={this.onChange}/>
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>  
        );
    }
}

export default Gugudan;