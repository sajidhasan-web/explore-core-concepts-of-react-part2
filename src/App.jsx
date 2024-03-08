import './App.css'
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
function App() {
  
  function handleclick1(){
    alert('cliked from btn 1');
  }
  const handleclick2 = () =>{
    alert('clicked form btn 2')
  }

  const addToFive = (num) =>{
    alert (num + 5)
  }

  return (
    <>
      <h3>React Core Concepts Part: 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>

      <button onClick={handleclick1}>Click 1</button>
      <button onClick={handleclick2}>Click 2</button>
      <button onClick={() =>{alert('clicked from btn3')}}>Click 3</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Click 4</button>
      
    </>
  )
}

export default App
