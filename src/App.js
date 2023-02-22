import Home from './routes/Home/home';
import { Route , Routes } from 'react-router-dom';
import NavBar from './routes/Nav-Bar/nav-bar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<NavBar /> }>
          <Route index element = {<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
