import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { getBooks, removeBook } from '../redux/features/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const BookElement = ({ item }) => {
  const [id, [{ author, title, category }]] = item;
  const dispatch = useDispatch();
  const percentage = Math.floor(Math.random() * 100);
  return (
    <div className="book-details-container">
      <div className="book-details">
        <div>
          <p className="category-name">{category}</p>
          <p className="title-name">{title}</p>
          <p className="author-name">{author}</p>
        </div>
        <ul className="book-comments">
          <li><button type="submit" id="comment">Comments</button></li>
          <li><span className="line-1" /></li>
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
          <li><span className="line-1" /></li>
          <li><button type="submit" id="edit">Edit</button></li>
        </ul>
      </div>
      <div className="book-status">
        <div style={{ width: 50, height: 50 }}>
          <CircularProgressbar value={percentage} />
        </div>
        <div className="percent">
          <p className="percent-value">{`${percentage}%`}</p>
          <p className="completed">Completed</p>
        </div>
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
