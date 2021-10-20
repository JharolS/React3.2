import './App.css';
import Profile from './components/index.js'
import {persons} from './data/index'

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
        <div className="option">
          <h1>Moneer</h1>
          <d>Dashboard</d>
          <d>Account</d>
          <d>State</d>
          <d1>Support</d1>
        </div>
        <div className="info">
          <div style={{marginTop: 15}}>Hello Panji Satrya</div>
          <div className="balance">
            <div>Balance</div>
            <div>$ 7,893.66</div>
            <div>Lorem ipsum dolor sit amet.</div>
          </div>
          <div style={{display: 'flex'}}>
            <div className='Analytics'>Analytics</div>
            <div className='money'>+30.000</div>
          </div>
          <div style={{display: 'flex'}}>
            <div className='with'>
            Lorem ipsum dolor sit amet.
            <button style={{marginTop: 15}}>Withdraw</button>
            </div>
            <div className='stats'>Stats</div>
          </div>
        </div>
        <div className='person'>
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
