import { useState } from 'react'
import './App.css'

function App(){
    const [username, setUsername] = useState("Pirya")
    const [email, setEmail] = useState("priya@gmail.com")
    const [contact, setContact] = useState("8976665432")
    const [password, setPassword] = useState(null)
    
    
    const formSubmitted = (event) => {
        alert("Form Submitted")
        setUsername(event.target.username.value)
        setEmail(event.target.email.value)
        setContact(event.target.contact.value)
        setPassword(event.target.password.value)
        event.preventDefault()
    }
    return (
        <>
        <h1>Signup Form</h1>
        <form method='POST'action='/create'>
            <input type='text' name='username' placeholder='Username' /> <br></br>
            <input type='email' name='email' placeholder='email@example.com' /> <br></br>
            <input type='contact' name='contact' placeholder='9807654321' /> <br></br>
            <input type='password' name='password' placeholder='Passsword' /> <br></br>
            <input type='Submit' value='Submit' /> <br></br>
        </form>
        {
            username && email && contact && password &&
            <p>
                The Given Values are <br></br>
                Username : { username } <br></br>
                Email : {email} <br></br>
                Contact : { contact} <br></br>
                Passsword : { password}
            </p>
        }
        </>
    )
}

export default App