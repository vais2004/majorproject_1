import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ProductListingPage(){

    const outfits=[
        {
            id:1,
            title:"Men's Denim Jacket",
            imgUrl:'https://images-na.ssl-images-amazon.com/images/I/71ltVJH47%2BL._AC_UL1335_.jpg',
            category:'Men',
            price:'550',
            rating:'4'
        },
        {
            id:2,
            title:"Jeans",
            imgUrl:'https://oldnavy.gap.com/webcontent/0013/063/204/cn13063204.jpg',
            category:'Men',
            price:'320',
            rating:'3'
        },
        {
            id:3,
            title:"T-Shirt",
            imgUrl:'https://i5.walmartimages.com/asr/38ea6606-e5a2-4d29-9ae5-2952d7173b8b_1.44e5c3267324f91822dda55e193abed7.jpeg',
            category:'Men',
            price:'250',
            rating:'2'
        },
        {
            id:4,
            title:"Shirt",
            imgUrl:'https://i.pinimg.com/originals/4e/b7/79/4eb77999f1c9eb7c321b2c961b30edc9.jpg',
            category:'Men',
            price:'450',
            rating:'5'
        },
        {
            id:5,
            title:"Sweetheart Neck Top",
            imgUrl:'https://i5.walmartimages.com/asr/8ba38ab1-4800-48ec-943d-cd6f5eac75e6.6a25ff69eef208f472cd11ecf7b7d9b1.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
            category:'Women',
            price:'250',
            rating:'5'
        },
        {
            id:6,
            title:"Skirt and Top",
            imgUrl:'https://i5.walmartimages.com/asr/ac38e451-b48e-46c6-8cc1-4f6b81c5dd38_1.045c6da88735c8179eeeba8a7ab11dd9.jpeg',
            category:'Women',
            price:'350',
            rating:'2'
        },
        {
            id:7,
            title:"White Short dress",
            imgUrl:'https://cdn.shopify.com/s/files/1/0411/1065/products/Halter_Cocktail_Lace_Lavender_Dress_1024x1024.jpg?v=1466628142',
            category:'Women',
            price:'420',
            rating:'4'
        },
        {   
            id:8,
            title:"Denim Skirt",
            imgUrl:'https://i.pinimg.com/originals/2c/cc/92/2ccc92081e2263c00c1aabbabdd73bc3.jpg',
            category:'Women',
            price:'550',
            rating:'5'
        },
        {
            id:9,
            title:"Dungaree",
            imgUrl:'https://i.pinimg.com/736x/5f/0e/bc/5f0ebcdf99886de36b16461b6c6e17d8.jpg',
            category:'Kids',
            price:'250',
            rating:'3'
        },
        {
            id:10,
            title:"Frock",
            imgUrl:'https://i.pinimg.com/736x/6e/08/0c/6e080c8c10752f3a976845f928bece80.jpg',
            category:'Kids',
            price:'300',
            rating:'2'
        },
        {
            id:11,
            title:"Snowsuit",
            imgUrl:'https://i.pinimg.com/736x/90/ef/d6/90efd6925756d3cee101a449c784a906.jpg',
            category:'Kids',
            price:'550',
            rating:'5'
        },
        {
            id:12,
            title:"Babysuit",
            imgUrl:'https://i.pinimg.com/736x/ae/8d/79/ae8d791a4be0d4831f394f2a8325f2a6.jpg',
            category:'Kids',
            price:'400',
            rating:'4'
        },
    ]

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
        if(handleAddToWishlist.some((item)=>item.id===outfit.id)){
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
                <button onClick={()=>handleAddToCart(outfit)}
                className="btn"
                    style={{backgroundColor:cart.some((item)=> item.id===outfit.id)?'lightgray':'lightblue'}}>
                        {cart.some((item)=>item.id===outfit.id)?'Remove from Cart':'Add to Cart'}
                </button>
            </div>
          </div>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
   </main>
  <Footer/>
 </>
 )
}