import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChnage = (event) =>{
        // console.log("Handle On Chnage");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    // setText("new world");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChnage} value = {text} id="my box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
        </div>
    )
}
