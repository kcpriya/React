//import { Component1 } from "./Components/Component1";
import { useState, useRef, useEffect } from "react";

function App() {
    const [inputValue, setInputValue] = useState("")
    const count = useRef(0)
    const myInput = useRef(0) 
    //let count = 1

    useEffect(() => {
        console.log("Calling");
         count.current = count.current + 1
         //count = count + 1
    });

    return (
        <>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>

        <input id="myInput2" ref={myInput} type="text" value="Some Text" /> <br></br>

        <input type="button"
        onClick={(e)=>{
            myInput.current.value = "Hello world"
            myInput.current.stlye = "color: red"
            // document.getElementById("myInput2").value = "Mother Earth"
        }}
        value="Change Color "/>
        </>
    );
}
export default App;
