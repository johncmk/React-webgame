const React = require('react')
const { useState, useRef } = React;

const getRandomNumber = () => {
    return Math.ceil(Math.random() * 9)
}

const GugudanHook = () =>
{
    const [first, setFirst] = useState(getRandomNumber())
    const [second, setSecond] = useState(getRandomNumber())
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const inputEl = useRef(null)

    const onSubmitForm = (e) =>
    {
        e.preventDefault();

        if (parseInt(value) === first * second)
        {
            setResult(`정답 ${value}`)
            setFirst(getRandomNumber())
            setSecond(getRandomNumber())
            setValue('')
            inputEl.current.focus()
        }
        else
        {
            setResult(`땡! 입력한 답: ${value}`)
            setValue('')
            inputEl.current.focus();
        }
    };

    const onChangeInput = e => setValue(e.target.value)
    
    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    type="number"
                    value={value}
                    onChange={onChangeInput}
                />
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    )
}

export default GugudanHook;