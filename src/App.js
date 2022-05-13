import './App.css';

import PersonCard from './components/PersonCard';


function App() {
  return (
    <div>
      <PersonCard  firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}>
      <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
      </PersonCard>
      <PersonCard  firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}>
      <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
      </PersonCard>
      <PersonCard  firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}>
      <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
      </PersonCard>
      <PersonCard  firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}>
      <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
      </PersonCard>
    </div>
  );
}

export default App;
