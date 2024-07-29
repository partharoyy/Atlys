import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className='min-h-screen bg-backgroundBlack font-inter'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
