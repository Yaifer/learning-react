import logo from './logo.svg';
import './App.css';  
import Greeting from './Greeting';
 


const App = () => {
  return (
    <>
    <h1>Hello From React!!!</h1>
    <h1>Hello Moe!</h1>
    <Greeting name='Larry'/>
    <Greeting name='Currly'/>
    <Greeting name='Moe'/>
    </> 
  );
}

export default App;
