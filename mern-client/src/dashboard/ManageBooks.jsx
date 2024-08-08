import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(() => {
      // Filter out the deleted book from the list
      setAllBooks(prevBooks => prevBooks.filter(book => book._id !== id));
      alert("Book is deleted successfully!");
    })
    .catch(error => console.error('Error deleting book:', error));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-gray-800 dark:text-gray-100">Manage Books</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200 dark:border-gray-700 lg:w-[1000px]">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-gray-700 dark:text-gray-300">No.</th>
              <th className="px-6 py-3 text-gray-700 dark:text-gray-300">Book Name</th>
              <th className="px-6 py-3 text-gray-700 dark:text-gray-300">Author Name</th>
              <th className="px-6 py-3 text-gray-700 dark:text-gray-300">Category</th>
              <th className="px-6 py-3 text-gray-700 dark:text-gray-300">Price</th>
              <th className="px-6 py-3 text-gray-700 dark:text-gray-300">Edit or Manage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {allBooks.map((book, index) => (
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={book._id}>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-400">
                  {book.title}
                </td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-400">
                  {book.author}
                </td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-400">
                  {book.category}
                </td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-400">
                  {book.price}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`} // Use Link for navigation
                    className="mr-5 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="px-4 py-1 font-semibold text-white bg-red-600 rounded-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
