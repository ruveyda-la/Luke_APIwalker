
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div style={{margin:"20px"}}>
        <Form />
        <Routes>
          <Route element={<People />} path="/people/:id"/>
          <Route element={<Planets />} path="/planets/:id"/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
