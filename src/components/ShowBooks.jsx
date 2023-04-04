import React from 'react';
import { useSelector } from 'react-redux';
import BookElement from './BookElement';
import BookProgress from './BookProgress';

const ShowBooks = () => {
  const booksItems = useSelector((store) => store.book);
  return (
    <ul className="book-container">
      {booksItems.books.map((item) => (
        <li key={item.item_id} className="book-item">
          <BookElement item={item} />
          <span>|</span>
          <BookProgress />
        </li>
      ))}
    </ul>
  );
};

export default ShowBooks;
