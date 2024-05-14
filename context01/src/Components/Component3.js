import { useContext } from "react";
import { MyContext } from "./Component1";

export function Component3(){
    const {data1, data2, data3} = useContext(MyContext)
return (
<>
<h1> This is Component 3 {data1}</h1> <br></br>
<h1>
{data1} <br></br>
{data2} <br></br>
{data3}
</h1>
</>
)
}