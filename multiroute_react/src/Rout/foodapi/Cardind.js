import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Display from './recipecard'
import '../../App.css'



export default function Cardind() {

    const a = { width: '1000px', height: '400px' }
    const b = { backgroundImage: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)' }



    let location = useLocation()

    const data = location.state.data
    return (
        // <div className='w-100'>
        //     <div className="card  w-100">
        //         <div className="card   w-100 mb-3" style={b}>
        //             <div className="row g-0">
        //                 <div className="col-md-4">
        //                     <img src={data.recipecover} className="img-fluid rounded-start" alt="No image found" style={a} />
        //                 </div>
        //                 <div className="col-12">
        //                     <div className="card-body">
        //                         <h5 className="card-title">{data.label}</h5>
        //                         <p className="card-text"><b>Ingredients=</b>
        //                             {data.recipeingredient.map(val => {
        //                                 return <p>{val}</p>
        //                             })
        //                             }</p>
        //                         <button  type="button" ><Link className="text-decoration-none" to='/Recipe' element={<Display/>}>BACK</Link></button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div class="card mb-3 w-100" style={{height:"28rem"}}>
                <div class="row w-100 g-0">
                    <div class="col-md-4">
                        <img src={data.recipecover} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.label}</h5>
                            <p className="card-text text-left"><b>Ingredients</b>
                                {data.recipeingredient.map(val => {
                                    return <p>{val}</p>
                                })
                                }</p>
                            <Link className="btn btn-primary" to='/Recipe' element={<Display />}>BACK</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}