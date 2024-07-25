import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleNewClick=()=>{
        let newText = ""
        for(let element of text)
        {
            if(element === element.toUpperCase())
                {
                    newText+=element.toLowerCase();
                }
                else if(element === element.toLowerCase())
                {
                    newText+=element.toUpperCase();
                }
        }
        setText(newText)
    }

    const handleOnChnage = (event) =>{
        // console.log("Handle On Chnage");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    // setText("new world");
    return (
        <>
        <div className = "container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChnage} value = {text} id="my box" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to lower case</button>
            <button className="btn btn-success mx-2" onClick={handleNewClick}>Convert to inverse case</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} letters</p>
            <p>{0.008*text.split(" ").length} can be read in minutes</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </>
        

    )
}
