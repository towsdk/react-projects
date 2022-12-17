import { useState } from "react";
import Question from "./Question";
import data from './Data';

function App() {
const [questions, setQuestion] = useState(data);
  return (
     <main>
        <div className="container">
          <h3>Questions and answers login</h3>
          {questions.map((question)=>{
          return  <Question key={question.id} {...question}/>
          })}
        </div>
    </main>
  );
}

export default App;
