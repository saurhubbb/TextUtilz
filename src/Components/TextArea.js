import React,{useState} from 'react'

export default function TextArea(props) {

    const handleOnClickUpper=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Text converted to Uppercase', 'success')  //Using function from App.js

    }
    const handleOnClickLower=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('Text converted to Lowercase', 'success')

    }
    const handleOnClickClear=()=>{
        let newText=""
        setText(newText)
    }
    const handleOnClickCopy=()=>{
        let copyText=document.getElementById("myBox")
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();  //remove selection of text
        props.showAlert('Text Copied to Clipboard', 'success')
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Spaces ahs been removed', 'success')

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)

    }
    const[text,setText] = useState("")
    var len=text.split(/\s+/).filter((element)=>{return element.length!==0}).length
    return (
        <>
            <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <label className={props.textMain}><h2>{props.Exampletextarea}</h2> </label>
                <textarea value={text} className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="3"></textarea>
            </div>
            <button disabled={text.length===0} type="button" className="btn btn-primary me-2 mb-2" onClick={handleOnClickUpper}>Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary me-2 mb-2" onClick={handleOnClickLower}>Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary me-2 mb-2" onClick={handleOnClickCopy}>Copy Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary me-2 mb-2" onClick={handleExtraSpaces}>Remove ExtraSpace</button>
            <button disabled={text.length===0} type="button" className="btn btn-danger mb-2" onClick={handleOnClickClear}>Clear</button>

            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text Summary:</h2>
                <p>{len} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}