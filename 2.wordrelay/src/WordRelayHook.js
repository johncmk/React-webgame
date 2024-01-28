import { React, useState, useRef } from 'react'

const WordRelayHook = () =>
{
    const [word, setWord] = useState('기러기')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const inputEl = useRef(null)
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length-1] === value[0])
        {
            setResult('딩동댕')
            setWord(value)
            setValue('')
            inputEl.current.focus()
        }
        else
        {
            setResult('땡')
            setValue('')
            inputEl.current.focus()
        }
    }


    const onChangeInput = (e) =>
    {
        setValue(e.currentTarget.value)
    }
    
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputEl} value={value} onChange={onChangeInput}/>
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

export default WordRelayHook;