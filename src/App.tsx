import Cart from "pages/cart"
import Home from "pages/home"
import { useRecoilValue } from "recoil"
import { routes } from "state/atoms"

const App = () => {

    const exhibition = useRecoilValue(routes)
    return (
        <>
            {exhibition ? <Home /> : <Cart />}
        </>
    )
}

export default App