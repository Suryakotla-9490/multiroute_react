import React from 'react'
import './Home.css';
import image1 from '../image/covid.png';
import image2 from '../image/reciepe.png';
import image3 from '../image/animeicon.png';
import Hcard from './Hcard';


export default function Home() {
  return (
    // <div>
    //   {/* <!-- The Code --> */}
    //   <div className='iclass'>
    //     <img src={image1} className='iclass__img' alt='im is not found' />
    //     <h2 className='iclass__title'>Crypto</h2>
    //     <div className='iclass__content'>
    //       {/* <!-- Product Size --> */}
    //       <div className='iclass__sizeContainer'>
    //         <p className='iclass__sizeTitle'>Size:</p>
    //         <span className='iclass__sizeNumber'>7</span>
    //         <span className='iclass__sizeNumber'>8</span>
    //         <span className='iclass__sizeNumber'>9</span>
    //         <span className='iclass__sizeNumber'>10</span>
    //       </div>
    //       {/* <!-- Product Color --> */}
    //       <div className='iclass__colorContainer'>
    //         <p className='iclass__colorTitle'>Color:</p>
    //         <span className='iclass__colorCircle' style={{backgroundColor: '#9bdc28'}}></span>
    //         <span className='iclass__colorCircle' style={{backgroundColor: '#03a9f4'}}></span>
    //         <span className='iclass__colorCircle' style={{backgroundColor:'#e91e63'}}></span>
    //       </div>
    //     </div>
    //     <a href='#' className='iclass__link'>Buy Now</a>
    //   </div>
    // </div>
    <div className='d-flex justify-content-around mt-5'>
      <Hcard image={image1} title={"Covid"} link='/Covid'/>
      <Hcard image={image2} title={"Reciepe" } link='/Recipe'/>
      <Hcard image={image3} title={"Anime"} link='/Anime' />
    </div>

  )
}
