import React from 'react'
import { Link } from 'react-router-dom'

export default function Hcard(props) {
    let {image,title,link}=props
  return (
    <div>
        <div>
      {/* <!-- The Code --> */}
      <div className='iclass'>
        <img src={image} className='iclass__img' alt='im is not found' />
        <h2 className='iclass__title'>{title}</h2>
        
        <Link to={link} href='#' className='iclass__link'>Veiw api</Link>
      </div>
    </div>
    </div>
  )
}
