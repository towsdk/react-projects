import './App.css';
import List from './List';
import data from './data';
import { useState } from 'react';
function App() {

  const [people, setPeople] = useState(data);
  return (
    <main>
     <section className='container'>
        <h3>{people.length}Birthday reminder Today</h3>
        <List people={people}/>
        <button onClick={()=> setPeople([])}>Clear All</button>
     </section>
    </main>
  );
}

export default App;
