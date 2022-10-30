import './App.css';
//import Chore from './components/Chore'; 
//import ChoreForm from './components/ChoreForm';
import ChoreList from './components/ChoreList';


function App() {
  return (
    <div className='app-chores'>
      <div className='primary-list-chores'>
        <h1> Mis Tareas </h1>
        <ChoreList />
      </div>
    </div>
  );
}

export default App;
