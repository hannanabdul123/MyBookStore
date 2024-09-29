import React, { useState } from 'react';

function Search({ books,Query,OnSearch }) {
  

  // Filter books based on the search query
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(Query.toLowerCase())
  );
 const [hide,Sethide]=useState(true);
  const handlBookSelect=(bookname)=>{
    OnSearch(bookname);
    Sethide(false);
  }
  const handleInputSearch=(e)=>{
    OnSearch(e.target.value)
    Sethide(true);
  }
  
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Type book name..."
        className="text-white px-3 md:px-2 py-2 w-40 md:w-40 lg:w-64 h-10 outline-none border border-black  rounded-md md:mb-2"
        value={Query}
        onChange={handleInputSearch}
          
         
        
      />

   
      {hide&&Query && filteredBooks.length > 0 && (
        <ul className="absolute   bg-white dark:bg-slate-900 text-black dark:text-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-auto">
          {filteredBooks.map((book) => (
            <li key={book.id} className="py-2 px-4 hover:bg-gray-200 hover:text-black cursor-pointer"
            onClick={()=> handlBookSelect(book.name) }
            >
            
              {book.name}
            </li>
          ))}
        </ul>
      )}
      
     
      {Query && filteredBooks.length === 0 && (
        <ul className="absolute z-10 bg-white dark:bg-slate-900 text-black dark:text-white border border-gray-300 rounded-md mt-1 w-full">
          <li className="py-2 px-4">No books found</li>
        </ul>
      )}
    </div>
  );
}

export default Search;
