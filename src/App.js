import './App.css';
import Profile from './components/index.js'
import {persons} from './data/index'

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
        <div>
          <h1>Moneer</h1>
          <d>Dashboard</d>
          <d1>Account</d1>
          <d2>State</d2>
          <d3>Support</d3>
        </div>
        <div>
          {persons.map(person =>(
            <Profile
              src={person.src}
              name={person.name}
              state={person.state}
              Your last transaction
              money={person.money}
              transaction={person.transaction}
              balance={person.balance}
              additional={person.additional}
              showAdditional={person.showAdditional}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
