import React,{useState} from 'react';
import Mentshirts from '../men';
import { Tshirt } from './tshirt';
import './men.css';

export const Men = () => {
  const [filteredtshirt, setFilteredtshirt] = useState(Mentshirts)


  const filterByDepartment = itemm => {
  setFilteredtshirt(
    Mentshirts.filter(itemx => itemx.category === itemm)
      )
    }

  
  const clearFilters = () => {
    setFilteredtshirt(Mentshirts)
    
  }
  
  return (
    
    <div className='menbox'>
      <div className='mencontent text-center'>
          <h1 >MEN'S CLOTHING</h1>
          <p className=''>Athena Graphics men's fashion clothing is designed to complement 
          and style your wardrobe with comfortable clothing. Innovative and 
          performance-driven materials are used in our clothing for men. 
          <span className='d-none d-md-block'>So, you can fully focus on improving your game without having to worry about your style and convenience.
            Let our t-shirts and jackets carry you from work. Lightweight SmarTee track jackets, hooded sweatshirts and cosy coats will 
           keep you warm whatever the weather.fashion clothing with an athleisure edge, pair SmarTee track pants with a go-to pair of chunky trainers 
           and an oversized women's t-shirt with rolled-up sleeves.</span> </p>
      </div>
      <hr/>
      <div className='row justify-content-between ml-0 mr-0 buttons'>
      <div>

      <select
        onChange={e => filterByDepartment(e.target.value)}  className='selector'>
        
        <option value="" disabled selected >
        Catogeries 
        </option>

        
        <option key={'Hoodiee'}>Hoodiee</option>
        <option key={'T-shirt'}>T-shirt</option>
       
       
      </select>

      <select
        onChange={e => filterByDepartment(e.target.value)}  className='selector'>
        
        <option value="" disabled selected >
        Colours 
        </option>

        
        <option key={'Black'}>Black</option>
        <option key={'White'}>White</option>
       
       
      </select>
      
      <button onClick={clearFilters} className='ml-3'>Clear All filters</button>
      </div>
     

      </div>
      <hr/>
      <div className='totalproducts'>
          {filteredtshirt.length}<span> PRODUCTS</span>
      </div>
      <br />
      <br />

    <div className='row mapalign m-0 col-12 justify-content-around'>
      {filteredtshirt.map((tshirt)=>(
        <Tshirt data={tshirt} key={tshirt.id} />
      ))}
    </div>


    </div>
  )
}
