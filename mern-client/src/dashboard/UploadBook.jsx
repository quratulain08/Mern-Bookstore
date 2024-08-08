import React, { useState } from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';

const UploadBook = () => {
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
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [imageError, setImageError] = useState(false);

  // Handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const author = form.author.value;
    const category = form.category.value;
    const description = form.description.value;
    const coverImageUrl = form.cover_image_url.value;
    const pdfUrl = form.pdf_url.value;

    const bookObj = {
      title,
      author,
      category,
      description,
      coverImageUrl,
      pdfUrl,
    };
    console.log(bookObj);

    //send data to database
    fetch('http://localhost:5000/upload-book', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Book Uploaded Successfully!');
        form.reset();
        setCoverImageUrl(''); // Reset image preview
        setImageError(false); // Reset error state
      });
  };

  // Handle changes in selected category
  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // Handle changes in cover image URL
  const handleCoverImageUrlChange = (event) => {
    setCoverImageUrl(event.target.value);
    setImageError(false); // Reset error state when the URL changes
  };

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>
      <form
        onSubmit={handleBookSubmit}
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
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
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
              <Label htmlFor="cover_image_url" value="Book Image URL" />
            </div>
            <TextInput
              id="cover_image_url"
              name="cover_image_url"
              type="text"
              placeholder="Book Cover Image URL"
              required
              value={coverImageUrl}
              onChange={handleCoverImageUrlChange}
            />
          </div>
        </div>

        {/* Image Preview */}
        {coverImageUrl && (
          <div className="mt-4">
            <Label value="Cover Image Preview" />
            <img
              src={coverImageUrl}
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

export default UploadBook;
