import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { useAppDispatch } from './app/hooks';
import actions from './consts/actions';
import Hour from './view/content/Hour';
import Today from './view/content/Today';
import Week from './view/content/Week';
import Search from './view/search/Search';
import Sidebar from './view/sidebar/Sidebar';

function App() {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch({
      type: actions.GET_WEATHER, weatherParam: { lat: 21.0207, lon: 105.8432 }
    });
  }, [dispatch]);

  return (
    < div className="app" >
      <Sidebar />
      <div className="content">
        <div className="top-bar">
          <div className="top-bar__right">
            <Search />
          </div>
        </div>


        <div className="content-main">
          <Routes>
            <Route path='/' element={<Today />} />
            <Route path='/week' element={<Week />} />
            <Route path='/hour' element={<Hour />} />
          </Routes>
        </div>


      </div>
    </div>

  );
}

export default App;
