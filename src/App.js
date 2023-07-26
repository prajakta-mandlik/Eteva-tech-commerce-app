import {Route, Routes,BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './component/Home'
import Products from './component/Products'
import ProductDetails from './component/ProductDetails'
import Cart from './component/Cart'

const data = [
  {
    id: 1,
  img : 'https://m.media-amazon.com/images/I/61NnqBU61hL._SX679_.jpg',
  descrip : 'Latest 40dB Active Noise Cancelling Headphones: Music, streaming or talking…the Crossbeats Roar 2.0 Bluetooth headphones is a great product with benchmark active noise cancelling audio. With Ambient and ANC modes, you can switch between two different worlds to experience world class audio. With 35dB noise cancelling, these ANC headphones wireless are a must have gadget.',
  name : "Headphones",
  brand: 'CrossBeats',
  price: '750',
  },
  {
      id: 2,
      img : 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
      name : "Smart Watch",
      descrip : 'Bluetooth Calling- Wave Call comes with a premium built-in speaker and bluetooth calling via which you can stay connected to your friends, family, and colleagues.Dial Pad- Its dial pad is super responsive and convenient. You can also save upto 10 contacts in this smart watch.Screen Size- Wave Call comes with a 1.69” HD Display that features a bold, bright, and highly responsive 2.5D curved touch interface. Always on Display: No Resolution- With 550 nits of brightness get sharper color resolution that brightens your virtual world exponentially.',
      price: '1500',
      brand: 'Boat'
  },
  {
      id:3,
      img : 'https://m.media-amazon.com/images/I/51kbTcuZtXL._SX679_.jpg',
      name : "Bottle",
      descrip: 'PACKAGE CONTENT- Pack of 1 PCS Fridge Water Bottle, Material : Stainless Steel:Sipper Cap, Capacity : 1000Ml, Color : Pastel Pink.WHY THIS -: These 1 litre bottle can be best water bottles that can be gifted as travel water bottle or drinking water bottle or school bottle or car water bottles or office, school, home, or gym.Stainless Steel Sipper bottle - This is not a Copper water bottle, thermos flask, temperature bottle, thermosteel bottle . This is sipper bottle for adults. Water Bottles 1 litre is easy to carry.',
      price: '500',
      brand: 'Speedex'
  },
  {
      id:4,
      img : 'https://m.media-amazon.com/images/I/515gKnUgwpL._UX679_.jpg',
      name : "Sunglasses",
      descrip: 'Branded Smooth Leg Covers Lightweight Square Kabir Singh Sunglasses are suitable for boys and men with small and medium faces.Size : 55 mm, Free Size fit to all adults Size : 55 mm, Free Size fit to all adults with small and medium faces, not suitable for too big faces. Very Suitable if You have a Trendy Beard on your face. Smooth Leg Covers, Which doesnt hurt your ears.',
      price: '800',
      brand: 'ELEGANTE'
  },
  {
      id:5,
      img : 'https://m.media-amazon.com/images/I/61CjaTfTCPL._AC_UL600_FMwebp_QL65_.jpg',
      name : "Skin Care",
      price: '750',
      descrip : 'Hyaluronic acid and Arbutin in natural vita rich face cream deeply penetrates the skin to reduce the appearance of pigmentation.Vitamin c rich kakadu plum and hyaluronic acid in natural vita rich face serum work together to stimulate the production of collagen and reduce fine lines and wrinkles.Coffee oil in the natural vita rich under eye cream, rich in antioxidants, repairs and rejuvenates the under eye area.',
      brand:'The Moms'
  },
  {
    id:6,
    img : 'https://m.media-amazon.com/images/I/91owkFmUxpL._SX679_.jpg',
    name : "Wallet",
    price: '250',
    descrip : 'This compact wallet comes in a convenient dimensions of 11.5 x9.3 x 01(L x W x H) cms which is not at all bulky. The size is just perfect to fit in your pocket with ease or to be kept in your travel bag. It is a perfect combination of size and space with numerous compartments for all your cards , bills, receipts and also a photo of your loved one. LEATHER: A mans wallet should be contemporary, masculine and durable.',
    brand:'WildHorn'
  },
  {
    id:7,
    img : 'https://m.media-amazon.com/images/I/71dNeK5ujbL._SX679_.jpg',
    name : "Stand",
    price: '4,999',
    descrip : 'Engineered from steel to be strong yet lightweight. The display stand neatly hold your hair dryer and its magnetic attachments, with one click.Stores your Supersonic hair dryer and holds up to 3 attachments. Made from steel.',
    brand:'Dyson'
  },
  {
    id:8,
    img : 'https://m.media-amazon.com/images/I/71rMdHAZD5S._SX679_.jpg',
    name : "Hair Dryer",
    price: '1,299',
    descrip : '2000 Watts Hair Dryer with powerful AC motor creates ideal airflow & temperature for salon-style results.2 Speed and 3 Temperature settings for convenient styling, Includes Cool & Hot Air.Includes Cool Shot Button that provides a burst of cold air to help set the desired hairstyle.Auto Shut-Off Function for Over Heating Protection.Comes with Diffuser, Concentrator Nozzle, Comb and 2.5 meter Long Cord',
    brand:'AGARO'
  },
  {
    id:9,
    img : 'https://m.media-amazon.com/images/I/51pVnJpXdGL.jpg',
    name : "Home Decor",
    price: '1,250',
    descrip : 'Products are designed to fulfill needs and desires of consumers.They come in various shapes, sizes, colors, and functionalities.The quality, price, and performance of a product are key factors in its success.This Products is user-friendly and easy to use',
    brand:'Generic'
  },
  {
    id:10,
    img : 'https://m.media-amazon.com/images/I/71Hb7DR4DuL._SX679_.jpg',
    name : "Round Brush",
    price: '3,998',
    descrip : 'Designed to create volume and shape as you style, the brush features round-tip bristles for scalp comfort, a weighted handle for balance, and a vented barrel for even heat distribution.For medium to long hair',
    brand:'Dyson'
  },

]

localStorage.setItem('products',JSON.stringify(data));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path = '/products/:id' element = {<ProductDetails />}></Route>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path="/products" element={< Products />}></Route>
      <Route exact path="/cart" element={< Cart />}></Route>

    </Routes>
    </BrowserRouter>
)
  
export default App;
