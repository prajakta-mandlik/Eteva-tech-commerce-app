import { useParams, Link } from "react-router-dom"
import './index.css'
import Header from '../Header'

const ProductDetails = () => {
    const {id} = useParams()


    const ItemDetails = JSON.parse(localStorage.getItem('products'))

    const filteredData = ItemDetails.filter(each => (each.id === parseInt(id)))
    const{img, name, descrip, price,brand} = filteredData[0]

    return(
        <>
        <Header />
        <div className="item-card">
            <img src={img} alt="item-img" className="item-img"/>
            <div className="content">
                <h1>{name}</h1>
                <p className="descrip">{descrip}</p>
                <p className="brand"><span>Brand: </span> {brand}</p>
                <p className="price"><span>Rs.</span> {price}</p>
                <Link to="/cart">
                <button className="cart-btn">
                    Add to Cart
                </button>
                </Link>
            </div>
        </div>
        </>
    )

}

export default ProductDetails