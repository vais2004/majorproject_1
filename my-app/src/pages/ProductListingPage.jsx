import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ProductListingPage(){
    return(
        <>
        <Header/>
        <main className="container py-3">
<div className="row">
    <div className="col-md-4">
        <h4>Filters</h4>

    </div>
    <div className="col-md-8 bg-light">
        <h4>Showing All Products</h4>
    </div>
</div>

        </main>
        <Footer/>
        </>
    )
}