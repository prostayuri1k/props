import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';


function App() {

  let person = {
    name: 'Yury',
    age: 25,
    isMan: true,
  }

  const arr = [1, {name: 'Yury'}, 3, 4];

  const obj = {city: 'Minsk', street: 'Odoevskogo'};

  const func = () => `Hello, REDEV!`;

  return (
    <div className="App">
      <Component1 name={person.name} age={person.age} isMan={`${person.isMan}`} />
      <Component2 arr={JSON.stringify(arr)} obj={JSON.stringify(obj)} func={func}/>
      <Component3 btn="OK" />
      <Component4 text="Введите запрос"/>
      <Component5 name='Katya' surname="Hrymats" />
    </div>
  );
}

export default App;

