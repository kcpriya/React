import "./App.css"
import { useState } from "react"

function App(){ 
    const [username, setUsername] = useState("")  // username - variable, setUsername - seterfunction
    // const txtChange = (event) => {
    //     console.log(event.target.value)
    //     setUsername(event.target.value)
    // }
    const [password, setPassword] = useState("")
    return(
        <>
        {/* <input type="text" placeholder="Username" onChange={txtChange} /> */}
         <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} /> 
         <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
         {
            username && password &&
            <p>
                Welcome {username} <br></br>
                The Given Password is {password}
            </p>
         }

        {/* {
            username &&
            <p>Welcome {username}</p>
        }
        {
            password &&
            <p>Given password is {password}</p>
        } */}
        </>
    )
}

// function App(){
//     const okClicked = () => {
//         let userText = document.getElementById("username").value
//         alert("Welcome " +userText)
//     }
//     return (
//         <>
//         <input type="text" id="username" placeholder="Username" />
//         <input type="button" value="Ok" onClick={okClicked} />
//         </>
//     )
// }

export default App