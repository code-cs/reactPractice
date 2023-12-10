import logo from './logo.svg';
import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'react',
};
const title = 'React';
function App() {
  return (
    <div className='App'>
      <h1>
        {welcome.greeting} {welcome.title}!
      </h1>
      <label htmlFor='search'> Search</label>
      <input id='search' type='text'></input>
    </div>
  );
}

export default App;
