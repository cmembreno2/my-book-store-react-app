import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {data} from './books';
import SpecificBook from './Book';

//Set up vars
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

function BookList(){
  return (
  <section className='booklist'>
    {data.map((book,index)=>{
      return <SpecificBook key={book.id} {...book}>{description}</SpecificBook>
    })}
  </section>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));