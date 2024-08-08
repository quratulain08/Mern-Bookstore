import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  // Fetching the data from the loader
  const { _id, title, author, cover_image_url, description } = useLoaderData();

  return (
    <div className="container p-5 mx-auto my-10">
      <h1 className="mb-5 text-4xl font-bold">{title}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={cover_image_url} alt={title} className="w-full h-auto" />
        </div>
        <div className="md:w-2/3 md:pl-10">
          <h2 className="mt-4 text-2xl font-semibold md:mt-0">Author: {author}</h2>
          <p className="mt-4 text-lg">{description}</p>
          <p className="mt-4 text-lg">ID: {_id}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
