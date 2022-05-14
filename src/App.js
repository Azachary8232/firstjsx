import './App.css';

import PersonCard from './components/PersonCard';
import LightSwitch from './components/LightSwitch';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Counter/>
      <PersonCard  firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
      </PersonCard>
      <PersonCard  firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <LightSwitch/>


    </div>
  );
}

export default App;
