import React, { memo } from 'react'

// Alternatively you can do:
// const Try = ({<propName>}) =>
// i.e., const Try = ({keyIndex, tryInfo}) =>
const Try = memo(({keyIndex, tryInfo}) => 
{
    return (
        <li>
            <div>{keyIndex}</div>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});

Try.displayName = 'Try'

export default Try;