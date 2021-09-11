
import './App.css';
import Form from './components/Form';
import BmiScore from './components/BmiScore'
import BmiList from './components/BmiList'
import { useState } from 'react';

function App() {
  const [bmi, setbmi] = useState(18)
  // const changeBmi = () =>{
  //   setbmi(bmi +10)
  //   console.log(bmi);
  // }
  return (
    <>
    <div>BMI CALCULATOR</div>
    <button onClick={() => setbmi(bmi + 10)}>Click</button>
    <Form/>
    <BmiScore bmiNo={bmi}/>
    <BmiList/>
    </>
  );
}

export default App;
