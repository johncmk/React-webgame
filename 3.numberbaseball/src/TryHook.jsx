import React from 'react'

// Alternatively you can do:
// const Try = ({<propName>}) =>
// i.e., const Try = ({tryInfo}) =>
const Try = (props) =>
{
    const { keyIndex, tryInfo } = props;
    return (
        <li>
            <div>{keyIndex}</div>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
}

export default Try;