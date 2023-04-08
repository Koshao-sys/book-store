import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookElement from './BookElement';
import BookProgress from './BookProgress';

const ShowBooks = () => {
  const booksItems = useSelector((store) => store.book);
  return (
    <ul className="book-container">
      {Object.entries(booksItems.books).map((item) => (
        <li key={uuidv4()} className="book-item">
          <BookElement item={item} />
          <span className="line-2" />
          <BookProgress />
        </li>
      ))}
    </ul>
  );
};

export default ShowBooks;
