
import './App.css';
import Form from './components/Form';
import BmiScore from './components/BmiScore'
import BmiList from './components/BmiList'
import { useState } from 'react';

function App() {
  const [bmi, setbmi] = useState("")
  const [bmiType, setbmiType] = useState("")
  // const changeBmi = () =>{
  //   setbmi(bmi +10)
  //   console.log(bmi);
  // }
  return (
    <>
    <Form/>
    <BmiScore bmiNo={bmi} bmiName={bmiType}/>
    <BmiList/>
    </>
  );
}

export default App;
