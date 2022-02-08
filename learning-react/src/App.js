import logo from './logo.svg';
import './App.css';  
import Greeting from './Greeting';
 


const App = () => {
  return (
    <>
    <h1>Hello From React!!!</h1>

      <Greeting 
        name='Larry'
        favoriteNumber={6}
      />

      <Greeting 
        name='Currly'
        favoriteNumber = {42}
      />

      <Greeting 
        name='Moe'
        favoriteNumber = {10}
      />
    </> 
  );
};

export default App;
