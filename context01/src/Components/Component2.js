import React from "react";
import {Component3} from "./Component3";

export function Component2({message}){
return (
<>
<h1>This is Component 2 {message}</h1> <br></br>
<Component3 message={message} />
</>
)
}