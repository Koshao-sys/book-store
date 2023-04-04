import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../redux/features/books/booksSlice';

const AddBooks = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const author = e.target.elements.author.value;
    const title = e.target.elements.title.value;
    const book = {
      item_id: id, title, author, category: 'Fiction',
    };
    dispatch(AddBook(book));
  };

  return (
    <div className="form-container">
      <p>ADD NEW BOOK</p>
      <form onSubmit={handleClick}>
        <input type="text" placeholder="Book title" name="title" className="input-add-title" />
        <input type="text" placeholder="Author" name="author" className="input-add-author" />
        <button type="submit" className="btn-add-book">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBooks;
