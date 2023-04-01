import React from 'react';

const AddBooks = () => (
  <div className="form-container">
    <p>ADD NEW BOOK</p>
    <form>
      <input type="text" placeholder="Book title" className="input-add-title" />
      <input type="text" placeholder="Author" className="input-add-author" />
      <button type="submit" className="btn-add-book">ADD BOOK</button>
    </form>
  </div>
);

export default AddBooks;
