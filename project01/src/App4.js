import { useState } from "react";
import "./App.css"

function App(){
    const [fruit, setFruit] = useState("mango")
    const [gender, setGender] = useState(null)
    let hobbies = []
    const setHobby = (event) => {
        if(event.target.checked){
            hobbies.push(event.target.value)
        }else{
            hobbies = hobbies.filter((item)=>{
                if(item!==event.target.value){
                    return item
                }
            })
        }

        console.log(hobbies);

    }
    
    return (
        <>
        <h3>Select Hobbies</h3>
        <input type="checkbox"  value="cricket" onChange={(e)=>{setHobby(e)}}/>Cricket<br></br>
            <input type="checkbox"  value="football" onChange={(e)=>{setHobby(e)}}/>Football<br></br>
            <input type="checkbox"  value="volleyball" onChange={(e)=>{setHobby(e)}}/>Volleyball<br></br>
             

        {/* <h3>Select Gender</h3>
        <input type="radio" name="gender" value="male"
            onClick={(e)=>{setGender(e.target.value)}}/> Male <br></br>
            <input type="radio" name="gender" value="female"
            onClick={(e)=>{setGender(e.target.value)}}/> Female <br></br>
            <input type="radio" name="gender" value="other"
            onClick={(e)=>{setGender(e.target.value)}}/> Other <br></br>

            {
               <p> Selected gender is {gender}</p>
            }
         */}
        
        {/* <select value={fruit} onChange={(e)=>{setFruit(e.target.value)}}>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="mango">Mango</option> 
        </select>
        {
            <p>The Selected Gender is {fruit}</p>
        } */}
        </>
    )
}
export default App