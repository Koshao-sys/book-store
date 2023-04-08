import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, getBooks } from '../redux/features/books/booksSlice';

const AddBooks = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const author = e.target.elements.author.value;
    const title = e.target.elements.title.value;
    const book = {
      item_id: id, title, author, category: '',
    };

    dispatch(addBook(book))
      .then(() => {
        dispatch(getBooks());
      });
  };

  return (
    <div className="form-container">
      <p className="add-book-heading">ADD NEW BOOK</p>
      <form onSubmit={handleClick}>
        <input type="text" placeholder="Book title" name="title" className="input-add-title" required />
        <input type="text" placeholder="Author" name="author" className="input-add-author" required />
        <button type="submit" className="btn-add-book">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBooks;
