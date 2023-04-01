import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Books from './components/books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/Categories' element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
