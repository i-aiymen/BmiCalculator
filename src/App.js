
import './App.css';
import Form from './components/Form';
import BmiScore from './components/BmiScore'
import BmiList from './components/BmiList'

function App() {
  let bmi = 18;
  const changeBmi = () =>{
    bmi = 19;
    console.log(bmi);
  }
  return (
    <>
    <div>BMI CALCULATOR</div>
    <div>my Bmi is {bmi}</div>
    <button onClick={changeBmi}>Click</button>
    <Form/>
    <BmiScore/>
    <BmiList/>
    </>
  );
}

export default App;
