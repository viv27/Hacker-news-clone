import logo from './logo.svg';
import './App.css';
import Stories from './Stories'
import SearchForm from './SearchForm'
import Buttons from './Buttons'
function App() {
  return (
    <div className="App">
      <SearchForm/>
      <Buttons/>
      <Stories/>
     
    </div>
  );
}

export default App;
