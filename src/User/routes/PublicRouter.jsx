
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Checkout from '../pages/Checkout'
import Donate from '../pages/Donate'


// const Router = () => {
//   return (
//     <Routes>
//             <Route path='/' element={<Home />}/>
//             <Route path='/catalog' element={<Catalog />}/>
//             <Route path='/cart' element={<Cart/>}/>
//             <Route path='/catalog/:slug' element={<Product />}/>
//     </Routes>
//   )
// }

const PublicRouter = [
  { path: "/", component: Home },
  { path: "/catalog", component: Catalog },
  { path: "/cart", component: Cart },
  { path: "/catalog/:slug", component: Product },
  { path: "/checkout", component: Checkout },
  { path: "/donate", component: Donate },
];

// const PublicRouter = () => {
//   return [
//     { path: "/", component: Home },
//     { path: "/catalog", component: Catalog },
//     { path: "/cart", component: Cart },
//     { path: "/catalog/:slug", component: Product },
//   ];
// };



export default  PublicRouter