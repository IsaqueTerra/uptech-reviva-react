import Cart from 'pages/cart'
import Home from 'pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    )
}

export default AppRouter