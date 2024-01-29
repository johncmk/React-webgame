import React, { Component } from 'react'

class Try extends Component 
{
    render()
    {
        const { keyIndex, tryInfo } = this.props;
        return (
            <li>
                <div>{keyIndex}</div>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        )
    }
}

export default Try;