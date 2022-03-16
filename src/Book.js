import React from 'react'

//Book Component
const SpecificBook = ({title, author, img, price, children})=>{
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert(`Confirm add to cart / Price: ${price}`);
  }
  return <article className='book'>
    <img src={img} alt="" onClick={()=>{alert(`Book Title: ${title} / Description: ${children} / Price: ${price}`)}}/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    <h3>{price}</h3>
    <p>{children}</p>
    <button type="button" onClick={clickHandler}>
      Buy Now
    </button>
  </article>
}

export default SpecificBook
