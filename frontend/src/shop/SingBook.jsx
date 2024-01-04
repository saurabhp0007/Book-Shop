import { useLoaderData } from 'react-router-dom';

const SingBook = () => {
  // Fetch data using useLoaderData
  const {  authorName, imageURL, category, bookDescription, bookTitle, bookPDFUrl } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3">
          <img src={imageURL} alt={bookTitle} className="rounded-lg mb-4 lg:mb-0 lg:mr-8" />
        </div>
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-2">{bookTitle}</h2>
          <p className="text-gray-600">Author: {authorName}</p>
          <p className="text-gray-600">Category: {category}</p>
          <p className="text-gray-700 mt-4">{bookDescription}</p>
          <a href={bookPDFUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default SingBook;
