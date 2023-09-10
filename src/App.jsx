import './App.css'
import Counter from './Counter';
import Team from './Team';
import Usesrs from './Users';
import Friends from './Friends';
function handleClick(){
  alert('button one clicked')
}
const handleClick2 = () =>{
  alert('button 2 clicke')
}
const addToFive = (num) => {
  alert(num + 5)
}
function App() {
  return (
    <>
    <h2>React Core Concepts Part2</h2>
    
    <Friends></Friends>
    <Usesrs></Usesrs>
    <Team></Team>
    <Counter></Counter>


    <button onClick={handleClick}>One</button>
    <button onClick={handleClick2}>Two</button>
    <button onClick={() =>{
      alert('button 3 clicked')
    }}>Three</button>
    <button onClick={()=> {addToFive(6)}}>Five</button>
    </>
  )
}

export default App
