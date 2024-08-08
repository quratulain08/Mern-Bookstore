import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';

const EditBooks = () => {
  const { id } = useParams();

  // Get the book details using loader data
  const { title, author, category, description, cover_img_url, pdf_url } = useLoaderData();

  // Book categories
  const bookCategories = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'Science Fiction',
    'Thriller',
    'Fantasy',
    'Romance',
    'Horror',
    'Suspenseful',
    'Biography',
    'History',
    'Self-help',
    'Feel-Good',
    'Business',
    'Education',
    'Children Books',
    'Travel',
    'Religion',
    'Art and Design',
  ];

  // State to track form input values
  const [bookDetails, setBookDetails] = useState({
    title: title || '',
    author: author || '',
    category: category || bookCategories[0],
    description: description || '',
    cover_img_url: cover_img_url || '',
    pdf_url: pdf_url || '',
  });

  const [imageError, setImageError] = useState(false);

  // Handle form submission
  const handleUpdate = (event) => {
    event.preventDefault();

    // Construct the updated book object
    const updatedBook = { ...bookDetails };

    // Update data in the database
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Book updated successfully!');
        setImageError(false); // Reset error state
      })
      .catch((error) => {
        console.error('Error updating book:', error);
        alert('There was an error updating the book. Please try again.');
      });
  };

  // Handle input changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    if (name === 'cover_img_url') {
      setImageError(false); // Reset error state when the URL changes
    }
  };

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1000px] flex-col flex-wrap gap-4"
      >
        {/* First row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput
              id="title"
              name="title"
              type="text"
              value={bookDetails.title}
              onChange={handleInputChange}
              placeholder="Book name"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="author" value="Author Name" />
            </div>
            <TextInput
              id="author"
              name="author"
              type="text"
              value={bookDetails.author}
              onChange={handleInputChange}
              placeholder="Author name"
              required
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={bookDetails.category}
              onChange={handleInputChange}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="cover_img_url" value="Book Image URL" />
            </div>
            <TextInput
              id="cover_img_url"
              name="cover_img_url"
              type="text"
              placeholder="Book Cover Image URL"
              value={bookDetails.cover_img_url}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Image Preview */}
        {bookDetails.cover_img_url && (
          <div className="mt-4">
            <Label value="Cover Image Preview" />
            <img
              src={bookDetails.cover_img_url}
              alt="Book Cover Preview"
              onError={handleImageError}
              className="w-auto mt-2 rounded shadow-md max-h-64"
              style={{ maxWidth: '100%', objectFit: 'contain' }}
            />
            {imageError && (
              <p className="text-red-500">
                Image failed to load. Please check the URL.
              </p>
            )}
          </div>
        )}

        {/* Third row */}
        <div>
          <div className="block mb-2">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea
            id="description"
            name="description"
            placeholder="Write Your Book Description..."
            value={bookDetails.description}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full"
          />
        </div>

        {/* Book PDF URL */}
        <div>
          <div className="block mb-2">
            <Label htmlFor="pdf_url" value="Your PDF URL" />
          </div>
          <TextInput
            id="pdf_url"
            name="pdf_url"
            type="text"
            placeholder="Book PDF URL"
            value={bookDetails.pdf_url}
            onChange={handleInputChange}
            required
          />
        </div>

        <Button type="submit" className="mt-5 bg-teal-500">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
