import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Productbox from './productbox'
import Openpage from './openpage'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(null)

  

  const object1  = [{
    prouduct : "H&M",
    details : "Loose Fit Applique Varsity Jacket",
    price : "1078",
    backgroundimage: "src/assets/H&M.jpeg"

  }
 ,{
    prouduct : "Levi's",
    details : "Men's 505 Blue Straight Fit ",
    price : "3999",
    backgroundimage: "src/assets/LEVIS.webp"

  }
  ,{
    prouduct : "Worng",
    details : "White Printed Slim Fit T-shirt",
    price : "2999",
    backgroundimage: "src/assets/WORNG.webp"

  }
,{
    prouduct : "Roadster",
    details : "Men Black & Grey Graphic ",
    price : "999",
    backgroundimage: "src/assets/ROADSTER.jpeg"

  }
 ,{
    prouduct : "Snitch",
    details : "Korean Baggy Loose Fit Pants ",
    price : "2200",
    backgroundimage: "src/assets/SNITCH.webp"

  }
,{
    prouduct : "Zara",
    details : "REGULAR FIT TEXTURED SHIRT",
    price : "4999",
    backgroundimage: "src/assets/ZARA.jpeg"

  },{
    prouduct : "Levi's",
    details : "Men's 505 Blue Straight Fit ",
    price : "3999",
    backgroundimage: "src/assets/LEVIS.webp"

  }
  ,{
    prouduct : "Worng",
    details : "White Printed Slim Fit T-shirt",
    price : "2999",
    backgroundimage: "src/assets/WORNG.webp"

  }
,{
    prouduct : "Roadster",
    details : "Men Black & Grey Graphic ",
    price : "999",
    backgroundimage: "src/assets/ROADSTER.jpeg"

  }
 ,{
    prouduct : "Snitch",
    details : "Korean Baggy Loose Fit Pants ",
    price : "2200",
    backgroundimage: "src/assets/SNITCH.webp"

  }
,{
    prouduct : "Zara",
    details : "REGULAR FIT TEXTURED SHIRT",
    price : "4999",
    backgroundimage: "src/assets/ZARA.jpeg"

  }
]
 
  return (

<div>
  
 { value?(<Openpage page2value={value}/> ):(
 <div className='container1'>
  { object1.map((user,index)=> (
    <Productbox onClick={() => setValue(user)} productdetail  ={user}/> 
       ))}
   </div>)}
   </div>
  )
}

export default App
