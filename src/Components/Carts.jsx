
import list from '../../public/list.json';

function Carts({SearchQuery,filtercondition}) {
    const Freebook=list.filter((book)=>{
      
      const matchesFilterCondition = filtercondition(book);

 // If there's no search query, return books that match the filter condition

    if (!SearchQuery) {
      return matchesFilterCondition;
    }
    const matchesSearchQuery =SearchQuery.length>0 && book.name?.toLowerCase().includes(SearchQuery.toLowerCase());

    return matchesFilterCondition && matchesSearchQuery;
    
    });

  return (
    <div className='carousel rounded-box'>
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 gap-5  flex-col md:flex-row  '>
      {Freebook.map((book) => (
        <div className='  w-80 transition-transform ease-in-out duration-300 transform hover:scale-105' key={book.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          
          
          <img src={book.image} alt={book.name} style={{ 
            
            width: '100%',
            height: 'auto',
  

           }} 
          
          />
          <div className='space-y-4'>
           <div className='flex space-x-4'>
           <h2 className='font-bold'>{book.name}</h2>
           {book.price==0?(<p className='font-medium  border rounded-full  w-12 bg-fuchsia-600 flex justify-center text-white'>Free</p>):null}
           </div>
          
          <p className=''>{book.title}</p>
           <div className='flex justify-between '>
           <p
  className={` text-gray-500 font-medium border border-gray-600 rounded-full flex justify-center ${
    book.price < 50
      ? 'w-12'
      : book.price < 100
      ? 'w-16'
      : 'w-20'
  }`}
>
  ${book.price}
</p>
  
           <button className='bg-white text-black dark:bg-dark-background dark:text-dark-text font-medium'>Buy Now</button>
           </div>
         
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Carts