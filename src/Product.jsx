import React from 'react'
import g1 from './images/g1.webp'; 
import g2 from './images/g2.avif';
import g3 from './images/g3.avif';
import g4 from './images/g4.avif';
import g5 from './images/g5.avif';
import g6 from './images/g6.avif';
import g7 from './images/g7.avif';
import g8 from './images/g8.avif';
import { useState } from 'react';

const Product = () => {
    const [visibleSection, setVisibleSection] = useState('mens');
   
  return (
    <div>
      <div className="product">
        <div className="product1">
          
          <h1 onClick={() => setVisibleSection('mens')} style={{ color: visibleSection === 'mens' ? 'red' : 'black' }}>Womens</h1>
          <h1 onClick={() => setVisibleSection('womens')} style={{ color: visibleSection === 'womens' ? 'red' : 'black' }}>Mens</h1>
          <h1 onClick={() => setVisibleSection('electronics')}  style={{ color: visibleSection === 'electronics' ? 'red' : 'black' }}> Electronics</h1>

        </div>
        <div className="product2">
        {visibleSection === 'mens' && (
        <div className="feature">
        <div className="box">
          <img src={g1} alt="Featured Product" /> 
          <p>$2999</p>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img src={g2} alt="Featured Product" /> 
          <p>$2999</p>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img src={g3} alt="Featured Product" /> 
          <p>$2999</p>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img src={g4} alt="Featured Product" />
          <p>$2999</p> 
          <button>Add To Cart</button>
        </div>
      </div>
        )}
         {visibleSection === 'womens' && (
      <div className="feature">

        <div className="box">
          <img src={g5} alt="Featured Product" /> 
          <p>$2999</p>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img src={g6} alt="Featured Product" /> 
          <p>$2999</p>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img src={g7} alt="Featured Product" /> 
          <p>$2999</p>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img src={g8} alt="Featured Product" />
          <p>$2999</p> 
          <button>Add To Cart</button>
        </div>
      </div>
         )}
          {visibleSection === 'electronics' && (
      <div className="feature" >
        <div className="box">
          <img src={g1} alt="Featured Product" /> 
          <p>$2999</p>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img src={g2} alt="Featured Product" /> 
          <p>$2999</p>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img src={g3} alt="Featured Product" /> 
          <p>$2999</p>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img src={g4} alt="Featured Product" />
          <p>$2999</p> 
          <button>Add To Cart</button>
        </div>
      </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product
