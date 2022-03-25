import './App.css';
import './null__style.css'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Content/Profile/Profile';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Content/Dialogs/Dialogs';
import Music from './components/Content/Music/Music';
import News from './components/Content/News/News';
import Settings from './components/Content/Settings/Settings';


function App() {  
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <NavBar />
          <div className='app_content'>
            <Routes>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/dialogs' element={<Dialogs />}></Route>
              <Route path='/music' element={<Music />}></Route>
              <Route path='/news' element={<News />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
            </Routes>
          </div>
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
