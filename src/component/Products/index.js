import {Link } from 'react-router-dom'
import Header from '../Header'
import './index.css'

export default function Products(){
    const productDetails = JSON.parse(localStorage.getItem('products'))
    console.log(productDetails)

    return(
        <>
        <Header />
        <ul className='product-container'>
            {productDetails.map(each => (
                <Link to={`/products/${each.id}`} className='link'>
                <li className='product-card'>
                    <img src={each.img} alt="products" className='product-img' />
                    <h1 className='product-name'>{each.name}</h1>
                    <p className='product-price'>Rs. {each.price}</p>
                </li>
                </Link>
            ))}
        </ul>
        </>
    )
    
}
