import React,{useState} from 'react'

export default function Form(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was changed"+text); 
        let newText=text.toLocaleUpperCase();
        settext(newText)
    }
    const handleLoClick =()=>{
      console.log("Lowercase was changed"+text); 
      let newText=text.toLocaleLowerCase();
      settext(newText)
  }
  const handlereverseClick =()=>{
    console.log("Revsercase was changed"+text); 
    let newText=text.split('').reverse().join('');
    settext(newText)
}

const  handleclearClick=()=>{
  console.log("Clear Text"+text); 
  let newText=' ';
  settext(newText)
}


    const handleOnChange =(Event)=>{
        console.log("On change"); 
        settext(Event.target.value);
    }
    
    const [text, settext] = useState('');
  return (
    <>
    <div>
    <div className="mb-3">
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="text w-100"  id="text" value={text} onChange={handleOnChange}rows="1" ></textarea>
  </div>
  <div className='d-flex justify-content-between'>
  <button className='btn btn-success my-3  '  onClick={handleUpClick}>Convert To Uppercase</button>
 
  <button className='btn btn-success my-3 ' onClick={handleLoClick}>Convert To Lowercase</button>

  <button className='btn btn-success my-3' onClick={handlereverseClick}>Convert To Reverse  </button>

  <button className="btn btn-success my-3" onClick={handleclearClick} >Clear Text</button>
  </div>
  </div> 
  
 

  <table class="table table-striped-columns">
    <tbody>
  <thead>
    <tr>
      <th scope="col"><h2>Feature of Our Website</h2></th>
    </tr>
  </thead>
  
    <tr>
      <td class="table-info"><p>{text.split(" ").length} Number of Words</p></td>
    </tr>
    <tr class="table-info">
    <p>{text.length} Number of Charater</p>
    </tr>
    <tr class="table-info">
      <td><p>{0.008 * text.split(" ").length}Minutes To Read</p></td>
    </tr>
    <tr class="table-info">
    <h2>Preview</h2>
  <p>{text}</p>
    </tr>
  </tbody>
  </table>

</div>

</>
)
}
