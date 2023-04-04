import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBooks from './Add-Books';
import ShowBooks from './ShowBooks';
import '../styles/Home.css';

const Home = () => {
  const bookArray = [
    {
      id: { uuidv4 }, title: 'The Hunger Games', author: 'Suzanne Collins', category: 'Action',
    },
    {
      id: { uuidv4 }, title: 'Dune', author: 'Frank Herbert', category: 'Action',
    },
    {
      id: { uuidv4 }, title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins', category: 'Action',
    },
  ];

  return (
    <div className="main-container">
      <ShowBooks booksItems={bookArray} />
      <span className="home-span" />
      <AddBooks />
    </div>
  );
};

export default Home;
