import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/features/books/booksSlice';

const BookElement = ({ item }) => {
  const [id, [{ author, title, category }]] = item;
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
          <li>
            <button
              type="submit"
              id="remove"
              onClick={() => dispatch(
                removeBook(id),
              )
                .then(() => {
                  dispatch(getBooks());
                })}
            >
              Remove
            </button>
          </li>
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
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default BookElement;
