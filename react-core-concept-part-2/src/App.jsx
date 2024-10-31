
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
function handleClick(){

  alert('button clicked');


}

const handleClick2 = () => {
  alert('button 2 clicked');

}

const addToFive = (num) =>{
  alert(num + 5);
}

  return (
    <>
 
      <h3>React Core Concept 2</h3>
    <Friends></Friends>
<Users></Users>

     <br />
    <Counter></Counter>

     <br />
     <Team></Team>
     <br />

      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>click 2</button>

      <button onClick={() => {alert('third clicked')}}>click 3</button>

       {/* vejailla  */}
       <button onClick={() => addToFive(3)}>Four</button>

    </>
  )
}

export default App
