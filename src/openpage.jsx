import { useState } from "react"

function Openpage({ page2value }) {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');
    const printvalue=()=>{
        setUsers([...users, user])
    }
    return (
        <div className="container2">
            <div className='productbox2'>
                <div className="productimage2" style={{
                    backgroundImage: `url(${page2value.backgroundimage})`
                }}></div>
                <div className="productdetail2">
                    <h1>{page2value.prouduct} </h1>
                    <p>{page2value.details} </p>
                    <h2>Rs. {page2value.price}</h2>
                    <input type="text" on onChange={(event) => setUser(event.target.value)}></input>

                    <button onClick={printvalue}>SAVE</button>
                    {
                        users.map((item ,index)=>(
                        <h2 key={index}>{item}</h2>))
                    }


                </div>
            </div>
        </div>
    )
}

export default Openpage