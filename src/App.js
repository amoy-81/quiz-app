import './App.css';
import Home from './components/Home';
import Quizs from './components/Quizs';
import Header from './components/Shared/Header';
import ContextProvider from './context/Context.Provider';
import { Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ContextProvider >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizs' element={<Quizs />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
