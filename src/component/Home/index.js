import './index.css'
import {Link} from 'react-router-dom'

import Header from '../Header'

const Home = () => (
        <div className="home">    
        <Header />    
        <div className="home-body">
            <div className="home-content">
                <div>
                    <h1>We Help You To Find Best Products.</h1>
                    <p>Without great Quality It does not matter what something Costs...</p>
                    <Link to='/products'>
                        <button className="shop-btn">
                            Shop Now
                        </button>
                    </Link>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUfdvt0l4tq5x51ysl8s0-QWdSzEdrgAxjg&usqp=CAU"
                    alt="product-img"
                    className="home-img" />
                </div>
            </div>
        </div>
        </div>

    )

export default Home