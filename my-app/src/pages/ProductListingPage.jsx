import {useFetch} from'../useFetch'
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

export default function ProductListingPage(){
const dispatch = useDispatch()
    const [outfits,setOutfits]=useState([])
    const {outfitId}=useParams()

    useEffect(()=>{
        const fetchOutfits=async()=>{
            try{
                const response = await axios('https://mystylespot-backend.onrender.com/outfit')
                // const response = await fetch(`https://mystylespot-backend.onrender.com/outfit`)


                // if(!response.ok){
                //     throw 'failed to fetch product details.'
                // }
                // const data =await response.json()
                console.log('data',response.data)
                setOutfits(response.data)
            }catch(error){
                console.log(error)
            }    
        }
        fetchOutfits()
    },[])

    const [filters,setFilters]=useState({
        priceRange:550,
        categories:[],
        rating:null,
        sortBy:''
    })

    const [selectedCategory, setSelectedCategory]=useState([])
    const [selectRating,setSelectedRating]=useState(null)
    const [priceRange, setPriceRange]=useState(550)
    const [sortBy, setSortBy]=useState("")


    const filteredOutfits=outfits.filter((outfit)=>{
       const matchesCategory = selectedCategory.length===0|| selectedCategory.includes(outfit.category)
       const matchesRating = selectRating === null || outfit.rating >= selectRating;
       const matchesPrice= outfit.price <= priceRange


       return matchesCategory && matchesRating && matchesPrice
    })

    const handleCategoryChange=(e)=>{
        const {value,checked}=e.target;
        setSelectedCategory((prev)=> checked? [...prev, value]: prev.filter((category)=> category !== value))
    }

    const handleRatingChange = (e) => {
        setSelectedRating(parseFloat(e.target.value));
      };

    const handlePriceChange=(e)=>{
        setPriceRange(parseInt(e.target.value, 10))
    }

    const handleSortChange=(e)=>{
        setSortBy(e.target.value);
    }

    const [cart, setCart] = useState([]);
    const [wishlist,setWishlist]=useState([])

    const handleAddToCart =(outfit)=>{
        if(cart.some((item)=> item.id ===outfit.id)){
            //to removing from cart
            setCart(cart.filter((item)=> item.id !== outfit.id))
        }else{
            //to add to the cart
            setCart([...cart, outfit])
        }
    }

    const handleAddToWishlist=(outfit)=>{
        if(wishlist.some((item)=>item.id===outfit.id)){
            //to remove from wishlist
            setWishlist(wishlist.filter((item)=> item.id !== outfit.id))
        }else{
            //to add to the wishlist
            setWishlist([...wishlist, outfit])
        }
    }

    return(
        <>
        <Header/>
        <main className="container-fluid py-3">
        {outfits?(
            <div className="row">
      <div className="col-md-3">  
    <div className="d-flex justify-content-between">
        <h5>Filters</h5>
        <button className="btn btn-outline-warning" onClick={()=>{setSelectedCategory([]); setSelectedRating(null);
        setPriceRange(550)
        }}>Clear Filters</button>
        </div>
        <br/>
        <br/>
        <h5>Price</h5>
       
        
        <div className="d-flex justify-content-between">
        <span>350</span>
        <span>450</span>
        <span>550</span>
    </div>
    <input
        type="range"
        className="form-range"
        id="priceSlider"
        min="350"
        max="550"
        step="100"
        value={priceRange}
        onChange={handlePriceChange}
        
    /> 
        <br/>
        <br/>

    <h5>Category</h5>
        <label for='men'>
            <input type="checkbox" name='category' value='Men' id='men' onChange={handleCategoryChange} checked={selectedCategory.includes("Men")}/>{' '}Men Clothing
        </label>
        <br/>
        <label for='women'>
            <input type="checkbox" name='category' value='Women' id='women' onChange={handleCategoryChange} checked={selectedCategory.includes("Women")}/>{' '}Women Clothing
        </label>
        <br/>
        <label for='kids'>
            <input type="checkbox" name='category' value='Kids' id='kids' onChange={handleCategoryChange} checked={selectedCategory.includes("Kids")}/>{' '}Kids Clothing
        </label>
        <br/>
        <br/>
    <h5>Rating</h5>
        <label for="4Stars"><input type="radio" name="rating" value="4" id="4Stars" onChange={handleRatingChange} checked={selectRating ===4} /> 4 Star & above</label>
        <br/>
        <label for="3Stars"><input type="radio" name="rating" value="3" id="3Stars" onChange={handleRatingChange} checked={selectRating ===3} /> 3 Star & above</label>
        <br/>
        <label for="2Stars"><input type="radio" name="rating" value="2" id="2Stars" onChange={handleRatingChange} checked={selectRating ===2} /> 2 Star & above</label>
        <br/>
        <label for="1Stars"><input type="radio" name="rating" value="1" id="1Stars" onChange={handleRatingChange} checked={selectRating ===1} /> 1 Star & above</label>
        <br/>
        <br/>
    <h5>Sort by</h5>
        <label for="lowToHigh"><input type="radio" name="sortBy" value="Price-Low To High" id="lowToHigh" onChange={handleSortChange} checked={sortBy === 'Price-Low To High'} /> Price-Low To High
        </label>
        <br/>
        <label for="highToLow"><input type="radio" name="sortBy" value="Price-High To Low" id="highToLow" onChange={handleSortChange} checked={sortBy === 'Price-High To Low'} /> Price-High To Low
        </label>
    </div>

   
    <div className="col-md-9 bg-light py-4 px-4" >
  
    <h5>Showing All Products  <small><span> <small>(Showing {filteredOutfits.length} products) </small></span></small></h5>
       
        <hr/>
        
        <div className="row">
            {filteredOutfits.map((outfit,index)=>(
                <div className="col-md-3 mb-1">
                    <div className="card text-center">
      <img src={outfit.imgUrl} className="card-img-top" alt={outfit.title} style={{height:'275px',width:'250px'}}/>
      
      <div className="card-body">
      <hr/>
        <h6>{outfit.title}</h6>
        <h5>₹ {outfit.price}</h5>
        {/* <div className="btn-center">
          <button className="btn btn-primary btn-sm">Add to Cart</button>
          <br/>
          <br/>
          <button className="btn btn-outline-secondary btn-sm">Remove from Cart</button>
        </div> */}
        {/* <div className="d-grid gap-2 ">
            <button className="btn btn-outline-primary" type="button">Add to Cart</button>
            <button className="btn btn-outline-secondary" type="button">Remove from Cart</button>
           </div> */}


         {  /*modify button */}
           
            <div className="d-grid gap-2">
                <button onClick={()=>{
                    console.log('click',outfit)
                    dispatch(addToCart({ outfitId: outfit._id, quantity: 1 }))
                }}
                className="btn"
                    style={{backgroundColor:cart.some((item)=> item.id===outfit.id)?'lightgray':'lightblue'}}>
                        {cart.some((item)=>item.id===outfit.id)?'Remove from Cart':'Add to Cart'}
                </button>
            </div>
          </div>5
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
        ):(
            <p className="alert alert-primary" role="alert">Loading Products List...</p>
        )}
    
   </main>
  <Footer/>
 </>
 )
}