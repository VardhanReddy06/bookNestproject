import React from 'react';

function Cards({ item }) {
  const userId = localStorage.getItem('id');
  const addToCart = async () => {
    

    if (!userId) {
      alert('Please log in to add items to the cart.');
      return;
    }

    const orderData = {
      user: userId,
      book: item._id, 
      seller: item.seller 
    };

    try {
      const response = await fetch(`http://localhost:8000/userorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Order placed successfully:', result);
        alert('Item added to cart');
      } else {
        console.log('Failed to add item to cart:', response.statusText);
        alert('Failed to add item to cart');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred while adding the item to cart');
    }
  };
  const addToWishlist = async () => {
    if (!userId) {
      alert('Please log in to add items to the wishlist.');
      return;
    }
  
    const wishData = {
      user: userId,
      book: item._id
    };
  
    try {
      const response = await fetch('http://localhost:8000/wishlist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wishData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Added to wishlist successfully:', result);
        alert('Item added to wishlist');
      } else if (response.status === 400) {
        const errorMessage = await response.text();
        console.log('Failed to add item to wishlist:', errorMessage);
        alert('Item is already in the wishlist');
      } else {
        console.log('Failed to add item to wishlist:', response.statusText);
        alert('Failed to add item to wishlist');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred while adding the item to wishlist');
    }
  };
  

  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl">
          <figure>
            <img className='h-60' src={item.imageurl} alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}         
            </h2>
            
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              
              <div>
                <button
                  className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 p-2 duration-200"
                  onClick={addToCart}
                >
                  Add to cart
                </button>
                <button onClick={addToWishlist} className=" m-2 badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">Wishlist</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
