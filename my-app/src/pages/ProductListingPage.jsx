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
            price:'450',
            rating:'4.2'
        },
        {
            id:3,
            title:"T-Shirt",
            imgUrl:'https://i5.walmartimages.com/asr/38ea6606-e5a2-4d29-9ae5-2952d7173b8b_1.44e5c3267324f91822dda55e193abed7.jpeg',
            category:'Men',
            price:'380',
            rating:'4.2'
        },
        {
            id:4,
            title:"Shirt",
            imgUrl:'https://i.pinimg.com/originals/4e/b7/79/4eb77999f1c9eb7c321b2c961b30edc9.jpg',
            category:'Men',
            price:'400',
            rating:'4.2'
        },
        {
            id:5,
            title:"Sweetheart Neck Top",
            imgUrl:'https://i5.walmartimages.com/asr/8ba38ab1-4800-48ec-943d-cd6f5eac75e6.6a25ff69eef208f472cd11ecf7b7d9b1.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
            category:'Women',
            price:'390',
            rating:'4.2'
        },
        {
            id:6,
            title:"Skirt and Top",
            imgUrl:'https://i5.walmartimages.com/asr/ac38e451-b48e-46c6-8cc1-4f6b81c5dd38_1.045c6da88735c8179eeeba8a7ab11dd9.jpeg',
            category:'Women',
            price:'450',
            rating:'4.2'
        },
        {
            id:7,
            title:"White Short dress",
            imgUrl:'https://cdn.shopify.com/s/files/1/0411/1065/products/Halter_Cocktail_Lace_Lavender_Dress_1024x1024.jpg?v=1466628142',
            category:'Women',
            price:'520',
            rating:'4.2'
        },
        {   
            id:8,
            title:"Denim Skirt",
            imgUrl:'https://i5.walmartimages.com/asr/e6bb3187-70f9-4ad8-bac8-d9c5fe8d2f33.79e50d5d3f45ebe5e002dcaceff0037f.jpeg',
            category:'Women',
            price:'460',
            rating:'4.2'
        },
        {
            id:9,
            title:"Dungaree",
            imgUrl:'https://i1.adis.ws/i/truworths/prod4352970_1',
            category:'Kids',
            price:'450',
            rating:'4.2'
        },
        {
            id:10,
            title:"Frock",
            imgUrl:'https://down-ph.img.susercontent.com/file/cn-11134301-7qukw-lkhwu2szsp86dc',
            category:'Kids',
            price:'500',
            rating:'4.2'
        },
        {
            id:11,
            title:"Frock",
            imgUrl:'https://i5.walmartimages.com/asr/69f2117f-40f9-44f1-b955-f2d619bc91d6_1.600f8a818eec9892c81da1a16cd0f4a3.jpeg',
            category:'Kids',
            price:'550',
            rating:'4.2'
        },
        {
            id:12,
            title:"Frock",
            imgUrl:'https://i5.walmartimages.com/asr/7ded5434-24a8-4a87-a0d6-8fb07a119579_1.923f9577dbff3f985eb6d8292610fc66.jpeg',
            category:'Kids',
            price:'400',
            rating:'4.2'
        },
    ]
    return(
        <>
        <Header/>
        <main className="container py-3">
<div className="row">
    <div className="col-md-3">
        
    <div className="d-flex justify-content-between">
        <h5>Filters</h5>
        <button className="btn btn-outline-warning">Clear Filters</button>
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
        
      /> 
        <br/>
        <br/>
        <h5>Category</h5>
        <label for='men'>
            <input type="checkbox" name='category' value='Men' id='men'/>{' '}Men Clothing
        </label>
        <br/>
        <label for='women'>
            <input type="checkbox" name='category' value='Women' id='women'/>{' '}Women Clothing
        </label>
        <br/>
        <label for='kids'>
            <input type="checkbox" name='category' value='Kids' id='kids'/>{' '}Kids Clothing
        </label>
        <br/>
        <br/>
        <h5>Rating</h5>
        <label for="4Stars"><input type="radio" name="rating" value="4 Stars & above" id="4Stars" /> 4 Star & above</label>
        <br/>
        <label for="3Stars"><input type="radio" name="rating" value="3 Stars & above" id="3Stars" /> 3 Star & above</label>
        <br/>
        <label for="2Stars"><input type="radio" name="rating" value="2 Stars & above" id="2Stars" /> 2 Star & above</label>
        <br/>
        <label for="1Stars"><input type="radio" name="rating" value="1 Stars & above" id="1Stars" /> 1 Star & above</label>
        <br/>
        <br/>
        <h5>Sort by</h5>
        <label for="lowToHigh"><input type="radio" name="sortBy" value="Price-Low To High" id="lowToHigh" /> Price-Low To High
        </label>
        <br/>
        <label for="highToLow"><input type="radio" name="sortBy" value="Price-High To Low" id="highToLow" /> Price-High To Low
        </label>
    </div>

   
    <div className="col-md-9 bg-light py-4 px-4" >
   
  
        <h5>Showing All Products  <small><span> <small>(Showing {outfits.length} products) </small></span></small></h5>
       
        <hr/>
        
        <div className="row">
            {outfits.map((outfit,index)=>(
                <div className="col-md-3 mb-1">
                    <div className="card text-center">
      <img src={outfit.imgUrl} className="card-img-top" alt={outfit.title} style={{height:'250px',width:'200px'}}/>
      
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
        <div className="d-grid gap-2 ">
            <button className="btn btn-outline-primary" type="button">Add to Cart</button>
            <button className="btn btn-outline-secondary" type="button">Remove from Cart</button>
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