import React, {useState} from "react";
import SingleColor from './SingleColor'

import Values from 'values.js'

function App(){
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList]   = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) =>{
    e.preventDefault();

    try {
      
      const colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
  } catch (error) {
    setError(true);
    console.log(error);
  }
  }
  return (
    <>
    <section className="container">
    <h3>Color generator</h3>

    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={(e)=> setColor(
        e.target.value)} placeholder="#f13343" 
        className={`${error ? 'error' : null}`}/>
    <button className="btn" type="submit">
      submit
    </button>
    </form>
    </section>

    <section>
       {list.map((color, index) => {
        console.log(color)
        return <SingleColor key={index} {...color} index={index} 
        hexColor={color.hex}/>
       })}
    </section>
    </>
  )
}

export default App
