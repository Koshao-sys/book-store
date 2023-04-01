import React from 'react';
import PropTypes from 'prop-types';

const BookElement = (props) => {
  const { item } = props;
  return (
    <div className="book-details-container">
      <div className="book-details">
        <p>
          {item.category}
          {' '}
          <br />
          {' '}
          {item.title}
          {' '}
          <br />
          {' '}
          {item.author}
        </p>
        <ul className="book-comments">
          <li><button type="submit" id="comment">Comments</button></li>
          <li><button type="submit" id="remove">Remove</button></li>
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
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookElement;
