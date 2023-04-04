import React from 'react';
import AddBooks from './Add-Books';
import ShowBooks from './ShowBooks';
import '../styles/Home.css';

const Home = () => (
  <div className="main-container">
    <ShowBooks />
    <span className="home-span" />
    <AddBooks />
  </div>
);

export default Home;
