import './App.css';
import {useState} from "react";
import {Loader} from "./components/Loader";
//import {Switch} from 'react-router';
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import SearchBar from './components/SearchBar';
import SideBar from "./components/SideBar";
import DefaultMain from "./components/DefaultMain";
import Chat from './components/Chat';
function App() {
  const [loaded, setLoaded] = useState(true);
  return !loaded ? <Loader/> : (
    <div className="App">
        <div className="Main">
            <div className='left-side'>
                <Header/>
                <SearchBar/>
                <SideBar/>
            </div>
            <div className='right-side'>
                <Routes>
                    <Route path='/' element={<DefaultMain/>}/>
                    <Route path='/chat/:id' element={<Chat/>}/>
                </Routes>
            </div>
        </div>
    </div>
  );
}

export default App;
