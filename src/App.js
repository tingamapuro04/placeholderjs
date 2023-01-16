import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { getData } from './features/dataSlice';
import './App.css';
import Posts from './components/Posts';

function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getData())
  })
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
