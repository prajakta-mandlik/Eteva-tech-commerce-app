import {Link} from 'react-router-dom'

const Header = () =>(
    <>
    <nav className="navbar">
        <div className="nav-content">
            <Link to="/">
                <img src="https://images.pngnice.com/download/2007/E-Commerce-PNG-Transparent.png" 
                    alt="e-commerce"
                    className="ecommerce-img" />
            </Link>
            <ul className="nav-items">
            <li className="nav-menu-item">
              <Link to = "/" className='link'>
                Home
                </Link>
            </li>

            <li className="nav-menu-item">
               <Link to="/products" className='link'>Products</Link> 
            </li>

            <li className="nav-menu-item">
               <Link to = "/cart" className='link'> Cart </Link>
            </li>
          </ul>
            </div>
        </nav>
        <hr />
        </>
)

export default Header