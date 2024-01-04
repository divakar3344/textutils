import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
        console.log("Upper was clicked");
        let text2 = text.toUpperCase();
        setText(text2);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick = () =>{
        console.log("Lower was clicked");
        let text2 = text.toLowerCase();
        setText(text2);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleOnChange = (event) =>{
        console.log("handle on change");
        setText(event.target.value)
    }
    const[text,setText] = useState('');
    
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
        </div>

        <div className="container2 my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1> your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} charachters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Somehthing to preview it here"}</p>
        </div>
           
    </>
  )
}
