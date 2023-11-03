import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './food.css';
import { Link } from 'react-router-dom';

export default function recipecard(props) {
  let { label, recipecover, source, recipeingredient } = props

  return (

    <div className="card d-flex justify-content-around flex-wrap" style={{ width: '16rem' ,height:'26rem'}}>
      <img src={recipecover} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{label}</h5>
        <button type="button" className='btn'><Link className="text-decoration-none" to={`/user/${source}`} state={{ data: props }}>click</Link></button>
      </div>
    </div>
  );
}
