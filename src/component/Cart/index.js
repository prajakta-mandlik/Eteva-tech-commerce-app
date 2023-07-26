import Header from "../Header";
import './index.css'

const Cart = () => (
    <>
    <Header />
    <div className="cart">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
      className="cart-empty-img"
      alt="cart empty"
    />
    </div>
    </>
)

export default Cart