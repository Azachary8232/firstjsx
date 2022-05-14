import './App.css';

import PersonCard from './components/PersonCard';
import LightSwitch from './components/LightSwitch';


function App() {
  return (
    <div>
      <PersonCard  firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}>
      <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
      </PersonCard>
      <LightSwitch/>

    </div>
  );
}

export default App;
