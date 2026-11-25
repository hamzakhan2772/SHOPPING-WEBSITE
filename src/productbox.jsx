import { useState } from "react"
function Productbox({ productdetail ,onClick }) {
    
    return (
        <div >
            <div className='productbox' onClick={onClick} >
                <div className="productimage" style={{
    backgroundImage: `url(${productdetail.backgroundimage})`
}}>
                    <h1></h1>
                </div>
                <div className="productdetail">
                    < h2>{productdetail.prouduct}</h2>
                    <p>{productdetail.details} </p>
                    <h2>Rs. {productdetail.price}</h2>
                </div>
            </div>
        </div>
    )
}

export default Productbox
