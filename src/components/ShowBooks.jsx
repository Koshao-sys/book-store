import React from 'react';
import PropTypes from 'prop-types';
import BookElement from './BookElement';
import BookProgress from './BookProgress';

const ShowBooks = ({ booksItems }) => (
  <ul className="book-container">
    {booksItems.map((book) => (
      <li key={book.id} className="book-item">
        <BookElement item={book} />
        <span>|</span>
        <BookProgress />
      </li>
    ))}
  </ul>
);

ShowBooks.propTypes = {
  booksItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ShowBooks;
