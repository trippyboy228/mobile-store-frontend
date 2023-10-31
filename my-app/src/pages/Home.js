import React, { useEffect,useState } from 'react';
import './Home.css';

import { addToCart } from '../redux/app/features/cartSlice';
import { useDispatch } from 'react-redux';
import Carsual from '../header/Carsual';
import Navbar from '../header/Navbar';
import Footerlast from '../Footer/Footerlast';




const Home=()=>{

    const [data,setData]=useState([]);
    const [productfilterData,setProductFilterData]=useState([])
    const dispatch=useDispatch();

    //add to cart
    const send=(e)=>{
     dispatch(addToCart(e))
    }
    
    const filterProducts= (category)=>{
        if(category === 'all'){
            setProductFilterData(data)
        }else {
            const filtered=data.filter((product)=>product.category === category);
            setProductFilterData(filtered)
        }
         
     }
    const [searchTerm,setSearchTerm]=useState("")

    useEffect(()=>{
        getData();
    },[])
   
      async  function getData (){
            const data = await fetch('http://localhost:3002/fetchapi')
            const json = await data.json()
            setData(json)
            setProductFilterData(json)
        }
    
      

       if(!productfilterData ){return <h1>Loading....</h1>}
    return(<>
    
         <Carsual />

         <br></br>
        <h1 className='textisa'>Mobile Store</h1><br></br>
        <div className='search '>
          <input className=' search_box' type='text' placeholder='Search here...' onChange={e=>setSearchTerm(e.target.value)} />
        </div><br></br>
        <div className=' product' >
            <button  onClick={()=>{filterProducts('all')}} className='btn btn-danger click'>All</button>
            <button   onClick={()=>{filterProducts('Earbuds')}} className='btn btn-danger click'>Earbuds</button>
            <button   onClick={()=>{filterProducts('Watch')}} className='btn btn-danger click'>Watch</button>
            <button   onClick={()=>{filterProducts('Mobile')}} className='btn btn-danger click'>Mobile</button>
            <button   onClick={()=>{filterProducts('Charger')}} className='btn btn-danger click'>Charger</button>
        </div><br></br>
         <div className='form'>
            
           {
            productfilterData.filter((val)=>{
                if(searchTerm === ""){
                    return val ;
                }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            })
               .map((value)=>{
               return(
                    
                    <div className='card' key={value.id}>
                    <img className='card_img' src={value.image} alt="title" />
                    <div >
                        <h3>{value.title}</h3>
                        <h2>{value.category}</h2>
                    </div>
                    <div className='card_price'>
                        <span>Price :₹ {value.price}</span><br></br><br></br>
                        
                        <button className=' btn_add' onClick={()=>send(value)} >Add to Cart</button>
                    </div>
                  </div>
                )
            })
        }
         
      
    </div>
<br></br>
    <Footerlast /> 
    </>)
}
export default Home