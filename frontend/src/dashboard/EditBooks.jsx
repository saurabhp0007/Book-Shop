import { useParams,useLoaderData  } from 'react-router-dom'
import { Button,  Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';


const EditBooks = () => {
  const {id} = useParams();
  const {authorName , bookTitle , imageURL , bookDescription , bookPDFUrl} = useLoaderData();
  const BooksCategory = [
    "Fiction",
    "Non-fiction",
    "Self-Help",
    "Biography",
    "History",
    "Travel",
    "Poetry",
    "Science",
    "Math",
    "Religion",
    "Cooking",
    "Art",
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(BooksCategory[0]);

  const handleChangeSelectedValues = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  // handle Book sunmission 

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = selectedBookCategory;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const bookObj ={
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFUrl,
    }
    //update book data 
    fetch(`http://localhost:3000/book/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookObj)
    }).then (res => res.json()).then(() => {
      alert('Book updated successfully');
      form.reset();
    })
   

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='text-3xl font-bold mb-8'>
        Update Books
      </h2>

      <form onSubmit={handleSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
       <div className='flex gap-8'>
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="book name" defaultValue={bookTitle} required />
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" type="text" name='authorName' placeholder="author name" defaultValue={authorName} required />
      </div>
          
       </div>
     
      {/* {second row} */}

      <div className='flex gap-8'>
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" type="text" name='imageURL' placeholder="image url" defaultValue={imageURL} required />
      </div>

      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id='inputState' value={selectedBookCategory} className='w-full rounded' onChange={handleChangeSelectedValues} name='bookCategory'>
            {
              BooksCategory.map((bookCategory) => <option key={bookCategory} value={bookCategory}>{bookCategory}</option>)
            }
        </Select>
      </div>
          
       </div>

       <div>
       <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea className='w-full' id="bookDescription" type="text" name='bookDescription'  defaultValue={bookDescription} placeholder="Write your book description..." rows={7}/>
       </div>


      <div>
      <div className="mb-2 block">
          <Label htmlFor="bookPDFUrl" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFUrl" type="text" name='bookPDFUrl' defaultValue={bookPDFUrl} placeholder="pdf url" required />
        
      </div>

      <Button type='submit' className='mt-5'>
          Update Book Data
        </Button>

     
    </form>
    </div>
  )
}

export default EditBooks