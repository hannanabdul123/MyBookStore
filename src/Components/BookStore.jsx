import React from 'react'
import Carts from './Carts'

function BookStore() {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
         <Search books={list} Query={searchQuery} OnSearch={handleSearch} />
       <Carts SearchQuery={searchQuery} filtercondition={(book) => book.category === 'Free'} />
    </div>
  )
}

export default BookStore