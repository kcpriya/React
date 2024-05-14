// import logo from './logo.svg';
import './App.css';
//import Person from './components/Person';
//import Box from './components/Box';
// import ScoreBoard from './components/ScoreBoard';
// import Garrage from './components/Garrage';
import ProductCard from './components/ProductCard';


function App() {
  const items = [
    {title: "Watch", desc: "Titan Watch", price: "450.50"},
    {title: "Pen", desc:"Parder Pen", price:"600.50"}
  ]

  // const name = null
  // const age = 20
  // const fruits = ["Apple", "Orange", "Grape", "Guava"]
  return(
    <>
    {
      items.map((item)=>{
        return <ProductCard
        title = {item.title}
        desc = {item.desc}
        price = {item.price}
        ></ProductCard>
      })
    }

    {/* <ol>
    {
      fruits.map((fruit)=>{
        return <li>{fruit}</li>
      })
    }
  </ol> */}

  {/* <Garage />
  <Garage length="5" /> */}

  {/* how to render html code in js */}
  {/* {
    name && age &&
    <h1>This will display</h1>
  }
  {
    name &&
    <h1>Name is {name}</h1>
  } */}
  {/* <ScoreBoard isScored="true" /> */}
    </>
  )
}

// function App() {
//   const buttonClicked = () => {
//     alert("I'm Clicked")
//   }
//   const buttonClicked2 = (event) => {
//     console.log(event.target)
//     event.target.value = "Button is Off"
//     event.target.style = "color: red"
//   }
//   return (
//     <div className="App">
//       < Person
//       name= "Kratos"
//       age= "20"
//       />
//       {/* Event */}
//       <input type='button' value= "Click Here" onClick={ buttonClicked } /> <br></br>
//       <input type='button' value= "Button is On" onClick={ buttonClicked2 } /> <br></br>    
//     </div>
//   );
// }

export default App;
