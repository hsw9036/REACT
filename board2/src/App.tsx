import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BoardList from './BoardList';
import Write from './Write';

function App() {
  return (
    <div className='App'>
      <BoardList/>
      <Write />
    </div>
  );
}

export default App;