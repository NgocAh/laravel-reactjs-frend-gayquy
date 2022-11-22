
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Checkout from '../pages/Checkout'
import Donate from '../pages/Donate'
import ListDonate from '../pages/ListDonate'

const PublicRouter = [
  { path: "/", component: Home },
  { path: "/catalog", component: Catalog },
  { path: "/cart", component: Cart },
  { path: "/catalog/:slug", component: Product },
  { path: "/checkout", component: Checkout },
  { path: "/donate", component: Donate },
  { path: "/listdonate", component: ListDonate },
];





export default  PublicRouter