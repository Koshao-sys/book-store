import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/features/books/booksSlice';

const BookElement = ({ item }) => {
  const {
    item_id: itemId, title, author, category,
  } = item;
  const dispatch = useDispatch();
  return (
    <div className="book-details-container">
      <div className="book-details">
        <p>
          {category}
          {' '}
          <br />
          {' '}
          {title}
          {' '}
          <br />
          {' '}
          {author}
        </p>
        <ul className="book-comments">
          <li><button type="submit" id="comment">Comments</button></li>
          <li><button type="submit" id="remove" onClick={() => dispatch(RemoveBook(itemId))}>Remove</button></li>
          <li><button type="submit" id="edit">Edit</button></li>
        </ul>
      </div>
      <div className="book-status">
        <i>complete</i>
        <p>0% Completed</p>
      </div>
    </div>
  );
};

BookElement.propTypes = {
  item: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookElement;
