import { Button, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-books").then((res) => res.json()).then((data) => setAllBooks(data))
  },[])

  // Delete Book function 
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/book/${id}`, {
      method: "DELETE",
    }).then((res) => res.json()).then((data) => {
      if (data.deletedCount > 0) {
        alert("Book deleted successfully");
        const remaining = allBooks.filter((book) => book._id !== id);
        setAllBooks(remaining);
      }
    })
  }

  //return 

  return (
    <div className='px-4 my-12'>
      <h2 className='text-3xl font-bold mb-8'>
        Manage Books
      </h2>
      <div className="overflow-x-auto">
        <Table striped className='w-[1180px]'>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Books name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Prices</Table.HeadCell>
            <Table.HeadCell>
              <span >Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          {
            allBooks.map((book, index) => 
              <Table.Body key={book._id} className='divide-y'>
                <Table.Row key={index} >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell className='font-bold'>{book.bookTitle}</Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>100Rs</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center space-x-5">
                      <Link 
                        to={`/admin/dashboard/edit-books/${book._id}`}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </Link>
                      <Button 
                        onClick={() => handleDelete(book._id)}
                        className='bg-red-500 px-4 py-1 font-semibold text-white rounded hover:bg-sky-600'>
                        Delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            )
          }
        </Table>
      </div>
    </div>
  )
}

export default ManageBooks