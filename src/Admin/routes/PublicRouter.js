import Dashboard from "../components/Dashboard"
import Profile from "../components/Profile"

const PublicRouter = [
    { path:'/admin'},
    { path: '/dashboard', component: Dashboard},
    { path: '/profile', component: Profile},
]
 export default PublicRouter