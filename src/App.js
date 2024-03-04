import './App.css';
import { Profile } from './components/Profile';
import { ToDoList } from './components/ToDoList';
import { Weather } from './components/Weather';

function App() {
  return (
    <div className="App">
      <Profile/>
      <div className='component-container'>
      <ToDoList />
      <Weather />
      </div>
    </div>
  );
}

export default App;
