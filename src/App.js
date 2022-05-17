import './App.css';
import {useState} from "react";
import {Loader} from "./components/Loader";
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import SearchBar from './components/SearchBar';
import SideBar from "./components/SideBar";
import DefaultMain from "./components/DefaultMain";
import Chat from './components/Chat';
import ContactIdContext from "./context/contactIdContext";
function App() {
  const [loaded, setLoaded] = useState(true);
  const indexState = useState(null);
  return !loaded ? <Loader/> : (
    <div className="App">
        <ContactIdContext.Provider value={indexState}>
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
        </ContactIdContext.Provider>
    </div>
  );
}

export default App;
