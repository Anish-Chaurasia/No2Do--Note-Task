import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './navbar';
import Todo from './Todo';
import Notes from './Notes';

function App() {
  return (
    <div className='appjscontainer' >

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/note' element={<Notes />} />

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
