import { useEffect, useState } from 'react'
import { Button, Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
      fetch("http://localhost:3000/all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data)); 
  },[])
return (
  <div className='mt-28 px-4 lg:px-24'>
    <h2 className='text-5xl font-bold text-center text-black'>All books are here</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12'>
      {
        books.map(book => 
        // eslint-disable-next-line react/jsx-key
        <Card onClick={() => window.location.href = `/book/${book._id}`}>
          <img src={book.imageURL} className='h-96'/>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.bookTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {book.authorName}
          </p>
          <Button>Shop Now</Button>
        </Card>)
      }
    </div>

  </div>
)
}

export default Shop